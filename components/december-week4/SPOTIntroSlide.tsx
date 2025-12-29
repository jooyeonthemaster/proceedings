'use client';

import { motion } from 'framer-motion';

export default function SPOTIntroSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500 bg-opacity-20 text-emerald-400 text-sm mb-4">
            장기 비전 2
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            🌿 <span className="text-emerald-400">스팟(SPOT)</span>
          </h2>
          <p className="text-xl text-gray-400">공간의 향기를 담은 디퓨저 브랜드</p>
        </motion.div>

        {/* Brand Name Meaning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 border border-emerald-500/30 mb-6 text-center"
        >
          <h3 className="text-gray-400 mb-3">브랜드명 의미</h3>
          <div className="flex items-center justify-center gap-2 text-3xl font-bold">
            <span className="text-emerald-400">S</span>
            <span className="text-white">tory</span>
            <span className="text-gray-600 mx-2">+</span>
            <span className="text-emerald-400">P</span>
            <span className="text-white">ot</span>
            <span className="text-gray-600 mx-2">+</span>
            <span className="text-white">Scen</span>
            <span className="text-emerald-400">T</span>
            <span className="text-gray-600 mx-4">=</span>
            <span className="text-emerald-400 text-4xl">SPOT</span>
          </div>
        </motion.div>

        {/* Concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 mb-6"
        >
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">✨</span> 콘셉트
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400">•</span>
              <span>공간의 향기를 설계</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400">•</span>
              <span>화분 모양의 <span className="text-emerald-400 font-bold">팟(Pot)</span>에 담아 디퓨저 제작</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400">•</span>
              <span>다양한 <span className="text-emerald-400 font-bold">공간들과 콜라보</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400">•</span>
              <span>해당 공간의 <span className="text-white font-bold">스토리를 표현하는 향기</span>를 화분에 담아냄</span>
            </li>
          </ul>
        </motion.div>

        {/* Business Model Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-teal-500/10 rounded-xl p-5 border border-teal-500/30 mb-6"
        >
          <h3 className="text-teal-400 font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">🔄</span> 비즈니스 모델
          </h3>
          <div className="flex items-center justify-center gap-3 text-center">
            <div className="bg-dark/50 rounded-lg p-3 flex-1">
              <p className="text-white font-bold text-sm">핫플레이스 콜라보</p>
            </div>
            <span className="text-teal-400 text-xl">→</span>
            <div className="bg-dark/50 rounded-lg p-3 flex-1">
              <p className="text-white font-bold text-sm">스토리 향기 설계</p>
            </div>
            <span className="text-teal-400 text-xl">→</span>
            <div className="bg-dark/50 rounded-lg p-3 flex-1">
              <p className="text-white font-bold text-sm">화분 디퓨저 제작</p>
            </div>
            <span className="text-teal-400 text-xl">→</span>
            <div className="bg-dark/50 rounded-lg p-3 flex-1">
              <p className="text-white font-bold text-sm">온/오프라인 판매</p>
            </div>
          </div>
        </motion.div>

        {/* Position */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-emerald-500/10 to-primary/10 rounded-xl p-5 border border-emerald-500/30"
        >
          <h3 className="text-primary font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">🎯</span> 포지션
          </h3>
          <div className="bg-dark/50 rounded-lg p-4 text-center">
            <p className="text-gray-300">
              네안데르랩과 함께 <span className="text-primary font-bold">장기 비전</span> 사업<br />
              <span className="text-gray-500 text-sm">(캐시카우인 악센트 ID/WOW와 구분)</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
