'use client';

import { motion } from 'framer-motion';

export default function AIReligionReactionSlide() {
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
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
              Team Response
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              AI교 컨셉 반응
            </h2>
            <p className="text-gray-400 mt-2">팀원들의 긍정적 반응과 구체적 계획 논의</p>
          </div>

          {/* Positive Reaction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-2xl p-6 mb-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎉</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">팀원 반응: 긍정적</h3>
                <span className="text-cyan-400 text-sm">AI교 아이디어에 대한 기대감</span>
              </div>
            </div>
            <p className="text-gray-300">
              AI 예술 집단으로서의 새로운 방향성에 팀원들이 열정적으로 반응했습니다.
              구체적인 실행 계획 논의가 이어졌습니다.
            </p>
          </motion.div>

          {/* Plans Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 text-center">논의된 구체적 계획</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 부동산 */}
              <div className="bg-dark-light/50 border border-purple-500/30 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🏢</span>
                  </div>
                  <span className="text-white font-medium">부동산</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">보증금</span>
                    <span className="text-purple-400 font-bold">500만원</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">월세</span>
                    <span className="text-purple-400 font-bold">50만원</span>
                  </div>
                </div>
              </div>

              {/* 포터 */}
              <div className="bg-dark-light/50 border border-orange-500/30 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🚚</span>
                  </div>
                  <span className="text-white font-medium">포터 트럭</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">구매 비용</span>
                    <span className="text-orange-400 font-bold">1,500만원</span>
                  </div>
                  <div className="text-gray-500 text-xs mt-2">
                    이동형 전시/판매 공간
                  </div>
                </div>
              </div>

              {/* 정연이 */}
              <div className="bg-dark-light/50 border border-emerald-500/30 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">👩‍💼</span>
                  </div>
                  <span className="text-white font-medium">정연이 채용</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">월급</span>
                    <span className="text-emerald-400 font-bold">150만원+</span>
                  </div>
                  <div className="text-gray-500 text-xs mt-2">
                    운영 인력 확충
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Warning Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-dark/50 border border-amber-500/30 rounded-xl p-4 text-center"
          >
            <p className="text-amber-400">
              <span className="text-lg mr-2">⚡</span>
              하지만 잠깐, 이 계획들을 냉정하게 다시 살펴볼 필요가 있습니다...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
