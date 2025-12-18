'use client';

import { motion } from 'framer-motion';

export default function KpopAIContentSlide() {
  const concept = {
    title: 'K-POP 전문 AI 콘텐츠',
    description: '일반 체험형 콘텐츠가 아닌, K-POP에 특화된 AI 콘텐츠 개발',
    platform: '악센트 와우 + 악센트 아이디'
  };

  const contentIdeas = [
    {
      name: 'AI 최애 사주 분석',
      description: '내 최애 아이돌과의 사주 궁합 분석',
      icon: '🔮',
      appeal: '팬심 자극',
      shareability: '높음',
      color: 'purple'
    },
    {
      name: 'AI 내가 그린 최애 그림',
      description: 'AI가 내가 그린 최애 그림을 분석/완성',
      icon: '🎨',
      appeal: '참여형',
      shareability: '매우 높음',
      color: 'pink'
    },
    {
      name: 'AI 최애 닮은꼴 분석',
      description: '나와 가장 닮은 아이돌 찾기',
      icon: '👤',
      appeal: '호기심',
      shareability: '매우 높음',
      color: 'cyan'
    },
    {
      name: 'AI 팬덤 성향 분석',
      description: '나의 팬덤 활동 유형/성향 분석',
      icon: '📊',
      appeal: '자기 이해',
      shareability: '높음',
      color: 'amber'
    },
    {
      name: 'AI 덕질 운세',
      description: '이번 달 최애 관련 운세 예측',
      icon: '⭐',
      appeal: '재미',
      shareability: '중간',
      color: 'yellow'
    },
    {
      name: 'AI 포토카드 분석',
      description: '내 포카 컬렉션 분석 & 추천',
      icon: '📸',
      appeal: '실용성',
      shareability: '높음',
      color: 'green'
    }
  ];

  const operationPlan = [
    { step: '1', action: '콘텐츠 개발', detail: '네안데르 Lab에서 자체 개발', icon: '🔧' },
    { step: '2', action: '악센트 아이디 탑재', detail: '플랫폼에 콘텐츠 추가', icon: '📱' },
    { step: '3', action: '악센트 와우 팝업', detail: '오프라인 체험 이벤트', icon: '🎪' },
    { step: '4', action: '바이럴 확산', detail: 'SNS 공유 유도', icon: '📤' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        {/* K-POP pattern */}
        <div className="absolute top-10 right-10 text-8xl opacity-10">💜</div>
        <div className="absolute bottom-10 left-10 text-8xl opacity-10">🩷</div>
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
            2026 비전 - Part 5
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            💜 <span className="text-purple-400">K-POP</span> 전문 AI 콘텐츠
          </h2>
          <p className="text-xl text-gray-400">{concept.description}</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {/* Content Ideas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🎯</span> 콘텐츠 아이디어
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {contentIdeas.map((content, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className={`rounded-xl p-4 border ${
                    content.color === 'purple' ? 'bg-purple-500/10 border-purple-500/30' :
                    content.color === 'pink' ? 'bg-pink-500/10 border-pink-500/30' :
                    content.color === 'cyan' ? 'bg-cyan-500/10 border-cyan-500/30' :
                    content.color === 'amber' ? 'bg-amber-500/10 border-amber-500/30' :
                    content.color === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/30' :
                    'bg-green-500/10 border-green-500/30'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{content.icon}</span>
                    <span className="text-white font-semibold text-sm">{content.name}</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-2">{content.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      content.color === 'purple' ? 'bg-purple-500/30 text-purple-300' :
                      content.color === 'pink' ? 'bg-pink-500/30 text-pink-300' :
                      content.color === 'cyan' ? 'bg-cyan-500/30 text-cyan-300' :
                      content.color === 'amber' ? 'bg-amber-500/30 text-amber-300' :
                      content.color === 'yellow' ? 'bg-yellow-500/30 text-yellow-300' :
                      'bg-green-500/30 text-green-300'
                    }`}>
                      {content.appeal}
                    </span>
                    <span className="text-gray-500 text-xs">공유: {content.shareability}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Operation Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🔄</span> 운영 플로우
            </h3>
            <div className="space-y-3">
              {operationPlan.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 bg-dark-light rounded-xl p-3 border border-gray-700"
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{step.icon}</span>
                      <span className="text-white font-semibold text-sm">{step.action}</span>
                    </div>
                    <div className="text-gray-400 text-xs">{step.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Advantage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/30"
            >
              <h4 className="text-purple-400 font-semibold mb-2">💡 핵심 차별점</h4>
              <p className="text-white text-sm">
                일반 AI 체험이 아닌<br/>
                <span className="text-pink-400 font-bold">K-POP 팬심을 자극</span>하는<br/>
                특화 콘텐츠
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-dark-light rounded-xl p-4 border border-gray-700">
            <div className="text-center">
              <div className="text-purple-400 text-2xl">악센트 아이디</div>
              <div className="text-gray-400 text-xs">온라인 플랫폼</div>
            </div>
            <div className="text-3xl text-gray-600">+</div>
            <div className="text-center">
              <div className="text-pink-400 text-2xl">악센트 와우</div>
              <div className="text-gray-400 text-xs">오프라인 팝업</div>
            </div>
            <div className="text-3xl text-gray-600">=</div>
            <div className="text-center">
              <div className="text-primary text-2xl font-bold">K-POP AI 생태계</div>
              <div className="text-gray-400 text-xs">Online to Offline</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
