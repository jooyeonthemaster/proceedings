'use client';

import { motion } from 'framer-motion';

export default function PersonalGoalsSlide() {
  const personalGoals = [
    {
      category: '건강',
      goal: '운동 지속',
      detail: '꾸준히 운동 습관 유지하기',
      icon: '💪',
      color: 'green'
    },
    {
      category: '여행',
      goal: '베트남 여행',
      detail: '한 번 더 베트남 여행 가기',
      icon: '✈️',
      color: 'blue'
    }
  ];

  const yearSummary = {
    year2025: {
      title: '검증의 해',
      achievements: [
        '정부지원사업 9/10 합격',
        '1.5억+ 자금 확보',
        'AI 활용 사업계획서 양산',
        '자체 개발 역량 확보',
        '60+ 프로젝트 배포',
        '외주개발 매출 발생'
      ],
      color: 'amber'
    },
    year2026: {
      title: '결실의 해',
      plans: [
        '"우리 것"에 집중',
        '유튜브 필수 시작',
        '네안데르 Lab 운영',
        'VS AI 콘텐츠',
        'K-POP AI 콘텐츠',
        '유튜버 AI 프로그램'
      ],
      color: 'primary'
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        {/* Year transition */}
        <div className="absolute top-20 left-20 text-[150px] font-black text-amber-500 opacity-[0.03] select-none">
          2025
        </div>
        <div className="absolute bottom-20 right-20 text-[150px] font-black text-primary opacity-[0.05] select-none">
          2026
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
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            마무리
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🎯 2026년 <span className="text-primary">목표 정리</span>
          </h2>
        </motion.div>

        {/* Year Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-8 mb-8"
        >
          {/* 2025 Summary */}
          <div className="bg-amber-500/10 rounded-2xl p-6 border border-amber-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🔥</span>
              <div>
                <h3 className="text-3xl font-bold text-amber-400">2025</h3>
                <p className="text-white">{yearSummary.year2025.title}</p>
              </div>
            </div>
            <div className="space-y-2">
              {yearSummary.year2025.achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-amber-400">✓</span>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 2026 Plans */}
          <div className="bg-primary/10 rounded-2xl p-6 border border-primary/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🚀</span>
              <div>
                <h3 className="text-3xl font-bold text-primary">2026</h3>
                <p className="text-white">{yearSummary.year2026.title}</p>
              </div>
            </div>
            <div className="space-y-2">
              {yearSummary.year2026.plans.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary">→</span>
                  <span className="text-white font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Personal Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold text-white mb-4 text-center flex items-center justify-center">
            <span className="mr-2">👤</span> 개인 목표
          </h3>
          <div className="flex justify-center gap-6">
            {personalGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className={`rounded-xl p-6 border min-w-[200px] text-center ${
                  goal.color === 'green' ? 'bg-green-500/10 border-green-500/30' :
                  'bg-blue-500/10 border-blue-500/30'
                }`}
              >
                <span className="text-5xl">{goal.icon}</span>
                <div className={`text-xl font-bold mt-3 ${
                  goal.color === 'green' ? 'text-green-400' : 'text-blue-400'
                }`}>
                  {goal.goal}
                </div>
                <div className="text-gray-400 text-sm mt-1">{goal.detail}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-amber-500/20 via-primary/20 to-green-500/20 rounded-2xl p-6 border border-primary/30">
            <p className="text-2xl text-white font-bold mb-2">
              "내가 무엇을 못할까?"
            </p>
            <p className="text-lg text-gray-300">
              2025년의 검증을 바탕으로, 2026년은 <span className="text-primary font-bold">결실</span>을 맺는다
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
