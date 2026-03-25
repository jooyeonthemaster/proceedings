'use client';

import { motion } from 'framer-motion';

export default function CollaborationSlide() {
  const areas = [
    {
      icon: '\u{1F4E2}',
      title: '마케팅 지원',
      desc: '콘텐츠 제작, 랜딩페이지, 광고 소재 등',
      color: 'violet',
    },
    {
      icon: '\u{1F4BC}',
      title: '영업 지원',
      desc: '제안서 제작, 데모 환경 구축, 기술 자료 등',
      color: 'cyan',
    },
    {
      icon: '\u{1F6E0}',
      title: '기타 필요 영역',
      desc: '필요한 부분이 있으면 언제든 요청',
      color: 'amber',
    },
  ];

  const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
    violet: { border: 'border-violet-500/30', bg: 'bg-violet-500/10', text: 'text-violet-400' },
    cyan: { border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
    amber: { border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-violet-500/20 border border-violet-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-violet-400 text-sm">COLLABORATION</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">협업 가능 영역</h2>
          <p className="text-gray-400 mb-8">마케팅, 영업 등 필요한 영역에 적극 개입 가능</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className={`bg-dark-light/60 rounded-2xl p-6 border ${colorClasses[area.color].border} text-center`}
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className={`text-lg font-bold ${colorClasses[area.color].text} mb-2`}>{area.title}</h3>
                <p className="text-gray-400 text-sm">{area.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* 핵심 메시지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-violet-500/10 rounded-xl p-5 border border-violet-500/40"
          >
            <p className="text-gray-300 text-sm text-center leading-relaxed">
              개발팀은 <span className="text-violet-400 font-semibold">언제든 협업할 여력</span>이 있습니다.
              요청하시면 더 적극적으로 개입할 수 있으니, 필요한 영역이 있다면 편하게 말씀해주세요.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
