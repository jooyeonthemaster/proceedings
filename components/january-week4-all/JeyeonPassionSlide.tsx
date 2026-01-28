'use client';

import { motion } from 'framer-motion';

export default function JeyeonPassionSlide() {
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
            <span className="text-orange-400 text-sm font-medium tracking-wider uppercase">
              Duck Perfume Case Story
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              오리 향수 케이스 <span className="text-orange-400">개발 스토리</span>
            </h2>
          </div>

          {/* Story Timeline */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/30 rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">😅</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">임원진의 반응</h3>
                  <p className="text-gray-400">
                    처음엔 임원진 모두에게 &ldquo;찬밥 신세&rdquo;를 받았습니다.
                    <br />
                    &ldquo;이게 뭐야&rdquo;, &ldquo;별로인데&rdquo; 라는 피드백이 계속되었습니다.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/30 rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌙</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">그럼에도 불구하고</h3>
                  <p className="text-gray-400">
                    제연이는 <span className="text-orange-400 font-medium">혼자 밀고 나가며</span> 밤새면서 디벨롭을 계속했습니다.
                    <br />
                    집에서 밤 새어가면서 진짜 계속 붙잡고 있는 모습을 보여줬습니다.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/30 rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💪</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">끊임없는 공유</h3>
                  <p className="text-gray-400">
                    계속 까이면서도 결과물을 공유해줬습니다.
                    <br />
                    피드백을 받고, 다시 작업하고, 또 공유하고를 반복했습니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border-2 border-orange-500/50 rounded-2xl p-8 text-center"
          >
            <div className="text-5xl mb-4">🔥</div>
            <div className="text-2xl font-bold text-white mb-2">
              밤 새어가며 붙잡는 열정
            </div>
            <p className="text-gray-300">
              이런 열정을 옆에서 보면서 영감을 받고, 자기 반성을 하게 되었습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
