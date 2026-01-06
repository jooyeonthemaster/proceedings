'use client';

import { motion } from 'framer-motion';

export default function AuthoritySwapSlide() {
  const swaps = [
    { idea: '불신지옥 AI', authority: '종교적 권위', icon: '⛪' },
    { idea: 'AI 기자', authority: '언론의 권위', icon: '📰' },
    { idea: 'AI 판사', authority: '사법의 권위', icon: '⚖️' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500 bg-opacity-20 text-orange-400 text-sm mb-4">
            공통점 발견
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-orange-400">권위</span>를 AI로 갈아끼우기
          </h2>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-dark-light/50 rounded-2xl p-6 border border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left text-gray-400 py-3 px-4">아이디어</th>
                  <th className="text-left text-gray-400 py-3 px-4">건드리는 것</th>
                </tr>
              </thead>
              <tbody>
                {swaps.map((swap, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="border-b border-gray-800"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{swap.icon}</span>
                        <span className="text-white font-semibold">{swap.idea}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-orange-400 font-bold">{swap.authority}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Why It's Art */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-2xl p-6 border border-orange-500/30">
            <p className="text-lg text-gray-300 mb-4 text-center">
              <span className="text-white font-bold">이게 왜 예술이 되는가?</span>
            </p>
            <p className="text-gray-300 text-center mb-4">
              인간만 할 수 있다고 믿었던 것들이 있다.<br/>
              <span className="text-orange-400">설교(영적 권위)</span>, <span className="text-cyan-400">질문(진실 추구)</span>, <span className="text-purple-400">판단(정의 구현)</span>.
            </p>
            <p className="text-xl text-white font-bold text-center">
              이걸 AI가 하면, 보는 사람에게 질문이 생긴다:
            </p>
            <p className="text-2xl text-pink-400 font-black text-center mt-2">
              "어? 잠깐, 그럼 인간이 하는 건 뭐가 달라?"
            </p>
          </div>
        </motion.div>

        {/* Series Concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="bg-dark-light/30 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-gray-400 mb-2">컨셉으로 묶으면:</p>
            <p className="text-2xl text-white font-bold">
              "<span className="text-orange-400">인간의 자리에 AI를 앉혀보기</span>" 시리즈
            </p>
            <div className="flex justify-center gap-3 mt-4 flex-wrap">
              <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-sm">EP.01 불신지옥 (종교)</span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400 text-sm">EP.02 AI 기자 (언론)</span>
              <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm">EP.03 AI 판사 (사법)</span>
              <span className="px-3 py-1 bg-gray-500/20 rounded-full text-gray-400 text-sm">EP.04+ 확장...</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
