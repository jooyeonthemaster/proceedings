'use client';

import { motion } from 'framer-motion';

const milestones = [
  {
    month: '1월',
    week: '1주',
    title: 'AI 예술 브랜딩 전략 수립',
    desc: '개발팀 진행상황 공유',
    color: 'emerald',
    side: 'left' as const,
  },
  {
    month: '1월',
    week: '3주',
    title: '전략 방향 전환',
    desc: '단기 과열 → 장기 생존 모드',
    color: 'emerald',
    side: 'right' as const,
  },
  {
    month: '1월',
    week: '4주',
    title: '사업계획서 대량 제출 시작',
    desc: '뿌덕 V2-V3 로드맵 확정',
    color: 'emerald',
    side: 'left' as const,
  },
  {
    month: '2월',
    week: '1주',
    title: 'Q1 KPI 설정',
    desc: '악센트 아이디 상품 전략',
    color: 'amber',
    side: 'right' as const,
  },
  {
    month: '2월',
    week: '2주',
    title: '사업계획서 제출 전쟁',
    desc: '2/13 마감 집중 대응',
    color: 'amber',
    side: 'left' as const,
  },
  {
    month: '2월',
    week: '4주',
    title: 'AI 커플 서비스',
    desc: 'B2B 파이프라인 구축',
    color: 'amber',
    side: 'right' as const,
  },
  {
    month: '3월',
    week: '1주',
    title: 'R&D 2억 합격!',
    desc: '지원사업 5건 진행 중',
    color: 'sky',
    side: 'left' as const,
  },
  {
    month: '3월',
    week: '2주',
    title: 'R&D 발표평가',
    desc: '지원사업 총정리',
    color: 'orange',
    side: 'right' as const,
  },
  {
    month: '3월',
    week: '4주',
    title: '개발팀 풀가동 선언',
    desc: 'AI 포토부스 영업 시작',
    color: 'orange',
    side: 'left' as const,
  },
  {
    month: '3월',
    week: '4주',
    title: '지원사업 All Fail',
    desc: '자립 각오 선언',
    color: 'red',
    side: 'right' as const,
  },
];

const colorMap: Record<string, { dot: string; border: string; badge: string; text: string }> = {
  emerald: {
    dot: 'bg-emerald-500',
    border: 'border-emerald-800/40',
    badge: 'bg-emerald-900/50 text-emerald-400',
    text: 'text-emerald-400/80',
  },
  amber: {
    dot: 'bg-amber-500',
    border: 'border-amber-800/40',
    badge: 'bg-amber-900/50 text-amber-400',
    text: 'text-amber-400/80',
  },
  sky: {
    dot: 'bg-sky-500',
    border: 'border-sky-800/40',
    badge: 'bg-sky-900/50 text-sky-400',
    text: 'text-sky-400/80',
  },
  orange: {
    dot: 'bg-orange-500',
    border: 'border-orange-800/40',
    badge: 'bg-orange-900/50 text-orange-400',
    text: 'text-orange-400/80',
  },
  red: {
    dot: 'bg-red-500',
    border: 'border-red-800/40',
    badge: 'bg-red-900/50 text-red-400',
    text: 'text-red-400/80',
  },
};

export default function TimelineSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-slate-800/60 border border-slate-600/50 rounded-full px-5 py-1.5 mb-6">
            <span className="text-slate-400 text-sm font-medium">Q1 2026 TIMELINE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">
            Q1 2026 타임라인
          </h2>
          <p className="text-slate-500">1월부터 3월까지 주요 회의 요약</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-800/50 via-amber-800/50 to-red-800/50 transform -translate-x-1/2" />

          <div className="space-y-6">
            {milestones.map((item, i) => {
              const colors = colorMap[item.color];
              const isLeft = item.side === 'left';

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                  className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Dot on center line */}
                  <div
                    className={`absolute left-1/2 w-3 h-3 rounded-full ${colors.dot} transform -translate-x-1/2 z-10 ring-2 ring-slate-900`}
                  />

                  {/* Card */}
                  <div
                    className={`w-[44%] bg-slate-900/60 rounded-xl p-4 border ${colors.border} ${
                      isLeft ? 'mr-auto' : 'ml-auto'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded-full ${colors.badge}`}
                      >
                        {item.month} {item.week}
                      </span>
                    </div>
                    <h3 className={`text-sm font-semibold ${colors.text}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="text-center mt-10"
        >
          <p className="text-xs text-slate-600 italic">
            희망에서 현실로 &mdash; Q1의 여정
          </p>
        </motion.div>
      </div>
    </div>
  );
}
