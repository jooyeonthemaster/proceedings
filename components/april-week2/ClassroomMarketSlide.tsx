'use client';

import { motion } from 'framer-motion';

const funnels = [
  {
    id: 'tam',
    label: 'TAM',
    sub: 'TOTAL ADDRESSABLE',
    title: '전체 시장',
    headline: '2.4~3조원',
    headlineLabel: '연 매출 환산',
    points: [
      '전국 사교육 학원 약 8~10만 개',
      '내신 대비 국영수사과 학원 약 4~5만 개 (절반)',
      '월 50만원 기준 연 TAM = 2.4~3조원',
    ],
    note: '비현실적인 이론상 숫자',
    color: 'border-emerald-900/40 bg-emerald-950/20',
    pillColor: 'bg-emerald-900/40 text-emerald-300 border-emerald-700/40',
    valueColor: 'text-emerald-300',
  },
  {
    id: 'sam',
    label: 'SAM',
    sub: 'SERVICEABLE AVAILABLE',
    title: '접근 가능 시장',
    headline: '600~900억원',
    headlineLabel: '연 매출 환산',
    points: [
      '"동네 학원 중 돈좀 만지는 곳"',
      '월매출 3,000만+ · IT 거부감 X · 내신 프린트 多',
      '전체의 20~30% 추정 → 약 1~1.5만 개',
      '월 50만원 기준 연 SAM = 600~900억원',
    ],
    note: '접근 가능한 현실적 풀',
    color: 'border-cyan-900/40 bg-cyan-950/20',
    pillColor: 'bg-cyan-900/40 text-cyan-300 border-cyan-700/40',
    valueColor: 'text-cyan-300',
  },
  {
    id: 'som',
    label: 'SOM',
    sub: 'SERVICEABLE OBTAINABLE',
    title: '단기 확보 가능',
    headline: '4.5억 → 90억',
    headlineLabel: '2026 → 2028',
    points: [
      '2026년: 75개 = 연 4.5억',
      '2027년: 500개 (전국 주요 도시) = 연 30억',
      '2028년: 1,500개 = 연 90억',
    ],
    note: '실제 영업 기반 목표',
    color: 'border-emerald-700/50 bg-emerald-950/30',
    pillColor: 'bg-emerald-800/50 text-emerald-200 border-emerald-600/50',
    valueColor: 'text-emerald-200',
  },
];

const ceilingMetrics = [
  { label: '현실적 천장', value: '1,500~2,000', unit: '개 학원' },
  { label: 'MRR 천장', value: '7.5~10', unit: '억원/월' },
  { label: 'ARR 천장', value: '90~120', unit: '억원/년' },
];

export default function ClassroomMarketSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.06),transparent_60%)]" />
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-7"
        >
          <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-emerald-400 text-sm font-medium tracking-wider">SECTION 2-1 · MARKET SIZING</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            시장 규모 분석 — TAM / SAM / SOM
          </h2>
          <p className="text-slate-500">FUNNEL FROM 3조 TO 4.5억</p>
        </motion.div>

        {/* Funnel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {funnels.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
              className={`rounded-2xl p-5 border ${f.color}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full border ${f.pillColor}`}>
                    {f.label}
                  </span>
                  <div className="text-[10px] text-slate-500 tracking-[0.18em] mt-1.5">{f.sub}</div>
                </div>
              </div>
              <h3 className="text-base font-semibold text-slate-200 mb-2">{f.title}</h3>
              <div className={`text-3xl md:text-4xl font-bold font-mono tabular-nums ${f.valueColor} mb-1`}>
                {f.headline}
              </div>
              <div className="text-xs text-slate-500 mb-3">{f.headlineLabel}</div>
              <ul className="space-y-1.5 mb-3">
                {f.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-slate-400 leading-snug">
                    <span className="text-slate-600 mt-0.5 shrink-0">·</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="text-[10px] text-slate-500 italic border-t border-slate-800/60 pt-2">
                {f.note}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Realistic Ceiling Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="bg-slate-900/60 rounded-2xl p-5 border border-emerald-800/40"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full border bg-emerald-900/40 text-emerald-300 border-emerald-700/40">
              REALISTIC CEILING
            </span>
            <h3 className="text-base font-semibold text-slate-200">실질적 천장</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            {ceilingMetrics.map((m) => (
              <div key={m.label} className="bg-slate-950/60 rounded-xl px-4 py-3 border border-slate-800/50">
                <div className="text-[10px] text-emerald-400/80 tracking-[0.18em] font-medium mb-1">
                  {m.label}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl md:text-2xl font-bold text-slate-100 font-mono tabular-nums">
                    {m.value}
                  </span>
                  <span className="text-[11px] text-slate-500">{m.unit}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            동네 학원 월 50만원 SaaS의 현실적 천장 = 전국{' '}
            <span className="text-emerald-300 font-mono tabular-nums">1,500~2,000개</span> 학원 한계.
            그러나 한국 에듀테크 SaaS 중{' '}
            <span className="text-emerald-300 font-semibold">ARR 100억 넘는 회사가 거의 없다</span>는 점에서
            이것도 상당히 큰 시장이다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
