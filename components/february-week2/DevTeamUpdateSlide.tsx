'use client';

import { motion } from 'framer-motion';

export default function DevTeamUpdateSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-cyan-400 text-sm">DEV TEAM</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">개발팀 진행상황</h2>
          <p className="text-gray-400 mb-8">전체회의에서 상세 공유 예정</p>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-light/60 rounded-2xl p-10 border border-cyan-500/30 text-center"
          >
            <div className="w-20 h-20 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              개발팀 진행사항은 전체회의 때 공유하겠습니다
            </h3>

            <p className="text-gray-400 mb-6">
              이번 주 사업계획서 작성에 집중하고 있어<br />
              전체회의에서 개발 진행 현황을 상세히 공유 예정
            </p>

            <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-500/50 rounded-full px-6 py-3">
              <span className="text-cyan-400 font-medium">전체회의 안건으로 이동</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
