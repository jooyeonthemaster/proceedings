'use client';

import { motion } from 'framer-motion';

export default function AccentIDSolution2Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500 bg-opacity-20 text-blue-400 text-sm mb-3">
            해결방안 2/3
          </span>
          <h2 className="text-4xl font-bold text-white mb-2">
            해결방안 2: <span className="text-blue-400">체험 과정 디벨롭</span>
          </h2>
        </motion.div>

        {/* 핵심 제안 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/30 mb-6"
        >
          <h3 className="text-blue-400 font-bold text-xl mb-3 flex items-center gap-2">
            <span className="text-2xl">💡</span> 핵심 제안
          </h3>
          <div className="bg-dark/50 rounded-lg p-4">
            <p className="text-white text-2xl font-bold text-center">
              과감하게 <span className="text-cyan-400">색칠하는 과정</span>을 넣어야 한다
            </p>
          </div>
        </motion.div>

        {/* 현재 vs 개선 비교표 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 mb-6"
        >
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">⚖️</span> 현재 vs 개선
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
              <h4 className="text-red-400 font-bold mb-3 text-center">현재 ❌</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-red-400">•</span>
                  순백 피규어 그대로 제공
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">•</span>
                  체험 요소 부족
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">•</span>
                  30분에 끝남
                </li>
              </ul>
            </div>
            <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
              <h4 className="text-green-400 font-bold mb-3 text-center">개선안 ✅</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">•</span>
                  피규어 <span className="text-cyan-400 font-bold">색칠</span> 과정 추가
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">•</span>
                  <span className="text-cyan-400 font-bold">커스텀</span> 체험 추가
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">•</span>
                  체험 시간 및 <span className="text-cyan-400 font-bold">체험감 확대</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 고려사항 & 방향성 */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30"
          >
            <h3 className="text-amber-400 font-bold mb-3 flex items-center gap-2">
              <span className="text-xl">⚠️</span> 고려사항
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-amber-400">•</span>
                알바들이 힘들어질 수 있음
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">•</span>
                진행에 차질이 있을 수 있음
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">•</span>
                <span className="text-amber-400 font-bold">그래도</span> 고객 만족을 위해 필요
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/30"
          >
            <h3 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
              <span className="text-xl">🎯</span> 방향성
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              어떤 형태로든 <span className="text-blue-400 font-bold">고객 만족을 높일 수 있는 방안</span> 모색 필요<br /><br />
              색칠 외에도 다양한 <span className="text-cyan-400 font-bold">커스텀 옵션</span> 검토
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
