'use client';

import { motion } from 'framer-motion';

const dates = [
  { date: '4/21 (화)', who: '주연', items: ['CTO 푸시 → 동주 QA 10건 검증', '발표자료 초안 (이탈리아 야간 작업)'], color: 'border-cyan-700/50', accent: 'text-cyan-300' },
  { date: '4/22 (수)', who: '선화', items: ['인스타 광고 ON · 2안 병렬 5트랙', '추출 기능 90% 도달 확인'], color: 'border-fuchsia-700/50', accent: 'text-fuchsia-300' },
  { date: '4/25 (금)', who: '선화 + 동주', items: ['서비스명 A/B 중간점검 (CTR)', '3일차 광고 데이터 첫 점검'], color: 'border-amber-700/50', accent: 'text-amber-300' },
  { date: '4/27 (월)', who: '주연', items: ['이탈리아 → 한국 도착 (야간)', '발표자료 최종 점검'], color: 'border-rose-700/60', accent: 'text-rose-300' },
  { date: '4/28 (화)', who: '주연 (단독)', items: ['한국언론진흥재단 발표 평가', '결과 즉시 공유'], color: 'border-emerald-700/60', accent: 'text-emerald-300' },
  { date: '4/30 (목)', who: '전원', items: ['5대 산출물 데이터 확정', '4월 회고 + 5월 강의 시작 준비'], color: 'border-violet-700/50', accent: 'text-violet-300' },
];

export default function NextActionsSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-violet-900/40 border border-violet-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-violet-300 text-sm font-medium tracking-wider">NEXT 10 DAYS · 4/21 → 4/30</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">다음 10일 캘린더</h2>
          <p className="text-slate-500">4/22 광고 ON · 4/28 발표 · 4/30 데이터 확정 — 모든 트랙 4월 마감.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {dates.map((d, i) => (
            <motion.div key={d.date} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }} className={`bg-slate-900/60 rounded-xl p-4 border ${d.color}`}>
              <div className="flex items-baseline justify-between mb-2 border-b border-slate-800/60 pb-2">
                <div className={`text-base font-bold font-mono tabular-nums ${d.accent}`}>{d.date}</div>
                <div className="text-[11px] text-slate-500">담당: <span className={d.accent}>{d.who}</span></div>
              </div>
              <ul className="space-y-1">
                {d.items.map((item, j) => (
                  <li key={j} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                    <span className={`${d.accent} mt-0.5`}>•</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
