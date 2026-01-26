'use client';

import { motion } from 'framer-motion';

export default function BusinessPlanPendingSlide() {
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
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              Ready to Submit
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              작성 완료 / 제출 대기
            </h2>
            <p className="text-gray-400 mt-2">금일 제출 예정</p>
          </div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-500/50 rounded-2xl p-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-amber-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-5xl">📋</span>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">초창패 딥테크</h3>
                  <span className="px-4 py-1 bg-amber-500/20 text-amber-400 text-sm font-bold rounded-full animate-pulse">
                    금일 제출
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500">기업:</span>
                    <span className="text-white font-medium">일해라컴퍼니</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500">아이템:</span>
                    <span className="text-cyan-400 font-medium">aiable_aicraft</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500">담당자:</span>
                    <span className="text-purple-400 font-medium">유재영 전무이사</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-4xl font-bold text-amber-400">TODAY</div>
                <div className="text-gray-400 mt-1">제출 예정</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 pt-6 border-t border-amber-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">진행률</span>
                <span className="text-amber-400 font-bold">95%</span>
              </div>
              <div className="w-full bg-dark rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '95%' }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full"
                />
              </div>
              <p className="text-gray-500 text-sm mt-2">
                지원사업 잔잔바리 업무 처리 후 제출 진행
              </p>
            </div>
          </motion.div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 bg-dark-light/50 rounded-xl p-4 border border-gray-700"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">
                작성 완료 → 최종 검토 → <span className="text-amber-400 font-bold">금일 제출</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
