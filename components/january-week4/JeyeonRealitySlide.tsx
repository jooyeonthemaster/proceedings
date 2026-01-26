'use client';

import { motion } from 'framer-motion';

export default function JeyeonRealitySlide() {
  const realities = [
    {
      icon: '✅',
      title: '군말없이 수행',
      description: '다시 하라고 하면 그냥 군말없이 다시 함',
      color: 'emerald',
    },
    {
      icon: '🔍',
      title: '스스로 탐구',
      description: '기능적인 부분이나 그런 것들에 대해서 스스로 탐구하고 학습',
      color: 'cyan',
    },
    {
      icon: '🚀',
      title: '새로운 시도',
      description: '스크롤 인터랙티브 화면 전환 등 새로운 것들을 계속 시도',
      color: 'purple',
    },
    {
      icon: '📚',
      title: '레퍼런스 탐색',
      description: '레퍼런스를 찾아서 계속 시도하는 모습',
      color: 'blue',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
              Reality Check
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              실제로는? <span className="text-emerald-400">전혀 그렇지 않음</span>
            </h2>
            <p className="text-gray-400 mt-2">개발하는 과정들을 옆에서 계속 지켜본 결과</p>
          </div>

          {/* Reality Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {realities.map((reality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`bg-gradient-to-br from-${reality.color}-500/10 to-transparent border border-${reality.color}-500/30 rounded-xl p-6`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-${reality.color}-500/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-2xl">{reality.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{reality.title}</h3>
                    <p className="text-gray-400 text-sm">{reality.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-500/50 rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-white mb-3">
              우려와는 <span className="text-emerald-400">정반대</span>의 모습
            </div>
            <p className="text-gray-300">
              시키면 그냥 다시 해야 된다고 하면 군말없이 다시 하고,
              <br />
              스스로 일을 찾아서 하는 모습을 보여주고 있음
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
