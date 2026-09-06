import { useMemo } from 'react';
import { useListWorkforceValidations } from '@workspace/api-client-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from 'recharts';
import { cleanDataset, getIntelligenceEligibleEmployees, messyDataset } from '../data';
import { MESSY_STATS, CLEAN_STATS } from '../data/stats';
import type { DatasetMode } from '../data';
import { AlertOctagon } from 'lucide-react';

interface Props {
  mode: DatasetMode;
}

const COLORS = {
  primary: '#C1354F',
  ink: '#18181B',
  inkMuted: '#71717A',
  inkLighter: '#E4E4E7',
  inkFaint: '#F4F4F5',
};

export default function DashboardCharts({ mode }: Props) {
  const {
    data: savedValidations,
    isPending: isValidationsLoading,
    isError: isValidationsError,
  } = useListWorkforceValidations();
  const capabilityEmployees = useMemo(
    () => getIntelligenceEligibleEmployees(cleanDataset, savedValidations ?? []),
    [savedValidations],
  );

  const confidenceDist = useMemo(() => [
    { name: 'High', value: CLEAN_STATS.highConfidence, color: 'hsl(var(--foreground))' },
    { name: 'Medium', value: CLEAN_STATS.mediumConfidence, color: 'hsl(var(--muted-foreground))' },
    { name: 'Low', value: CLEAN_STATS.lowConfidence, color: 'hsl(var(--border))' },
  ], []);

  const highEvidenceSummary = useMemo(() => {
    const highEvidenceProfiles = cleanDataset.filter((employee) => employee.data_confidence === 'high');
    return {
      total: highEvidenceProfiles.length,
      openReview: highEvidenceProfiles.filter((employee) => employee.requires_human_review).length,
    };
  }, []);

  const issueOverlap = useMemo(() => {
    const affectedRecords = messyDataset.filter((employee) => employee.data_issues.length > 0);
    return [
      {
        issue: 'One issue',
        count: affectedRecords.filter((employee) => employee.data_issues.length === 1).length,
        fill: 'hsl(var(--foreground))',
      },
      {
        issue: 'Two issues',
        count: affectedRecords.filter((employee) => employee.data_issues.length === 2).length,
        fill: 'hsl(var(--muted-foreground))',
      },
      {
        issue: 'Three or more',
        count: affectedRecords.filter((employee) => employee.data_issues.length >= 3).length,
        fill: 'hsl(var(--accent))',
      },
    ];
  }, []);

  const gapsByDepartment = useMemo(() => {
    const groups: Record<string, { critical: number; moderate: number; minor: number }> = {};
    capabilityEmployees.forEach((employee) => {
      if (!groups[employee.department]) groups[employee.department] = { critical: 0, moderate: 0, minor: 0 };
      employee.skill_gaps.forEach((gap) => {
        if (gap.gap_severity === 'critical') groups[employee.department].critical++;
        else if (gap.gap_severity === 'moderate') groups[employee.department].moderate++;
        else groups[employee.department].minor++;
      });
    });
    return Object.entries(groups).map(([department, gaps]) => ({
      name: department,
      critical: gaps.critical,
      moderate: gaps.moderate,
      minor: gaps.minor,
      total: gaps.critical + gaps.moderate + gaps.minor,
    })).sort((a, b) => b.critical - a.critical).slice(0, 8);
  }, [capabilityEmployees]);

  return (
    <>
      {mode === 'messy' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border-t border-border pt-6">
            <h3 className="text-xl font-display font-medium text-foreground mb-2">Issue overlap per source record</h3>
            <p className="text-[13px] text-muted-foreground mb-4 max-w-md leading-relaxed">
              The top signals show issue categories. This view answers a different question: how many of the {MESSY_STATS.affectedRecords} affected source records carry one issue versus several concurrent issues.
            </p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={issueOverlap} layout="vertical" margin={{ left: 0, right: 24, top: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="2 2" horizontal={false} stroke="hsl(var(--border))" />
                <XAxis type="number" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))', fontFamily: 'var(--font-mono)' }} tickLine={false} axisLine={false} />
                <YAxis type="category" dataKey="issue" tick={{ fontSize: 12, fill: 'hsl(var(--foreground))', fontWeight: 500 }} tickLine={false} axisLine={false} width={120} />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--muted))', opacity: 0.4 }}
                  contentStyle={{ fontSize: 13, fontWeight: 500, border: '1px solid hsl(var(--border))', borderRadius: 0, boxShadow: 'none', backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--foreground))' }}
                  formatter={(value: any) => [`${value} records`, 'Unique source records']}
                />
                <Bar dataKey="count" barSize={32}>
                  {issueOverlap.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-[12px] text-muted-foreground">
              Unit: unique source records. Each record appears in exactly one bar.
            </p>
          </div>

          <div className="border-t border-border pt-6 flex flex-col relative">
            <div className="flex items-center gap-3 mb-2">
              <AlertOctagon className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-display font-medium text-foreground">Operational Blind Spots</h3>
            </div>
            <p className="text-[13px] text-muted-foreground mb-8">
              Decisions blocked by insufficient source evidence.
            </p>
            <div className="bg-card border border-border shadow-airbnb-subtle rounded-2xl overflow-hidden flex-1">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground">
                    <th className="px-5 py-3 border-b border-border w-1/2">Blocked Decision</th>
                    <th className="px-5 py-3 border-b border-border w-1/2 border-l border-border">Data Bottleneck</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { q: 'Who is ready for promotion?', reason: '44% lack baseline skills' },
                    { q: 'Where are cross-branch gaps?', reason: 'Inconsistent job taxonomy' },
                    { q: 'Who has critical skill gaps?', reason: 'No role requirement map' },
                    { q: 'What is true headcount?', reason: 'Duplicate flags exist' },
                  ].map(({ q, reason }, index) => (
                    <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/30">
                      <td className="px-5 py-4 font-medium text-foreground">{q}</td>
                      <td className="px-5 py-4 text-muted-foreground border-l border-border">{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="border-t border-border pt-6">
            <h3 className="text-xl font-display font-medium text-foreground mb-2">Profile Integrity</h3>
            <p className="text-[13px] text-muted-foreground mb-8">Data-confidence classification across contextualized profiles</p>
            <div className="h-[280px] flex items-center justify-center relative bg-card border border-border rounded-2xl overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={confidenceDist} cx="50%" cy="50%" innerRadius={70} outerRadius={105} paddingAngle={0} dataKey="value" stroke="hsl(var(--card))" strokeWidth={2}>
                    {confidenceDist.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                  </Pie>
                  <Tooltip
                    contentStyle={{ fontSize: 13, fontWeight: 500, border: '1px solid hsl(var(--border))', borderRadius: 0, backgroundColor: 'hsl(var(--card))' }}
                    formatter={(value: any, name: any) => [`${value} employees`, name]}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={40}
                    iconType="square"
                    iconSize={10}
                    formatter={(value) => <span className="text-xs font-mono font-medium text-foreground ml-2 uppercase tracking-widest">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -mt-8">
                <span className="text-3xl font-display text-foreground">{CLEAN_STATS.total}</span>
                <span className="text-[10px] font-mono font-medium text-muted-foreground uppercase tracking-widest mt-1">Total</span>
              </div>
            </div>
            <div className="mt-5 border-l-2 border-border pl-4 text-[13px] leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">{highEvidenceSummary.total} profiles</span> are classified as high data confidence. This describes evidence quality, not a manual validation result; <span className="font-semibold text-foreground">{highEvidenceSummary.openReview}</span> also belong to the validation casebook.
            </div>
          </div>

          <div className="border-t border-border pt-6 lg:col-span-2">
            <div className="flex justify-between items-baseline mb-8">
              <div>
                <h3 className="text-xl font-display font-medium text-foreground mb-2">Gaps by Department</h3>
                <p className="text-[13px] text-muted-foreground">Criticality of required learning interventions</p>
              </div>
            </div>
            {isValidationsLoading || isValidationsError ? (
              <div className="min-h-[308px] bg-card border border-border p-6 rounded-2xl shadow-airbnb-subtle flex items-center justify-center text-center">
                <p className="max-w-md text-sm text-muted-foreground">
                  {isValidationsError
                    ? 'Capability distribution is unavailable because held profiles cannot be identified.'
                    : 'Checking saved validation decisions before calculating capability distribution…'}
                </p>
              </div>
            ) : (
              <div className="bg-card border border-border p-6 pb-2 rounded-2xl shadow-airbnb-subtle">
                <ResponsiveContainer width="100%" height={260}>
                  <BarChart data={gapsByDepartment} layout="vertical" margin={{ left: 0, right: 16, top: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="2 2" horizontal={false} stroke="hsl(var(--border))" />
                    <XAxis type="number" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))', fontFamily: 'var(--font-mono)' }} tickLine={false} axisLine={false} />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: 'hsl(var(--foreground))', fontWeight: 500 }} tickLine={false} axisLine={false} width={130} />
                    <Tooltip
                      cursor={{ fill: 'hsl(var(--muted))', opacity: 0.4 }}
                      contentStyle={{ fontSize: 13, fontWeight: 500, border: '1px solid hsl(var(--border))', borderRadius: 0, backgroundColor: 'hsl(var(--card))' }}
                    />
                    <Legend
                      iconType="square"
                      iconSize={10}
                      wrapperStyle={{ paddingTop: '20px' }}
                      formatter={(value) => <span className="text-xs font-mono font-medium text-foreground ml-2 uppercase tracking-widest">{value}</span>}
                    />
                    <Bar dataKey="critical" stackId="a" fill="hsl(var(--accent))" name="Critical" barSize={32} />
                    <Bar dataKey="moderate" stackId="a" fill="hsl(var(--foreground))" name="Moderate" />
                    <Bar dataKey="minor" stackId="a" fill="hsl(var(--muted-foreground))" name="Minor" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
