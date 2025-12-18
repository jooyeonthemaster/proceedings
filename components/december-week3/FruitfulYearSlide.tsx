'use client';

import { motion } from 'framer-motion';

export default function FruitfulYearSlide() {
  const visionPillars = [
    {
      icon: '🎯',
      title: '"우리 것"에 집중',
      description: '어떤 비즈니스를 잘 할 수 있는지 탐구',
      details: ['공통된 가치 발견', '장기 비전 수립', '핵심 역량 집중'],
      color: 'amber'
    },
    {
      icon: '📺',
      title: '유튜브 필수',
      description: '무조건, 반드시 시작하고 유지',
      details: ['반응 없어도 유지', '콘텐츠 생산 시작', '장기 전략으로 접근'],
      color: 'red'
    },
    {
      icon: '🎪',
      title: '재미 & 자극',
      description: '콘텐츠 기반 비즈니스',
      details: ['재밌는 것들 기반', '자극적인 콘텐츠', '바이럴 요소'],
      color: 'pink'
    },
    {
      icon: '🧪',
      title: '네안데르 Lab',
      description: 'AI 콘텐츠 프로그램 양산',
      details: ['자체 프로그램 개발', '실험적 접근', '빠른 프로토타이핑'],
      color: 'cyan'
    }
  ];

  const shift = {
    from: {
      title: '2025년',
      items: ['사업계획서 컨설팅', '코딩 공부', '검증 & 학습']
    },
    to: {
      title: '2026년',
      items: ['"우리 것" 집중', '유튜브 콘텐츠', '결실 & 수확']
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        {/* Year watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-black text-primary opacity-[0.03] select-none">
          2026
        </div>
      </div>

      <div className="max-w-7xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            2026 비전 - Part 1
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🚀 2026년 = <span className="text-primary">결실의 해</span>
          </h2>
          <p className="text-xl text-gray-400">
            검증을 넘어 수확의 시간
          </p>
        </motion.div>

        {/* Year Shift */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-8 mb-10"
        >
          <div className="bg-amber-500/10 rounded-2xl p-6 border border-amber-500/30 min-w-[200px]">
            <div className="text-amber-400 font-bold text-xl mb-3">{shift.from.title}</div>
            <ul className="space-y-2">
              {shift.from.items.map((item, i) => (
                <li key={i} className="text-gray-400 flex items-center gap-2">
                  <span className="text-amber-400">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-5xl text-gray-600">→</div>

          <div className="bg-primary/10 rounded-2xl p-6 border border-primary/30 min-w-[200px]">
            <div className="text-primary font-bold text-xl mb-3">{shift.to.title}</div>
            <ul className="space-y-2">
              {shift.to.items.map((item, i) => (
                <li key={i} className="text-white flex items-center gap-2 font-medium">
                  <span className="text-primary">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Vision Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-4 gap-4"
        >
          {visionPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className={`bg-dark-light rounded-xl p-5 border ${
                pillar.color === 'amber' ? 'border-amber-500/30' :
                pillar.color === 'red' ? 'border-red-500/30' :
                pillar.color === 'pink' ? 'border-pink-500/30' :
                'border-cyan-500/30'
              }`}
            >
              <div className="text-4xl mb-3">{pillar.icon}</div>
              <h4 className={`font-bold text-lg mb-2 ${
                pillar.color === 'amber' ? 'text-amber-400' :
                pillar.color === 'red' ? 'text-red-400' :
                pillar.color === 'pink' ? 'text-pink-400' :
                'text-cyan-400'
              }`}>
                {pillar.title}
              </h4>
              <p className="text-gray-400 text-sm mb-3">{pillar.description}</p>
              <ul className="space-y-1">
                {pillar.details.map((detail, i) => (
                  <li key={i} className="text-white text-sm flex items-center gap-2">
                    <span className="text-primary text-xs">▸</span> {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary/20 to-green-500/20 rounded-xl p-5 border border-primary/30">
            <p className="text-xl text-white">
              🔥 <span className="text-red-400 font-bold">유튜브는 무조건 해야 한다.</span>
              <span className="text-gray-300 ml-2">시작하고, 반응이 없어도 유지해야 한다.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
