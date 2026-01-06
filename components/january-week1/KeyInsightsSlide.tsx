'use client';

import { motion } from 'framer-motion';

export default function KeyInsightsSlide() {
  const insights = [
    {
      num: '01',
      title: '포장은 나중이다',
      desc: '미친 짓 → 철학적 의미 부여 (순서가 중요)',
      color: 'pink',
    },
    {
      num: '02',
      title: '권위를 AI로 갈아끼워라',
      desc: '인간만 하던 것을 AI가 하면 질문이 생긴다',
      color: 'orange',
    },
    {
      num: '03',
      title: '진짜 같아야 한다',
      desc: 'The Yes Men처럼 형식의 완성도가 핵심',
      color: 'yellow',
    },
    {
      num: '04',
      title: '불편함이 예술이다',
      desc: '사회적 질문을 던지는 불편함',
      color: 'purple',
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-pink-500 bg-opacity-20 text-pink-400 text-sm mb-4">
            핵심 인사이트
          </span>
          <h2 className="text-5xl font-bold text-white">
            <span className="text-pink-400">4가지</span> 깨달음
          </h2>
        </motion.div>

        {/* Insights Grid */}
        <div className="grid grid-cols-2 gap-5">
          {insights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className={`bg-gradient-to-br from-${item.color}-500/10 to-${item.color}-500/5 rounded-2xl p-6 border border-${item.color}-500/30`}
            >
              <div className="flex items-start gap-4">
                <span className={`text-4xl font-black text-${item.color}-400 opacity-50`}>{item.num}</span>
                <div>
                  <h3 className={`text-xl font-bold text-${item.color}-400 mb-2`}>{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-xl text-white font-bold">
              "AI? <span className="text-primary">걍 존나 이상하잖아.</span>"
            </p>
            <p className="text-gray-500 mt-2">— 이 모든 사고의 출발점이자 도착점</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
