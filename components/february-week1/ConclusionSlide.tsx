'use client';

import { motion } from 'framer-motion';

export default function ConclusionSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-rose-900/20 to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-12">
            2026년 1분기 목표
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* 개발팀 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/60 rounded-2xl p-8 border border-cyan-500/30"
            >
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">개발팀</h3>
              <p className="text-2xl font-bold text-white">
                "영업 들어오는<br />개발건 전량 처리"
              </p>
            </motion.div>

            {/* 사업기획팀 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-8 border border-emerald-500/30"
            >
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">사업기획팀</h3>
              <p className="text-2xl font-bold text-white">
                "2억원<br />사업계획서 합격"
              </p>
            </motion.div>

            {/* 제품 전략 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/60 rounded-2xl p-8 border border-orange-500/30"
            >
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">제품 전략</h3>
              <p className="text-2xl font-bold text-white">
                "케이스가<br />곧 브랜드"
              </p>
            </motion.div>
          </div>

          {/* 마무리 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl p-8 border border-rose-500/30"
          >
            <p className="text-xl text-gray-300 mb-4">네안데르 개발팀</p>
            <h2 className="text-3xl font-bold text-white">
              함께 성장하는 <span className="text-rose-400">2026년</span>을 만들어갑시다
            </h2>
          </motion.div>

          {/* 날짜 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-gray-500 mt-8"
          >
            2026년 2월 2일 | 2월 1주차 회의록
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
