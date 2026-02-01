'use client';

import { motion } from 'framer-motion';

export default function AIProgramStrategySlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">AI 프로그램 전략</h2>

          {/* 핵심 포지셔닝 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-500/30 mb-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              AI = <span className="text-cyan-400">유입 수단</span> + <span className="text-blue-400">아이덴티티</span>
            </h3>
            <p className="text-gray-400">재밌는 프로그램으로 사이트 방문 유도</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 데이터 수집 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/60 rounded-xl p-6 border border-purple-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-white">데이터 수집</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span className="text-gray-300">다양한 향 조합별 만족도 기록</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span className="text-gray-300">지속적 업그레이드</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span className="text-gray-300">scentalytics.com 참고</span>
                </li>
              </ul>
            </motion.div>

            {/* 피드백 기능 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-xl p-6 border border-emerald-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-white">마이페이지 피드백</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span className="text-gray-300">구매 후 피드백 기록</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span className="text-gray-300">AI 개선 향 제공</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span className="text-gray-300">개인화 추천 강화</span>
                </li>
              </ul>
            </motion.div>

            {/* AI 커스터마이징 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 bg-dark-light/60 rounded-xl p-6 border border-orange-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-white">AI 자동 커스터마이징</h3>
              </div>
              <p className="text-gray-400 mb-4">AI가 커스터마이징 파츠를 알아서 조합</p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-lg">향 추천</span>
                <span className="text-2xl text-gray-600">+</span>
                <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-lg">케이스 추천</span>
                <span className="text-2xl text-gray-600">=</span>
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-lg font-semibold">완벽한 조합</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
