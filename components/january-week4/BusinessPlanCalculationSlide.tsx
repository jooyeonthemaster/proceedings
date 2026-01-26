'use client';

import { motion } from 'framer-motion';

export default function BusinessPlanCalculationSlide() {
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
            <span className="text-red-400 text-sm font-medium tracking-wider uppercase">
              Workload Calculation
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              사업계획서 작업량 계산
            </h2>
          </div>

          {/* Main Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/50 rounded-2xl p-6 text-center"
            >
              <div className="text-6xl font-bold text-orange-400 mb-2">18</div>
              <div className="text-gray-300 font-medium">총 남은 사업계획서</div>
              <div className="text-gray-500 text-sm mt-2">(관광 성장 포함 시)</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/50 rounded-2xl p-6 text-center"
            >
              <div className="text-6xl font-bold text-blue-400 mb-2">34</div>
              <div className="text-gray-300 font-medium">남은 작업 일수</div>
              <div className="text-gray-500 text-sm mt-2">1/26 ~ 2/28 기준</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/50 rounded-2xl p-6 text-center"
            >
              <div className="text-6xl font-bold text-red-400 mb-2">0.53</div>
              <div className="text-gray-300 font-medium">하루 평균 작업량</div>
              <div className="text-gray-500 text-sm mt-2">개/일</div>
            </motion.div>
          </div>

          {/* Calculation Detail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-dark-light/50 rounded-2xl p-6 border border-gray-700"
          >
            <h3 className="text-xl font-bold text-white mb-4">상세 계산</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">초창패 일반</span>
                <span className="text-white font-bold">2건</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">예술경영 초기</span>
                <span className="text-purple-400 font-bold">3건</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">관광 초기/성장</span>
                <span className="text-white font-bold">3건</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">강한 소상공인 + 캠퍼스타운</span>
                <span className="text-white font-bold">2건</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">창중대 + 청창사</span>
                <span className="text-white font-bold">5건</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-400">김제연 개인 (생애최초/예비관광/예창패)</span>
                <span className="text-cyan-400 font-bold">3건</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-600 flex items-center justify-between">
              <span className="text-white font-bold text-lg">총합</span>
              <span className="text-orange-400 font-bold text-2xl">18건</span>
            </div>
          </motion.div>

          {/* Formula */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-red-500/10 px-6 py-3 rounded-full border border-red-500/30">
              <span className="text-white font-mono">18건 ÷ 34일 =</span>
              <span className="text-red-400 font-bold text-xl">약 0.53개/일</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
