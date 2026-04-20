'use client';

import { motion } from 'framer-motion';

const breakdown = [
  { item: '강의비', value: 1200, formula: '시급 20만 × 60h', barClass: 'bg-fuchsia-600/80', text: 'text-fuchsia-300' },
  { item: '개발 항목', value: 400, formula: '잔여 인건비 → 개발 1건 처리', barClass: 'bg-violet-600/80', text: 'text-violet-300' },
];

const totals = [
  { k: '총 잡혀있던 인건비', v: '200만 × 8개월 = 1,600만', sub: 'AI마케터 양성과정 명목, 김기홍 회사 측 잡힌 금액' },
  { k: '강의 정산', v: '1,200만', sub: '시급 20만 × 60시간 강의비로 정산' },
  { k: '잔여', v: '400만 → 개발 1건', sub: '딱 떨어지는 정리. 개발 작업 하나 추가 처리' },
];

const before = [
  { k: '구조', v: '주연 시급 10만 → 박사급 타인 명의 우회 → 소득세 차감 + 수수료 발생 + 정산 흐름 복잡' },
  { k: '문제', v: '실수령액 손실 + 명의 빌리는 부담 + 향후 단가 협상 매번 반복' },
];

const after = [
  { k: '구조', v: '김기홍 본인 명의로 직접 강의 = 시급 20만 풀 정산 (이중 처리·우회 제로)' },
  { k: '효과', v: '실수령액 보전 + 명의 빌릴 일 없음 + 5월 첫 강의 시작 시점부터 깔끔히 진행' },
];

export default function MarketerCourseFinanceSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-950 via-slate-900 to-violet-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-5">
          <div className="inline-flex items-center bg-fuchsia-900/40 border border-fuchsia-700/40 rounded-full px-5 py-1.5 mb-3">
            <span className="text-fuchsia-300 text-sm font-medium tracking-wider">FINANCE · 1,600만 → 1,200 + 400</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">AI마케터 양성과정 인건비 정리</h2>
          <p className="text-slate-500">200만 × 8개월 = 1,600만의 분배 — 강의 1,200 + 개발 400으로 깔끔히 정산.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
          {totals.map((t, i) => (
            <motion.div key={t.k} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="bg-slate-900/60 rounded-xl p-4 border border-fuchsia-900/40 text-center">
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">{t.k}</div>
              <div className="text-xl font-bold text-fuchsia-300 font-mono tabular-nums mb-1">{t.v}</div>
              <div className="text-[10px] text-slate-400 leading-snug">{t.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-slate-900/40 rounded-2xl p-4 mb-4 border border-fuchsia-900/30">
          <div className="text-xs uppercase tracking-widest text-fuchsia-400/80 mb-3 font-semibold">금액 분배 · 1,600만</div>
          <div className="space-y-2">
            {breakdown.map((b, i) => (
              <div key={b.item} className="flex items-center gap-3">
                <div className="w-24 text-xs text-slate-300 font-semibold shrink-0">{b.item}</div>
                <div className="flex-1 bg-slate-950/60 rounded-lg h-8 overflow-hidden relative">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${(b.value / 1600) * 100}%` }} transition={{ delay: 0.6 + i * 0.15, duration: 0.8 }} className={`h-full ${b.barClass} flex items-center justify-end pr-3`}>
                    <span className="text-xs text-white font-mono font-bold">{b.value}만</span>
                  </motion.div>
                </div>
                <div className={`text-[10px] ${b.text} font-mono w-32 shrink-0`}>{b.formula}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="bg-rose-950/30 rounded-xl p-4 border border-rose-800/50">
            <div className="text-xs uppercase tracking-widest text-rose-400 mb-2 font-semibold">BEFORE · 우회 구조</div>
            <div className="space-y-1.5">
              {before.map((b) => (
                <div key={b.k} className="text-[11px] text-slate-300">
                  <span className="text-rose-300 font-semibold">{b.k}: </span>{b.v}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="bg-fuchsia-950/30 rounded-xl p-4 border border-fuchsia-700/50">
            <div className="text-xs uppercase tracking-widest text-fuchsia-400 mb-2 font-semibold">AFTER · 본인 명의 직접</div>
            <div className="space-y-1.5">
              {after.map((a) => (
                <div key={a.k} className="text-[11px] text-slate-200">
                  <span className="text-fuchsia-300 font-semibold">{a.k}: </span>{a.v}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
