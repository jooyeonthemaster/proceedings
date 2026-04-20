'use client';

import { motion } from 'framer-motion';

const roles = [
  { who: '아빠', role: '대표자(아이템 오너)', detail: '지원 아이템의 실질적 제안자. 본인이 직접 하고 싶어한 서비스. 발표 명의 가능.', color: 'border-emerald-700/40', accent: 'text-emerald-300', bg: 'from-emerald-600 to-teal-800' },
  { who: '네안데르', role: '개발 파트너', detail: '주연(CTO)이 실제 개발 수행. 지원금 수령 + 개발 인력 인건비로 정산.', color: 'border-cyan-700/40', accent: 'text-cyan-300', bg: 'from-cyan-600 to-indigo-800' },
];

const winwin = [
  { k: '아빠 입장', v: '본인이 평소 하고 싶었던 데이터 분석 + 비리 탐지 솔루션을 실제로 가질 수 있다.' },
  { k: '네안데르 입장', v: '개발 인건비 정당하게 정산 + 차기 외주 영업 레퍼런스 확보 + 미디어재단 트랙 진입.' },
  { k: '리스크', v: '아빠 명의로 진행 시 사업자 등록·세무·정산 흐름 명확히 분리해야 함 (혼선 방지).' },
];

export default function GrantTeamStrategySlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-emerald-300 text-sm font-medium tracking-wider">STRUCTURE · 상부상조 윈윈 모델</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">아빠 명의 · 네안데르 개발 — 윈윈 구조</h2>
          <p className="text-slate-500">아빠가 진짜 하고 싶어하는 서비스 + 네안데르 개발 역량 = 한 번의 지원금으로 둘 다.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          {roles.map((r, i) => (
            <motion.div key={r.who} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className={`bg-slate-900/60 rounded-2xl p-5 border ${r.color}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${r.bg} flex items-center justify-center text-lg font-bold text-white shrink-0`}>{r.who.slice(0, 2)}</div>
                <div>
                  <div className={`text-xs uppercase tracking-widest ${r.accent} font-semibold`}>{r.role}</div>
                  <div className="text-lg font-bold text-slate-100">{r.who}</div>
                </div>
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">{r.detail}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-slate-900/40 rounded-2xl p-4 border border-emerald-900/30">
          <div className="text-xs uppercase tracking-widest text-emerald-400/80 mb-3 font-semibold">상부상조 분해 · 3관점</div>
          <div className="space-y-2">
            {winwin.map((w, i) => (
              <motion.div key={w.k} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.08 }} className="bg-slate-950/40 rounded-lg px-4 py-2.5 border border-emerald-900/30 flex items-start gap-4">
                <div className="text-xs text-emerald-300 font-semibold w-24 shrink-0 mt-0.5">{w.k}</div>
                <div className="text-xs text-slate-300 leading-relaxed flex-1">{w.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
