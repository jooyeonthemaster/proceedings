'use client';

import { motion } from 'framer-motion';

const concept = [
  { id: '01', t: '국내 오픈소스 데이터 활용', d: '공공데이터포털·정부24·국회 의안정보·전자공시·지자체 공시 등 공개 자원 통합.' },
  { id: '02', t: '국가 단위 비리 탐지', d: '예산·발주·계약·인사 데이터 교차분석 → 이상 패턴(부정수급·이해충돌·짬짜미) 자동 감지.' },
  { id: '03', t: 'AI 미디어 솔루션', d: '탐지 결과를 LLM으로 기사 초안·인포그래픽·증거 패키지로 자동 생성 — 언론사 납품용.' },
];

const why = [
  { k: 'WHY 미디어재단', v: '"미디어 스타트업"이라는 카테고리에 정확히 부합 — 언론사 납품 솔루션이라는 출구 전략 명확.' },
  { k: 'WHY 오픈소스', v: '데이터 비용 = 0원. 라이선스 분쟁 없음. 출처 검증 가능 → 기사화 가능.' },
  { k: 'WHY 비리 탐지', v: '공익성 + 사회적 임팩트 = 정부지원금 평가 기준의 핵심 가치 정합.' },
];

export default function GrantSolutionConceptSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-emerald-300 text-sm font-medium tracking-wider">PROPOSED SOLUTION · 지원 아이템</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">국내 오픈소스 데이터 기반 비리 탐지 AI 미디어 솔루션</h2>
          <p className="text-slate-500">공개 데이터 → AI 분석 → 언론사 납품. 카테고리 정합성으로 1차 통과의 핵심.</p>
        </motion.div>

        <div className="space-y-2 mb-5">
          {concept.map((c, i) => (
            <motion.div key={c.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="bg-slate-900/60 rounded-xl p-4 border border-emerald-900/40 flex items-start gap-4">
              <div className="text-2xl font-mono font-bold text-emerald-300 shrink-0">{c.id}</div>
              <div>
                <div className="text-base font-semibold text-emerald-100 mb-1">{c.t}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{c.d}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-slate-900/40 rounded-2xl p-4 border border-emerald-900/30">
          <div className="text-xs uppercase tracking-widest text-emerald-400/80 mb-3 font-semibold">왜 통과했는가 · 3가지 정합성</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {why.map((w, i) => (
              <motion.div key={w.k} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + i * 0.08 }} className="bg-slate-950/40 rounded-lg px-3 py-3 border border-emerald-900/30">
                <div className="text-xs text-emerald-300 font-semibold mb-1">{w.k}</div>
                <div className="text-[11px] text-slate-300 leading-snug">{w.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
