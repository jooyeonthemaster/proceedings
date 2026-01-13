'use client';

import { motion } from 'framer-motion';

export default function PpudiV2DomainSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              Domain Separation
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              온/오프라인 도메인 분리
            </h2>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 온라인 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🛒</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">온라인 전용</h3>
                  <span className="text-cyan-400 text-sm">Online Domain</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 bg-dark/50 rounded-lg p-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">온라인 구매 버튼</span>
                </div>
                <div className="flex items-center gap-2 bg-dark/50 rounded-lg p-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-500">피드백 기능 없음</span>
                </div>
                <div className="flex items-center gap-2 bg-dark/50 rounded-lg p-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">분석 결과 바로 구매 연결</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <span className="text-cyan-400 text-sm font-medium">핵심: 구매 전환에 집중</span>
              </div>
            </motion.div>

            {/* 오프라인 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏪</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">오프라인 전용</h3>
                  <span className="text-orange-400 text-sm">Offline Domain</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 bg-dark/50 rounded-lg p-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">피드백 남기기 기능</span>
                </div>
                <div className="flex items-center gap-2 bg-dark/50 rounded-lg p-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">마이페이지에 피드백 반영</span>
                </div>
                <div className="flex items-center gap-2 bg-dark/50 rounded-lg p-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">분석 결과 저장 및 관리</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                <span className="text-orange-400 text-sm font-medium">핵심: 고객 경험 데이터 축적</span>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-light/50 border border-gray-700 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 text-center">개발 일정</h3>

            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-emerald-400 font-bold">1/21</span>
                </div>
                <span className="text-gray-400 text-sm">전체 개발 완료</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-dark/50 rounded-xl">
              <h4 className="text-white font-medium mb-3">남은 작업</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">디테일한 부분 마무리</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">피규어 디퓨저 프로그램 로직</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">퍼스널 분석 프로그램 로직</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">최애 이미지 분석은 완료</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
