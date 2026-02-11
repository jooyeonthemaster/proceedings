'use client';

import { motion } from 'framer-motion';

export default function ConclusionSlide() {
  const summaryItems = [
    { label: '2/13 마감', value: '4건 중 2건 미완 → 전력 집중', color: 'red' },
    { label: '최우선 과제', value: '청창 딥테크 20p 새 아이템 작성', color: 'orange' },
    { label: '남은 지원사업', value: '5건 + a (2/13 이후 순차 진행)', color: 'emerald' },
    { label: '네트워크 전략', value: '김기홍 미팅 / 선화 초창패 연결', color: 'purple' },
    { label: '개발팀', value: '전체회의에서 상세 공유', color: 'cyan' },
  ];

  const colorClasses: Record<string, { bg: string; text: string }> = {
    red: { bg: 'bg-red-500/20', text: 'text-red-400' },
    orange: { bg: 'bg-orange-500/20', text: 'text-orange-400' },
    emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
    purple: { bg: 'bg-purple-500/20', text: 'text-purple-400' },
    cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">Summary</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-10"></div>

          <div className="space-y-4 max-w-3xl mx-auto mb-10">
            {summaryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-dark-light/60 rounded-xl p-4 flex items-center text-left"
              >
                <div className={`${colorClasses[item.color].bg} rounded-lg px-3 py-1 mr-4 flex-shrink-0`}>
                  <span className={`${colorClasses[item.color].text} text-sm font-bold`}>{item.label}</span>
                </div>
                <p className="text-gray-300">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="inline-flex items-center bg-rose-500/20 border border-rose-500/50 rounded-full px-8 py-4">
              <span className="text-rose-400 text-xl font-bold">2/13까지 전력 질주</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-gray-500 text-sm mt-8"
          >
            2026년 2월 2주차 회의록 | 네안데르 개발팀
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
