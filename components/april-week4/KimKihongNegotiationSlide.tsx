'use client';

import { motion } from 'framer-motion';

const positions = [
  { side: '김기홍 1차', label: '제안', value: '시급 10만 × 60h = 600만', sub: '"이게 시장 시급이다"', color: 'border-slate-700/50', accent: 'text-slate-400' },
  { side: '주연 카운터', label: '거절', value: '"그렇게 못한다"', sub: '교육 품질·시간 가치 대비 과소', color: 'border-rose-700/50', accent: 'text-rose-300' },
  { side: '김기홍 2차', label: '재제안', value: '시급 15~20만 (박사급 상한)', sub: '"이게 진짜 상한이다"', color: 'border-amber-700/50', accent: 'text-amber-300' },
  { side: '최종 합의', label: '확정 ★', value: '시급 20만 × 60h = 1,200만', sub: '4/20 협상 종료', color: 'border-fuchsia-700/60', accent: 'text-fuchsia-300' },
];

const why = [
  { k: '시급 20만 의미', v: '박사급 상한 수용 = 김기홍이 직접 제시한 천장. 더 깎으면 협상 결렬 리스크.' },
  { k: 'Win-Win 핵심', v: '주연이 받기로 했던 시급 10만 → 박사급 명의 우회 → 소득세·추가비용 발생 구조였음. 이번 합의로 우회 구조 제거.' },
  { k: '관계적 가치', v: '김기홍과 향후 협업 라인 유지 + 단가 정책 깨끗하게 합의 = 다음 프로젝트도 같은 단가 적용 가능.' },
];

export default function KimKihongNegotiationSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-950 via-slate-900 to-violet-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-fuchsia-900/40 border border-fuchsia-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-fuchsia-300 text-sm font-medium tracking-wider">NEGOTIATION · 4/20 종결</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">김기홍 강의 단가 협상 결과</h2>
          <p className="text-slate-500">5월부터 10차시 60시간 강의 — 시급 20만 × 60h = 1,200만 확정.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-5">
          {positions.map((p, i) => (
            <motion.div key={p.side} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className={`bg-slate-900/60 rounded-xl p-4 border ${p.color}`}>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{p.side}</div>
              <div className={`text-xs font-mono font-semibold ${p.accent} mb-2`}>{p.label}</div>
              <div className="text-sm text-slate-100 font-bold leading-tight mb-1">{p.value}</div>
              <div className="text-[10px] text-slate-400 leading-snug italic">"{p.sub}"</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-slate-900/40 rounded-2xl p-4 border border-fuchsia-900/40">
          <div className="text-xs uppercase tracking-widest text-fuchsia-400/80 mb-3 font-semibold">왜 이 합의가 좋은가 · 3가지</div>
          <div className="space-y-2">
            {why.map((w, i) => (
              <motion.div key={w.k} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.08 }} className="bg-slate-950/40 rounded-lg px-4 py-2.5 border border-fuchsia-900/30 flex items-start gap-4">
                <div className="text-xs text-fuchsia-300 font-semibold w-32 shrink-0 mt-0.5">{w.k}</div>
                <div className="text-xs text-slate-300 leading-relaxed flex-1">{w.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
