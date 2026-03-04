'use client';

import { motion } from 'framer-motion';

export default function ConclusionSlide() {
  const summaryItems = [
    { label: 'R&D', value: '최대 2억원 사업 1차 서류 합격! 발표 평가 준비 중', color: 'amber' },
    { label: '디지털 화환', value: '세금계산서 발급 완료 - 이번 주 정산 예정', color: 'emerald' },
    { label: 'AI 교육', value: '김기홍 교수 제안 - AI 교육 프로그램 사업 고도화 추진', color: 'violet' },
    { label: '입찰', value: '동서울대 AI 진로탐색 교육 - 위임장 확보, 내일 설명회', color: 'blue' },
    { label: '악센트 ID', value: 'PG 심사 중 - 카드 결제 곧 가능 + 사이트 전략적 개선 계획', color: 'orange' },
    { label: '개발팀', value: '와우 프로그램 출시 + 포토부스 HW/SW 개발 + 용병 활약', color: 'pink' },
    { label: 'KPI', value: '지원사업팀 목표 2억원 중 50% 달성 (R&D 1차 합격)', color: 'teal' },
  ];

  const colorClasses: Record<string, { bg: string; text: string }> = {
    amber: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
    emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
    violet: { bg: 'bg-violet-500/20', text: 'text-violet-400' },
    blue: { bg: 'bg-blue-500/20', text: 'text-blue-400' },
    orange: { bg: 'bg-orange-500/20', text: 'text-orange-400' },
    pink: { bg: 'bg-pink-500/20', text: 'text-pink-400' },
    teal: { bg: 'bg-teal-500/20', text: 'text-teal-400' },
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
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-10"></div>

          <div className="space-y-3 max-w-3xl mx-auto mb-10">
            {summaryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.08 }}
                className="bg-dark-light/60 rounded-xl p-4 flex items-center text-left"
              >
                <div className={`${colorClasses[item.color].bg} rounded-lg px-3 py-1 mr-4 flex-shrink-0 min-w-[80px] text-center`}>
                  <span className={`${colorClasses[item.color].text} text-sm font-bold`}>{item.label}</span>
                </div>
                <p className="text-gray-300 text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-500/50 rounded-full px-8 py-4">
              <span className="text-cyan-400 text-xl font-bold">&#127793; 축하와 도전이 함께하는 3월 &#8212; 모두 파이팅!</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-gray-500 text-sm mt-8"
          >
            2026년 3월 1주차 전체 회의록 | 주식회사 네안데르
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
