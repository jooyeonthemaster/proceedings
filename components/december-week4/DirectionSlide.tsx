'use client';

import { motion } from 'framer-motion';

export default function DirectionSlide() {
  const transitions = [
    { before: 'B2B 영업이 메인', after: '유튜브 브랜딩이 메인, B2B는 부차적', icon: '📺' },
    { before: '개발 외주 수주', after: '창작 집단으로 작품 판매', icon: '🎨' },
    { before: '콜드메일/웜메일', after: '콘텐츠 바이럴 → 인바운드 영업', icon: '🔥' },
  ];

  const values = [
    { title: '영업용 콘텐츠', desc: '기업에게 우리 역량 자연스럽게 노출', icon: '💼', color: 'cyan' },
    { title: '브랜딩 콘텐츠', desc: '네안데르를 알리는 홍보 채널', icon: '📢', color: 'primary' },
    { title: '자체 IP', desc: '재밌는 콘텐츠로서 독립적 가치 보유', icon: '⭐', color: 'purple' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500 bg-opacity-20 text-cyan-400 text-sm mb-4">
            2026년 핵심 방향
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            "우리는 <span className="text-cyan-400">체험형 AI 콘텐츠 기획사</span>다"
          </h2>
        </motion.div>

        {/* Key Decision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-cyan-500/10 to-primary/10 rounded-2xl p-6 border border-cyan-500/30 mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">✅</span>
            <div>
              <p className="text-lg text-gray-300">지난 3주차 회의에서 논의한 <span className="text-cyan-400 font-bold">VS AI 유튜브 콘텐츠</span> 방향</p>
              <p className="text-2xl text-white font-bold mt-1">→ 전원 동의 완료</p>
            </div>
          </div>
        </motion.div>

        {/* Transition Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-xl text-gray-400 mb-4 text-center">핵심 전환점</h3>
          <div className="grid grid-cols-3 gap-4">
            {transitions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-dark-light/50 rounded-xl p-4 border border-gray-700"
              >
                <div className="text-3xl mb-3 text-center">{item.icon}</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 text-xs">Before</span>
                    <span className="text-gray-500 text-sm line-through">{item.before}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-xs">After</span>
                    <span className="text-white text-sm font-semibold">{item.after}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* VS AI 3 Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl text-gray-400 mb-4 text-center">VS AI 콘텐츠의 <span className="text-primary">3가지 가치</span></h3>
          <div className="grid grid-cols-3 gap-4">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className={`rounded-xl p-5 border text-center ${
                  item.color === 'cyan' ? 'bg-cyan-500/10 border-cyan-500/30' :
                  item.color === 'primary' ? 'bg-primary/10 border-primary/30' :
                  'bg-purple-500/10 border-purple-500/30'
                }`}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className={`font-bold text-lg mb-2 ${
                  item.color === 'cyan' ? 'text-cyan-400' :
                  item.color === 'primary' ? 'text-primary' :
                  'text-purple-400'
                }`}>{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
