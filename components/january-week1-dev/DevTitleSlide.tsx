'use client';

import { motion } from 'framer-motion';

export default function DevTitleSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Date Badge */}
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-6 py-2 mb-8">
            <span className="text-emerald-400 font-medium">2026년 1월 1주차</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl font-bold text-white mb-6">
            개발팀 진행상황
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mb-12">
            프로젝트 현황 및 정산 계획
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-gray-700"
            >
              <div className="text-3xl font-bold text-emerald-400">3건</div>
              <div className="text-gray-400 text-sm mt-1">정산 예정</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-gray-700"
            >
              <div className="text-3xl font-bold text-blue-400">800만</div>
              <div className="text-gray-400 text-sm mt-1">신규 개발비</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-gray-700"
            >
              <div className="text-3xl font-bold text-purple-400">1명</div>
              <div className="text-gray-400 text-sm mt-1">신규 프리랜서</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-gray-700"
            >
              <div className="text-3xl font-bold text-orange-400">진행중</div>
              <div className="text-gray-400 text-sm mt-1">뿌덕 V2</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
