'use client';

import { motion } from 'framer-motion';

export default function BizPlanStrategySlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">사업계획서 전략</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-blue-500/30 text-center"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">분산 투자</h3>
              <p className="text-gray-400 text-sm">4개 법인으로 리스크 분산</p>
              <p className="text-blue-400 text-sm mt-2">한 곳 탈락해도 다른 곳 가능</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-emerald-500/30 text-center"
            >
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">시너지 우선</h3>
              <p className="text-gray-400 text-sm">사업 간 연계 가능한 과제</p>
              <p className="text-emerald-400 text-sm mt-2">효율적 자원 활용</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-purple-500/30 text-center"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">일정 관리</h3>
              <p className="text-gray-400 text-sm">마감일 기준 우선순위</p>
              <p className="text-purple-400 text-sm mt-2">체계적 제출 일정</p>
            </motion.div>
          </div>

          {/* 성공 기준 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-500/20"
          >
            <h4 className="text-lg font-semibold text-white mb-4 text-center">1분기 성공 기준</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-emerald-400">4건</div>
                <div className="text-gray-400 text-sm">제출 목표</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">1건+</div>
                <div className="text-gray-400 text-sm">최종 합격</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">2억</div>
                <div className="text-gray-400 text-sm">목표 금액</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">100%</div>
                <div className="text-gray-400 text-sm">서류 완성도</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
