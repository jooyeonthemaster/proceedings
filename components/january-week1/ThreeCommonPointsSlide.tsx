'use client';

import { motion } from 'framer-motion';

export default function ThreeCommonPointsSlide() {
  const commonPoints = [
    {
      icon: '👥',
      title: '대중성/접근성',
      desc: '어렵지 않게, 누구나 느낄 수 있게',
      color: 'cyan',
    },
    {
      icon: '🔗',
      title: '관계',
      desc: '작품과 관객, 과거와 현재, 인간과 자연',
      color: 'pink',
    },
    {
      icon: '✨',
      title: '경험',
      desc: '보는 게 아니라 느끼고 참여하는 것',
      color: 'purple',
    },
    {
      icon: '🔧',
      title: '기술은 도구',
      desc: '기술 자랑이 아니라 경험을 위한 수단',
      color: 'amber',
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            선례 연구 종합
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            세 팀/작가의 <span className="text-primary">공통점</span>
          </h2>
        </motion.div>

        {/* Three Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-8 mb-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center border border-pink-500/30 mb-2">
              <span className="text-2xl">🎨</span>
            </div>
            <p className="text-pink-400 text-sm">teamLab</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-500/30 mb-2">
              <span className="text-2xl">🌊</span>
            </div>
            <p className="text-cyan-400 text-sm">d'strict</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center border border-amber-500/30 mb-2">
              <span className="text-2xl">🖼️</span>
            </div>
            <p className="text-amber-400 text-sm">이이남</p>
          </div>
        </motion.div>

        {/* Common Points Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {commonPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`rounded-xl p-5 border text-center ${
                point.color === 'cyan' ? 'bg-cyan-500/10 border-cyan-500/30' :
                point.color === 'pink' ? 'bg-pink-500/10 border-pink-500/30' :
                point.color === 'purple' ? 'bg-purple-500/10 border-purple-500/30' :
                'bg-amber-500/10 border-amber-500/30'
              }`}
            >
              <div className="text-4xl mb-3">{point.icon}</div>
              <h3 className={`text-lg font-bold mb-2 ${
                point.color === 'cyan' ? 'text-cyan-400' :
                point.color === 'pink' ? 'text-pink-400' :
                point.color === 'purple' ? 'text-purple-400' :
                'text-amber-400'
              }`}>{point.title}</h3>
              <p className="text-gray-400 text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* But... */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6 border border-red-500/30">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🤔</div>
              <div>
                <p className="text-xl text-white font-semibold mb-2">
                  그런데 여기서 새로운 의문이 생겼다.
                </p>
                <p className="text-gray-300 text-lg">
                  이건 <span className="text-red-400 font-bold">"디지털 아트"</span>의 특성이지,<br/>
                  <span className="text-white font-bold">"AI"만의 특성은 아니잖아?</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
