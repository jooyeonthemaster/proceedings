'use client';

import { motion } from 'framer-motion';

const decisions = [
  { id: 'D1', cat: '개발 데모', text: '이미지·PDF 추출 80% → 4/22 광고 ON 전 90% 진입 (구조 파싱·검증 UI)', who: '주연 + 동주', color: 'border-cyan-700/50', accent: 'text-cyan-300' },
  { id: 'D2', cat: '진행 점검', text: '주 1회 월요일 진행률·막힘·필요도움 3줄 보고 룰 도입', who: '전원', color: 'border-amber-700/50', accent: 'text-amber-300' },
  { id: 'D3', cat: '언론재단', text: 'CTO 4/27 조기 귀국 + 4/28 발표 — 4/24~26 발표 자료 준비', who: '주연 (단독)', color: 'border-emerald-700/50', accent: 'text-emerald-300' },
  { id: 'D4', cat: '언론재단', text: '아빠 명의 + 네안데르 개발 = 윈윈 구조로 진행 — 정산 흐름 분리 설계', who: '재영 + 주연', color: 'border-emerald-700/50', accent: 'text-emerald-300' },
  { id: 'D5', cat: '김기홍 강의', text: '시급 20만 × 60h = 1,200만 확정 — 5월 첫 차시 시작', who: '주연', color: 'border-fuchsia-700/50', accent: 'text-fuchsia-300' },
  { id: 'D6', cat: '인건비 정리', text: '1,600만 = 강의 1,200 + 개발 400 (개발 1건 추가 처리)', who: '주연 + 동주', color: 'border-fuchsia-700/50', accent: 'text-fuchsia-300' },
];

export default function DecisionsSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-violet-900/40 border border-violet-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-violet-300 text-sm font-medium tracking-wider">DECISIONS · 4/20 종결 6건</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">오늘의 결정 6가지</h2>
          <p className="text-slate-500">D1~D6 — 누가 무엇을 책임지는지 명시. 다음 회의에서 진척 점검.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {decisions.map((d, i) => (
            <motion.div key={d.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }} className={`bg-slate-900/60 rounded-xl p-4 border ${d.color}`}>
              <div className="flex items-baseline justify-between mb-2">
                <div className={`text-lg font-mono font-bold ${d.accent}`}>{d.id}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500">{d.cat}</div>
              </div>
              <div className="text-sm text-slate-100 leading-relaxed mb-2">{d.text}</div>
              <div className="text-[11px] text-slate-500 border-t border-slate-800/60 pt-2">
                <span className="text-slate-600">담당: </span>
                <span className={d.accent}>{d.who}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
