'use client';

import { motion } from 'framer-motion';

export default function ConclusionSlide() {
  const summaryItems = [
    { label: 'R&D', value: '발표평가 완료 — 기술적 방법론 중심 질의. 예산 세목 보완 필요', color: 'amber' },
    { label: '지원사업', value: '합격 3건(네안데르) / 불합 5건(일컴·와작) / 대기 9건 / 예정 4건', color: 'cyan' },
    { label: '인사이트', value: '업력·매출·법인 여부가 합격의 핵심 변수. 아이템보다 기업 스펙', color: 'violet' },
    { label: '디지털 화환', value: '880만원 최종 정산 완료. 제연이형 300만 지급. 외주 관계 재정의 필요', color: 'emerald' },
    { label: 'WOW', value: 'AC\'SCENT WOW 개발 완료 — 출시 일정 결정 필요', color: 'rose' },
    { label: '개발팀', value: '악센트 사이트 고도화 + PG 연동 준비 + 온라인 판매 가속화 기획', color: 'blue' },
  ];

  const actionItems = [
    'R&D 예산 세목(위탁용역비) 재검토 및 수정',
    '이번주 사업계획서 서류 작업 최종 마무리',
    'AC\'SCENT WOW 출시 일정 확정',
    '외주 인력 관리 전략 재수립',
    'PG 결제 탑재 완료 후 광고 집행 기획 착수',
  ];

  const colorClasses: Record<string, { bg: string; text: string }> = {
    amber: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
    cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
    violet: { bg: 'bg-violet-500/20', text: 'text-violet-400' },
    emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
    rose: { bg: 'bg-rose-500/20', text: 'text-rose-400' },
    blue: { bg: 'bg-blue-500/20', text: 'text-blue-400' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">Summary</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-10"></div>

          <div className="space-y-3 max-w-3xl mx-auto mb-8">
            {summaryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-dark-light/60 rounded-xl p-4 flex items-center text-left"
              >
                <div className={`${colorClasses[item.color].bg} rounded-lg px-3 py-1 mr-4 flex-shrink-0`}>
                  <span className={`${colorClasses[item.color].text} text-sm font-bold`}>{item.label}</span>
                </div>
                <p className="text-gray-300 text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Action Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-dark-light/40 rounded-xl p-6 border border-teal-500/30 max-w-3xl mx-auto mb-8"
          >
            <h3 className="text-teal-400 font-bold text-lg mb-4">Action Items</h3>
            <div className="space-y-2">
              {actionItems.map((item, i) => (
                <div key={i} className="flex items-start text-left">
                  <span className="text-teal-400 mr-3 mt-0.5 text-sm">{i + 1}.</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="inline-flex items-center bg-teal-500/20 border border-teal-500/50 rounded-full px-8 py-4">
              <span className="text-teal-400 text-xl font-bold">서류전쟁 마무리 &mdash; 다음 챕터로!</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-gray-500 text-sm mt-8"
          >
            2026년 3월 2주차 임원진 회의록 | 네안데르
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
