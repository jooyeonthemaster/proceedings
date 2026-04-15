'use client';

import { motion } from 'framer-motion';

const board = [
  { cut: 1, scene: '원장 책상 · 수기 시험지 더미', copy: '"이번주도 새벽 2시..."', sec: '0-3s' },
  { cut: 2, scene: '스마트폰 화면 · 지문 업로드', copy: '"사진 한 장이면 된다면?"', sec: '3-8s' },
  { cut: 3, scene: 'AI 자동 문제 생성 UI', copy: '20초만에 20문항', sec: '8-13s' },
  { cut: 4, scene: 'PDF 인쇄', copy: '"선생님, 직접 체험해보세요"', sec: '13-18s' },
  { cut: 5, scene: 'CTA · 무료 체험 신청', copy: '우리 구 3자리 · 링크 클릭', sec: '18-22s' },
];

export default function Content1MarketResearchSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-violet-900/40 border border-violet-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-violet-300 text-sm font-medium tracking-wider">CONTENT #1 · MARKET RESEARCH</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">콘텐츠 1안 · 시장조사형 (무료체험)</h2>
          <p className="text-slate-500 text-sm">"AI가 시험지를 만들어준다? 선생님, 직접 체험해보세요"</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-5">
          {board.map((b, i) => (
            <motion.div key={b.cut} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }} className="bg-slate-900/60 rounded-xl p-3 border border-violet-800/40">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-mono font-bold text-violet-300">CUT {b.cut}</div>
                <div className="text-[10px] font-mono text-slate-500">{b.sec}</div>
              </div>
              <div className="aspect-video bg-slate-950/60 rounded border border-slate-800/60 mb-2 flex items-center justify-center text-[10px] text-slate-600 text-center p-2">{b.scene}</div>
              <div className="text-[11px] text-slate-300 leading-snug">{b.copy}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="bg-slate-900/60 rounded-xl p-3 border border-violet-900/40"><div className="text-[10px] uppercase tracking-widest text-violet-400 mb-1">CTA 링크</div><div className="text-xs text-slate-200 font-mono">/trial</div></div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-violet-900/40"><div className="text-[10px] uppercase tracking-widest text-violet-400 mb-1">타겟팅</div><div className="text-xs text-slate-200">서울·경기 학원 원장 · 30-50세</div></div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-violet-900/40"><div className="text-[10px] uppercase tracking-widest text-violet-400 mb-1">일 예산</div><div className="text-xs text-slate-200 font-mono">₩25,000 × 8일</div></div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-violet-900/40"><div className="text-[10px] uppercase tracking-widest text-violet-400 mb-1">KPI</div><div className="text-xs text-slate-200">CTR ≥ 2.0% · 무료체험 ≥ 40건</div></div>
        </div>
      </div>
    </div>
  );
}
