'use client';

import { motion } from 'framer-motion';

export default function PhotoBoothCrisisSlide() {
  return (
    <div className="w-full h-screen bg-white p-12 flex flex-col relative overflow-hidden font-sans">
      {/* Background Alert Effect */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-red-50 rounded-full opacity-50 blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-gray-900 pl-6 mb-10 z-10"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-2">포토부스 사업 현황 분석</h2>
        <p className="text-red-500 font-semibold">"개발은 완료되었으나, 비즈니스가 멈춰있다"</p>
      </motion.div>

      <div className="flex-1 grid grid-cols-2 gap-12 z-10">
        {/* Left: Status Cards */}
        <div className="space-y-6">
          {/* Development Status - SUCCESS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 border-l-8 border-green-500 rounded-r-xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-gray-800">하드웨어 개발</h3>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">SUCCESS</span>
            </div>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">로봇 몸통 개발 완료</span><br/>
              안산 과학축제 실전 투입 및 안정성 검증 확보
            </p>
          </motion.div>

          {/* Sales Status - FAILED */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 border-l-8 border-red-500 rounded-r-xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-gray-800">영업 실적 (Q4)</h3>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">FAILED</span>
            </div>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">추가 계약 0건</span><br/>
              안산 과학축제 이후 영업 성과 전무
            </p>
          </motion.div>

          {/* Marketing Status - FAILED */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 border-l-8 border-red-500 rounded-r-xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-gray-800">마케팅 현황</h3>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">FAILED</span>
            </div>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">진행률 0%</span><br/>
              홍보 채널 미확보, 마케팅 전략 부재
            </p>
          </motion.div>
        </div>

        {/* Right: Analysis & Conclusion */}
        <div className="flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-900 text-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-red-400 border-b border-gray-700 pb-4">
              Critical Issue
            </h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">KPI Target Analysis</p>
                <p className="text-lg font-medium">
                  "완벽한 캐시카우 모델을 꿈꿨으나,<br/>
                  <span className="text-yellow-400 font-bold underline">세일즈 엔진</span>이 멈춰있는 상태"
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-sm text-gray-300 mb-2">Missing Actions:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-red-300">
                    <span className="mr-2">❌</span> 악센트 와우(2호점) 설치 테스트 미이행
                  </li>
                  <li className="flex items-center text-red-300">
                    <span className="mr-2">❌</span> 축제/행사 타겟 아웃바운드 영업 부재
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-500 mb-2">Action Plan Required</p>
                <p className="text-xl font-bold text-white">
                  "개발 중심에서 <span className="text-green-400">영업/마케팅 중심</span>으로<br/>
                  우선순위 즉각 전환 필요"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}








