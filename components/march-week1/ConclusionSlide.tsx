'use client';

import { motion } from 'framer-motion';

export default function ConclusionSlide() {
  const summaryItems = [
    { label: 'R&D', value: '서류 합격! 3/9 발표 평가 준비 필수', color: 'emerald' },
    { label: '지원사업', value: '관광벤처 2건(3/4) + 예술경영 2건(3/9) + R&D 발표(3/9)', color: 'red' },
    { label: '교육 입찰', value: '동서울대 7천만원 입찰 | 3/3 확정 → 3/5 설명회 → 3/12 마감', color: 'blue' },
    { label: '데이터', value: '예약자 행동 분석 완료 (1.4억 매출) | 저가 상품 비권장 결론', color: 'amber' },
    { label: '개발', value: '나라텐 호평 | 나노바나나 2 출시 | 포토부스/PG 딜레이', color: 'orange' },
    { label: '상품', value: '3D 프린터 수익화 + 시그니처 상품 논의 필요', color: 'violet' },
  ];

  const colorClasses: Record<string, { bg: string; text: string }> = {
    emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
    red: { bg: 'bg-red-500/20', text: 'text-red-400' },
    blue: { bg: 'bg-blue-500/20', text: 'text-blue-400' },
    amber: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
    orange: { bg: 'bg-orange-500/20', text: 'text-orange-400' },
    violet: { bg: 'bg-violet-500/20', text: 'text-violet-400' },
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
          <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-red-500 mx-auto mb-10"></div>

          <div className="space-y-4 max-w-3xl mx-auto mb-10">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="inline-flex items-center bg-red-500/20 border border-red-500/50 rounded-full px-8 py-4">
              <span className="text-red-400 text-xl font-bold">🔥 3월 9일까지 전쟁 모드 — 모두 파이팅!</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-gray-500 text-sm mt-8"
          >
            2026년 3월 1주차 회의록 | 네안데르 사업기획팀
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
