'use client';

import { motion } from 'framer-motion';

export default function ProjectStatusSlide() {
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
              Project Status
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              프로젝트 현황 & 정산 예정
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {/* 잡플래닛 외국인 구직 사이트 */}
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
                      개발 완료
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    외국인 대상 구직 플랫폼 개발 프로젝트
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">1월 9일 중 잔금 처리 확답 완료</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-emerald-400">D-Day</div>
                  <div className="text-gray-500 text-sm">1월 9일</div>
                </div>
              </div>
            </motion.div>

            {/* 안산 포토부스 */}
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
                    <h3 className="text-xl font-bold text-white">안산 포토부스</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                      정산 예정
                    </span>
                  </div>
                  <p className="text-gray-400">
                    안산 지역 포토부스 프로젝트 정산
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-400">1월 1주차</div>
                  <div className="text-gray-500 text-sm">정산 진행</div>
                </div>
              </div>
            </motion.div>

            {/* 안산 지도앱 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/30 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🗺️</span>
                    <h3 className="text-xl font-bold text-white">안산 지도앱 개발</h3>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                      정산 예정
                    </span>
                  </div>
                  <p className="text-gray-400">
                    안산 지역 지도 애플리케이션 개발 정산
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-400">1월 1주차</div>
                  <div className="text-gray-500 text-sm">정산 진행</div>
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
            <div className="inline-flex items-center gap-2 bg-dark-light/50 px-6 py-3 rounded-full border border-gray-700">
              <span className="text-gray-400">총</span>
              <span className="text-2xl font-bold text-primary">3건</span>
              <span className="text-gray-400">의 정산이 1월 1주차 중 진행됩니다</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
