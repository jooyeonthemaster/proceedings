'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DstrictPhilosophySlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500 bg-opacity-20 text-cyan-400 text-sm mb-4">
            선례 연구 02
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="text-cyan-400">d'strict</span>의 철학
          </h2>
          <p className="text-2xl text-gray-300 font-semibold">
            "더 많은 사람이 예술을 접하게"
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left: ArteMuseum */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/30"
          >
            <div className="text-4xl mb-4">🌊</div>
            <h3 className="text-xl font-bold text-white mb-4">아르떼뮤지엄</h3>
            <div className="space-y-4">
              <div className="bg-dark-light/50 rounded-lg p-4 border border-cyan-500/20">
                <p className="text-cyan-400 font-semibold mb-2">주제: "영원한 자연(Eternal Nature)"</p>
                <p className="text-gray-400 text-sm">
                  왜 자연인가?<br/>
                  <span className="text-white">누구나 이해하고 공감할 수 있는 것이기 때문.</span>
                </p>
              </div>
              <div className="bg-dark-light/50 rounded-lg p-4 border border-cyan-500/20">
                <p className="text-red-400 font-semibold mb-2">거부하는 것:</p>
                <p className="text-gray-400 text-sm">
                  "아티스트의 철학을 이해 못하면 소양 부족"이라는 태도
                </p>
              </div>
              <div className="bg-dark-light/50 rounded-lg p-4 border border-cyan-500/20">
                <p className="text-primary font-semibold mb-2">추구하는 것:</p>
                <p className="text-gray-400 text-sm">
                  <span className="text-white">직관적으로 바로 느낄 수 있는 것</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Key Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div className="bg-dark-light/50 rounded-2xl p-6 border border-gray-700 mb-4">
              <div className="text-4xl mb-4">💎</div>
              <p className="text-2xl text-white font-bold mb-4 leading-relaxed">
                "기술은 누구나 살 수 있다.<br/>
                그러나 <span className="text-cyan-400">경험의 완성도</span>는<br/>
                사서 얻을 수 없다."
              </p>
              <p className="text-gray-500 text-sm">— d'strict</p>
            </div>

            <div className="bg-dark-light/30 rounded-xl p-4 border border-gray-700">
              <p className="text-gray-400 mb-2 font-semibold">핵심 차별점:</p>
              <div className="flex items-center gap-4">
                <div className="text-center flex-1">
                  <p className="text-red-400 text-sm">❌ 기술 자랑</p>
                </div>
                <div className="text-2xl">→</div>
                <div className="text-center flex-1">
                  <p className="text-primary text-sm">✅ 경험 완성도</p>
                </div>
              </div>
            </div>

            {/* Detail Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 text-center"
            >
              <Link
                href="/december/week4/dstrict"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/20 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/30 transition-colors"
              >
                <span>d'strict 더 자세히 보기</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
