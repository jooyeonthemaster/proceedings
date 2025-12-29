'use client';

import { motion } from 'framer-motion';

export default function ClosingSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="text-center z-10 max-w-4xl px-8">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h1 className="text-5xl font-black text-white mb-4">
            2026년, <span className="text-primary">체험형 AI 콘텐츠 창작 집단</span>으로
          </h1>
        </motion.div>

        {/* Core Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-dark-light/80 via-dark/80 to-dark-light/80 rounded-2xl p-8 border border-gray-700 mb-10"
        >
          <div className="space-y-4 text-xl text-gray-300 leading-relaxed">
            <p>우리는 개발 외주 업체가 아니다.</p>
            <p>우리는 전시 대행사가 아니다.</p>
            <p className="py-2"></p>
            <p className="text-2xl text-white font-bold">
              우리는 <span className="text-primary">체험형 AI 콘텐츠를 창작하는 집단</span>이다.
            </p>
            <p className="py-2"></p>
            <p>
              <span className="text-cyan-400">팀랩</span>처럼, <span className="text-purple-400">디스트릭트</span>처럼,
            </p>
            <p>전 세계에 우리의 작품을 선보일 것이다.</p>
            <p className="py-2"></p>
            <p className="text-primary font-bold">
              그 시작은 성수동 거리에서,<br />
              힙한 로봇과 함께.
            </p>
          </div>
        </motion.div>

        {/* VS AI 첫 영상 예고 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-primary/20 via-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-primary/30 mb-8"
        >
          <p className="text-2xl text-white font-bold">
            🎬 Coming Soon
          </p>
          <p className="text-xl text-gray-300 mt-2">
            &quot;<span className="text-primary">20년 차 인물 작가</span> vs <span className="text-cyan-400">성수동 로봇 작가</span>&quot;
          </p>
        </motion.div>

        {/* Date & Company */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-6 border-t border-gray-800"
        >
          <p className="text-gray-600 text-sm">
            2025.12.28 | 네안데르
          </p>
        </motion.div>
      </div>
    </div>
  );
}
