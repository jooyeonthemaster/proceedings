'use client';

import { motion } from 'framer-motion';

const steps = [
  { n: '01', title: '인스타 광고', detail: '콘텐츠 1안 + 2안 동시 집행', color: 'text-fuchsia-300', border: 'border-fuchsia-700/50' },
  { n: '02', title: 'UTM 분기', detail: 'trial vs reserve 구분 수집', color: 'text-violet-300', border: 'border-violet-700/50' },
  { n: '03', title: '랜딩 폼', detail: '7필드 응답 · A/B 분기 기록', color: 'text-cyan-300', border: 'border-cyan-700/50' },
  { n: '04', title: '노션 미러링', detail: 'Supabase Webhook → Notion API', color: 'text-amber-300', border: 'border-amber-700/50' },
  { n: '05', title: '재영 24h 컨택', detail: '응답자 전원 익일 전화 · 미팅 유도', color: 'text-emerald-300', border: 'border-emerald-700/50' },
  { n: '06', title: '동주 QA 반영', detail: '미팅 인사이트 → QA 리스트 업데이트', color: 'text-rose-300', border: 'border-rose-700/50' },
];

export default function AdFunnelSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-950 via-slate-900 to-emerald-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <div className="inline-flex items-center bg-fuchsia-900/40 border border-fuchsia-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-fuchsia-300 text-sm font-medium tracking-wider">AD → LANDING → SALES FUNNEL</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">광고 → 랜딩 → 영업 파이프라인</h2>
          <p className="text-slate-500 text-sm">6단계 자동화 · 인스타 노출부터 QA 반영까지</p>
        </motion.div>

        <div className="space-y-3">
          {steps.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }} className="flex items-center gap-4">
              <div className={`shrink-0 w-14 h-14 rounded-xl bg-slate-900/60 border ${s.border} flex items-center justify-center`}>
                <span className={`font-mono font-bold text-sm ${s.color}`}>{s.n}</span>
              </div>
              <div className={`flex-1 bg-slate-900/60 rounded-xl px-5 py-3 border ${s.border}`}>
                <div className={`text-base font-bold ${s.color} mb-0.5`}>{s.title}</div>
                <div className="text-xs text-slate-400">{s.detail}</div>
              </div>
              {i < steps.length - 1 && <div className="shrink-0 text-slate-600 text-xl">↓</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
