'use client';

import { motion } from 'framer-motion';

export default function VSAICueSheet4Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        {/* Trophy Icon */}
        <div className="absolute bottom-20 left-20 text-[120px] opacity-5">
          🏆
        </div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            큐시트 Part 4
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🎬 아웃트로
          </h2>
          <p className="text-gray-400">약 2분</p>
        </motion.div>

        {/* Outro Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 mb-8"
        >
          {/* Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-primary/10 rounded-xl p-6 border border-primary/30 text-center"
          >
            <div className="text-5xl mb-4">🏆</div>
            <h4 className="text-primary font-bold text-xl mb-3">최종 결과 발표</h4>
            <div className="space-y-2">
              <div className="bg-dark/50 rounded-lg p-3">
                <p className="text-gray-300 text-sm">투표 결과 집계</p>
              </div>
              <div className="bg-dark/50 rounded-lg p-3">
                <p className="text-gray-300 text-sm">
                  <span className="text-cyan-400 font-semibold">AI</span> vs <span className="text-pink-400 font-semibold">사람</span>
                </p>
              </div>
              <div className="bg-dark/50 rounded-lg p-3">
                <p className="text-gray-300 text-sm">승자 발표 🎉</p>
              </div>
            </div>
          </motion.div>

          {/* Interview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/30 text-center"
          >
            <div className="text-5xl mb-4">🎤</div>
            <h4 className="text-amber-400 font-bold text-xl mb-3">인터뷰</h4>
            <div className="space-y-2">
              <div className="bg-dark/50 rounded-lg p-3">
                <p className="text-gray-300 text-sm">출연진 소감</p>
              </div>
              <div className="bg-dark/50 rounded-lg p-3">
                <p className="text-gray-300 text-sm">행인 반응 인터뷰</p>
              </div>
              <div className="bg-dark/50 rounded-lg p-3">
                <p className="text-gray-300 text-sm">AI vs 사람 느낀 점</p>
              </div>
            </div>
          </motion.div>

          {/* Ending */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30 text-center"
          >
            <div className="text-5xl mb-4">🎬</div>
            <h4 className="text-purple-400 font-bold text-xl mb-3">엔딩</h4>
            <div className="space-y-2">
              <div className="bg-dark/50 rounded-lg p-3">
                <p className="text-gray-300 text-sm">다음 에피소드 예고</p>
              </div>
              <div className="bg-dark/50 rounded-lg p-3">
                <p className="text-gray-300 text-sm">구독/좋아요 유도</p>
              </div>
              <div className="bg-dark/50 rounded-lg p-3">
                <p className="text-gray-300 text-sm">VS AI 로고 아웃트로</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Total Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-dark-light/50 rounded-xl p-6 border border-gray-700"
        >
          <h4 className="text-white font-bold mb-4 text-center">📊 전체 타임라인 (약 20분)</h4>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-1 h-4 rounded-full bg-gray-800 overflow-hidden flex">
              <div className="bg-primary w-[15%]" title="인트로"></div>
              <div className="bg-cyan-500 w-[25%]" title="탐색전"></div>
              <div className="bg-orange-500 w-[35%]" title="본 게임"></div>
              <div className="bg-purple-500 w-[15%]" title="결과물/투표"></div>
              <div className="bg-amber-500 w-[10%]" title="아웃트로"></div>
            </div>
          </div>
          <div className="grid grid-cols-5 text-center text-xs">
            <div>
              <span className="text-primary font-semibold">인트로</span>
              <p className="text-gray-500">3분</p>
            </div>
            <div>
              <span className="text-cyan-400 font-semibold">탐색전</span>
              <p className="text-gray-500">5분</p>
            </div>
            <div>
              <span className="text-orange-400 font-semibold">본 게임</span>
              <p className="text-gray-500">7분</p>
            </div>
            <div>
              <span className="text-purple-400 font-semibold">결과물/투표</span>
              <p className="text-gray-500">3분</p>
            </div>
            <div>
              <span className="text-amber-400 font-semibold">아웃트로</span>
              <p className="text-gray-500">2분</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
