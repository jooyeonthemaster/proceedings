'use client';

import { motion } from 'framer-motion';

export default function CollabTrendSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">콜라보 & 트렌드 전략</h2>

          {/* 콜라보 핵심 전략 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-pink-500/30 mb-8"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">🤝</span>
              <div>
                <h3 className="text-2xl font-semibold text-white">콜라보 = 핵심 전략</h3>
                <p className="text-pink-400">케이스티파이 벤치마킹</p>
              </div>
            </div>
            <p className="text-gray-400">다양한 브랜드/크리에이터와 협업하여 한정판 케이스 출시</p>
          </motion.div>

          {/* 트렌드 기반 상품 */}
          <h3 className="text-xl font-semibold text-white mb-4">트렌드 기반 상품 기획</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/60 rounded-xl p-4 border border-cyan-500/30 text-center"
            >
              <div className="text-3xl mb-2">🍫</div>
              <p className="text-white font-semibold">두쫀쿠 향수</p>
              <p className="text-gray-500 text-sm">트렌드 아이템</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-xl p-4 border border-blue-500/30 text-center"
            >
              <div className="text-3xl mb-2">🍦</div>
              <p className="text-white font-semibold">스크류바 향수</p>
              <p className="text-gray-500 text-sm">트렌드 아이템</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/60 rounded-xl p-4 border border-purple-500/30 text-center"
            >
              <div className="text-3xl mb-2">📺</div>
              <p className="text-white font-semibold">@uglyperfume</p>
              <p className="text-gray-500 text-sm">스타일 참고</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-dark-light/60 rounded-xl p-4 border border-orange-500/30 text-center"
            >
              <div className="text-3xl mb-2">🔥</div>
              <p className="text-white font-semibold">시즌 이슈</p>
              <p className="text-gray-500 text-sm">빠른 대응</p>
            </motion.div>
          </div>

          {/* 디퓨저 라인업 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-dark-light/60 rounded-xl p-6 border border-emerald-500/30"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">🌱</span>
              <div>
                <h3 className="text-xl font-semibold text-white">디퓨저 라인업</h3>
                <p className="text-emerald-400">화분 모양 시리즈</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg">시즌별 런칭</span>
              <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg">한정판 디자인</span>
              <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg">콜라보 에디션</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
