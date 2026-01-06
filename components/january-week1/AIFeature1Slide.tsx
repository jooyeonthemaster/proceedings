'use client';

import { motion } from 'framer-motion';

export default function AIFeature1Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-4">
            AI 고유 특성 1/5
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-purple-400">무한 생성</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-6">
          {/* Traditional Art */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-light/50 rounded-2xl p-6 border border-gray-700"
          >
            <div className="text-4xl mb-4">🖼️</div>
            <h3 className="text-xl font-bold text-gray-400 mb-4">전통 예술</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                작가는 <span className="text-white font-bold">"하나"</span>의 완성작을 만든다.
              </p>
              <p className="text-gray-400">
                그게 원본이고, 나머지는 복제다.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-20 h-20 bg-amber-500/20 rounded-lg flex items-center justify-center border border-amber-500/30">
                  <span className="text-amber-400 font-bold">원본</span>
                </div>
                <span className="text-gray-500">→</span>
                <div className="w-16 h-16 bg-gray-600/20 rounded-lg flex items-center justify-center border border-gray-600 opacity-60">
                  <span className="text-gray-500 text-sm">복제1</span>
                </div>
                <div className="w-16 h-16 bg-gray-600/20 rounded-lg flex items-center justify-center border border-gray-600 opacity-40">
                  <span className="text-gray-500 text-sm">복제2</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Art */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl p-6 border border-purple-500/30"
          >
            <div className="text-4xl mb-4">♾️</div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">AI 예술</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                같은 프롬프트를 넣어도<br/>
                <span className="text-purple-400 font-bold">매번 다른 결과</span>가 나온다.
              </p>
              <p className="text-white font-semibold">
                "원본"이라는 개념 자체가 흔들린다.
              </p>
              <div className="flex items-center gap-2 mt-4 flex-wrap">
                <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                  <span className="text-purple-400 text-sm">v1</span>
                </div>
                <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                  <span className="text-cyan-400 text-sm">v2</span>
                </div>
                <div className="w-16 h-16 bg-pink-500/20 rounded-lg flex items-center justify-center border border-pink-500/30">
                  <span className="text-pink-400 text-sm">v3</span>
                </div>
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                  <span className="text-primary text-sm">v∞</span>
                </div>
              </div>
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
          <div className="bg-dark-light/30 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-xl text-gray-300">
              <span className="text-purple-400 font-bold">뭐가 "진짜"인지 모호해진다.</span><br/>
              모두가 원본이거나, 아무것도 원본이 아니거나.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
