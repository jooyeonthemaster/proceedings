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
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-emerald-400 text-sm">DIGITAL WREATH SERVICE</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">디지털 화환 서비스</h2>
          <p className="text-gray-400 mb-10">드디어 정산의 날이 다가왔습니다</p>

          {/* Main Status Card */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-emerald-500/40 mb-6"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl">&#128203;</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">세금계산서 발급 완료</h3>
                <p className="text-gray-300 text-lg">이번 주 중 정산 진행 예정</p>
              </div>

              {/* Timeline */}
              <div className="flex items-center justify-center space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-emerald-400 text-xs font-medium">서비스 완료</span>
                </div>

                <div className="w-16 h-0.5 bg-emerald-500"></div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-emerald-400 text-xs font-medium">세금계산서</span>
                </div>

                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-gray-600"></div>

                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-10 h-10 bg-amber-500/30 border-2 border-amber-500 rounded-full flex items-center justify-center mb-2"
                  >
                    <span className="text-amber-400 text-sm font-bold">$</span>
                  </motion.div>
                  <span className="text-amber-400 text-xs font-medium">정산 예정</span>
                </div>
              </div>
            </motion.div>

            {/* Fun note */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <p className="text-gray-500 text-sm">
                드디어 첫 외부 서비스 매출 정산! 작지만 의미 있는 한 걸음
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
