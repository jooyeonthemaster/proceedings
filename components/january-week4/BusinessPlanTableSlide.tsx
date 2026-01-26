'use client';

import { motion } from 'framer-motion';

export default function BusinessPlanTableSlide() {
  const remainingPlans = [
    { program: '창중대 초기', companies: '일해라컴퍼니, 네안데르, 와작홈즈', count: 3 },
    { program: '청창사', companies: '와작홈즈, 일해라컴퍼니', count: 2 },
    { program: '생애최초', companies: '김제연 (개인)', count: 1 },
    { program: '예비관광벤처', companies: '김제연 (개인)', count: 1 },
    { program: '예창패', companies: '김제연 (개인)', count: 1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
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
              남아있는 지원사업 (2/2)
            </h2>
          </div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-light/50 rounded-2xl overflow-hidden border border-gray-700"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-orange-500/20 to-amber-500/20">
                  <th className="text-left text-white font-bold py-4 px-6">지원사업</th>
                  <th className="text-left text-white font-bold py-4 px-6">지원 기업/개인</th>
                  <th className="text-center text-white font-bold py-4 px-6">건수</th>
                </tr>
              </thead>
              <tbody>
                {remainingPlans.map((plan, index) => (
                  <motion.tr
                    key={plan.program}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index + 0.3 }}
                    className="border-t border-gray-700 hover:bg-dark-light/30 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <span className="text-white font-medium">{plan.program}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-400">{plan.companies}</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-orange-400 font-bold text-lg">{plan.count}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* 김제연 Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">👤</span>
              <div>
                <div className="text-white font-bold">김제연 - 개인 지원 (3건)</div>
                <div className="text-gray-400 text-sm">현재 사업자 없는 상태 → 생애최초, 예비관광벤처, 예창패 지원 예정</div>
              </div>
            </div>
          </motion.div>

          {/* 2-3월 공고 Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-4 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📅</span>
              <div>
                <div className="text-amber-400 font-bold">2월~3월 추가 공고 예정</div>
                <div className="text-gray-400 text-sm">지속적으로 지원사업 공고 모니터링 필요</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
