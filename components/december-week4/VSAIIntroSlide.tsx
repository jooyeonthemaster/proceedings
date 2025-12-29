'use client';

import { motion } from 'framer-motion';

export default function VSAIIntroSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        {/* Camera Pattern */}
        <div className="absolute top-20 right-20 text-[120px] opacity-5">
          📷
        </div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            VS AI 상세 기획안
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            📸 스트릿 포토그래퍼 편
          </h2>
        </motion.div>

        {/* Main Question */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-primary/10 to-pink-500/10 rounded-2xl p-8 border border-primary/30 mb-8 text-center"
        >
          <p className="text-3xl text-white font-bold leading-relaxed">
            &quot;과연 <span className="text-primary">AI 사진사</span>가<br />
            길거리 <span className="text-pink-400">스트릿 포토그래퍼</span>를 이길 수 있을까?&quot;
          </p>
        </motion.div>

        {/* Core Themes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-xl text-gray-400 mb-4 text-center">핵심 주제</h3>
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-primary/10 rounded-xl p-5 border border-primary/30 text-center"
            >
              <div className="text-4xl mb-3">🎮</div>
              <h4 className="text-primary font-bold text-lg mb-2">체험형 AI 콘텐츠</h4>
              <p className="text-gray-400 text-sm">사람이 직접 체험하는<br />AI 콘텐츠</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="bg-orange-500/10 rounded-xl p-5 border border-orange-500/30 text-center"
            >
              <div className="text-4xl mb-3">🚶</div>
              <h4 className="text-orange-400 font-bold text-lg mb-2">스트릿 스타일</h4>
              <p className="text-gray-400 text-sm">길거리에서 벌어지는<br />예측 불가능한 상황</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="bg-pink-500/10 rounded-xl p-5 border border-pink-500/30 text-center"
            >
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="text-pink-400 font-bold text-lg mb-2">승패 결정</h4>
              <p className="text-gray-400 text-sm">블라인드 투표로<br />승자 결정</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Structure Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-dark-light/50 rounded-xl p-5 border border-gray-700"
        >
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <span>🎬</span> 영상 구성
          </h4>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">인트로</span>
              <span className="text-gray-500">→</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">탐색전</span>
              <span className="text-gray-500">→</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">본 게임</span>
              <span className="text-gray-500">→</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">결과물</span>
              <span className="text-gray-500">→</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-sm">블라인드 투표</span>
              <span className="text-gray-500">→</span>
            </div>
            <div>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">아웃트로</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
