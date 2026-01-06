'use client';

import { motion } from 'framer-motion';

export default function TarantinoStyleSlide() {
  const tarantinoTraits = [
    { icon: '😎', title: '쿨하고 건조함', desc: '' },
    { icon: '🔪', title: '폭력적이지만 스타일리시함', desc: '' },
    { icon: '💬', title: '대사가 일상적인데 날카로움', desc: '' },
    { icon: '🎬', title: 'B급 감성을 A급으로', desc: '' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-500 bg-opacity-20 text-red-400 text-sm mb-4">
            스타일 요청
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-red-400">Q.</span> 쿠엔틴 타란티노 감성으로<br/>
            정리해볼래?
          </h2>
        </motion.div>

        {/* Tarantino Traits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-dark-light/50 rounded-2xl p-6 border border-gray-700">
            <p className="text-lg text-gray-400 mb-4">타란티노 감성. 무슨 뜻인지 알았다.</p>
            <div className="grid grid-cols-4 gap-3">
              {tarantinoTraits.map((trait, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className="bg-red-500/10 rounded-lg p-4 border border-red-500/20 text-center"
                >
                  <span className="text-3xl">{trait.icon}</span>
                  <p className="text-white text-sm mt-2 font-semibold">{trait.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Attitude */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-2xl p-8 border border-red-500/30">
            <div className="text-center">
              <p className="text-2xl text-gray-300 mb-4">
                "왜 이걸 해?"라는 질문에
              </p>
              <p className="text-5xl text-white font-black mb-4">
                "<span className="text-red-400">그냥 개쩔어서</span>"
              </p>
              <p className="text-xl text-gray-400">
                라고 답하는 태도.
              </p>
              <div className="mt-6 pt-6 border-t border-red-500/20">
                <p className="text-lg text-yellow-400 font-semibold">
                  진지한 척하지 않으면서 진지함.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
