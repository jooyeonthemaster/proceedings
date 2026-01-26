'use client';

import { motion } from 'framer-motion';

export default function CTOTitleSlide() {
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
            <span className="text-cyan-400 font-medium">PART 2</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl font-bold text-white mb-6">
            CTO 역할 - 개발 현황
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mb-12">
            지원사업 바빠도 개발은 소홀히 할 수 없다
          </p>

          {/* Key Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              개발 딜레이는 절대 없다
            </div>
            <p className="text-gray-400 mt-4">
              결국 우리의 핵심은 기술력. 아무리 바빠도 개발은 계속된다.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-emerald-500/30"
            >
              <div className="text-2xl font-bold text-emerald-400">V2</div>
              <div className="text-gray-400 text-sm mt-1">금일 완료</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-purple-500/30"
            >
              <div className="text-2xl font-bold text-purple-400">V3</div>
              <div className="text-gray-400 text-sm mt-1">기획 중</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-amber-500/30"
            >
              <div className="text-2xl font-bold text-amber-400">PG</div>
              <div className="text-gray-400 text-sm mt-1">3월 예정</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
