'use client';

import { motion } from 'framer-motion';

export default function NeanderLabIntroSlide() {
  const examples = [
    { name: 'AI 로봇 포토부스', desc: '로봇이 직접 촬영하고 즉석 인화', icon: '📸' },
    { name: 'AI 향수 추천 & 조향', desc: 'AI가 분석한 향 추천 + 직접 조향', icon: '🧴' },
    { name: 'AI 사주', desc: 'AI 기반 사주 분석 체험', icon: '🔮' },
    { name: 'AI 판사', desc: 'AI가 판결하는 재판 체험', icon: '⚖️' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
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
            메인 사업
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            🎯 <span className="text-primary">네안데르랩</span>
          </h2>
          <p className="text-2xl text-gray-300">체험형 AI 콘텐츠 기획사</p>
        </motion.div>

        {/* Definition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/30 mb-8"
        >
          <div className="text-center">
            <p className="text-2xl text-white leading-relaxed">
              "오프라인 공간에서 체험할 수 있는 <span className="text-primary font-bold">AI 콘텐츠</span>를<br />
              기획 및 개발하는 서비스"
            </p>
          </div>
        </motion.div>

        {/* Examples */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg text-gray-400 mb-4 text-center">서비스 예시</h3>
          <div className="grid grid-cols-4 gap-4">
            {examples.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 text-center hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-white font-semibold mb-2">{item.name}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-dark-light rounded-xl px-8 py-4 border border-gray-700">
            <p className="text-gray-300">
              기타 오프라인에서 <span className="text-primary font-semibold">AI를 접목해서 체험</span>할 수 있는<br />
              <span className="text-cyan-400 font-semibold">재밌는 콘텐츠</span>를 기획해주는 서비스
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
