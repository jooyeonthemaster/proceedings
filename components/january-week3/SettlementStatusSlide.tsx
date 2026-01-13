'use client';

import { motion } from 'framer-motion';

export default function SettlementStatusSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
              Settlement Status
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              정산 현황
            </h2>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {/* 잡플래닛 - 완료 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/30 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🌐</span>
                    <h3 className="text-xl font-bold text-white">잡플래닛 외국인 구직 사이트</h3>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">
                      정산 완료
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">
                    외국인 대상 구직 플랫폼 개발 프로젝트
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">1월 9일 정산 완료</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-emerald-400">완료</div>
                  <div className="text-gray-500 text-sm">1월 9일</div>
                </div>
              </div>
            </motion.div>

            {/* 안산 포토부스 & 지도 - 완료 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/30 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">📸</span>
                    <h3 className="text-xl font-bold text-white">안산 포토부스 & 지도 개발</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                      정산 완료
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">
                    안산 지역 포토부스 및 지도 앱 개발
                  </p>
                  <div className="flex items-center gap-2 text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">1월 13일 정산 완료</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-400">완료</div>
                  <div className="text-gray-500 text-sm">1월 13일</div>
                </div>
              </div>
            </motion.div>

            {/* 김기홍 화환 - 미정산 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/30 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">💐</span>
                    <h3 className="text-xl font-bold text-white">김기홍 화환 페이지 개발</h3>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full animate-pulse">
                      미정산
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">
                    디지털 화환 페이지 개발 프로젝트
                  </p>

                  {/* 금액 상세 */}
                  <div className="bg-dark/50 rounded-xl p-4 mt-4">
                    <div className="text-lg font-bold text-white mb-3">총 금액: <span className="text-orange-400">800만원</span></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-300">김제연: <span className="text-purple-400 font-bold">300만원</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                        <span className="text-gray-300">네안데르: <span className="text-cyan-400 font-bold">500만원</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-orange-400">1월 중</div>
                  <div className="text-orange-300 text-sm font-medium">정산 필수!</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-dark-light/50 px-6 py-3 rounded-full border border-gray-700">
              <span className="text-emerald-400 font-bold">완료 2건</span>
              <span className="text-gray-500">|</span>
              <span className="text-orange-400 font-bold">미정산 1건 (800만원)</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
