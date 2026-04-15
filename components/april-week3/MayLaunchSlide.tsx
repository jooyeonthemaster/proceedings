'use client';

import { motion } from 'framer-motion';

export default function MayLaunchSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-rose-950 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full border border-amber-500/10" style={{ width: `${400 + i * 220}px`, height: `${400 + i * 220}px`, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }} transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.8 }} />
        ))}
      </div>

      <div className="max-w-5xl w-full text-center relative z-10">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-sm uppercase tracking-[0.3em] text-amber-400/60 mb-10">
          MAY 2026 · SCALE-UP BEGINS
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-[1.15]">
          5월 =
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">실사용자 배포</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{ delay: 0.8, duration: 1 }} className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          4월 MVP 완성 → 5월 1주차 사전예약자·체험신청자에게 실제 배포. <br/>스케일업의 진짜 시작.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }} className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-slate-900/60 rounded-xl p-5 border border-amber-700/50">
            <div className="text-3xl font-bold font-mono text-amber-300 mb-1">10~20</div>
            <div className="text-xs text-slate-400">5/1주 온보딩 목표</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-5 border border-rose-700/50">
            <div className="text-3xl font-bold font-mono text-rose-300 mb-1">≥ 10%</div>
            <div className="text-xs text-slate-400">유료 전환율 목표</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-5 border border-amber-700/50">
            <div className="text-3xl font-bold font-mono text-amber-300 mb-1">+N구역</div>
            <div className="text-xs text-slate-400">대흥 외 지역 확장</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
