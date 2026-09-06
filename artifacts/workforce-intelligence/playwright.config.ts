import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 90_000,
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: 'line',
  use: {
    baseURL: 'http://127.0.0.1:4173/workforce-intelligence/',
    viewport: { width: 1280, height: 900 },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: {
    command: 'PORT=4173 BASE_PATH=/workforce-intelligence/ pnpm run build && PORT=4173 BASE_PATH=/workforce-intelligence/ pnpm run serve',
    url: 'http://127.0.0.1:4173/workforce-intelligence/',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});