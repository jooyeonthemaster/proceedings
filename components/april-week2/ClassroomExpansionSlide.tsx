'use client';

import { motion } from 'framer-motion';

const expansionPaths = [
  {
    id: 1,
    title: '과목 수 × 크레딧 단가 확장',
    headline: '월 50만 → 80~100만',
    description:
      '국영수만 쓰던 학원이 사탐·과탐까지 쓰면 ARPU 상승. 기존 고객 ARPU를 올리는 구조.',
    tag: 'ARPU UPLIFT',
  },
  {
    id: 2,
    title: '학원 → 학교',
    headline: '전국 중·고등학교 5,800개',
    description:
      '공교육 시장 진출. 조달 입찰이라 느리지만 파이가 크다.',
    tag: 'PUBLIC SECTOR',
  },
  {
    id: 3,
    title: '해외 진출',
    headline: '일본 · 대만',
    description:
      '한국 내신 시스템 특화라 바로는 어렵지만, 비슷한 입시 구조 국가로 현지화 가능.',
    tag: 'GLOBAL',
  },
  {
    id: 4,
    title: '학원 ERP 확장',
    headline: '월 100~200만원',
    description:
      '출결 · 상담 · 학부모 소통 기능 추가 시 ARPU 추가 상승 가능.',
    tag: 'PLATFORM',
  },
];

const investConditions = [
  { label: 'PMF', text: 'MRR 2,000만원 이상 달성' },
  { label: 'CHURN', text: '월 이탈률 5% 이하' },
  { label: 'ARPU', text: '과목 확장으로 ARPU 상승 트렌드' },
  { label: 'LTV/CAC', text: 'LTV/CAC 비율 3 이상' },
];

export default function ClassroomExpansionSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-7"
        >
          <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-emerald-400 text-sm font-medium tracking-wider">SECTION 2-1 · EXPANSION & VC</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            확장 경로 + 투자 유치 관점
          </h2>
          <p className="text-slate-500">4 PATHS · VC READINESS · SERIES A TARGET</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* 확장 경로 — 좌측 2/3 */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full border bg-emerald-900/40 text-emerald-300 border-emerald-700/40">
                EXPANSION PATHS
              </span>
              <h3 className="text-sm font-semibold text-slate-200">확장 경로 4가지</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {expansionPaths.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="bg-slate-900/60 rounded-2xl p-4 border border-emerald-900/40"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-emerald-400 font-mono tabular-nums text-xs">
                      0{p.id}
                    </div>
                    <span className="text-[9px] font-medium px-2 py-0.5 rounded-full border bg-cyan-900/30 text-cyan-300 border-cyan-700/30 tracking-wider">
                      {p.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-slate-100 mb-1">{p.title}</h4>
                  <div className="text-emerald-300 font-mono tabular-nums text-sm font-bold mb-2">
                    {p.headline}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 투자 유치 관점 — 우측 1/3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-slate-900/60 rounded-2xl p-5 border border-cyan-800/40 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full border bg-cyan-900/40 text-cyan-300 border-cyan-700/40">
                VC PERSPECTIVE
              </span>
            </div>
            <h3 className="text-base font-semibold text-slate-100 mb-2">투자 유치 관점</h3>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              동네 학원 대상 월 50만원 SaaS는 VC들이{' '}
              <span className="text-cyan-300">"스케일러블한가?"</span> 의문을 가질 수 있다.
            </p>

            <div className="text-[10px] text-slate-500 tracking-[0.18em] mb-2">투자 가능 조건</div>
            <div className="space-y-2 mb-4">
              {investConditions.map((c, i) => (
                <div
                  key={c.label}
                  className="flex items-start gap-2 bg-slate-950/50 rounded-lg px-3 py-2 border border-slate-800/50"
                >
                  <span className="text-[9px] font-mono text-cyan-400 tracking-wider shrink-0 w-14">
                    {c.label}
                  </span>
                  <span className="text-xs text-slate-300 leading-snug">{c.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto bg-cyan-900/20 border border-cyan-800/40 rounded-xl p-3">
              <div className="text-[10px] text-cyan-400 tracking-[0.18em] mb-1">SERIES A 기준</div>
              <div className="text-sm font-bold text-slate-100 mb-1.5">
                ARR <span className="font-mono tabular-nums text-cyan-300">10억</span> 이상
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                에듀테크 전문 VC (미래에셋벤처, 스파크랩, 블루포인트 등) 관심.{' '}
                <span className="text-cyan-300">2027년 하반기</span> 도달 가능.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
