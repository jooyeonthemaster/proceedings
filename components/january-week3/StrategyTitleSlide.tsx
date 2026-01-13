'use client';

import { motion } from 'framer-motion';

export default function StrategyTitleSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Part Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-2 bg-amber-500/20 border border-amber-500/50 rounded-full text-amber-400 text-sm font-medium tracking-wider uppercase">
              Part 2: COO 역할
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            전략적 방향 전환
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-2xl text-gray-400">
              <span className="text-red-400">단기 과열</span>에서{' '}
              <span className="text-emerald-400">장기 생존</span>으로
            </p>
          </motion.div>

          {/* Key Topics Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-dark-light/50 border border-cyan-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">💡</div>
              <div className="text-cyan-400 text-sm font-medium">AI교 반응</div>
            </div>
            <div className="bg-dark-light/50 border border-red-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">⚠️</div>
              <div className="text-red-400 text-sm font-medium">현실 직시</div>
            </div>
            <div className="bg-dark-light/50 border border-amber-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-amber-400 text-sm font-medium">핵심 깨달음</div>
            </div>
            <div className="bg-dark-light/50 border border-emerald-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-emerald-400 text-sm font-medium">브랜드 피벗</div>
            </div>
          </motion.div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12"
          >
            <p className="text-gray-500 text-sm">
              개발 현황 보고 후, 전략적 논의로 전환합니다
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
