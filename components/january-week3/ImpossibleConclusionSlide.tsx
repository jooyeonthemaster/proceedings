'use client';

import { motion } from 'framer-motion';

export default function ImpossibleConclusionSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Big Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-10"
          >
            <div className="inline-block p-4 bg-red-500/20 rounded-full mb-6">
              <span className="text-6xl">🚫</span>
            </div>
            <h2 className="text-5xl font-bold text-red-400 mb-4">
              "절대 불가능"
            </h2>
            <p className="text-xl text-gray-400">
              5개월 내 유튜브 바이럴 + 브랜딩 + B2C 수익 창출
            </p>
          </motion.div>

          {/* Reality Check List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-light/50 border border-red-500/30 rounded-2xl p-6 mb-6"
          >
            <h3 className="text-lg font-bold text-white mb-4">왜 불가능한가?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-dark/50 rounded-lg p-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 font-bold">1</span>
                </div>
                <div>
                  <p className="text-white font-medium">유튜브 바이럴</p>
                  <p className="text-gray-400 text-sm">
                    바이럴은 통제할 수 없는 변수. 운과 타이밍에 의존
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-dark/50 rounded-lg p-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 font-bold">2</span>
                </div>
                <div>
                  <p className="text-white font-medium">브랜딩 확립</p>
                  <p className="text-gray-400 text-sm">
                    브랜드 인지도 구축에는 최소 1-2년 필요
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-dark/50 rounded-lg p-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 font-bold">3</span>
                </div>
                <div>
                  <p className="text-white font-medium">B2C 수익</p>
                  <p className="text-gray-400 text-sm">
                    고객 기반 없이 5개월 내 안정적 수익 불가능
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Worst Case Scenario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-red-400 mb-4 text-center">
              실패 시 최악의 시나리오
            </h3>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="bg-dark/50 rounded-xl px-4 py-3 text-center">
                <div className="text-gray-400 text-sm">5개월 후</div>
                <div className="text-red-400 font-medium">자금 고갈</div>
              </div>
              <span className="text-gray-600 text-2xl">+</span>
              <div className="bg-dark/50 rounded-xl px-4 py-3 text-center">
                <div className="text-gray-400 text-sm">바이럴</div>
                <div className="text-red-400 font-medium">실패</div>
              </div>
              <span className="text-gray-600 text-2xl">+</span>
              <div className="bg-dark/50 rounded-xl px-4 py-3 text-center">
                <div className="text-gray-400 text-sm">수익</div>
                <div className="text-red-400 font-medium">없음</div>
              </div>
              <span className="text-gray-600 text-2xl">=</span>
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl px-4 py-3 text-center">
                <div className="text-red-400 font-bold text-lg">사업 종료</div>
              </div>
            </div>
          </motion.div>

          {/* Transition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-500">
              그렇다면 우리는 무엇을 해야 할까요?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
