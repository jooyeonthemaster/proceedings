'use client';

import { motion } from 'framer-motion';

export default function TeamBrandingNeedSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
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
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500 bg-opacity-20 text-cyan-400 text-sm mb-4">
            새로운 질문
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-cyan-400">Q.</span> 그건 개인 작가의 서사 아닌가?
          </h2>
          <p className="text-xl text-gray-400">
            우리는 <span className="text-primary font-bold">팀</span>인데.
          </p>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-dark-light/50 rounded-2xl p-6 border border-gray-700">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🤔</div>
              <div>
                <p className="text-gray-300 text-lg mb-4">
                  위의 답변은 <span className="text-red-400">"개인 작가가 왜 AI를 선택하는가"</span>에 대한 서사다.<br/>
                  "나는 왜 AI로 작업하는가"에 대한 개인적 이유.
                </p>
                <p className="text-white text-xl font-semibold">
                  그런데 우리는 개인 작가가 아니라 <span className="text-cyan-400">팀</span>이다. <span className="text-primary">회사</span>다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Need Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30 text-center">
            <p className="text-2xl text-white font-bold mb-2">
              팀 차원의 브랜딩 서사가 필요하다
            </p>
            <p className="text-3xl text-cyan-400 font-black">
              "일해라컴퍼니는 왜 AI로 예술을 하는가"
            </p>
            <p className="text-gray-400 mt-2">
              이 질문에 답할 수 있어야 한다.
            </p>
          </div>
        </motion.div>

        {/* New Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-dark-light/30 rounded-xl p-6 border border-gray-700">
            <p className="text-lg text-gray-400 mb-4 font-semibold">
              그렇다면 다른 팀들은 어떻게 하고 있는가?
            </p>
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="bg-dark-light rounded-lg p-4 border border-gray-600 text-center"
              >
                <div className="text-3xl mb-2">🎨</div>
                <p className="text-white font-bold">팀랩</p>
                <p className="text-gray-500 text-sm">왜 그런 걸 하는가?</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="bg-dark-light rounded-lg p-4 border border-gray-600 text-center"
              >
                <div className="text-3xl mb-2">🌊</div>
                <p className="text-white font-bold">디스트릭트</p>
                <p className="text-gray-500 text-sm">그들의 철학은?</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                className="bg-dark-light rounded-lg p-4 border border-gray-600 text-center"
              >
                <div className="text-3xl mb-2">🖼️</div>
                <p className="text-white font-bold">이이남</p>
                <p className="text-gray-500 text-sm">왜 디지털인가?</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
