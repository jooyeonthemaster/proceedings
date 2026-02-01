'use client';

import { motion } from 'framer-motion';

export default function ActionItemsSlide() {
  const items = [
    { team: '개발팀', task: '뿌덕 신규 프로그램 1개 출시', color: 'orange' },
    { team: '개발팀', task: '포토부스 로봇 설치 (김제연 협업)', color: 'cyan' },
    { team: '개발팀', task: '향수 키링 파츠 30개 제작', color: 'purple' },
    { team: '개발팀', task: '3D 커스터마이징 웹 MVP 개발', color: 'pink' },
    { team: '사업기획', task: '4개 법인 지원사업 도전', color: 'emerald' },
    { team: '협업', task: '마케팅 데이터 수집 시스템 구축', color: 'blue' },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    orange: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-400' },
    cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    purple: { bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-400' },
    pink: { bg: 'bg-pink-500/20', border: 'border-pink-500/30', text: 'text-pink-400' },
    emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400' },
    blue: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-400' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-rose-500/20 border border-rose-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-rose-400 text-sm">PART 4</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-8">1분기 핵심 Action Items</h2>

          <div className="space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className={`bg-dark-light/60 rounded-xl p-4 border ${colorClasses[item.color].border} flex items-center`}
              >
                <div className={`w-10 h-10 ${colorClasses[item.color].bg} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                  <span className={`font-bold ${colorClasses[item.color].text}`}>{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{item.task}</p>
                </div>
                <span className={`${colorClasses[item.color].bg} ${colorClasses[item.color].text} px-3 py-1 rounded-full text-sm`}>
                  {item.team}
                </span>
              </motion.div>
            ))}
          </div>

          {/* 체크리스트 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 bg-dark-light/40 rounded-xl p-6 border border-dashed border-gray-600 text-center"
          >
            <p className="text-gray-400">
              총 <span className="text-white font-bold">6개</span> 핵심 과제 |
              담당: <span className="text-cyan-400">개발팀</span>, <span className="text-emerald-400">사업기획팀</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
