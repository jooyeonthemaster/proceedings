'use client';

import { motion } from 'framer-motion';

export default function NetworkStrategySlide() {
  const actions = [
    {
      person: '김기홍',
      action: '미팅 예정',
      detail: '가라 투자 확약서 등 가능 여부 떠보기',
      color: 'orange',
      icon: '1',
    },
    {
      person: '선화',
      action: '초창패 부탁',
      detail: '고대 대학원 교수님이 초창패 지원해주시기로 함',
      color: 'purple',
      icon: '2',
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    orange: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-400' },
    purple: { bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-400' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-orange-400 text-sm">NETWORK</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">네트워크 & 전략</h2>
          <p className="text-gray-400 mb-8">요즘 느끼는 것: 지원사업도 결국 인맥판</p>

          {/* Insight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-light/60 rounded-xl p-6 border border-yellow-500/30 mb-8"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">핵심 인사이트</h3>
            <p className="text-gray-300 leading-relaxed">
              네트워크가 중요하다고 느끼는 요즘.
              지원사업도 너무 인맥판이라는 걸 체감하고 있다.
              적극적으로 네트워크를 활용하는 전략으로 전환.
            </p>
          </motion.div>

          {/* Action Items */}
          <div className="space-y-4">
            {actions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.15 }}
                className={`bg-dark-light/60 rounded-xl p-6 border ${colorClasses[item.color].border}`}
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 ${colorClasses[item.color].bg} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <span className={`text-xl font-bold ${colorClasses[item.color].text}`}>{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className="text-xl font-semibold text-white mr-3">{item.person}</h4>
                      <span className={`${colorClasses[item.color].bg} ${colorClasses[item.color].text} px-3 py-1 rounded-full text-sm`}>
                        {item.action}
                      </span>
                    </div>
                    <p className="text-gray-400">{item.detail}</p>
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
