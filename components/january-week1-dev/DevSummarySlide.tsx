'use client';

import { motion } from 'framer-motion';

export default function DevSummarySlide() {
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
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Summary
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              📋 1월 1주차 요약
            </h2>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 정산 예정 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <span>💰</span> 정산 예정
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  잡플래닛 외국인 구직 사이트 (1/9 잔금)
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  안산 포토부스
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  안산 지도앱 개발
                </li>
              </ul>
            </motion.div>

            {/* 신규 프로젝트 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/30 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-pink-400 mb-4 flex items-center gap-2">
                <span>🚀</span> 신규 프로젝트
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  디지털 화환 (800만원, 1월 내 완료)
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  담당: 김제연 (300만원 지급)
                </li>
              </ul>
            </motion.div>

            {/* 진행 중 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-orange-400 mb-4 flex items-center gap-2">
                <span>🔧</span> 진행 중
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  뿌덕 V2 개발
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  온라인 쇼핑몰 구축
                </li>
              </ul>
            </motion.div>

            {/* 인력 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <span>👥</span> 인력 현황
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  김제연 (신규 프리랜서 합류)
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  수습기간 중 추가 업무 배정 가능
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Action Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-dark-light/30 border border-gray-700 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4">📌 이번 주 핵심 액션</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-dark/50 rounded-xl p-4">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-sm">1</span>
                </div>
                <span className="text-gray-300">1/9 잔금 확인</span>
              </div>
              <div className="flex items-center gap-3 bg-dark/50 rounded-xl p-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">2</span>
                </div>
                <span className="text-gray-300">안산 프로젝트 정산</span>
              </div>
              <div className="flex items-center gap-3 bg-dark/50 rounded-xl p-4">
                <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center">
                  <span className="text-pink-400 font-bold text-sm">3</span>
                </div>
                <span className="text-gray-300">김제연 업무 배정</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
