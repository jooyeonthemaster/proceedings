'use client';

import { motion } from 'framer-motion';

const tasks = [
  { id: 'T1', title: '대흥 10곳 미팅', detail: '주 2회 화·금 미팅 진행 + 자료에 랜딩 URL 동봉.', due: '4/15부터 진행', src: '4/15 합의' },
  { id: 'T2', title: '광고 응답자 24h 컨택', detail: '대흥 지역 광고 응답자 = 최우선. 24시간 내 전화.', due: '광고 4/22 ON 이후', src: '4/15 합의' },
  { id: 'T3', title: '랜딩 2차 전환', detail: '"생각해볼게요" 고객에 랜딩 링크 전송 → 응답 수집.', due: '미팅 직후', src: '4/15 합의' },
  { id: 'T4', title: '동주 주 2회 싱크', detail: '화·금 미팅 인사이트 → QA 리스트 즉시 반영.', due: '주 2회', src: '4/15 합의' },
];

const ask = [
  { k: '진척률', v: '10곳 중 몇 곳 미팅 완료? (목요일까지 누적)' },
  { k: '응답 데이터', v: '미팅 중 기능 반응점수 1~5점 누적은 어떻게 기록 중인가?' },
  { k: '막힘', v: '미팅 거절·연기 비율은? 어떤 멘트에서 막히는가?' },
  { k: '필요 도움', v: '랜딩 링크/2차 응답 폼에서 추가로 필요한 필드가 있는가?' },
];

export default function CEOProgressCheckSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-cyan-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          <div className="bg-slate-900/60 rounded-2xl p-6 border border-emerald-700/40 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-emerald-600 to-cyan-800 flex items-center justify-center mb-4 text-2xl font-bold text-white">재영</div>
            <div className="text-xs uppercase tracking-widest text-emerald-400 mb-1">CEO · 영업 총괄</div>
            <div className="text-2xl font-bold text-slate-100 mb-1">유재영</div>
            <div className="text-sm text-slate-400 mb-4">대흥 10곳 + 2차 전환</div>
            <div className="space-y-2 text-left border-t border-slate-800/60 pt-4">
              <div className="flex justify-between text-xs"><span className="text-slate-500">합의일</span><span className="text-emerald-300 font-mono">4/15</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">경과</span><span className="text-slate-300 font-mono">5일차</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">SLA</span><span className="text-slate-300">광고 응답 24h</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">싱크</span><span className="text-slate-300">동주 화·금</span></div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <div className="text-xs uppercase tracking-widest text-emerald-400/80 mb-1">CHECK · CEO 책임 4건</div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">대흥 10곳, 어디까지 갔는가</h2>
              <p className="text-slate-500 text-sm">5일이 지났다. 미팅 수·응답 수·막힌 멘트를 숫자로 공유해주세요.</p>
            </div>

            <div className="space-y-2 mb-4">
              {tasks.map((t, i) => (
                <motion.div key={t.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.08 }} className="bg-slate-900/60 rounded-lg p-3 border border-emerald-900/40 flex items-start gap-3">
                  <div className="text-xs font-mono text-emerald-300 shrink-0 w-8 mt-0.5">{t.id}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-slate-100">{t.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{t.detail}</div>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono shrink-0 text-right">
                    <div>{t.due}</div>
                    <div className="text-slate-600 mt-0.5">{t.src}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-emerald-950/40 rounded-xl p-4 border border-emerald-700/40">
              <div className="text-xs uppercase tracking-widest text-emerald-300 mb-2 font-semibold">오늘 답해주세요 · 4가지</div>
              <div className="grid grid-cols-2 gap-2">
                {ask.map((a) => (
                  <div key={a.k} className="bg-slate-950/40 rounded-lg px-3 py-2">
                    <div className="text-[10px] text-emerald-300 font-semibold">{a.k}</div>
                    <div className="text-[11px] text-slate-300 mt-0.5 leading-snug">{a.v}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
