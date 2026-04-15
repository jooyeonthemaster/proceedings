'use client';

import { motion } from 'framer-motion';

export default function FinalSummarySlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full border border-rose-500/10" style={{ width: `${200 + i * 180}px`, height: `${200 + i * 180}px`, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.2, 0.05] }} transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.7 }} />
        ))}
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ duration: 1 }} className="text-xs uppercase tracking-[0.5em] text-rose-400/60 mb-8">
          END · APRIL WEEK 3 EXECUTIVE MEETING
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1.2 }} className="text-8xl md:text-9xl font-bold text-slate-100 mb-6 tracking-tight">
          END
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="h-1 w-24 bg-gradient-to-r from-rose-600/60 via-amber-600/60 to-rose-600/60 mx-auto mb-8" />

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{ delay: 0.8, duration: 1 }} className="text-2xl text-slate-200 mb-3">
          네안데르 4월 3주차 임원진 회의록
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 1.0, duration: 1 }} className="text-base text-slate-500 mb-12">
          2026.04.15 (수) · D-1 이탈리아 출발 전 긴급 업데이트
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 1 }} className="inline-flex items-center gap-3 bg-slate-900/60 border border-slate-800/60 rounded-full px-6 py-2.5">
          <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
          <span className="text-sm text-slate-300">감사합니다</span>
          <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}
