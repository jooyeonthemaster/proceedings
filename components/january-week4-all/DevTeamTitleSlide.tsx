'use client';

import { motion } from 'framer-motion';

export default function DevTeamTitleSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Part Indicator */}
          <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-500/50 rounded-full px-6 py-2 mb-8">
            <span className="text-cyan-400 font-medium">PART 1</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl font-bold text-white mb-6">
            개발팀 업무 공유
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mb-12">
            뿌덕 온라인 사이트 개발 현황
          </p>

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full border-2 border-cyan-500/50"
          >
            <span className="text-7xl">💻</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
