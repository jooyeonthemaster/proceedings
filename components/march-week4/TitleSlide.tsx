'use client';

import { motion } from 'framer-motion';

export default function TitleSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Date Badge */}
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-6 py-2 mb-8">
            <span className="text-emerald-400 font-medium">2026년 3월 4주차 | 3월 25일</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            개발팀, 풀가동 선언
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mb-12">
            지원사업 시즌 마무리 &mdash; 개발·영업·마케팅 전방위 가동
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-emerald-500/30"
            >
              <div className="text-3xl font-bold text-emerald-400">DEV</div>
              <div className="text-gray-400 text-sm mt-1">풀가동 돌입</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-cyan-500/30"
            >
              <div className="text-3xl font-bold text-cyan-400">뿌덕</div>
              <div className="text-gray-400 text-sm mt-1">사이트 개선 중</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-rose-500/30"
            >
              <div className="text-3xl font-bold text-rose-400">MKT</div>
              <div className="text-gray-400 text-sm mt-1">광고 캠페인 요청</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-orange-500/30"
            >
              <div className="text-3xl font-bold text-orange-400">SALES</div>
              <div className="text-gray-400 text-sm mt-1">축제 시즌 영업</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
