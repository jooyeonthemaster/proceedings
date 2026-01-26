'use client';

import { motion } from 'framer-motion';

export default function Week4TitleSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Date Badge */}
          <div className="inline-flex items-center bg-blue-500/20 border border-blue-500/50 rounded-full px-6 py-2 mb-8">
            <span className="text-blue-400 font-medium">2026년 1월 4주차</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl font-bold text-white mb-6">
            네안데르 개발팀 회의록
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mb-12">
            사업계획서 현황 & 개발 진행 보고
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-emerald-500/30"
            >
              <div className="text-3xl font-bold text-emerald-400">3건</div>
              <div className="text-gray-400 text-sm mt-1">제출 완료</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-orange-500/30"
            >
              <div className="text-3xl font-bold text-orange-400">18건</div>
              <div className="text-gray-400 text-sm mt-1">남은 사업계획서</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-cyan-500/30"
            >
              <div className="text-3xl font-bold text-cyan-400">V2</div>
              <div className="text-gray-400 text-sm mt-1">뿌덕 금일 마무리</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-purple-500/30"
            >
              <div className="text-3xl font-bold text-purple-400">김제연</div>
              <div className="text-gray-400 text-sm mt-1">성장 보고</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
