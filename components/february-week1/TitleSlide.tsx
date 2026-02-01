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
          <div className="inline-flex items-center bg-rose-500/20 border border-rose-500/50 rounded-full px-6 py-2 mb-8">
            <span className="text-rose-400 font-medium">2026년 2월 1주차</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            2026년 1분기 KPI 설정
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mb-12">
            개발팀 & 사업기획팀 목표 수립
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-cyan-500/30"
            >
              <div className="text-3xl font-bold text-cyan-400">2명</div>
              <div className="text-gray-400 text-sm mt-1">개발팀 인원</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-emerald-500/30"
            >
              <div className="text-3xl font-bold text-emerald-400">2억</div>
              <div className="text-gray-400 text-sm mt-1">사업계획서 목표</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-orange-500/30"
            >
              <div className="text-3xl font-bold text-orange-400">4개</div>
              <div className="text-gray-400 text-sm mt-1">법인 지원사업</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-purple-500/30"
            >
              <div className="text-3xl font-bold text-purple-400">분기 1</div>
              <div className="text-gray-400 text-sm mt-1">뿌덕 프로그램</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
