'use client';

import { motion } from 'framer-motion';

const tasks = [
  { id: 'T1', title: '콘텐츠 2안 제작', detail: '시장조사형(무료체험) + 사전예약형(50만 FOMO). 5컷 영상 시나리오.', due: '~4/21', src: '4/15 합의' },
  { id: 'T2', title: '인스타 광고 4/22 ON', detail: '예산 25,000원 × 8일 × 2안 = 40만원 / 5트랙 병렬 실행.', due: '4/22 D-Day', src: '4/15 합의' },
  { id: 'T3', title: '서비스명 A/B 테스트', detail: '에듀플로우 / 틴북 / 원장AI / 시험러 / AI튜터 — CTR 검증.', due: '4/25 중간점검', src: '4/15 합의' },
  { id: 'T4', title: '편집·개발 협력', detail: '편집(정연) + 데모영상(주연 원격) 콘텐츠 싱크.', due: '4/20~21', src: '4/15 합의' },
];

const ask = [
  { k: '진척률', v: '콘텐츠 2안 — 촬영/편집/업로드 어디까지 왔는가?' },
  { k: '광고 세팅', v: '4/22 ON 가능한 상태인가? 광고 계정·픽셀·이벤트 준비도?' },
  { k: '막힘', v: '주연이 이탈리아에서 못 보내준 데모 영상이 있다면 어떤 컷?' },
  { k: '필요 도움', v: '서비스명 5개 중 광고 카피로 풀기 어려운 후보는 무엇인가?' },
];

export default function CMOProgressCheckSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-950 via-slate-900 to-violet-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          <div className="bg-slate-900/60 rounded-2xl p-6 border border-fuchsia-700/40 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-800 flex items-center justify-center mb-4 text-2xl font-bold text-white">선화</div>
            <div className="text-xs uppercase tracking-widest text-fuchsia-400 mb-1">CMO · 마케팅 총괄</div>
            <div className="text-2xl font-bold text-slate-100 mb-1">유선화</div>
            <div className="text-sm text-slate-400 mb-4">콘텐츠 2안 + 광고 ON</div>
            <div className="space-y-2 text-left border-t border-slate-800/60 pt-4">
              <div className="flex justify-between text-xs"><span className="text-slate-500">D-Day</span><span className="text-fuchsia-300 font-mono">4/22 (수)</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">남은 일</span><span className="text-fuchsia-300 font-mono">2일</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">예산</span><span className="text-slate-300 font-mono">2.5만 × 8일 × 2안</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">트랙</span><span className="text-slate-300 font-mono">5 병렬</span></div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <div className="text-xs uppercase tracking-widest text-fuchsia-400/80 mb-1">CHECK · CMO 책임 4건</div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">2일 후 광고 ON, 준비는?</h2>
              <p className="text-slate-500 text-sm">콘텐츠 진척·광고 세팅·막힌 한 컷을 명확하게 공유해주세요.</p>
            </div>

            <div className="space-y-2 mb-4">
              {tasks.map((t, i) => (
                <motion.div key={t.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.08 }} className="bg-slate-900/60 rounded-lg p-3 border border-fuchsia-900/40 flex items-start gap-3">
                  <div className="text-xs font-mono text-fuchsia-300 shrink-0 w-8 mt-0.5">{t.id}</div>
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

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-fuchsia-950/40 rounded-xl p-4 border border-fuchsia-700/40">
              <div className="text-xs uppercase tracking-widest text-fuchsia-300 mb-2 font-semibold">오늘 답해주세요 · 4가지</div>
              <div className="grid grid-cols-2 gap-2">
                {ask.map((a) => (
                  <div key={a.k} className="bg-slate-950/40 rounded-lg px-3 py-2">
                    <div className="text-[10px] text-fuchsia-300 font-semibold">{a.k}</div>
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
