'use client';

import { motion } from 'framer-motion';

const tasks = [
  { id: 'T1', title: '엔드리스 QA 가동', detail: '주연 푸시 = 당일 검증. 이슈-수정 사이클 ≤ 24h.', due: '매일', src: '4/15 합의' },
  { id: 'T2', title: '17:00 일일 리포트', detail: '노션 일일 리포트 + Critical 발견 즉시 슬랙 멘션.', due: '매일 17시', src: '4/15 합의' },
  { id: 'T3', title: 'QA 계정 세팅', detail: '재영 대흥 미팅용 샌드박스 + QA 계정 3개 + 이슈 보드.', due: '4/15 완료 목표', src: '4/15 합의' },
  { id: 'T4', title: '7클릭 시나리오 측정', detail: '앱 진입 → 시험지 출력 ≤ 7클릭, 30초 이내 검증.', due: '~4/30', src: '4/15 합의' },
  { id: 'T5', title: '핵심 기능 Top3 평가', detail: '10개 기능 후보 1~5점 기록, 평균 4점+ 상위 3개 확정.', due: '4/30', src: '4/15 합의' },
  { id: 'T6', title: '광고 예산 추적', detail: '일 25,000원 × 8일 × 2안 집행 추적 + 일자별 CPL.', due: '4/22~', src: '4/15 합의' },
];

const ask = [
  { k: '진척률', v: 'QA 계정 세팅·이슈 보드는 가동 중인가? 푸시 받자마자 돌아가는가?' },
  { k: '리포트', v: '17시 일일 리포트는 며칠째 누적되었는가? Critical 발견 건수는?' },
  { k: '막힘', v: '7클릭 시나리오 측정에서 막힌 단계는? (재영 동행 측정 일정?)' },
  { k: '필요 도움', v: '주연 푸시 주기·시간(이탈리아 CET)이 QA에 맞는가? 조정 필요?' },
];

export default function DongjuProgressCheckSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          <div className="bg-slate-900/60 rounded-2xl p-6 border border-blue-700/40 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center mb-4 text-2xl font-bold text-white">동주</div>
            <div className="text-xs uppercase tracking-widest text-blue-400 mb-1">재무/운영 · QA 총괄</div>
            <div className="text-2xl font-bold text-slate-100 mb-1">이동주</div>
            <div className="text-sm text-slate-400 mb-4">엔드리스 QA + 일일 리포트</div>
            <div className="space-y-2 text-left border-t border-slate-800/60 pt-4">
              <div className="flex justify-between text-xs"><span className="text-slate-500">책임 건</span><span className="text-blue-300 font-mono">6건</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">리포트</span><span className="text-blue-300 font-mono">매일 17시</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">사이클</span><span className="text-slate-300 font-mono">≤ 24h</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">기준일</span><span className="text-slate-300 font-mono">4/30 데이터 확정</span></div>
            </div>
          </div>

          <div>
            <div className="mb-3">
              <div className="text-xs uppercase tracking-widest text-blue-400/80 mb-1">CHECK · 운영/QA 책임 6건</div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">엔드리스 QA, 며칠째 돌고 있는가</h2>
              <p className="text-slate-500 text-sm">리포트 누적 일수·Critical 건수·예산 집행률을 숫자로.</p>
            </div>

            <div className="space-y-1.5 mb-4">
              {tasks.map((t, i) => (
                <motion.div key={t.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.06 }} className="bg-slate-900/60 rounded-lg p-2.5 border border-blue-900/40 flex items-start gap-3">
                  <div className="text-xs font-mono text-blue-300 shrink-0 w-7 mt-0.5">{t.id}</div>
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

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-blue-950/40 rounded-xl p-3 border border-blue-700/40">
              <div className="text-xs uppercase tracking-widest text-blue-300 mb-2 font-semibold">오늘 답해주세요 · 4가지</div>
              <div className="grid grid-cols-2 gap-2">
                {ask.map((a) => (
                  <div key={a.k} className="bg-slate-950/40 rounded-lg px-3 py-2">
                    <div className="text-[10px] text-blue-300 font-semibold">{a.k}</div>
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
