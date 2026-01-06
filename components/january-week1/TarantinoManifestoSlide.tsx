'use client';

import { motion } from 'framer-motion';

export default function TarantinoManifestoSlide() {
  const comparison = [
    { label: '남들', content: '"AI는 인류의 미래입니다"', style: '진지함' },
    { label: '우리', content: '"AI 좀 이상해"', style: '쿨함' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#1a0a0a] via-dark to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-yellow-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-900 bg-opacity-50 text-red-400 text-sm mb-4 border border-red-800">
            타란티노 버전
          </span>
          <h2 className="text-4xl font-bold text-white mb-2">
            우리의 선언
          </h2>
        </motion.div>

        {/* Main Manifesto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-b from-red-900/20 to-black/40 rounded-2xl p-8 border border-red-800/30">
            <div className="text-center space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl text-white font-black"
              >
                "AI? <span className="text-red-400">걍 존나 이상하잖아.</span><br/>
                그래서 만져보는 거야."
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-400 text-lg space-y-2"
              >
                <p>거창한 선언 없다. 인류의 미래 어쩌고 없다. 숭고함? 그런 거 아니고.</p>
                <p className="text-white font-semibold">
                  이상한 게 있다. 근데 멋있다. <span className="text-yellow-400">그래서 갖고 노는 거다.</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="pt-4 border-t border-red-800/30"
              >
                <p className="text-gray-500 text-sm mb-2">타란티노가 B급 영화 좋아하는 이유:</p>
                <p className="text-xl text-white">
                  "이게 예술이냐" 안 따진다. <span className="text-red-400">"이거 개쩔어"</span> 그게 다다.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 text-center">
              <p className="text-gray-500 text-sm mb-2">남들</p>
              <p className="text-gray-400 mb-2">"AI는 인류의 미래입니다"</p>
              <p className="text-gray-400 mb-2">"기술과 예술의 융합"</p>
              <p className="text-gray-400">"심오한 메시지"</p>
              <p className="text-gray-600 text-sm mt-3">→ 진지함</p>
            </div>
            <div className="bg-red-900/20 rounded-xl p-5 border border-red-800/30 text-center">
              <p className="text-red-400 text-sm mb-2">우리</p>
              <p className="text-white mb-2">"AI 좀 이상해"</p>
              <p className="text-white mb-2">"걍 재밌어서"</p>
              <p className="text-white">"ㅋㅋ 이거 봐"</p>
              <p className="text-red-400 text-sm mt-3 font-bold">→ 쿨함</p>
            </div>
          </div>
        </motion.div>

        {/* One Line Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <div className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-xl p-6 border border-red-500/30 text-center">
            <p className="text-gray-400 text-sm mb-2">한 줄로:</p>
            <p className="text-3xl text-white font-black">
              "<span className="text-red-400">AI 이상해서 만져보는 사람들</span>"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
