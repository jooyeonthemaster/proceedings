'use client';

import { motion } from 'framer-motion';

const timeline = [
  { date: '2026.04.13 (월)', label: '48시간 전', desc: '임원진 회의 — 대흥 10곳 + 인스타 광고 2안 결정', color: 'border-slate-700/50', accent: 'text-slate-300' },
  { date: '2026.04.15 (수)', label: '오늘 · D-1', desc: '긴급 업데이트 회의 — 랜딩·5대산출물·엔드리스QA', color: 'border-rose-700/60', accent: 'text-rose-300' },
  { date: '2026.04.22 (수)', label: '광고 D-Day', desc: '인스타 광고 집행 시작 — 랜딩 응답 수집 본격화', color: 'border-amber-700/60', accent: 'text-amber-300' },
];

const clarified = [
  { id: '01', title: '데이터 집약 지점 부재', sub: '영업·광고·무료체험이 제각각 → 4/30 의사결정 파편화' },
  { id: '02', title: '5대 산출물 모호', sub: '"시장검증"은 넓다. 니즈·이름·요금제·기능·플로우로 구체화' },
  { id: '03', title: '이벤트성 QA의 한계', sub: '1차/2차/3차 리포트로는 매일 푸시되는 MVP가 무너진다' },
];

export default function MeetingContextSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <div className="inline-flex items-center bg-rose-900/40 border border-rose-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-rose-300 text-sm font-medium tracking-wider">MEETING CONTEXT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">왜 이 회의를 여는가</h2>
          <p className="text-slate-500">4/13 큰 프레임은 유효하다. 그러나 48시간 동안 3가지가 선명해졌다.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {timeline.map((t, i) => (
            <motion.div key={t.date} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }} className={`bg-slate-900/60 rounded-xl p-5 border ${t.color}`}>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{t.label}</div>
              <div className={`text-lg font-bold ${t.accent} font-mono tabular-nums mb-2`}>{t.date}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{t.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="bg-slate-900/40 rounded-2xl p-5 border border-slate-800/60">
          <div className="flex items-baseline justify-between mb-4">
            <div className="text-sm uppercase tracking-widest text-rose-400/80">48시간 내 선명해진 3가지</div>
            <div className="text-xs text-slate-600">문제 정의 → 실행안</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {clarified.map((a, i) => (
              <motion.div key={a.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }} className="flex items-start gap-3 bg-slate-950/50 rounded-lg px-4 py-3 border border-rose-900/30">
                <div className="text-sm font-mono text-rose-400/70 mt-0.5 shrink-0">{a.id}</div>
                <div className="min-w-0">
                  <div className="text-sm text-slate-200 font-semibold leading-tight">{a.title}</div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-snug">{a.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
