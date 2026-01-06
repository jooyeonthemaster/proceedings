'use client';

import { motion } from 'framer-motion';

export default function FreelancerContractSlide() {
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
              Contract Details
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              📋 프리랜서 계약 조건
            </h2>
            <p className="text-gray-400 mt-2">김제연 - 디지털 화환 프로젝트</p>
          </div>

          {/* Contract Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Original Terms */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/50 border border-gray-700 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-500 text-lg">📄</span>
                <h3 className="text-lg font-semibold text-gray-400">원래 계약 조건</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">기본 비율</span>
                  <span className="text-2xl font-bold text-gray-500">50%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">800만원 기준</span>
                  <span className="text-2xl font-bold text-gray-500 line-through">400만원</span>
                </div>
              </div>
            </motion.div>

            {/* Actual Terms */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-amber-400 text-lg">✅</span>
                <h3 className="text-lg font-semibold text-amber-400">실제 지급 금액</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">지급 금액</span>
                  <span className="text-3xl font-bold text-amber-400">300만원</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">비율</span>
                  <span className="text-xl font-medium text-gray-300">37.5%</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Reasons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-light/30 border border-gray-700 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span>💡</span> 금액 산정 이유
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">이미 개발된 부분 존재</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    기존에 개발해 둔 코드베이스가 있어 처음부터 시작하는 것이 아님
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-400 font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">수습기간 고려</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    신규 프리랜서 수습기간을 고려한 금액 산정
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">이미 충분한 금액</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    300만원도 업무량 대비 충분히 많이 지급하는 금액
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">💼</span>
              <div>
                <p className="text-emerald-400 font-medium">
                  수습기간 동안 다른 업무도 함께 진행 가능
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  충분한 금액이 지급되므로 해당 기간 동안 추가 업무 배정 가능
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
