'use client';

import { motion } from 'framer-motion';

const steps = [
  { id: '01', t: '업로드', d: '이미지/PDF 드래그&드롭 또는 카메라 촬영 → Supabase Storage', status: 'DONE', color: 'text-emerald-300', bg: 'bg-emerald-950/30 border-emerald-700/40' },
  { id: '02', t: '전처리', d: '회전 보정·노이즈 제거·해상도 정규화', status: 'DONE', color: 'text-emerald-300', bg: 'bg-emerald-950/30 border-emerald-700/40' },
  { id: '03', t: 'OCR', d: '한글·영문·숫자·수식 혼합 텍스트 추출', status: 'DONE', color: 'text-emerald-300', bg: 'bg-emerald-950/30 border-emerald-700/40' },
  { id: '04', t: '구조 파싱', d: '문항 영역 분리, 번호·보기·정답 추출', status: '진행', color: 'text-amber-300', bg: 'bg-amber-950/30 border-amber-700/40' },
  { id: '05', t: '검증·저장', d: '신뢰도 점수, 사용자 수정 UI, DB row 확정', status: '미구현', color: 'text-rose-300', bg: 'bg-rose-950/30 border-rose-700/40' },
];

export default function ExtractFlowSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-slate-900 to-indigo-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-cyan-900/40 border border-cyan-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-cyan-300 text-sm font-medium tracking-wider">FLOW · 5 STEPS · 80% COMPLETE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">5단계 추출 플로우 — 어디까지 왔는가</h2>
          <p className="text-slate-500">3단계까지 완성. 4단계 진행 중. 5단계 미구현 — 오늘 우선순위 합의 필요.</p>
        </motion.div>

        <div className="space-y-2">
          {steps.map((s, i) => (
            <motion.div key={s.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className={`rounded-xl p-4 border flex items-center gap-4 ${s.bg}`}>
              <div className="text-2xl font-mono font-bold text-cyan-300 shrink-0">{s.id}</div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <div className="text-base font-semibold text-slate-100">{s.t}</div>
                  <div className={`text-xs font-mono font-bold ${s.color}`}>· {s.status}</div>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{s.d}</div>
              </div>
              <div className="hidden md:block">
                <div className="w-32 bg-slate-800/60 rounded-full h-2 overflow-hidden">
                  <div className={`h-full rounded-full ${
                    s.status === 'DONE' ? 'bg-emerald-500 w-full' :
                    s.status === '진행' ? 'bg-amber-500 w-2/3' : 'bg-rose-500 w-0'
                  }`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-5 bg-slate-900/40 rounded-xl p-3 border border-amber-900/40 text-center">
          <span className="text-xs text-amber-300 font-semibold tracking-wider">남은 20% · </span>
          <span className="text-xs text-slate-300">구조 파싱 정확도 + 사용자 검증 UI — 4/22 광고 ON 전까지 90% 도달 목표</span>
        </motion.div>
      </div>
    </div>
  );
}
