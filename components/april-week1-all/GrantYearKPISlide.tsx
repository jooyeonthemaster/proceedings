'use client';

import { motion } from 'framer-motion';

export default function GrantYearKPISlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-amber-950/10 to-gray-950 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400/70 mb-2">Section 04</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-3">
              지원사업 KPI · 분기 → 연간 전환
            </h2>
            <p className="text-slate-400 text-base">
              1분기 KPI에서 끝내지 않고, 연간 KPI로 이어서 추진합니다
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mt-3"></div>
          </div>

          {/* Transition diagram */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {/* Q1 - Failed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/60 rounded-2xl p-6 border border-red-900/40"
            >
              <div className="text-xs text-red-400/80 uppercase tracking-wider mb-2">Q1 · 마감</div>
              <div className="text-2xl font-bold text-slate-200 mb-3">분기 KPI</div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-red-400/90">5%</span>
                <span className="text-slate-500 text-sm">달성률</span>
              </div>
              <p className="text-slate-500 text-sm">목표 2억 / 실적 1,000만</p>
            </motion.div>

            {/* Arrow / Now */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-amber-950/40 to-slate-900/80 rounded-2xl p-6 border border-amber-700/40 flex flex-col items-center justify-center"
            >
              <div className="text-xs text-amber-400/80 uppercase tracking-wider mb-2">현재</div>
              <div className="text-3xl mb-2">→</div>
              <div className="text-slate-200 font-semibold text-center">관점 전환</div>
              <p className="text-slate-500 text-xs text-center mt-2">분기 손익 → 연간 누적</p>
            </motion.div>

            {/* Year - Active */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-slate-900/60 rounded-2xl p-6 border border-emerald-900/40"
            >
              <div className="text-xs text-emerald-400/80 uppercase tracking-wider mb-2">2026 · 진행</div>
              <div className="text-2xl font-bold text-slate-200 mb-3">연간 KPI</div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-emerald-300/90">계속</span>
              </div>
              <p className="text-slate-500 text-sm">하반기 공고 지속 대응</p>
            </motion.div>
          </div>

          {/* Action commitments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800/60"
          >
            <h3 className="text-slate-200 font-semibold mb-4 flex items-center">
              <span className="text-amber-400/80 mr-2">▸</span>
              연간 KPI 운영 방향
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-amber-400/70 mr-3 mt-0.5">01</span>
                <div>
                  <div className="text-slate-300 text-sm font-medium">서울혁신챌린지 최우선 집중</div>
                  <div className="text-slate-500 text-xs mt-1">발표평가 통과 시 1억 즉시 확보</div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-amber-400/70 mr-3 mt-0.5">02</span>
                <div>
                  <div className="text-slate-300 text-sm font-medium">하반기 공고 모니터링 상시화</div>
                  <div className="text-slate-500 text-xs mt-1">중기부·서울시·문체부 라인업 추적</div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-amber-400/70 mr-3 mt-0.5">03</span>
                <div>
                  <div className="text-slate-300 text-sm font-medium">제안서 자산화</div>
                  <div className="text-slate-500 text-xs mt-1">Q1 작성물 재활용 가능한 모듈로 정리</div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-amber-400/70 mr-3 mt-0.5">04</span>
                <div>
                  <div className="text-slate-300 text-sm font-medium">추가 지원금 확보 노력 지속</div>
                  <div className="text-slate-500 text-xs mt-1">분기 마감 없이 1년 단위로 누적 관리</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
