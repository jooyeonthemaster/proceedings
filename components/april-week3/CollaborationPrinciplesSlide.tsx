'use client';

import { motion } from 'framer-motion';

const principles = [
  { n: '01', title: '뇌피셜 금지', desc: '"내 감으로는…" 금지. 모든 의사결정은 측정 가능한 데이터에 근거한다.', accent: 'text-rose-300', border: 'border-rose-700/50' },
  { n: '02', title: '데이터 only', desc: '마케팅 CTR · 영업 기능점수(1~5) · 광고 반응률 · QA 이슈율. 4종을 단일 노션에 통합.', accent: 'text-amber-300', border: 'border-amber-700/50' },
  { n: '03', title: '영업·마케팅 협업', desc: '재영 미팅 인사이트 → 선화 콘텐츠 반영(주 2회). 광고 댓글 → 재영 미팅 질문지 업데이트.', accent: 'text-emerald-300', border: 'border-emerald-700/50' },
  { n: '04', title: '실시간 피드백', desc: '동주 QA → 주연 푸시 당일 반영. 시차 7h 이내 사이클 유지. Critical은 슬랙 즉시 멘션.', accent: 'text-cyan-300', border: 'border-cyan-700/50' },
];

export default function CollaborationPrinciplesSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800/60 border border-slate-700/60 rounded-full px-5 py-1.5 mb-5">
            <span className="text-slate-300 text-sm font-medium tracking-wider">COLLABORATION PRINCIPLES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">4월 협업 원칙</h2>
          <p className="text-slate-500 text-sm">이탈리아 원격 기간 15일간의 4원칙</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {principles.map((p, i) => (
            <motion.div key={p.n} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }} className={`bg-slate-900/60 rounded-2xl p-6 border ${p.border}`}>
              <div className="flex items-start gap-4">
                <div className={`text-3xl font-mono font-bold ${p.accent} tabular-nums shrink-0`}>{p.n}</div>
                <div>
                  <div className="text-lg font-bold text-slate-100 mb-2">{p.title}</div>
                  <div className="text-sm text-slate-400 leading-relaxed">{p.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
