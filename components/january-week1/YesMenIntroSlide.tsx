'use client';

import { motion } from 'framer-motion';

export default function YesMenIntroSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500 bg-opacity-20 text-yellow-400 text-sm mb-4">
            벤치마크
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="text-yellow-400">Q.</span> The Yes Men이라고 아는가?
          </h2>
          <p className="text-xl text-gray-400">
            행동주의 예술가 듀오. <span className="text-yellow-300">"문화 교란(culture jamming)"</span> 전문가.
          </p>
        </motion.div>

        {/* Main Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-2xl p-8 border border-yellow-500/30">
            <div className="flex items-center gap-6">
              <div className="text-7xl">🎭</div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">The Yes Men</h3>
                <p className="text-gray-300 text-lg">
                  그들의 전문 분야는 <span className="text-white font-bold">"진짜처럼 보이는 개입"</span>이다.
                </p>
                <ul className="mt-4 space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400">✓</span>
                    신뢰성 있는 환경(컨퍼런스, 생방송, 기자회견)에 침투
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400">✓</span>
                    완전히 진짜처럼 행동
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400">✓</span>
                    사람들이 진짜라고 믿는 순간을 만듦
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400">✓</span>
                    실제 파장 발생 (주가 폭락, 뉴스 보도)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why They're Crazy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-gray-400 mb-2">The Yes Men이 "미친" 이유:</p>
            <p className="text-xl text-white font-bold">
              단순히 거리에서 퍼포먼스를 한 게 아니다.<br/>
              <span className="text-yellow-400">진짜 권력 기관의 실제 이벤트에 침투</span>했다.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
