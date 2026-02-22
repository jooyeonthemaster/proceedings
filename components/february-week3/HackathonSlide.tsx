'use client';

import { motion } from 'framer-motion';

export default function HackathonSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-amber-400 text-sm">HACKATHON</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">야판사야 해커톤 참가</h2>
          <p className="text-gray-400 mb-8">기존 공유 완료 건 + 향후 방향성</p>

          {/* Hackathon Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-light/60 rounded-2xl p-8 border border-amber-500/30 mb-6"
          >
            <div className="flex items-start">
              <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-3xl">🏆</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">해커톤 참가 완료</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  &ldquo;야판사야&rdquo;를 기반으로 해커톤에 참가했고, 이 내용은 이미 팀에 공유 완료.
                </p>
                <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2">
                  <span className="text-emerald-400 text-sm font-medium">✓ 공유 완료</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Direction Arrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-dark-light/60 rounded-2xl p-8 border border-violet-500/30"
          >
            <div className="flex items-start">
              <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-3xl">🚀</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">본격 확장 결정</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  해커톤을 계기로 &ldquo;야판사야&rdquo;를 <span className="text-pink-400 font-semibold">AI 커플 서비스</span>로 본격 키워보기로 결정.
                  앱 형태로 접근성을 높이고, 채팅창에서 바로 판사를 호출할 수 있는 구조.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-sm">AI 커플 앱</span>
                  <span className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-sm">채팅 기반</span>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">판사 호출</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
