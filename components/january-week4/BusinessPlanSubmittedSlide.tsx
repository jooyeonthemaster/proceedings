'use client';

import { motion } from 'framer-motion';

export default function BusinessPlanSubmittedSlide() {
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
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
              Submitted Successfully
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              제출 완료 사업계획서
            </h2>
            <p className="text-gray-400 mt-2">총 3건 제출 완료</p>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {/* 고려대 캠퍼스타운 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🏫</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white">고려대 캠퍼스타운</h3>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">
                        제출 완료
                      </span>
                    </div>
                    <p className="text-gray-400 mt-1">와작홈즈 - 센테리어_센트데스티네이션</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-400">완료</div>
                </div>
              </div>
            </motion.div>

            {/* 네안데르 aicraft */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white">네안데르 aicraft</h3>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                        제출 완료
                      </span>
                    </div>
                    <p className="text-gray-400 mt-1">(주)네안데르 - AI 창작 플랫폼</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-400">완료</div>
                </div>
              </div>
            </motion.div>

            {/* 디딤돌 R&D */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🔬</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white">디딤돌 R&D</h3>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                        제출 완료
                      </span>
                    </div>
                    <p className="text-gray-400 mt-1">(주)네안데르 - 연구개발 사업</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-400">완료</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-6 py-3 rounded-full border border-emerald-500/30">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-emerald-400 font-bold">하루 0.5개씩 꾸준히 작성 중</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
