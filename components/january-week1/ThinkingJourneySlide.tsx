'use client';

import { motion } from 'framer-motion';

export default function ThinkingJourneySlide() {
  const journey = [
    { step: '출발', question: '"왜 AI로 예술을?"', color: 'cyan' },
    { step: '선례', question: '"다른 디지털 아티스트들은?"', color: 'blue' },
    { step: '고유성', question: '"AI만의 특성은?"', color: 'purple' },
    { step: '전환', question: '"너무 철학적이다"', color: 'orange' },
    { step: '발견', question: '"미친 짓이 먼저다"', color: 'pink' },
    { step: '결론', question: '"AI교"', color: 'red' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            결론
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="text-primary">사고의 여정</span> 요약
          </h2>
          <p className="text-gray-400">90분의 문답이 어디로 흘렀는가</p>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 transform -translate-y-1/2 rounded"></div>

          <div className="grid grid-cols-6 gap-2 relative">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Dot */}
                <div className={`w-6 h-6 rounded-full bg-${item.color}-500 border-4 border-dark mb-4 relative z-10`}></div>

                {/* Card */}
                <div className={`bg-${item.color}-500/10 rounded-xl p-3 border border-${item.color}-500/30 text-center w-full`}>
                  <p className={`text-${item.color}-400 font-bold text-sm mb-1`}>{item.step}</p>
                  <p className="text-gray-300 text-xs">{item.question}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Transformation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-red-500/10 rounded-xl p-6 border border-gray-700 text-center">
            <p className="text-gray-400 mb-3">핵심 전환:</p>
            <div className="flex items-center justify-center gap-4">
              <div className="text-cyan-400 font-bold">
                "AI의 철학적 의미는?"
              </div>
              <span className="text-3xl">→</span>
              <div className="text-red-400 font-bold">
                "AI로 뭔 미친 짓 하지?"
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
