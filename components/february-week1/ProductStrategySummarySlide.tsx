'use client';

import { motion } from 'framer-motion';

export default function ProductStrategySummarySlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">제품 전략 요약</h2>

          {/* 플로우 다이어그램 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-light/60 rounded-2xl p-8 border border-orange-500/30"
          >
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">🤖</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">AI 프로그램</h3>
                  <p className="text-cyan-400">유입 & 데이터 수집</p>
                </div>
                <div className="text-3xl text-gray-600">↓</div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">커스터마이징</h3>
                  <p className="text-purple-400">케이스 + 향</p>
                </div>
                <div className="text-3xl text-gray-600">↓</div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">시그니처 제품</h3>
                  <p className="text-orange-400">콜라보 & 트렌드</p>
                </div>
                <div className="text-3xl text-gray-600">↓</div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">🔄</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">피드백 루프</h3>
                  <p className="text-emerald-400">AI 알고리즘 개선</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 핵심 키워드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <span className="bg-cyan-500/20 text-cyan-400 px-6 py-3 rounded-full font-semibold">AI 유입</span>
            <span className="bg-purple-500/20 text-purple-400 px-6 py-3 rounded-full font-semibold">커스터마이징</span>
            <span className="bg-orange-500/20 text-orange-400 px-6 py-3 rounded-full font-semibold">콜라보</span>
            <span className="bg-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full font-semibold">피드백</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
