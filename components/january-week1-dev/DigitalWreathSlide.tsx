'use client';

import { motion } from 'framer-motion';

export default function DigitalWreathSlide() {
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
            <span className="text-pink-400 text-sm font-medium tracking-wider uppercase">
              New Project
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              🌸 디지털 화환 개발
            </h2>
          </div>

          {/* Main Card */}
          <div className="bg-gradient-to-br from-pink-500/10 via-dark-light to-purple-500/10 border border-pink-500/30 rounded-3xl p-8">
            {/* Budget & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-dark/50 rounded-2xl p-6 text-center"
              >
                <div className="text-gray-400 text-sm mb-2">총 개발비</div>
                <div className="text-5xl font-bold text-pink-400">800만원</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-dark/50 rounded-2xl p-6 text-center"
              >
                <div className="text-gray-400 text-sm mb-2">목표 일정</div>
                <div className="text-5xl font-bold text-purple-400">1월 중</div>
                <div className="text-gray-500 text-sm mt-1">개발 및 정산 완료</div>
              </motion.div>
            </div>

            {/* Developer Assignment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark/50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👩‍💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">김제연</h3>
                  <p className="text-gray-400">개발팀 신규 프리랜서</p>
                </div>
                <span className="ml-auto px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                  담당자 배정
                </span>
              </div>

              <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">프로젝트 배정</span>
                  <span className="text-white font-medium">디지털 화환 전체 개발</span>
                </div>
              </div>
            </motion.div>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-3 bg-dark/30 rounded-xl p-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">신규 프로젝트</span>
              </div>

              <div className="flex items-center gap-3 bg-dark/30 rounded-xl p-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-300">1월 내 완료</span>
              </div>

              <div className="flex items-center gap-3 bg-dark/30 rounded-xl p-4">
                <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-gray-300">800만원 정산</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
