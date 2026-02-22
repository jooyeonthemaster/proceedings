'use client';

import { motion } from 'framer-motion';

export default function ConclusionSlide() {
  const summaryItems = [
    { label: '해커톤', value: '야판사야 해커톤 참가 → AI 서비스 본격 확장 결정', color: 'amber' },
    { label: 'AI 커플', value: '일일 미션 / 자동 다이어리 / 커플 운세로 리텐션 확보', color: 'pink' },
    { label: 'B2B 파이프', value: '방탈출 AI NPC, 학원 AI, 서점 추천 등 실전 비즈니스', color: 'cyan' },
    { label: '수익 모델', value: '콘텐츠 마케팅 → 판매 → 월 사용료 SaaS 구조', color: 'violet' },
    { label: '개발 현황', value: 'neander.co.kr 복구 완료 / 디테일 보완 진행 중', color: 'emerald' },
  ];

  const colorClasses: Record<string, { bg: string; text: string }> = {
    amber: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
    pink: { bg: 'bg-pink-500/20', text: 'text-pink-400' },
    cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
    violet: { bg: 'bg-violet-500/20', text: 'text-violet-400' },
    emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
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
          <div className="h-1 w-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mb-10"></div>

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
                <p className="text-gray-300">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="inline-flex items-center bg-violet-500/20 border border-violet-500/50 rounded-full px-8 py-4">
              <span className="text-violet-400 text-xl font-bold">야판사야 → AI 서비스 제국 건설 시작</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-gray-500 text-sm mt-8"
          >
            2026년 2월 4주차 회의록 | 네안데르 사업기획팀
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
