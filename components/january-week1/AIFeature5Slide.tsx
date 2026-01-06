'use client';

import { motion } from 'framer-motion';

export default function AIFeature5Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-[#1a1a2e] to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        {/* Deep void effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-900 bg-opacity-50 text-purple-300 text-sm mb-4 border border-purple-700">
            AI 고유 특성 5/5
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-purple-300">심연으로서의 AI</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-b from-purple-900/20 to-black/40 rounded-2xl p-8 border border-purple-800/30 backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="text-7xl mb-6">🕳️</div>
              <p className="text-3xl text-white font-bold mb-4">
                AI는 <span className="text-purple-400">블랙박스</span>다.
              </p>
              <p className="text-xl text-gray-400">
                왜 이런 결과가 나왔는지 <span className="text-purple-300">완전히 설명할 수 없다.</span>
              </p>
            </div>

            {/* Comparison */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-dark-light/30 rounded-xl p-5 border border-gray-700">
                <div className="text-3xl mb-3">🖼️</div>
                <h3 className="text-lg font-bold text-gray-400 mb-2">전통 예술 감상</h3>
                <p className="text-gray-400 text-sm">
                  작가의 의도를 해석한다.<br/>
                  <span className="text-gray-300">"작가가 이것을 통해 무엇을 말하려 했을까?"</span>
                </p>
              </div>

              <div className="bg-purple-900/20 rounded-xl p-5 border border-purple-700/30">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="text-lg font-bold text-purple-300 mb-2">AI 예술 감상</h3>
                <p className="text-gray-300 text-sm">
                  AI조차 자신이 왜 이렇게 만들었는지 모른다.<br/>
                  <span className="text-purple-400 font-semibold">"알 수 없음"이 고유한 미학을 만든다.</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Emotion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-6 border border-purple-700/30 text-center">
            <p className="text-xl text-gray-300 mb-2">이 "알 수 없음"이 만들어내는 감정:</p>
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <span className="text-4xl">😨</span>
                <p className="text-red-400 font-bold mt-2">공포</p>
              </div>
              <span className="text-3xl text-gray-600">+</span>
              <div className="text-center">
                <span className="text-4xl">🤩</span>
                <p className="text-purple-400 font-bold mt-2">경이</p>
              </div>
              <span className="text-3xl text-gray-600">=</span>
              <div className="text-center">
                <span className="text-4xl">🕳️</span>
                <p className="text-white font-bold mt-2">심연을 들여다보는 느낌</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
