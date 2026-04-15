'use client';

import { motion } from 'framer-motion';

const plans = [
  { name: '독점 월 50만', tag: '프리미엄', pro: '"우리 구에 딱 3자리" FOMO · 높은 ARPU', con: '결제 저항 · 초기 전환율 낮음', threshold: '사전예약 전환율 ≥ 5%', target: '대흥 A급 학원', accent: 'text-amber-300', border: 'border-amber-700/50' },
  { name: '크레딧', tag: '사용량 기반', pro: '낮은 진입장벽 · 다수 확보', con: 'ARPU 저하 · 예측 불가', threshold: '월 충전액 평균 ≥ 15만', target: '소규모 학원·개인 강사', accent: 'text-emerald-300', border: 'border-emerald-700/50' },
  { name: '하이브리드', tag: '★ 추천', pro: '진입 = 크레딧, 확장 = 독점 업셀', con: '운영 복잡도 ↑', threshold: '독점 전환율 ≥ 8% · ARPU ≥ 20만', target: '혼합 포트폴리오', accent: 'text-cyan-300', border: 'border-cyan-700/50', recommend: true },
];

export default function PricingMatrixSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-amber-900/40 border border-amber-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-amber-300 text-sm font-medium tracking-wider">#3 PRICING MATRIX</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">#3 요금제 판단 매트릭스</h2>
          <p className="text-slate-500 text-sm">3안 동시 노출 → 전환율 임계값 도달 시 5월 확정</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }} className={`relative bg-slate-900/60 rounded-2xl p-5 border ${p.border}`}>
              {p.recommend && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-cyan-500 text-cyan-950 text-[10px] font-bold">RECOMMEND</div>}
              <div className={`text-xs uppercase tracking-widest ${p.accent} mb-1`}>{p.tag}</div>
              <div className="text-xl font-bold text-slate-100 mb-4">{p.name}</div>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-emerald-400 text-[10px] uppercase tracking-wider mb-0.5">Pros</div>
                  <div className="text-slate-300 leading-snug">{p.pro}</div>
                </div>
                <div>
                  <div className="text-red-400 text-[10px] uppercase tracking-wider mb-0.5">Cons</div>
                  <div className="text-slate-300 leading-snug">{p.con}</div>
                </div>
                <div className="pt-2 border-t border-slate-800/60">
                  <div className="text-slate-500 text-[10px] uppercase tracking-wider mb-0.5">확정 임계값</div>
                  <div className={`${p.accent} font-semibold font-mono tabular-nums`}>{p.threshold}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] uppercase tracking-wider mb-0.5">타겟</div>
                  <div className="text-slate-300">{p.target}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }} className="bg-slate-900/60 rounded-xl p-4 border border-amber-900/40 text-center">
          <span className="text-xs text-slate-500">5월 확정 조건 · </span>
          <span className="text-sm text-amber-200">2개 이상 플랜이 임계값 도달 시 하이브리드 → 1개만 도달 시 해당 플랜 단독</span>
        </motion.div>
      </div>
    </div>
  );
}
