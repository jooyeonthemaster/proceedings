'use client';

import { motion } from 'framer-motion';

export default function JeyeonIntroSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Part Indicator */}
          <div className="inline-flex items-center bg-purple-500/20 border border-purple-500/50 rounded-full px-6 py-2 mb-8">
            <span className="text-purple-400 font-medium">PART 2</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl font-bold text-white mb-6">
            김제연 수석 성과 공유
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mb-12">
            개발팀의 열정과 기업가 정신
          </p>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-white">김제연</div>
                <div className="text-purple-400">개발팀 수석</div>
              </div>
            </div>

            {/* Current Projects */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark/50 rounded-xl p-4">
                <div className="text-2xl mb-2">🌸</div>
                <div className="text-white font-medium">디지털 화환</div>
                <div className="text-gray-500 text-sm">개발 진행 중</div>
              </div>
              <div className="bg-dark/50 rounded-xl p-4">
                <div className="text-2xl mb-2">🦆</div>
                <div className="text-white font-medium">오리 향수 케이스</div>
                <div className="text-gray-500 text-sm">열정적 개발</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
