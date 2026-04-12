'use client';

import { motion } from 'framer-motion';

export default function ScenarioCompareSlide() {
  const rows = [
    { metric: '12월 학원AI MRR', a: '3,500만', b: '3,500만', c: '900만', d: '3,500만' },
    { metric: '12월 총매출', a: '6,650만', b: '4,150만', c: '5,050만', d: '4,150~6,650만' },
    { metric: '12월 고정비', a: '4,500만', b: '3,000만', c: '4,500만', d: '3,000~4,500만' },
    { metric: '12월 순이익', a: '+2,150만', b: '+1,150만', c: '+550만', d: '+1,150~2,150만' },
    { metric: '연말 현금', a: '11,050만', b: '6,050만', c: '6,000만', d: '6,050~11,050만' },
    { metric: '최저 현금', a: '4,850만', b: '3,800만', c: '5,400만', d: '3,800~4,850만' },
    { metric: '투자유치 가능성', a: '중', b: '상', c: '하', d: '상' },
    { metric: '리스크 수준', a: '중', b: '상', c: '하', d: '중' },
    { metric: '2027 스케일업', a: '제한적', b: '강력', c: '없음', d: '강력' },
  ];

  const columns = [
    { key: 'a', label: 'A. 밸런스', color: 'indigo', sub: '현재 계획' },
    { key: 'b', label: 'B. 올인', color: 'red', sub: '고위험 고수익' },
    { key: 'c', label: 'C. 캐시우선', color: 'amber', sub: '생존 모드' },
    { key: 'd', label: 'D. 하이브리드', color: 'emerald', sub: '★ 추천 ★', recommend: true },
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; accent: string }> = {
    indigo: {
      bg: 'bg-indigo-950/40',
      border: 'border-indigo-700/60',
      text: 'text-indigo-300',
      accent: 'text-indigo-200',
    },
    red: {
      bg: 'bg-red-950/40',
      border: 'border-red-700/60',
      text: 'text-red-300',
      accent: 'text-red-200',
    },
    amber: {
      bg: 'bg-amber-950/40',
      border: 'border-amber-700/60',
      text: 'text-amber-300',
      accent: 'text-amber-200',
    },
    emerald: {
      bg: 'bg-emerald-950/40',
      border: 'border-emerald-700/60',
      text: 'text-emerald-300',
      accent: 'text-emerald-200',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-7"
        >
          <div className="inline-flex items-center bg-slate-800/60 border border-slate-700/60 rounded-full px-5 py-1.5 mb-5">
            <span className="text-slate-300 text-sm font-medium tracking-wider">SCENARIO COMPARE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">
            시나리오 비교 요약
          </h2>
          <p className="text-slate-500 text-sm">9개 지표 × 4개 시나리오 — 의사결정 매트릭스</p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="overflow-x-auto rounded-2xl border border-slate-800/60 mb-6"
        >
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-900/80">
                <th className="px-3 py-3 text-left font-medium text-slate-400 border-b border-slate-800/60">지표</th>
                {columns.map((col) => {
                  const c = colorMap[col.color];
                  return (
                    <th
                      key={col.key}
                      className={`px-3 py-3 text-center font-bold border-b ${c.border} ${c.bg} ${c.text} relative`}
                    >
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-sm">{col.label}</span>
                        <span className="text-[9px] font-normal text-slate-400">{col.sub}</span>
                        {col.recommend && (
                          <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded-full bg-emerald-500 text-emerald-950 text-[8px] font-bold whitespace-nowrap">
                            RECOMMEND
                          </span>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-t border-slate-800/40 hover:bg-slate-900/40">
                  <td className="px-3 py-2.5 text-slate-300 font-medium">{row.metric}</td>
                  <td className="px-3 py-2.5 text-center font-mono tabular-nums text-slate-200">{row.a}</td>
                  <td className="px-3 py-2.5 text-center font-mono tabular-nums text-slate-200">{row.b}</td>
                  <td className="px-3 py-2.5 text-center font-mono tabular-nums text-slate-200">{row.c}</td>
                  <td className="px-3 py-2.5 text-center font-mono tabular-nums bg-emerald-950/20 text-emerald-200 font-semibold">{row.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Conclusion Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="bg-gradient-to-r from-emerald-950/60 via-emerald-900/40 to-emerald-950/60 rounded-2xl p-5 border border-emerald-700/60 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-[11px] tracking-wider text-emerald-400 font-bold">FINAL RECOMMENDATION</p>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <p className="text-xl font-bold text-slate-100">
            추천: <span className="text-emerald-300">Scenario D — 하이브리드</span>
          </p>
          <p className="text-sm text-emerald-200/80 mt-1">
            7월 말 데이터로 <span className="font-semibold">감이 아닌 숫자로 결정</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
