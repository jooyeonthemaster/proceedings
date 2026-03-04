'use client';

import { motion } from 'framer-motion';

export default function DevTeamSlide() {
  const activities = [
    {
      icon: '&#128248;',
      title: 'AI 포토부스',
      description: '하드웨어 개발 + 소프트웨어 개발 동시 진행 중',
      detail: '캐논 SDK 설치 완료 - 서비스 강화에 힘쓰는 중',
      color: 'blue',
    },
    {
      icon: '&#127775;',
      title: 'AC\'SCENT WOW 프로그램',
      description: '악센트 와우 프로그램 개발 완료!',
      detail: '아직 테스트 안 해본 사람은... 혼납니다',
      color: 'violet',
    },
    {
      icon: '&#9000;',
      title: '키캡 키링 / 이벤트 향수 뚜껑',
      description: '다양한 팀에 차출되어 용병 활동 중',
      detail: '3D 프린팅 관련 제작 프로젝트 다수 진행',
      color: 'emerald',
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-400' },
    violet: { bg: 'bg-violet-500/20', border: 'border-violet-500/30', text: 'text-violet-400' },
    emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-pink-500/20 border border-pink-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-pink-400 text-sm">DEV TEAM</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">개발팀 활동 현황</h2>
          <p className="text-gray-400 mb-8">김제연 상무전무 사외감사이사장의 팔방미인 활약</p>

          {/* WOW Alert */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-violet-500/15 to-pink-500/15 rounded-xl p-5 border border-violet-500/40 mb-6 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center">
                <span className="text-3xl mr-3">&#128293;</span>
                <div>
                  <h3 className="text-lg font-semibold text-violet-400">AC&apos;SCENT WOW 프로그램 출시!</h3>
                  <p className="text-gray-400 text-sm">아직 테스트 안 해본 분은 혼나야 합니다</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="bg-red-500/20 border border-red-500/40 rounded-full px-4 py-2"
              >
                <span className="text-red-400 text-sm font-bold">&#9888;&#65039; 필수 테스트</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Activity Cards */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {activities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className={`bg-dark-light/60 rounded-xl p-5 border ${colorClasses[item.color].border}`}
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 ${colorClasses[item.color].bg} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                    <span className="text-xl" dangerouslySetInnerHTML={{ __html: item.icon }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-300 text-sm mb-1">{item.description}</p>
                    <p className="text-gray-500 text-xs">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
