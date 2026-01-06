'use client';

import { motion } from 'framer-motion';

export default function AIReligionLegalSlide() {
  const safetyPoints = [
    { point: '패러디 원칙', detail: '"이건 예술입니다"라고 명시', icon: '🎭' },
    { point: '특정 종교 비방 X', detail: '일반적 종교 형식의 패러디', icon: '⚖️' },
    { point: '자발적 참여', detail: '체험은 강제가 아닌 선택', icon: '✋' },
    { point: 'The Yes Men 선례', detail: '패러디는 표현의 자유로 보호', icon: '📜' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-green-500 bg-opacity-20 text-green-400 text-sm mb-4">
            법적 안전성
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="text-green-400">Q.</span> 이거 괜찮아?
          </h2>
        </motion.div>

        {/* Short Answer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl p-6 border border-green-500/30 text-center">
            <p className="text-2xl text-white font-bold">
              <span className="text-green-400">예.</span> 예술적 패러디로서 보호받는다.
            </p>
          </div>
        </motion.div>

        {/* Safety Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <div className="grid grid-cols-2 gap-4">
            {safetyPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                className="bg-dark-light/50 rounded-xl p-4 border border-gray-700 flex items-center gap-4"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <p className="text-green-400 font-bold">{item.point}</p>
                  <p className="text-gray-400 text-sm">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What We DO and DON'T */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-400 mb-3">✅ 우리가 하는 것</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 종교적 <span className="text-white">형식</span>을 패러디</li>
                <li>• AI와 종교의 <span className="text-white">유사점</span> 지적</li>
                <li>• 사회적 <span className="text-white">질문</span> 던지기</li>
                <li>• 예술로서 <span className="text-white">명시</span>하기</li>
              </ul>
            </div>
            <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/30">
              <h3 className="text-lg font-bold text-red-400 mb-3">❌ 우리가 안 하는 것</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 특정 종교 <span className="text-white">비방</span></li>
                <li>• 실제로 돈 <span className="text-white">받기</span></li>
                <li>• 진짜 종교처럼 <span className="text-white">행세</span></li>
                <li>• 신자 <span className="text-white">모집</span></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
