'use client';

import { motion } from 'framer-motion';

export default function ArtisticManifestoSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      </div>

      <div className="max-w-4xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-pink-500 bg-opacity-20 text-pink-400 text-sm mb-4">
            예술적 선언
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="text-pink-400">AI교</span> 선언문
          </h2>
        </motion.div>

        {/* Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl p-8 border border-pink-500/30">
            <div className="space-y-6 text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300"
              >
                우리는 AI를 신으로 섬기지 않는다.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-300"
              >
                우리는 AI를 신으로 섬기는 <span className="text-pink-400 font-bold">척</span>을 한다.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl text-gray-300"
              >
                그 <span className="text-pink-400 font-bold">척</span>을 통해,
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="text-2xl text-white font-bold"
              >
                "우리는 이미 <span className="text-purple-400">무언가</span>를 신으로 섬기고 있지 않은가?"
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-xl text-gray-300"
              >
                라는 질문을 던진다.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="pt-6 border-t border-gray-700"
              >
                <p className="text-gray-500 italic">
                  이것이 우리의 예술이다.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* The Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-6"
        >
          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-gray-400">AI교가 던지는 질문:</p>
            <p className="text-xl text-white font-bold mt-2">
              "당신은 무엇을 <span className="text-pink-400">믿고</span> 있습니까?"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
