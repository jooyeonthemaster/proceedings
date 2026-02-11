'use client';

import { motion } from 'framer-motion';

export default function TopPrioritySlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-red-500/20 border border-red-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-red-400 text-sm">CRITICAL</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">최우선 긴급 과제</h2>
          <p className="text-gray-400 mb-8">현재 가장 머리 아픈 건</p>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-light/60 rounded-2xl p-8 border-2 border-red-500/40 mb-8"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">청창사 딥테크</h3>
                <p className="text-gray-400">네안데르 | 새로운 아이템으로 작성</p>
              </div>
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl px-4 py-2 text-center">
                <div className="text-2xl font-bold text-red-400">20p</div>
                <div className="text-red-400/60 text-xs">작성 분량</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-dark/50 rounded-xl p-4 border border-gray-700">
                <div className="text-gray-500 text-sm mb-1">상태</div>
                <div className="text-red-400 font-semibold">작성 미완</div>
              </div>
              <div className="bg-dark/50 rounded-xl p-4 border border-gray-700">
                <div className="text-gray-500 text-sm mb-1">법인</div>
                <div className="text-cyan-400 font-semibold">네안데르</div>
              </div>
              <div className="bg-dark/50 rounded-xl p-4 border border-gray-700">
                <div className="text-gray-500 text-sm mb-1">마감</div>
                <div className="text-red-400 font-semibold">2월 13일</div>
              </div>
            </div>

            <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-red-300 text-sm">
                새로운 아이템으로 20페이지 전체를 새로 작성해야 하는 상황.
                현재 골머리를 앓는 중.
              </p>
            </div>
          </motion.div>

          {/* 2/13 이후 전망 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6"
          >
            <h4 className="text-lg font-semibold text-emerald-400 mb-2">2/13 이후 전망</h4>
            <p className="text-gray-300">
              2월 13일까지 전부 제출하면 분위기가 좀 괜찮아질 예정.
              그 이후 남은 지원사업에 집중 가능.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
