'use client';

import { motion } from 'framer-motion';

export default function AccentIDSolution1Slide() {
  const actionItems = [
    { item: '서비스 정신 개조', desc: '정신부터 바꿔야 함', icon: '🧠' },
    { item: '통일된 응대 방법론', desc: '일관된 고객 경험 제공', icon: '📋' },
    { item: '지속적 교육', desc: '일회성 ❌, 정기적 교육', icon: '🎓' },
    { item: '현장 관리', desc: '실제 응대 모니터링', icon: '👀' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-green-500 bg-opacity-20 text-green-400 text-sm mb-3">
            해결방안 1/3
          </span>
          <h2 className="text-4xl font-bold text-white mb-2">
            해결방안 1: <span className="text-green-400">알바 교육 혁신</span>
          </h2>
        </motion.div>

        {/* 현황 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-red-500/10 rounded-xl p-5 border border-red-500/30 mb-5"
        >
          <h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">⚠️</span> 현황
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>알바들이 <span className="text-red-400 font-bold">통일된 방법론 없이</span> 각자 다르게 응대</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>매뉴얼만으로는 <span className="text-red-400 font-bold">부족</span></span>
            </li>
          </ul>
        </motion.div>

        {/* 필요한 것 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-5 border border-green-500/30 mb-5"
        >
          <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">💡</span> 필요한 것
          </h3>
          <div className="bg-dark/50 rounded-lg p-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              단순히 매뉴얼을 넘어서<br />
              <span className="text-green-400 font-bold">지속적인 알바 교육, 현장 관리, 고객 응대 수준 유지</span>가 정말 중요
            </p>
          </div>
        </motion.div>

        {/* 액션 아이템 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-4 gap-4 mb-5"
        >
          {actionItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-green-500/20 text-center"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="text-green-400 font-bold text-sm mb-1">{item.item}</h4>
              <p className="text-gray-400 text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 핵심 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-dark-light/70 rounded-xl p-5 border border-gray-600"
        >
          <h3 className="text-white font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">🎯</span> 핵심
          </h3>
          <p className="text-gray-300 leading-relaxed">
            절대 <span className="text-amber-400 font-bold">우리가 손님을 받는 건</span> 방법이 될 수 없다.<br />
            알바들 교육을 <span className="text-green-400 font-bold">어떻게 할지</span> 구체적 정리 필요.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
