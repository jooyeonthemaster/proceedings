'use client';

import { motion } from 'framer-motion';

export default function YouTuberAISlide() {
  const concept = {
    title: '유튜버를 위한 AI 프로그램',
    description: '각 유튜버들을 위한 맞춤형 AI 프로그램을 기획, 개발하고 무료 제공 후 반응을 보는 콘텐츠',
    inspiration: '유명인 100명에게 DM 보내서 답장 오는 것 확인하기 챌린지'
  };

  const contentFlow = [
    { step: 1, action: '유튜버 선정', detail: '특정 유튜버 타겟팅', icon: '🎯' },
    { step: 2, action: 'AI 프로그램 기획', detail: '해당 유튜버 콘텐츠에 맞는 AI 설계', icon: '📝' },
    { step: 3, action: '혼자 개발', detail: '네안데르 Lab에서 자체 개발', icon: '💻' },
    { step: 4, action: '무료 제공', detail: '유튜버에게 무료로 제공', icon: '🎁' },
    { step: 5, action: '반응 확인', detail: '사용 여부 및 반응 촬영', icon: '📹' },
    { step: 6, action: '콘텐츠화', detail: '과정 전체를 유튜브 영상으로', icon: '🎬' },
  ];

  const examples = [
    {
      youtuber: '침착맨',
      idea: '침착맨 AI 토론 프로그램',
      detail: '자극적인 주제로 침착맨과 AI가 토론하는 프로그램',
      icon: '🎙️',
      appeal: '토론 콘텐츠'
    },
    {
      youtuber: '워크맨',
      idea: 'AI 직업 체험 도우미',
      detail: '각 직업에 대한 AI 가이드 프로그램',
      icon: '👷',
      appeal: '정보 + 재미'
    },
    {
      youtuber: '먹방 유튜버',
      idea: 'AI 칼로리 계산기',
      detail: '음식 사진으로 실시간 칼로리 분석',
      icon: '🍔',
      appeal: '실용성'
    },
    {
      youtuber: '게임 유튜버',
      idea: 'AI 플레이 분석',
      detail: '게임 플레이를 AI가 실시간 분석/조언',
      icon: '🎮',
      appeal: '전문성'
    },
  ];

  const businessModel = [
    {
      phase: '무료 제공',
      target: '유튜버',
      benefit: '콘텐츠 + 홍보 효과',
      icon: '🆓'
    },
    {
      phase: '기업 광고',
      target: '기업',
      benefit: '기업 서비스 홍보 프로그램 개발',
      icon: '💼'
    },
    {
      phase: '프로그램 판매',
      target: '일반인',
      benefit: '검증된 프로그램 유료화',
      icon: '💰'
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
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
            2026 비전 - Part 6
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🎬 <span className="text-red-400">유튜버</span>를 위한 AI 프로그램
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">{concept.description}</p>
          <p className="text-sm text-orange-400 mt-2">💡 영감: {concept.inspiration}</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left: Content Flow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🔄</span> 콘텐츠 플로우
            </h3>
            <div className="space-y-2">
              {contentFlow.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-3 bg-dark-light rounded-lg p-3 border border-gray-700"
                >
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 font-bold text-sm">
                    {item.step}
                  </div>
                  <span className="text-xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="text-white text-sm font-semibold">{item.action}</div>
                    <div className="text-gray-400 text-xs">{item.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center: Examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">💡</span> 예시 아이디어
            </h3>
            <div className="space-y-3">
              {examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-dark-light rounded-xl p-4 border border-gray-700"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{example.icon}</span>
                    <span className="text-red-400 font-bold">{example.youtuber}</span>
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{example.idea}</div>
                  <div className="text-gray-400 text-xs mb-2">{example.detail}</div>
                  <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded">
                    {example.appeal}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Business Model */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">💰</span> 비즈니스 모델
            </h3>
            <div className="space-y-4">
              {businessModel.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className={`rounded-xl p-4 border ${
                    index === 0 ? 'bg-blue-500/10 border-blue-500/30' :
                    index === 1 ? 'bg-purple-500/10 border-purple-500/30' :
                    'bg-green-500/10 border-green-500/30'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <div className={`font-bold ${
                        index === 0 ? 'text-blue-400' :
                        index === 1 ? 'text-purple-400' :
                        'text-green-400'
                      }`}>
                        {item.phase}
                      </div>
                      <div className="text-gray-400 text-xs">타겟: {item.target}</div>
                    </div>
                  </div>
                  <div className="text-white text-sm">{item.benefit}</div>
                </motion.div>
              ))}
            </div>

            {/* Key Point */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-4 border border-red-500/30"
            >
              <h4 className="text-red-400 font-semibold mb-2">🎯 핵심 포인트</h4>
              <p className="text-white text-sm">
                유튜버한테 AI 콘텐츠 제공해서<br/>
                <span className="text-primary font-bold">반응 보기</span> 자체가 콘텐츠!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
