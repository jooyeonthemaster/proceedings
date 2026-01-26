'use client';

import { motion } from 'framer-motion';

export default function PpudiV3PlanSlide() {
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
              Next Version Planning
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              뿌덕 Ver 3 기획
            </h2>
            <p className="text-gray-400 mt-2">다양한 프로그램 기획 중</p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 현재 상태 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-white">현재 진행 상태</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-dark/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">디테일한 부분 조정 중</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    프로그램 세부 기획 진행 중
                  </p>
                </div>

                <div className="bg-dark/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-white font-medium">다양한 프로그램 기획</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    여러 방향으로 선보일 계획
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 예정 기능 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white">Ver 3 방향성</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-dark/50 rounded-xl p-3">
                  <span className="text-cyan-400">→</span>
                  <span className="text-gray-300">확장된 프로그램 라인업</span>
                </div>
                <div className="flex items-center gap-3 bg-dark/50 rounded-xl p-3">
                  <span className="text-cyan-400">→</span>
                  <span className="text-gray-300">개선된 사용자 경험</span>
                </div>
                <div className="flex items-center gap-3 bg-dark/50 rounded-xl p-3">
                  <span className="text-cyan-400">→</span>
                  <span className="text-gray-300">새로운 기능 탐구</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-dark-light/50 rounded-2xl p-6 border border-gray-700"
          >
            <h3 className="text-lg font-bold text-white mb-4">개발 로드맵</h3>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-emerald-400 font-bold">V2</span>
                </div>
                <div className="text-emerald-400 text-sm">금일 완료</div>
              </div>
              <div className="flex-1 h-1 bg-gray-700 mx-4 relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '30%' }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="absolute h-1 bg-gradient-to-r from-emerald-500 to-purple-500"
                />
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-400 font-bold">V3</span>
                </div>
                <div className="text-purple-400 text-sm">기획 중</div>
              </div>
              <div className="flex-1 h-1 bg-gray-700 mx-4"></div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-500 font-bold">?</span>
                </div>
                <div className="text-gray-500 text-sm">미래</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
