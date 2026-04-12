'use client';

import { motion } from 'framer-motion';

const productBlocks = [
  {
    id: 'product',
    label: 'PRODUCT',
    title: '제품 정의',
    accent: 'emerald',
    borderColor: 'border-emerald-800/50',
    points: [
      '동네 학원 대상 AI 시험 생성 솔루션',
      '내신 대비 위주 (메가스터디·시대인재 같은 대기업 X)',
      '국영수사과 전 과목 대응이 목표',
      '초기에는 영어 과목부터 시작',
    ],
  },
  {
    id: 'target',
    label: 'TARGET',
    title: '타겟 고객',
    accent: 'cyan',
    borderColor: 'border-cyan-800/50',
    points: [
      '"동네 학원 중 돈좀 만진다는 사람들"',
      '월매출 3,000만원 이상',
      '원장이 IT에 거부감 없음',
      '내신 대비 프린트물을 이미 많이 만드는 곳',
    ],
  },
  {
    id: 'price',
    label: 'PRICING',
    title: '가격 정책',
    accent: 'emerald',
    borderColor: 'border-emerald-800/50',
    points: [
      '월 50만원, 크레딧 기반 SaaS',
      '서울 25개구 × 학원 3개 = 75개 학원',
      '75개 × 50만원 = 월 3,750만원',
      '전 과목 확장 시 ARPU 80~100만원',
    ],
  },
  {
    id: 'firstClient',
    label: 'STATUS',
    title: '현재 상황 & 첫 고객',
    accent: 'cyan',
    borderColor: 'border-cyan-800/50',
    points: [
      '김주연이 3월부터 기획 시작',
      '5월 출시 예정',
      '첫 고객: 기존 다니던 영어 학원 선생님',
      '개발비 + 월 사용료 모두 결제',
    ],
  },
];

const headlineMetrics = [
  { label: '월 단가', value: '50', unit: '만원' },
  { label: '서울 타겟', value: '75', unit: '개 학원' },
  { label: '예상 MRR', value: '3,750', unit: '만원/월' },
  { label: '출시', value: '5', unit: '월' },
];

export default function ClassroomProductSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-emerald-400 text-sm font-medium tracking-wider">SECTION 2-1 · CLASSROOM AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            학원 AI 솔루션 — 제품 개요
          </h2>
          <p className="text-slate-500">PRODUCT · TARGET · PRICING · FIRST CLIENT</p>
        </motion.div>

        {/* Headline Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
        >
          {headlineMetrics.map((m, i) => (
            <div
              key={m.label}
              className="bg-slate-900/70 border border-emerald-900/40 rounded-xl px-4 py-3"
            >
              <div className="text-[10px] text-emerald-400/80 tracking-[0.18em] font-medium mb-1">
                {m.label}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl md:text-3xl font-bold text-slate-100 font-mono tabular-nums">
                  {m.value}
                </span>
                <span className="text-xs text-slate-500">{m.unit}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Product Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productBlocks.map((block, i) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              className={`bg-slate-900/60 rounded-2xl p-5 border ${block.borderColor}`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-slate-100">{block.title}</h3>
                <span
                  className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full border ${
                    block.accent === 'emerald'
                      ? 'bg-emerald-900/40 text-emerald-300 border-emerald-700/40'
                      : 'bg-cyan-900/40 text-cyan-300 border-cyan-700/40'
                  }`}
                >
                  {block.label}
                </span>
              </div>
              <ul className="space-y-2">
                {block.points.map((p, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.1 + j * 0.05, duration: 0.4 }}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span className={`mt-1 shrink-0 h-1 w-1 rounded-full ${block.accent === 'emerald' ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
                    <span>{p}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Calculation Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="mt-5 bg-emerald-900/20 border border-emerald-800/40 rounded-xl px-5 py-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm"
        >
          <span className="text-emerald-400 font-mono tabular-nums">서울 25개구</span>
          <span className="text-slate-500">×</span>
          <span className="text-emerald-400 font-mono tabular-nums">학원 3개</span>
          <span className="text-slate-500">=</span>
          <span className="text-emerald-300 font-mono tabular-nums font-semibold">75개 학원</span>
          <span className="text-slate-500">×</span>
          <span className="text-emerald-400 font-mono tabular-nums">월 50만원</span>
          <span className="text-slate-500">=</span>
          <span className="text-emerald-200 font-mono tabular-nums font-bold text-base">월 3,750만원</span>
        </motion.div>
      </div>
    </div>
  );
}
