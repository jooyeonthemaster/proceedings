'use client';

import { motion } from 'framer-motion';

export default function ProductStrategyTitleSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-orange-900/20 to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-500/50 rounded-full px-6 py-2 mb-8">
            <span className="text-orange-400 font-medium">PART 3</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            악센트 아이디
          </h1>
          <h2 className="text-3xl text-gray-300 mb-6">
            제품 전략
          </h2>

          <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-8"></div>

          {/* 핵심 인사이트 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl p-8 border border-orange-500/30 max-w-3xl mx-auto"
          >
            <p className="text-xl text-gray-400 mb-4">핵심 인사이트</p>
            <div className="text-4xl font-bold text-white mb-4">
              제품 = <span className="text-orange-400">케이스</span>
            </div>
            <p className="text-gray-300">시그니처 케이스가 가치를 창출한다</p>
          </motion.div>

          {/* 제품 라인업 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex justify-center space-x-4"
          >
            <span className="bg-dark-light/50 px-4 py-2 rounded-lg text-gray-400">10ml</span>
            <span className="bg-dark-light/50 px-4 py-2 rounded-lg text-gray-400">50ml</span>
            <span className="bg-dark-light/50 px-4 py-2 rounded-lg text-gray-400">뿌덕 디퓨저</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
