'use client';

import { motion } from 'framer-motion';

export default function VSAICueSheet2Slide() {
  const gameFlow = [
    { step: '등장', desc: '행인 앞에 나타나기', emoji: '👋' },
    { step: '끌기', desc: '관심 유도 & 설득', emoji: '💬' },
    { step: '촬영', desc: '사진 촬영 진행', emoji: '📸' },
    { step: '전달', desc: '결과물 인화 & 전달', emoji: '🎁' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        {/* Game Icon */}
        <div className="absolute bottom-10 left-10 text-[100px] opacity-5">
          🎮
        </div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500 bg-opacity-20 text-orange-400 text-sm mb-4">
            큐시트 Part 2
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🎮 본 게임
          </h2>
          <p className="text-gray-400">촬영 20분 → 편집 후 약 7분</p>
        </motion.div>

        {/* Time Allocation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-cyan-500/10 via-dark-light/50 to-pink-500/10 rounded-xl p-6 border border-gray-700 mb-6"
        >
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-2">🤖</div>
              <h4 className="text-cyan-400 font-bold text-xl mb-1">AI팀</h4>
              <div className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg inline-block">
                <span className="text-2xl font-bold">10분</span>
                <span className="text-sm ml-1">활동 시간</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">📸</div>
              <h4 className="text-pink-400 font-bold text-xl mb-1">사람팀</h4>
              <div className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-lg inline-block">
                <span className="text-2xl font-bold">10분</span>
                <span className="text-sm ml-1">활동 시간</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Game Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark-light/50 rounded-xl p-6 border border-gray-700 mb-6"
        >
          <h4 className="text-white font-bold mb-5 flex items-center gap-2">
            <span>🔄</span> 팀별 활동 플로우
          </h4>
          <div className="flex items-center justify-between">
            {gameFlow.map((item, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center text-3xl mb-2 mx-auto">
                    {item.emoji}
                  </div>
                  <h5 className="text-orange-400 font-bold">{item.step}</h5>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </motion.div>
                {index < gameFlow.length - 1 && (
                  <div className="text-gray-600 text-2xl mx-4">→</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Points */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-cyan-500/10 rounded-xl p-5 border border-cyan-500/30"
          >
            <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <span>🤖</span> AI팀 포인트
            </h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>AI 포토부스의 <span className="text-cyan-400 font-semibold">자동화된 촬영</span> 시연</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>유재영은 <span className="text-cyan-400 font-semibold">말 없이</span> 로봇만 조작</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>AI가 행인의 포즈, 표정 자동 가이드</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-pink-500/10 rounded-xl p-5 border border-pink-500/30"
          >
            <h4 className="text-pink-400 font-bold mb-3 flex items-center gap-2">
              <span>📸</span> 사람팀 포인트
            </h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-pink-400">•</span>
                <span>이동주의 <span className="text-pink-400 font-semibold">스트릿 포토그래퍼</span> 연기</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400">•</span>
                <span><span className="text-pink-400 font-semibold">분장</span>으로 캐릭터 강화</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400">•</span>
                <span>인간적인 교감과 감성적 촬영</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
