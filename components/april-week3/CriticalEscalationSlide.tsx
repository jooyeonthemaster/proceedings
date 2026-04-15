'use client';

import { motion } from 'framer-motion';

const steps = [
  { n: '01', title: '이슈 발견', time: '한국 11:00 (이탈리아 04:00)', detail: '동주 QA 중 Critical 태그', color: 'text-blue-300', border: 'border-blue-700/50' },
  { n: '02', title: '슬랙 즉시 멘션', time: '한국 11:05', detail: '@주연 · 재현 동영상 첨부 · 노션 링크', color: 'text-rose-300', border: 'border-rose-700/50' },
  { n: '03', title: '이탈리아 낮 수정', time: '이탈리아 10:00 (한국 17:00)', detail: '주연 확인 후 긴급 패치 푸시', color: 'text-cyan-300', border: 'border-cyan-700/50' },
  { n: '04', title: '다음날 아침 재검증', time: '한국 익일 09:00', detail: '동주 재현 테스트 · 해결 시 노션 Close', color: 'text-emerald-300', border: 'border-emerald-700/50' },
];

export default function CriticalEscalationSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-indigo-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-rose-900/40 border border-rose-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-rose-300 text-sm font-medium tracking-wider">CRITICAL ESCALATION · ≤ 24H LOOP</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">Critical 이슈 실시간 에스컬레이션</h2>
          <p className="text-slate-500 text-sm">발견부터 재검증까지 24시간 이내</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-5">
          {steps.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }} className={`bg-slate-900/60 rounded-xl p-4 border ${s.border}`}>
              <div className={`text-xs font-mono ${s.color} mb-1`}>#{s.n}</div>
              <div className="text-base font-bold text-slate-100 mb-1">{s.title}</div>
              <div className={`text-[10px] font-mono ${s.color} mb-2`}>{s.time}</div>
              <div className="text-[11px] text-slate-400 leading-snug">{s.detail}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-slate-900/60 rounded-xl p-3 border border-rose-800/40">
            <div className="text-[10px] uppercase tracking-widest text-rose-400 mb-1">Critical 정의</div>
            <div className="text-xs text-slate-200">서비스 다운 · 데이터 손실 · 보안 · 결제 실패</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-amber-800/40">
            <div className="text-[10px] uppercase tracking-widest text-amber-400 mb-1">Major 정의</div>
            <div className="text-xs text-slate-200">핵심 기능 오작동 · UX 흐름 끊김 · 다음날 반영</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700/40">
            <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Minor 정의</div>
            <div className="text-xs text-slate-200">오탈자 · 마이너 UI · 주간 정리 반영</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
