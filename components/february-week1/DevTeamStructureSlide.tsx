'use client';

import { motion } from 'framer-motion';

export default function DevTeamStructureSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-2 text-center">개발팀 구성</h2>
          <p className="text-gray-400 text-center mb-12">2명의 개발자가 전체 개발을 담당</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 김주연 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/60 rounded-2xl p-8 border border-cyan-500/30"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  주
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">김주연</h3>
                  <span className="text-cyan-400 text-sm">CTO / 내부 개발 총괄</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  <span className="text-gray-300">내부 개발 프로젝트 총괄</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  <span className="text-gray-300">뿌덕 서비스 개발</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  <span className="text-gray-300">마케팅/재무 협업 시스템</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  <span className="text-gray-300">사업계획서 병행</span>
                </div>
              </div>
            </motion.div>

            {/* 김제연 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-8 border border-purple-500/30"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  제
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">김제연</h3>
                  <span className="text-purple-400 text-sm">프리랜서 / 외주 개발</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span className="text-gray-300">외주 개발 전담</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span className="text-gray-300">내부 상품 개발 협력</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span className="text-gray-300">3D 모델링 지원</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span className="text-gray-300">포토부스 로봇 협업</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 핵심 목표 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl p-6 border border-emerald-500/30 text-center"
          >
            <p className="text-xl text-emerald-400 font-semibold">
              핵심 목표: 영업 들어오는 개발건 전량 처리
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
