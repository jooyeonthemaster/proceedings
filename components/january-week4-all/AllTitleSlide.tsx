'use client';

import { motion } from 'framer-motion';

export default function AllTitleSlide() {
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
            <span className="text-cyan-400 font-medium">2026년 1월 4주차</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl font-bold text-white mb-6">
            전체 직원 회의록
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mb-12">
            개발팀 업무 공유 & 성과 보고
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/50 rounded-xl p-6 border border-cyan-500/30"
            >
              <div className="text-4xl mb-3">💻</div>
              <div className="text-xl font-bold text-cyan-400">개발팀 업무</div>
              <div className="text-gray-400 text-sm mt-1">뿌덕 온라인 사이트 현황</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/50 rounded-xl p-6 border border-purple-500/30"
            >
              <div className="text-4xl mb-3">🏆</div>
              <div className="text-xl font-bold text-purple-400">성과 공유</div>
              <div className="text-gray-400 text-sm mt-1">김제연 수석 성과 보고</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/50 rounded-xl p-6 border border-emerald-500/30"
            >
              <div className="text-4xl mb-3">💡</div>
              <div className="text-xl font-bold text-emerald-400">우리가 배울 점</div>
              <div className="text-gray-400 text-sm mt-1">기업가 정신과 열정</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
