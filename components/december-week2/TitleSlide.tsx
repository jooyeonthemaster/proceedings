'use client';

import { motion } from 'framer-motion';

export default function TitleSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="text-center z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500 bg-opacity-10 border border-emerald-500 text-emerald-400 mb-6">
            2025년 12월 14일
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-7xl font-bold text-white mb-4 tracking-tight">
            12월 2주차 <span className="text-emerald-400">주간 회의</span>
          </h1>
          <div className="h-2 w-40 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          정산 현황 & 뿌덕 V2 업데이트 진행 상황
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-12"
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
