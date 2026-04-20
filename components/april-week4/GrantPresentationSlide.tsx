'use client';

import { motion } from 'framer-motion';

const timeline = [
  { date: '4/16 (목)', label: '출국', desc: '이탈리아 도착 · 원격 개발 시작', accent: 'text-cyan-300', border: 'border-cyan-700/50' },
  { date: '4/27 (월)', label: '조기 귀국 ★', desc: '예정 4/28 → 1일 앞당겨 귀국 (비행기 변경)', accent: 'text-rose-300', border: 'border-rose-700/60' },
  { date: '4/28 (화)', label: '발표 D-Day', desc: '한국언론진흥재단 발표 평가 — 직접 발표', accent: 'text-amber-300', border: 'border-amber-700/60' },
];

const cost = [
  { k: '비행기 취소·재예약', v: '추가 발생 비용 — 발표 통과 시 지원금 3,000만으로 충분히 회수' },
  { k: '이탈리아 일정 단축', v: '원격 개발 가능 일수 1일 감소 — 4/27 도착 직후 발표 준비 집중' },
  { k: '발표 자료 준비', v: '4/24~4/26 (이탈리아 현지) 슬라이드 작성 → 4/27 야간 한국 도착 → 4/28 오전 발표' },
];

export default function GrantPresentationSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <div className="inline-flex items-center bg-rose-900/40 border border-rose-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-rose-300 text-sm font-medium tracking-wider">SCHEDULE CHANGE · 4/28 발표 평가</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">CTO 4/27 조기 귀국 확정</h2>
          <p className="text-slate-500">발표 평가가 4/28. 이탈리아 일정 단축, 비행기 재예약 — 발표 통과 시 회수.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {timeline.map((t, i) => (
            <motion.div key={t.date} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className={`bg-slate-900/60 rounded-xl p-5 border ${t.border}`}>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{t.label}</div>
              <div className={`text-lg font-bold ${t.accent} font-mono tabular-nums mb-2`}>{t.date}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{t.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-slate-900/40 rounded-2xl p-5 border border-rose-900/40">
          <div className="flex items-baseline justify-between mb-3">
            <div className="text-xs uppercase tracking-widest text-rose-400/80 font-semibold">감수해야 할 비용 · 3가지</div>
            <div className="text-[10px] text-slate-600">기댓값 = 합격 확률 ≥ 1/2 × 3,000만 = 1,500만 ↑</div>
          </div>
          <div className="space-y-2">
            {cost.map((c, i) => (
              <motion.div key={c.k} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.08 }} className="bg-slate-950/40 rounded-lg px-4 py-2.5 border border-rose-900/30 flex items-start gap-4">
                <div className="text-xs text-rose-300 font-semibold w-32 shrink-0 mt-0.5">{c.k}</div>
                <div className="text-xs text-slate-300 leading-relaxed flex-1">{c.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
