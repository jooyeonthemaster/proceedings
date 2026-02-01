'use client';

import { motion } from 'framer-motion';

export default function ProductLineupSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">제품 라인업 확장</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 기존 라인업 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-gray-600"
            >
              <h3 className="text-xl font-semibold text-gray-400 mb-4">기존 라인업</h3>
              <div className="space-y-4">
                <div className="bg-dark/50 rounded-lg p-4 flex items-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">💧</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">10ml</p>
                    <p className="text-gray-500 text-sm">휴대용 향수</p>
                  </div>
                </div>
                <div className="bg-dark/50 rounded-lg p-4 flex items-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🧴</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">50ml</p>
                    <p className="text-gray-500 text-sm">정식 사이즈</p>
                  </div>
                </div>
                <div className="bg-dark/50 rounded-lg p-4 flex items-center">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🌱</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">뿌덕 디퓨저</p>
                    <p className="text-gray-500 text-sm">공간 향기</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 신규 추가 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-orange-500/30"
            >
              <h3 className="text-xl font-semibold text-orange-400 mb-4">신규 추가</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">📝</span>
                    <div>
                      <p className="text-white font-semibold">시향지 세트</p>
                      <p className="text-orange-400 font-bold">5,000원</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">AI 추천 향 체험용</p>
                  <p className="text-gray-500 text-sm mt-1">구매 전 테스트 가능</p>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">🔑</span>
                    <div>
                      <p className="text-white font-semibold">향수 키링</p>
                      <p className="text-cyan-400">커스텀 케이스</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">30개 파츠 디자인</p>
                  <p className="text-gray-500 text-sm mt-1">3D 커스터마이징</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 핵심 메시지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-500/20 text-center"
          >
            <p className="text-lg text-gray-300">
              진입 장벽을 낮추고, <span className="text-cyan-400 font-semibold">체험 → 구매</span> 전환율 향상
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
