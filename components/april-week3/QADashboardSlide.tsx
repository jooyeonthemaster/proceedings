'use client';

import { motion } from 'framer-motion';

const tree = [
  { level: 0, label: 'QA 대시보드 (노션)', value: '', color: 'text-blue-200', border: 'border-blue-700/50' },
  { level: 1, label: '이슈 분류', value: '', color: 'text-cyan-300', border: 'border-cyan-700/40' },
  { level: 2, label: 'Critical', value: '0건 · 즉시 대응', color: 'text-rose-300', border: 'border-rose-700/40' },
  { level: 2, label: 'Major', value: '—건 · 24h 내', color: 'text-amber-300', border: 'border-amber-700/40' },
  { level: 2, label: 'Minor', value: '—건 · 주간 정리', color: 'text-slate-400', border: 'border-slate-700/40' },
  { level: 1, label: '해결률 지표', value: '', color: 'text-cyan-300', border: 'border-cyan-700/40' },
  { level: 2, label: '전체 이슈 / 해결 / 진행', value: '실시간 카운터', color: 'text-emerald-300', border: 'border-emerald-700/40' },
  { level: 2, label: '평균 해결 시간', value: '≤ 24h 목표', color: 'text-emerald-300', border: 'border-emerald-700/40' },
  { level: 1, label: '기능별 이슈 분포', value: '', color: 'text-cyan-300', border: 'border-cyan-700/40' },
  { level: 2, label: 'ERP / 지문분석 / 문제생성 / 조판 / 리포트', value: '히트맵', color: 'text-fuchsia-300', border: 'border-fuchsia-700/40' },
  { level: 1, label: '전환율 지표', value: '', color: 'text-cyan-300', border: 'border-cyan-700/40' },
  { level: 2, label: '재영 인사이트 → QA 전환율', value: '%', color: 'text-amber-300', border: 'border-amber-700/40' },
  { level: 2, label: '선화 광고 피드백 → 개선안 전환율', value: '%', color: 'text-amber-300', border: 'border-amber-700/40' },
];

export default function QADashboardSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-indigo-900/40 border border-indigo-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-indigo-300 text-sm font-medium tracking-wider">QA DASHBOARD · NOTION TREE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">QA 대시보드 구조</h2>
          <p className="text-slate-500 text-sm">이탈리아 주연 · 재영 · 임원진 실시간 확인용</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="bg-slate-900/60 rounded-2xl p-5 border border-indigo-900/40 font-mono text-sm">
          {tree.map((n, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.05 }} style={{ paddingLeft: `${n.level * 28}px` }} className={`py-1.5 flex items-center gap-3 border-l-2 ${n.border} my-0.5`}>
              <span className="text-slate-600">{n.level === 0 ? '●' : n.level === 1 ? '├─' : '│  └─'}</span>
              <span className={`${n.color} font-semibold`}>{n.label}</span>
              {n.value && <span className="text-slate-500 text-xs">— {n.value}</span>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
