'use client';

import { motion } from 'framer-motion';

export default function KPIStatusSlide() {
  return (
    <div className="w-full h-screen bg-white p-16 flex flex-col justify-center relative overflow-hidden font-sans">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-red-500 pl-8 mb-12"
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-3">12월 2주차 정산 현황</h2>
        <p className="text-xl text-gray-500">현재까지 실제 정산: 여전히 0원</p>
      </motion.div>

      <div className="flex gap-10">
        {/* Left: 현재 상황 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 bg-red-50 rounded-3xl p-8 border-2 border-red-200"
        >
          <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
            <span className="w-4 h-4 bg-red-500 rounded-full mr-4"></span>
            실제 정산 현황
          </h3>

          <div className="text-center py-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="text-9xl font-bold text-red-500 mb-4"
            >
              0원
            </motion.div>
            <p className="text-xl text-red-600">12월 2주차 현재</p>
            <p className="text-gray-500 mt-4">11월부터 지속된 정산 지연 상태</p>
          </div>

          <div className="mt-6 p-5 bg-red-100 rounded-2xl">
            <p className="text-red-700 font-semibold text-center">
              ⚠️ 정산 정상화 지연 중
            </p>
          </div>
        </motion.div>

        {/* Right: 예정 정산 (변동 없음) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1 bg-gray-50 rounded-3xl p-8 border-2 border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
            <span className="w-4 h-4 bg-gray-500 rounded-full mr-4"></span>
            정산 예정 (지난주 대비 변동 없음)
          </h3>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-gray-800">2주차 예정</span>
                <span className="font-mono font-bold text-xl text-gray-600">1,152만원</span>
              </div>
              <span className="text-sm text-gray-500 mt-2 block">안산 포토부스, 안산 지도 앱, 마케팅 앱</span>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-gray-800">3주차 예정</span>
                <span className="font-mono font-bold text-xl text-gray-600">900만원</span>
              </div>
              <span className="text-sm text-gray-500 mt-2 block">잡매칭 플랫폼, 디지털 화환 앱</span>
            </div>
          </div>

          <div className="mt-6 p-5 bg-gray-100 rounded-2xl">
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg text-gray-800">12월 총 예정</span>
              <span className="font-mono font-bold text-gray-700 text-2xl">2,052만원</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">* 실제 정산 시점 미정</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6"
      >
        <div className="flex items-center">
          <span className="text-3xl mr-4">💡</span>
          <div>
            <h4 className="font-bold text-xl text-yellow-800 mb-1">참고 사항</h4>
            <p className="text-yellow-700">정산 지연 상황이 지속되고 있으나, 개발 프로젝트는 정상 진행 중입니다.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
