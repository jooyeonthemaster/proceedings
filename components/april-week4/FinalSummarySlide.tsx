'use client';

import { motion } from 'framer-motion';

const lines = [
  { id: '01', t: '진행상황 점검', d: '4명 모두 4/15 합의 사항 진척률·막힘·필요도움 3줄 보고 — 주 1회 룰 도입' },
  { id: '02', t: '개발 데모', d: '이미지·PDF 추출 80% → 4/22 90% 도달 (구조 파싱 + 검증 UI 우선)' },
  { id: '03', t: '언론재단', d: '1차 통과 (3,000만 확정) → 4/28 발표 (경쟁률 2:1 미만) → 조기 귀국 4/27' },
  { id: '04', t: '김기홍 강의', d: '시급 20만 × 60h = 1,200만 확정 — 1,600만 인건비 (강의 1,200 + 개발 400)' },
];

const oneLine = '점검(과거) + 데모(현재) + 발표(가까운 미래) + 강의(장기 매출) — 4월 한 번에 4트랙 합의.';

export default function FinalSummarySlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-violet-500/10"
            style={{ width: `${300 + i * 220}px`, height: `${300 + i * 220}px`, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 4 + i * 0.8, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="max-w-5xl w-full text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="inline-flex items-center bg-violet-900/40 border border-violet-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-violet-300 text-sm font-medium tracking-wider">CLOSING · 4/20 회의 종결</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-200 mb-4 leading-tight">
            오늘 회의 한 문장 요약
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-violet-600/60 to-fuchsia-700 mx-auto mb-6"></div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg text-slate-300 mb-10 leading-relaxed">
            {oneLine}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {lines.map((l, i) => (
              <motion.div key={l.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="bg-slate-900/60 rounded-xl p-4 border border-violet-900/40 text-left flex items-start gap-3">
                <div className="text-2xl font-mono font-bold text-violet-300 shrink-0">{l.id}</div>
                <div>
                  <div className="text-base font-semibold text-violet-200 mb-1">{l.t}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{l.d}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 1 }} className="text-sm text-slate-500 italic">
            "다음 점검 = 4/27. 그때까지 D1~D6 모두 진행률 측정 가능 상태로 만든다."
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
