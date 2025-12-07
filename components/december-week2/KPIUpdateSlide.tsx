'use client';

import { motion } from 'framer-motion';

export default function KPIUpdateSlide() {
  const week2Items = [
    { name: "안산 포토부스", amount: "352만원", status: "정산 완료 예정" },
    { name: "안산 지도 앱", amount: "300만원", status: "정산 완료 예정" },
    { name: "마케팅 앱", amount: "500만원", status: "정산 완료 예정" }
  ];

  const week3Items = [
    { name: "잡매칭 플랫폼", amount: "350만원", status: "개발 완료, PG 심사 진행", note: "개발 완료 상태" },
    { name: "디지털 화환 앱", amount: "550만원", status: "개발 완료, PG 심사 진행", note: "외주용역 진행 (부가세 포함)" }
  ];

  return (
    <div className="w-full h-screen bg-white p-16 flex flex-col justify-center relative overflow-hidden font-sans">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-green-500 pl-8 mb-12"
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-3">KPI 정산 현황</h2>
        <p className="text-xl text-gray-500">11월 지연 건 → 12월 정산 완료 예정</p>
      </motion.div>

      <div className="flex gap-10">
        {/* Left: 12월 2주차 정산 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 bg-green-50 rounded-3xl p-8 border-2 border-green-200"
        >
          <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded-full mr-4"></span>
            12월 2주차 정산 예정
          </h3>
          <div className="space-y-4">
            {week2Items.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 shadow-sm border border-green-100">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl text-gray-800">{item.name}</span>
                  <span className="font-mono font-bold text-2xl text-green-600">{item.amount}</span>
                </div>
                <span className="text-base text-green-500 mt-2 block">{item.status}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 bg-green-100 rounded-2xl">
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl text-green-800">2주차 합계</span>
              <span className="font-mono font-bold text-green-700 text-3xl">1,152만원</span>
            </div>
          </div>
        </motion.div>

        {/* Right: 12월 3주차 정산 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1 bg-blue-50 rounded-3xl p-8 border-2 border-blue-200"
        >
          <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
            <span className="w-4 h-4 bg-blue-500 rounded-full mr-4"></span>
            12월 3주차 정산 예정
          </h3>
          <div className="space-y-4">
            {week3Items.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl text-gray-800">{item.name}</span>
                  <span className="font-mono font-bold text-2xl text-blue-600">{item.amount}</span>
                </div>
                <span className="text-base text-blue-500 mt-2 block">{item.status}</span>
                {item.note && (
                  <span className="text-sm text-gray-600 mt-2 block bg-gray-100 px-3 py-2 rounded-lg inline-block">
                    {item.note}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 bg-blue-100 rounded-2xl">
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl text-blue-800">3주차 합계</span>
              <span className="font-mono font-bold text-blue-700 text-3xl">900만원</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 bg-gray-900 rounded-2xl p-8 text-white"
      >
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-bold text-2xl mb-2">11월 대비 상황 개선</h4>
            <p className="text-gray-400 text-lg">11월 0% → 12월 정산 정상화 진행 중</p>
            <p className="text-yellow-400 text-base mt-2">* 유재영 전무상무 - 디지털 화환 정산 및 자금 연락 담당</p>
          </div>
          <div className="text-right">
            <div className="text-5xl font-bold text-green-400">정상 궤도</div>
            <p className="text-gray-400 text-lg mt-2">12월 총 정산 예정: 2,052만원</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
