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
          <h2 className="text-4xl font-bold text-white mb-2">시그니처 상품 전략</h2>
          <p className="text-gray-400 mb-8">밈을 상품화하다 - 앤디 워홀처럼</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 두쫀쿠 디퓨저 이미지 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-pink-500/30"
            >
              <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
                <img
                  src="/dujjonku-1.avif"
                  alt="두쫀쿠 디퓨저"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">두쫀쿠 디퓨저</h3>
              <p className="text-pink-400 text-sm mb-2">2026년 밈 시그니처 상품</p>
              <p className="text-gray-400 text-sm">과열된 밈을 향으로 표현 - 그 순간을 추억하다</p>
            </motion.div>

            {/* 밈 상품화 전략 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {/* AI 프로그램 연계 */}
              <div className="bg-dark-light/60 rounded-xl p-5 border border-cyan-500/30">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🎮</span>
                  <div>
                    <h4 className="text-lg font-semibold text-white">AI 프로그램 연계</h4>
                    <p className="text-cyan-400 text-sm">내 두쫀쿠 유형검사</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">두쫀쿠에 임하는 나의 자세... 성향에 맞는 향 추천</p>
                <p className="text-gray-500 text-xs mt-2">푸망 스타일로 프로그램 양산 가능</p>
              </div>

              {/* 밈 카테고리 */}
              <div className="bg-dark-light/60 rounded-xl p-5 border border-purple-500/30">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🔥</span>
                  <div>
                    <h4 className="text-lg font-semibold text-white">상품 카테고리: 밈</h4>
                    <p className="text-purple-400 text-sm">시대의 흐름을 담다</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs">두쫀쿠</span>
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs">스크류바</span>
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs">다음 밈?</span>
                </div>
              </div>

              {/* 브랜드 가치 */}
              <div className="bg-dark-light/60 rounded-xl p-5 border border-amber-500/30">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🎨</span>
                  <div>
                    <h4 className="text-lg font-semibold text-white">브랜드 가치</h4>
                    <p className="text-amber-400 text-sm">2026년 밈 총결산</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">밈의 축적 → 예술적 아카이브 → 브랜드 아이덴티티</p>
              </div>
            </motion.div>
          </div>

          {/* 핵심 인사이트 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-4 border border-pink-500/20 text-center"
          >
            <p className="text-gray-300">
              밈을 계속 상품화하고, 향으로 건드리는 과정이 모이면 → <span className="text-pink-400 font-semibold">앤디 워홀처럼 예술이 된다</span>
            </p>
          </motion.div>

          {/* 참고자료 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4 flex justify-center gap-4 text-xs"
          >
            <a
              href="https://www.instagram.com/reel/DRzAxVzj-6o/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-400 transition-colors"
            >
              참고: 두쫀쿠 릴스 #1
            </a>
            <a
              href="https://www.instagram.com/reel/DSQBnLKEthW/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-400 transition-colors"
            >
              참고: 두쫀쿠 릴스 #2
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
