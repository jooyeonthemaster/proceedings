'use client';

import { motion } from 'framer-motion';

export default function JeyeonConcernsSlide() {
  const concerns = [
    {
      icon: '🧠',
      title: '머리는 좋은데 한량 기질',
      description: '똑똒한 건 알지만, 게으를 수 있다는 걱정',
    },
    {
      icon: '👨‍👦',
      title: '친형이라는 관계',
      description: '김주연(나)의 친형이다보니 뺀질거릴 수 있다고 생각',
    },
    {
      icon: '🗣️',
      title: '지시에 대한 반발 우려',
      description: '뭐 시키면 형이라고 뭐라할 수 있다고 생각했음',
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
            <span className="text-orange-400 text-sm font-medium tracking-wider uppercase">
              Initial Concerns
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              원래 우려했던 점들
            </h2>
            <p className="text-gray-400 mt-2">형과 일하기 전, 걱정했던 부분들</p>
          </div>

          {/* Concerns Cards */}
          <div className="space-y-4">
            {concerns.map((concern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">{concern.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{concern.title}</h3>
                    <p className="text-gray-400">{concern.description}</p>
                  </div>
                  <div className="text-orange-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Transition Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-dark-light/50 px-6 py-4 rounded-full border border-gray-700">
              <span className="text-gray-400">그런데...</span>
              <span className="text-2xl">🤔</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
