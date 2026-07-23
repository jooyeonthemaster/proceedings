'use client';

import { motion } from 'framer-motion';

export default function TitleSlide() {
  const stats = [
    { value: '0', sub: '이번 주 스모트 마케팅 실행', label: '실행 건수', color: 'border-rose-800/50', text: 'text-rose-300/90' },
    { value: 'D-3', sub: '7/26·27 단체 세미나', label: '세미나 카운트다운', color: 'border-amber-800/50', text: 'text-amber-300/90' },
    { value: '12', suffix: '건', sub: '7/15 보드에 쌓인 실행안', label: '착수 대기', color: 'border-cyan-800/50', text: 'text-cyan-300/90' },
    { value: '~4', suffix: '주', sub: '개학 전 남은 골든타임', label: '남은 시간', color: 'border-emerald-800/50', text: 'text-emerald-300/90' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-rose-500/10"
            style={{ width: `${300 + i * 220}px`, height: `${300 + i * 220}px`, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 4 + i * 0.8, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
          />
        ))}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(244,63,94,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(244,63,94,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-5xl w-full text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          <div className="inline-flex items-center bg-rose-900/40 border border-rose-500/30 rounded-full px-6 py-2 mb-8">
            <span className="text-rose-300/80 font-medium">2026년 7월 23일(목) &nbsp;|&nbsp; 7월 4주차 · 전체 회의</span>
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-sm uppercase tracking-[0.3em] text-rose-400/60 mb-4">
            SMOAT MARKETING · OWNERSHIP RESET
          </motion.p>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-200 mb-6 leading-tight">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
              스모트 마케팅, 누가 밀고 가나
            </motion.span>
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-rose-600/60 to-orange-700 mx-auto mb-8"></div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{ delay: 0.8, duration: 1 }} className="text-xl text-slate-300 mb-4">
            실행 공백 진단 · 골든타임 · 전담 오너 · 데일리 복원 · 세미나 D-3
          </motion.p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 1.0, duration: 1 }} className="text-sm text-slate-500 mb-12">
            유재영(CEO) · 김주연(CTO, 작성) · 유선화(CMO) · 이동주(재무/운영) · 김제연(디자인)
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 + i * 0.1 }} className={`bg-slate-900/60 rounded-xl p-4 border ${s.color}`}>
                <div className={`text-3xl font-bold font-mono tabular-nums ${s.text}`}>
                  {s.value}{s.suffix && <span className="text-lg align-middle ml-0.5">{s.suffix}</span>}
                </div>
                <div className="text-xs text-slate-500 mt-1">{s.sub}</div>
                <div className="text-slate-400 text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
