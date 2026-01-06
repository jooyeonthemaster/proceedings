'use client';

import { motion } from 'framer-motion';

export default function TooPhilosophicalSlide() {
  const features = [
    '무한 생성',
    '협업적 저자성',
    '집단 무의식',
    '심연...',
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-500 bg-opacity-20 text-red-400 text-sm mb-4">
            방향 전환
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-red-400">Q.</span> 너무 숭배하는 느낌으로<br/>
            가고 싶지 않아.
          </h2>
        </motion.div>

        {/* Feedback */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-dark-light/50 rounded-2xl p-6 border border-gray-700">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💬</div>
              <div>
                <p className="text-xl text-white font-semibold mb-4">솔직한 피드백:</p>
                <div className="space-y-3 text-gray-300">
                  <p>
                    "AI는 인류의 집단 무의식을 담은 심연입니다"<br/>
                    —이런 거창한 선언이 우리에게 맞는가?
                  </p>
                  <p className="text-red-400">
                    뭔가 AI를 신비화하는 느낌, 숭배하는 느낌이 든다.
                  </p>
                  <p>
                    너무 철학적이고, 너무 광범위한 주제다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What we have vs What we want */}
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-red-500/10 rounded-xl p-5 border border-red-500/30"
          >
            <div className="text-3xl mb-3">❌</div>
            <h3 className="text-lg font-bold text-red-400 mb-3">지금까지 나온 것들</h3>
            <div className="space-y-2">
              {features.map((f, i) => (
                <div key={i} className="bg-dark-light/50 rounded-lg px-3 py-2 text-gray-400 text-sm line-through">
                  {f}
                </div>
              ))}
            </div>
            <p className="text-red-400 text-sm mt-3 italic">
              철학적으로 깊고 흥미롭지만...
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-primary/10 rounded-xl p-5 border border-primary/30"
          >
            <div className="text-3xl mb-3">✅</div>
            <h3 className="text-lg font-bold text-primary mb-3">원하는 느낌</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                그냥 AI라는 미지의 것을<br/>
                <span className="text-primary font-bold">예술로 표현하고 탐구</span>하는 느낌
              </p>
              <p className="text-lg font-semibold text-white mt-4">
                더 가볍게. 더 솔직하게.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
