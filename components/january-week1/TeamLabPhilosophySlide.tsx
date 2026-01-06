'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TeamLabPhilosophySlide() {
  const philosophies = [
    { icon: '🚪', title: '작품과 관객', desc: '경계를 허문다' },
    { icon: '👥', title: '나와 타인', desc: '함께할수록 아름다워진다' },
    { icon: '🌿', title: '인간과 자연', desc: '자연과 하나가 된다' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-pink-500 bg-opacity-20 text-pink-400 text-sm mb-4">
            선례 연구 01
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="text-pink-400">teamLab</span>의 철학
          </h2>
          <p className="text-2xl text-gray-300 font-semibold">
            "경계를 허문다"
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left: Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {philosophies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-dark-light/50 rounded-xl p-4 border border-pink-500/20 flex items-center gap-4"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <p className="text-pink-400 font-semibold">{item.title}</p>
                  <p className="text-white">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Key Insight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl p-6 border border-pink-500/30"
          >
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-white mb-4">핵심 인사이트</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                일반적인 전시에서 <span className="text-red-400">다른 관객은 방해물</span>이다.
              </p>
              <p>
                그런데 팀랩에서는 <span className="text-pink-400 font-bold">사람이 많을수록 작품이 아름다워진다.</span>
              </p>
              <p>
                관객의 움직임이 작품에 영향을 주고,<br/>
                여러 사람의 움직임이 모여 새로운 패턴을 만든다.
              </p>
            </div>
            <div className="mt-4 p-4 bg-dark-light/50 rounded-lg border border-pink-500/20">
              <p className="text-pink-400 italic text-sm">
                "예술을 통해 감각을 확장하고,<br/>
                개인과 세계의 경계를 넘어설 수 있다고 믿는다."
              </p>
              <p className="text-gray-500 text-xs mt-2">— teamLab</p>
            </div>
          </motion.div>
        </div>

        {/* Detail Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-center"
        >
          <Link
            href="/december/week4/teamlab"
            className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500/20 rounded-full border border-pink-500/30 text-pink-400 hover:bg-pink-500/30 transition-colors"
          >
            <span>teamLab 더 자세히 보기</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
