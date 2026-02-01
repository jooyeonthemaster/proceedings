'use client';

import { motion } from 'framer-motion';

export default function InternalDevCollabSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-cyan-400 text-sm">내부 개발</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">회사 내부 협업 KPI</h2>
          <p className="text-gray-400 mb-8">각 팀과 긴밀하게 협력하여 업무 효율화</p>

          <div className="space-y-6">
            {/* 영업팀 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-xl p-6 border border-blue-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">영업팀 협업</h3>
                  <p className="text-blue-400 text-sm">제안 가능 프로그램 확대</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-dark/50 rounded-lg p-4">
                  <p className="text-gray-300">신규 솔루션 1개 이상 개발</p>
                </div>
                <div className="bg-dark/50 rounded-lg p-4">
                  <p className="text-gray-300">영업 제안서용 데모 준비</p>
                </div>
              </div>
            </motion.div>

            {/* 마케팅팀 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/60 rounded-xl p-6 border border-pink-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">마케팅팀 협업</h3>
                  <p className="text-pink-400 text-sm">데이터 기반 마케팅 효율화</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-dark/50 rounded-lg p-3 text-center">
                  <p className="text-gray-300 text-sm">콘텐츠 일별 기록</p>
                </div>
                <div className="bg-dark/50 rounded-lg p-3 text-center">
                  <p className="text-gray-300 text-sm">댓글 수집</p>
                </div>
                <div className="bg-dark/50 rounded-lg p-3 text-center">
                  <p className="text-gray-300 text-sm">언급 크롤링</p>
                </div>
                <div className="bg-dark/50 rounded-lg p-3 text-center">
                  <p className="text-gray-300 text-sm">LLM 인사이트</p>
                </div>
              </div>
            </motion.div>

            {/* 재무회계팀 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-xl p-6 border border-emerald-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">재무회계팀 협업</h3>
                  <p className="text-emerald-400 text-sm">악센트 아이디 뿌덕 v2 연동</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-dark/50 rounded-lg p-4">
                  <p className="text-gray-300">향료 데이터 관리 시스템</p>
                </div>
                <div className="bg-dark/50 rounded-lg p-4">
                  <p className="text-gray-300">재고 데이터 효율화</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
