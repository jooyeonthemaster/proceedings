'use client';

import { motion } from 'framer-motion';

export default function Q1KPIResultSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Section 01</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-3">
              1분기 KPI 결산
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-cyan-600 mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* 지원사업 KPI */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/70 rounded-2xl p-7 border border-red-900/40"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-200">지원사업 수주</h3>
                <span className="px-3 py-1 bg-red-950/60 border border-red-800/50 rounded-full text-xs text-red-300">
                  미달성
                </span>
              </div>

              <div className="mb-5">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-slate-500 text-sm">목표</span>
                  <span className="text-slate-300 text-lg font-semibold">2억 원</span>
                </div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-slate-500 text-sm">실적</span>
                  <span className="text-red-400 text-lg font-semibold">1,000만 원</span>
                </div>
                <div className="w-full bg-slate-800/60 rounded-full h-2 mt-3">
                  <div
                    className="bg-gradient-to-r from-red-700 to-red-500 h-2 rounded-full"
                    style={{ width: '5%' }}
                  ></div>
                </div>
                <div className="text-right text-xs text-slate-500 mt-1">달성률 5%</div>
              </div>

              <div className="text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
                Q1 내 다수의 지원사업에 지원했으나 대부분 탈락. 분기 단위 목표는 미달성으로 마감.
              </div>
            </motion.div>

            {/* 개발팀 KPI */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/70 rounded-2xl p-7 border border-emerald-900/40"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-200">개발팀 KPI</h3>
                <span className="px-3 py-1 bg-emerald-950/60 border border-emerald-800/50 rounded-full text-xs text-emerald-300">
                  주요 항목 달성
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-0.5">✓</span>
                  <div>
                    <div className="text-slate-300 text-sm font-medium">뿌덕 시즌 3 개발 완료</div>
                    <div className="text-slate-500 text-xs">시즌 콘텐츠 라인업 정상 출시</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-0.5">✓</span>
                  <div>
                    <div className="text-slate-300 text-sm font-medium">외주 개발 정산 880만 원</div>
                    <div className="text-slate-500 text-xs">진행 건 정상 마무리</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-0.5">✓</span>
                  <div>
                    <div className="text-slate-300 text-sm font-medium">Quiver AI 슬라이드 / 데모 정비</div>
                    <div className="text-slate-500 text-xs">대외 발표 자료 안정화</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-0.5">✓</span>
                  <div>
                    <div className="text-slate-300 text-sm font-medium">지원사업 기술 자료 풀가동</div>
                    <div className="text-slate-500 text-xs">제안서·발표자료·데모 다건 대응</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 bg-slate-900/40 rounded-xl p-5 border border-slate-800/50"
          >
            <p className="text-slate-400 text-sm leading-relaxed text-center">
              <span className="text-slate-300 font-semibold">정리:</span>{' '}
              지원사업 매출 KPI는 미달성, 개발팀 산출물 KPI는 정상 달성. 분기 단위 손익보다{' '}
              <span className="text-emerald-300/90">남은 하반기 수주 기회</span>로 관점을 전환합니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
