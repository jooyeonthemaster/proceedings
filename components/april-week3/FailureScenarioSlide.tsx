'use client';

import { motion } from 'framer-motion';

const notDo = [
  '영업·광고·체험 신청이 각각 다른 스프레드시트',
  '4/30에 "이름 뭐로 할지" 감으로 결정',
  '요금제 근거 없음 → 5월 가격 재설정 반복',
  'QA가 3이벤트 → 배포 후 Critical 버그 노출',
  '5월 MVP가 "뇌피셜 덩어리" → 유료 전환 < 5%',
];

const doIt = [
  '통합 랜딩 1개 = 단일 응답 DB + 노션 실시간',
  '이름 3~5안 CTR 격차 1.5배로 데이터 확정',
  '독점/크레딧/하이브리드 → 전환율 임계값 확정',
  '엔드리스 QA → Critical 당일 반영',
  '5월 MVP = 검증된 5대 산출물 기반 → 전환 ≥ 10%',
];

export default function FailureScenarioSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-slate-800/60 border border-slate-700/60 rounded-full px-5 py-1.5 mb-5">
            <span className="text-slate-300 text-sm font-medium tracking-wider">FAILURE vs SUCCESS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">안 하면 vs 하면</h2>
          <p className="text-slate-500 text-sm">이 회의의 결정사항이 없을 때 vs 있을 때</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="bg-red-950/30 rounded-2xl p-6 border border-red-800/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-900/60 flex items-center justify-center text-red-300 text-xl font-bold">✗</div>
              <div>
                <div className="text-xs uppercase tracking-widest text-red-400/80">DO NOTHING</div>
                <div className="text-lg font-bold text-red-200">안 하면</div>
              </div>
            </div>
            <ul className="space-y-2.5">
              {notDo.map((t, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.08 }} className="flex items-start gap-2 text-sm text-slate-300 leading-snug">
                  <span className="text-red-400 mt-0.5">–</span>
                  <span>{t}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="bg-emerald-950/30 rounded-2xl p-6 border border-emerald-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-900/60 flex items-center justify-center text-emerald-300 text-xl font-bold">✓</div>
              <div>
                <div className="text-xs uppercase tracking-widest text-emerald-400/80">DO IT</div>
                <div className="text-lg font-bold text-emerald-200">하면</div>
              </div>
            </div>
            <ul className="space-y-2.5">
              {doIt.map((t, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.08 }} className="flex items-start gap-2 text-sm text-slate-200 leading-snug">
                  <span className="text-emerald-400 mt-0.5">+</span>
                  <span>{t}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
