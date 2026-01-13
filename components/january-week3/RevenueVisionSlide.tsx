'use client';

import { motion } from 'framer-motion';

export default function RevenueVisionSlide() {
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
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
              Revenue Vision
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              수익 비전
            </h2>
            <p className="text-gray-400 mt-2">지속 가능한 수익 구조 설계</p>
          </div>

          {/* Two Revenue Streams */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 온라인 뿌덕 바이럴 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">온라인 뿌덕</h3>
                  <span className="text-emerald-400 text-sm">B2C 바이럴</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-dark/50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">목표</span>
                    <span className="text-emerald-400 font-bold">하루 20개+</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300 text-sm">AI 분석 → 향수 추천</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300 text-sm">SNS 공유 유도</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300 text-sm">자연 바이럴 기대</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 팬덤 시장 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💜</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">팬덤 시장</h3>
                  <span className="text-purple-400 text-sm">B2B 대량 납품</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-dark/50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">전략</span>
                    <span className="text-purple-400 font-bold">대량 납품 영업</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300 text-sm">아이돌/캐릭터 콜라보</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300 text-sm">팬덤 굿즈로 포지셔닝</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300 text-sm">안정적 대량 주문</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Combined Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-emerald-500/10 to-purple-500/10 border border-emerald-500/30 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 text-center">수익 다각화 전략</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-dark/50 rounded-xl p-4">
                <div className="text-emerald-400 font-bold text-lg">B2C</div>
                <div className="text-gray-400 text-sm">온라인 개인 판매</div>
                <div className="text-gray-500 text-xs mt-2">꾸준한 소액 수익</div>
              </div>
              <div className="bg-dark/50 rounded-xl p-4">
                <div className="text-purple-400 font-bold text-lg">B2B</div>
                <div className="text-gray-400 text-sm">팬덤 대량 납품</div>
                <div className="text-gray-500 text-xs mt-2">대규모 일시 수익</div>
              </div>
              <div className="bg-dark/50 rounded-xl p-4">
                <div className="text-cyan-400 font-bold text-lg">브랜딩</div>
                <div className="text-gray-400 text-sm">AI교 콘텐츠</div>
                <div className="text-gray-500 text-xs mt-2">인지도 & 화제성</div>
              </div>
            </div>
          </motion.div>

          {/* Key Metric */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-500">
              핵심: <span className="text-emerald-400">지속 가능한 수익 구조</span>를 먼저 만들고,
              <span className="text-purple-400 ml-1">성장</span>은 그 위에서
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
