'use client';

import { motion } from 'framer-motion';

export default function RevenueQualitySlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.06),transparent_60%)]" />

      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-emerald-400 text-sm font-medium tracking-wider">SECTION 2-2 · WHY RECURRING REVENUE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
            외주 500만 원보다 학원 5개가 중요한 이유
          </h2>
          <p className="text-slate-400 text-base">
            반복 매출 구조가 회사의 <span className="text-emerald-400 font-semibold">생존과 성장</span>을 결정한다
          </p>
        </motion.div>

        {/* Main comparison - 외주 vs 학원 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {/* Left: 외주 500만원 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-slate-900/60 rounded-2xl border border-red-800/30 overflow-hidden"
          >
            <div className="bg-red-950/30 px-5 py-3 border-b border-red-800/30">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-red-300">외주 개발 1건</h3>
                <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-red-900/50 text-red-300 border border-red-700/40">
                  일회성
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-100 mt-1 font-mono">500만 원</p>
            </div>
            <div className="p-5 space-y-3">
              {[
                { label: '1개월 후', value: '0원', desc: '프로젝트 종료 → 매출 소멸' },
                { label: '6개월 누적', value: '500만 원', desc: '추가 수주 없으면 그대로' },
                { label: '12개월 누적', value: '500만 원', desc: '다음 건을 또 찾아야 함' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="flex items-center justify-between bg-slate-800/40 rounded-lg px-3 py-2"
                >
                  <div>
                    <span className="text-xs text-slate-500">{item.label}</span>
                    <p className="text-[10px] text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                  <span className="text-sm font-mono font-bold text-red-400">{item.value}</span>
                </motion.div>
              ))}
              <div className="pt-2 border-t border-slate-700/40">
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  매달 영업해서 새 프로젝트를 따야만 매출 유지. <span className="text-red-300">쳇바퀴 구조.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: 학원 5개 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-slate-900/60 rounded-2xl border border-emerald-700/30 overflow-hidden"
          >
            <div className="bg-emerald-950/40 px-5 py-3 border-b border-emerald-700/30">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-emerald-300">학원 5개 영업</h3>
                <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-900/50 text-emerald-300 border border-emerald-700/40">
                  반복 매출
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-100 mt-1 font-mono">월 25만 원 <span className="text-sm text-slate-400 font-normal">(5개 × 5만)</span></p>
            </div>
            <div className="p-5 space-y-3">
              {[
                { label: '1개월 후', value: '25만 원', desc: '아무것도 안 해도 자동 입금' },
                { label: '6개월 누적', value: '150만 원', desc: '+ 추가 영업분 누적' },
                { label: '12개월 누적', value: '300만 원', desc: '해지 없으면 계속 쌓임' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  className="flex items-center justify-between bg-emerald-950/20 rounded-lg px-3 py-2"
                >
                  <div>
                    <span className="text-xs text-slate-400">{item.label}</span>
                    <p className="text-[10px] text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                  <span className="text-sm font-mono font-bold text-emerald-400">{item.value}</span>
                </motion.div>
              ))}
              <div className="pt-2 border-t border-slate-700/40">
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  한 번 영업하면 매달 자동 반복. <span className="text-emerald-300">쌓이는 구조.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section - 복리 효과 + 결론 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* 복리 효과 시뮬레이션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="lg:col-span-1 bg-slate-900/60 rounded-2xl p-4 border border-slate-700/40"
          >
            <h4 className="text-xs font-semibold text-slate-400 mb-3">매달 학원 5개씩 추가하면?</h4>
            <div className="space-y-1.5">
              {[
                { month: '1개월', count: 5, mrr: 25 },
                { month: '3개월', count: 15, mrr: 75 },
                { month: '6개월', count: 30, mrr: 150 },
                { month: '12개월', count: 60, mrr: 300 },
              ].map((row, i) => (
                <motion.div
                  key={row.month}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + i * 0.08, duration: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-[10px] text-slate-500 w-12">{row.month}</span>
                  <div className="flex-1 bg-slate-800/40 rounded-full h-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(row.mrr / 300) * 100}%` }}
                      transition={{ delay: 1 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full flex items-center justify-end px-1.5"
                    >
                      {row.mrr >= 75 && (
                        <span className="text-[8px] font-mono font-bold text-white">{row.mrr}만</span>
                      )}
                    </motion.div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 w-10 text-right">{row.count}개</span>
                </motion.div>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 mt-2">
              12개월 뒤 MRR <span className="text-emerald-400 font-mono font-bold">300만 원</span> = 연 <span className="text-emerald-400 font-mono font-bold">3,600만 원</span>
            </p>
          </motion.div>

          {/* 글로벌 근거 - 삼성 vs 구글 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="lg:col-span-1 bg-gradient-to-b from-amber-950/30 to-slate-900/60 rounded-2xl p-4 border border-amber-800/30"
          >
            <h4 className="text-xs font-semibold text-amber-300 mb-2">글로벌에서도 같은 원리</h4>
            <div className="space-y-2">
              <div className="bg-slate-800/40 rounded-lg p-2.5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-blue-400 font-medium">삼성</span>
                  <span className="text-[10px] text-slate-500">매출 300조 · 시총 400조</span>
                </div>
                <p className="text-[10px] text-slate-400">반도체·스마트폰 → 대박 매출, 낮은 반복성</p>
              </div>
              <div className="bg-emerald-950/30 rounded-lg p-2.5 border border-emerald-800/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-emerald-400 font-medium">구글</span>
                  <span className="text-[10px] text-slate-500">매출 120조 · 시총 3,000조</span>
                </div>
                <p className="text-[10px] text-slate-400">광고·클라우드 → 자동 반복 매출 85%</p>
              </div>
            </div>
            <p className="text-[10px] text-amber-300/80 mt-2 leading-relaxed">
              매출 2.5배 적은 구글이 시총은 <span className="font-bold">7.5배</span> 높다.
              시장은 <span className="font-semibold text-amber-200">"매출의 질"</span>에 돈을 건다.
            </p>
          </motion.div>

          {/* 결론 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="lg:col-span-1 bg-gradient-to-b from-emerald-950/50 to-cyan-950/30 rounded-2xl p-4 border border-emerald-600/40"
          >
            <h4 className="text-sm font-bold text-emerald-200 mb-3">결론</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <span className="text-red-400 text-xs mt-0.5">&#10005;</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  외주 500만 원 = <span className="text-red-300 font-medium">이번 달만 살아남는 돈</span>
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-xs mt-0.5">&#10003;</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  학원 5개 구독 = <span className="text-emerald-300 font-medium">매달 쌓이는 반복 매출 엔진</span>
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-emerald-700/30">
                <p className="text-sm text-slate-100 font-semibold leading-relaxed">
                  외주로 <span className="text-red-300">대박 한 방</span> 노리는 것보다,
                  학원 AI 구독을 <span className="text-emerald-300">꾸준히 쌓는 것</span>이
                  우리 회사의 가치를 만드는 <span className="text-amber-300">유일한 길</span>이다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
