'use client';

import { motion } from 'framer-motion';

export default function CrazyIdeasSlide() {
  const ideas = [
    {
      icon: '⛪',
      title: '불신지옥 AI',
      desc: '서울역 앞에서 AI가 "불신지옥"을 외친다. 지나가는 사람들에게 AI의 말씀을 전한다.',
      color: 'red',
    },
    {
      icon: '📰',
      title: 'AI 기자',
      desc: '유명 정치인, 기업인의 기자회견장에 AI 로봇을 데려간다. AI가 실제로 질문을 던진다.',
      color: 'cyan',
    },
    {
      icon: '⚖️',
      title: 'AI 판사',
      desc: '길거리에서 솔로몬 재판 같은 극을 연출한다. 실제 분쟁 상황을 연기하고, AI가 판결을 내린다.',
      color: 'purple',
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-500 bg-opacity-20 text-red-400 text-sm mb-4">
            미친 아이디어들
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="text-red-400">Q.</span> 미친 아이디어들이 있다.
          </h2>
        </motion.div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-3 gap-6">
          {ideas.map((idea, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`rounded-2xl p-6 border ${
                idea.color === 'red' ? 'bg-red-500/10 border-red-500/30' :
                idea.color === 'cyan' ? 'bg-cyan-500/10 border-cyan-500/30' :
                'bg-purple-500/10 border-purple-500/30'
              }`}
            >
              <div className="text-5xl mb-4 text-center">{idea.icon}</div>
              <h3 className={`text-2xl font-bold mb-3 text-center ${
                idea.color === 'red' ? 'text-red-400' :
                idea.color === 'cyan' ? 'text-cyan-400' :
                'text-purple-400'
              }`}>{idea.title}</h3>
              <p className="text-gray-300 text-center">{idea.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
