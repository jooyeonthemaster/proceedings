'use client';

import { motion } from 'framer-motion';

export default function JeyeonHandoverSlide() {
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
              Handover Success
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              김제연 인수인계 현황
            </h2>
            <p className="text-gray-400 mt-2">프리랜서 개발자 성장 보고</p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 성과 카드 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white">인수인계 성과</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-dark/50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">생각보다 훨씬 수월</div>
                    <div className="text-gray-400 text-sm">빠른 학습 능력</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-dark/50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">90%+</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">디지털 화환 개발</div>
                    <div className="text-gray-400 text-sm">홀로 담당 중</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 기술 역량 카드 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-white">기술 역량 성장</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-dark/50 rounded-xl p-4">
                  <div className="text-sm text-gray-400 mb-2">외부 API 활용 능숙</div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">Google Gemini API</span>
                    <span className="text-gray-500">→</span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">Higgsfield API</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    API 문서 확인 후 스스로 연동 작업 진행
                  </p>
                </div>

                <div className="bg-dark/50 rounded-xl p-4">
                  <div className="text-sm text-gray-400 mb-2">노하우 공유 진행 시</div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">김주연 수준</span>
                    <span className="text-gray-500">으로</span>
                    <span className="text-emerald-400 font-bold">성장 예상</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <div className="bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 border border-gray-700 rounded-2xl p-6 text-center">
              <div className="text-lg text-gray-300 mb-2">핵심 포인트</div>
              <div className="text-2xl font-bold text-white">
                개발 인력 확보로 <span className="text-purple-400">CTO 업무 부담 분산</span> 가능
              </div>
              <p className="text-gray-400 mt-2">
                최소한 개발에 대해서는 김주연만큼 할 수 있을 것으로 예상
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
