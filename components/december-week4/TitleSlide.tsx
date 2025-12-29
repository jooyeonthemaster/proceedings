'use client';

import { motion } from 'framer-motion';

export default function TitleSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* AI Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-10 text-[180px] font-black text-white select-none">
            AI
          </div>
          <div className="absolute bottom-1/4 right-10 text-[180px] font-black text-primary select-none">
            VS
          </div>
        </div>
      </div>

      <div className="text-center z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-6 py-3 rounded-full bg-cyan-500 bg-opacity-10 border border-cyan-500 text-cyan-400 mb-6 text-lg">
            2025년 12월 28일
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-7xl font-bold text-white mb-4 tracking-tight">
            12월 4주차 <span className="text-cyan-400">전략 회의</span>
          </h1>
          <div className="h-2 w-64 bg-gradient-to-r from-cyan-400 via-primary to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <p className="text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-semibold">
            🎯 체험형 AI 콘텐츠 창작 집단으로의 도약 🚀
          </p>
          <p className="text-xl text-gray-400">
            네안데르랩 × VS AI × 2026 전략
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8"
        >
          <div className="flex justify-center gap-4 text-sm text-gray-500 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-dark-light rounded-lg border border-gray-700">
              <span className="text-cyan-400">Part 1</span>
              <span>방향 & 팀</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-dark-light rounded-lg border border-gray-700">
              <span className="text-primary">Part 2</span>
              <span>네안데르랩 & VS AI</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-dark-light rounded-lg border border-gray-700">
              <span className="text-amber-400">Part 3</span>
              <span>캐시카우 전략</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-dark-light rounded-lg border border-gray-700">
              <span className="text-purple-400">Part 4</span>
              <span>2026 액션플랜</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-8"
        >
          <div className="flex flex-col items-center text-gray-500 text-sm">
            <span className="mb-2 animate-bounce">Press Space to Start</span>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-gray-500 rounded-full animate-scroll"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
