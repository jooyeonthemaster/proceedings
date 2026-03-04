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
          <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-500/50 rounded-full px-6 py-2 mb-8">
            <span className="text-cyan-400 font-medium">2026년 3월 1주차 | 전체 회의록</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            축하와 도전의 한 주
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mb-12">
            R&D 2억 합격 + 디지털 화환 정산 + AI 교육 사업 + 입찰 도전
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-yellow-500/30"
            >
              <div className="text-3xl font-bold text-yellow-400">2억</div>
              <div className="text-gray-400 text-sm mt-1">R&D 1차 합격</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-emerald-500/30"
            >
              <div className="text-3xl font-bold text-emerald-400">정산</div>
              <div className="text-gray-400 text-sm mt-1">디지털 화환 완료</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-blue-500/30"
            >
              <div className="text-3xl font-bold text-blue-400">입찰</div>
              <div className="text-gray-400 text-sm mt-1">동서울대 설명회</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-orange-500/30"
            >
              <div className="text-3xl font-bold text-orange-400">PG</div>
              <div className="text-gray-400 text-sm mt-1">카드 결제 곧!</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
