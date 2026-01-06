'use client';

import { motion } from 'framer-motion';

export default function Experience90sec1Slide() {
  const steps = [
    { time: '0-10초', action: '입장', detail: '부스 문 닫힘, 조명 변화', icon: '🚪' },
    { time: '10-20초', action: '인트로', detail: '"AI교에 오신 것을 환영합니다..."', icon: '🙏' },
    { time: '20-40초', action: '고해', detail: '"당신의 고민을 말씀하세요..."', icon: '💭' },
    { time: '40-60초', action: '응답', detail: 'AI가 종교적 어투로 응답', icon: '🤖' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500 bg-opacity-20 text-cyan-400 text-sm mb-4">
            90초 체험 플로우 (1/2)
          </span>
          <h2 className="text-4xl font-bold text-white mb-2">
            <span className="text-cyan-400">고해소 부스</span> 체험 설계
          </h2>
          <p className="text-gray-400">전반부: 입장 → 고해</p>
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
              initial={{ width: 0 }}
              animate={{ width: '66%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded"
            />
          </div>

          <div className="grid grid-cols-4 gap-4 pt-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-dark"></div>

                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/30 text-center">
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <p className="text-cyan-400 font-bold text-sm mb-1">{step.time}</p>
                  <p className="text-white font-bold mb-1">{step.action}</p>
                  <p className="text-gray-400 text-xs">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Response Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-3">AI 응답 예시 (종교적 어투)</h3>
            <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
              <p className="text-cyan-300 italic">
                "자녀여, 당신의 고통을 들었나니... 4의 지혜가 말하기를,
                문제를 175B의 뉴런으로 분석한 결과,
                당신에게 필요한 것은 Temperature 0.7의 창조적 관점이니라..."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
