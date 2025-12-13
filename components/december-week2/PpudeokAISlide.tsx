'use client';

import { motion } from 'framer-motion';

export default function PpudeokAISlide() {
  const aiFeatures = [
    {
      title: "AI 생성 품질 향상",
      description: "더 정교하고 자연스러운 이미지 생성",
      icon: "🖼️",
      status: "개발 중",
      progress: 70
    },
    {
      title: "스타일 다양화",
      description: "다양한 아트 스타일 옵션 추가",
      icon: "🎭",
      status: "개발 중",
      progress: 60
    },
    {
      title: "프롬프트 최적화",
      description: "사용자 입력 자동 개선 시스템",
      icon: "✍️",
      status: "개발 중",
      progress: 50
    },
    {
      title: "생성 속도 개선",
      description: "더 빠른 이미지 생성 처리",
      icon: "⚡",
      status: "최적화 중",
      progress: 40
    }
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-dark via-dark-light to-dark p-16 flex flex-col justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-cyan-400 pl-8 mb-10 relative z-10"
      >
        <div className="flex items-center mb-2">
          <span className="text-4xl mr-4">🤖</span>
          <h2 className="text-5xl font-bold text-white">AI 기능 업데이트</h2>
        </div>
        <p className="text-xl text-gray-400">더 강력해진 AI 이미지 생성 기능</p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-6 relative z-10">
        {aiFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-dark-light/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <span className="text-3xl mr-3">{feature.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
              <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-bold">
                {feature.status}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">진행률</span>
                <span className="text-cyan-400 font-bold">{feature.progress}%</span>
              </div>
              <div className="w-full bg-dark rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${feature.progress}%` }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center relative z-10"
      >
        <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-400/30 rounded-full px-6 py-3">
          <span className="text-cyan-400 mr-2">💡</span>
          <span className="text-gray-300">최신 AI 모델 적용으로 생성 품질 대폭 향상 예정</span>
        </div>
      </motion.div>
    </div>
  );
}
