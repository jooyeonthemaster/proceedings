'use client';

import { motion } from 'framer-motion';

export default function DevUpdateSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-blue-900/20 border border-blue-800/30 rounded-full px-4 py-1 mb-4">
            <span className="text-blue-400/70 text-sm">DEV UPDATE</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-200 mb-2">개발 현황</h2>
          <p className="text-slate-500 mb-10">이번 주 뿌덕 시즌3 제작 완료 목표</p>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/60 rounded-2xl p-8 border border-blue-900/30"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400/80">뿌덕 시즌 3</h3>
                  <span className="text-slate-500 text-sm">이번 주 중 제작 완료 예정</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">진행률</span>
                  <span className="text-blue-400/70">~90%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '90%' }}
                    transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
                    className="h-3 rounded-full bg-gradient-to-r from-blue-600/60 to-blue-400/60"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <span className="text-blue-400/60 mr-3">&#10003;</span>
                  <span className="text-slate-400">시즌3 콘텐츠 기획 완료</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-blue-400/60 mr-3">&#10003;</span>
                  <span className="text-slate-400">디자인 & UI 작업 진행 중</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-slate-600 mr-3">&#9711;</span>
                  <span className="text-slate-500">최종 빌드 및 배포</span>
                </div>
              </div>
            </motion.div>

            {/* 작은 위로 메시지 */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1.2 }}
              className="text-slate-600 text-sm text-center mt-6 italic"
            >
              지원사업은 힘들어도, 개발은 멈추지 않는다.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
