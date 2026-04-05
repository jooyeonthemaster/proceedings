'use client';

import { motion } from 'framer-motion';

export default function GrantKPISlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center bg-red-900/40 border border-red-700/40 rounded-full px-5 py-1.5 mb-6">
            <span className="text-red-400 text-sm font-medium tracking-wider">Q1 KPI REPORT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">
            지원사업팀 1분기 KPI 성과
          </h2>
        </motion.div>

        {/* Main Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="grid grid-cols-3 gap-5 mb-8"
        >
          <div className="bg-slate-900/60 rounded-2xl p-6 border border-slate-700/40 text-center">
            <p className="text-slate-500 text-sm mb-2">Target</p>
            <p className="text-3xl font-bold text-slate-300">2억원</p>
          </div>
          <div className="bg-slate-900/60 rounded-2xl p-6 border border-red-900/40 text-center">
            <p className="text-slate-500 text-sm mb-2">Achieved</p>
            <p className="text-3xl font-bold text-red-400">1,000만원</p>
            <p className="text-xs text-slate-600 mt-1">캠타 1건</p>
          </div>
          <div className="bg-slate-900/60 rounded-2xl p-6 border border-red-900/40 text-center">
            <p className="text-slate-500 text-sm mb-2">Achievement</p>
            <p className="text-3xl font-bold text-red-400">5%</p>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="bg-slate-900/60 rounded-2xl p-6 border border-red-900/30 mb-8"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-slate-400">달성률</span>
            <span className="text-sm font-mono text-red-400">1,000만 / 20,000만</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '5%' }}
              transition={{ delay: 0.9, duration: 1.2, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-red-700 to-red-500 rounded-full relative"
            >
              <div className="absolute inset-0 bg-red-400/20 animate-pulse rounded-full" />
            </motion.div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-slate-600">0%</span>
            <span className="text-xs text-slate-600">100%</span>
          </div>
        </motion.div>

        {/* Remaining Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="bg-slate-900/60 rounded-2xl p-6 border border-amber-800/40 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <h3 className="text-lg font-semibold text-slate-200">남은 기회</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-900/50 text-amber-400 border border-amber-700/50">
              불행 중 다행
            </span>
          </div>

          <div className="bg-slate-800/40 rounded-xl p-4 border border-amber-900/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-amber-300/80">서울혁신챌린지 R&D</p>
                <p className="text-xs text-slate-500 mt-1">1차 합격, 발표 대기 중</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-amber-400">1억원</p>
                <p className="text-xs text-slate-500">4월 중 발표 예정</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 에로사항 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="bg-slate-900/40 rounded-xl p-4 border border-slate-700/30 mb-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-slate-500 text-sm font-bold">애로사항</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            지원사업을 쓸 때마다 느끼는 문제 &mdash; 지원사업이 결국 하나의 수익 파이프라인인데, 사업계획서에서 타임라인, 스케일업, 기술개발을 쓰면서 기술적으로 다 가능한 것들이 <span className="text-slate-300">사업계획서에서만 그치고 있음</span>. 큰 그림을 그리는 사람과 실무를 하는 사람의 갭이 너무 크다.
          </p>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-center space-y-3"
        >
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto mb-6" />
          <p className="text-lg text-slate-300 font-medium">
            &ldquo;1분기에 달성 못했지만, 끝까지 2억원 물어오겠습니다&rdquo;
          </p>
          <p className="text-sm text-slate-500">
            2026년 전체 지원금 목표 2억원 그대로 유지
          </p>
        </motion.div>
      </div>
    </div>
  );
}
