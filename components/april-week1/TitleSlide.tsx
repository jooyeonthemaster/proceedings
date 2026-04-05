'use client';

import { motion } from 'framer-motion';

export default function TitleSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Geometric pulse effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-indigo-500/10"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'easeInOut',
            }}
          />
        ))}
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-5xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Date Badge */}
          <div className="inline-flex items-center bg-indigo-900/40 border border-indigo-500/30 rounded-full px-6 py-2 mb-8">
            <span className="text-indigo-300/80 font-medium">2026년 4월 1주차 | 4월 5일</span>
          </div>

          {/* Meeting Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm uppercase tracking-[0.3em] text-indigo-400/60 mb-4"
          >
            4월 1주차 임원진 회의 | 1분기 KPI 총정리 &amp; 방향성 재정립
          </motion.p>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-200 mb-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              1분기를 돌아보다
            </motion.span>
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-indigo-600/60 to-slate-700 mx-auto mb-8"></div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl text-slate-400 mb-12"
          >
            지원사업 성과 분석 + 개발팀 KPI 점검 + 전문성 &amp; 조직 방향성 재정립
          </motion.p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-red-900/40"
            >
              <div className="text-2xl font-bold text-red-400/80">5%</div>
              <div className="text-xs text-slate-500 mt-1">1,000만 / 2억</div>
              <div className="text-slate-500 text-sm mt-1">지원사업 달성률</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-indigo-800/40"
            >
              <div className="text-2xl font-bold text-indigo-400/80">880만</div>
              <div className="text-slate-500 text-sm mt-1">외주 개발 정산</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-blue-800/40"
            >
              <div className="text-2xl font-bold text-blue-400/70">S3</div>
              <div className="text-slate-500 text-sm mt-1">뿌덕 시즌3 완성</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-amber-900/30"
            >
              <div className="text-2xl font-bold text-amber-400/70">방향성</div>
              <div className="text-slate-500 text-sm mt-1">조직 재정립</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
