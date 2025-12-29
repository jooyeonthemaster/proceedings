'use client';

import { motion } from 'framer-motion';

export default function AccentWOWIntroSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-pink-500 bg-opacity-20 text-pink-400 text-sm mb-4">
            캐시카우 2
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            🎂 <span className="text-pink-400">악센트 WOW</span>
          </h2>
          <p className="text-xl text-gray-400">생일 이벤트 향수공방</p>
        </motion.div>

        {/* Definition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl p-6 border border-pink-500/30 mb-6 text-center"
        >
          <p className="text-xl text-gray-300 mb-2">현재 운영 중인 향수공방 2</p>
          <p className="text-3xl text-white font-bold">
            월매출 <span className="text-pink-400">1,500만 원</span> 목표
          </p>
        </motion.div>

        {/* 서비스 특징 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 mb-6"
        >
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">✨</span> 서비스 특징
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-pink-400 text-lg">🎤</span>
              <span><span className="text-pink-400 font-bold">아이돌 팬들</span>이 향수공방을 <span className="text-white font-bold">대관</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 text-lg">🎂</span>
              <span>좋아하는 아이돌의 <span className="text-pink-400 font-bold">생일 이벤트</span> 진행</span>
            </li>
          </ul>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
              <p className="text-red-400 font-bold text-sm mb-1">⚠️ 소속사와 공식 콜라보</p>
              <p className="text-gray-400 text-sm">❌ 아님</p>
            </div>
            <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
              <p className="text-green-400 font-bold text-sm mb-1">✅ 팬들이 자체적으로</p>
              <p className="text-gray-400 text-sm">기획하고, 자기들 돈으로 진행</p>
            </div>
          </div>
        </motion.div>

        {/* 현황 & 포지션 */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/30"
          >
            <h3 className="text-purple-400 font-bold mb-3 flex items-center gap-2">
              <span className="text-xl">📊</span> 현황
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">•</span>
                매달 생일 이벤트 약 <span className="text-purple-400 font-bold">10개</span>씩 진행
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">•</span>
                2026년부터 <span className="text-purple-400 font-bold">류다혜</span>가 전담 예정
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-primary/10 rounded-xl p-5 border border-primary/30"
          >
            <h3 className="text-primary font-bold mb-3 flex items-center gap-2">
              <span className="text-xl">🎯</span> 포지션
            </h3>
            <p className="text-gray-300">
              기본적으로 <span className="text-primary font-bold">캐시카우</span>로서의 역할이 메인
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
