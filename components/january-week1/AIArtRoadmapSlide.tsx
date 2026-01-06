'use client';

import { motion } from 'framer-motion';

export default function AIArtRoadmapSlide() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'AI교 프로토타입',
      items: ['부스 설계', '대본 작성', '소규모 테스트'],
      color: 'cyan',
    },
    {
      phase: 'Phase 2',
      title: '축제 데뷔',
      items: ['축제/행사 참여', '반응 수집', '콘텐츠 제작'],
      color: 'purple',
    },
    {
      phase: 'Phase 3',
      title: '시리즈 확장',
      items: ['EP.02 AI 기자', 'EP.03 AI 판사', '새로운 아이디어'],
      color: 'pink',
    },
    {
      phase: 'Phase 4',
      title: '브랜드 확립',
      items: ['미친 창작 집단', '예술가 정체성', '대외 인지도'],
      color: 'primary',
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            로드맵
          </span>
          <h2 className="text-5xl font-bold text-white">
            <span className="text-primary">AI 예술</span> 여정
          </h2>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 via-pink-500 to-primary rounded"></div>

          <div className="grid grid-cols-4 gap-4">
            {phases.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="relative"
              >
                {/* Phase Badge */}
                <div className={`inline-block px-3 py-1 rounded-full bg-${item.color} bg-opacity-20 text-${item.color === 'primary' ? 'primary' : item.color + '-400'} text-xs font-bold mb-3`}>
                  {item.phase}
                </div>

                {/* Dot on line */}
                <div className={`absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-${item.color === 'primary' ? 'primary' : item.color + '-500'} border-4 border-dark`}></div>

                {/* Card */}
                <div className={`mt-8 bg-${item.color === 'primary' ? 'primary' : item.color + '-500'}/10 rounded-xl p-4 border border-${item.color === 'primary' ? 'primary' : item.color + '-500'}/30`}>
                  <h3 className={`text-lg font-bold text-${item.color === 'primary' ? 'primary' : item.color + '-400'} mb-3`}>{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((task, j) => (
                      <li key={j} className="text-gray-400 text-sm flex items-center gap-2">
                        <span className={`text-${item.color === 'primary' ? 'primary' : item.color + '-400'}`}>•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Focus Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-primary/20 rounded-xl p-5 border border-cyan-500/30 text-center">
            <p className="text-gray-400 mb-2">지금 집중할 것:</p>
            <p className="text-2xl text-white font-bold">
              <span className="text-cyan-400">Phase 1</span> - AI교 프로토타입 완성
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
