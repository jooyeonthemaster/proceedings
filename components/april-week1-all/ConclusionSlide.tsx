'use client';

import { motion } from 'framer-motion';

export default function ConclusionSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950/20 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      {/* glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/70 mb-3">Closing</p>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            정리하면, 이렇게 갑니다
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-cyan-600 mx-auto mb-12"></div>

          {/* Three commitments */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/60 rounded-2xl p-6 border border-violet-900/40 text-left"
            >
              <div className="text-violet-400/80 text-xs uppercase tracking-wider mb-2">01 · 지원사업</div>
              <h3 className="text-slate-200 font-bold text-lg mb-2">서울혁신챌린지 집중</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                1차 합격 트랙에 자원 우선 투입. 분기 KPI는 연간 KPI로 전환해 계속 추진.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/60 rounded-2xl p-6 border border-cyan-900/40 text-left"
            >
              <div className="text-cyan-400/80 text-xs uppercase tracking-wider mb-2">02 · 외주 영업</div>
              <h3 className="text-slate-200 font-bold text-lg mb-2">개발팀 영업 참여</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Q2 개발팀 KPI에 외주 영업 참여를 신설. 적극적인 사업 수주에 함께 합류.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/60 rounded-2xl p-6 border border-rose-900/40 text-left"
            >
              <div className="text-rose-400/80 text-xs uppercase tracking-wider mb-2">03 · 뿌덕 S4</div>
              <h3 className="text-slate-200 font-bold text-lg mb-2">기획부터 합류</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                시즌 4는 초기 기획 단계부터 개발팀이 들어가 공동 제작자 포지션으로 진행.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800/60"
          >
            <p className="text-slate-300 text-base leading-relaxed">
              1분기는 매출 KPI 기준으로는 미달이지만, 연간 관점에서는 계속 진행 중입니다.{' '}
              <span className="text-emerald-300/90">지원사업·외주·시즌 4</span> — 세 트랙을 동시에 가동해
              2분기를 출항합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-8 text-slate-500 text-sm"
          >
            2026년 4월 8일 · 전체 회의록
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
