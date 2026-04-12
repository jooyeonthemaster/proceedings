'use client';

import { motion } from 'framer-motion';

const metrics = [
  {
    label: '월 고정비',
    value: '약 4,500',
    unit: '만원',
    sub: '인건비 + 매장 운영비 + 기타',
    color: 'border-amber-700/50',
    text: 'text-amber-300',
    bar: 'from-amber-500/60 to-amber-700/60',
  },
  {
    label: '월 매출',
    value: '평균 2,500',
    unit: '만원',
    sub: '6개 사업부 합산 평균',
    color: 'border-blue-700/50',
    text: 'text-blue-300',
    bar: 'from-blue-500/60 to-blue-700/60',
  },
  {
    label: '월 적자',
    value: '약 -2,000',
    unit: '만원',
    sub: '4,500 − 2,500 = -2,000',
    color: 'border-red-700/60',
    text: 'text-red-300',
    bar: 'from-red-500/60 to-red-700/60',
  },
  {
    label: '잔여 현금',
    value: '약 8,000',
    unit: '만원',
    sub: '추정치 · 정확 잔액 확인 필요',
    color: 'border-rose-700/60',
    text: 'text-rose-300',
    bar: 'from-rose-500/60 to-rose-700/60',
  },
];

const months = ['04월', '05월', '06월', '07월', '08월'];

export default function FinancialStatusSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Subtle warning glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-900/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-7"
        >
          <div className="inline-flex items-center bg-red-900/40 border border-red-700/50 rounded-full px-5 py-1.5 mb-5">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse mr-2"></div>
            <span className="text-red-300 text-sm font-medium tracking-wider">
              FINANCIAL STATUS · 1-3 · CRISIS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            재무 현황 — <span className="text-red-300">런웨이 4개월, 위기</span>
          </h2>
          <p className="text-slate-500">
            현금 소진 시점이 악센트 재계약 시점(8월 1일)과 정확히 겹친다
          </p>
        </motion.div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className={`bg-slate-900/70 rounded-2xl p-5 border ${m.color}`}
            >
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">{m.label}</div>
              <div className="flex items-baseline gap-1">
                <div className={`text-3xl md:text-4xl font-bold ${m.text} font-mono tabular-nums leading-none`}>
                  {m.value}
                </div>
                <div className="text-base text-slate-400">{m.unit}</div>
              </div>
              <div className="mt-3 h-1.5 bg-slate-950/80 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
                  className={`h-full bg-gradient-to-r ${m.bar}`}
                ></motion.div>
              </div>
              <div className="text-[11px] text-slate-500 mt-2 leading-snug">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Runway Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-gradient-to-br from-red-950/40 via-slate-900/70 to-amber-950/30 rounded-2xl p-6 border border-red-700/50 ring-1 ring-red-800/30 shadow-lg shadow-red-950/30"
        >
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div>
              <div className="text-xs uppercase tracking-widest text-red-300/80 font-semibold mb-1">
                Runway · 잔여 활주로
              </div>
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-bold text-red-300 font-mono tabular-nums">
                  약 4개월
                </div>
                <div className="text-sm text-slate-400">— 8월경 소진</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500">계산식</div>
              <div className="text-sm text-slate-300 font-mono">
                8,000만 ÷ 2,000만/월 = 4개월
              </div>
            </div>
          </div>

          {/* Timeline bar */}
          <div className="mt-5">
            <div className="flex justify-between mb-2">
              {months.map((mo, i) => (
                <div
                  key={mo}
                  className={`text-[11px] font-mono tabular-nums ${
                    i === 4 ? 'text-red-300 font-bold' : 'text-slate-500'
                  }`}
                >
                  {mo}
                </div>
              ))}
            </div>

            <div className="relative h-12 bg-slate-950/70 rounded-lg border border-slate-800/70 overflow-hidden">
              {/* Cash bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '80%' }}
                transition={{ delay: 1.0, duration: 1.2, ease: 'easeOut' }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-700/70 via-red-700/70 to-red-800/80"
              >
                <div className="h-full flex items-center px-3">
                  <span className="text-[11px] text-slate-100 font-medium">
                    현금 소진 진행 (월 -2,000만)
                  </span>
                </div>
              </motion.div>
              {/* Burn marker */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
                className="absolute top-0 bottom-0 left-[80%] w-0.5 bg-red-300"
              >
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-300 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-red-300 font-mono whitespace-nowrap">
                  소진 지점
                </div>
              </motion.div>
            </div>
            <div className="flex justify-between mt-7 text-[11px] text-slate-500">
              <div>Today · 04.12 · 잔액 8,000만</div>
              <div className="text-red-300 font-medium">08월 · ZERO</div>
            </div>
          </div>

          {/* Bottom alert row */}
          <div className="mt-5 pt-4 border-t border-red-900/40 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-800/60">
              <div className="text-[10px] uppercase tracking-wider text-slate-500">위기 신호 ①</div>
              <div className="text-xs text-slate-300 mt-1 leading-snug">
                매월 -2,000만씩 현금이 줄어드는 구조 — 적자가 만성화된 상태
              </div>
            </div>
            <div className="bg-slate-950/50 rounded-lg p-3 border border-amber-800/40">
              <div className="text-[10px] uppercase tracking-wider text-amber-400/80">위기 신호 ②</div>
              <div className="text-xs text-slate-300 mt-1 leading-snug">
                런웨이 종료(8월) = 악센트 재계약 시점(8.1) · 두 결정이 동시 발생
              </div>
            </div>
            <div className="bg-slate-950/50 rounded-lg p-3 border border-red-800/50">
              <div className="text-[10px] uppercase tracking-wider text-red-300">위기 신호 ③</div>
              <div className="text-xs text-slate-300 mt-1 leading-snug">
                잔여 현금 8,000만은 추정치 — 4월 14일 회의 전 정확한 잔액 확정 필수
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
