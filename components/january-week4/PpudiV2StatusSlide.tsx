'use client';

import { motion } from 'framer-motion';

export default function PpudiV2StatusSlide() {
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
              Development Status
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              뿌덕 Ver 2 + 온라인 겸용
            </h2>
            <p className="text-gray-400 mt-2">금일 중 마무리 예정</p>
          </div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-2 border-emerald-500/50 rounded-2xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🦆</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">뿌덕 Ver 2.0</h3>
                  <p className="text-emerald-400">온라인 겸용 서비스</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-emerald-400">TODAY</div>
                <div className="text-gray-400">마무리 예정</div>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">개발 진행률</span>
                <span className="text-emerald-400 font-bold">95%</span>
              </div>
              <div className="w-full bg-dark rounded-full h-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '95%' }}
                  transition={{ delay: 0.5, duration: 1.5 }}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-4 rounded-full"
                />
              </div>
            </div>

            {/* Status Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-400">핵심 기능</span>
                </div>
                <span className="text-white font-medium">개발 완료</span>
              </div>
              <div className="bg-dark/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-400">온라인 연동</span>
                </div>
                <span className="text-white font-medium">테스트 중</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 bg-dark-light/50 rounded-xl p-4 border border-gray-700"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">
                지원사업 바쁜 와중에도 <span className="text-emerald-400 font-bold">개발 일정 준수</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
