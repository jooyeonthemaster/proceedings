'use client';

import { motion } from 'framer-motion';

export default function PpudeokV2Slide() {
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
              In Progress
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              🎁 뿌덕 버전 2 개발
            </h2>
            <p className="text-gray-400 mt-2">온라인 쇼핑몰 구축 진행</p>
          </div>

          {/* Main Card */}
          <div className="bg-gradient-to-br from-orange-500/10 via-dark-light to-amber-500/10 border border-orange-500/30 rounded-3xl p-8">
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

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark/50 rounded-2xl p-6 mb-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span>🛒</span> 핵심 개발 내용
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-dark/50 rounded-xl p-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">온라인 쇼핑몰</div>
                    <div className="text-gray-400 text-sm">전자상거래 시스템 구축</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-dark/50 rounded-xl p-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">상품 관리</div>
                    <div className="text-gray-400 text-sm">재고 및 주문 시스템</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-dark/50 rounded-xl p-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">결제 시스템</div>
                    <div className="text-gray-400 text-sm">온라인 결제 연동</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-dark/50 rounded-xl p-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">관리자 대시보드</div>
                    <div className="text-gray-400 text-sm">통계 및 관리 기능</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Progress Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-orange-400 font-medium">현재 개발 진행 중</span>
              </div>
            </motion.div>
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400">
              뿌덕 V2를 통해 <span className="text-orange-400 font-medium">온라인 쇼핑몰 기능</span>을
              <span className="text-white"> 완전히 새롭게 구축</span>하고 있습니다
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
