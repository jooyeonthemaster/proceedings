'use client';

import { motion } from 'framer-motion';

export default function AccentIDIntroSlide() {
  const services = [
    { name: 'AI 향수 추천', desc: '취향 분석 기반 향수 추천', icon: '💐', status: 'active' },
    { name: 'AI 조향', desc: '개인 맞춤형 향 조합', icon: '🧪', status: 'active' },
    { name: 'AI 이미지', desc: '취향 시각화 이미지 생성', icon: '🎨', status: 'active' },
    { name: '피규어 디퓨저', desc: '나만의 피규어 + 디퓨저', icon: '🧴', status: 'issue' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        {/* Perfume Icon */}
        <div className="absolute top-20 right-20 text-[120px] opacity-5">
          🧴
        </div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-4">
            사업 2
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🧴 <span className="text-purple-400">악센트 ID</span>
          </h2>
          <p className="text-xl text-gray-400">AI 기반 향수 체험 서비스</p>
        </motion.div>

        {/* Definition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/30 mb-8 text-center"
        >
          <p className="text-2xl text-white">
            &quot;AI가 당신의 취향을 분석하고,<br />
            <span className="text-purple-400 font-bold">나만의 향</span>을 만들어주는 서비스&quot;
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg text-gray-400 mb-4 text-center">서비스 구성</h3>
          <div className="grid grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className={`rounded-xl p-5 border text-center ${
                  service.status === 'issue'
                    ? 'bg-red-500/10 border-red-500/30'
                    : 'bg-dark-light/50 border-gray-700'
                }`}
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h4 className={`font-semibold mb-2 ${
                  service.status === 'issue' ? 'text-red-400' : 'text-white'
                }`}>{service.name}</h4>
                <p className="text-gray-400 text-sm">{service.desc}</p>
                {service.status === 'issue' && (
                  <span className="inline-block mt-2 px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-xs">
                    ⚠️ 문제 발생
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 grid grid-cols-2 gap-4"
        >
          <div className="bg-primary/10 rounded-xl p-4 border border-primary/30 text-center">
            <p className="text-primary font-semibold">✅ 정상 운영</p>
            <p className="text-gray-400 text-sm mt-1">AI 향수 추천, AI 조향, AI 이미지</p>
          </div>
          <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30 text-center">
            <p className="text-red-400 font-semibold">⚠️ 문제 발생</p>
            <p className="text-gray-400 text-sm mt-1">피규어 디퓨저 서비스</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
