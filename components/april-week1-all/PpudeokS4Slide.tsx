'use client';

import { motion } from 'framer-motion';

export default function PpudeokS4Slide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-rose-950/20 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-rose-400/70 mb-2">Section 06</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-3">
              뿌덕 시즌 4 착수
            </h2>
            <p className="text-slate-400 text-base">
              초기 기획 단계부터 적극 개입 — 이번엔 다르게 갑니다
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-rose-500 to-pink-600 mx-auto mt-3"></div>
          </div>

          {/* Hero card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-rose-950/30 to-slate-900/80 rounded-2xl p-7 border border-rose-700/40 mb-6"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center bg-rose-900/40 border border-rose-600/40 rounded-full px-4 py-1 mb-3">
                  <span className="text-rose-300 text-xs font-medium">2분기 개발팀 KPI</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-100 mb-3">뿌덕 시즌 4</h3>
                <p className="text-slate-400 text-base leading-relaxed">
                  시즌 3까지의 누적 데이터·운영 경험을 토대로, 시즌 4는 초기 기획 단계부터 개발팀이 깊게 들어갑니다.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-br from-rose-300 to-pink-400 bg-clip-text text-transparent">
                  S4
                </div>
                <div className="text-slate-500 text-sm mt-1">Season 4</div>
              </div>
            </div>
          </motion.div>

          {/* Difference from S1~S3 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800/60"
            >
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">As-Is · 시즌 1~3</div>
              <h4 className="text-slate-300 font-semibold mb-3">개발 단계 진입</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li className="flex items-start">
                  <span className="text-slate-600 mr-2">·</span>
                  <span>기획안 확정 후 개발팀 합류</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-2">·</span>
                  <span>일정·범위 후순위 조정 어려움</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-2">·</span>
                  <span>기술 제약을 기획에 반영하기 늦음</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-slate-900/60 rounded-2xl p-6 border border-rose-900/40"
            >
              <div className="text-xs text-rose-400/80 uppercase tracking-wider mb-2">To-Be · 시즌 4</div>
              <h4 className="text-slate-200 font-semibold mb-3">기획 단계 진입</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start">
                  <span className="text-rose-400/70 mr-2">▸</span>
                  <span>킥오프부터 개발팀 합류</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-400/70 mr-2">▸</span>
                  <span>구현 가능성·일정 사전 정렬</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-400/70 mr-2">▸</span>
                  <span>기술 카드 기반 기획 옵션 제시</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-400/70 mr-2">▸</span>
                  <span>시즌 3 운영 데이터 기반 우선순위</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-rose-950/20 rounded-xl p-5 border border-rose-900/40 text-center"
          >
            <p className="text-slate-300 text-sm">
              <span className="text-rose-300 font-semibold">목표:</span>{' '}
              개발팀이 ‘구현자’가 아닌 ‘공동 제작자’로 시즌 4에 참여합니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
