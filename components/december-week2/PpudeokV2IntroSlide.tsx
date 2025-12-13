'use client';

import { motion } from 'framer-motion';

export default function PpudeokV2IntroSlide() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-purple-900 via-dark to-dark p-16 flex flex-col justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-purple-500/20 border-2 border-purple-400 text-purple-300 text-lg font-bold">
            🎉 Major Update
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-8xl font-bold text-white mb-4">
            뿌덕 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">V2</span>
          </h1>
          <p className="text-3xl text-gray-300">드디어 버전 2 업데이트 진행 중!</p>
        </motion.div>

        {/* Key Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-4 gap-6"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 text-center hover:bg-white/10 transition-all">
            <span className="text-4xl mb-3 block">🎨</span>
            <h3 className="text-white font-bold text-lg mb-1">UI 개선</h3>
            <p className="text-gray-400 text-sm">전반적인 디자인 개선</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-pink-400/30 text-center hover:bg-white/10 transition-all">
            <span className="text-4xl mb-3 block">🤖</span>
            <h3 className="text-white font-bold text-lg mb-1">AI 기능</h3>
            <p className="text-gray-400 text-sm">AI 기능 업데이트</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 text-center hover:bg-white/10 transition-all">
            <span className="text-4xl mb-3 block">🔐</span>
            <h3 className="text-white font-bold text-lg mb-1">로그인</h3>
            <p className="text-gray-400 text-sm">사용자 인증 시스템</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30 text-center hover:bg-white/10 transition-all">
            <span className="text-4xl mb-3 block">🔗</span>
            <h3 className="text-white font-bold text-lg mb-1">공유 기능</h3>
            <p className="text-gray-400 text-sm">결과물 공유 시스템</p>
          </div>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-8 py-4 border border-purple-400/30">
            <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-white text-xl font-semibold">현재 개발 진행 중</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
