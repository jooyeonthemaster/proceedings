'use client';

import { motion } from 'framer-motion';

export default function DeadlineStatusSlide() {
  const items = [
    {
      category: '청창 일반',
      entries: [
        { company: '와작홈즈', status: '작성완', statusColor: 'emerald' },
        { company: '일컴', status: '작성 미완', statusColor: 'red' },
      ],
    },
    {
      category: '초창 일반',
      entries: [
        { company: '일컴', status: '작성완 (디벨롭 필요)', statusColor: 'orange' },
        { company: '와작홈즈', status: '작성완', statusColor: 'emerald' },
      ],
    },
    {
      category: '초창 딥테크',
      entries: [
        { company: '일컴', status: '제출완', statusColor: 'cyan' },
      ],
    },
    {
      category: '청창 딥테크',
      entries: [
        { company: '네안데르', status: '작성 미완', statusColor: 'red' },
      ],
    },
  ];

  const statusColors: Record<string, { bg: string; text: string; border: string }> = {
    emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' },
    red: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30' },
    orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30' },
    cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-red-500/20 border border-red-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-red-400 text-sm">URGENT | D-4</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">2/13 마감 사업계획서 현황</h2>
          <p className="text-gray-400 mb-8">2월 13일 금요일 마감 | 4건 진행 중</p>

          <div className="space-y-6">
            {items.map((group, gIdx) => (
              <motion.div
                key={gIdx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + gIdx * 0.15 }}
                className="bg-dark-light/60 rounded-xl p-5 border border-gray-700"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{group.category}</h3>
                <div className="space-y-2">
                  {group.entries.map((entry, eIdx) => (
                    <div key={eIdx} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 ${statusColors[entry.statusColor].bg} rounded-lg flex items-center justify-center mr-3`}>
                          <span className={`text-sm font-bold ${statusColors[entry.statusColor].text}`}>
                            {entry.company.charAt(0)}
                          </span>
                        </div>
                        <span className="text-gray-300">{entry.company}</span>
                      </div>
                      <span className={`${statusColors[entry.statusColor].bg} ${statusColors[entry.statusColor].text} px-3 py-1 rounded-full text-sm font-medium`}>
                        {entry.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 bg-dark-light/40 rounded-xl p-4 border border-dashed border-gray-600 text-center"
          >
            <p className="text-gray-400">
              <span className="text-cyan-400 font-bold">제출완 1건</span> |
              <span className="text-emerald-400 font-bold"> 작성완 2건</span> |
              <span className="text-orange-400 font-bold"> 디벨롭 필요 1건</span> |
              <span className="text-red-400 font-bold"> 미완 2건</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
