'use client';

import { motion } from 'framer-motion';

export default function DevSummarySlide() {
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
            <span className="text-teal-400 text-sm font-medium tracking-wider uppercase">
              Part 1 Summary
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              CTO 역할 요약
            </h2>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 정산 현황 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">정산 현황</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-emerald-400 font-bold">완료 2건</span>
                </div>
                <div className="text-gray-400 text-sm">잡플래닛 (1/9)</div>
                <div className="text-gray-400 text-sm">안산 포토부스 & 지도 (1/13)</div>
                <div className="h-px bg-gray-700 my-2"></div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-orange-400 font-bold">미정산 1건</span>
                </div>
                <div className="text-gray-400 text-sm">김기홍 화환 (800만원)</div>
              </div>
            </motion.div>

            {/* 인력 현황 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">인력 성장</h3>
              <div className="space-y-2">
                <div className="text-purple-400 font-bold text-lg">김제연</div>
                <div className="text-gray-400 text-sm">인수인계 순조롭게 진행</div>
                <div className="h-px bg-gray-700 my-2"></div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-2 py-1 bg-dark/50 text-gray-400 text-xs rounded-full">디지털 화환 90%+</span>
                  <span className="px-2 py-1 bg-dark/50 text-gray-400 text-xs rounded-full">API 활용 능숙</span>
                  <span className="px-2 py-1 bg-dark/50 text-gray-400 text-xs rounded-full">자립도 높음</span>
                </div>
              </div>
            </motion.div>

            {/* 개발 현황 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">뿌디 V2</h3>
              <div className="space-y-2">
                <div className="text-orange-400 font-bold text-lg">1/21 완료 예정</div>
                <div className="text-gray-400 text-sm">핵심 기능 개발 중</div>
                <div className="h-px bg-gray-700 my-2"></div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-2 py-1 bg-dark/50 text-gray-400 text-xs rounded-full">레퍼럴</span>
                  <span className="px-2 py-1 bg-dark/50 text-gray-400 text-xs rounded-full">마이페이지</span>
                  <span className="px-2 py-1 bg-dark/50 text-gray-400 text-xs rounded-full">관리자</span>
                  <span className="px-2 py-1 bg-dark/50 text-gray-400 text-xs rounded-full">도메인 분리</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-2xl px-8 py-4">
              <p className="text-xl text-white">
                개발팀 상황은 <span className="text-teal-400 font-bold">순조롭게 진행 중</span>
              </p>
              <p className="text-gray-400 mt-2">
                다음은 COO 역할 - 전략적 방향 논의로 이어집니다
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
