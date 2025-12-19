'use client';

import { motion } from 'framer-motion';

export default function BusinessEntitySlide() {
  const entities = [
    {
      name: '(주) 네안데르',
      role: '본사',
      icon: '🏢',
      color: 'amber',
      status2025: '다양한 사업 진행, 하나를 밀고 나가지는 않음',
      plans2026: [
        { name: '창업중심대학 초기기업', difficulty: '⭐⭐⭐', note: '가장 어려움' },
        { name: '예술경영공모사업', difficulty: '⭐⭐', note: '2025년 1차 합격 (중복수혜로 2차 미지원)' },
        { name: '강한소상공인', difficulty: '⭐⭐', note: '2번 탈락, 교수님 인맥으로 재시도' },
      ],
      future: '2027년 글로벌 창업사관학교 지원 목표'
    },
    {
      name: '일해라 컴퍼니',
      role: '개발사 (테크)',
      icon: '💻',
      color: 'blue',
      status2025: 'AI 프로그램 개발 외주 (페이퍼 컴퍼니 활용)',
      plans2026: [
        { name: '청년창업사관학교', difficulty: '⭐', note: '가장 유력' },
        { name: '초기창업패키지', difficulty: '⭐⭐', note: '' },
        { name: '창업중심대학 초기', difficulty: '⭐⭐', note: '' },
      ],
      future: '아빠 통해 미디어/사회정치 분야 스케일업 고려'
    },
    {
      name: '와작홈즈',
      role: 'AI 공간향 설계',
      icon: '🌸',
      color: 'pink',
      status2025: '관광벤처 예비 진행 (페이퍼 컴퍼니 활용)',
      plans2026: [
        { name: '초기관광벤처 공모사업', difficulty: '⭐', note: '가장 유력' },
        { name: '청년창업사관학교', difficulty: '⭐⭐', note: '' },
        { name: '초기창업패키지', difficulty: '⭐⭐', note: '' },
        { name: '창업중심대학 초기', difficulty: '⭐⭐', note: '' },
      ],
      future: '관광 분야로 밀고 나갈 계획'
    }
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
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
            2026 비전 - 지원사업 전략
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🏢 사업체별 <span className="text-primary">2026 지원사업</span> 전략
          </h2>
          <p className="text-lg text-gray-400">3개 사업체 × 각각의 지원사업 계획</p>
        </motion.div>

        {/* Entity Cards */}
        <div className="grid grid-cols-3 gap-6">
          {entities.map((entity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`rounded-2xl p-5 border ${
                entity.color === 'amber' ? 'bg-amber-500/10 border-amber-500/30' :
                entity.color === 'blue' ? 'bg-blue-500/10 border-blue-500/30' :
                'bg-pink-500/10 border-pink-500/30'
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{entity.icon}</span>
                <div>
                  <h3 className={`text-xl font-bold ${
                    entity.color === 'amber' ? 'text-amber-400' :
                    entity.color === 'blue' ? 'text-blue-400' :
                    'text-pink-400'
                  }`}>
                    {entity.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{entity.role}</p>
                </div>
              </div>

              {/* 2025 Status */}
              <div className="mb-4 p-3 bg-dark/50 rounded-lg">
                <div className="text-gray-500 text-xs mb-1">2025년 현황</div>
                <div className="text-gray-300 text-sm">{entity.status2025}</div>
              </div>

              {/* 2026 Plans */}
              <div className="mb-4">
                <div className="text-white font-semibold text-sm mb-2">2026년 지원사업</div>
                <div className="space-y-2">
                  {entity.plans2026.map((plan, i) => (
                    <div key={i} className="flex items-center justify-between text-sm bg-dark/30 rounded-lg px-3 py-2">
                      <div className="flex-1">
                        <span className="text-white">{plan.name}</span>
                        {plan.note && (
                          <span className="text-gray-500 text-xs ml-2">({plan.note})</span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">{plan.difficulty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future */}
              <div className={`p-2 rounded-lg text-center text-sm ${
                entity.color === 'amber' ? 'bg-amber-500/20 text-amber-300' :
                entity.color === 'blue' ? 'bg-blue-500/20 text-blue-300' :
                'bg-pink-500/20 text-pink-300'
              }`}>
                {entity.future}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Issue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-center"
        >
          <div className="inline-block bg-red-500/10 rounded-xl p-4 border border-red-500/30">
            <p className="text-red-400 font-semibold mb-1">⚠️ 핵심 과제</p>
            <p className="text-white">
              하나의 서비스를 밀고 나가야 글로벌 창업사관학교/TIPS 지원 가능
            </p>
            <p className="text-gray-400 text-sm mt-1">
              현재 성과를 어필할 메인 서비스가 부재한 상황
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
