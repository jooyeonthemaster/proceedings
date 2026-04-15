'use client';

import { motion } from 'framer-motion';

const steps = [
  { date: '04.16 (목)', label: '이탈리아 출발', desc: '랜딩 LIVE / 동주 QA 개시 / 재영 대흥 컨택', color: 'text-rose-300', border: 'border-rose-700/50' },
  { date: '04.19 (일)', label: '랜딩 싱크 완료', desc: '선화 UTM·픽셀 세팅 / 콘텐츠 1안 완성', color: 'text-fuchsia-300', border: 'border-fuchsia-700/50' },
  { date: '04.22 (수)', label: '광고 D-Day', desc: '인스타 2안 집행 시작 · 일 5만원 × 8일', color: 'text-amber-300', border: 'border-amber-700/50' },
  { date: '04.25 (토)', label: '중간 점검', desc: '화상 미팅 · 이름·가격 1차 판단', color: 'text-emerald-300', border: 'border-emerald-700/50' },
  { date: '04.30 (목)', label: '5대 확정', desc: '니즈·이름·요금제·기능·플로우 승인', color: 'text-cyan-300', border: 'border-cyan-700/50' },
  { date: '05.01 (금)', label: 'MVP 배포', desc: '사전예약자 10~20명 우선 온보딩', color: 'text-indigo-300', border: 'border-indigo-700/50' },
];

export default function AprilToMayBridgeSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-7xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-10">
          <div className="inline-flex items-center bg-slate-800/60 border border-slate-700/60 rounded-full px-5 py-1.5 mb-5">
            <span className="text-slate-300 text-sm font-medium tracking-wider">APRIL → MAY BRIDGE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">4월 → 5월 다리</h2>
          <p className="text-slate-500 text-sm">2주간 6개 핵심 이정표</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[54px] h-0.5 bg-gradient-to-r from-rose-700/60 via-amber-700/60 to-indigo-700/60" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative">
            {steps.map((s, i) => (
              <motion.div key={s.date} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }} className="flex flex-col items-center">
                <div className={`font-mono tabular-nums text-xs ${s.color} mb-2`}>{s.date}</div>
                <div className={`w-6 h-6 rounded-full bg-slate-950 border-2 ${s.border} z-10 mb-3 flex items-center justify-center`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                </div>
                <div className={`bg-slate-900/60 rounded-xl p-3 border ${s.border} w-full min-h-[110px]`}>
                  <div className={`text-sm font-bold ${s.color} mb-1.5`}>{s.label}</div>
                  <div className="text-[11px] text-slate-400 leading-snug">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
