'use client';

import { motion } from 'framer-motion';

export default function SeoulChallengeSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950/30 via-slate-950 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      {/* glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-400/70 mb-2">Section 03</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-3">
              서울혁신챌린지 집중 모드
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-fuchsia-600 mx-auto"></div>
          </div>

          {/* Highlight box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-violet-950/40 to-slate-900/80 rounded-2xl p-8 border border-violet-700/40 mb-6"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center bg-violet-900/40 border border-violet-600/40 rounded-full px-4 py-1 mb-3">
                  <span className="text-violet-300 text-xs font-medium">1차 합격 · 발표평가 진행 중</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-100 mb-3">서울혁신챌린지</h3>
                <p className="text-slate-400 text-base leading-relaxed">
                  Q1 지원한 사업 중 1차 합격 상태로 진행 중인 유일한 트랙. 발표평가 통과 시 1억 원 규모 수주.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-br from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
                  1억
                </div>
                <div className="text-slate-500 text-sm mt-1">지원금 규모</div>
              </div>
            </div>
          </motion.div>

          {/* Action Plan */}
          <div className="grid md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/60"
            >
              <div className="text-violet-400/80 text-2xl mb-2">①</div>
              <h4 className="text-slate-200 font-semibold mb-2">발표 자료 정비</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                1차 통과 자료 기반으로 발표평가용 슬라이드·시연 데모 재정리.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/60"
            >
              <div className="text-violet-400/80 text-2xl mb-2">②</div>
              <h4 className="text-slate-200 font-semibold mb-2">기술 시연 준비</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                개발팀 협력. 실제 동작하는 데모로 차별화 포인트 확보.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/60"
            >
              <div className="text-violet-400/80 text-2xl mb-2">③</div>
              <h4 className="text-slate-200 font-semibold mb-2">리허설 라운드</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                내부 리허설 → 예상 질의응답 정리 → 발표평가 D-Day 대응.
              </p>
            </motion.div>
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 bg-violet-950/20 rounded-xl p-5 border border-violet-900/40 text-center"
          >
            <p className="text-slate-300 text-sm">
              <span className="text-violet-300 font-semibold">집중 포인트:</span>{' '}
              현재 라이브 상태인 유일한 1차 합격 트랙 — 회사 차원의 우선순위 자원 투입.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
