'use client';

import { motion } from 'framer-motion';

export default function TitleSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950/30 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-emerald-500/10"
            style={{
              width: `${400 + i * 220}px`,
              height: `${400 + i * 220}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.08, 0.2, 0.08],
            }}
            transition={{
              duration: 5 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-5xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Date Badge */}
          <div className="inline-flex items-center bg-emerald-900/30 border border-emerald-500/30 rounded-full px-6 py-2 mb-8">
            <span className="text-emerald-300/90 font-medium">2026년 4월 1주차 | 4월 8일 (수)</span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm uppercase tracking-[0.3em] text-emerald-400/70 mb-4"
          >
            All-Hands Meeting | Q1 Closing &amp; Q2 Kickoff
          </motion.p>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              1분기 결산, 2분기 출항
            </motion.span>
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-emerald-500/70 to-cyan-700 mx-auto mb-8"></div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-xl text-slate-300/90 mb-12"
          >
            Q1 KPI 결과 보고 + 서울혁신챌린지 집중 + 외주 영업 본격 가동 + 뿌덕 시즌 4 착수
          </motion.p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-emerald-800/40"
            >
              <div className="text-2xl font-bold text-emerald-300/90">1억</div>
              <div className="text-xs text-slate-500 mt-1">서울혁신챌린지</div>
              <div className="text-slate-400 text-sm mt-1">1차 합격, 발표 준비</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-cyan-800/40"
            >
              <div className="text-2xl font-bold text-cyan-300/90">Q2</div>
              <div className="text-slate-400 text-sm mt-1">외주영업 KPI 신설</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-violet-800/40"
            >
              <div className="text-2xl font-bold text-violet-300/90">S4</div>
              <div className="text-slate-400 text-sm mt-1">뿌덕 시즌 4 착수</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-amber-800/30"
            >
              <div className="text-2xl font-bold text-amber-300/90">연간</div>
              <div className="text-slate-400 text-sm mt-1">지원금 확보 지속</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
