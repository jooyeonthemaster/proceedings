'use client';

import { motion } from 'framer-motion';

const changes = [
  { k: '이전', v: '4/20 광고 D-Day · 순차 진행 (계정→콘텐츠→광고)', color: 'text-slate-400', border: 'border-slate-700/50' },
  { k: '변경', v: '4/22 D-Day · 5개 트랙 병렬 실행 (2일 버퍼)', color: 'text-fuchsia-300', border: 'border-fuchsia-700/50' },
  { k: '이유', v: '주연 랜딩 4/19 완성 → 20·21 QA·콘텐츠 싱크 → 22 광고 ON', color: 'text-violet-300', border: 'border-violet-700/50' },
];

export default function CMOPersonCardSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-950 via-slate-900 to-violet-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
          <div className="bg-slate-900/60 rounded-2xl p-6 border border-fuchsia-700/40 text-center">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-800 flex items-center justify-center mb-4 text-3xl font-bold text-white">선화</div>
            <div className="text-xs uppercase tracking-widest text-fuchsia-400 mb-1">CMO · 마케팅 총괄</div>
            <div className="text-2xl font-bold text-slate-100 mb-1">유선화</div>
            <div className="text-sm text-slate-400 mb-4">콘텐츠 · 광고 · 브랜드</div>
            <div className="space-y-2 text-left border-t border-slate-800/60 pt-4">
              <div className="flex justify-between text-xs"><span className="text-slate-500">D-Day</span><span className="text-fuchsia-300 font-mono">04.22 (수)</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">트랙</span><span className="text-slate-300 font-mono">5 병렬</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">협력</span><span className="text-slate-300">정연(편집) · 주연(원격)</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">예산</span><span className="text-slate-300 font-mono">2.5만 × 8일 × 2안</span></div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <div className="text-xs uppercase tracking-widest text-fuchsia-400/80 mb-1">UPDATE · 4/22 병렬 실행</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">4/20 → 4/22 (2일 버퍼 확보)</h2>
              <p className="text-slate-500 text-sm">단, 이는 순차가 아닌 <span className="text-fuchsia-300">병렬 실행 조건</span></p>
            </div>
            <div className="space-y-3">
              {changes.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.12 }} className={`bg-slate-900/60 rounded-xl p-4 border ${c.border} flex items-start gap-4`}>
                  <div className={`text-xs uppercase tracking-widest ${c.color} shrink-0 w-16 mt-0.5`}>{c.k}</div>
                  <div className="text-sm text-slate-200 leading-relaxed">{c.v}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
