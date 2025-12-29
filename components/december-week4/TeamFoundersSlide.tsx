'use client';

import { motion } from 'framer-motion';

export default function TeamFoundersSlide() {
  const founders = [
    {
      name: '유선화',
      role: 'CMO',
      responsibility: '마케팅 전문',
      color: 'pink',
      emoji: '💖',
      special: true,
    },
    {
      name: '김주연',
      role: 'CTO',
      responsibility: '기획자, 개발 총괄',
      color: 'cyan',
      emoji: '💻',
      special: false,
    },
    {
      name: '유재영',
      role: 'CEO',
      responsibility: '영상 촬영 및 편집 전문',
      color: 'primary',
      emoji: '🎬',
      special: false,
    },
    {
      name: '이동주',
      role: 'CFO',
      responsibility: '공간 연출 전문',
      color: 'purple',
      emoji: '🏠',
      special: false,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            팀 소개
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            네안데르 <span className="text-primary">코파운더 4인</span>
          </h2>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`rounded-2xl p-6 border text-center relative overflow-hidden ${
                founder.color === 'pink' ? 'bg-gradient-to-br from-pink-500/20 via-rose-500/15 to-pink-400/20 border-pink-400/50 hover:border-pink-300 shadow-lg shadow-pink-500/20' :
                founder.color === 'cyan' ? 'bg-cyan-500/10 border-cyan-500/30 hover:border-cyan-400' :
                founder.color === 'primary' ? 'bg-primary/10 border-primary/30 hover:border-primary' :
                founder.color === 'purple' ? 'bg-purple-500/10 border-purple-500/30 hover:border-purple-400' :
                'bg-amber-500/10 border-amber-500/30 hover:border-amber-400'
              } transition-all duration-300`}
            >
              {/* Special Heart Decorations for 유선화 */}
              {founder.special && (
                <>
                  <div className="absolute top-2 left-2 text-pink-400/40 text-lg animate-pulse">💕</div>
                  <div className="absolute top-3 right-3 text-pink-400/30 text-sm">✨</div>
                  <div className="absolute bottom-2 right-2 text-pink-400/40 text-lg animate-pulse" style={{ animationDelay: '0.5s' }}>💗</div>
                  <div className="absolute bottom-3 left-3 text-pink-400/30 text-sm">✨</div>
                </>
              )}

              {/* Avatar Placeholder */}
              <div className={`w-24 h-24 mx-auto mb-4 flex items-center justify-center text-5xl ${
                founder.color === 'pink' ? 'bg-gradient-to-br from-pink-400/30 to-rose-500/30 rounded-full ring-2 ring-pink-400/50 ring-offset-2 ring-offset-transparent' :
                founder.color === 'cyan' ? 'bg-cyan-500/20 rounded-full' :
                founder.color === 'primary' ? 'bg-primary/20 rounded-full' :
                founder.color === 'purple' ? 'bg-purple-500/20 rounded-full' :
                'bg-amber-500/20 rounded-full'
              }`} style={founder.special ? {
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                transform: 'rotate(-5deg)'
              } : {}}>
                {founder.emoji}
              </div>

              {/* Name */}
              <h3 className={`text-2xl font-bold mb-1 ${founder.special ? 'text-pink-200' : 'text-white'}`}>
                {founder.name}
                {founder.special && <span className="ml-1 text-sm">💖</span>}
              </h3>

              {/* Role Badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                founder.color === 'pink' ? 'bg-pink-500/40 text-pink-200' :
                founder.color === 'cyan' ? 'bg-cyan-500/30 text-cyan-300' :
                founder.color === 'primary' ? 'bg-primary/30 text-primary' :
                founder.color === 'purple' ? 'bg-purple-500/30 text-purple-300' :
                'bg-amber-500/30 text-amber-300'
              }`}>
                {founder.role}
              </span>

              {/* Responsibility */}
              <p className={`text-sm ${founder.special ? 'text-pink-300/80' : 'text-gray-400'}`}>{founder.responsibility}</p>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-dark-light/50 rounded-xl p-5 border border-gray-700"
        >
          <div className="flex items-start gap-4">
            <span className="text-2xl">⚠️</span>
            <div>
              <h4 className="text-white font-semibold mb-2">참고 사항</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• 역할은 "전문"이라기보다 각자 맡은 영역</li>
                <li>• 4인 모두 가장 친절하고 즐겁게 손님 응대 가능</li>
                <li>• 그러나 현재 <span className="text-amber-400">다른 업무로 인해 매장 응대는 사실상 전혀 하지 않음</span></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
