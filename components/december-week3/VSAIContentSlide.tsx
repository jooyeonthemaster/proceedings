'use client';

import { motion } from 'framer-motion';

export default function VSAIContentSlide() {
  const concept = {
    title: 'VS AI',
    tagline: '인간 vs AI 대결 유튜브 콘텐츠',
    description: 'AI를 잘 다루는 사람(김주연)이 AI를 활용해서 각 분야의 전문가들과 대결하는 실험 콘텐츠',
    hook: '세상 모든 직업 타파하기'
  };

  const battles = [
    {
      opponent: '변호사',
      icon: '⚖️',
      challenges: ['계약서 검토 대결', '공소장 작성 대결'],
      appeal: '법률 전문가 vs AI',
      difficulty: '⭐⭐⭐'
    },
    {
      opponent: '전문 트레이더',
      icon: '📈',
      challenges: ['아침 9시 100만원 시작', '단타로 누가 더 많이 벌까?'],
      appeal: '실시간 투자 대결',
      difficulty: '⭐⭐⭐⭐'
    },
    {
      opponent: '카이스트 박사',
      icon: '🎓',
      challenges: ['학술 논문 분석 대결', '복잡한 문제 해결 대결'],
      appeal: '최고 학벌 vs AI',
      difficulty: '⭐⭐⭐⭐⭐'
    },
    {
      opponent: '10년차 기자',
      icon: '📰',
      challenges: ['뉴스 기사 작성 대결', '취재 및 정리 대결'],
      appeal: '누가 더 기사를 잘 쓸까?',
      difficulty: '⭐⭐⭐'
    },
    {
      opponent: '화가',
      icon: '🎨',
      challenges: ['그림 그리기 대결', '예술성 평가'],
      appeal: '누구의 작품이 더 예술적인가?',
      difficulty: '⭐⭐⭐'
    },
    {
      opponent: '요리사',
      icon: '👨‍🍳',
      challenges: ['레시피 개발 대결', '블라인드 테스트'],
      appeal: '누구의 레시피가 더 맛있는가?',
      difficulty: '⭐⭐'
    }
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        {/* VS watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-black text-white opacity-[0.02] select-none">
          VS
        </div>
      </div>

      <div className="max-w-7xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            2026 비전 - Part 4
          </span>
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="text-5xl font-black text-blue-400">인간</span>
            <span className="text-6xl font-black text-red-500">VS</span>
            <span className="text-5xl font-black text-primary">AI</span>
          </div>
          <p className="text-xl text-gray-400">{concept.tagline}</p>
          <p className="text-lg text-red-400 mt-2">🔥 {concept.hook}</p>
        </motion.div>

        {/* Concept Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-6"
        >
          <div className="inline-block bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-xl p-4 border border-red-500/30 max-w-3xl">
            <p className="text-white text-lg">
              {concept.description}
            </p>
          </div>
        </motion.div>

        {/* Battle Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-4"
        >
          {battles.map((battle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="bg-dark-light rounded-xl p-5 border border-gray-700 hover:border-red-500/50 transition-colors"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{battle.icon}</span>
                  <span className="text-white font-bold text-lg">AI vs {battle.opponent}</span>
                </div>
                <span className="text-xs text-gray-500">{battle.difficulty}</span>
              </div>

              {/* Challenges */}
              <div className="space-y-2 mb-3">
                {battle.challenges.map((challenge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="text-red-400">⚔️</span>
                    <span className="text-gray-300">{challenge}</span>
                  </div>
                ))}
              </div>

              {/* Appeal */}
              <div className="bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-lg p-2 text-center">
                <span className="text-primary text-sm font-semibold">{battle.appeal}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 flex justify-center gap-4"
        >
          <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30 text-center">
            <div className="text-3xl mb-2">🎬</div>
            <div className="text-white font-semibold">자극적</div>
            <div className="text-gray-400 text-sm">대결 구도</div>
          </div>
          <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30 text-center">
            <div className="text-3xl mb-2">🔬</div>
            <div className="text-white font-semibold">실험적</div>
            <div className="text-gray-400 text-sm">AI 검증</div>
          </div>
          <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30 text-center">
            <div className="text-3xl mb-2">📺</div>
            <div className="text-white font-semibold">바이럴</div>
            <div className="text-gray-400 text-sm">공유 요소</div>
          </div>
          <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30 text-center">
            <div className="text-3xl mb-2">🤔</div>
            <div className="text-white font-semibold">교육적</div>
            <div className="text-gray-400 text-sm">AI 활용법</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
