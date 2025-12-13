'use client';

import { motion } from 'framer-motion';

export default function PpudeokShareSlide() {
  const shareFeatures = [
    {
      platform: "링크 공유",
      icon: "🔗",
      description: "고유 URL로 작품 공유",
      detail: "원클릭 링크 복사"
    },
    {
      platform: "SNS 공유",
      icon: "📱",
      description: "소셜 미디어 직접 공유",
      detail: "카카오톡, 인스타그램 등"
    },
    {
      platform: "이미지 다운로드",
      icon: "💾",
      description: "고화질 이미지 저장",
      detail: "다양한 해상도 지원"
    },
    {
      platform: "갤러리 게시",
      icon: "🖼️",
      description: "커뮤니티 갤러리 등록",
      detail: "다른 사용자와 공유"
    }
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-dark via-dark-light to-dark p-16 flex flex-col justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-green-400 pl-8 mb-10 relative z-10"
      >
        <div className="flex items-center mb-2">
          <span className="text-4xl mr-4">🔗</span>
          <h2 className="text-5xl font-bold text-white">공유 기능 구현</h2>
        </div>
        <p className="text-xl text-gray-400">생성한 작품을 다양한 방법으로 공유</p>
      </motion.div>

      {/* Share Options Grid */}
      <div className="grid grid-cols-4 gap-6 relative z-10 mb-10">
        {shareFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-dark-light/80 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20 hover:border-green-400/50 transition-all text-center group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.platform}</h3>
            <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
            <span className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">
              {feature.detail}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Share Flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="relative z-10 bg-dark-light/60 backdrop-blur-sm rounded-2xl p-8 border border-green-400/20"
      >
        <h4 className="text-xl font-bold text-white mb-6 text-center">공유 프로세스</h4>
        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-2">
              <span className="text-2xl">🎨</span>
            </div>
            <span className="text-gray-400 text-sm">이미지 생성</span>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="w-16 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full"
          />

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-2">
              <span className="text-2xl">✨</span>
            </div>
            <span className="text-gray-400 text-sm">결과물 확인</span>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full"
          />

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-2">
              <span className="text-2xl">🔗</span>
            </div>
            <span className="text-gray-400 text-sm">공유하기</span>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="w-16 h-1 bg-gradient-to-r from-green-500 to-primary rounded-full"
          />

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-500 rounded-2xl flex items-center justify-center mb-2">
              <span className="text-2xl">🎉</span>
            </div>
            <span className="text-gray-400 text-sm">바이럴 확산</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
