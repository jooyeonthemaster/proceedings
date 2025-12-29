'use client';

import { motion } from 'framer-motion';

export default function MysteryStrategySlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        {/* Mystery Mask Pattern */}
        <div className="absolute top-1/4 right-10 text-[150px] opacity-5">
          🎭
        </div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-4">
            브랜딩 전략
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🎭 마스크로 가린 정체,<br />
            <span className="text-purple-400">신비로운 창작 집단</span>
          </h2>
        </motion.div>

        {/* Problem Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-red-500/10 rounded-xl p-5 border border-red-500/30 mb-6"
        >
          <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
            <span>⚠️</span> 문제 인식
          </h4>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center gap-3">
              <span className="text-red-400">•</span>
              <span>팀원 전원 <span className="text-red-400 font-semibold">나이가 어림</span></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-400">•</span>
              <span><span className="text-red-400 font-semibold">경력 자체가 길지 않음</span></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-400">•</span>
              <span>→ 신빙성이 떨어질 수밖에 없음</span>
            </li>
          </ul>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl p-6 border border-purple-500/30 mb-6"
        >
          <h4 className="text-purple-400 font-bold mb-4 flex items-center gap-2">
            <span>💡</span> 해결 전략
          </h4>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-dark rounded-lg p-4 border border-gray-700 text-center">
              <span className="text-3xl">🎭</span>
              <p className="text-white font-semibold mt-2">마스크로 신상 정보<br />철저히 가림</p>
            </div>
            <span className="text-gray-500 text-2xl">→</span>
            <div className="bg-dark rounded-lg p-4 border border-gray-700 text-center">
              <span className="text-3xl">✨</span>
              <p className="text-white font-semibold mt-2">신비로운 느낌<br />극대화</p>
            </div>
            <span className="text-gray-500 text-2xl">→</span>
            <div className="bg-dark rounded-lg p-4 border border-gray-700 text-center">
              <span className="text-3xl">😄</span>
              <p className="text-white font-semibold mt-2">유쾌하고 친근하지만<br />정체불명</p>
            </div>
            <span className="text-gray-500 text-2xl">→</span>
            <div className="bg-dark rounded-lg p-4 border border-gray-700 text-center">
              <span className="text-3xl">👥</span>
              <p className="text-white font-semibold mt-2">궁금증 유발<br />팬층 형성</p>
            </div>
          </div>
        </motion.div>

        {/* Balance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-dark-light/50 rounded-xl p-6 border border-gray-700"
        >
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <span>⚖️</span> 톤앤매너 균형
          </h4>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h5 className="text-primary font-semibold mb-2">✅ 유지할 것</h5>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• 유쾌하고 친근한 콘텐츠 톤</li>
                <li>• 재밌고 미친 듯한 에너지</li>
                <li>• 관객과의 적극적 소통</li>
              </ul>
            </div>
            <div>
              <h5 className="text-purple-400 font-semibold mb-2">🎭 신비롭게</h5>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• 정체는 신비롭게 유지</li>
                <li>• 아무리 재밌어도 <span className="text-red-400 font-semibold">나이/신상 노출 금지</span></li>
                <li>• 마스크, 복장 등으로 아이덴티티 구축</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
