'use client';

import { motion } from 'framer-motion';

export default function CompanyOverviewSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center bg-blue-900/40 border border-blue-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-blue-300 text-sm font-medium tracking-wider">
              COMPANY OVERVIEW · 1-1
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">
            회사 개요 — 네안데르
          </h2>
          <p className="text-slate-500">AI 체험 콘텐츠 기획사 · 메인 캐시카우 = 악센트 아이디</p>
        </motion.div>

        {/* Identity Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-slate-900/60 rounded-2xl p-6 border border-blue-800/40 mb-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">법인명</div>
              <div className="text-xl font-bold text-slate-200">주식회사 네안데르</div>
              <div className="text-xs text-slate-500 mt-1">Neander Inc.</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">정의</div>
              <div className="text-xl font-bold text-blue-300">AI 체험 콘텐츠 기획사</div>
              <div className="text-xs text-slate-500 mt-1">
                기획 · 개발 · 운영 통합형
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">메인 캐시카우</div>
              <div className="text-xl font-bold text-blue-300">악센트 아이디</div>
              <div className="text-xs text-slate-500 mt-1 font-mono">AC&apos;SCENT ID</div>
            </div>
          </div>
        </motion.div>

        {/* Service Detail + Online */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-slate-900/60 rounded-2xl p-5 border border-slate-800/60"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-slate-200">
                악센트 아이디 (AC&apos;SCENT ID)
              </h3>
              <span className="text-xs text-blue-300 bg-blue-900/40 border border-blue-800/50 rounded-full px-2.5 py-0.5">
                홍대 / 오프라인
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              홍대에 위치한 <span className="text-slate-200 font-medium">AI 기반 향수 추천 서비스</span>.{' '}
              <span className="text-slate-200 font-medium">최애(좋아하는 인물)의 이미지를 AI로 분석</span>해
              개인 맞춤 향을 추천해주는 체험형 서비스로, 오프라인 스토어에서 운영 중이다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-slate-900/60 rounded-2xl p-5 border border-slate-800/60"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-slate-200">악센트 온라인</h3>
              <span className="text-xs text-emerald-300 bg-emerald-900/40 border border-emerald-800/50 rounded-full px-2.5 py-0.5">
                2026.02 ~
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="text-slate-200 font-medium">올해 2월부터 온라인 서비스 구축</span>해 운영
              중. 오프라인 IP를 온라인 매출로 확장하는 채널이며, 본 보고서 작성 시점에 PG 심사를 통과한
              초기 단계다 (자세한 매출은 1-4 매출 구조 슬라이드 참조).
            </p>
          </motion.div>
        </div>

        {/* Critical: Space Structure & Renewal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-gradient-to-br from-amber-950/50 via-slate-900/60 to-rose-950/40 rounded-2xl p-6 border border-amber-700/50 ring-1 ring-amber-800/30 shadow-lg shadow-amber-900/10"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <div className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
              CRITICAL · 공간 구조 = 운명 공동체
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">
            {/* Space diagram */}
            <div className="md:col-span-3">
              <div className="bg-slate-950/60 rounded-xl border border-slate-800/60 p-4">
                <div className="text-xs text-slate-500 mb-2 text-center">
                  같은 건물 · 30평 공간 · 15평씩 분리 운영
                </div>
                <div className="flex items-stretch gap-2 h-28">
                  <div className="flex-1 bg-blue-950/50 border border-blue-700/50 rounded-lg flex flex-col items-center justify-center">
                    <div className="text-xs text-blue-300 uppercase tracking-wider">15평</div>
                    <div className="text-base text-slate-200 font-bold mt-1">악센트 아이디</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">오프라인 스토어</div>
                  </div>
                  <div className="flex items-center text-amber-400 text-2xl px-1">⇌</div>
                  <div className="flex-1 bg-rose-950/40 border border-rose-700/50 rounded-lg flex flex-col items-center justify-center">
                    <div className="text-xs text-rose-300 uppercase tracking-wider">15평</div>
                    <div className="text-base text-slate-200 font-bold mt-1">악센트 와우</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">생일 이벤트</div>
                  </div>
                </div>
                <div className="text-[11px] text-amber-300/80 text-center mt-3 leading-relaxed">
                  <span className="font-semibold">두 서비스는 공간적으로 운명 공동체</span> ·
                  하나만 따로 종료하는 것은 <span className="font-semibold">불가능</span>
                </div>
              </div>
            </div>

            {/* Renewal countdown */}
            <div className="md:col-span-2">
              <div className="bg-slate-950/60 rounded-xl border border-amber-700/50 p-4 h-full flex flex-col justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-amber-300/80 mb-1">
                    재계약 시점
                  </div>
                  <div className="text-2xl font-bold text-amber-300 font-mono tabular-nums">
                    2026.08.01
                  </div>
                  <div className="text-xs text-slate-400 mt-1">1년 단위 재계약 도래</div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-800/60">
                  <div className="text-[11px] text-slate-500 mb-1.5">현재 시점부터</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-xl font-bold text-rose-300 font-mono tabular-nums">
                      D-111
                    </div>
                    <div className="text-[11px] text-slate-500">04.12 기준</div>
                  </div>
                  <div className="text-[11px] text-amber-300/70 mt-1.5 leading-snug">
                    런웨이 4개월과 정확히 겹치는 분기점
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
