'use client';

import { motion } from 'framer-motion';

const updates = [
  { k: '대흥 10곳 미팅', v: '기존 계획 유지. 단, 모든 자료에 랜딩페이지 URL 동봉.', color: 'text-emerald-300', border: 'border-emerald-700/50' },
  { k: '랜딩 2차 전환', v: '"생각해볼게요" 고객 → 랜딩 링크 전송 → 2차 응답 수집.', color: 'text-cyan-300', border: 'border-cyan-700/50' },
  { k: '주 2회 동주 싱크', v: '화·금 미팅 인사이트 공유 → QA 리스트 즉시 반영.', color: 'text-amber-300', border: 'border-amber-700/50' },
  { k: '광고 응답 우선 컨택', v: '대흥 지역 응답자 = 최우선. 24시간 내 전화.', color: 'text-rose-300', border: 'border-rose-700/50' },
];

export default function CEOPersonCardSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-cyan-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
          <div className="bg-slate-900/60 rounded-2xl p-6 border border-emerald-700/40 text-center">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-emerald-600 to-cyan-800 flex items-center justify-center mb-4 text-3xl font-bold text-white">재영</div>
            <div className="text-xs uppercase tracking-widest text-emerald-400 mb-1">CEO · 영업 총괄</div>
            <div className="text-2xl font-bold text-slate-100 mb-1">유재영</div>
            <div className="text-sm text-slate-400 mb-4">대흥 10곳 + 2차 전환</div>
            <div className="space-y-2 text-left border-t border-slate-800/60 pt-4">
              <div className="flex justify-between text-xs"><span className="text-slate-500">타겟</span><span className="text-emerald-300 font-mono">대흥 10곳 A급</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">주기</span><span className="text-slate-300">주 2회 · 화·금</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">SLA</span><span className="text-slate-300 font-mono">광고 응답 24h</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">싱크</span><span className="text-slate-300">동주 QA 리스트</span></div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <div className="text-xs uppercase tracking-widest text-emerald-400/80 mb-1">UPDATE · 영업·마케팅 데이터 루프 강화</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">대흥 10곳 + 랜딩 2차 전환</h2>
              <p className="text-slate-500 text-sm">오프라인 영업 + 온라인 응답자 통합 관리</p>
            </div>
            <div className="space-y-3">
              {updates.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className={`bg-slate-900/60 rounded-xl p-4 border ${c.border} flex items-start gap-4`}>
                  <div className={`text-xs uppercase tracking-widest ${c.color} shrink-0 w-28 mt-0.5 font-semibold`}>{c.k}</div>
                  <div className="text-sm text-slate-200 leading-relaxed flex-1">{c.v}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
