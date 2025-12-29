'use client';

import { motion } from 'framer-motion';

export default function AccentWOWDataSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-3">
            제안
          </span>
          <h2 className="text-4xl font-bold text-white">
            📊 <span className="text-purple-400">이탈 고객 데이터 수집</span>
          </h2>
        </motion.div>

        {/* 제안 내용 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl p-6 border border-purple-500/30 mb-5"
        >
          <h3 className="text-purple-400 font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">📝</span> 제안 내용
          </h3>
          <div className="bg-dark/50 rounded-lg p-4">
            <p className="text-gray-300 text-lg">
              알바생(이우빈)에게 요청:<br />
              <span className="text-cyan-400 font-bold text-xl">비싸서 가격을 듣고 돌아가는 고객 수를 기록</span>
            </p>
          </div>
        </motion.div>

        {/* 가설 검증 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 mb-5"
        >
          <h3 className="text-cyan-400 font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">🔬</span> 가설 검증
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
              <h4 className="text-red-400 font-bold mb-2">현재</h4>
              <p className="text-gray-300 text-sm">10명 중 <span className="text-white font-bold">3명</span>만 구매 (1.5만 원)</p>
              <p className="text-2xl text-white font-bold mt-2">= 4.5만 원</p>
            </div>
            <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
              <h4 className="text-green-400 font-bold mb-2">만약 5,000원 상품 출시 시</h4>
              <p className="text-gray-300 text-sm">10명 중 <span className="text-white font-bold">10명</span> 구매</p>
              <p className="text-2xl text-white font-bold mt-2">= 5만 원</p>
            </div>
          </div>
          <div className="text-center">
            <span className="text-primary font-bold">→ 매출 증가 가능성 검증</span>
          </div>
        </motion.div>

        {/* 참고 & 주의 */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/30"
          >
            <h3 className="text-amber-400 font-bold mb-2 flex items-center gap-2">
              <span className="text-lg">📌</span> 참고
            </h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>3.8만 원 구매자는 어차피 <span className="text-amber-400 font-bold">비싼 걸 살 사람</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>문제는 1.5만 원도 부담스러워서 돌아가는 <span className="text-amber-400 font-bold">70%</span></span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-red-500/10 rounded-xl p-4 border border-red-500/30"
          >
            <h3 className="text-red-400 font-bold mb-2 flex items-center gap-2">
              <span className="text-lg">⚠️</span> 주의
            </h3>
            <p className="text-gray-300 text-sm">
              바로 저렴한 버전을 출시하자는 게 <span className="text-red-400 font-bold">아님</span><br />
              일단 <span className="text-white font-bold">최소 한 달 데이터</span>로 분석 필요
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
