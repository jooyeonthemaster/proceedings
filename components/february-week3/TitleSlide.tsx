'use client';

import { motion } from 'framer-motion';

export default function TitleSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Date Badge */}
          <div className="inline-flex items-center bg-violet-500/20 border border-violet-500/50 rounded-full px-6 py-2 mb-8">
            <span className="text-violet-400 font-medium">2026년 2월 4주차 | 2월 23일</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI 커플 서비스 & B2B 파이프라인
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mb-12">
            야판사야 해커톤 → AI 서비스 본격 확장 + 실전 비즈니스 기획
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-pink-500/30"
            >
              <div className="text-3xl font-bold text-pink-400">AI</div>
              <div className="text-gray-400 text-sm mt-1">커플 서비스</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-cyan-500/30"
            >
              <div className="text-3xl font-bold text-cyan-400">B2B</div>
              <div className="text-gray-400 text-sm mt-1">비즈니스 파이프</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-emerald-500/30"
            >
              <div className="text-3xl font-bold text-emerald-400">SaaS</div>
              <div className="text-gray-400 text-sm mt-1">사용료 모델</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-orange-500/30"
            >
              <div className="text-3xl font-bold text-orange-400">.kr</div>
              <div className="text-gray-400 text-sm mt-1">neander.co.kr</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
