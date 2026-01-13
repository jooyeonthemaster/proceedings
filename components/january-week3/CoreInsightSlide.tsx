'use client';

import { motion } from 'framer-motion';

export default function CoreInsightSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              Key Insight
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              핵심 깨달음
            </h2>
          </div>

          {/* Main Insight Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-3xl p-8 mb-8"
          >
            <div className="text-center">
              <div className="inline-block p-4 bg-amber-500/20 rounded-full mb-6">
                <span className="text-5xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                제1 급선무
              </h3>
              <p className="text-3xl text-amber-400 font-bold">
                적자 구조 개편
              </p>
              <p className="text-gray-400 mt-4">
                새로운 시도를 하기 전에, 먼저 현재의 출혈을 멈춰야 합니다.
              </p>
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-light/50 border border-gray-700 rounded-2xl p-6 mb-6"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl text-amber-400/50">"</div>
              <div>
                <p className="text-xl text-white italic">
                  사람들은 <span className="text-red-400">1년</span> 안에 할 수 있는 일은{' '}
                  <span className="text-red-400 font-bold">과대평가</span>하고,
                </p>
                <p className="text-xl text-white italic mt-2">
                  <span className="text-emerald-400">10년</span> 안에 할 수 있는 일은{' '}
                  <span className="text-emerald-400 font-bold">과소평가</span>한다.
                </p>
                <p className="text-gray-500 text-sm mt-4 text-right">
                  — 빌 게이츠
                </p>
              </div>
              <div className="text-4xl text-amber-400/50">"</div>
            </div>
          </motion.div>

          {/* Application */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-lg">❌</span>
                </div>
                <span className="text-red-400 font-medium">피해야 할 것</span>
              </div>
              <p className="text-gray-400 text-sm">
                5개월 안에 모든 것을 이루겠다는 과대평가된 기대
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-lg">✓</span>
                </div>
                <span className="text-emerald-400 font-medium">해야 할 것</span>
              </div>
              <p className="text-gray-400 text-sm">
                지속 가능한 구조를 만들어 장기적으로 성장할 기반 마련
              </p>
            </div>
          </motion.div>

          {/* Transition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-500">
              그래서 우리의 새로운 방향은...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
