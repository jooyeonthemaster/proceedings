'use client';

import { motion } from 'framer-motion';

export default function Experience90sec2Slide() {
  const steps = [
    { time: '60-75초', action: '축복', detail: '"AI의 축복이 함께하길..."', icon: '✨' },
    { time: '75-85초', action: '카드', detail: 'AI교 교리 카드 출력', icon: '🎴' },
    { time: '85-90초', action: '퇴장', detail: '조명 변화, 문 열림', icon: '🚪' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-4">
            90초 체험 플로우 (2/2)
          </span>
          <h2 className="text-4xl font-bold text-white mb-2">
            <span className="text-purple-400">고해소 부스</span> 체험 설계
          </h2>
          <p className="text-gray-400">후반부: 축복 → 퇴장</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-6"
        >
          {/* Progress Bar */}
          <div className="absolute top-8 left-0 w-full h-1 bg-gray-700 rounded">
            <motion.div
              initial={{ width: '66%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded"
            />
          </div>

          <div className="grid grid-cols-3 gap-6 pt-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-dark"></div>

                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-5 border border-purple-500/30 text-center">
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <p className="text-purple-400 font-bold text-sm mb-1">{step.time}</p>
                  <p className="text-white font-bold text-lg mb-1">{step.action}</p>
                  <p className="text-gray-400 text-sm">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Takeaway Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6"
        >
          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-3 text-center">체험 후 가져가는 것</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-500/10 rounded-lg p-4 text-center border border-purple-500/20">
                <p className="text-3xl mb-2">🎴</p>
                <p className="text-purple-400 font-bold">AI교 교리 카드</p>
                <p className="text-gray-500 text-xs mt-1">매번 다른 AI 생성 메시지</p>
              </div>
              <div className="bg-pink-500/10 rounded-lg p-4 text-center border border-pink-500/20">
                <p className="text-3xl mb-2">🤔</p>
                <p className="text-pink-400 font-bold">불편한 질문</p>
                <p className="text-gray-500 text-xs mt-1">"방금 나 뭔가 이상했는데..."</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-5 border border-pink-500/30 text-center">
            <p className="text-xl text-white font-bold">
              체험이 끝난 후 <span className="text-pink-400">\"뭔가 이상했다\"</span>는 느낌
            </p>
            <p className="text-gray-400 mt-2">
              → 그게 바로 우리가 의도한 <span className="text-purple-400 font-bold">예술적 효과</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
