'use client';

import { motion } from 'framer-motion';

export default function BrandStrategySlide() {
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
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Brand Strategy
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              브랜드 전략
            </h2>
            <p className="text-gray-400 mt-2">AI × 향수 = 미친 짓의 조합</p>
          </div>

          {/* Strategy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* AI교 활용 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⛪</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI교 컨셉</h3>
                  <span className="text-purple-400 text-sm">마케팅 도구로 활용</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 bg-dark/50 rounded-lg p-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">사회 비판적 메시지</span>
                </div>
                <div className="flex items-center gap-2 bg-dark/50 rounded-lg p-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">바이럴 잠재력</span>
                </div>
                <div className="flex items-center gap-2 bg-dark/50 rounded-lg p-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">브랜드 스토리텔링</span>
                </div>
              </div>
            </motion.div>

            {/* 향수 판매 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🧴</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">향수 판매</h3>
                  <span className="text-cyan-400 text-sm">실제 수익 창출</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 bg-dark/50 rounded-lg p-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">AI 분석 기반 추천</span>
                </div>
                <div className="flex items-center gap-2 bg-dark/50 rounded-lg p-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">개인화된 경험</span>
                </div>
                <div className="flex items-center gap-2 bg-dark/50 rounded-lg p-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">반복 구매 유도</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Synergy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-light/50 border border-gray-700 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 text-center">시너지 구조</h3>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl px-6 py-4 text-center">
                <div className="text-purple-400 font-medium">AI교 콘텐츠</div>
                <div className="text-gray-500 text-xs mt-1">바이럴 & 화제성</div>
              </div>
              <span className="text-gray-600 text-2xl">→</span>
              <div className="bg-amber-500/20 border border-amber-500/30 rounded-xl px-6 py-4 text-center">
                <div className="text-amber-400 font-medium">관심 유입</div>
                <div className="text-gray-500 text-xs mt-1">트래픽 증가</div>
              </div>
              <span className="text-gray-600 text-2xl">→</span>
              <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-xl px-6 py-4 text-center">
                <div className="text-cyan-400 font-medium">향수 구매</div>
                <div className="text-gray-500 text-xs mt-1">수익 창출</div>
              </div>
              <span className="text-gray-600 text-2xl">→</span>
              <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl px-6 py-4 text-center">
                <div className="text-emerald-400 font-medium">팬덤 형성</div>
                <div className="text-gray-500 text-xs mt-1">재구매 & 성장</div>
              </div>
            </div>
          </motion.div>

          {/* Key Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-400">
              AI교는 <span className="text-purple-400">브랜드 인지도</span>를 위한 도구,
              <span className="text-cyan-400 ml-1">향수 판매</span>가 실제 수익 엔진
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
