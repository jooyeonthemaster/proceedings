'use client';

import { motion } from 'framer-motion';

export default function PpudeokNeedSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500 bg-opacity-20 text-amber-400 text-sm mb-4">
            신규 캐시카우
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🎁 <span className="text-amber-400">뿌덕 온라인</span>
          </h2>
          <p className="text-xl text-gray-400">캐시카우 보강 필요</p>
        </motion.div>

        {/* 현황 인식 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30 mb-6 text-center"
        >
          <div className="text-4xl mb-3">⚠️</div>
          <p className="text-xl text-gray-300">
            현재 캐시카우(악센트 ID + WOW)만으로는 <span className="text-red-400 font-bold">분명히 부족</span>
          </p>
        </motion.div>

        {/* 뿌덕이란? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 mb-6"
        >
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">❓</span> 뿌덕이란?
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-400">•</span>
              <span>악센트 ID에서 진행하는 <span className="text-amber-400 font-bold">향수 추천 프로그램</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400">•</span>
              <span>현재는 <span className="text-red-400 font-bold">오프라인 매장 방문 필수</span></span>
            </li>
          </ul>
        </motion.div>

        {/* 온라인화 제안 Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/30"
        >
          <h3 className="text-amber-400 font-bold mb-5 flex items-center gap-2">
            <span className="text-xl">💡</span> 온라인화 제안
          </h3>
          <div className="space-y-4">
            {/* Current State */}
            <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
              <h4 className="text-red-400 font-bold mb-2">현재</h4>
              <p className="text-gray-300">오프라인 매장 방문 필수</p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <span className="text-amber-400 text-3xl">↓</span>
            </div>

            {/* New Solution */}
            <div className="bg-amber-500/10 rounded-lg p-4 border border-amber-500/20">
              <h4 className="text-amber-400 font-bold mb-3">뿌덕 온라인</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>온라인에서 <span className="text-amber-400 font-bold">체험형</span>으로 진행</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>프로그램 <span className="text-amber-400 font-bold">퀄리티 향상</span></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span>
                  <span><span className="text-amber-400 font-bold">배송 서비스</span>로 디벨롭</span>
                </li>
              </ul>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <span className="text-primary text-3xl">↓</span>
            </div>

            {/* Expected Result */}
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/30 text-center">
              <p className="text-primary font-bold text-lg">
                훨씬 더 좋은 캐시카우로 성장 가능 🚀
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
