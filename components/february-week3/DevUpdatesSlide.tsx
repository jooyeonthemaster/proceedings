'use client';

import { motion } from 'framer-motion';

export default function DevUpdatesSlide() {
  const updates = [
    {
      title: 'neander.co.kr 도메인 연결',
      description: '네안데르 도메인 복구 완료. 사이트 정상 접속 가능.',
      status: '완료',
      statusColor: 'emerald',
      color: 'emerald',
    },
    {
      title: '이미지 및 디테일 보완',
      description: '사이트 내 이미지, 텍스트 등 세부적인 디테일 작업 필요.',
      status: '진행 필요',
      statusColor: 'orange',
      color: 'orange',
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400' },
    orange: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-400' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-emerald-400 text-sm">DEV UPDATES</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">기타 개발 업데이트</h2>
          <p className="text-gray-400 mb-8">자잘한 개발 진행 건 & 피드백 요청</p>

          {/* Update Items */}
          <div className="space-y-4 mb-8">
            {updates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className={`bg-dark-light/60 rounded-xl p-6 border ${colorClasses[item.color].border}`}
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 ${colorClasses[item.color].bg} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <span className={`text-xl font-bold ${colorClasses[item.color].text}`}>{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2 flex-wrap gap-2">
                      <h4 className="text-xl font-semibold text-white mr-3">{item.title}</h4>
                      <span className={`${colorClasses[item.statusColor].bg} ${colorClasses[item.statusColor].text} px-3 py-1 rounded-full text-sm`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feedback CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-dark-light/60 rounded-2xl p-8 border border-primary/30 text-center"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">사이트 피드백 환영합니다</h3>
            <p className="text-gray-400 mb-4">
              neander.co.kr 복구 완료! 이미지, 디자인, UX 등<br />
              피드백 있으면 언제든 편하게 공유해주세요.
            </p>
            <div className="inline-flex items-center bg-primary/20 border border-primary/50 rounded-full px-6 py-3">
              <span className="text-primary font-medium">neander.co.kr</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
