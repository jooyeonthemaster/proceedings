'use client';

import { motion } from 'framer-motion';

export default function AIFeature2Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
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
            AI 고유 특성 2/5
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-pink-400">협업적 저자성</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-6">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-light/50 rounded-2xl p-6 border border-gray-700"
          >
            <div className="text-4xl mb-4">👤</div>
            <h3 className="text-xl font-bold text-gray-400 mb-4">전통적 저자성</h3>
            <p className="text-gray-300 mb-4">
              작가의 의도가 곧 작품이었다.<br/>
              작가가 <span className="text-white font-bold">100%</span>를 통제했다.
            </p>
            <div className="bg-dark-light rounded-lg p-4 border border-gray-600">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center border border-amber-500/30 mb-2">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <p className="text-amber-400 font-bold">작가</p>
                  <p className="text-gray-500 text-sm">100% 통제</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Collaboration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl p-6 border border-pink-500/30"
          >
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-pink-400 mb-4">AI 협업</h3>
            <p className="text-gray-300 mb-4">
              AI가 예상치 못한 것을 제안하고,<br/>
              작가가 선택하거나 수정한다.
            </p>
            <div className="bg-dark-light/50 rounded-lg p-4 border border-pink-500/20">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center border border-pink-500/30 mb-2">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <p className="text-pink-400 text-sm">작가 의도</p>
                </div>
                <span className="text-2xl text-primary">+</span>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30 mb-2">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <p className="text-purple-400 text-sm">AI 해석</p>
                </div>
                <span className="text-2xl text-white">=</span>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30 mb-2">
                    <span className="text-2xl">✨</span>
                  </div>
                  <p className="text-primary text-sm">작품</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6"
        >
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-6 border border-pink-500/30 text-center">
            <p className="text-2xl text-white font-bold mb-2">
              새로운 "저자성(authorship)" 논쟁
            </p>
            <p className="text-xl text-pink-400">
              이 작품은 누구의 것인가?
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
