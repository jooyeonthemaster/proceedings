'use client';

import { motion } from 'framer-motion';

export default function BaseSkillQuestionSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
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
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500 bg-opacity-20 text-amber-400 text-sm mb-4">
            현실적 질문
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-amber-400">Q.</span> 근데 타란티노가 되려면<br/>
            <span className="text-orange-400">엄청난 베이스 실력</span>이 필요한 거 아닌가?
          </h2>
        </motion.div>

        {/* The Point */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="bg-dark-light/50 rounded-2xl p-6 border border-gray-700">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎬</div>
              <div>
                <p className="text-xl text-white font-semibold mb-4">정곡을 찌르는 질문이었다.</p>
                <div className="space-y-3 text-gray-300">
                  <p>
                    타란티노가 "쿨하게" 영화를 만들 수 있는 이유는,
                  </p>
                  <p>
                    그 밑바탕에 영화에 대한 <span className="text-amber-400 font-bold">엄청난 지식과 실력</span>이 있기 때문이다.
                  </p>
                  <p className="text-gray-400">
                    수천 편의 영화를 봤고, 영화 문법을 완벽히 이해하고, 그 위에서 자유롭게 논다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Real Question */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl p-8 border border-amber-500/30">
            <div className="text-center">
              <p className="text-xl text-gray-300 mb-4">
                우리가 "걍 재밌어서"라고 말하려면,
              </p>
              <p className="text-2xl text-white font-bold mb-4">
                그만한 베이스가 있어야 하는 거 아닌가?
              </p>
              <p className="text-lg text-orange-400">
                예술적 실력도 없이 예술가인 척하려는 건가?
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-dark-light/30 rounded-xl p-6 border border-gray-700 text-center">
            <p className="text-gray-400 mb-2">이 질문의 본질:</p>
            <p className="text-2xl text-white font-bold">
              <span className="text-red-400">"예술가가 아닌데 예술가로 브랜딩하고 싶다"</span><br/>
              가 우리의 솔직한 상황 아닌가?
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
