'use client';

import { motion } from 'framer-motion';

export default function RealityCalculationSlide() {
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
            <span className="text-orange-400 text-sm font-medium tracking-wider uppercase">
              Financial Reality
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              현실적 계산
            </h2>
            <p className="text-gray-400 mt-2">숫자로 보는 냉정한 현실</p>
          </div>

          {/* Cost Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-light/50 border border-orange-500/30 rounded-2xl p-6 mb-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 text-center">초기 투자 비용</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-dark/50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🚚</div>
                <div className="text-gray-400 text-sm">포터 트럭</div>
                <div className="text-orange-400 font-bold text-xl">1,500만원</div>
              </div>
              <div className="bg-dark/50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">👩‍💼</div>
                <div className="text-gray-400 text-sm">정연이 6개월</div>
                <div className="text-orange-400 font-bold text-xl">900만원+</div>
              </div>
              <div className="bg-dark/50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🏢</div>
                <div className="text-gray-400 text-sm">부동산 6개월</div>
                <div className="text-orange-400 font-bold text-xl">800만원</div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">총 필요 자금</span>
                <span className="text-red-400 font-bold text-2xl">약 3,000만원</span>
              </div>
            </div>
          </motion.div>

          {/* Time Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
          >
            {/* Before */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 rounded-2xl p-6 text-center">
              <div className="text-emerald-400 text-sm font-medium mb-2">투자 전 런웨이</div>
              <div className="text-5xl font-bold text-emerald-400 mb-2">1년</div>
              <div className="text-gray-400 text-sm">현재 자금으로 버틸 수 있는 기간</div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
              <div className="text-4xl text-gray-600">→</div>
            </div>

            {/* After */}
            <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-2xl p-6 text-center">
              <div className="text-red-400 text-sm font-medium mb-2">투자 후 런웨이</div>
              <div className="text-5xl font-bold text-red-400 mb-2">5개월</div>
              <div className="text-gray-400 text-sm">3,000만원 투자 후 남는 기간</div>
            </div>
          </motion.div>

          {/* Critical Question */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6"
          >
            <div className="text-center">
              <p className="text-xl text-white mb-4">
                <span className="text-red-400 font-bold">5개월</span> 안에 다음을 달성해야 합니다:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-dark/50 text-gray-300 rounded-full text-sm">
                  유튜브 바이럴 성공
                </span>
                <span className="px-4 py-2 bg-dark/50 text-gray-300 rounded-full text-sm">
                  브랜딩 확립
                </span>
                <span className="px-4 py-2 bg-dark/50 text-gray-300 rounded-full text-sm">
                  B2C 수익 창출
                </span>
              </div>
            </div>
          </motion.div>

          {/* Teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-500">
              과연 이것이 가능할까요?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
