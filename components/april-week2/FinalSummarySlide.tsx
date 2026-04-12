'use client';

import { motion } from 'framer-motion';

const missions = [
  {
    initial: '선·정',
    name: '선화 + 정연',
    role: '마케팅',
    border: 'border-sky-700/50',
    badge: 'bg-sky-900/40 text-sky-300',
    title: '악센트 아이디/온라인 매출 유지·성장',
    sub: '이게 5~7월 생존의 기반',
  },
  {
    initial: '주희',
    name: '김주희',
    role: '영업',
    border: 'border-violet-700/50',
    badge: 'bg-violet-900/40 text-violet-300',
    title: '포토부스 영업으로 단기 현금 확보',
    sub: '첫 건 수주가 핵심',
  },
  {
    initial: '재영',
    name: '유재영',
    role: 'CEO/영업',
    border: 'border-amber-700/50',
    badge: 'bg-amber-900/40 text-amber-300',
    title: '학원 밀집 지역 직접 방문 영업',
    sub: '5~6월 10개 학원 확보가 회사 생존의 핵심',
  },
  {
    initial: '주·제',
    name: '김주연 + 김제연',
    role: '개발',
    border: 'border-emerald-700/50',
    badge: 'bg-emerald-900/40 text-emerald-300',
    title: '학원 AI MVP 완성 + 첫 고객 온보딩',
    sub: '5월 출시 필수',
  },
  {
    initial: '동주',
    name: '이동주',
    role: '재무/운영',
    border: 'border-rose-700/50',
    badge: 'bg-rose-900/40 text-rose-300',
    title: '재무 관리 + 포토부스 현장 지원 + 원가 분석',
    sub: '비상 플랜 항목별 분석',
  },
];

export default function FinalSummarySlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(49,46,129,0.28)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,27,75,0.4)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06)_0%,transparent_70%)]" />

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center bg-indigo-900/40 border border-indigo-700/50 rounded-full px-5 py-1.5 mb-4">
            <span className="text-indigo-300 text-xs font-medium tracking-[0.2em]">FINAL SUMMARY · 살아남기 위한 3개월</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
            최종 요약 — 살아남기 위한 3개월 계획
          </h2>
          <p className="text-slate-500 text-sm">한 줄 결론 · 5인 미션 · 화요일 회의 핵심 메시지 · 다음 단계</p>
        </motion.div>

        {/* 한 줄 결론 */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-950/70 via-slate-900/70 to-indigo-950/70 border border-indigo-700/50 rounded-2xl p-5 mb-4 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
          <div className="flex items-start gap-3">
            <div className="text-indigo-300 text-[10px] font-bold tracking-[0.2em] mt-1 shrink-0">CONCLUSION</div>
            <div className="text-slate-100 text-[15px] md:text-base leading-relaxed font-semibold">
              <span className="text-indigo-300">5~7월은 생존 모드</span>(각자 맡은 거 제대로),{' '}
              <span className="text-indigo-300">7월 말 데이터로 판단</span>(학원 AI <span className="font-mono text-emerald-300">MRR 750만</span> 기준),{' '}
              <span className="text-indigo-300">8월부터 학원 AI 올인 또는 밸런스 유지</span>
            </div>
          </div>
        </motion.div>

        {/* 5~7월 미션 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mb-4"
        >
          <div className="flex items-center gap-2 mb-2.5">
            <div className="text-indigo-300 text-[10px] font-bold tracking-[0.2em]">5~7월 각자의 미션</div>
            <div className="flex-1 h-px bg-indigo-900/50" />
            <div className="text-slate-500 text-[10px] font-mono">5 PEOPLE / 5 ROLES</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
            {missions.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                className={`bg-slate-900/70 rounded-xl p-3 border ${m.border}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-9 h-9 rounded-lg ${m.badge} flex items-center justify-center font-bold text-[10px] border border-slate-800/60`}>
                    {m.initial}
                  </div>
                  <div className="min-w-0">
                    <div className="text-slate-100 text-[12px] font-bold truncate">{m.name}</div>
                    <div className="text-slate-500 text-[10px]">{m.role}</div>
                  </div>
                </div>
                <div className="text-slate-200 text-[11.5px] font-semibold leading-snug mb-1">
                  {m.title}
                </div>
                <div className="text-slate-500 text-[10px] leading-snug italic">
                  {m.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 화요일 회의 핵심 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="bg-rose-950/30 border border-rose-800/50 rounded-2xl p-4 mb-4 relative"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-5 bg-rose-400 rounded-full" />
            <div className="text-rose-300 text-[10px] font-bold tracking-[0.2em]">화요일 회의 핵심 메시지</div>
          </div>
          <p className="text-slate-200 text-[12px] leading-relaxed">
            포토부스 제안서 잘 만들어줬고, 주희가 이걸 가지고 영업 뛰는 건 OK. 그런데{' '}
            <span className="text-rose-300 font-bold">개발팀 리소스는 학원 AI가 절대적 1순위</span>.
            포토부스 추가 기능 개발은 기존 상품으로 먼저 영업하면서, 학원 AI가 안정화된 이후에 진행.
            마케팅팀은 악센트에 집중하되 <span className="text-rose-200">학원 AI 브랜딩에 주 1회 지원</span>.
            <span className="text-rose-200"> 외주개발 마케팅에는 별도 리소스 투입 없음</span>.
          </p>
        </motion.div>

        {/* 다음 단계 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900/80 via-indigo-950/60 to-slate-900/80 border border-indigo-700/50 rounded-2xl p-3.5"
        >
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="text-red-400 font-mono font-bold text-sm tracking-wider">D-2</div>
              <div className="w-6 h-px bg-indigo-700/50" />
            </div>
            <div className="flex items-center gap-2 bg-rose-900/30 border border-rose-700/50 rounded-lg px-3 py-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
              <span className="text-rose-200 text-[12px] font-semibold">4월 14일(화) 전략회의</span>
            </div>
            <div className="text-indigo-400 font-bold">→</div>
            <div className="bg-amber-900/30 border border-amber-700/50 rounded-lg px-3 py-1.5">
              <span className="text-amber-200 text-[12px] font-semibold">의사결정</span>
            </div>
            <div className="text-indigo-400 font-bold">→</div>
            <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg px-3 py-1.5">
              <span className="text-emerald-200 text-[12px] font-semibold">실행</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-3 text-center text-slate-600 text-[10px] tracking-[0.2em]"
        >
          NEANDER · 2026 Q2 STRATEGY · 살아남기 위한 3개월 — 그리고 그 이후
        </motion.div>
      </div>
    </div>
  );
}
