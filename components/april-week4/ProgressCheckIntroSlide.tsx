'use client';

import { motion } from 'framer-motion';

const owners = [
  { name: '유재영', role: 'CEO · 영업', tasks: 4, color: 'from-emerald-600 to-cyan-800', border: 'border-emerald-700/40', accent: 'text-emerald-300' },
  { name: '유선화', role: 'CMO · 마케팅', tasks: 4, color: 'from-fuchsia-600 to-violet-800', border: 'border-fuchsia-700/40', accent: 'text-fuchsia-300' },
  { name: '이동주', role: '재무/운영 · QA', tasks: 6, color: 'from-blue-600 to-indigo-800', border: 'border-blue-700/40', accent: 'text-blue-300' },
  { name: '김주연', role: 'CTO · 개발', tasks: 5, color: 'from-cyan-600 to-indigo-800', border: 'border-cyan-700/40', accent: 'text-cyan-300' },
];

const rules = [
  { k: '한 줄 진척률', v: '0% / 30% / 60% / 90% / DONE — 숫자 하나로 답한다.' },
  { k: '막힌 지점 1개', v: '“이게 안 풀린다”는 1개만. 두루뭉술한 “바쁘다”는 금지.' },
  { k: '필요한 도움 명시', v: '누구에게 무엇을 받아야 다음 단계가 풀리는지 못박아 말한다.' },
];

export default function ProgressCheckIntroSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-slate-900 to-rose-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <div className="inline-flex items-center bg-amber-900/40 border border-amber-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-amber-300 text-sm font-medium tracking-wider">PROGRESS CHECK · 4/15 → 4/20</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">5일이 지났다. 각자 어디까지 왔는가</h2>
          <p className="text-slate-500">4/15 회의에서 합의한 책임을 한 명씩 진척률·막힘·필요도움 3줄로 공유한다.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {owners.map((o, i) => (
            <motion.div key={o.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className={`bg-slate-900/60 rounded-xl p-4 border ${o.border} text-center`}>
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${o.color} flex items-center justify-center mb-3 text-lg font-bold text-white`}>
                {o.name.slice(1)}
              </div>
              <div className="text-base font-bold text-slate-100">{o.name}</div>
              <div className="text-[11px] text-slate-500 mb-2">{o.role}</div>
              <div className={`text-xs ${o.accent} font-mono`}>책임 {o.tasks}건</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-slate-900/40 rounded-2xl p-5 border border-amber-900/40">
          <div className="flex items-baseline justify-between mb-3">
            <div className="text-sm uppercase tracking-widest text-amber-400/80">공유 양식 · 한 사람당 3줄</div>
            <div className="text-xs text-slate-600">길게 말하지 마라</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {rules.map((r, i) => (
              <motion.div key={r.k} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + i * 0.1 }} className="bg-slate-950/60 rounded-lg px-4 py-3 border border-amber-900/30">
                <div className="text-xs text-amber-300 font-semibold mb-1">{r.k}</div>
                <div className="text-[11px] text-slate-400 leading-relaxed">{r.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
