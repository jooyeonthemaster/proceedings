'use client';

import { motion } from 'framer-motion';

export default function AIFeature4Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            AI 고유 특성 4/5
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-primary">실시간 반응성</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-6">
          {/* TeamLab comparison */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-light/50 rounded-2xl p-6 border border-gray-700"
          >
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-gray-400 mb-4">팀랩 (인터랙티브)</h3>
            <p className="text-gray-300 mb-4">
              관객의 입력에 반응하지만...
            </p>
            <div className="bg-dark-light rounded-lg p-4 border border-gray-600">
              <p className="text-gray-400 text-sm">
                <span className="text-yellow-400">미리 프로그래밍된</span> 반응<br/>
                정해진 규칙 안에서 변화
              </p>
            </div>
          </motion.div>

          {/* AI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-primary/10 to-green-500/10 rounded-2xl p-6 border border-primary/30"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-primary mb-4">AI (생성적)</h3>
            <p className="text-gray-300 mb-4">
              관객의 입력에 즉각 반응하며...
            </p>
            <div className="bg-dark-light/50 rounded-lg p-4 border border-primary/30">
              <p className="text-gray-300 text-sm">
                <span className="text-primary font-bold">매번 새롭게 만들어지는</span> 반응<br/>
                작품이 고정된 게 아니라 매 순간 생성됨
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6"
        >
          <div className="bg-gradient-to-r from-primary/20 to-green-500/20 rounded-xl p-6 border border-primary/30">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-600/30 rounded-full flex items-center justify-center border border-gray-600 mb-2">
                  <span className="text-2xl">📦</span>
                </div>
                <p className="text-gray-500 text-sm">프로그래밍</p>
              </div>
              <span className="text-2xl text-gray-600">≠</span>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30 mb-2">
                  <span className="text-2xl">🌱</span>
                </div>
                <p className="text-primary text-sm">생성</p>
              </div>
            </div>
            <p className="text-xl text-center text-white font-bold mt-4">
              AI는 더 근본적으로 <span className="text-primary">"생성적"</span>이다.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
