'use client';

import { motion } from 'framer-motion';

export default function RoadmapSlide() {
  const roadmap = [
    {
      year: '2026',
      title: '글로벌 대비의 해',
      color: 'amber',
      icon: '🎯',
      goals: [
        '메인 서비스 확정 (K-POP × AI 콘텐츠)',
        '글로벌 시장 진출 전략 수립',
        'TIPS 투자 유치 시도',
        '3개 사업체 지원사업 확보'
      ],
      keyFocus: 'K-POP + AI 체험형 콘텐츠를 글로벌 시장용으로 기획'
    },
    {
      year: '2027',
      title: '글로벌 진출 시도',
      color: 'green',
      icon: '🚀',
      goals: [
        '(주)네안데르 글로벌 창업사관학교 지원',
        '일해라/와작홈즈 TIPS 시도',
        '해외 시장 테스트'
      ],
      keyFocus: '글로벌 창업사관학교 선발로 본격적인 해외 진출 발판 마련'
    },
    {
      year: '2028',
      title: '해외 사업 런칭',
      color: 'blue',
      icon: '🌏',
      goals: [
        '해외 오프라인 스토어 오픈',
        '해외 전시/팝업 진행',
        '뿌덕 AI 조향 클래스 해외 운영 (미국/일본)'
      ],
      keyFocus: '실제 글로벌 시장 진출 - 해외 현지 사업 시작'
    },
    {
      year: '2029',
      title: '사업 안정화',
      color: 'purple',
      icon: '📈',
      goals: [
        '해외 사업 안정적 운영',
        '수익 구조 확립',
        '팀 확장 및 조직화'
      ],
      keyFocus: '글로벌 비즈니스 안정화 및 성장 기반 구축'
    },
    {
      year: '2030',
      title: '새로운 시작',
      color: 'pink',
      icon: '💍',
      goals: [
        '해외 사업이 메인 비즈니스로',
        '국내-해외 사업 밸런스',
        '결혼 🎉'
      ],
      keyFocus: '글로벌 기업으로 성장 + 개인적 인생 목표 달성'
    }
  ];

  const globalStrategy = {
    title: 'K-POP × AI 글로벌 전략',
    ideas: [
      { name: 'K-Contents 체험형 AI', desc: 'QR 이상의 몰입형 체험' },
      { name: '해외 팬 타겟 서비스', desc: '글로벌 K-POP 팬덤 공략' },
      { name: '오프라인 연계', desc: '해외 팝업/전시/클래스' }
    ]
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            2026-2030 로드맵
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🗺️ <span className="text-primary">5개년</span> 비전 로드맵
          </h2>
          <p className="text-lg text-gray-400">글로벌 진출을 향한 단계별 목표</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          {/* Combined Grid - Year Badge + Arrow + Content Card */}
          <div className="grid grid-cols-5 gap-3">
            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="relative flex flex-col items-center"
              >
                {/* Year Badge */}
                <div className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center border-2 mb-3 ${
                  item.color === 'amber' ? 'bg-amber-500/20 border-amber-500' :
                  item.color === 'green' ? 'bg-green-500/20 border-green-500' :
                  item.color === 'blue' ? 'bg-blue-500/20 border-blue-500' :
                  item.color === 'purple' ? 'bg-purple-500/20 border-purple-500' :
                  'bg-pink-500/20 border-pink-500'
                }`}>
                  <span className="text-lg">{item.icon}</span>
                  <span className={`text-sm font-bold ${
                    item.color === 'amber' ? 'text-amber-400' :
                    item.color === 'green' ? 'text-green-400' :
                    item.color === 'blue' ? 'text-blue-400' :
                    item.color === 'purple' ? 'text-purple-400' :
                    'text-pink-400'
                  }`}>
                    {item.year}
                  </span>
                </div>

                {/* Arrow to next - positioned between columns */}
                {index < roadmap.length - 1 && (
                  <div className="absolute top-6 -right-4 z-10">
                    <svg className={`w-5 h-5 ${
                      item.color === 'amber' ? 'text-amber-500' :
                      item.color === 'green' ? 'text-green-500' :
                      item.color === 'blue' ? 'text-blue-500' :
                      item.color === 'purple' ? 'text-purple-500' :
                      'text-pink-500'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}

                {/* Content Card */}
                <div className={`w-full rounded-xl p-3 border flex-1 ${
                  item.color === 'amber' ? 'bg-amber-500/10 border-amber-500/30' :
                  item.color === 'green' ? 'bg-green-500/10 border-green-500/30' :
                  item.color === 'blue' ? 'bg-blue-500/10 border-blue-500/30' :
                  item.color === 'purple' ? 'bg-purple-500/10 border-purple-500/30' :
                  'bg-pink-500/10 border-pink-500/30'
                }`}>
                  <h4 className={`font-bold text-sm text-center mb-2 ${
                    item.color === 'amber' ? 'text-amber-400' :
                    item.color === 'green' ? 'text-green-400' :
                    item.color === 'blue' ? 'text-blue-400' :
                    item.color === 'purple' ? 'text-purple-400' :
                    'text-pink-400'
                  }`}>
                    {item.title}
                  </h4>
                  <ul className="space-y-1">
                    {item.goals.map((goal, i) => (
                      <li key={i} className="text-gray-300 text-xs flex items-start gap-1">
                        <span className="text-primary shrink-0">•</span>
                        <span className="leading-tight">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          {/* Left: Core Strategy */}
          <div className="bg-gradient-to-r from-primary/10 to-green-500/10 rounded-xl p-5 border border-primary/30">
            <h4 className="text-primary font-bold text-lg mb-3 flex items-center">
              <span className="mr-2">🎯</span> {globalStrategy.title}
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {globalStrategy.ideas.map((idea, index) => (
                <div key={index} className="bg-dark/50 rounded-lg p-3 text-center">
                  <div className="text-white font-semibold text-sm mb-1">{idea.name}</div>
                  <div className="text-gray-400 text-xs">{idea.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Key Message */}
          <div className="bg-gradient-to-r from-amber-500/10 to-red-500/10 rounded-xl p-5 border border-amber-500/30">
            <h4 className="text-amber-400 font-bold text-lg mb-3 flex items-center">
              <span className="mr-2">💡</span> 2026년 핵심 과제
            </h4>
            <p className="text-white text-lg leading-relaxed">
              "비전을 그리면 그릴수록<br/>
              <span className="text-amber-400 font-bold">메인 서비스</span>가 없으면 방향 잡기가 어렵다"
            </p>
            <p className="text-gray-400 text-sm mt-3">
              → 2026년에 글로벌 시장 진출 가능한 서비스를 반드시 기획
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
