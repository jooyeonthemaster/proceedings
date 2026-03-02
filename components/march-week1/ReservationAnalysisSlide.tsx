'use client';

import { motion } from 'framer-motion';

export default function ReservationAnalysisSlide() {
  const kpis = [
    { label: '총 매출', value: '1억 4,044만원', sub: '2025.04 ~ 2026.02', color: 'blue' },
    { label: '일반 고객', value: '8,550만원', sub: '60.9% | 건당 49,912원', color: 'cyan' },
    { label: '이벤트 매출', value: '5,495만원', sub: '39.1% | 건당 29,700원', color: 'rose' },
    { label: '총 거래 건수', value: '3,563건', sub: '일반 1,713 + 이벤트 1,850', color: 'amber' },
  ];

  const findings = [
    '이벤트 미분리 시 모든 데이터 왜곡 발생 (단가/시간대/요일/결제/그룹/유입경로)',
    '일반 건당 49,912원 vs 이벤트 29,700원 — 이벤트가 평균 단가 1.7배 하향 왜곡',
    '일반 고객: 2인 그룹 69.8% 중심 / 이벤트: 1인 54.7% 중심',
    '일반 고객 재방문율 10.7% — 신규 고객 의존도 높음',
    '현장결제 1,924건 중 84%가 이벤트 매출',
  ];

  const strategies = [
    { name: '운영 시간 재설계', effect: '인건비 절감 + 피크 서비스↑', time: '즉시', color: 'emerald' },
    { name: '피크타임 업셀링', effect: '+약 1,584만원/년', time: '즉시', color: 'blue' },
    { name: '재방문율 제고 CRM', effect: '+약 669만원/년', time: '단기', color: 'cyan' },
    { name: '비수기 마케팅', effect: '+약 820만원/3개월', time: '단기', color: 'violet' },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
    cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30' },
    rose: { bg: 'bg-rose-500/20', text: 'text-rose-400', border: 'border-rose-500/30' },
    amber: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
    emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' },
    violet: { bg: 'bg-violet-500/20', text: 'text-violet-400', border: 'border-violet-500/30' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-blue-400 text-sm">DATA ANALYSIS</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">예약자 행동 분석 보고서</h2>
          <p className="text-gray-400 mb-6">악센트 홍대 아이디 매장 | 2025.04 ~ 2026.02 (11개월)</p>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {kpis.map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={`${colorClasses[kpi.color].bg} rounded-xl p-4 border ${colorClasses[kpi.color].border} text-center`}
              >
                <p className={`text-xl font-bold ${colorClasses[kpi.color].text}`}>{kpi.value}</p>
                <p className="text-white text-sm font-medium mt-1">{kpi.label}</p>
                <p className="text-gray-500 text-xs mt-1">{kpi.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Key Findings */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-dark-light/60 rounded-xl p-5 border border-blue-500/20 mb-6"
          >
            <h3 className="text-lg font-semibold text-blue-400 mb-3">핵심 발견</h3>
            <ul className="space-y-2">
              {findings.map((f, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-0.5 text-xs">●</span>
                  <span className="text-gray-300 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Top Strategies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-lg font-semibold text-white mb-3">전략 우선순위 (Top 4)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {strategies.map((s, i) => (
                <div key={i} className={`bg-dark-light/40 rounded-lg p-4 border ${colorClasses[s.color].border} flex items-center justify-between`}>
                  <div>
                    <p className="text-white text-sm font-semibold">{s.name}</p>
                    <p className={`${colorClasses[s.color].text} text-xs`}>{s.effect}</p>
                  </div>
                  <span className={`${colorClasses[s.color].bg} ${colorClasses[s.color].text} px-2 py-1 rounded text-xs`}>
                    {s.time}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-3">* 전체 8개 전략 동시 실행 시 연간 +4,500~6,000만원 추가 매출 기대 (보수적 추정)</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
