'use client';

import { motion } from 'framer-motion';

export default function AccentSlide() {
  const keepItems = [
    { label: '악센트 오프라인 매출', value: '월 1,500만원' },
    { label: '악센트 와우 매출', value: '월 1,000만원' },
    { label: '관련 고정비 (월세+알바+류다혜+조수빈 등)', value: '약 1,200~1,500만원' },
    { label: '마케팅팀 리소스 점유', value: '선화 60% + 정연 80%' },
  ];

  const cutItems = [
    { label: '월세 절감', value: '300~500만원' },
    { label: '알바비 절감', value: '200~300만원' },
    { label: '류다혜 + 조수빈 인건비', value: '400~500만원' },
    { label: '소모품·재료비', value: '100~200만원' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-amber-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-7"
        >
          <div className="inline-flex items-center bg-rose-900/40 border border-rose-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-rose-300 text-sm font-medium tracking-wider">AC&apos;SCENT ID + WOW + ONLINE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">
            악센트 아이디 + 와우 + 온라인 — 공간과 재계약
          </h2>
          <p className="text-slate-500 text-sm">30평 공간 = 운명 공동체. 2026년 8월 1일 재계약 단판승부</p>
        </motion.div>

        {/* Space Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-slate-900/60 rounded-2xl p-5 border border-rose-800/40 mb-5"
        >
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-500" />
              <h3 className="text-base font-semibold text-slate-200">공간 구조</h3>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="px-2 py-1 rounded bg-slate-800/60 border border-slate-700/50 text-slate-300 font-mono">30평 분리: 15평 + 15평</span>
              <span className="px-2 py-1 rounded bg-rose-900/40 border border-rose-700/40 text-rose-300">운명 공동체</span>
              <span className="px-2 py-1 rounded bg-amber-900/40 border border-amber-700/40 text-amber-300 font-mono">재계약 2026.8.1 / 1년 단위</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-3 leading-relaxed">
            악센트 오프라인(아이디)과 악센트 와우는 동일 공간에서 병행 운영. <span className="text-rose-300 font-medium">하나만 종료 불가</span> — 둘 다 유지하거나 둘 다 종료.
          </p>
        </motion.div>

        {/* Keep vs Cut 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {/* Keep */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-slate-900/60 rounded-2xl p-5 border border-rose-800/40"
          >
            <h3 className="text-sm font-semibold text-rose-300 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              재계약 시 유지되는 것
            </h3>
            <div className="space-y-2">
              {keepItems.map((k, i) => (
                <div key={i} className="flex items-center justify-between bg-slate-800/40 rounded-lg px-3 py-2 border border-slate-700/40">
                  <span className="text-xs text-slate-400">{k.label}</span>
                  <span className="text-xs font-mono tabular-nums text-slate-200">{k.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cut */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-slate-900/60 rounded-2xl p-5 border border-emerald-800/40"
          >
            <h3 className="text-sm font-semibold text-emerald-300 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              종료 시 절감 추정
            </h3>
            <div className="space-y-2">
              {cutItems.map((c, i) => (
                <div key={i} className="flex items-center justify-between bg-slate-800/40 rounded-lg px-3 py-2 border border-slate-700/40">
                  <span className="text-xs text-slate-400">{c.label}</span>
                  <span className="text-xs font-mono tabular-nums text-emerald-300">{c.value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between bg-emerald-900/30 rounded-lg px-3 py-2 border border-emerald-700/50 mt-2">
                <span className="text-xs font-semibold text-emerald-200">총 절감</span>
                <span className="text-sm font-bold font-mono tabular-nums text-emerald-300">약 1,000~1,500만원/월</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Net Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-slate-900/60 rounded-2xl p-5 border border-amber-800/50 mb-5"
        >
          <h3 className="text-sm font-semibold text-slate-200 mb-3">순 영향 (악센트 오프라인 + 와우 종료 시)</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-800/40 rounded-lg p-3 text-center border border-red-900/30">
              <p className="text-[10px] text-slate-500 mb-1">매출 감소</p>
              <p className="text-lg font-bold font-mono text-red-400">-2,500만원/월</p>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-3 text-center border border-emerald-900/30">
              <p className="text-[10px] text-slate-500 mb-1">비용 절감</p>
              <p className="text-lg font-bold font-mono text-emerald-400">+1,000~1,500만원/월</p>
            </div>
            <div className="bg-amber-950/40 rounded-lg p-3 text-center border border-amber-700/50">
              <p className="text-[10px] text-amber-300 mb-1">순 영향</p>
              <p className="text-lg font-bold font-mono text-amber-300">-1,000~1,500만원/월</p>
            </div>
          </div>
        </motion.div>

        {/* Key Insight + Online */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-gradient-to-br from-rose-950/50 to-slate-900/60 rounded-2xl p-5 border border-rose-700/50"
          >
            <h3 className="text-sm font-semibold text-rose-300 mb-2">핵심 인사이트</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              단순 숫자로는 유지가 안전해 보이지만, <span className="text-rose-300 font-semibold">진짜 비용은 &ldquo;마케팅팀의 기회비용&rdquo;</span>입니다. 선화+정연이 악센트에 묶여 있으면 학원 AI 마케팅을 제대로 못 함. 다만 현실적으로 마케팅팀이 학원 AI에서 크게 할 수 있는 게 지금은 제한적이라, <span className="text-amber-300 font-medium">5~7월에는 각자 원래 업무 집중이 맞음</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-slate-900/60 rounded-2xl p-5 border border-amber-800/40"
          >
            <h3 className="text-sm font-semibold text-amber-300 mb-2">악센트 온라인</h3>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="bg-slate-800/40 rounded-lg p-2 text-center border border-slate-700/40">
                <p className="text-[10px] text-slate-500">현재</p>
                <p className="text-base font-mono text-slate-200">월 50만원</p>
              </div>
              <div className="bg-slate-800/40 rounded-lg p-2 text-center border border-emerald-900/40">
                <p className="text-[10px] text-emerald-400">목표</p>
                <p className="text-base font-mono text-emerald-300">월 500만원</p>
              </div>
            </div>
            <ul className="text-[11px] text-slate-400 space-y-1 leading-relaxed">
              <li>• PG 심사 통과 완료</li>
              <li>• 마케팅팀이 기존 악센트 업무 선에서 처리</li>
              <li>• 별도 대규모 투자 불필요</li>
              <li>• 꾸준한 광고 운영 + 콘텐츠 업데이트 필요</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
