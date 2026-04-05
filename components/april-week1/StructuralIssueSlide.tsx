'use client';

import { motion } from 'framer-motion';

export default function StructuralIssueSlide() {
  const problems = [
    {
      number: '01',
      title: '컨트롤 타워가 4개',
      severity: 'critical',
      details: [
        '사실상 각 팀이 각자 하고 싶은 것을 하고 있음',
        '운영&영업팀 → 영업팀이 하고 싶은 것',
        '마케팅팀 → 마케팅팀이 하고 싶은 것',
        '개발팀, 재무팀 → 각자 하고 싶은 것',
      ],
    },
    {
      number: '02',
      title: '목표 불일치 사례들',
      severity: 'high',
      details: [
        '마케팅 팀: IP 콜라보 외치는 중 ↔ CAIO: 자체 상품 개발 & 판매 어필',
        '케이스 키링(오리), 키캡 디퓨저 키링 만들어도 마케팅팀은 IP 쪽이 먼저라 판단',
        '영업팀: 크몽, 숨고 등 다양한 전략 시도 → 유의미한 계약 없음',
        'SVG 사이트에서도 개발 영업건은 들어왔는데, 왜 안 되는지 고민하는 시도가 안 보임',
        '발로 뛰는 영업이 필요: 한 달 2건만 물어도 되는 수준',
        '직접 돌아다니며 "서비스 개발 필요하세요?" 했으면 소득이 나왔을 것',
        '제안했지만 어찌저찌 사라짐',
      ],
    },
    {
      number: '03',
      title: '임원진 회의 결정 이행 문제',
      severity: 'high',
      details: [
        '결정해도 각자의 형태로 해석',
        '결정이 미뤄지고, 각자 해석으로 끝나고 누락됨',
        '페인포인트가 많음',
      ],
    },
    {
      number: '04',
      title: '캐시카우 형성 과정에서조차 의견 합치 안 됨',
      severity: 'critical',
      details: [
        '뿌덕이든 외주개발이든 캐시카우 형성이 메인인데',
        '이 과정에서조차 의견 합치 안 되고 각자 방향으로 감',
      ],
    },
  ];

  const severityColor: Record<string, { border: string; bg: string; text: string; dot: string }> = {
    critical: {
      border: 'border-red-800/50',
      bg: 'bg-red-950/30',
      text: 'text-red-400/80',
      dot: 'bg-red-500',
    },
    high: {
      border: 'border-orange-800/40',
      bg: 'bg-orange-950/20',
      text: 'text-orange-400/80',
      dot: 'bg-orange-500',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Warning pulse */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(127,29,29,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(180,83,9,0.05)_0%,transparent_60%)]" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-red-900/30 border border-red-800/40 rounded-full px-4 py-1 mb-4">
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-red-500 rounded-full mr-2"
            />
            <span className="text-red-400/80 text-sm">STRUCTURAL ISSUES</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-200 mb-2">구조적 문제 진단</h2>
          <p className="text-slate-500 mb-8">왜 일이 안 굴러가는가</p>

          <div className="space-y-4">
            {problems.map((problem, index) => {
              const colors = severityColor[problem.severity];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.15 }}
                  className={`bg-slate-900/60 rounded-2xl p-6 border ${colors.border}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${colors.bg} rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0`}>
                      <span className={`${colors.text} text-lg font-black`}>{problem.number}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-slate-200">{problem.title}</h3>
                        <span className={`${colors.bg} ${colors.text} text-xs px-2 py-0.5 rounded-full uppercase font-bold`}>
                          {problem.severity}
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        {problem.details.map((detail, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 + index * 0.15 + i * 0.05 }}
                            className="flex items-start"
                          >
                            <span className={`w-1.5 h-1.5 ${colors.dot} rounded-full mr-3 mt-1.5 flex-shrink-0 opacity-60`} />
                            <span className="text-slate-400 text-sm leading-relaxed">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-6 bg-red-950/20 border border-red-900/30 rounded-xl p-4 text-center"
          >
            <p className="text-red-400/70 text-sm font-semibold">
              이대로는 어떤 사업도 굴러가지 않는다
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
