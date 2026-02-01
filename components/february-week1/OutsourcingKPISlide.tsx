'use client';

import { motion } from 'framer-motion';

export default function OutsourcingKPISlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-purple-400 text-sm">외주 개발</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-8">외주 개발 KPI</h2>

          {/* 현실 상황 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-light/60 rounded-xl p-6 border border-gray-700 mb-8"
          >
            <h3 className="text-xl font-semibold text-gray-300 mb-4">현실</h3>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <span className="bg-blue-500/20 px-4 py-2 rounded-lg text-blue-400">영업팀</span>
              <span className="text-2xl">→</span>
              <span className="bg-orange-500/20 px-4 py-2 rounded-lg text-orange-400">개발건</span>
              <span className="text-2xl">→</span>
              <span className="bg-purple-500/20 px-4 py-2 rounded-lg text-purple-400">김제연 처리</span>
            </div>
            <p className="text-center text-gray-500 mt-4 text-sm">시키는 대로 해야 하는 구조</p>
          </motion.div>

          {/* KPI 설정 방향 */}
          <h3 className="text-xl font-semibold text-white mb-6">KPI 설정 방향</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/60 rounded-xl p-6 border border-emerald-500/30"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 font-bold mr-3">
                  1
                </div>
                <h4 className="text-lg font-semibold text-white">납기 준수율</h4>
              </div>
              <p className="text-gray-400 text-sm">목표: 100%</p>
              <p className="text-emerald-400 text-sm mt-2">약속한 기한 내 프로젝트 완료</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-xl p-6 border border-blue-500/30"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold mr-3">
                  2
                </div>
                <h4 className="text-lg font-semibold text-white">고객 만족도</h4>
              </div>
              <p className="text-gray-400 text-sm">지표: 재계약율</p>
              <p className="text-blue-400 text-sm mt-2">목표: 80% 이상</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/60 rounded-xl p-6 border border-orange-500/30"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 font-bold mr-3">
                  3
                </div>
                <h4 className="text-lg font-semibold text-white">개발 효율화</h4>
              </div>
              <p className="text-gray-400 text-sm">재사용 가능 모듈 축적</p>
              <p className="text-orange-400 text-sm mt-2">컴포넌트 라이브러리화</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-dark-light/60 rounded-xl p-6 border border-cyan-500/30"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold mr-3">
                  4
                </div>
                <h4 className="text-lg font-semibold text-white">기술 문서화</h4>
              </div>
              <p className="text-gray-400 text-sm">프로젝트별 문서 작성</p>
              <p className="text-cyan-400 text-sm mt-2">인수인계 용이성 확보</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
