'use client';

import { motion } from 'framer-motion';

export default function BizPlanDetailSlide() {
  const companies = [
    { name: '네안데르', amount: '4,000~6,000만원', color: 'cyan', note: '메인' },
    { name: '와작홈즈', amount: '4,000~6,000만원', color: 'purple', note: '-' },
    { name: '일컴', amount: '4,000~6,000만원', color: 'orange', note: '-' },
    { name: '김제연', amount: '4,000~6,000만원', color: 'pink', note: '개인사업자' },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    purple: { bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-400' },
    orange: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-400' },
    pink: { bg: 'bg-pink-500/20', border: 'border-pink-500/30', text: 'text-pink-400' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-2">법인별 목표</h2>
          <p className="text-gray-400 mb-8">4개 법인 각각 최소 1건 최종 합격 목표</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`bg-dark-light/60 rounded-xl p-6 border ${colorClasses[company.color].border}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${colorClasses[company.color].bg} rounded-lg flex items-center justify-center mr-4`}>
                      <span className={`text-xl font-bold ${colorClasses[company.color].text}`}>
                        {company.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{company.name}</h3>
                      {company.note !== '-' && (
                        <span className="text-gray-500 text-sm">{company.note}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className={`${colorClasses[company.color].bg} rounded-lg p-4`}>
                  <p className="text-gray-400 text-sm">목표 합격 금액</p>
                  <p className={`text-2xl font-bold ${colorClasses[company.color].text}`}>{company.amount}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 부가 지원사업 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-dark-light/40 rounded-xl p-6 border border-dashed border-gray-600"
          >
            <h4 className="text-lg font-semibold text-white mb-4">부가 지원사업</h4>
            <div className="flex flex-wrap gap-3">
              <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg">캠퍼스타운</span>
              <span className="bg-gray-700/50 text-gray-400 px-4 py-2 rounded-lg">기타 지원사업</span>
            </div>
          </motion.div>

          {/* 총합 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-8 py-4">
              <span className="text-gray-400 mr-4">총 목표:</span>
              <span className="text-3xl font-bold text-emerald-400">2억원</span>
              <span className="text-gray-400 ml-4">/ 4건+</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
