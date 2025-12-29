'use client';

import { motion } from 'framer-motion';

export default function VSAICueSheet3Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        {/* Gallery Icon */}
        <div className="absolute top-20 right-20 text-[100px] opacity-5">
          🖼️
        </div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-4">
            큐시트 Part 3
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🖼️ 결과물 출력 + 블라인드 투표
          </h2>
        </motion.div>

        {/* Two Main Sections */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Output Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-purple-400 font-bold text-2xl flex items-center gap-2">
                <span>🖨️</span> 결과물 출력
              </h3>
              <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                약 3분
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-dark/50 rounded-lg p-4">
                <div className="flex items-center justify-center gap-8 mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-1">🤖</div>
                    <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-lg text-lg font-bold">10장</div>
                  </div>
                  <div className="text-gray-500 text-2xl">vs</div>
                  <div className="text-center">
                    <div className="text-4xl mb-1">📸</div>
                    <div className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-lg text-lg font-bold">10장</div>
                  </div>
                </div>
              </div>

              <div className="bg-dark/50 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">📋 진행 방식</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">1.</span>
                    <span>각 팀 결과물 <span className="text-purple-400 font-semibold">10장씩 출력</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">2.</span>
                    <span><span className="text-purple-400 font-semibold">벽에 게시</span> (섞어서 배치)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">3.</span>
                    <span>어떤 것이 AI인지 <span className="text-red-400 font-semibold">표시 안 함</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Voting Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-pink-500/10 rounded-xl p-6 border border-pink-500/30"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-pink-400 font-bold text-2xl flex items-center gap-2">
                <span>🗳️</span> 블라인드 투표
              </h3>
              <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-sm font-semibold">
                약 2분
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-dark/50 rounded-lg p-4 text-center">
                <div className="text-5xl mb-2">🎭</div>
                <p className="text-white font-semibold">AI vs 사람</p>
                <p className="text-gray-400 text-sm">누가 찍었는지 모르는 상태로 투표</p>
              </div>

              <div className="bg-dark/50 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">✅ 핵심 포인트</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>행인들이 <span className="text-pink-400 font-semibold">직접 투표</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>AI가 찍은 건지, 사람이 찍은 건지 <span className="text-pink-400 font-semibold">모르게</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>순수하게 <span className="text-primary font-semibold">사진 퀄리티</span>로 승부</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Voting Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-dark-light/50 rounded-xl p-6 border border-gray-700"
        >
          <h4 className="text-white font-bold mb-4 text-center">투표 진행 이미지</h4>
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + num * 0.1 }}
                className="w-20 h-28 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border border-gray-600"
              >
                <span className="text-3xl">🖼️</span>
              </motion.div>
            ))}
            <div className="text-gray-500 text-xl mx-2">...</div>
            {[6, 7].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + num * 0.1 }}
                className="w-20 h-28 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border border-gray-600"
              >
                <span className="text-3xl">🖼️</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            🎭 총 20장의 사진이 랜덤 배치 → 행인들이 마음에 드는 사진에 투표
          </p>
        </motion.div>
      </div>
    </div>
  );
}
