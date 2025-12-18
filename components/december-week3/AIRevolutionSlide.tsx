'use client';

import { motion } from 'framer-motion';

export default function AIRevolutionSlide() {
  const evolution = [
    {
      year: '2023',
      title: '줄글 시대',
      description: '사업계획서를 텍스트 위주로 작성',
      method: '순수 타이핑',
      icon: '📝',
      color: 'gray',
      problem: '가독성 낮음, 시간 소요 큼'
    },
    {
      year: '2024',
      title: '수동 도식화 시대',
      description: 'PPT 직접 디자인 / 한글 표 활용',
      method: '수동 디자인',
      icon: '📊',
      color: 'blue',
      problem: '디자인 시간 과다, 일관성 부족'
    },
    {
      year: '2025',
      title: 'AI 도식화 시대',
      description: '모든 도식화 과정 AI로 대체',
      method: 'AI 자동화',
      icon: '🤖',
      color: 'green',
      result: '사업계획서 양산 가능!'
    }
  ];

  const improvements = [
    {
      aspect: '시각적 품질',
      before: '수동 제작으로 한계',
      after: 'AI로 전문가급 도식화',
      icon: '🎨'
    },
    {
      aspect: '논리적 강화',
      before: '혼자 고민',
      after: 'AI와 끊임없는 대화로 논리 보완',
      icon: '🧠'
    },
    {
      aspect: '허점 발견',
      before: '발표 때 지적받고 발견',
      after: 'AI가 먼저 논리적 허점 지적',
      icon: '🔍'
    },
    {
      aspect: '아이템 완성도',
      before: '감에 의존',
      after: '철저한 검증 후 제출',
      icon: '✅'
    }
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
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
            2025 회고 - Part 2
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🤖 AI 혁명, <span className="text-purple-400">효율 그 이상</span>
          </h2>
          <p className="text-xl text-gray-400">
            단순한 "효율"의 문제가 아니었다
          </p>
        </motion.div>

        {/* Evolution Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex justify-center items-center gap-4">
            {evolution.map((era, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                className="flex items-center"
              >
                <div className={`p-5 rounded-2xl border ${
                  era.color === 'gray' ? 'bg-gray-500/10 border-gray-500/30' :
                  era.color === 'blue' ? 'bg-blue-500/10 border-blue-500/30' :
                  'bg-green-500/10 border-green-500/30'
                } min-w-[200px]`}>
                  <div className="text-center">
                    <span className="text-4xl">{era.icon}</span>
                    <div className={`text-2xl font-bold mt-2 ${
                      era.color === 'gray' ? 'text-gray-400' :
                      era.color === 'blue' ? 'text-blue-400' :
                      'text-green-400'
                    }`}>
                      {era.year}
                    </div>
                    <div className="text-white font-semibold mt-1">{era.title}</div>
                    <div className="text-gray-400 text-sm mt-2">{era.description}</div>
                    <div className={`mt-2 text-xs px-2 py-1 rounded-full inline-block ${
                      era.color === 'gray' ? 'bg-gray-500/20 text-gray-400' :
                      era.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {era.method}
                    </div>
                    {era.problem && (
                      <div className="text-red-400 text-xs mt-2">⚠️ {era.problem}</div>
                    )}
                    {era.result && (
                      <div className="text-primary text-sm mt-2 font-semibold">✨ {era.result}</div>
                    )}
                  </div>
                </div>
                {index < evolution.length - 1 && (
                  <div className="mx-4 text-4xl text-gray-600">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Improvements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-4 gap-4"
        >
          {improvements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="bg-dark-light rounded-xl p-4 border border-gray-700"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-primary font-semibold mb-3">{item.aspect}</div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 text-xs mt-1">Before</span>
                  <span className="text-gray-400 text-sm">{item.before}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 text-xs mt-1">After</span>
                  <span className="text-white text-sm font-medium">{item.after}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl p-4 border border-purple-500/30">
            <p className="text-lg text-white">
              💡 <span className="text-purple-400 font-semibold">결론:</span>
              <span className="ml-2">AI와의 대화 → 논리적 허점 발견 → 아이템 자체가 탄탄해짐</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
