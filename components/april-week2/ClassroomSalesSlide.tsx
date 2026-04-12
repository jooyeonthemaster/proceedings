'use client';

import { motion } from 'framer-motion';

const phases = [
  {
    id: 1,
    period: '5~6월',
    title: '초기 — 레퍼런스 + 직접 방문',
    badge: 'KICK-OFF',
    color: 'border-emerald-700/50 bg-emerald-950/30',
    pillColor: 'bg-emerald-800/50 text-emerald-200 border-emerald-600/50',
    points: [
      '기존 영어 학원 선생님 레퍼런스 활용',
      '학원 밀집 지역 직접 방문 영업',
      '대치 / 목동 / 중계 / 노량진 / 강남',
      '재영이가 주 3일 이상 학원 방문',
    ],
    metric: '주 3일+',
    metricLabel: '재영 현장 영업',
  },
  {
    id: 2,
    period: '7~9월',
    title: '중기 — 케이스스터디 + 업셀',
    badge: 'SCALE-UP',
    color: 'border-cyan-700/50 bg-cyan-950/30',
    pillColor: 'bg-cyan-800/50 text-cyan-200 border-cyan-600/50',
    points: [
      '첫 고객 케이스스터디 제작',
      '학원 커뮤니티 / 네이버 카페 타겟 콘텐츠',
      '국어 과목 추가',
      '수학 추가로 기존 고객 업셀',
    ],
    metric: '+국어·수학',
    metricLabel: 'ARPU 업셀',
  },
  {
    id: 3,
    period: '10~12월',
    title: '하반기 — FOMO 영업',
    badge: 'FOMO',
    color: 'border-amber-700/50 bg-amber-950/30',
    pillColor: 'bg-amber-800/50 text-amber-200 border-amber-600/50',
    points: [
      '구별 독점 프레이밍으로 FOMO 영업',
      '"이 구에 3자리만 남았습니다"',
      '사탐·과탐 추가',
      '전 과목 풀 ARPU 달성',
    ],
    metric: '+사탐·과탐',
    metricLabel: '월 80~100만',
  },
];

export default function ClassroomSalesSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-emerald-400 text-sm font-medium tracking-wider">SECTION 2-1 · SALES PLAYBOOK</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            학원 AI 영업 전략 — 3단계
          </h2>
          <p className="text-slate-500">KICK-OFF · SCALE-UP · FOMO</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              className={`rounded-2xl p-5 border ${phase.color} flex flex-col`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-emerald-300 font-mono tabular-nums text-xs tracking-wider">
                  PHASE {phase.id}
                </div>
                <span className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full border ${phase.pillColor}`}>
                  {phase.badge}
                </span>
              </div>

              <div className="text-2xl font-bold text-slate-100 font-mono tabular-nums mb-1">
                {phase.period}
              </div>
              <h3 className="text-sm font-semibold text-slate-300 mb-4">{phase.title}</h3>

              <ul className="space-y-2 mb-4 flex-1">
                {phase.points.map((p, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.15 + j * 0.05, duration: 0.4 }}
                    className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"
                  >
                    <span className="text-emerald-500 mt-1 shrink-0 h-1 w-1 rounded-full bg-emerald-400" />
                    <span>{p}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="bg-slate-950/60 rounded-lg px-3 py-2 border border-slate-800/60 mt-auto">
                <div className="text-[9px] text-slate-500 tracking-[0.18em] mb-0.5">
                  {phase.metricLabel}
                </div>
                <div className="text-base font-bold text-slate-100 font-mono tabular-nums">
                  {phase.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom timeline indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="mt-6 flex items-center justify-between text-[10px] text-slate-500 px-4"
        >
          <span>OUT 5월</span>
          <div className="flex-1 mx-4 h-px bg-gradient-to-r from-emerald-700/60 via-cyan-700/60 to-amber-700/60" />
          <span>END 12월</span>
        </motion.div>
      </div>
    </div>
  );
}
