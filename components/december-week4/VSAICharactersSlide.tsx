'use client';

import { motion } from 'framer-motion';

export default function VSAICharactersSlide() {
  const characters = [
    {
      role: '사회자',
      name: '김주연',
      description: '말 많이 하는 사회자 역할',
      color: 'primary',
      emoji: '🎤',
      team: null,
    },
    {
      role: 'AI팀',
      name: '유재영',
      description: '포토부스 로봇 "주인" 역할\n말 없이 AI 포토부스를 조종',
      color: 'cyan',
      emoji: '🤖',
      team: 'AI',
    },
    {
      role: '사람팀',
      name: '이동주',
      description: '스트릿 포토그래퍼 역할\n(분장 예정)',
      color: 'pink',
      emoji: '📸',
      team: 'HUMAN',
    },
    {
      role: '서포터',
      name: '유선화, 김정연',
      description: '뒤에서 출연자를 서포트하는 역할',
      color: 'purple',
      emoji: '🎬',
      team: null,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-4">
            출연진 구성
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🎭 캐릭터 설정
          </h2>
        </motion.div>

        {/* Characters Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {characters.map((char, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className={`rounded-xl p-5 border ${
                char.color === 'primary' ? 'bg-primary/10 border-primary/30' :
                char.color === 'cyan' ? 'bg-cyan-500/10 border-cyan-500/30' :
                char.color === 'pink' ? 'bg-pink-500/10 border-pink-500/30' :
                'bg-purple-500/10 border-purple-500/30'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">{char.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      char.color === 'primary' ? 'bg-primary/20 text-primary' :
                      char.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                      char.color === 'pink' ? 'bg-pink-500/20 text-pink-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {char.role}
                    </span>
                    {char.team && (
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        char.team === 'AI' ? 'bg-cyan-500/30 text-cyan-300' : 'bg-pink-500/30 text-pink-300'
                      }`}>
                        {char.team}
                      </span>
                    )}
                  </div>
                  <h4 className="text-white text-2xl font-bold mb-2">{char.name}</h4>
                  <p className="text-gray-400 text-sm whitespace-pre-line">{char.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VS Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-dark-light/50 rounded-xl p-6 border border-gray-700"
        >
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-6xl mb-2">🤖</div>
              <p className="text-cyan-400 font-bold text-lg">AI팀</p>
              <p className="text-gray-400 text-sm">유재영 + AI 포토부스</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-primary">VS</div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">📸</div>
              <p className="text-pink-400 font-bold text-lg">사람팀</p>
              <p className="text-gray-400 text-sm">이동주 (스트릿 포토그래퍼)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
