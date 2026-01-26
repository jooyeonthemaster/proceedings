'use client';

import { motion } from 'framer-motion';

export default function FebruaryBusySlide() {
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
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-8xl mb-6 block">🔥</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-white mt-4">
              2월은 <span className="text-red-400">진짜</span> 바쁩니다
            </h2>
          </div>

          {/* Warning Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 border-2 border-red-500/50 rounded-2xl p-8 text-center mb-8"
          >
            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 mb-4">
              뒤지게 바쁠 예정
            </div>
            <p className="text-gray-300 text-xl">
              3월 내내 하루 0.5개씩 사업계획서 작성 필수
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/50 rounded-xl p-6 border border-orange-500/30"
            >
              <div className="text-orange-400 font-bold text-lg mb-2">1월 (현재)</div>
              <div className="text-gray-400">제출 완료 3건</div>
              <div className="text-gray-400">금일 제출 1건</div>
              <div className="mt-3 text-white font-bold">남은 18건 돌입</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-6 border-2 border-red-500/50"
            >
              <div className="text-red-400 font-bold text-lg mb-2">2월</div>
              <div className="text-white font-bold text-2xl mb-2">최대 바쁨</div>
              <div className="text-gray-400">대부분의 마감 집중</div>
              <div className="mt-3">
                <span className="text-red-400 font-bold text-xl">🔥 PEAK</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-dark-light/50 rounded-xl p-6 border border-amber-500/30"
            >
              <div className="text-amber-400 font-bold text-lg mb-2">3월</div>
              <div className="text-gray-400">추가 공고 대응</div>
              <div className="text-gray-400">지속적 작성 필요</div>
              <div className="mt-3 text-white font-bold">아직 끝 아님</div>
            </motion.div>
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-dark-light/50 px-6 py-4 rounded-full border border-gray-700">
              <span className="text-3xl">💪</span>
              <span className="text-white font-bold text-lg">
                그래도 해낸다. 우리는 네안데르니까.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
