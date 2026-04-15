'use client';

import { motion } from 'framer-motion';

const items = [
  { n: '01', title: '고객 니즈', measure: '5개 기능 × 10곳 반응점수 평균 + 광고 반응률', criteria: '평균 4점 이상 = 채택 / 3점 이하 = 드롭', source: '재영 미팅 + 선화 광고', color: 'border-rose-700/50', accent: 'text-rose-300' },
  { n: '02', title: '서비스 이름', measure: '후보 3~5개 → 인스타 광고 A/B 노출 CTR 검증', criteria: '최고 CTR 후보 ≥ 1.5배 격차 시 확정', source: '선화 광고 CTR', color: 'border-fuchsia-700/50', accent: 'text-fuchsia-300' },
  { n: '03', title: '요금제', measure: '독점 50만 / 크레딧 / 하이브리드 3안 노출', criteria: '구매의향 + 사전예약 전환율 ≥ 8%', source: '재영 + 랜딩 CTA 클릭비율', color: 'border-amber-700/50', accent: 'text-amber-300' },
  { n: '04', title: '핵심 기능 Top 3', measure: '40+ 기능 목록 → 반응 1~5점 기록', criteria: '평균 4점 이상 중 상위 3개', source: '재영 기능별 점수 + 체크박스', color: 'border-emerald-700/50', accent: 'text-emerald-300' },
  { n: '05', title: '핵심 유저 플로우', measure: '원장 하루 시나리오 클릭 카운트', criteria: '진입 → 시험지 출력 ≤ 7클릭', source: '동주 QA + 재영 현장 관찰', color: 'border-cyan-700/50', accent: 'text-cyan-300' },
];

export default function AprilFiveDeliverablesSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-amber-900/40 border border-amber-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-amber-300 text-sm font-medium tracking-wider">APRIL 5 DELIVERABLES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">4월 5대 확정물</h2>
          <p className="text-slate-500 text-sm">4/30까지 데이터 근거로 확정 · 5월 MVP 배포의 기반</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {items.map((it, i) => (
            <motion.div key={it.n} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }} className={`bg-slate-900/60 rounded-xl p-4 border ${it.color} flex flex-col`}>
              <div className={`text-xs font-mono ${it.accent} mb-1`}>#{it.n}</div>
              <div className="text-lg font-bold text-slate-100 mb-3 leading-tight">{it.title}</div>
              <div className="space-y-2.5 flex-1">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-0.5">측정 방법</div>
                  <div className="text-[11px] text-slate-300 leading-snug">{it.measure}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-0.5">판단 기준</div>
                  <div className={`text-[11px] ${it.accent} leading-snug font-medium`}>{it.criteria}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-0.5">데이터 소스</div>
                  <div className="text-[11px] text-slate-400 leading-snug">{it.source}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }} className="mt-6 bg-gradient-to-r from-amber-950/60 via-rose-950/40 to-amber-950/60 rounded-2xl p-4 border border-amber-700/50 text-center">
          <p className="text-sm text-amber-200/90"><span className="font-bold">5월 목표:</span> 이 5가지 근거로 사전예약자 + 무료체험 신청자에게 실사용 MVP 배포 → 스케일업 시작.</p>
        </motion.div>
      </div>
    </div>
  );
}
