'use client';

import { motion } from 'framer-motion';

export default function BusinessPlanRemainingSlide() {
  const businessPlans = [
    { name: '초창패 일반', companies: ['와작홈즈', '일해라컴퍼니'], count: 2, color: 'blue', deadline: '~02/13' },
    { name: '예술경영 초기', companies: ['네안데르', '와작홈즈', '일해라컴퍼니'], count: 3, color: 'purple', priority: true },
    { name: '관광 초기', companies: ['일해라컴퍼니(aicraft)', '와작홈즈(센테리어)'], count: 2, color: 'cyan' },
    { name: '관광 성장', companies: ['네안데르'], count: 1, color: 'amber', note: '고민 중' },
    { name: '강한 소상공인', companies: ['네안데르'], count: 1, color: 'emerald' },
    { name: '중앙대 캠퍼스타운', companies: ['일해라컴퍼니'], count: 1, color: 'pink' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-orange-400 text-sm font-medium tracking-wider uppercase">
              Remaining Business Plans
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              남아있는 지원사업 (1/2)
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {businessPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`bg-gradient-to-br from-${plan.color}-500/10 to-transparent border ${plan.priority ? 'border-2 border-purple-500' : `border-${plan.color}-500/30`} rounded-xl p-5 relative`}
              >
                {plan.priority && (
                  <div className="absolute -top-2 -right-2">
                    <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      우선순위
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  <div className={`text-2xl font-bold text-${plan.color}-400`}>{plan.count}건</div>
                </div>

                <div className="space-y-1">
                  {plan.companies.map((company, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-2 h-2 bg-${plan.color}-500 rounded-full`}></div>
                      <span className="text-gray-400 text-sm">{company}</span>
                    </div>
                  ))}
                </div>

                {plan.deadline && (
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <span className="text-orange-400 text-xs font-medium">마감: {plan.deadline}</span>
                  </div>
                )}

                {plan.note && (
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <span className="text-amber-400 text-xs font-medium">{plan.note}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Priority Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 bg-purple-500/10 border border-purple-500/30 rounded-xl p-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <div className="text-white font-bold">현재 가장 우선순위: 예술경영 사업</div>
                <div className="text-gray-400 text-sm">기존 사업계획서 양식에 맞춰 선별된 아이템으로 작성 시작</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
