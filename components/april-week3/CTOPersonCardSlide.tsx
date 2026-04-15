'use client';

import { motion } from 'framer-motion';

const whyLanding = [
  { k: '광고 CTA 단일 목적지', v: '인스타 광고의 무료체험/사전예약이 꽂힐 URL이 없다면 광고 예산이 전환 없이 소진된다.' },
  { k: '영업 2차 전환 공간', v: '미팅 후 "생각해볼게요" 고객을 다시 데려갈 공간이 현재 전무하다.' },
  { k: '모든 데이터의 단일 저장소', v: '4월 내 수집되는 정성·정량 응답을 한 DB에 모아야 4/30 결정이 가능하다.' },
];

export default function CTOPersonCardSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-slate-900 to-indigo-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
          <div className="bg-slate-900/60 rounded-2xl p-6 border border-cyan-700/40 text-center">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-cyan-600 to-indigo-800 flex items-center justify-center mb-4 text-3xl font-bold text-white">주연</div>
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-1">CTO · 개발 총괄</div>
            <div className="text-2xl font-bold text-slate-100 mb-1">김주연</div>
            <div className="text-sm text-slate-400 mb-4">회의록 작성자</div>
            <div className="space-y-2 text-left border-t border-slate-800/60 pt-4">
              <div className="flex justify-between text-xs"><span className="text-slate-500">출발</span><span className="text-cyan-300 font-mono">04.16 (목)</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">거점</span><span className="text-slate-300">이탈리아</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">시차</span><span className="text-slate-300 font-mono">KST-7h (CET)</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">귀국</span><span className="text-slate-300">미정 · 원격 지속</span></div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <div className="text-xs uppercase tracking-widest text-cyan-400/80 mb-1">UPDATE · 이번 회의 추가 안건</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">왜 통합 랜딩페이지인가</h2>
              <p className="text-slate-500 text-sm">4/15 내 완성 · 4/16 LIVE · 모든 채널의 단일 데이터 수집기</p>
            </div>
            <div className="space-y-3">
              {whyLanding.map((w, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.12 }} className="bg-slate-900/60 rounded-xl p-4 border border-cyan-900/40 flex items-start gap-4">
                  <div className="text-2xl font-mono font-bold text-cyan-300 shrink-0">0{i + 1}</div>
                  <div>
                    <div className="text-sm font-semibold text-cyan-200 mb-1">{w.k}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{w.v}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
