'use client';

import { motion } from 'framer-motion';

const tasks = [
  { id: 'T1', title: '통합 랜딩페이지 LIVE', detail: '6섹션 구조 · Next + Tailwind + Supabase. 4/16 LIVE.', status: 'LIVE', color: 'text-emerald-300', bg: 'bg-emerald-950/40 border-emerald-700/40' },
  { id: 'T2', title: '이미지·PDF 텍스트 추출', detail: '이탈리아 원격 — 업로드 시 자동 추출 플로우. 80% 구현.', status: '80%', color: 'text-amber-300', bg: 'bg-amber-950/40 border-amber-700/40' },
  { id: 'T3', title: '5대 산출물 데이터 수집', detail: '니즈·이름·요금제·기능·플로우 — 랜딩 응답 누적 중.', status: 'RUN', color: 'text-cyan-300', bg: 'bg-cyan-950/40 border-cyan-700/40' },
  { id: 'T4', title: '이탈리아 원격 루틴', detail: 'KST 22시 푸시 / CET 15시 머지 / 일일 노션 업데이트.', status: 'OK', color: 'text-cyan-300', bg: 'bg-cyan-950/40 border-cyan-700/40' },
  { id: 'T5', title: '데모 영상 5컷', detail: '17:00~19:00 녹화 후 선화 전달 (4/15 To-Do).', status: '확인필요', color: 'text-rose-300', bg: 'bg-rose-950/40 border-rose-700/40' },
];

const declare = [
  { k: 'GOOD', v: '랜딩 LIVE 안정 가동, Supabase 응답 폼 정상 수집.' },
  { k: 'BLOCK', v: '추출 정확도 — 손글씨/스캔 품질 낮을 때 정확도 80% 한계.' },
  { k: 'NEXT', v: '오늘 데모 → 피드백 수렴 → 4/22 광고 ON 전 90% 도달.' },
];

export default function CTOProgressCheckSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-slate-900 to-indigo-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          <div className="bg-slate-900/60 rounded-2xl p-6 border border-cyan-700/40 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan-600 to-indigo-800 flex items-center justify-center mb-4 text-2xl font-bold text-white">주연</div>
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-1">CTO · 개발 총괄</div>
            <div className="text-2xl font-bold text-slate-100 mb-1">김주연</div>
            <div className="text-sm text-slate-400 mb-4">이탈리아 원격 (CET)</div>
            <div className="space-y-2 text-left border-t border-slate-800/60 pt-4">
              <div className="flex justify-between text-xs"><span className="text-slate-500">출국</span><span className="text-cyan-300 font-mono">4/16 (목)</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">경과</span><span className="text-slate-300 font-mono">5일차</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">시차</span><span className="text-slate-300 font-mono">KST-7h</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">귀국</span><span className="text-rose-300">4/27 변경 (조기)</span></div>
            </div>
          </div>

          <div>
            <div className="mb-3">
              <div className="text-xs uppercase tracking-widest text-cyan-400/80 mb-1">SELF-REPORT · CTO 책임 5건</div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">CTO 자체 진행 보고</h2>
              <p className="text-slate-500 text-sm">랜딩은 LIVE. 텍스트 추출은 80%. 오늘 회의 피드백으로 90% 진입.</p>
            </div>

            <div className="space-y-1.5 mb-3">
              {tasks.map((t, i) => (
                <motion.div key={t.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.07 }} className={`rounded-lg p-3 border flex items-start gap-3 ${t.bg}`}>
                  <div className="text-xs font-mono text-cyan-300 shrink-0 w-7 mt-0.5">{t.id}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-slate-100">{t.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{t.detail}</div>
                  </div>
                  <div className={`text-xs font-mono font-bold shrink-0 ${t.color}`}>{t.status}</div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-cyan-950/40 rounded-xl p-3 border border-cyan-700/40">
              <div className="text-xs uppercase tracking-widest text-cyan-300 mb-2 font-semibold">선언 · 3줄</div>
              <div className="grid grid-cols-3 gap-2">
                {declare.map((d) => (
                  <div key={d.k} className="bg-slate-950/40 rounded-lg px-3 py-2">
                    <div className="text-[10px] text-cyan-300 font-semibold font-mono">{d.k}</div>
                    <div className="text-[11px] text-slate-300 mt-0.5 leading-snug">{d.v}</div>
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
