'use client';

import { motion } from 'framer-motion';

export default function ProjectStatusDetailSlide() {
  return (
    <div className="w-full h-screen bg-white p-12 flex flex-col relative overflow-hidden font-sans">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 flex justify-between items-end"
      >
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">프로젝트별 진행 현황 & 12월 전망</h2>
          <p className="text-gray-500">"진행상 문제 없음, 4분기 목표 필달 예정"</p>
        </div>
        <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-bold text-sm">
          Q4 KPI 달성 청신호 🟢
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-8 h-full pb-10">
        {/* Left Column: Existing Projects */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
            <div className="flex justify-between mb-2">
               <h3 className="font-bold text-lg text-gray-800">안산 프로젝트 (포토부스/지도)</h3>
               <span className="text-blue-600 text-xs font-bold bg-blue-50 px-2 py-1 rounded">Delay</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">클라이언트 일정 조율 중</p>
            <div className="flex justify-between items-end">
              <div className="text-sm text-gray-500">예상 정산</div>
              <div className="font-bold text-blue-600">12월 2주차 완료</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500"></div>
            <div className="flex justify-between mb-2">
               <h3 className="font-bold text-lg text-gray-800">마케팅 앱</h3>
               <span className="text-yellow-600 text-xs font-bold bg-yellow-50 px-2 py-1 rounded">90% 진행</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">최종 피드백 반영 중</p>
            <div className="flex justify-between items-end">
              <div className="text-sm text-gray-500">예상 정산</div>
              <div className="font-bold text-gray-900">12월 1주차 완료</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
            <div className="flex justify-between mb-2">
               <h3 className="font-bold text-lg text-gray-800">잡매칭 플랫폼</h3>
               <span className="text-purple-600 text-xs font-bold bg-purple-50 px-2 py-1 rounded">PG 심사</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">개발 완료 및 디버깅 진행 중</p>
            <div className="flex justify-between items-end">
              <div className="text-sm text-gray-500">예상 정산</div>
              <div className="font-bold text-gray-900">12월 1~2주차 완료</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: New Project & Total */}
        <div className="flex flex-col h-full">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 shadow-xl mb-6 flex-1"
          >
            <div className="flex items-center mb-6">
               <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded mr-3">NEW</span>
               <h3 className="text-2xl font-bold">김기홍 화환 사이트</h3>
            </div>
            <div className="space-y-4">
               <p className="text-gray-300">
                 기술 발전으로 인한 빠른 구현 가능<br/>
                 12월 내 개발 마무리 예정
               </p>
               <div className="pt-4 border-t border-gray-700">
                 <p className="text-sm text-gray-400 mb-1">추가 매출 확보</p>
                 <p className="text-4xl font-bold text-green-400">550만원</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center"
          >
            <p className="text-blue-800 font-semibold mb-2">12월 예상 성과</p>
            <p className="text-sm text-gray-600">
              이월된 11월 목표 + 신규 프로젝트<br/>
              = <span className="font-bold text-blue-700">4분기 목표 초과 달성 예상</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}








