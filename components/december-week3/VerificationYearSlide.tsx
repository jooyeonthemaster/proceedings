'use client';

import { motion } from 'framer-motion';

export default function VerificationYearSlide() {
  const achievements = [
    {
      category: '사업 기획',
      before: '감에 의존한 아이디어',
      after: 'AI와 논리 검증된 아이템',
      growth: '논리력 500%↑',
      icon: '🎯'
    },
    {
      category: '사업계획서',
      before: '년 1-2개 작성',
      after: '년 10개+ 작성 & 양산',
      growth: '생산성 1000%↑',
      icon: '📋'
    },
    {
      category: '프로그램 개발',
      before: '개발 불가능 (의존)',
      after: '자체 개발 & 외주 가능',
      growth: '∞ 성장',
      icon: '💻'
    },
    {
      category: '수익 창출',
      before: '컨설팅만 가능',
      after: '컨설팅 + 개발 외주',
      growth: '수익원 다변화',
      icon: '💰'
    }
  ];

  const goals2025 = [
    { goal: '사업계획서 컨설팅', status: '달성', icon: '✅' },
    { goal: '코딩 공부', status: '달성++', icon: '🚀' },
  ];

  const actualResults = [
    { result: '사업계획서 대필 (컨설팅)', detail: '다수 프로젝트 수행' },
    { result: '코딩으로 외주개발 진행', detail: '실제 매출 발생' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        {/* Year watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-black text-white opacity-[0.02] select-none">
          2025
        </div>
      </div>

      <div className="max-w-7xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500 bg-opacity-20 text-amber-400 text-sm mb-4">
            2025 회고 - 총정리
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🔥 2025년 = <span className="text-amber-400">검증의 해</span>
          </h2>
          <p className="text-xl text-gray-400">
            내 인생에서 가장 큰 성장과 성취의 해
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8">
          {/* Left: Growth Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">📈</span> 영역별 성장
            </h3>
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-dark-light rounded-xl p-4 border border-gray-700"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-white font-semibold">{item.category}</span>
                    </div>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold">
                      {item.growth}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-red-500/10 rounded-lg p-2 border border-red-500/20">
                      <div className="text-red-400 text-xs mb-1">Before</div>
                      <div className="text-gray-300 text-sm">{item.before}</div>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-2 border border-green-500/20">
                      <div className="text-green-400 text-xs mb-1">After</div>
                      <div className="text-white text-sm font-medium">{item.after}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Goals & Mindset */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* 2025 Goals */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="mr-2">🎯</span> 2025년 목표 달성
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {goals2025.map((item, index) => (
                  <div
                    key={index}
                    className="bg-green-500/10 rounded-xl p-4 border border-green-500/30 text-center"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <div className="text-white font-semibold mt-2">{item.goal}</div>
                    <div className="text-green-400 text-sm mt-1">{item.status}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actual Results */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="mr-2">✨</span> 실제로 이룬 것들
              </h3>
              <div className="space-y-3">
                {actualResults.map((item, index) => (
                  <div
                    key={index}
                    className="bg-dark-light rounded-xl p-4 border border-primary/30"
                  >
                    <div className="text-primary font-semibold">{item.result}</div>
                    <div className="text-gray-400 text-sm mt-1">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mindset Shift */}
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-6 border border-amber-500/30">
              <h4 className="text-amber-400 font-semibold mb-3 flex items-center">
                <span className="mr-2">💡</span> 마인드셋 변화
              </h4>
              <p className="text-2xl text-white font-bold leading-relaxed">
                "이런 성취를 이루는 과정에서<br/>
                <span className="text-primary">내가 무엇을 못할까?</span><br/>
                라는 생각이 들기 시작했다"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-dark-light rounded-xl p-4 border border-gray-700">
            <p className="text-gray-300 text-lg">
              2025년은 <span className="text-amber-400 font-bold">검증의 해</span>였고,
              2026년은 <span className="text-primary font-bold">결실의 해</span>가 될 것이다
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
