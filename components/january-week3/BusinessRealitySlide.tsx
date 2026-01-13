'use client';

import { motion } from 'framer-motion';

export default function BusinessRealitySlide() {
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
            <span className="text-red-400 text-sm font-medium tracking-wider uppercase">
              Reality Check
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              현실 직시
            </h2>
          </div>

          {/* Two Reality Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 적자 현실 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📉</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">적자 구조</h3>
                  <span className="text-red-400 text-sm">문제 1</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-dark/50 rounded-lg p-4">
                  <p className="text-gray-300">
                    지원금을 제외하면
                  </p>
                  <p className="text-red-400 font-bold text-lg mt-1">
                    지속적인 적자 상태
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>지원금 의존도 높음</span>
                </div>
              </div>
            </motion.div>

            {/* 더 심각한 문제 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚨</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">더 심각한 문제</h3>
                  <span className="text-orange-400 text-sm">문제 2</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-dark/50 rounded-lg p-4">
                  <p className="text-gray-300">
                    단순 적자가 아니라
                  </p>
                  <p className="text-orange-400 font-bold text-lg mt-1">
                    성장 가능성 없는 적자
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                  <span>구조적 한계 존재</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Key Insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-light/50 border border-gray-700 rounded-2xl p-6"
          >
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-gray-400 text-sm">지원금 있을 때</div>
                <div className="text-yellow-400 font-bold">겨우 유지</div>
              </div>
              <div className="text-4xl text-gray-600">→</div>
              <div className="text-center">
                <div className="text-3xl mb-2">📭</div>
                <div className="text-gray-400 text-sm">지원금 없을 때</div>
                <div className="text-red-400 font-bold">적자 확정</div>
              </div>
              <div className="text-4xl text-gray-600">→</div>
              <div className="text-center">
                <div className="text-3xl mb-2">📈</div>
                <div className="text-gray-400 text-sm">성장 가능성</div>
                <div className="text-red-500 font-bold">없음</div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Warning */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-500">
              이 현실을 인정한 상태에서, AI교 계획의 실현 가능성을 다시 계산해봅시다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
