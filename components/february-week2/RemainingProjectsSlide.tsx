'use client';

import { motion } from 'framer-motion';

export default function RemainingProjectsSlide() {
  const projects = [
    { id: 1, name: '예술경영', company: '네안데르', color: 'cyan', type: '지원사업' },
    { id: 2, name: '예술경영', company: '일컴', color: 'orange', type: '지원사업' },
    { id: 3, name: '성장관광벤처', company: '네안데르', color: 'cyan', type: '관광벤처' },
    { id: 4, name: '초기관광벤처', company: '일컴', color: 'orange', type: '관광벤처' },
    { id: 5, name: '초기관광벤처', company: '와작홈즈', color: 'purple', type: '관광벤처' },
  ];

  const extra = [
    { name: '강한소상공인', company: '네안데르', color: 'cyan', note: '검토 중' },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400' },
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
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-emerald-400 text-sm">2/13 이후 마감</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">남은 지원사업 현황</h2>
          <p className="text-gray-400 mb-8">2/13 마감 이후 진행 예정 지원사업</p>

          {/* Note about 와작홈즈 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 text-sm"
          >
            <span className="text-purple-400">* 와작홈즈</span>
            <span className="text-gray-400"> - 초창 예정으로 예술경영 작성 제외</span>
          </motion.div>

          <div className="space-y-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`bg-dark-light/60 rounded-xl p-4 border ${colorClasses[project.color].border} flex items-center`}
              >
                <div className={`w-10 h-10 ${colorClasses[project.color].bg} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                  <span className={`font-bold ${colorClasses[project.color].text}`}>{project.id}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{project.name}</p>
                </div>
                <span className={`${colorClasses[project.color].bg} ${colorClasses[project.color].text} px-3 py-1 rounded-full text-sm`}>
                  {project.company}
                </span>
                <span className="bg-gray-700/50 text-gray-400 px-3 py-1 rounded-full text-sm ml-2">
                  {project.type}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Extra */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 bg-dark-light/40 rounded-xl p-5 border border-dashed border-gray-600"
          >
            <h4 className="text-lg font-semibold text-white mb-3">추가 검토</h4>
            {extra.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className={`${colorClasses[item.color].text} mr-2`}>?</span>
                  <span className="text-gray-300">{item.name}</span>
                  <span className="text-gray-500 mx-2">-</span>
                  <span className={colorClasses[item.color].text}>{item.company}</span>
                </div>
                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                  {item.note}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Total */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-6 text-center"
          >
            <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-8 py-3">
              <span className="text-gray-400 mr-3">총 남은 지원사업:</span>
              <span className="text-2xl font-bold text-emerald-400">5건 + a</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
