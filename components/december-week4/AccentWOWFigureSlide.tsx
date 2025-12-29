'use client';

import { motion } from 'framer-motion';

export default function AccentWOWFigureSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-pink-500 bg-opacity-20 text-pink-400 text-sm mb-3">
            제안
          </span>
          <h2 className="text-4xl font-bold text-white">
            🧸 악센트 WOW에서 <span className="text-pink-400">3D 피규어 디퓨저</span> 전문 판매
          </h2>
        </motion.div>

        {/* 기존 제안 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 mb-5"
        >
          <h3 className="text-gray-400 font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">📋</span> 기존 제안 (과거에도 제안한 바 있음)
          </h3>
          <p className="text-gray-300">
            3D 프린터로 출력할 수 있는 무언가를 기반으로<br />
            <span className="text-white font-bold">향수가 아닌 대체 상품</span> 개발
          </p>
        </motion.div>

        {/* 구체적 제안 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-5 border border-pink-500/30 mb-5"
        >
          <h3 className="text-pink-400 font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">💡</span> 구체적 제안
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-pink-400">•</span>
              <span><span className="text-pink-400 font-bold">3D 피규어 디퓨저</span>를 악센트 WOW에서 <span className="text-white font-bold">전문 판매</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400">•</span>
              <span>아이돌 팬들에게 <span className="text-pink-400 font-bold">최애 피규어 디퓨저</span> 제공</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400">•</span>
              <span>향수보다 <span className="text-primary font-bold">가치 전달이 명확</span>할 수 있음</span>
            </li>
          </ul>
        </motion.div>

        {/* 실행 가능성 & 기대 효과 */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-green-500/10 rounded-xl p-5 border border-green-500/30"
          >
            <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
              <span className="text-xl">✅</span> 실행 가능성
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                현재 <span className="text-green-400 font-bold">3D 프린터 다수 보유</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span className="text-green-400 font-bold">얼마든지 생산 가능</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-primary/10 rounded-xl p-5 border border-primary/30"
          >
            <h3 className="text-primary font-bold mb-3 flex items-center gap-2">
              <span className="text-xl">🎯</span> 기대 효과
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                악센트 WOW에서 <span className="text-primary font-bold">새로운 맛</span>을 기존 고객들에게 제공
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                가격 이슈 <span className="text-primary font-bold">해결 가능성</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span className="text-primary font-bold">컬러가 들어간 피규어</span> 제공으로 차별화
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
