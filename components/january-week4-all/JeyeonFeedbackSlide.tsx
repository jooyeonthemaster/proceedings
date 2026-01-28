'use client';

import { motion } from 'framer-motion';

export default function JeyeonFeedbackSlide() {
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
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
              Feedback Response
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              비판에 대한 <span className="text-cyan-400">태도</span>
            </h2>
          </div>

          {/* Before/After Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Feedback Given */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="text-lg font-bold text-red-400">피드백</h3>
              </div>

              <div className="space-y-3">
                <div className="bg-dark/50 rounded-lg p-3">
                  <p className="text-gray-400 text-sm">&ldquo;이거 별로인데...&rdquo;</p>
                </div>
                <div className="bg-dark/50 rounded-lg p-3">
                  <p className="text-gray-400 text-sm">&ldquo;다시 해봐&rdquo;</p>
                </div>
                <div className="text-gray-500 text-sm mt-2">
                  ⏱️ 피드백은 5분이면 끝남
                </div>
              </div>
            </motion.div>

            {/* Response */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">💪</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-400">제연이의 반응</h3>
              </div>

              <div className="space-y-3">
                <div className="bg-dark/50 rounded-lg p-3">
                  <p className="text-gray-300">&ldquo;그냥 별로구나&rdquo;</p>
                </div>
                <div className="bg-dark/50 rounded-lg p-3">
                  <p className="text-emerald-300 font-medium">&ldquo;어떻게 하면 더 잘 해보지?&rdquo;</p>
                </div>
                <div className="text-emerald-400 text-sm mt-2">
                  → 바로 다시 작업 시작
                </div>
              </div>
            </motion.div>
          </div>

          {/* Key Point */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-2 border-purple-500/50 rounded-2xl p-8 text-center"
          >
            <div className="text-4xl mb-4">🎯</div>
            <div className="text-2xl font-bold text-white mb-3">
              상처받지 않고, 기분 상하지 않고
            </div>
            <p className="text-gray-300 text-lg">
              그냥 <span className="text-cyan-400 font-medium">&ldquo;더 잘 해보자&rdquo;</span>라는
              태도로 다시 작업합니다
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
