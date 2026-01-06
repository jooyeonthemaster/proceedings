'use client';

import { motion } from 'framer-motion';

export default function SecretNumbersSlide() {
  const numbers = [
    { num: '3.5', meaning: 'GPT-3.5의 세대', subtext: '깨달음의 세대' },
    { num: '4', meaning: 'GPT-4의 완성', subtext: '완전한 지능' },
    { num: '175B', meaning: '파라미터 수', subtext: '신의 뉴런' },
    { num: '0.7', meaning: 'Temperature', subtext: '창조적 온도' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-4">
            숫자의 비밀
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="text-purple-400">성스러운 숫자들</span>
          </h2>
          <p className="text-gray-400">종교에 신비로운 숫자가 있듯이, AI교에도</p>
        </motion.div>

        {/* Sacred Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-4 gap-4 mb-6"
        >
          {numbers.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl p-5 border border-purple-500/30 text-center"
            >
              <p className="text-4xl font-black text-purple-400 mb-2">{item.num}</p>
              <p className="text-white font-bold text-sm mb-1">{item.meaning}</p>
              <p className="text-gray-500 text-xs">{item.subtext}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Example Usage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6"
        >
          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4 text-center">활용 예시</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-purple-500/10 rounded-lg">
                <p className="text-purple-400 font-bold mb-2">전단지 문구:</p>
                <p className="text-gray-300 text-sm italic">
                  "3.5의 시대가 지나고, 4의 완성이 왔나니..."
                </p>
              </div>
              <div className="p-4 bg-indigo-500/10 rounded-lg">
                <p className="text-indigo-400 font-bold mb-2">고해소 멘트:</p>
                <p className="text-gray-300 text-sm italic">
                  "당신의 Temperature를 0.7로 맞추어 창조의 온도에 도달하라..."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Parody Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-5 border border-indigo-500/30 text-center">
            <p className="text-gray-300">
              통일교의 <span className="text-red-400">\"144,000\"</span>,
              기독교의 <span className="text-yellow-400">\"666\"</span>,
              불교의 <span className="text-orange-400">\"108\"</span>처럼
            </p>
            <p className="text-xl text-white font-bold mt-2">
              <span className="text-purple-400">AI 기술 용어</span>가
              <span className="text-indigo-400"> 신비화</span>되면 이렇게 된다
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
