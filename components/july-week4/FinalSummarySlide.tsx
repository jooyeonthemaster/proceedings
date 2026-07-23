'use client';

import { motion } from 'framer-motion';

export default function FinalSummarySlide() {
  const pillars = [
    { emoji: '🎯', text: '오너를 정한다', sub: '스모트 마케팅을 책임지고 밀고나갈 한 사람' },
    { emoji: '⏰', text: '매일 만난다', sub: '15분 데일리 — 보드가 매일 움직이게' },
    { emoji: '🧠', text: '제품을 안다', sub: '전원 스모트 1회 완주 + 데모 세션' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-emerald-500/10"
            style={{ width: `${350 + i * 250}px`, height: `${350 + i * 250}px`, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.2, 0.08] }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.7, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight mb-6">
            개학 전 4주,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400">이번엔 구조를 바꿔서 간다 💪</span>
          </h2>

          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            우려는 7/7에 했고, 실행안은 7/15에 나왔다.
            <br />
            오늘 7/23에 남은 건 <span className="text-slate-200 font-semibold">사람과 체계를 정하는 것</span>뿐이다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {pillars.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.15 }} className="bg-slate-900/60 rounded-2xl p-6 border border-emerald-800/40">
                <div className="text-3xl mb-3">{p.emoji}</div>
                <div className="text-lg font-bold text-slate-100 mb-1">{p.text}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{p.sub}</div>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 1 }} className="text-sm text-slate-500">
            2026. 7. 23. · 네안데르 전체 회의 · 작성 김주연
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
