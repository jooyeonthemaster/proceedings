'use client';

import { motion } from 'framer-motion';

export default function PpudiV2ProgressSlide() {
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
            <span className="text-orange-400 text-sm font-medium tracking-wider uppercase">
              In Development
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              뿌디 V2 개발 현황
            </h2>
            <p className="text-gray-400 mt-2">핵심 프로그램 본격 개발 진행</p>
          </div>

          {/* Version Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gray-700/50 rounded-xl px-6 py-3 text-center">
                <div className="text-gray-500 text-sm">이전</div>
                <div className="text-xl font-bold text-gray-400">V1</div>
              </div>
              <div className="text-2xl text-gray-600">→</div>
              <div className="bg-orange-500/20 border border-orange-500/50 rounded-xl px-6 py-3 text-center">
                <div className="text-orange-400 text-sm">현재 개발</div>
                <div className="text-2xl font-bold text-orange-400">V2</div>
              </div>
            </div>
          </motion.div>

          {/* Main Card */}
          <div className="bg-gradient-to-br from-orange-500/10 via-dark-light to-amber-500/10 border border-orange-500/30 rounded-3xl p-8">
            {/* UI 강조 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-6"
            >
              <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                컨셉슈얼한 UI 구현 완료
              </span>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {/* 레퍼럴 기능 */}
              <div className="bg-dark/50 rounded-xl p-4 border border-orange-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🎁</span>
                  </div>
                  <span className="text-white font-medium">레퍼럴 기능</span>
                </div>
                <ul className="text-gray-400 text-sm space-y-1 ml-2">
                  <li>• 추천인 기능</li>
                  <li>• 재구매 할인</li>
                  <li>• 쿠폰 시스템</li>
                </ul>
              </div>

              {/* 분석 결과 저장 */}
              <div className="bg-dark/50 rounded-xl p-4 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">💾</span>
                  </div>
                  <span className="text-white font-medium">분석 결과 저장</span>
                </div>
                <p className="text-gray-400 text-sm ml-2">
                  사용자별 분석 결과 영구 저장 및 관리
                </p>
              </div>

              {/* 마이페이지 */}
              <div className="bg-dark/50 rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">👤</span>
                  </div>
                  <span className="text-white font-medium">마이페이지</span>
                </div>
                <p className="text-gray-400 text-sm ml-2">
                  개인 정보 및 히스토리 관리
                </p>
              </div>

              {/* 주문 접수 */}
              <div className="bg-dark/50 rounded-xl p-4 border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📦</span>
                  </div>
                  <span className="text-white font-medium">주문 접수</span>
                </div>
                <p className="text-gray-400 text-sm ml-2">
                  온라인 주문 및 결제 시스템
                </p>
              </div>

              {/* 관리자 페이지 */}
              <div className="bg-dark/50 rounded-xl p-4 border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">⚙️</span>
                  </div>
                  <span className="text-white font-medium">관리자 페이지</span>
                </div>
                <p className="text-gray-400 text-sm ml-2">
                  주문 접수 및 관리 기능
                </p>
              </div>

              {/* 도메인 분리 */}
              <div className="bg-dark/50 rounded-xl p-4 border border-amber-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🌐</span>
                  </div>
                  <span className="text-white font-medium">도메인 분리</span>
                </div>
                <p className="text-gray-400 text-sm ml-2">
                  온/오프라인 페이지 분리
                </p>
              </div>
            </motion.div>
          </div>

          {/* Progress Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 font-medium">핵심 프로그램 개발 진행 중</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
