'use client';

import { motion } from 'framer-motion';

const stats = [
  { v: '3,000', s: '만원', label: '확정 지원금', sub: '최대치 = 평균치 (감액 없음)', color: 'text-emerald-300', border: 'border-emerald-700/40' },
  { v: '10:1', s: '↑', label: '1차 경쟁률', sub: '서류 단계 통과', color: 'text-amber-300', border: 'border-amber-700/40' },
  { v: '2:1', s: '↓', label: '발표 경쟁률', sub: '발표 통과 가능성 ↑↑', color: 'text-cyan-300', border: 'border-cyan-700/40' },
  { v: '4/28', s: '(화)', label: '발표 평가일', sub: '비행기 취소 → 조기 귀국 확정', color: 'text-rose-300', border: 'border-rose-700/40' },
];

const points = [
  { id: '01', title: '서류 1차 통과', sub: '한국언론진흥재단 미디어 스타트업 지원사업 — 1차 선정.' },
  { id: '02', title: '지원금 명시', sub: '총 3,000만원 (명시 = 확정). 최대 한도가 아니라 약속된 금액.' },
  { id: '03', title: '경쟁률 반전', sub: '1차 10:1 → 발표 2:1 미만. 발표 통과 시 곧 입금.' },
];

export default function GrantSelectedSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-emerald-300 text-sm font-medium tracking-wider">GRANT · 한국언론진흥재단</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">미디어 스타트업 지원사업 1차 선정</h2>
          <p className="text-slate-500">서류 통과 = 50% 통과. 발표 평가만 넘으면 3,000만원 확정.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className={`bg-slate-900/60 rounded-xl p-4 border ${s.border} text-center`}>
              <div className={`text-3xl font-bold font-mono tabular-nums ${s.color}`}>
                {s.v}<span className="text-base align-middle ml-0.5">{s.s}</span>
              </div>
              <div className="text-xs text-slate-400 mt-1 font-semibold">{s.label}</div>
              <div className="text-[10px] text-slate-500 mt-1 leading-snug">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-slate-900/40 rounded-2xl p-5 border border-emerald-900/40">
          <div className="text-xs uppercase tracking-widest text-emerald-400/80 mb-3 font-semibold">팩트 체크 · 3가지</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {points.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.1 }} className="bg-slate-950/40 rounded-lg px-4 py-3 border border-emerald-900/30 flex items-start gap-3">
                <div className="text-sm font-mono text-emerald-300 shrink-0 mt-0.5">{p.id}</div>
                <div>
                  <div className="text-sm font-semibold text-emerald-200 leading-tight">{p.title}</div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">{p.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
