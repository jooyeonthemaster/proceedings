'use client';

import { motion } from 'framer-motion';

export default function DongseouldBidSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-blue-400 text-sm">PUBLIC BID</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">동서울대학교 AI 진로탐색 교육</h2>
          <p className="text-gray-400 mb-8">나라장터 입찰 설명회 참석 예정</p>

          <div className="max-w-3xl mx-auto">
            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-dark-light/60 rounded-xl p-6 border border-emerald-500/30"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-400">위임장 확보 완료</h3>
                </div>
                <p className="text-gray-400 text-sm">입찰 참여를 위한 위임장을 받았습니다</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-dark-light/60 rounded-xl p-6 border border-blue-500/30"
              >
                <div className="flex items-center mb-3">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3"
                  >
                    <span className="text-white text-lg">&#128197;</span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-blue-400">내일 입찰 설명회</h3>
                </div>
                <p className="text-gray-400 text-sm">첫 입찰 설명회 참석! 두근두근</p>
              </motion.div>
            </div>

            {/* Fun Comment */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20 text-center"
            >
              <p className="text-xl text-white mb-2">
                &#128147; 입찰 설명회는 처음이어서 두근거리네요
              </p>
              <p className="text-gray-500 text-sm">
                동서울대학교 AI 진로탐색 교육 프로그램 수주를 위한 첫 걸음
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
