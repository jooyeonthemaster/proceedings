'use client';

import { motion } from 'framer-motion';

export default function AnnualGoalsSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-emerald-400 text-sm">2026년 연간</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-8">연간 목표</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 뿌덕 프로그램 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-orange-500/30"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">뿌덕 프로그램</h3>
                <span className="text-3xl font-bold text-orange-400">4개</span>
              </div>
              <p className="text-gray-400 mb-4">분기별 1개씩 신규 프로그램 개발</p>
              <div className="flex space-x-2">
                <div className="flex-1 h-2 bg-orange-500/40 rounded-full"></div>
                <div className="flex-1 h-2 bg-orange-500/20 rounded-full"></div>
                <div className="flex-1 h-2 bg-orange-500/20 rounded-full"></div>
                <div className="flex-1 h-2 bg-orange-500/20 rounded-full"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Q1</span>
                <span>Q2</span>
                <span>Q3</span>
                <span>Q4</span>
              </div>
            </motion.div>

            {/* 글로벌 비즈니스 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-blue-500/30"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">글로벌 확장</h3>
                <span className="text-3xl">🌏</span>
              </div>
              <p className="text-gray-400 mb-4">글로벌 비즈니스 진입</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">해외 시장 조사</span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">다국어 지원</span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">해외 결제</span>
              </div>
            </motion.div>

            {/* 고객 데이터 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-cyan-500/30"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">고객 데이터</h3>
                <span className="text-3xl font-bold text-cyan-400">1만명</span>
              </div>
              <p className="text-gray-400 mb-4">고객 데이터 수집 목표</p>
              <div className="w-full bg-dark rounded-full h-3">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full" style={{ width: '10%' }}></div>
              </div>
              <p className="text-gray-500 text-sm mt-2">현재 → 1만명 목표</p>
            </motion.div>

            {/* 자체 알고리즘 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-purple-500/30"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">AI 알고리즘</h3>
                <span className="text-3xl">🧠</span>
              </div>
              <p className="text-gray-400 mb-4">자체 분석 알고리즘 강화</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-red-400 mr-2">현재:</span>
                  <span className="text-gray-300">이미지 기반 추천</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-400 mr-2">목표:</span>
                  <span className="text-gray-300">만족도 기반 알고리즘</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
