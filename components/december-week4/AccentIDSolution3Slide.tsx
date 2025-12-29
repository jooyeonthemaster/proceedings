'use client';

import { motion } from 'framer-motion';

export default function AccentIDSolution3Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-3">
            해결방안 3/3
          </span>
          <h2 className="text-4xl font-bold text-white mb-2">
            해결방안 3: <span className="text-purple-400">리뷰 전략</span>
          </h2>
        </motion.div>

        {/* 문제 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-red-500/10 rounded-xl p-5 border border-red-500/30 mb-5"
        >
          <h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">🚨</span> 문제
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>현재 악플이 <span className="text-red-400 font-bold">피규어 디퓨저의 유일한 리뷰</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>해당 리뷰를 덮을 수 있는 리뷰 필요</span>
            </li>
          </ul>
        </motion.div>

        {/* 액션 1: 리뷰 구매 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-5 border border-purple-500/30 mb-5"
        >
          <h3 className="text-purple-400 font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">📝</span> 액션 1: 리뷰 구매
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2 text-gray-400 w-24">실행사</td>
                  <td className="py-2 text-gray-300">GPA코리아 (마케팅 실행사)</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 text-gray-400">수량</td>
                  <td className="py-2 text-purple-400 font-bold">약 100개</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 text-gray-400">내용</td>
                  <td className="py-2 text-gray-300">피규어 디퓨저 관련 리뷰</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-400">목적</td>
                  <td className="py-2 text-gray-300">악플을 덮을 수 있는 리뷰 물량 확보</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 액션 2: 자체 리뷰 이벤트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-dark-light/50 rounded-xl p-5 border border-gray-700"
        >
          <h3 className="text-pink-400 font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">🎁</span> 액션 2: 자체 리뷰 이벤트 기획
          </h3>

          {/* 현황 비교 */}
          <div className="mb-4">
            <h4 className="text-gray-400 text-sm mb-2">현황 비교</h4>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="bg-dark/50 rounded-lg p-2 text-center text-gray-400">구분</div>
              <div className="bg-dark/50 rounded-lg p-2 text-center text-gray-300">향수</div>
              <div className="bg-dark/50 rounded-lg p-2 text-center text-gray-300">피규어 디퓨저</div>

              <div className="bg-dark/30 rounded-lg p-2 text-gray-400">리뷰 이벤트</div>
              <div className="bg-green-500/10 rounded-lg p-2 text-center text-green-400">✅ 있음 (증정품 有)</div>
              <div className="bg-red-500/10 rounded-lg p-2 text-center text-red-400">❌ 없음</div>

              <div className="bg-dark/30 rounded-lg p-2 text-gray-400">자체 리뷰</div>
              <div className="bg-green-500/10 rounded-lg p-2 text-center text-green-400">자연 발생</div>
              <div className="bg-red-500/10 rounded-lg p-2 text-center text-red-400 font-bold">안 달리고 있음</div>
            </div>
          </div>

          {/* 필요 사항 */}
          <div className="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20">
            <h4 className="text-pink-400 font-semibold mb-2">필요 사항</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-pink-400">•</span>
                피규어 디퓨저용 <span className="text-pink-400 font-bold">리뷰 이벤트 상품</span> 기획
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-400">•</span>
                리뷰 작성 시 증정품 제공
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-400">•</span>
                → 자연스러운 리뷰 유도
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
