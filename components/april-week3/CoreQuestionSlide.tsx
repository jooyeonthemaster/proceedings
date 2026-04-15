'use client';

import { motion } from 'framer-motion';

export default function CoreQuestionSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(244,63,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(244,63,94,0.5) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="max-w-5xl w-full relative z-10 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-sm uppercase tracking-[0.3em] text-rose-400/60 mb-10">
          CORE QUESTION · 4월 전체를 관통하는 질문
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="mb-10">
          <div className="text-7xl text-rose-500/30 mb-4 font-serif leading-none">“</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 leading-[1.35] mb-4">
            우리가 <span className="text-rose-300">뇌피셜로</span> 만들고 있지 않다는
            <br />
            <span className="text-rose-300">증거가</span> 있는가?
          </h1>
          <div className="text-7xl text-rose-500/30 font-serif leading-none">”</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="inline-flex items-center gap-3 bg-slate-900/60 border border-slate-800/60 rounded-full px-5 py-2">
          <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
          <span className="text-sm text-slate-400">김주연 <span className="text-slate-200 font-semibold">CTO</span> · 2026.04.15 업데이트 회의</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {[
            { k: '뇌피셜 금지', v: '4월 전 의사결정의 단일 원칙' },
            { k: '데이터 only', v: '마케팅 CTR · 영업 기능점수 · QA 이슈' },
            { k: '5대 산출물', v: '니즈·이름·요금제·기능Top3·유저플로우' },
          ].map((x, i) => (
            <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-800/60">
              <div className="text-xs uppercase tracking-widest text-rose-400/80 mb-1">{x.k}</div>
              <div className="text-sm text-slate-300 leading-relaxed">{x.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
