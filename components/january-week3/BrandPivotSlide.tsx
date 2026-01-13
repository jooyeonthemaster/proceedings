'use client';

import { motion } from 'framer-motion';

export default function BrandPivotSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
              Strategic Pivot
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              방향 전환
            </h2>
            <p className="text-gray-400 mt-2">창작 집단에서 브랜드로</p>
          </div>

          {/* Before → After */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 items-center"
          >
            {/* Before */}
            <div className="bg-gray-700/30 border border-gray-600/30 rounded-2xl p-6 text-center">
              <div className="text-gray-500 text-sm mb-2">BEFORE</div>
              <div className="text-2xl mb-3">🎨</div>
              <h3 className="text-xl font-bold text-gray-400">창작 집단</h3>
              <div className="mt-4 space-y-2 text-sm text-gray-500">
                <div>행사 기반 수익</div>
                <div>프로젝트 단위 작업</div>
                <div>축적 없는 챗바퀴</div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="w-16 h-16 bg-cyan-500/20 border-2 border-cyan-500 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">→</span>
              </motion.div>
            </div>

            {/* After */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-6 text-center">
              <div className="text-cyan-400 text-sm mb-2">AFTER</div>
              <div className="text-2xl mb-3">🏷️</div>
              <h3 className="text-xl font-bold text-cyan-400">브랜드</h3>
              <div className="mt-4 space-y-2 text-sm text-gray-300">
                <div>상품 기반 수익</div>
                <div>지속적인 판매</div>
                <div>자산 축적 가능</div>
              </div>
            </div>
          </motion.div>

          {/* New Brand Concept */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="text-gray-400 text-sm">NEW BRAND CONCEPT</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              "당신만의 향을 찾는
            </h3>
            <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
              가장 유쾌한 방법"
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-dark/50 text-purple-400 rounded-full text-sm border border-purple-500/30">
                AI × 향수
              </span>
              <span className="px-4 py-2 bg-dark/50 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                퍼스널 브랜딩
              </span>
              <span className="px-4 py-2 bg-dark/50 text-pink-400 rounded-full text-sm border border-pink-500/30">
                유쾌한 경험
              </span>
            </div>
          </motion.div>

          {/* Key Difference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 grid grid-cols-2 gap-4"
          >
            <div className="bg-dark-light/50 border border-gray-700 rounded-xl p-4 text-center">
              <div className="text-gray-500 text-sm mb-1">핵심 차이</div>
              <div className="text-white font-medium">판매할 때마다 자산 축적</div>
            </div>
            <div className="bg-dark-light/50 border border-gray-700 rounded-xl p-4 text-center">
              <div className="text-gray-500 text-sm mb-1">목표</div>
              <div className="text-white font-medium">반복 구매 + 팬덤 형성</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
