'use client';

import { motion } from 'framer-motion';

export default function TitleSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Rain effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${60 + Math.random() * 80}px`,
              top: `-${Math.random() * 100}px`,
            }}
            animate={{
              y: [0, 800],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 1.5 + Math.random() * 1,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Date Badge */}
          <div className="inline-flex items-center bg-slate-800/60 border border-slate-600/50 rounded-full px-6 py-2 mb-8">
            <span className="text-slate-400 font-medium">2026년 3월 4주차 | 3월 30일</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-200 mb-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              올해는&hellip; 좀 힘든 해
            </motion.span>
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-slate-600 to-red-900/50 mx-auto mb-8"></div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl text-slate-400 mb-12"
          >
            지원사업 전멸 현황 + 뿌덕 시즌3 개발 + 자립 각오
          </motion.p>

          {/* Quick Stats - gloomy */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-red-900/40"
            >
              <div className="text-3xl font-bold text-red-400/80">ALL</div>
              <div className="text-slate-500 text-sm mt-1">FAIL</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-red-900/40"
            >
              <div className="text-3xl font-bold text-red-400/80">0건</div>
              <div className="text-slate-500 text-sm mt-1">합격 지원사업</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-slate-700/40"
            >
              <div className="text-3xl font-bold text-blue-400/60">S3</div>
              <div className="text-slate-500 text-sm mt-1">뿌덕 시즌3</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-amber-900/30"
            >
              <div className="text-3xl font-bold text-amber-400/60">각오</div>
              <div className="text-slate-500 text-sm mt-1">자립 의지</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
