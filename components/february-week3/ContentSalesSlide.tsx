'use client';

import { motion } from 'framer-motion';

export default function ContentSalesSlide() {
  const steps = [
    {
      step: '01',
      title: '서비스 구축',
      description: '타겟 고객을 상정하고 바로 팔릴 수 있는 AI 솔루션을 빠르게 제작',
      color: 'cyan',
    },
    {
      step: '02',
      title: '콘텐츠 마케팅',
      description: '유튜브, 인스타 릴스로 "이런 서비스 살 사람 연락주세요!" 시리즈 제작',
      color: 'violet',
    },
    {
      step: '03',
      title: '판매 & 납품',
      description: '실제 구매자에게 맞춤 서비스 납품, "팔렸습니다!!" 콘텐츠로 후속 마케팅',
      color: 'emerald',
    },
    {
      step: '04',
      title: '지속 수익',
      description: '일회성 판매가 아닌 월 사용료 기반 지속적 수익 구조 확립',
      color: 'amber',
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    violet: { bg: 'bg-violet-500/20', border: 'border-violet-500/30', text: 'text-violet-400' },
    emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400' },
    amber: { bg: 'bg-amber-500/20', border: 'border-amber-500/30', text: 'text-amber-400' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-violet-500/20 border border-violet-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-violet-400 text-sm">SALES STRATEGY</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">콘텐츠 → 판매 전환 전략</h2>
          <p className="text-gray-400 mb-8">만들고 → 보여주고 → 팔고 → 지속 수익</p>

          {/* Flow Steps */}
          <div className="space-y-4">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.12 }}
                className={`bg-dark-light/60 rounded-xl p-6 border ${colorClasses[item.color].border} relative`}
              >
                <div className="flex items-center">
                  <div className={`w-14 h-14 ${colorClasses[item.color].bg} rounded-xl flex items-center justify-center mr-5 flex-shrink-0`}>
                    <span className={`text-xl font-bold ${colorClasses[item.color].text}`}>{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block ml-4">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Point */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 bg-dark-light/60 rounded-xl p-5 border border-rose-500/30 text-center"
          >
            <p className="text-rose-400 font-semibold text-lg">
              콘텐츠 자체가 마케팅이 되고, 판매가 다시 콘텐츠가 되는 순환 구조
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
