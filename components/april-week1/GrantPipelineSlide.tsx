'use client';

import { motion } from 'framer-motion';

export default function GrantPipelineSlide() {
  const grants = [
    {
      name: '콘텐츠 스타트업 지원사업',
      org: '콘진원',
      deadline: '2026.4.8(화) 오전 11:00',
      daysLeft: 3,
      status: '긴급',
      statusColor: 'text-red-400',
      statusBg: 'bg-red-950/40',
      borderColor: 'border-red-700/60',
      urgent: true,
      note: null,
    },
    {
      name: '제15회 청년기업가대회',
      org: '한국기업가정신재단',
      deadline: '2026.5.6(화) 오전 11:00',
      daysLeft: 31,
      status: '준비 중',
      statusColor: 'text-amber-400/70',
      statusBg: 'bg-amber-950/30',
      borderColor: 'border-amber-800/30',
      urgent: false,
      note: null,
    },
    {
      name: '2026 아트코리아랩 AI+기술융합 오픈이노베이션 지원 공모',
      org: '현대백화점 오픈이노베이션으로 지원',
      deadline: '~4.15(수) 16:00',
      daysLeft: 10,
      status: '검토 중',
      statusColor: 'text-orange-400/70',
      statusBg: 'bg-orange-950/30',
      borderColor: 'border-orange-800/30',
      urgent: false,
      note: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-amber-900/20 border border-amber-800/30 rounded-full px-4 py-1 mb-4">
            <span className="text-amber-400/70 text-sm">PIPELINE 2026</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-200 mb-2">추가 지원사업 파이프라인</h2>
          <p className="text-slate-500 mb-8">상반기 진행 중인 지원사업 목록</p>

          <div className="space-y-4 mb-10">
            {grants.map((grant, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className={`bg-slate-900/60 rounded-2xl p-6 border ${grant.urgent ? grant.borderColor : grant.borderColor} ${grant.urgent ? 'ring-1 ring-red-700/30' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`text-lg font-bold ${grant.urgent ? 'text-red-300' : 'text-slate-200'}`}>
                        {grant.name}
                      </h3>
                      <span className={`${grant.statusColor} text-xs font-medium ${grant.statusBg} px-2 py-0.5 rounded-full`}>
                        {grant.status}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm mb-3">{grant.org}</p>
                    <div className="flex items-center gap-6">
                      <div>
                        <span className="text-slate-600 text-xs">마감</span>
                        <p className="text-slate-400 text-sm font-medium">{grant.deadline}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className={`text-3xl font-black ${grant.urgent ? 'text-red-400' : 'text-amber-400/60'}`}>
                      D-{grant.daysLeft}
                    </div>
                    {grant.urgent && (
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-red-500 text-xs font-bold"
                      >
                        촉박!
                      </motion.span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-slate-900/40 rounded-2xl p-6 border border-amber-900/20 text-center"
          >
            <p className="text-slate-400 text-sm leading-relaxed">
              상반기 끝나도 계속 지원사업이 올라오고 있어서<br />
              <span className="text-amber-400/70 font-semibold">계속 테스트하면서 시도할 계획</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
