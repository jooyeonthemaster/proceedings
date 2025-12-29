'use client';

import { motion } from 'framer-motion';

export default function VSAIProductionGuideSlide() {
  const checklist = [
    { item: 'AI 포토부스 로봇', status: 'ready', icon: '🤖' },
    { item: '즉석 인화기', status: 'ready', icon: '🖨️' },
    { item: '이동주 분장 준비', status: 'need', icon: '🎭' },
    { item: '촬영 카메라 (2대+)', status: 'ready', icon: '📹' },
    { item: '투표용 보드/스티커', status: 'need', icon: '🗳️' },
    { item: '선물용 인화 사진', status: 'need', icon: '🎁' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        {/* Gear Icon */}
        <div className="absolute top-20 right-10 text-[100px] opacity-5">
          ⚙️
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
          <span className="inline-block px-4 py-2 rounded-full bg-red-500 bg-opacity-20 text-red-400 text-sm mb-4">
            제작 가이드
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            ⚙️ 제작 디테일
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {/* Core Concept */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-xl p-6 border border-primary/30"
          >
            <h4 className="text-primary font-bold mb-4 flex items-center gap-2 text-xl">
              <span>🎯</span> 핵심 컨셉
            </h4>
            <div className="space-y-4">
              <div className="bg-dark/50 rounded-lg p-4">
                <p className="text-2xl text-white font-bold text-center">
                  &quot;미친 척 사람들에게<br />
                  <span className="text-primary">보여주고 튀는</span> 형태&quot;
                </p>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>뱅크시 스타일의 <span className="text-primary font-semibold">게릴라 콘텐츠</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>예측 불가능한 <span className="text-orange-400 font-semibold">스트릿 등장</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>호기심 자극 + <span className="text-pink-400 font-semibold">바이럴 유도</span></span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Gift Strategy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/30"
          >
            <h4 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              <span>🎁</span> 선물 전략
            </h4>
            <div className="bg-dark/50 rounded-lg p-4 mb-4">
              <p className="text-white font-semibold text-center mb-2">행인에게 드리는 선물</p>
              <p className="text-gray-400 text-sm text-center">
                거리에서 사람들에게 찍어드린 후<br />
                <span className="text-amber-400 font-semibold">인화해서 드리는 선물</span> 정도는 필요
              </p>
            </div>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-400">✓</span>
                <span>참여 유도를 위한 <span className="text-amber-400 font-semibold">인센티브</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">✓</span>
                <span>즉석 인화 사진 = <span className="text-amber-400 font-semibold">특별한 경험</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">✓</span>
                <span>SNS 공유 유도 가능성 ↑</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 bg-dark-light/50 rounded-xl p-6 border border-gray-700"
        >
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <span>📋</span> 준비물 체크리스트
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {checklist.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className={`rounded-lg p-3 border flex items-center gap-3 ${
                  item.status === 'ready'
                    ? 'bg-primary/10 border-primary/30'
                    : 'bg-red-500/10 border-red-500/30'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-white text-sm font-semibold">{item.item}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  item.status === 'ready'
                    ? 'bg-primary/20 text-primary'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {item.status === 'ready' ? '✓ 준비' : '⚠ 필요'}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
