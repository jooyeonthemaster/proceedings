'use client';

import { motion } from 'framer-motion';

export default function PpudeokSlide() {
  const onlineFeatures = [
    { name: '온라인 판매', icon: '🛒', desc: '전국 배송 가능' },
    { name: '맞춤 주문', icon: '✨', desc: '커스텀 옵션 제공' },
    { name: '정기 구독', icon: '📦', desc: '정기 배송 서비스' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        {/* Icon */}
        <div className="absolute bottom-20 left-20 text-[120px] opacity-5">
          🍰
        </div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500 bg-opacity-20 text-amber-400 text-sm mb-4">
            신규 프로젝트
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🍰 <span className="text-amber-400">뿌덕 온라인</span>
          </h2>
          <p className="text-xl text-gray-400">뿌덕 온라인 판매 채널 오픈</p>
        </motion.div>

        {/* Main Announcement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-8 border border-amber-500/30 mb-8 text-center"
        >
          <div className="text-6xl mb-4">🎉</div>
          <p className="text-3xl text-white font-bold mb-2">
            뿌덕 <span className="text-amber-400">온라인 판매</span> 시작!
          </p>
          <p className="text-gray-400">
            오프라인 매장을 넘어 전국 고객에게 다가갑니다
          </p>
        </motion.div>

        {/* Online Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-6 mb-8"
        >
          {onlineFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="bg-dark-light/50 rounded-xl p-6 border border-gray-700 text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h4 className="text-white font-bold text-xl mb-2">{feature.name}</h4>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Expected Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-primary/10 rounded-xl p-6 border border-primary/30"
        >
          <h4 className="text-primary font-bold mb-4 flex items-center gap-2 text-lg">
            <span>🎯</span> 기대 효과
          </h4>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-dark/50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🌍</div>
              <p className="text-white font-semibold text-sm">전국 판매</p>
              <p className="text-gray-500 text-xs">지역 제한 해소</p>
            </div>
            <div className="bg-dark/50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">📈</div>
              <p className="text-white font-semibold text-sm">매출 확대</p>
              <p className="text-gray-500 text-xs">새로운 수익원</p>
            </div>
            <div className="bg-dark/50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">👥</div>
              <p className="text-white font-semibold text-sm">고객 확보</p>
              <p className="text-gray-500 text-xs">신규 고객층</p>
            </div>
            <div className="bg-dark/50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🔄</div>
              <p className="text-white font-semibold text-sm">브랜드 확장</p>
              <p className="text-gray-500 text-xs">인지도 상승</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
