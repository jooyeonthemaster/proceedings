'use client';

import { motion } from 'framer-motion';

const features = ['ERP 학원관리', 'AI 지문분석', 'AI 문제생성', '자동 조판', '학습 리포트'];

// 10 academies (target: 대흥 10곳)
const academies = ['대흥A 영어', '대흥B 수학', '대흥C 종합', '대흥D 영어', '대흥E 국어', '대흥F 수학', '대흥G 과학', '대흥H 영어', '대흥I 종합', '대흥J 영어'];

// generated sample score matrix 1~5
const matrix = [
  [5, 4, 5, 3, 4],
  [4, 4, 4, 4, 3],
  [5, 5, 4, 4, 5],
  [3, 4, 5, 2, 3],
  [4, 3, 4, 4, 4],
  [5, 4, 5, 5, 4],
  [2, 4, 4, 3, 3],
  [4, 5, 5, 4, 4],
  [3, 4, 4, 3, 4],
  [5, 5, 5, 4, 4],
];

function scoreColor(s: number) {
  if (s >= 4) return 'bg-emerald-900/50 text-emerald-200';
  if (s === 3) return 'bg-amber-900/40 text-amber-200';
  return 'bg-red-900/40 text-red-200';
}

export default function NeedsMeasurementSlide() {
  const avgs = features.map((_, c) => (matrix.reduce((s, r) => s + r[c], 0) / matrix.length).toFixed(1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-5">
          <div className="inline-flex items-center bg-rose-900/40 border border-rose-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-rose-300 text-sm font-medium tracking-wider">#1 NEEDS MEASUREMENT</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-200 mb-1">#1 고객 니즈 측정</h2>
          <p className="text-slate-500 text-sm">5개 기능 × 10곳 학원 반응점수(1~5) + 광고 CTR 보정</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="bg-slate-900/60 rounded-2xl border border-rose-900/40 overflow-hidden mb-4">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-950/80">
                <th className="px-3 py-2 text-left text-slate-400 font-medium border-b border-slate-800/60">학원 / 기능</th>
                {features.map((f) => (<th key={f} className="px-2 py-2 text-center text-slate-300 font-medium border-b border-slate-800/60">{f}</th>))}
              </tr>
            </thead>
            <tbody>
              {academies.map((a, r) => (
                <tr key={a} className="border-t border-slate-800/40">
                  <td className="px-3 py-1.5 text-slate-300">{a}</td>
                  {matrix[r].map((s, c) => (
                    <td key={c} className="px-2 py-1">
                      <div className={`rounded px-2 py-1 text-center font-mono tabular-nums font-semibold ${scoreColor(s)}`}>{s}</div>
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-slate-950/80 border-t border-rose-900/40">
                <td className="px-3 py-2 text-rose-300 font-bold">평균</td>
                {avgs.map((a, i) => (<td key={i} className="px-2 py-2 text-center font-mono tabular-nums text-rose-300 font-bold">{a}</td>))}
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="grid grid-cols-3 gap-3">
          <div className="bg-emerald-950/30 rounded-xl p-3 border border-emerald-700/40">
            <div className="text-[10px] uppercase tracking-widest text-emerald-400 mb-0.5">채택</div>
            <div className="text-sm text-slate-200"><span className="font-bold font-mono">4점 이상</span> · 핵심 기능 Top 3 후보</div>
          </div>
          <div className="bg-amber-950/30 rounded-xl p-3 border border-amber-700/40">
            <div className="text-[10px] uppercase tracking-widest text-amber-400 mb-0.5">유보</div>
            <div className="text-sm text-slate-200"><span className="font-bold font-mono">3점</span> · 문구·포지셔닝 재검토</div>
          </div>
          <div className="bg-red-950/30 rounded-xl p-3 border border-red-700/40">
            <div className="text-[10px] uppercase tracking-widest text-red-400 mb-0.5">드롭</div>
            <div className="text-sm text-slate-200"><span className="font-bold font-mono">3점 이하</span> · 5월 MVP 제외</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
