'use client';

import { motion } from 'framer-motion';

export default function CasePowerSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-2 text-center">서비스 선순환 구조</h2>
          <p className="text-gray-400 text-center mb-8">향을 가지고 노는 사이트</p>

          {/* 선순환 사이클 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Step 1: 라포 형성 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-cyan-500/30 text-center relative"
            >
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">1. 라포 형성</h3>
              <p className="text-cyan-400 text-sm mb-2">AI로 향 추천</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>취향 분석</p>
                <p>이미지 분석</p>
                <p>사주 분석</p>
              </div>
              <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 text-2xl text-gray-600">→</div>
            </motion.div>

            {/* Step 2: 소장욕구 자극 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-purple-500/30 text-center relative"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">2. 소장욕구</h3>
              <p className="text-purple-400 text-sm mb-2">케이스 커스터마이징</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>모듈화 설계</p>
                <p>팔/다리/몸통</p>
                <p>온라인 조합</p>
              </div>
              <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 text-2xl text-gray-600">→</div>
            </motion.div>

            {/* Step 3: 구매 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-orange-500/30 text-center relative"
            >
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">3. 구매</h3>
              <p className="text-orange-400 text-sm mb-2">향 + 케이스</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>나만의 조합</p>
                <p>시그니처 완성</p>
                <p>배송</p>
              </div>
              <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 text-2xl text-gray-600">→</div>
            </motion.div>

            {/* Step 4: 피드백 & 재구매 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-emerald-500/30 text-center"
            >
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">4. 피드백</h3>
              <p className="text-emerald-400 text-sm mb-2">AI 새 레시피 추천</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>만족도 기록</p>
                <p>개선 레시피</p>
                <p>재구매 유도</p>
              </div>
            </motion.div>
          </div>

          {/* 시그니처 정의 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl p-6 border border-orange-500/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-orange-400 mb-2">시그니처 (서비스 정체성)</h4>
                <p className="text-white text-xl font-bold">AI 분석 + 케이스 커스터마이징</p>
                <p className="text-gray-400 text-sm mt-2">= 우리만의 경험</p>
              </div>
              <div className="text-center border-t md:border-t-0 md:border-l border-gray-700 pt-4 md:pt-0 md:pl-6">
                <h4 className="text-lg font-semibold text-amber-400 mb-2">시그니처 상품</h4>
                <p className="text-white text-xl font-bold">트렌드 & 밈 상품화</p>
                <p className="text-gray-400 text-sm mt-2">= 볼륨업을 위한 라인업</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
