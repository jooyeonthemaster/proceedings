'use client';

import { motion } from 'framer-motion';

export default function CreativeGroupSlide() {
  const comparison = [
    { type: '교육/실험 콘텐츠', examples: '긱블, 스펀지', isUs: false },
    { type: '창작 집단', examples: '팀랩, 디스트릭트', isUs: true },
  ];

  const vision = [
    { step: '1', text: '10개 이상의 오프라인 체험 프로그램 개발', icon: '🎮' },
    { step: '2', text: '하나의 공간에 모아서 전시 콘텐츠로 런칭', icon: '🏛️' },
    { step: '3', text: '전 세계를 돌아다니며 AI 콘텐츠 전시', icon: '🌍' },
    { step: '4', text: '"AI 콘텐츠 개발사"가 아닌 "AI 콘텐츠 창작 집단"', icon: '🎨' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500 bg-opacity-20 text-amber-400 text-sm mb-4">
            포지셔닝
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            긱블도, 스펀지도 아니다.<br />
            <span className="text-primary">창작 집단</span>이다.
          </h2>
        </motion.div>

        {/* Positioning Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          {comparison.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-5 border ${
                item.isUs
                  ? 'bg-primary/10 border-primary/50 ring-2 ring-primary/30'
                  : 'bg-dark-light/50 border-gray-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className={`text-sm ${item.isUs ? 'text-primary' : 'text-gray-500'}`}>
                    {item.type}
                  </span>
                  <p className={`text-lg font-semibold ${item.isUs ? 'text-white' : 'text-gray-400'}`}>
                    {item.examples}
                  </p>
                </div>
                <span className={`text-3xl ${item.isUs ? '' : 'opacity-30'}`}>
                  {item.isUs ? '✅' : '❌'}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Vision Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-lg text-gray-400 mb-4 text-center">장기 비전</h3>
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 via-cyan-500/50 to-purple-500/50 -translate-y-1/2"></div>

            <div className="grid grid-cols-4 gap-4 relative">
              {vision.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-dark rounded-xl p-4 border border-gray-700 text-center relative"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary font-bold text-sm">{item.step}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-snug">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-xl p-6 border border-primary/30"
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl">🎨</span>
            <div>
              <h4 className="text-white font-bold text-lg mb-2">AI 콘텐츠의 작품화</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                팀랩의 "작품", 디스트릭트의 "파도"처럼 우리 AI 콘텐츠도 <span className="text-primary font-semibold">하나의 작품으로 브랜딩</span> 필요<br />
                엄청난 예술적 가치가 아니라, <span className="text-amber-400 font-semibold">콘텐츠 자체로 가치를 보유</span>하게 되는 것<br />
                기업 입장: "내 행사에 이런 프로그램이 있으면 좋겠다"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
