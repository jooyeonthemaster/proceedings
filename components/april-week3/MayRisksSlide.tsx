'use client';

import { motion } from 'framer-motion';

const risks = [
  { n: '01', risk: '온보딩 이탈률 높음', threshold: '이탈률 > 40%', action: 'UI/UX 긴급 리웍 · 동주 QA 데이터 근거 기반', color: 'text-rose-300', border: 'border-rose-700/50' },
  { n: '02', risk: '유료 전환율 저조', threshold: '전환율 < 10%', action: '가격 재설정 or 크레딧 모델로 전환', color: 'text-amber-300', border: 'border-amber-700/50' },
  { n: '03', risk: '기능 요청 폭주', threshold: '기능 요청 > 50건/주', action: '핵심 Top 3 외 전부 5월 후순위 · 6월 로드맵 이관', color: 'text-fuchsia-300', border: 'border-fuchsia-700/50' },
];

export default function MayRisksSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800/60 border border-slate-700/60 rounded-full px-5 py-1.5 mb-5">
            <span className="text-slate-300 text-sm font-medium tracking-wider">MAY RISKS · 3 SCENARIOS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">5월 리스크 & 대응</h2>
          <p className="text-slate-500 text-sm">사전 정의된 임계값 도달 시 즉시 대응안 발동</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {risks.map((r, i) => (
            <motion.div key={r.n} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }} className={`bg-slate-900/60 rounded-2xl p-5 border ${r.border}`}>
              <div className={`text-xs font-mono ${r.color} mb-1`}>RISK #{r.n}</div>
              <div className="text-lg font-bold text-slate-100 mb-4">{r.risk}</div>
              <div className="space-y-3">
                <div className="bg-slate-950/60 rounded-lg p-3 border border-slate-800/60">
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">발동 임계값</div>
                  <div className={`text-sm ${r.color} font-mono font-semibold`}>{r.threshold}</div>
                </div>
                <div className="bg-slate-950/60 rounded-lg p-3 border border-slate-800/60">
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">대응안</div>
                  <div className="text-xs text-slate-200 leading-relaxed">{r.action}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
