'use client';

import { motion } from 'framer-motion';

export default function OverheatAlertSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Alert Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-10"
          >
            <div className="inline-block p-4 bg-red-500/20 rounded-full mb-4">
              <span className="text-5xl">⚠️</span>
            </div>
            <h2 className="text-4xl font-bold text-red-400">
              "단기 과열"
            </h2>
            <p className="text-gray-400 mt-2">냉정하게 현실을 직시할 시간</p>
          </motion.div>

          {/* Problem Cards */}
          <div className="space-y-4">
            {/* 기존 사업 문제 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/30 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">기존 사업의 본질</h3>
                  <p className="text-red-400 text-lg font-medium mb-2">
                    "우리의 것이 아니다"
                  </p>
                  <p className="text-gray-400">
                    행사 기반 사업은 결국 <span className="text-red-400">챗바퀴 구조</span>입니다.
                    끊임없이 새로운 행사를 따야 하고, 축적되는 것이 없습니다.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 챗바퀴 시각화 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/50 border border-orange-500/30 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4 text-center">챗바퀴 구조의 문제</h3>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="bg-dark/50 rounded-xl px-4 py-3 text-center">
                  <div className="text-orange-400 font-medium">행사 수주</div>
                </div>
                <span className="text-gray-600 text-2xl">→</span>
                <div className="bg-dark/50 rounded-xl px-4 py-3 text-center">
                  <div className="text-orange-400 font-medium">작업 수행</div>
                </div>
                <span className="text-gray-600 text-2xl">→</span>
                <div className="bg-dark/50 rounded-xl px-4 py-3 text-center">
                  <div className="text-orange-400 font-medium">정산 완료</div>
                </div>
                <span className="text-gray-600 text-2xl">→</span>
                <div className="bg-dark/50 rounded-xl px-4 py-3 text-center border-2 border-red-500/50">
                  <div className="text-red-400 font-medium">다시 처음으로</div>
                </div>
              </div>
              <p className="text-center text-gray-500 mt-4 text-sm">
                매번 0에서 시작 → 자산 축적 불가능
              </p>
            </motion.div>

            {/* 핵심 질문 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-amber-500/10 to-red-500/10 border border-amber-500/30 rounded-2xl p-6 text-center"
            >
              <p className="text-xl text-white">
                새로운 계획에 <span className="text-red-400 font-bold">과열</span>되기 전에,
              </p>
              <p className="text-xl text-white mt-2">
                먼저 <span className="text-amber-400 font-bold">현재의 현실</span>을 직시해야 합니다.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
