'use client';

import { motion } from 'framer-motion';

export default function AccentIDProblemSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500 bg-opacity-20 text-orange-400 text-sm mb-3">
            원인 분석
          </span>
          <h2 className="text-4xl font-bold text-white">
            문제 분석: <span className="text-orange-400">왜 악플이 달렸나?</span>
          </h2>
        </motion.div>

        {/* Problem 1: 가격 대비 체험 불일치 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-red-500/10 rounded-xl p-5 border border-red-500/30 mb-4"
        >
          <h3 className="text-red-400 font-bold text-lg mb-3 flex items-center gap-2">
            <span className="text-xl">💰</span> 문제 1: 가격 대비 체험 불일치
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">구분</th>
                  <th className="text-center py-2 text-gray-400">기존 향수 조향</th>
                  <th className="text-center py-2 text-gray-400">피규어 디퓨저</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-2 text-gray-300">가격</td>
                  <td className="text-center py-2 text-gray-300">2.4만 원</td>
                  <td className="text-center py-2 text-red-400 font-bold">4.8만 원</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-300">체험 다채로움</td>
                  <td className="text-center py-2 text-gray-300">기준</td>
                  <td className="text-center py-2 text-red-400 font-bold">동일 수준 (문제!)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 bg-dark/50 rounded-lg p-3">
            <p className="text-gray-400 text-sm">
              가격이 <span className="text-red-400 font-bold">2배</span>가 됐으면 체험도 <span className="text-red-400 font-bold">2배 다채로워야</span> 하는데 현재 그런 게 <span className="text-red-400 font-bold">전혀 없음</span>
            </p>
          </div>
        </motion.div>

        {/* Problem 2: 알바 응대 품질 문제 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-orange-500/10 rounded-xl p-5 border border-orange-500/30 mb-4"
        >
          <h3 className="text-orange-400 font-bold text-lg mb-3 flex items-center gap-2">
            <span className="text-xl">👥</span> 문제 2: 알바 응대 품질 문제
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>임원진 4인: 가장 친절하게 응대 가능하지만 <span className="text-orange-400 font-bold">매장 응대 전혀 안 함</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span><span className="text-orange-400 font-bold">알바들이 100%</span> 손님 응대</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>알바들이 <span className="text-orange-400 font-bold">통일된 방법론 없이</span> 각자 서로 다르게 응대</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>→ <span className="text-orange-400 font-bold">고객 응대 퀄리티 불균일</span></span>
            </li>
          </ul>
        </motion.div>

        {/* Problem 3: 현재 피규어 상태 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30"
        >
          <h3 className="text-amber-400 font-bold text-lg mb-3 flex items-center gap-2">
            <span className="text-xl">🎨</span> 문제 3: 현재 피규어 상태
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>현재 <span className="text-amber-400 font-bold">완전 순백의 피규어</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>색칠이나 커스텀 과정 <span className="text-amber-400 font-bold">없음</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>→ <span className="text-amber-400 font-bold">체험 요소 부족</span></span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
