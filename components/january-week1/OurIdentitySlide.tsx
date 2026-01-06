'use client';

import { motion } from 'framer-motion';

export default function OurIdentitySlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      </div>

      <div className="max-w-4xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            우리의 정체성
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            우리는 <span className="text-primary">누구</span>인가
          </h2>
        </motion.div>

        {/* Identity Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-primary/10 to-pink-500/10 rounded-3xl p-10 border border-primary/30 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl text-white font-bold leading-relaxed"
            >
              AI를 활용하는
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-5xl text-primary font-black mt-4"
            >
              미친 창작 집단
            </motion.p>
          </div>
        </motion.div>

        {/* What This Means */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-3xl mb-3">🤖</p>
            <p className="text-white font-bold">AI를 활용</p>
            <p className="text-gray-500 text-sm mt-1">도구가 아닌 협업자</p>
          </div>
          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-3xl mb-3">🤪</p>
            <p className="text-white font-bold">미친</p>
            <p className="text-gray-500 text-sm mt-1">예상치 못한 시도</p>
          </div>
          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-3xl mb-3">👥</p>
            <p className="text-white font-bold">창작 집단</p>
            <p className="text-gray-500 text-sm mt-1">예술가로서의 정체성</p>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-primary/20 to-pink-500/20 rounded-xl p-6 border border-primary/30 text-center">
            <p className="text-xl text-gray-300 mb-2">
              기술 회사가 아니다. 콘텐츠 제작사가 아니다.
            </p>
            <p className="text-2xl text-white font-bold">
              우리는 <span className="text-primary">예술가</span>다.
            </p>
            <p className="text-gray-500 mt-3 text-sm">
              AI라는 심연을 탐험하는 예술가 집단.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
