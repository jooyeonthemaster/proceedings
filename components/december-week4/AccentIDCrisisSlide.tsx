'use client';

import { motion } from 'framer-motion';

export default function AccentIDCrisisSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        {/* Warning Icon */}
        <div className="absolute top-1/4 right-10 text-[120px] opacity-10">
          🚨
        </div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-500 bg-opacity-20 text-red-400 text-sm mb-3">
            🚨 위기 상황
          </span>
          <h2 className="text-4xl font-bold text-white mb-2">
            피규어 디퓨저 <span className="text-red-400">악플 발생</span>
          </h2>
        </motion.div>

        {/* Review Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-red-500/10 rounded-2xl p-6 border-2 border-red-500/50 mb-6"
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl">😠</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white font-bold">악플 내용</span>
                <span className="text-red-400">★☆☆☆☆</span>
              </div>
              <div className="bg-dark/50 rounded-lg p-4">
                <p className="text-gray-300 text-xl leading-relaxed">
                  &quot;1인당 <span className="text-red-400 font-bold">4.8만원</span> 주고 예약했는데<br />
                  <span className="text-red-400 font-bold">30분 체험</span>하고 끝나서 너무 당황스러웠어요&quot;
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Severity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-orange-500/10 rounded-xl p-5 border border-orange-500/30 mb-6"
        >
          <h3 className="text-orange-400 font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">⚠️</span> 상황의 심각성
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>해당 악플이 <span className="text-orange-400 font-bold">피규어 디퓨저 프로젝트의 유일한 리뷰</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>3년간 매장 운영하면서 이런 악플은 <span className="text-orange-400 font-bold">흔하지 않았음</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>고객이 실제로 <span className="text-orange-400 font-bold">손수 악플을 달 정도</span>면 뭔가 문제가 있다는 신호</span>
            </li>
          </ul>
        </motion.div>

        {/* 김주연 반성 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-dark-light/70 rounded-xl p-5 border border-gray-600"
        >
          <h3 className="text-gray-300 font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">🙏</span> 반성 (김주연)
          </h3>
          <div className="bg-dark/50 rounded-lg p-4">
            <p className="text-gray-400 leading-relaxed text-sm">
              몇 개월간 준비한 새 프로젝트를 런칭했는데,<br />
              임원진 4인 중 <span className="text-white font-semibold">누구도</span> 고객 반응에 대해 진지하게, 정말 열정적으로 알아볼 생각을 하지 않았다.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm mt-3">
              인플루언서 초청 시에만 몇 번 응대하고, <span className="text-red-400 font-semibold">실제 고객 응대는 거의 하지 않았다.</span>
            </p>
            <p className="text-gray-400 leading-relaxed text-sm mt-3">
              개발 담당이자 해당 프로젝트를 가장 밀어붙인 사람으로서 <span className="text-white font-semibold">먼저 사과한다.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
