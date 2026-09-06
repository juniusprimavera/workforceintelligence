import { expect, test, type Locator, type Page } from '@playwright/test';

const DYNAMIC_IMPORT_FAILURE = /(?:dynamic(?:ally)? imported module|import.*failed|failed to fetch.*module)/i;
const DETAIL_PANEL_TIMEOUT = 15_000;
const KEYBOARD_WORKSPACES = [
  { view: 'dashboard', heading: 'Capability review' },
  { view: 'employees', heading: 'Employees' },
  { view: 'review', heading: 'Data Validation Queue' },
  { view: 'skills', heading: 'Skill Intelligence' },
  { view: 'comparison', heading: /Evidence report/i },
] as const;

test('the fresh demo entry has no missing resources', async ({ browser }) => {
  const context = await browser.newContext({
    baseURL: test.info().project.use.baseURL,
  });
  const page = await context.newPage();
  const failedInitialLoadRequests: string[] = [];
  const missingInitialLoadResources: string[] = [];

  page.on('requestfailed', (request) => {
    failedInitialLoadRequests.push(
      `${request.resourceType()} ${request.url()}: ${request.failure()?.errorText ?? 'request failed'}`,
    );
  });
  page.on('response', (response) => {
    if (response.status() < 400) return;

    const requestDescription = `${response.status()} ${response.request().resourceType()} ${response.url()}`;
    failedInitialLoadRequests.push(requestDescription);
    if (response.status() === 404) {
      missingInitialLoadResources.push(requestDescription);
    }
  });

  await mockValidationReads(page);

  try {
    await page.goto('/workforce-intelligence/', { waitUntil: 'domcontentloaded' });
    await expect(page.getByRole('heading', { name: 'Capability review' })).toBeVisible();
    await expect(page.getByTestId('workspace-loading')).toHaveCount(0);
    await expect(page.getByTestId('dashboard-charts-loading')).toHaveCount(0);
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'Review capability sheets', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Skill Intelligence' })).toBeVisible();

    expect(
      missingInitialLoadResources,
      `unexpected 404 resources during initial load (all failed requests: ${failedInitialLoadRequests.join('; ')})`,
    ).toEqual([]);

    const navigation = page.locator('nav[aria-label="Workspace navigation"]').first();
    await navigation.getByRole('button', { name: 'Employees', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Employees' })).toBeVisible();
    await expect(page.getByText(/records shown/)).toBeVisible();

    await navigation.getByRole('button', { name: 'Data Validation', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Data Validation Queue' })).toBeVisible();
    await expect(page.getByText(/In sequence/)).toBeVisible();
    await expect(page.getByRole('button', { name: /Review evidence|Reopen case/ }).first()).toBeVisible();
  } finally {
    await context.close();
  }
});

test('validation filters are local and raw evidence stays read-only', async ({ browser }) => {
  const context = await browser.newContext({
    baseURL: test.info().project.use.baseURL,
  });
  const page = await context.newPage();
  await mockValidationReads(page);

  try {
    await page.goto('/workforce-intelligence/', { waitUntil: 'domcontentloaded' });
    const navigation = page.locator('nav[aria-label="Workspace navigation"]').first();

    await navigation.getByRole('button', { name: 'Employees', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Employees' })).toBeVisible();
    await expect(page.getByPlaceholder('Find a person or role')).toBeVisible();
    await expect(page.getByLabel('Filter source issue')).toHaveCount(0);
    await expect(page.getByLabel('Filter identity confidence')).toHaveCount(0);

    await navigation.getByRole('button', { name: 'Data Validation', exact: true }).click();
    await expect(page.getByPlaceholder('Find a person, role, or case')).toBeVisible();
    await expect(page.getByLabel('Filter identity confidence')).toBeVisible();
    await expect(page.getByLabel('Filter validation reason')).toBeVisible();
    await expect(page.getByLabel('Filter local decision status')).toBeVisible();

    await page.getByLabel('Filter identity confidence').selectOption('medium');
    await page.getByRole('button', { name: /Immediate/ }).click();
    await expect(page.getByRole('button', { name: /Clear filters \(2\)/ })).toBeVisible();
    await page.getByRole('button', { name: /Clear filters \(2\)/ }).click();
    await expect(page.getByRole('button', { name: /All cases \(101\)/ })).toHaveAttribute('aria-pressed', 'true');

    await navigation.getByRole('button', { name: 'Decision Desk', exact: true }).click();
    await page.getByRole('button', { name: `View 102 gaps →`, exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Skill Intelligence' })).toBeVisible();
    await expect(page.getByLabel('Filter capability focus')).toHaveValue('critical-gaps');

    await navigation.getByRole('button', { name: 'Decision Desk', exact: true }).click();
    await page.getByRole('button', { name: 'Raw', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Source readiness' })).toBeVisible();
    await page.getByRole('button', { name: `View 88 records →`, exact: true }).click();

    await expect(page.getByRole('heading', { name: 'Data Validation Queue' })).toBeVisible();
    await expect(page.getByLabel('Filter source issue')).toHaveValue('missing_skill_data');
    await expect(page.getByText('88', { exact: true }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Confirm', exact: true })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Hold', exact: true })).toHaveCount(0);

    await page.getByRole('button', { name: 'Inspect source', exact: true }).first().click();
    const detailPanel = page.getByTestId('employee-detail-panel');
    await expect(detailPanel).toBeVisible();
    await expect(detailPanel.getByText('Raw source record')).toBeVisible();
    await expect(detailPanel.getByRole('button', { name: 'Confirm', exact: true })).toHaveCount(0);
    await expect(detailPanel.getByRole('button', { name: 'Hold', exact: true })).toHaveCount(0);
  } finally {
    await context.close();
  }
});

test('dashboard validation summaries reconcile to the correct casebooks', async ({ browser }) => {
  const context = await browser.newContext({
    baseURL: test.info().project.use.baseURL,
  });
  const page = await context.newPage();
  await mockValidationReads(page);

  try {
    await page.goto('/workforce-intelligence/', { waitUntil: 'domcontentloaded' });
    await expect(page.getByRole('heading', { name: 'Capability review' })).toBeVisible();
    await expect(page.getByTestId('dashboard-charts-loading')).toHaveCount(0);

    await expectMetric(page, 'High-confidence profiles', '114');
    await expect(page.getByText('High data confidence; this is not the total number of validation cases', { exact: true })).toBeVisible();
    await expectMetric(page, 'Total profiles', '200');
    await expectMetric(page, 'Require human review', '101');
    await expectMetric(page, 'Urgent review', '64');
    await expectMetric(page, 'Normal review', '37');
    await expectMetric(page, 'No review required', '99');

    await page.getByRole('button', { name: 'View 64 urgent →', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Data Validation Queue' })).toBeVisible();
    await expect(page.getByText('Dataset B: Resolved evidence', { exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Immediate (64)', exact: true })).toHaveAttribute('aria-pressed', 'true');

    const navigation = page.locator('nav[aria-label="Workspace navigation"]').first();
    await navigation.getByRole('button', { name: 'Decision Desk', exact: true }).click();
    await page.getByRole('button', { name: 'Raw', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Source readiness' })).toBeVisible();
    await expect(page.getByText(/158 of 200 source records have at least one issue/)).toBeVisible();
    await expect(page.getByText(/One record can appear in multiple categories/)).toBeVisible();
    await expect(page.getByText('No Training', { exact: true })).toHaveCount(0);
    await expect(page.getByText(/This is a completeness signal, not another source-issue category/)).toBeVisible();

    const issueCounts = [
      ['Missing skill data', '88'],
      ['Incomplete performance history', '40'],
      ['Conflicting hire dates', '39'],
      ['Name variants', '38'],
      ['No ATS record', '31'],
      ['Missing email', '17'],
      ['Potential duplicates', '36'],
    ] as const;
    for (const [label, count] of issueCounts) {
      const drillDown = page.getByRole('button', { name: `${label} ${count}`, exact: true });
      await expect(drillDown).toBeVisible();
    }

    await page.getByRole('button', { name: 'Missing email 17', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Data Validation Queue' })).toBeVisible();
    await expect(page.getByText('Dataset A: Source Evidence', { exact: true })).toBeVisible();
    await expect(page.getByLabel('Filter source issue')).toHaveValue('missing_email');
    await expect(page.getByText('Case load', { exact: true }).locator('..')).toContainText('17');
    await expect(page.getByText('Case load', { exact: true }).locator('..')).toContainText('source records');
  } finally {
    await context.close();
  }
});

test('a held validation decision remains visible after a page refresh', async ({ browser }) => {
  const context = await browser.newContext({
    baseURL: test.info().project.use.baseURL,
  });
  const page = await context.newPage();
  let savedValidation: {
    employeeId: string;
    status: 'held';
    decisionNote: string | null;
    reviewedAt: string;
    decisions: [];
  } | null = null;
  let saveRequests = 0;

  await page.route('**/api/workforce-validations**', async (route) => {
    const request = route.request();

    if (request.method() === 'GET') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(savedValidation ? [savedValidation] : []),
      });
      return;
    }

    if (request.method() === 'PUT') {
      const employeeId = request.url().split('/').pop() ?? '';
      const body = request.postDataJSON() as { decisionNote?: string | null };
      saveRequests += 1;
      savedValidation = {
        employeeId,
        status: 'held',
        decisionNote: body.decisionNote ?? null,
        reviewedAt: new Date().toISOString(),
        decisions: [],
      };
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(savedValidation),
      });
      return;
    }

    await route.continue();
  });

  try {
    await page.goto('/workforce-intelligence/', { waitUntil: 'domcontentloaded' });

    const navigation = page.locator('nav[aria-label="Workspace navigation"]').first();
    await navigation.getByRole('button', { name: 'Data Validation', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Data Validation Queue' })).toBeVisible();

    await page.getByRole('button', { name: 'Review evidence', exact: true }).first().click();
    const detailPanel = page.getByTestId('employee-detail-panel');
    await expect(detailPanel).toBeVisible();
    await expect(page.getByTestId('employee-detail-content')).toBeVisible();

    await detailPanel.getByRole('button', { name: 'Hold', exact: true }).click();
    await expect(detailPanel.getByRole('heading', { name: 'Hold Record?' })).toBeVisible();
    await detailPanel.getByRole('button', { name: 'Hold Record', exact: true }).click();
    await expect(detailPanel.getByText('Record held for investigation.')).toBeVisible();
    expect(saveRequests).toBe(1);

    await page.reload({ waitUntil: 'domcontentloaded' });
    await navigation.getByRole('button', { name: 'Data Validation', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Data Validation Queue' })).toBeVisible();
    await expect(page.getByText('HELD', { exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Reopen case', exact: true })).toBeVisible();

    await page.getByRole('button', { name: 'Reopen case', exact: true }).click();
    await expect(detailPanel).toBeVisible();
    await expect(detailPanel.getByText('Local decision recorded')).toBeVisible();
    await expect(detailPanel.getByText('Record held for investigation.')).toBeVisible();
  } finally {
    await context.close();
  }
});

test('all workspaces finish loading on a constrained connection', async ({
  page,
  context,
}) => {
  const runtimeFailures: string[] = [];
  const failedModuleRequests: string[] = [];
  page.on('pageerror', (error) => {
    if (DYNAMIC_IMPORT_FAILURE.test(error.message)) {
      runtimeFailures.push(error.message);
    }
  });
  page.on('console', (message) => {
    if (message.type() === 'error' && DYNAMIC_IMPORT_FAILURE.test(message.text())) {
      runtimeFailures.push(message.text());
    }
  });
  page.on('requestfailed', (request) => {
    if (request.resourceType() === 'script') {
      failedModuleRequests.push(`${request.url()}: ${request.failure()?.errorText ?? 'request failed'}`);
    }
  });
  page.on('response', (response) => {
    if (response.request().resourceType() === 'script' && response.status() >= 400) {
      failedModuleRequests.push(`${response.url()}: HTTP ${response.status()}`);
    }
  });

  const client = await context.newCDPSession(page);
  await client.send('Network.enable');
  await client.send('Network.emulateNetworkConditions', {
    offline: false,
    latency: 120,
    downloadThroughput: 75 * 1024,
    uploadThroughput: 37.5 * 1024,
  });
  await mockValidationReads(page);

  await page.goto('/workforce-intelligence/', { waitUntil: 'domcontentloaded' });

  await expect(page.getByRole('heading', { name: 'Capability review' })).toBeVisible();
  await expect(page.getByTestId('workspace-loading')).toHaveCount(0);
  await expect(page.getByTestId('dashboard-charts-loading')).toHaveCount(0);

  const navigation = page.locator('nav[aria-label="Workspace navigation"]').first();
  const workspaces = [
    { label: 'Employees', heading: 'Employees' },
    { label: 'Data Validation', heading: 'Data Validation Queue' },
    { label: 'Skill Intelligence', heading: 'Skill Intelligence' },
    { label: 'The Comparison', heading: /Evidence report/i },
  ] as const;

  for (const workspace of workspaces) {
    await navigation.getByRole('button', { name: workspace.label, exact: true }).click();
    await expect(page.getByRole('heading', { name: workspace.heading })).toBeVisible();
    await expect(page.getByTestId('workspace-loading')).toHaveCount(0);
    if (workspace.label === 'Data Validation') {
      await expect(page.getByRole('heading', { name: 'Checking local decisions' })).toHaveCount(0);
    }

    if (workspace.label === 'Employees' || workspace.label === 'Data Validation') {
      const detailTrigger = workspace.label === 'Employees'
        ? page.locator('main button').filter({ has: page.locator('div') }).first()
        : page.getByRole('button', { name: /Review evidence|Reopen case/ }).first();

      await expect(detailTrigger).toBeVisible();
      await detailTrigger.click();

      const detailPanel = page.getByTestId('employee-detail-panel');
      await expect(detailPanel).toBeVisible();
      await expect(page.getByTestId('employee-detail-loading')).toHaveCount(0, {
        timeout: DETAIL_PANEL_TIMEOUT,
      });
      await expect(page.getByTestId('employee-detail-content')).toBeVisible({
        timeout: DETAIL_PANEL_TIMEOUT,
      });
      await expect(detailPanel.getByRole('button', { name: 'Close employee detail' })).toBeEnabled();

      await detailPanel.getByRole('button', { name: 'Close employee detail' }).click();
      await expect(detailPanel).toHaveCount(0);
    }
  }

  expect(runtimeFailures, 'dynamic imports must not fail').toEqual([]);
  expect(failedModuleRequests, 'module requests must not fail').toEqual([]);
});

type VisualWorkspace = {
  id: 'overview' | 'employees' | 'validation' | 'skills' | 'comparison';
  label: string;
  view: 'dashboard' | 'employees' | 'review' | 'skills' | 'comparison';
  heading: string | RegExp;
};

const VISUAL_WORKSPACES: VisualWorkspace[] = [
  { id: 'overview', label: 'Decision Desk', view: 'dashboard', heading: 'Capability review' },
  { id: 'employees', label: 'Employees', view: 'employees', heading: 'Employees' },
  { id: 'validation', label: 'Data Validation', view: 'review', heading: 'Data Validation Queue' },
  { id: 'skills', label: 'Skill Intelligence', view: 'skills', heading: 'Skill Intelligence' },
  { id: 'comparison', label: 'The Comparison', view: 'comparison', heading: /Evidence report/i },
];

async function mockValidationReads(page: Page) {
  await page.route('**/api/workforce-validations**', async (route) => {
    if (route.request().method() !== 'GET') {
      await route.continue();
      return;
    }

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: '[]',
    });
  });
}

async function expectMetric(page: Page, label: string, value: string) {
  const metric = page.getByText(label, { exact: true }).locator('..');
  await expect(metric).toContainText(value);
}

async function openVisualWorkspace(page: Page, workspace: VisualWorkspace) {
  const navigation = page.locator('nav[aria-label="Workspace navigation"]:visible').first();
  if (await navigation.locator('select').count()) {
    await navigation.locator('select').selectOption(workspace.view);
  } else {
    await navigation.getByRole('button', { name: workspace.label, exact: true }).click();
  }

  await expect(page.getByRole('heading', { name: workspace.heading })).toBeVisible();
  await expect(page.getByTestId('workspace-loading')).toHaveCount(0);
  if (workspace.id === 'overview') {
    await expect(page.getByTestId('dashboard-charts-loading')).toHaveCount(0);
  }
  if (workspace.id === 'validation') {
    await expect(page.getByRole('heading', { name: 'Checking local decisions' })).toHaveCount(0);
  }

  await page.evaluate(() => document.fonts.ready);
  if (workspace.id === 'overview') {
    await page.waitForTimeout(2_000);
  }
}

async function expectDecisionHierarchy(page: Page, workspace: VisualWorkspace) {
  switch (workspace.id) {
    case 'overview':
      await expect(page.getByText('Current review / capability evidence', { exact: true })).toBeVisible();
      await expect(page.getByText('Workforce Readiness', { exact: true })).toBeVisible();
      await expect(page.getByText('High-confidence profiles', { exact: true })).toBeVisible();
      await expect(page.getByText('Next Action', { exact: true })).toBeVisible();
      break;
    case 'employees':
      await expect(page.getByText('Workforce register', { exact: true })).toBeVisible();
      await expect(page.getByPlaceholder('Find a person or role')).toBeVisible();
      await expect(page.getByText(/records shown/)).toBeVisible();
      break;
    case 'validation':
      await expect(page.getByText('Investigation casebook', { exact: true })).toBeVisible();
      await expect(page.getByText(/need immediate attention/)).toBeVisible();
      await expect(page.getByRole('button', { name: 'Review evidence', exact: true }).first()).toBeVisible();
      break;
    case 'skills':
      await expect(page.getByText('Capability register', { exact: true })).toBeVisible();
      await expect(page.getByPlaceholder('Find a person or role')).toBeVisible();
      await expect(page.getByText(/Review the evidence people bring to their role/)).toBeVisible();
      break;
    case 'comparison':
      await expect(page.getByText('What this means', { exact: true })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Planning evidence after resolution' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Where source evidence limits decisions' })).toBeVisible();
      break;
  }
}

async function expectNoHorizontalOverflow(page: Page) {
  const dimensions = await page.evaluate(() => ({
    viewport: window.innerWidth,
    document: document.documentElement.scrollWidth,
    body: document.body.scrollWidth,
  }));

  expect(dimensions.document, 'document must not overflow horizontally').toBeLessThanOrEqual(dimensions.viewport);
  expect(dimensions.body, 'body must not overflow horizontally').toBeLessThanOrEqual(dimensions.viewport);
}

async function expectDetailActionsFitViewport(page: Page) {
  const reviewEvidence = page.getByRole('button', { name: 'Review evidence', exact: true }).first();
  await expect(reviewEvidence).toBeVisible();
  await reviewEvidence.click();

  const detailPanel = page.getByTestId('employee-detail-panel');
  await expect(detailPanel).toBeVisible();
  await expect(page.getByTestId('employee-detail-content')).toBeVisible();

  const viewport = await page.evaluate(() => ({ width: window.innerWidth, height: window.innerHeight }));
  const panelBounds = await detailPanel.boundingBox();
  expect(panelBounds, 'detail drawer should have a measurable box').not.toBeNull();
  expect(panelBounds!.x).toBeGreaterThanOrEqual(0);
  expect(panelBounds!.y).toBeGreaterThanOrEqual(0);
  expect(panelBounds!.x + panelBounds!.width).toBeLessThanOrEqual(viewport.width + 1);
  expect(panelBounds!.y + panelBounds!.height).toBeLessThanOrEqual(viewport.height + 1);

  for (const actionName of ['Confirm', 'Hold']) {
    const action = detailPanel.getByRole('button', { name: actionName, exact: true });
    await expect(action).toBeVisible();
    const actionBounds = await action.boundingBox();
    expect(actionBounds, `${actionName} action should have a measurable box`).not.toBeNull();
    expect(actionBounds!.x).toBeGreaterThanOrEqual(0);
    expect(actionBounds!.x + actionBounds!.width).toBeLessThanOrEqual(viewport.width + 1);
    expect(actionBounds!.y + actionBounds!.height).toBeLessThanOrEqual(viewport.height + 1);
  }

  await detailPanel.getByRole('button', { name: 'Close employee detail' }).click();
  await expect(detailPanel).toHaveCount(0);
}

async function runWorkspaceVisualChecks(page: Page, snapshotSuffix: 'desktop' | 'mobile') {
  await page.goto('/workforce-intelligence/', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { name: 'Capability review' })).toBeVisible();

  for (const workspace of VISUAL_WORKSPACES) {
    await openVisualWorkspace(page, workspace);
    await expectDecisionHierarchy(page, workspace);
    await expectNoHorizontalOverflow(page);
    await expect(page).toHaveScreenshot(`decision-first-${workspace.id}-${snapshotSuffix}.png`, {
      animations: 'disabled',
      caret: 'hide',
      fullPage: true,
      maxDiffPixels: 0,
      mask: workspace.id === 'overview' ? [page.locator('.recharts-wrapper')] : [],
      maskColor: '#f4f4f5',
    });
  }

  await openVisualWorkspace(page, VISUAL_WORKSPACES[2]);
  await expectDetailActionsFitViewport(page);
}

test('decision-first workspaces keep their hierarchy on desktop', async ({ browser }) => {
  const context = await browser.newContext({
    baseURL: test.info().project.use.baseURL,
    viewport: { width: 1280, height: 900 },
  });
  const page = await context.newPage();
  const validationMethods: string[] = [];
  page.on('request', (request) => {
    if (request.url().includes('/api/workforce-validations')) {
      validationMethods.push(request.method());
    }
  });

  try {
    await mockValidationReads(page);
    await runWorkspaceVisualChecks(page, 'desktop');
    expect(validationMethods.filter((method) => method !== 'GET')).toEqual([]);
  } finally {
    await context.close();
  }
});

test('decision-first workspaces fit a 390px viewport', async ({ browser }) => {
  const context = await browser.newContext({
    baseURL: test.info().project.use.baseURL,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  const validationMethods: string[] = [];
  page.on('request', (request) => {
    if (request.url().includes('/api/workforce-validations')) {
      validationMethods.push(request.method());
    }
  });

  try {
    await mockValidationReads(page);
    await runWorkspaceVisualChecks(page, 'mobile');
    expect(validationMethods.filter((method) => method !== 'GET')).toEqual([]);
  } finally {
    await context.close();
  }
});

test('reviewers can navigate workspaces and case actions by keyboard', async ({ browser }) => {
  const viewports = [
    { name: 'desktop', width: 1280, height: 900 },
    { name: 'mobile', width: 390, height: 844 },
  ] as const;
  for (const viewport of viewports) {
    const context = await browser.newContext({
      baseURL: test.info().project.use.baseURL,
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();
    let saveRequests = 0;
    page.on('request', (request) => {
      if (request.url().includes('/api/workforce-validations') && request.method() !== 'GET') {
        saveRequests += 1;
      }
    });

    try {
      await mockValidationReads(page);
      await page.goto('/workforce-intelligence/', { waitUntil: 'domcontentloaded' });
      await expect(page.getByRole('heading', { name: 'Capability review' })).toBeVisible();
      await expect(page.getByTestId('workspace-loading')).toHaveCount(0);
      await expect(page.getByTestId('dashboard-charts-loading')).toHaveCount(0);

      const navigation = page.locator('nav[aria-label="Workspace navigation"]:visible').first();
      for (const [index, workspace] of KEYBOARD_WORKSPACES.entries()) {
        if (viewport.name === 'mobile') {
          const selector = navigation.locator('select');
          await selector.focus();
          await expect(selector).toBeFocused();
          await page.keyboard.press('Home');
          for (let step = 0; step < index; step += 1) {
            await page.keyboard.press('ArrowDown');
          }
          await page.keyboard.press('Enter');
        } else {
          const workspaceButton = navigation.getByRole('button', { name: getWorkspaceLabel(workspace.view), exact: true });
          await workspaceButton.focus();
          await expect(workspaceButton).toBeFocused();
          await page.keyboard.press('Enter');
        }

        await expect(page.getByRole('heading', { name: workspace.heading })).toBeVisible();
        await expect(page.getByTestId('workspace-loading')).toHaveCount(0);
      }

      await navigateWorkspaceWithKeyboard(page, 'review', viewport.name === 'mobile');
      const validationTrigger = page.getByRole('button', { name: 'Review evidence', exact: true }).first();
      await validationTrigger.focus();
      await expect(validationTrigger).toBeFocused();
      await page.keyboard.press('Enter');

      const detailPanel = page.getByTestId('employee-detail-panel');
      await expect(detailPanel).toBeVisible();
      await expect(page.getByTestId('employee-detail-content')).toBeVisible();
      await expect(detailPanel).toBeFocused();

      await tabToControl(page, detailPanel, detailPanel.getByRole('button', { name: 'Confirm', exact: true }));
      await tabToControl(page, detailPanel, detailPanel.getByRole('button', { name: 'Hold', exact: true }));
      await page.keyboard.press('Escape');
      await expect(detailPanel).toHaveCount(0);
      await expect(validationTrigger).toBeFocused();

      await navigateWorkspaceWithKeyboard(page, 'skills', viewport.name === 'mobile');
      const skillEmployee = page.getByRole('button', { name: /Ratna Iskandar/ }).first();
      await skillEmployee.focus();
      await expect(skillEmployee).toBeFocused();
      await page.keyboard.press('Enter');

      await expect(detailPanel).toBeVisible();
      await expect(page.getByTestId('employee-detail-content')).toBeVisible();
      const learningTab = detailPanel.getByRole('button', { name: 'Learning Paths', exact: true });
      await learningTab.focus();
      await expect(learningTab).toBeFocused();
      await page.keyboard.press('Enter');

      const assignPath = detailPanel.getByRole('button', { name: 'Assign Path', exact: true }).first();
      await expect(assignPath).toBeEnabled();
      await tabToControl(page, detailPanel, assignPath);
      expect(saveRequests).toBe(0);
    } finally {
      await context.close();
    }
  }
});

function getWorkspaceLabel(view: (typeof KEYBOARD_WORKSPACES)[number]['view']): string {
  return {
    dashboard: 'Decision Desk',
    employees: 'Employees',
    review: 'Data Validation',
    skills: 'Skill Intelligence',
    comparison: 'The Comparison',
  }[view];
}

async function navigateWorkspaceWithKeyboard(page: Page, view: 'review' | 'skills', mobile: boolean) {
  const navigation = page.locator('nav[aria-label="Workspace navigation"]:visible').first();
  const workspaceIndex = view === 'review' ? 2 : 3;
  const workspaceLabel = view === 'review' ? 'Data Validation' : 'Skill Intelligence';
  const workspaceHeading = view === 'review' ? 'Data Validation Queue' : 'Skill Intelligence';
  if (mobile) {
    const selector = navigation.locator('select');
    await selector.focus();
    await page.keyboard.press('Home');
    for (let step = 0; step < workspaceIndex; step += 1) {
      await page.keyboard.press('ArrowDown');
    }
    await page.keyboard.press('Enter');
  } else {
    const workspaceButton = navigation.getByRole('button', { name: workspaceLabel, exact: true });
    await workspaceButton.focus();
    await page.keyboard.press('Enter');
  }
  await expect(page.getByRole('heading', { name: workspaceHeading })).toBeVisible();
}

async function tabToControl(page: Page, panel: Locator, control: Locator) {
  await panel.focus();
  for (let attempt = 0; attempt < 40; attempt += 1) {
    if (await control.evaluate((element) => element === document.activeElement)) return;
    await page.keyboard.press('Tab');
  }
  throw new Error(`Could not reach ${await control.getAttribute('aria-label') ?? await control.textContent()} with Tab`);
}