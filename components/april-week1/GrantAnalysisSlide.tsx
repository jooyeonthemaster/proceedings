'use client';

import { motion } from 'framer-motion';

const analyses = [
  {
    id: 1,
    title: '분량 이슈',
    badge: '가장 가능성 높음',
    badgeColor: 'bg-red-900/60 text-red-300 border-red-700/50',
    borderColor: 'border-red-800/50',
    glowColor: 'shadow-red-900/20',
    highlight: true,
    points: [
      '전수조사 결과: 탈락 사업계획서 전부 분량 초과',
      '올해 트렌드 변경: "18페이지 내외" → "15페이지 이내"',
      '주관기관 선에서 심사도 안 가고 컷',
      '평균 5페이지 초과 작성 습관이 문제',
      '1차 합격한 청창사 딥테크, 디딤돌 R&D, 서울혁신챌린지 → 전부 분량 제한 없었음',
    ],
  },
  {
    id: 2,
    title: '시각화 & AI 보편화',
    badge: '간접 영향',
    badgeColor: 'bg-amber-900/60 text-amber-300 border-amber-700/50',
    borderColor: 'border-amber-800/40',
    glowColor: '',
    highlight: false,
    points: [
      '2023년부터 도식화 팁 공유 → 2026년 대부분 시각화 접근',
      '핵심 경쟁력 "사업계획서 시각화"의 상대적 경쟁력 저하',
      '심사위원들 AI 작성 반감 언급',
    ],
  },
  {
    id: 3,
    title: '아이템의 문제? → 아님',
    badge: '문제 아님',
    badgeColor: 'bg-emerald-900/60 text-emerald-300 border-emerald-700/50',
    borderColor: 'border-emerald-800/40',
    glowColor: '',
    highlight: false,
    points: [
      '경쟁률은 매년 치열했음',
      '덕메이트, 맞대 등 합격했던 아이템도 전부 탈락',
      '향감도: 작년 All Pass → 올해 All Fail',
      '역대급으로 아이템 변주를 주고 접근했음',
    ],
  },
  {
    id: 4,
    title: '팀의 문제?',
    badge: '가능성 있음',
    badgeColor: 'bg-amber-900/60 text-amber-300 border-amber-700/50',
    borderColor: 'border-amber-800/40',
    glowColor: '',
    highlight: false,
    points: [
      '합격: (주) 네안데르만 (업력 오래, 매출 있는 본사)',
      '와작홈즈, 일해라컴퍼니 전부 탈락',
      '매출 5000만원대로 만들었는데도 탈락',
      '개인사업자라 검색해도 안 나옴',
    ],
  },
];

export default function GrantAnalysisSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center bg-red-900/40 border border-red-700/40 rounded-full px-5 py-1.5 mb-6">
            <span className="text-red-400 text-sm font-medium tracking-wider">FAILURE ANALYSIS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">
            지원사업 탈락 원인 분석
          </h2>
          <p className="text-slate-500">DEEP DIVE</p>
        </motion.div>

        {/* Analysis Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {analyses.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              className={`bg-slate-900/60 rounded-2xl p-6 border ${card.borderColor} ${
                card.highlight ? `ring-1 ring-red-800/30 ${card.glowColor} shadow-lg` : ''
              } ${card.id === 1 ? 'md:col-span-2' : ''}`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-200">{card.title}</h3>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${card.badgeColor}`}
                >
                  {card.badge}
                </span>
              </div>

              {/* Points */}
              <ul className="space-y-2.5">
                {card.points.map((point, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.15 + j * 0.06, duration: 0.4 }}
                    className="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <span className="text-slate-600 mt-1 shrink-0">&bull;</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
