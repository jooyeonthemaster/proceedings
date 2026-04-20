'use client';

import { motion } from 'framer-motion';

const facts = [
  { k: 'WHY', v: '학원 시험지·교재·필기 자료를 디지털 데이터로 즉시 환원 → AI 문제생성·학습 리포트의 입력 단(端).' },
  { k: 'WHAT', v: '이미지(jpg/png/scan) + PDF 업로드 → OCR + 레이아웃 파싱 → 텍스트 + 구조(문항/번호/보기) 자동 추출.' },
  { k: 'WHERE', v: '랜딩페이지 내 "샘플 업로드" 섹션 + 사전예약 고객 전용 데모 입구.' },
  { k: 'WHEN', v: '오늘 4/20 데모 시연 → 4/22 광고 ON 전 90% / 4/30 정확도 검증 데이터 확정.' },
];

const stack = [
  { k: 'OCR', v: '한글 손글씨·인쇄 혼합 처리' },
  { k: 'Layout', v: '문항 단위 영역 분리·번호 추출' },
  { k: 'Storage', v: 'Supabase Storage + 메타 row' },
  { k: 'Trigger', v: 'Edge function on upload' },
];

export default function DevTeamItalySlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-slate-900 to-indigo-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-cyan-900/40 border border-cyan-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-cyan-300 text-sm font-medium tracking-wider">DEV · ITALY REMOTE · 80% READY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">이미지·PDF 자동 텍스트 추출</h2>
          <p className="text-slate-500">이탈리아 원격 개발 진행 중 · 오늘 회의 피드백으로 마지막 20% 완성</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          {facts.map((f, i) => (
            <motion.div key={f.k} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }} className="bg-slate-900/60 rounded-xl p-4 border border-cyan-900/40 flex items-start gap-3">
              <div className="text-xs font-mono text-cyan-300 shrink-0 w-12 mt-0.5 font-bold">{f.k}</div>
              <div className="text-sm text-slate-200 leading-relaxed flex-1">{f.v}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-slate-900/40 rounded-2xl p-4 border border-cyan-900/30">
          <div className="text-xs uppercase tracking-widest text-cyan-400/80 mb-3">기술 스택 · 4축</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stack.map((s, i) => (
              <motion.div key={s.k} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + i * 0.05 }} className="bg-slate-950/60 rounded-lg px-3 py-3 border border-slate-800/60 text-center">
                <div className="text-xs text-cyan-300 font-mono font-semibold mb-1">{s.k}</div>
                <div className="text-[11px] text-slate-400 leading-snug">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
