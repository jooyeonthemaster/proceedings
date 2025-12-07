'use client';

import { motion } from 'framer-motion';

export default function AIInvestmentSlide() {
  return (
    <div className="w-full h-screen bg-white p-16 flex flex-col justify-center relative overflow-hidden font-sans">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-yellow-500 pl-8 mb-10"
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-3">김박사의 AI NEWS</h2>
        <p className="text-xl text-gray-500">AI 기반 주식 투자 실험 결과</p>
      </motion.div>

      <div className="flex gap-10">
        {/* Left: Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-2/5"
        >
          <div className="h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-10 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-yellow-900">투자 실험 결과</h3>

            <div className="space-y-5">
              <div className="bg-white bg-opacity-30 rounded-2xl p-5">
                <p className="text-yellow-900 text-base mb-2">투자 시작일</p>
                <p className="text-3xl font-bold">12월 3일</p>
              </div>

              <div className="bg-white bg-opacity-30 rounded-2xl p-5">
                <p className="text-yellow-900 text-base mb-2">투자 원금</p>
                <p className="text-4xl font-bold font-mono">300만원</p>
              </div>

              <div className="bg-white rounded-2xl p-5 text-yellow-600">
                <p className="text-yellow-700 text-base mb-2">수익</p>
                <p className="text-5xl font-bold font-mono">+9만원</p>
                <p className="text-base text-yellow-500 mt-2">* 토/일 장 마감 감안 시 괄목할만한 수익</p>
              </div>

              <div className="bg-red-100 rounded-2xl p-5 text-red-600">
                <p className="text-red-700 text-base mb-2">뇌동매매 손실</p>
                <p className="text-2xl font-bold">AI 무시 시 -1만원+</p>
                <p className="text-sm text-red-500 mt-1">AI 추천만 따랐으면 +10만원 이상 가능</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Method & Plans */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Method */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900 rounded-3xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">🤖</span> 종가 거래 방식
            </h3>
            <div className="grid grid-cols-4 gap-5">
              <div className="bg-gray-800 rounded-2xl p-5 text-center">
                <div className="text-4xl mb-3">📊</div>
                <p className="font-bold text-lg mb-1">거래량 분석</p>
                <p className="text-sm text-gray-400">당일 종가 거래량</p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-5 text-center">
                <div className="text-4xl mb-3">📈</div>
                <p className="font-bold text-lg mb-1">차트 분석</p>
                <p className="text-sm text-gray-400">차트 패턴 인식</p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-5 text-center">
                <div className="text-4xl mb-3">💹</div>
                <p className="font-bold text-lg mb-1">호가 분석</p>
                <p className="text-sm text-gray-400">호가창 모양</p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-5 text-center">
                <div className="text-4xl mb-3">🎯</div>
                <p className="font-bold text-lg mb-1">상승 예측</p>
                <p className="text-sm text-gray-400">다음날 상승 종목</p>
              </div>
            </div>
          </motion.div>

          {/* Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-blue-50 rounded-3xl p-8 border-2 border-blue-200"
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-4">핵심 인사이트</h3>
            <div className="bg-white rounded-2xl p-6 border border-blue-100">
              <p className="text-xl text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-600">결론:</span> 내 의사(뇌동매매)를 제외하고
                <span className="font-bold text-xl"> AI 추천만 따르면</span> 훨씬 높은 수익 기대 가능
              </p>
            </div>
          </motion.div>

          {/* Future Plans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-green-50 rounded-3xl p-8 border-2 border-green-200 flex-1"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-5">향후 계획</h3>
            <div className="grid grid-cols-2 gap-6 h-full">
              <div className="bg-white rounded-2xl p-6 border border-green-100">
                <h4 className="font-bold text-xl text-green-700 mb-4">단기 계획</h4>
                <ul className="text-lg text-gray-600 space-y-2">
                  <li>• 추가 테스트 및 데이터 축적</li>
                  <li>• 방법론 체계화</li>
                  <li>• 팀원 내 공유</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-green-100">
                <h4 className="font-bold text-xl text-green-700 mb-4">중기 계획</h4>
                <ul className="text-lg text-gray-600 space-y-2">
                  <li>• 사업비 통장 3,000만원 운용 검토</li>
                  <li>• 선화 사업비 3,000만원 주식 계좌 이전 검토</li>
                  <li>• 안정 자산(구글 등) 분산 투자</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <p className="text-xl text-gray-500 italic">
          "단타가 아니더라도, 구글에만 넣어둬도 통장에 넣어두는 것보다 훨씬 좋다"
        </p>
      </motion.div>
    </div>
  );
}
