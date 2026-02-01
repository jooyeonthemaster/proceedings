'use client';

import { motion } from 'framer-motion';

export default function CasePowerSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">시그니처 케이스의 힘</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-8 border border-red-500/30 text-center"
            >
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">❌</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Before</h3>
              <p className="text-gray-400 mb-4">그냥 10ml 향수</p>
              <div className="bg-red-500/10 rounded-lg p-4">
                <p className="text-red-400 font-semibold">가치 없음</p>
                <p className="text-gray-500 text-sm mt-1">어디서나 볼 수 있는 향수</p>
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-8 border border-emerald-500/30 text-center"
            >
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">After</h3>
              <p className="text-gray-400 mb-4">시그니처 케이스</p>
              <div className="bg-emerald-500/10 rounded-lg p-4">
                <p className="text-emerald-400 font-semibold">가치 창출</p>
                <p className="text-gray-500 text-sm mt-1">브랜드 아이덴티티</p>
              </div>
            </motion.div>
          </div>

          {/* 결론 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl p-8 border border-orange-500/30">
              <p className="text-2xl font-bold text-white">
                케이스가 <span className="text-orange-400">브랜드 아이덴티티</span>
              </p>
              <p className="text-gray-400 mt-2">3D 프린팅으로 빠른 상품 개발 가능</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
