'use client';

import { motion } from 'framer-motion';

export default function Q1AdditionalKPISlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-pink-500/20 border border-pink-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-pink-400 text-sm">1분기 추가</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-8">1분기 추가 KPI</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 포토부스 로봇 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-cyan-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-3xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">포토부스 로봇</h3>
                  <p className="text-cyan-400 text-sm">김제연 협업</p>
                </div>
              </div>
              <div className="bg-dark/50 rounded-lg p-4">
                <p className="text-gray-300">악센트 아이디 매장</p>
                <p className="text-cyan-400 font-semibold mt-2">1분기 내 설치 완료</p>
              </div>
            </motion.div>

            {/* 향수 키링 케이스 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-purple-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-3xl">🔑</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">향수 키링 파츠</h3>
                  <p className="text-purple-400 text-sm">10ml 기준</p>
                </div>
              </div>
              <div className="bg-dark/50 rounded-lg p-4">
                <p className="text-gray-300">디자인 제작</p>
                <p className="text-purple-400 font-semibold mt-2 text-2xl">30개</p>
              </div>
            </motion.div>

            {/* 3D 커스터마이징 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 bg-dark-light/60 rounded-2xl p-6 border border-orange-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">3D 커스터마이징 웹 서비스</h3>
                  <p className="text-orange-400 text-sm">케이스티파이 스타일 참고</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-dark/50 rounded-lg p-4 text-center">
                  <p className="text-gray-400 text-sm mb-2">목표</p>
                  <p className="text-white">온라인 향수 키링 커스터마이징</p>
                </div>
                <div className="bg-dark/50 rounded-lg p-4 text-center">
                  <p className="text-gray-400 text-sm mb-2">참고</p>
                  <p className="text-orange-400">casetify.com</p>
                </div>
                <div className="bg-dark/50 rounded-lg p-4 text-center">
                  <p className="text-gray-400 text-sm mb-2">기한</p>
                  <p className="text-emerald-400">1분기 MVP</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 요약 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center space-x-6 text-sm"
          >
            <div className="flex items-center">
              <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
              <span className="text-gray-400">포토부스 로봇 1대</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-gray-400">키링 파츠 30개</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-gray-400">웹 서비스 MVP</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
