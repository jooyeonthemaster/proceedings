'use client';

import { motion } from 'framer-motion';

const candidates = [
  'AI 지문 분석', 'AI 문제 자동 생성', '난이도 자동 조정', '자동 조판/PDF', '학습 리포트',
  '오답 클러스터링', '학부모 알림', 'ERP 관리', '성적 대시보드', '시험지 공유',
];

export default function FeatureFunnelSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-emerald-300 text-sm font-medium tracking-wider">#4 FEATURE FUNNEL</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">#4 핵심 기능 Top 3 깔때기</h2>
          <p className="text-slate-500 text-sm">40+ 기능 후보 → 반응점수 4점+ 필터 → 3개 확정</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="bg-slate-900/60 rounded-2xl p-5 border border-slate-700/50">
            <div className="text-5xl font-bold font-mono text-slate-200 mb-1">40<span className="text-2xl text-slate-500">+</span></div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">STAGE 1</div>
            <div className="text-sm text-slate-300 leading-snug">전체 기능 아이디어 풀</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }} className="bg-slate-900/60 rounded-2xl p-5 border border-amber-700/50">
            <div className="text-5xl font-bold font-mono text-amber-300 mb-1">10<span className="text-2xl text-slate-500">개</span></div>
            <div className="text-xs uppercase tracking-widest text-amber-400/80 mb-2">STAGE 2 · 현재 후보</div>
            <div className="text-sm text-slate-300 leading-snug">4/15 임원진 선별 · 10곳 평가 대상</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="bg-slate-900/60 rounded-2xl p-5 border border-emerald-700/50">
            <div className="text-5xl font-bold font-mono text-emerald-300 mb-1">3<span className="text-2xl text-slate-500">개</span></div>
            <div className="text-xs uppercase tracking-widest text-emerald-400/80 mb-2">STAGE 3 · 4/30 확정</div>
            <div className="text-sm text-slate-300 leading-snug">평균 4점 이상 상위 3개 → 5월 MVP</div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="bg-slate-900/60 rounded-2xl p-5 border border-emerald-900/40">
          <div className="text-xs uppercase tracking-widest text-emerald-400 mb-3">현재 10개 후보</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {candidates.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + i * 0.04 }} className="bg-slate-950/50 rounded-lg px-3 py-2 text-xs text-slate-300 text-center border border-slate-800/60">
                {c}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
