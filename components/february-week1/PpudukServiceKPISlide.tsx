'use client';

import { motion } from 'framer-motion';

export default function PpudukServiceKPISlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-orange-400 text-sm">뿌덕 서비스</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-8">뿌덕 서비스 개발 KPI</h2>

          {/* 핵심 목표 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl p-8 border border-orange-500/30 mb-8 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">분기별 프로그램 1개 개발</h3>
            <p className="text-gray-400">1분기 목표: 새로운 프로그램 1개 출시</p>
          </motion.div>

          {/* 차별화 포인트 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/60 rounded-xl p-6 border border-gray-700 text-center"
            >
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❌</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">단순 AI 추천</h4>
              <p className="text-gray-400 text-sm">넘어서기</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-xl p-6 border border-orange-500/30 text-center"
            >
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">확실한 차별화</h4>
              <p className="text-orange-400 text-sm">"다른 프로그램" 체감</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/60 rounded-xl p-6 border border-emerald-500/30 text-center"
            >
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎮</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">즐길 수 있는</h4>
              <p className="text-emerald-400 text-sm">재밌는 프로그램</p>
            </motion.div>
          </div>

          {/* 목표 달성 기준 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 bg-dark-light/40 rounded-xl p-6 border border-dashed border-gray-600"
          >
            <h4 className="text-lg font-semibold text-white mb-4">1분기 성공 기준</h4>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">1개</div>
                <div className="text-gray-400 text-sm">신규 프로그램 출시</div>
              </div>
              <div className="h-12 w-px bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">100+</div>
                <div className="text-gray-400 text-sm">사용자 테스트</div>
              </div>
              <div className="h-12 w-px bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">4.0+</div>
                <div className="text-gray-400 text-sm">만족도 점수</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
