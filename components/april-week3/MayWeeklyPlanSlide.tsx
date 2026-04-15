'use client';

import { motion } from 'framer-motion';

const weeks = [
  { w: '5/1주', title: '우선 온보딩', desc: '사전예약자 10~20명 우선 배포. 매일 사용 데이터 수집.', out: '온보딩 이탈률 / DAU / 세션 시간', color: 'text-cyan-300', border: 'border-cyan-700/50' },
  { w: '5/2주', title: '긴급 패치 + 가격 확정', desc: '온보딩 피드백 반영 긴급 패치. 과금 모델 공식 발표.', out: '패치 릴리즈 · 가격 공지 · FAQ', color: 'text-emerald-300', border: 'border-emerald-700/50' },
  { w: '5/3주', title: '무료체험 전체 확대', desc: '무료체험자 전원에게 오픈. 유료 전환 시작.', out: '유료 전환율 · MRR 초기값', color: 'text-amber-300', border: 'border-amber-700/50' },
  { w: '5/4주', title: '지역 확장 + MRR 측정', desc: '대흥 외 지역 확장. 1개월 MRR 집계.', out: '지역별 유입 · 1개월 MRR · 5월 총평', color: 'text-rose-300', border: 'border-rose-700/50' },
];

export default function MayWeeklyPlanSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-amber-900/40 border border-amber-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-amber-300 text-sm font-medium tracking-wider">MAY 2026 · WEEKLY PLAN</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">5월 주차별 계획</h2>
          <p className="text-slate-500 text-sm">4주 · 온보딩 → 패치 → 확대 → 확장</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {weeks.map((w, i) => (
            <motion.div key={w.w} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }} className={`bg-slate-900/60 rounded-2xl p-5 border ${w.border}`}>
              <div className={`text-xs font-mono ${w.color} mb-1`}>{w.w}</div>
              <div className="text-lg font-bold text-slate-100 mb-3">{w.title}</div>
              <div className="text-xs text-slate-400 leading-relaxed mb-4">{w.desc}</div>
              <div className="pt-3 border-t border-slate-800/60">
                <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">산출물</div>
                <div className={`text-[11px] ${w.color} leading-snug`}>{w.out}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
