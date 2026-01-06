'use client';

import { motion } from 'framer-motion';

export default function ExplorerAttitudeSlide() {
  const notThis = ['AI를 숭배하는 것', 'AI를 무서워하는 것'];
  const butThis = '뭔지 모르겠는데 재밌으니까 만져보는 것';

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
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
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            방향 재설정
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-primary">탐구자</span>의 태도
          </h2>
        </motion.div>

        {/* Main Philosophy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/30 text-center">
            <p className="text-3xl text-white font-bold mb-4">
              "AI라는 미지의 것을<br/>
              <span className="text-primary">예술로 탐구한다</span>"
            </p>
          </div>
        </motion.div>

        {/* Not This / But This */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {notThis.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="bg-red-500/10 rounded-xl p-4 border border-red-500/30 text-center"
            >
              <span className="text-red-400 text-2xl">❌</span>
              <p className="text-gray-400 mt-2">{item}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="bg-primary/20 rounded-xl p-4 border border-primary/30 text-center"
          >
            <span className="text-primary text-2xl">✅</span>
            <p className="text-white font-semibold mt-2">{butThis}</p>
          </motion.div>
        </div>

        {/* Analogy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🔬</span>
              <h3 className="text-lg font-bold text-cyan-400">과학자처럼</h3>
            </div>
            <p className="text-gray-400 text-sm">
              새로운 물질을 발견했을 때 느끼는 것처럼.<br/>
              <span className="text-white">호기심. 실험. 발견.</span>
            </p>
          </div>

          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">👶</span>
              <h3 className="text-lg font-bold text-pink-400">아이처럼</h3>
            </div>
            <p className="text-gray-400 text-sm">
              처음 보는 걸 만졌을 때처럼.<br/>
              <span className="text-white">"이게 뭐야?" 하면서 만져보는 것.</span>
            </p>
          </div>
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6"
        >
          <div className="bg-dark-light/30 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-xl text-gray-300">
              <span className="text-red-400">"우리가 정답을 안다"</span>가 아니라<br/>
              <span className="text-primary font-bold text-2xl">"우리도 같이 보고 있다"</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
