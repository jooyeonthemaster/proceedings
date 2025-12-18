'use client';

import { motion } from 'framer-motion';

export default function ClosingSlide() {
  const keyMessages = [
    { icon: '🔥', text: '2025년은 검증의 해였다' },
    { icon: '🚀', text: '2026년은 결실의 해가 될 것이다' },
    { icon: '📺', text: '유튜브는 선택이 아닌 필수다' },
    { icon: '🎯', text: '"우리 것"에 집중한다' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>

        {/* Year watermarks */}
        <div className="absolute top-10 left-10 text-[200px] font-black text-white opacity-[0.02] select-none">
          2025
        </div>
        <div className="absolute bottom-10 right-10 text-[200px] font-black text-primary opacity-[0.03] select-none">
          2026
        </div>
      </div>

      <div className="text-center z-10 space-y-10 px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-bold text-white mb-6">
            <span className="text-amber-400">감사합니다</span>
          </h1>
          <div className="h-2 w-48 bg-gradient-to-r from-amber-400 via-primary to-green-400 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          {keyMessages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
              className="flex items-center justify-center gap-3"
            >
              <span className="text-3xl">{msg.icon}</span>
              <span className="text-xl text-gray-300">{msg.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="pt-8"
        >
          <div className="inline-block bg-gradient-to-r from-amber-500/20 via-primary/20 to-green-500/20 rounded-2xl p-8 border border-primary/30">
            <p className="text-3xl font-bold text-white mb-4">
              2026년,
              <span className="text-primary ml-2">함께 결실을 맺자</span>
            </p>
            <p className="text-gray-400">
              주식회사 네안데르 | 개발팀 회의
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="pt-4"
        >
          <div className="flex flex-col items-center text-gray-500 text-sm">
            <span className="mb-2">Press ESC to exit</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-dark-light rounded border border-gray-700 text-xs">ESC</span>
              <span>목록으로 돌아가기</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
