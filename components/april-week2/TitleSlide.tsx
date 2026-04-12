'use client';

import { motion } from 'framer-motion';

export default function TitleSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Geometric pulse effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-indigo-500/10"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'easeInOut',
            }}
          />
        ))}
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-5xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Date Badge */}
          <div className="inline-flex items-center bg-indigo-900/40 border border-indigo-500/30 rounded-full px-6 py-2 mb-8">
            <span className="text-indigo-300/80 font-medium">
              2026년 4월 12일 &nbsp;|&nbsp; 4월 2주차
            </span>
          </div>

          {/* Section Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm uppercase tracking-[0.3em] text-indigo-400/60 mb-4"
          >
            STRATEGY MEETING PRE-READ &nbsp;·&nbsp; COMPANY-WIDE DECISION FRAMEWORK
          </motion.p>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-200 mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              네안데르 2026 전략 회의록
            </motion.span>
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-indigo-600/60 to-slate-700 mx-auto mb-8"></div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl text-slate-300 mb-4"
          >
            4월 14일(화) 전략회의 사전 자료 + 전사 의사결정 프레임워크
          </motion.p>

          {/* Origin Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.0, duration: 1 }}
            className="text-sm text-slate-500 mb-12"
          >
            CEO 유재영 → CTO 김주연 &nbsp;·&nbsp; AI 포토부스 제안서 기반 회의 요청에 대한
            전사 전략 분석
          </motion.p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-red-900/40"
            >
              <div className="text-3xl font-bold text-red-400/90 font-mono tabular-nums">
                4<span className="text-lg align-middle ml-0.5">개월</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">8월경 소진 예상</div>
              <div className="text-slate-400 text-sm mt-1">런웨이</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-amber-800/40"
            >
              <div className="text-3xl font-bold text-amber-400/90 font-mono tabular-nums">
                -2,000<span className="text-base align-middle ml-0.5">만</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">매출 2,500 - 고정비 4,500</div>
              <div className="text-slate-400 text-sm mt-1">월 적자</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-blue-800/40"
            >
              <div className="text-3xl font-bold text-blue-300/90 font-mono tabular-nums">
                8,000<span className="text-base align-middle ml-0.5">만</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">추정 잔액</div>
              <div className="text-slate-400 text-sm mt-1">잔여 현금</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="bg-slate-900/60 rounded-xl p-4 border border-indigo-800/40"
            >
              <div className="text-3xl font-bold text-indigo-300/90 font-mono tabular-nums">
                D-2
              </div>
              <div className="text-xs text-slate-500 mt-1">04.14(화) 전략회의</div>
              <div className="text-slate-400 text-sm mt-1">의사결정</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
