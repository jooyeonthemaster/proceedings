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
          <div className="inline-flex items-center bg-amber-500/20 border border-amber-500/50 rounded-full px-6 py-2 mb-8">
            <span className="text-amber-400 font-medium">2026년 3월 1주차 | 3월 2일</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            R&D 합격 & 전쟁의 서막
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-red-500 mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mb-12">
            지원사업 5건 동시 진행 + 나라장터 교육 입찰 + 데이터 분석 보고
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-emerald-500/30"
            >
              <div className="text-3xl font-bold text-emerald-400">R&D</div>
              <div className="text-gray-400 text-sm mt-1">서류 합격!</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-red-500/30"
            >
              <div className="text-3xl font-bold text-red-400">5건</div>
              <div className="text-gray-400 text-sm mt-1">마감 임박</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-blue-500/30"
            >
              <div className="text-3xl font-bold text-blue-400">7천만</div>
              <div className="text-gray-400 text-sm mt-1">교육 입찰</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-orange-500/30"
            >
              <div className="text-3xl font-bold text-orange-400">1.4억</div>
              <div className="text-gray-400 text-sm mt-1">매출 분석 완료</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
