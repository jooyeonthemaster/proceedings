'use client';

import { motion } from 'framer-motion';

const actions = [
  { text: '스모트 오너 확정 → ERP 보드 운영권 이관', who: '전원 → 오너', due: '오늘 회의 중', color: 'border-rose-700/50', accent: 'text-rose-300' },
  { text: '데일리 회의 첫 회 — 확정된 시간에 바로 시작', who: '전원 (오너 사회)', due: '내일 7/24', color: 'border-cyan-700/50', accent: 'text-cyan-300' },
  { text: '세미나 판정에 따른 후속 — 총력 홍보 or 재설계안 공유', who: '유선화·유재영', due: '7/24까지', color: 'border-amber-700/50', accent: 'text-amber-300' },
  { text: '이번 주 집중 3건 착수 — 담당자·첫 산출물 정의', who: '오너 + 각 담당', due: '7/25까지', color: 'border-emerald-700/50', accent: 'text-emerald-300' },
  { text: '스모트 기능 데모 세션 진행', who: '김주연', due: '이번 주 내', color: 'border-violet-700/50', accent: 'text-violet-300' },
  { text: '전원 스모트 문제 생성 1회 완주 인증 (데일리에서 공유)', who: '전원', due: '7/29까지', color: 'border-violet-700/50', accent: 'text-violet-300' },
];

export default function NextActionsSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-emerald-300 text-sm font-medium tracking-wider">NEXT ACTIONS · 회의 직후 실행</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">액션 아이템</h2>
          <p className="text-slate-500">전부 이번 주 안에 끝나는 것들 — 다음 데일리부터 보드에서 매일 점검</p>
        </motion.div>

        <div className="space-y-2.5">
          {actions.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }} className={`bg-slate-900/60 rounded-xl px-5 py-3.5 border ${a.color} flex items-center gap-4`}>
              <div className={`w-7 h-7 shrink-0 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-mono font-bold ${a.accent}`}>{i + 1}</div>
              <div className="flex-1 text-sm text-slate-100 leading-snug">{a.text}</div>
              <div className="text-right shrink-0">
                <div className={`text-xs font-semibold ${a.accent}`}>👤 {a.who}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">⏰ {a.due}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
