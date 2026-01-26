'use client';

import { motion } from 'framer-motion';

export default function JeyeonLearningSlide() {
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
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Lessons to Learn
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              우리도 배울 필요가 있다
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 오리 모델링 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🦆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">오리 모델링</h3>
                  <p className="text-amber-400 text-sm">자발적 학습</p>
                </div>
              </div>
              <p className="text-gray-400">
                최근 오리 모델링을 하는 것처럼 스스로 새로운 기술을 탐구하고 배우려는 모습
              </p>
            </motion.div>

            {/* 스스로 일 찾기 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">스스로 일 찾기</h3>
                  <p className="text-cyan-400 text-sm">주도적 자세</p>
                </div>
              </div>
              <p className="text-gray-400">
                시키지 않아도 스스로 할 일을 찾아서 하는 모습. 이런 자세가 중요함.
              </p>
            </motion.div>
          </div>

          {/* Key Insight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 border-2 border-purple-500/50 rounded-2xl p-8 text-center"
          >
            <div className="text-5xl mb-4">💡</div>
            <div className="text-3xl font-bold text-white mb-4">
              핵심 인사이트
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              &ldquo;스크롤을 아래로 내려서 스크롤 인터랙티브 화면 전환을 한다든지,
              <br />
              그런 것들을 전부 <span className="text-purple-400 font-bold">레퍼런스를 찾아서 계속 시도</span>하는 모습&rdquo;
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-emerald-500/20 px-6 py-3 rounded-full border border-emerald-500/30">
              <span className="text-emerald-400 font-bold">
                이런 태도와 자세, 우리 모두 본받아야 함
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
