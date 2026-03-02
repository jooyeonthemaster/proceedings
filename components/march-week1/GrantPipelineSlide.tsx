'use client';

import { motion } from 'framer-motion';

export default function GrantPipelineSlide() {
  const grants = [
    {
      name: '관광벤처 공모사업 (2건)',
      deadline: '3/4 (화)',
      dday: 'D-2',
      status: '작성 중',
      statusColor: 'red',
      color: 'rose',
      urgency: 'critical',
    },
    {
      name: '예술경영 지원사업 (2건)',
      deadline: '3/9 (월)',
      dday: 'D-7',
      status: '작성 중',
      statusColor: 'orange',
      color: 'orange',
      urgency: 'high',
    },
    {
      name: 'R&D 발표자료',
      deadline: '3/9 (월)',
      dday: 'D-7',
      status: '준비 필요',
      statusColor: 'amber',
      color: 'amber',
      urgency: 'high',
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    rose: { bg: 'bg-rose-500/20', border: 'border-rose-500/30', text: 'text-rose-400' },
    orange: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-400' },
    amber: { bg: 'bg-amber-500/20', border: 'border-amber-500/30', text: 'text-amber-400' },
    red: { bg: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-400' },
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
            <span className="text-red-400 text-sm">GRANT PIPELINE</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">지원사업 파이프라인</h2>
          <p className="text-gray-400 mb-8">3월 9일까지 밤샘 각오 | 총 5건 동시 마감</p>

          {/* Urgency Alert */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-red-500/10 rounded-xl p-5 border border-red-500/40 mb-8"
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">&#9888;&#65039;</span>
              <h3 className="text-lg font-semibold text-red-400">긴급 상황</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              3월 4일까지 관광벤처 공모사업 2건 마무리, 3월 9일까지 예술경영 2건 + R&D 발표자료 준비.
              <span className="text-red-400 font-semibold"> 현재 연속 밤샘 작업 진행 중.</span>
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-4 mb-8">
            {grants.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.15 }}
                className={`bg-dark-light/60 rounded-xl p-6 border ${colorClasses[item.color].border}`}
              >
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center flex-wrap gap-3">
                    <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                    <span className={`${colorClasses[item.statusColor].bg} ${colorClasses[item.statusColor].text} px-3 py-1 rounded-full text-sm`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400">{item.deadline}</span>
                    <span className={`px-3 py-1 rounded-lg font-bold text-sm ${
                      item.urgency === 'critical'
                        ? 'bg-red-500 text-white animate-pulse'
                        : 'bg-orange-500/30 text-orange-400'
                    }`}>
                      {item.dday}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-dark-light/40 rounded-xl p-5 border border-gray-700"
          >
            <h4 className="text-gray-300 font-semibold mb-2">영향 사항</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">&#8226;</span>
                <span>뿌덕 프로그램 PG 심사 관련 <span className="text-yellow-400">딜레이 불가피</span> &mdash; 제연이형에게 위임 검토</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">&#8226;</span>
                <span>포토부스 프로그램 마무리 지연 &mdash; 우선순위 조정 필요</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">&#8226;</span>
                <span>와우 프로그램, 악센트 아이디 PG 결제 등 지속적 위임 가능 여부 논의 필요</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
