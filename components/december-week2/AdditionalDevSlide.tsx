'use client';

import { motion } from 'framer-motion';

export default function AdditionalDevSlide() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-dark via-dark-light to-dark p-16 flex flex-col justify-center relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-primary pl-8 mb-12"
      >
        <h2 className="text-5xl font-bold text-white mb-3">추가 개발 건 합의</h2>
        <p className="text-xl text-gray-400">디지털 화환 앱 추가 개발 계약 완료</p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-dark-light rounded-3xl p-10 border-2 border-primary/30 max-w-4xl mx-auto w-full"
      >
        {/* Project Info */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-block bg-primary/10 border-2 border-primary rounded-2xl px-8 py-4 mb-6"
          >
            <span className="text-primary text-xl font-bold">디지털 화환 앱</span>
          </motion.div>

          <h3 className="text-3xl font-bold text-white mb-4">추가 개발 합의 완료</h3>
        </div>

        {/* Amount */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl p-8 mb-8"
        >
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-2">추가 개발 금액</p>
            <div className="text-6xl font-bold text-emerald-400 mb-2">330만원</div>
            <p className="text-emerald-300 text-lg">(부가세 포함)</p>
          </div>
        </motion.div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-dark rounded-xl p-6 border border-gray-600"
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">✅</span>
              <h4 className="text-xl font-bold text-white">계약 상태</h4>
            </div>
            <p className="text-primary text-lg font-semibold">합의 완료</p>
            <p className="text-gray-400 text-sm mt-2">추가 기능 개발 범위 확정</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-dark rounded-xl p-6 border border-gray-600"
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">💰</span>
              <h4 className="text-xl font-bold text-white">금액 구성</h4>
            </div>
            <p className="text-white text-lg">기본: 300만원</p>
            <p className="text-gray-400 text-sm mt-2">부가세(10%): 30만원 포함</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 text-center"
      >
        <p className="text-gray-500 text-lg">
          기존 550만원 + 추가 330만원 = <span className="text-primary font-bold">총 880만원</span> 계약 규모
        </p>
      </motion.div>
    </div>
  );
}
