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
          <div className="inline-flex items-center bg-teal-500/20 border border-teal-500/50 rounded-full px-6 py-2 mb-8">
            <span className="text-teal-400 font-medium">2026년 3월 2주차 | 3월 9일</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            서류전쟁 마무리 & 다음 챕터
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mb-12">
            R&D 발표평가 완료 + 지원사업 현황 총정리 + 온라인 사업 가속화
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-amber-500/30"
            >
              <div className="text-3xl font-bold text-amber-400">R&D</div>
              <div className="text-gray-400 text-sm mt-1">발표평가 완료</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-emerald-500/30"
            >
              <div className="text-3xl font-bold text-emerald-400">880만</div>
              <div className="text-gray-400 text-sm mt-1">화환 정산 완료</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-cyan-500/30"
            >
              <div className="text-3xl font-bold text-cyan-400">3건</div>
              <div className="text-gray-400 text-sm mt-1">서류 합격</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-violet-500/30"
            >
              <div className="text-3xl font-bold text-violet-400">WOW</div>
              <div className="text-gray-400 text-sm mt-1">출시 일정 논의</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
