'use client';

import { motion } from 'framer-motion';

const showcase = [
  { f: 'ERP', icon: '📋', desc: '원스톱 학원 관리' },
  { f: 'AI 지문분석', icon: '🧠', desc: '단어·문법 자동 추출' },
  { f: 'AI 문제생성', icon: '⚡', desc: '20초 20문항' },
  { f: '자동 조판', icon: '📄', desc: 'A4 인쇄 즉시' },
  { f: '학습 리포트', icon: '📊', desc: '학생·학부모 자동 발송' },
];

export default function Content2PreorderSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-amber-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-rose-900/40 border border-rose-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-rose-300 text-sm font-medium tracking-wider">CONTENT #2 · PREORDER 50만</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">콘텐츠 2안 · 사전예약형 (50만원)</h2>
          <p className="text-slate-500 text-sm">"우리 구에 딱 3자리 · 독점 이용권 사전 예약"</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="bg-slate-900/60 rounded-2xl p-5 border border-rose-800/50">
            <div className="text-xs uppercase tracking-widest text-rose-400 mb-2">FOMO 프레이밍</div>
            <div className="text-xl font-bold text-slate-100 mb-3">"우리 구 3자리"</div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• 지역당 정원 3곳 · 독점 운영권</li>
              <li>• 사전예약 50만 → 5월 정식 월 50만</li>
              <li>• 선착순 10구역 확정 시 시장 선점 완료</li>
              <li>• "이 지역은 이미 마감" 심리 자극</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="bg-slate-900/60 rounded-2xl p-5 border border-amber-800/50">
            <div className="text-xs uppercase tracking-widest text-amber-400 mb-3">기능 5종 쇼케이스</div>
            <div className="grid grid-cols-5 gap-2">
              {showcase.map((s, i) => (
                <motion.div key={s.f} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.08 }} className="bg-slate-950/50 rounded-lg p-2 border border-amber-900/40 text-center">
                  <div className="text-xl mb-0.5">{s.icon}</div>
                  <div className="text-[10px] text-slate-200 font-semibold">{s.f}</div>
                  <div className="text-[9px] text-slate-500 mt-0.5 leading-tight">{s.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="bg-slate-900/60 rounded-xl p-3 border border-rose-900/40"><div className="text-[10px] uppercase tracking-widest text-rose-400 mb-1">CTA 링크</div><div className="text-xs text-slate-200 font-mono">/reserve</div></div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-rose-900/40"><div className="text-[10px] uppercase tracking-widest text-rose-400 mb-1">타겟팅</div><div className="text-xs text-slate-200">A급 학원 · 대흥 우선</div></div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-rose-900/40"><div className="text-[10px] uppercase tracking-widest text-rose-400 mb-1">일 예산</div><div className="text-xs text-slate-200 font-mono">₩25,000 × 8일</div></div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-rose-900/40"><div className="text-[10px] uppercase tracking-widest text-rose-400 mb-1">KPI</div><div className="text-xs text-slate-200">CTR ≥ 1.5% · 예약 ≥ 10건</div></div>
        </div>
      </div>
    </div>
  );
}
