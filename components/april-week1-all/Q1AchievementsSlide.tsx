'use client';

import { motion } from 'framer-motion';

export default function Q1AchievementsSlide() {
  const achievements = [
    {
      category: '개발',
      title: '뿌덕 시즌 3 출시',
      detail: '신규 콘텐츠·시즌 운영 안정화. 라이브 서비스 이슈 없이 마감.',
      color: 'emerald',
    },
    {
      category: '개발',
      title: 'Quiver AI 데모/슬라이드 정비',
      detail: '대외 발표용 자료 정렬 + 시연 안정화 작업 완료.',
      color: 'cyan',
    },
    {
      category: '매출',
      title: '외주 개발 정산 880만 원',
      detail: 'Q1 진행 건 정상 마무리, 잔여 인보이스 처리 완료.',
      color: 'blue',
    },
    {
      category: '지원사업',
      title: '서울혁신챌린지 1차 합격',
      detail: '1억 규모 지원사업 1차 통과. 발표평가 단계 진입.',
      color: 'violet',
    },
    {
      category: '조직',
      title: 'R&D 2억 합격 건 후속 처리',
      detail: '협약·실행계획 정비 및 실 집행 체계 셋업.',
      color: 'amber',
    },
    {
      category: '대외',
      title: '주차별 회의록 시스템 가동',
      detail: '전사 가시성 확보. 1~3월 전사/임원진 기록 누적.',
      color: 'slate',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-emerald-950/20 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Section 02</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-3">
              1분기 달성 항목
            </h2>
            <p className="text-slate-400 text-base">매출 외 산출물 기준으로 정리한 1분기 결과</p>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-cyan-600 mx-auto mt-3"></div>
          </div>

          {/* Achievements grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.08 }}
                className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/60 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full bg-${item.color}-950/60 border border-${item.color}-900/50 text-${item.color}-300/90`}
                  >
                    {item.category}
                  </span>
                  <span className="text-emerald-400/80 text-sm">●</span>
                </div>
                <h3 className="text-slate-200 font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Summary bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-slate-900/50 rounded-xl p-4 border border-emerald-900/40 text-center">
              <div className="text-2xl font-bold text-emerald-300/90">6</div>
              <div className="text-xs text-slate-500 mt-1">주요 산출물</div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-4 border border-cyan-900/40 text-center">
              <div className="text-2xl font-bold text-cyan-300/90">880만</div>
              <div className="text-xs text-slate-500 mt-1">외주 정산</div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-4 border border-violet-900/40 text-center">
              <div className="text-2xl font-bold text-violet-300/90">1건</div>
              <div className="text-xs text-slate-500 mt-1">지원사업 1차 합격</div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-4 border border-amber-900/40 text-center">
              <div className="text-2xl font-bold text-amber-300/90">2억</div>
              <div className="text-xs text-slate-500 mt-1">R&amp;D 후속 정착</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
