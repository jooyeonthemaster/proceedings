'use client';

import { motion } from 'framer-motion';

export default function AIEraContentSlide() {
  const futureVision = [
    {
      phase: '현재',
      title: 'AI 발전',
      description: 'AI 기술 급속 발전',
      icon: '🤖',
      color: 'blue'
    },
    {
      phase: '근미래',
      title: '노동 가치 하락',
      description: '노동의 가치가 0에 수렴',
      icon: '📉',
      color: 'orange'
    },
    {
      phase: '미래',
      title: '콘텐츠 소비 폭발',
      description: '사람들이 콘텐츠를 찾게 됨',
      icon: '📺',
      color: 'pink'
    },
    {
      phase: '결론',
      title: '유튜브/릴스 시대',
      description: '엔터테인먼트가 핵심',
      icon: '🎬',
      color: 'green'
    }
  ];

  const romaCase = {
    title: '🏛️ 로마 시대의 교훈',
    story: '로마인들은 노예가 너무 많아서 국가에서 기본소득을 줬다',
    result: '그 결과 성행한 것이 콜로세움의 결투',
    insight: '사람들이 먹고살만해지면 결국 콘텐츠를 찾게 된다'
  };

  const contentPrinciples = [
    { principle: '재미있어야 한다', icon: '😂', description: '지루하면 스킵' },
    { principle: '자극적이어야 한다', icon: '🔥', description: '관심을 끌어야 함' },
    { principle: '공유하고 싶어야 한다', icon: '📤', description: '바이럴 요소' },
    { principle: '기억에 남아야 한다', icon: '💭', description: '브랜딩 효과' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
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
            2026 비전 - Part 2
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🌍 AI 시대, <span className="text-pink-400">콘텐츠가 답이다</span>
          </h2>
          <p className="text-xl text-gray-400">
            왜 유튜브를 무조건 해야 하는가?
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8">
          {/* Left: Future Vision Flow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🔮</span> AI 시대 전망
            </h3>
            <div className="space-y-3">
              {futureVision.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl ${
                    phase.color === 'blue' ? 'bg-blue-500/20 border border-blue-500/30' :
                    phase.color === 'orange' ? 'bg-orange-500/20 border border-orange-500/30' :
                    phase.color === 'pink' ? 'bg-pink-500/20 border border-pink-500/30' :
                    'bg-green-500/20 border border-green-500/30'
                  }`}>
                    {phase.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        phase.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                        phase.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                        phase.color === 'pink' ? 'bg-pink-500/20 text-pink-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {phase.phase}
                      </span>
                      <span className="text-white font-semibold">{phase.title}</span>
                    </div>
                    <div className="text-gray-400 text-sm mt-1">{phase.description}</div>
                  </div>
                  {index < futureVision.length - 1 && (
                    <div className="text-gray-600 text-xl">↓</div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Roma Case */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 bg-amber-500/10 rounded-xl p-4 border border-amber-500/30"
            >
              <h4 className="text-amber-400 font-semibold mb-2">{romaCase.title}</h4>
              <p className="text-gray-300 text-sm mb-2">{romaCase.story}</p>
              <p className="text-white text-sm mb-2">→ {romaCase.result}</p>
              <p className="text-primary text-sm font-semibold">💡 {romaCase.insight}</p>
            </motion.div>
          </motion.div>

          {/* Right: Content Principles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🎯</span> 콘텐츠 원칙
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {contentPrinciples.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-dark-light rounded-xl p-4 border border-gray-700 text-center"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-white font-semibold">{item.principle}</div>
                  <div className="text-gray-400 text-sm mt-1">{item.description}</div>
                </motion.div>
              ))}
            </div>

            {/* YouTube Emphasis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl p-6 border border-red-500/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-red-400 font-bold text-xl">유튜브는 선택이 아닌 필수</h4>
                  <p className="text-gray-300">2026년, 무조건 시작하고 반응 없어도 유지</p>
                </div>
              </div>
              <div className="bg-dark/50 rounded-lg p-3">
                <p className="text-white text-sm">
                  "결국 유튜브나 릴스 같은 것들이 콘텐츠가 될 것이다.<br/>
                  그래서 무조건 우리 비즈니스는 <span className="text-primary font-bold">재밌고 자극적인 것들</span>을 기반으로 해야 한다."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
