'use client';

import { motion } from 'framer-motion';

export default function YouTubeStrategySlide() {
  const roles = [
    { title: '작품 홍보', desc: '우리의 AI 콘텐츠 작품들을 세상에 알림', icon: '📢' },
    { title: '브랜딩', desc: '네안데르라는 이름을 각인시킴', icon: '🏷️' },
    { title: '바이럴', desc: '콘텐츠가 퍼지면서 자연스러운 인지도 확보', icon: '🔥' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
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
            유튜브 전략
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            📺 유튜브: <span className="text-red-400">브랜딩의 창구</span>
          </h2>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-red-500/10 to-dark-light rounded-2xl p-6 border border-red-500/30 mb-8 text-center"
        >
          <p className="text-2xl text-white">
            ⚠️ 유튜브로 <span className="text-red-400 font-bold">돈을 버는 게 목적이 아니다</span>
          </p>
        </motion.div>

        {/* YouTube Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-6 mb-8"
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="bg-dark-light/50 rounded-xl p-6 border border-gray-700 text-center"
            >
              <div className="text-4xl mb-4">{role.icon}</div>
              <h4 className="text-white font-bold text-lg mb-2">{role.title}</h4>
              <p className="text-gray-400 text-sm">{role.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Flow Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-dark-light/30 rounded-xl p-6 border border-gray-700 mb-8"
        >
          <h4 className="text-gray-400 text-center mb-4">기대 효과</h4>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-red-500/20 rounded-lg px-4 py-3 border border-red-500/30">
              <span className="text-red-400 font-semibold">유튜브 콘텐츠 바이럴</span>
            </div>
            <span className="text-gray-500 text-2xl">→</span>
            <div className="bg-primary/20 rounded-lg px-4 py-3 border border-primary/30">
              <span className="text-primary font-semibold">네임밸류 확보</span>
            </div>
            <span className="text-gray-500 text-2xl">→</span>
            <div className="bg-cyan-500/20 rounded-lg px-4 py-3 border border-cyan-500/30">
              <span className="text-cyan-400 font-semibold">기업이 먼저 연락</span>
            </div>
            <span className="text-gray-500 text-2xl">→</span>
            <div className="bg-amber-500/20 rounded-lg px-4 py-3 border border-amber-500/30">
              <span className="text-amber-400 font-semibold">인바운드 영업 완성</span>
            </div>
          </div>
        </motion.div>

        {/* Tone & Manner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl p-6 border border-primary/30"
        >
          <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <span>🎭</span> 콘텐츠 톤앤매너
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-red-400 text-2xl">❌</span>
              <span className="text-gray-400">진지하고 딱딱한 톤</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary text-2xl">✅</span>
              <span className="text-white font-semibold">진짜 또라이들처럼 재밌고 유쾌하게</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-400 text-2xl">❌</span>
              <span className="text-gray-400">점잖은 기업 홍보</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary text-2xl">✅</span>
              <span className="text-white font-semibold">미친 사람들 마냥 길거리로 나가서 체험시키고 튀기</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
