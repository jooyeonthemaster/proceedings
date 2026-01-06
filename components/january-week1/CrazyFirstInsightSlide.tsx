'use client';

import { motion } from 'framer-motion';

export default function CrazyFirstInsightSlide() {
  const sequence = [
    { num: 1, text: '미친 짓 한다', icon: '🤪' },
    { num: 2, text: '영상 찍는다', icon: '📹' },
    { num: 3, text: 'SNS에 올린다', icon: '📱' },
    { num: 4, text: '"이 미친놈들 뭐야?" 반응', icon: '😲' },
    { num: 5, text: '그게 쌓인다', icon: '📈' },
    { num: 6, text: '전시 제안이 온다', icon: '🏛️' },
    { num: 7, text: '그때 "예술가"가 되는 거다', icon: '🎨' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            핵심 인사이트
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-primary">순서</span>가 중요하다
          </h2>
        </motion.div>

        {/* Banksy Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700">
            <p className="text-gray-300 text-center">
              뱅크시가 벽에 그림 그릴 때 <span className="text-red-400">"이건 자본주의 비판입니다"</span>라고 설명을 쓰지 않았다.<br/>
              <span className="text-white font-bold">걍 그렸다.</span> 사람들이 알아서 해석했다.
            </p>
          </div>
        </motion.div>

        {/* Sequence */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {sequence.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                  i === 6
                    ? 'bg-primary/20 border border-primary/30'
                    : 'bg-dark-light/50 border border-gray-700'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className={`text-sm ${i === 6 ? 'text-primary font-bold' : 'text-gray-300'}`}>
                  {item.num}. {item.text}
                </span>
                {i < 6 && <span className="text-gray-600 ml-1">→</span>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Point */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-2xl p-8 border border-primary/30 text-center">
            <p className="text-xl text-gray-300 mb-4">
              진짜 필요한 건 <span className="text-red-400 line-through">예술적 포장</span>이 아니다.
            </p>
            <p className="text-4xl text-white font-black">
              진짜 필요한 건 <span className="text-primary">미친 짓 리스트</span>다.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
