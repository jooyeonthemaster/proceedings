'use client';

import { motion } from 'framer-motion';

export default function DecemberPlanSlide() {
  const plans = [
    {
      phase: "Phase 1",
      date: "~ 12월 9일",
      title: "관광벤처 최종 발표 준비",
      description: "관광벤처 지원사업 최종 발표 준비 및 진행",
      icon: "🎯",
      color: "from-blue-500 to-cyan-600"
    },
    {
      phase: "Phase 2",
      date: "12월 중순 ~",
      title: "2026년 지원사업 전략 수립",
      description: "사업 아이템 구상 및 지원사업 지원 전략 수립",
      icon: "📋",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="w-full h-screen bg-white p-16 flex flex-col justify-center relative overflow-hidden font-sans">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-blue-500 pl-8 mb-12"
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-3">12월 핵심 계획</h2>
        <p className="text-xl text-gray-500">개발팀장 로드맵</p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {/* Timeline */}
        <div className="flex gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2 }}
              className="flex-1"
            >
              <div className={`h-full bg-gradient-to-br ${plan.color} rounded-3xl p-10 text-white shadow-xl`}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-7xl">{plan.icon}</span>
                  <span className="bg-white bg-opacity-20 px-5 py-2 rounded-full text-lg font-bold">
                    {plan.phase}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{plan.title}</h3>
                <p className="text-white text-opacity-90 text-xl mb-6">{plan.description}</p>
                <div className="bg-white bg-opacity-20 rounded-xl px-6 py-3 inline-block">
                  <span className="font-mono font-bold text-xl">{plan.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-100 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">2026년 지원사업 준비 방향</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-5xl mb-4">💡</div>
              <h4 className="font-bold text-xl text-gray-800 mb-2">사업 아이템 발굴</h4>
              <p className="text-lg text-gray-500">AI 기반 신규 서비스 기획</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="font-bold text-xl text-gray-800 mb-2">시장 분석</h4>
              <p className="text-lg text-gray-500">트렌드 및 경쟁사 조사</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-5xl mb-4">📝</div>
              <h4 className="font-bold text-xl text-gray-800 mb-2">사업계획서 작성</h4>
              <p className="text-lg text-gray-500">지원사업 맞춤형 제안서</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="flex items-center gap-6 bg-gray-900 rounded-full px-10 py-5">
            <div className="text-center">
              <div className="text-blue-400 font-bold text-xl">NOW</div>
              <div className="text-sm text-gray-400">12월 1주</div>
            </div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <div className="text-center">
              <div className="text-cyan-400 font-bold text-xl">발표</div>
              <div className="text-sm text-gray-400">12월 9일</div>
            </div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            <div className="text-center">
              <div className="text-purple-400 font-bold text-xl">전략</div>
              <div className="text-sm text-gray-400">12월 중순~</div>
            </div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            <div className="text-center">
              <div className="text-pink-400 font-bold text-xl">2026</div>
              <div className="text-sm text-gray-400">지원사업</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
