'use client';

import { motion } from 'framer-motion';

export default function AICoupleServiceSlide() {
  const features = [
    {
      icon: '🎯',
      title: '일일 비밀 미션',
      description: '매일 커플에게 주어지는 비밀 미션으로 관계에 재미와 설렘 부여',
      color: 'pink',
    },
    {
      icon: '💬',
      title: '채팅 + 자동 커플 다이어리',
      description: '일상 채팅을 하면 AI가 자동으로 커플 다이어리를 생성해주는 기능',
      color: 'violet',
    },
    {
      icon: '🔮',
      title: 'AI 커플 사주 & 운세',
      description: 'AI 기반 커플 사주, 커플 운세 등 매일매일 들어오고 싶은 동기 제공',
      color: 'amber',
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    pink: { bg: 'bg-pink-500/20', border: 'border-pink-500/30', text: 'text-pink-400', iconBg: 'bg-pink-500/20' },
    violet: { bg: 'bg-violet-500/20', border: 'border-violet-500/30', text: 'text-violet-400', iconBg: 'bg-violet-500/20' },
    amber: { bg: 'bg-amber-500/20', border: 'border-amber-500/30', text: 'text-amber-400', iconBg: 'bg-amber-500/20' },
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
            <span className="text-pink-400 text-sm">AI COUPLE SERVICE</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">AI 커플 서비스 핵심 기능</h2>
          <p className="text-gray-400 mb-8">썸원 같은 서비스 — 커플 대상 AI 기반 앱</p>

          {/* App Concept */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-light/60 rounded-xl p-6 border border-fuchsia-500/30 mb-8"
          >
            <h3 className="text-xl font-semibold text-fuchsia-400 mb-3">앱 컨셉</h3>
            <p className="text-gray-300 leading-relaxed">
              앱으로 접근성을 높이고, 평소에 <span className="text-white font-semibold">채팅창에서 대화하다가 바로 판사를 호출</span>할 수 있는 구조.
              커플들이 매일매일 앱에 들어오고 싶어하는 동기를 다양하게 설계.
            </p>
          </motion.div>

          {/* Core Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.15 }}
                className={`bg-dark-light/60 rounded-xl p-6 border ${colorClasses[feature.color].border}`}
              >
                <div className="flex items-start">
                  <div className={`w-14 h-14 ${colorClasses[feature.color].iconBg} rounded-xl flex items-center justify-center mr-5 flex-shrink-0`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-xl font-semibold text-white mb-2`}>{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
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
