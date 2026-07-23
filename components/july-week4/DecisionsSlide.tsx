'use client';

import { motion } from 'framer-motion';

const decisions = [
  { id: 'D1', cat: '오너십', text: '스모트 마케팅 전담 오너 확정 — 누구인지, 본업 조정 범위까지 오늘 결론', who: '전원 합의', color: 'border-rose-700/50', accent: 'text-rose-300' },
  { id: 'D2', cat: '리듬', text: '데일리 회의 시간 확정 (매일 15분 · 3줄 형식 · 보드 기준 · 오너 사회)', who: '전원', color: 'border-cyan-700/50', accent: 'text-cyan-300' },
  { id: 'D3', cat: '세미나', text: '7/26·27 세미나 Go / 축소 / 연기 판정 — 오늘 신청 숫자 기준으로 결정', who: '유재영 + 유선화', color: 'border-amber-700/50', accent: 'text-amber-300' },
  { id: 'D4', cat: '실행 선택', text: '보드 12건 중 이번 주 집중 3건 선정 — 나머지는 명시적으로 보류', who: '오너 주도', color: 'border-emerald-700/50', accent: 'text-emerald-300' },
  { id: 'D5', cat: '제품 이해', text: '스모트 기능 데모 세션 일정 확정 + 전원 1회 사용 완주 마감일 지정', who: '김주연 주도', color: 'border-violet-700/50', accent: 'text-violet-300' },
];

export default function DecisionsSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-emerald-300 text-sm font-medium tracking-wider">DECISIONS · 오늘 정할 것 5가지</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">이 자리에서 결론 내는 것</h2>
          <p className="text-slate-500">D1~D5 — 하나라도 미결로 남기면 다음 회의도 오늘과 같은 얘기를 반복하게 된다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {decisions.map((d, i) => (
            <motion.div key={d.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }} className={`bg-slate-900/60 rounded-xl p-4 border ${d.color} ${i === 4 ? 'md:col-span-2' : ''}`}>
              <div className="flex items-baseline justify-between mb-2">
                <div className={`text-lg font-mono font-bold ${d.accent}`}>{d.id}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500">{d.cat}</div>
              </div>
              <div className="text-sm text-slate-100 leading-relaxed mb-2">{d.text}</div>
              <div className="text-[11px] text-slate-500 border-t border-slate-800/60 pt-2">
                <span className="text-slate-600">결정 주체: </span>
                <span className={d.accent}>{d.who}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
