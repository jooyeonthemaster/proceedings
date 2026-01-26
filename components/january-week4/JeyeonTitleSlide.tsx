'use client';

import { motion } from 'framer-motion';

export default function JeyeonTitleSlide() {
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
            <span className="text-purple-400 font-medium">PART 3</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl font-bold text-white mb-6">
            프리랜서 김제연 성장 보고
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mb-12">
            우리가 배워야 할 점들
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
                <div className="text-purple-400">개발팀 프리랜서</div>
              </div>
            </div>

            {/* Website Link */}
            <div className="bg-dark/50 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-2">개발 포트폴리오</div>
              <a
                href="https://www.flower-signage.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                🌸 flower-signage.com
              </a>
              <p className="text-gray-500 text-sm mt-2">
                김제연이 개발한 디지털 화환 사이트
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
