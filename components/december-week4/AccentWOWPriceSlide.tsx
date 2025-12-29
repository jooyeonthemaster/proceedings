'use client';

import { motion } from 'framer-motion';

export default function AccentWOWPriceSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500 bg-opacity-20 text-amber-400 text-sm mb-3">
            악센트 WOW 이슈
          </span>
          <h2 className="text-4xl font-bold text-white">
            💸 <span className="text-amber-400">가격으로 인한 이탈 문제</span>
          </h2>
        </motion.div>

        {/* 현황 분석 비교표 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 mb-5"
        >
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">⚖️</span> 현황 분석
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30 text-center">
              <h4 className="text-green-400 font-bold mb-2">일반 생일 카페</h4>
              <p className="text-3xl text-white font-bold">커피 <span className="text-green-400">6,000원</span></p>
            </div>
            <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30 text-center">
              <h4 className="text-red-400 font-bold mb-2">악센트 WOW</h4>
              <p className="text-lg text-gray-300">페이퍼 사쉐 <span className="text-amber-400 font-bold">1.5만 원</span> (최저)</p>
              <p className="text-lg text-gray-300">50ml 향수 <span className="text-red-400 font-bold">3.8만 원</span> (최고)</p>
            </div>
          </div>
        </motion.div>

        {/* 문제점 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-red-500/10 rounded-xl p-5 border border-red-500/30 mb-5"
        >
          <h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">🚨</span> 문제
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>고객층: 대부분 <span className="text-red-400 font-bold">10대 소녀</span> (돈이 없음)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>약 <span className="text-red-400 font-bold text-2xl">70%</span>가 가격을 듣고 <span className="text-red-400 font-bold">구매 포기 후 이탈</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>그냥 생일 이벤트 중 하나로 방문했을 뿐, <span className="text-red-400 font-bold">향수에 대한 가치 인식 없음</span></span>
            </li>
          </ul>
        </motion.div>

        {/* 핵심 인사이트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-5 border border-amber-500/30"
        >
          <h3 className="text-amber-400 font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">💡</span> 핵심 인사이트
          </h3>
          <div className="bg-dark/50 rounded-lg p-4">
            <p className="text-gray-300 leading-relaxed">
              악센트 WOW에서는 <span className="text-amber-400 font-bold">&quot;향수&quot;라는 상품에 대한 가치는 전혀 없다.</span><br /><br />
              사람들은 향수를 구매하기 위해 방문하는 게 아니라,<br />
              홍대에서 진행되는 <span className="text-white font-bold">수많은 생일 이벤트 중 하나</span>로 방문하는 것.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
