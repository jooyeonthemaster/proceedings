'use client';

import { motion } from 'framer-motion';

export default function NovKPIStatusSlide() {
  const kpiItems = [
    { name: "안산 과학축제 포토부스", amount: "352만원" },
    { name: "안산 축제 지도 앱", amount: "300만원" },
    { name: "마케팅 앱", amount: "500만원" },
    { name: "잡매칭 플랫폼", amount: "350만원" }
  ];

  return (
    <div className="w-full h-screen bg-white p-12 flex flex-col relative overflow-hidden font-sans">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-red-500 pl-6 mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-2">11월 KPI 달성 현황</h2>
        <p className="text-gray-500">목표 대비 정산 완료 내역 보고</p>
      </motion.div>

      <div className="flex-1 flex gap-12 items-center">
        {/* Left: The Shocking Truth */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-1/3 bg-red-50 rounded-3xl p-10 text-center border border-red-100 shadow-lg flex flex-col justify-center h-96"
        >
          <h3 className="text-gray-600 font-semibold mb-4">11월 정산 달성률</h3>
          <div className="text-[10rem] font-black text-red-600 leading-none tracking-tighter mb-4">
            0<span className="text-6xl">%</span>
          </div>
          <p className="text-red-500 font-bold text-xl bg-red-100 py-2 rounded-lg inline-block mx-auto px-6">
            "목표 미달성: 죄송합니다"
          </p>
        </motion.div>

        {/* Right: The Details */}
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900 rounded-2xl p-8 text-white shadow-xl"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-300 border-b border-gray-700 pb-4 flex justify-between">
              <span>🎯 11월 정산 목표 내역</span>
              <span className="text-white">Total: 1,502만원</span>
            </h3>
            <ul className="space-y-4">
              {kpiItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <span className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    {item.name}
                  </span>
                  <span className="font-mono font-bold text-red-400">{item.amount}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-right text-sm text-gray-400">
               * 위 항목 모두 정산 지연 (0원 입금)
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

