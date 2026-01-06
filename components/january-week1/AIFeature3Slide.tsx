'use client';

import { motion } from 'framer-motion';

export default function AIFeature3Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
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
            AI 고유 특성 3/5
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-cyan-400">학습된 집단 무의식</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🧠</div>
              <p className="text-2xl text-white font-bold mb-4">
                AI는 인류가 만든 <span className="text-cyan-400">수억 개</span>의<br/>
                이미지, 텍스트, 음악을 학습했다.
              </p>
            </div>

            {/* Visual representation */}
            <div className="grid grid-cols-5 gap-2 mb-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  className="h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center"
                >
                  <span className="text-xs text-cyan-400/60">
                    {['🎨', '📷', '🎵', '📝', '🎬', '🖼️', '📚', '🎭', '🎪', '🏛️'][i]}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="text-xl text-gray-300 text-center">
              어떤 의미에서 AI는<br/>
              <span className="text-cyan-400 font-bold">"인류 전체의 창작물"</span>을 재해석하는 존재다.
            </p>
          </div>
        </motion.div>

        {/* Key Insight */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-dark-light/50 rounded-xl p-5 border border-gray-700"
          >
            <div className="text-3xl mb-3">👤</div>
            <h3 className="text-lg font-bold text-gray-400 mb-2">개인 작가</h3>
            <p className="text-gray-400 text-sm">
              한 사람의 경험과 감수성
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-5 border border-cyan-500/30"
          >
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-bold text-cyan-400 mb-2">AI</h3>
            <p className="text-gray-300 text-sm">
              <span className="text-cyan-400 font-semibold">집단적 미학의 증류(distillation)</span>가 작동한다
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
