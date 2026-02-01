'use client';

import { motion } from 'framer-motion';

export default function BizPlanTitleSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-emerald-900/20 to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-6 py-2 mb-8">
            <span className="text-emerald-400 font-medium">PART 2</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            사업기획팀 KPI
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>

          <p className="text-2xl text-gray-300 mb-12">
            2026년 1분기 사업계획서 전략
          </p>

          {/* 핵심 수치 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl p-8 border border-emerald-500/30 max-w-2xl mx-auto"
          >
            <div className="text-6xl font-bold text-emerald-400 mb-4">2억원</div>
            <p className="text-xl text-gray-300">사업계획서 합격 목표</p>
            <div className="mt-6 flex justify-center space-x-4">
              <span className="bg-dark/50 px-4 py-2 rounded-lg text-gray-400">4개 법인</span>
              <span className="bg-dark/50 px-4 py-2 rounded-lg text-gray-400">동시 도전</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
