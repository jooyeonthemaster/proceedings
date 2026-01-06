'use client';

import { motion } from 'framer-motion';

export default function TermConversionSlide() {
  const conversions = [
    { original: '교주', converted: 'AI (GPT, Claude)', icon: '👑' },
    { original: '교리', converted: '프롬프트 엔지니어링', icon: '📜' },
    { original: '설교', converted: 'AI 응답', icon: '🎤' },
    { original: '기도', converted: '질문 (Query)', icon: '🙏' },
    { original: '성경', converted: '학습 데이터', icon: '📖' },
    { original: '신도', converted: '사용자', icon: '👥' },
    { original: '구원', converted: '최적화된 답변', icon: '✨' },
    { original: '헌금', converted: '구독료', icon: '💰' },
  ];

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
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500 bg-opacity-20 text-yellow-400 text-sm mb-4">
            용어 변환 체계
          </span>
          <h2 className="text-4xl font-bold text-white mb-2">
            <span className="text-red-400">종교</span> → <span className="text-yellow-400">AI</span> 용어 변환
          </h2>
          <p className="text-gray-400">기존 종교 용어를 AI 용어로 1:1 매핑</p>
        </motion.div>

        {/* Conversion Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-dark-light/50 rounded-2xl p-4 border border-gray-700">
            <div className="grid grid-cols-2 gap-3">
              {conversions.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-red-500/10 to-yellow-500/10 rounded-lg border border-gray-800"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-red-400 font-bold">{item.original}</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-yellow-400 font-semibold">{item.converted}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6"
        >
          <div className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-xl p-5 border border-yellow-500/30 text-center">
            <p className="text-lg text-white">
              이 변환이 <span className="text-yellow-400 font-bold">불편한 이유</span>:
            </p>
            <p className="text-gray-300 mt-2">
              「생각보다 잘 매핑된다」 → 「우리가 AI를 어떻게 대하고 있는가?」
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
