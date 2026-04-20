'use client';

import { motion } from 'framer-motion';

const agenda = [
  { id: '01', title: '진행상황 점검', sub: '4/15 임원진 회의 이후 5일간 각자의 실행 결과를 공유한다.', color: 'border-amber-700/50', accent: 'text-amber-300' },
  { id: '02', title: '개발 데모 피드백', sub: '이미지·PDF 텍스트 추출 80% 구현 — 오늘 회의에서 개선 포인트 수렴.', color: 'border-cyan-700/50', accent: 'text-cyan-300' },
  { id: '03', title: '언론재단 1차 선정', sub: '미디어 스타트업 지원사업 1차 통과 — 4/28 발표평가 일정 재조정.', color: 'border-emerald-700/50', accent: 'text-emerald-300' },
  { id: '04', title: '김기홍 강의 확정', sub: '시급 20만 × 60시간 = 1,200만. 마케터 교육과정 인건비 정리.', color: 'border-fuchsia-700/50', accent: 'text-fuchsia-300' },
];

const context = [
  { date: '04.15 (수)', label: 'D-5', desc: '긴급 업데이트 회의 — 5대 산출물·랜딩페이지·엔드리스 QA 합의' },
  { date: '04.16 (목)', label: 'D-4', desc: 'CTO 이탈리아 출발 · 랜딩 LIVE · 원격 루틴 시작' },
  { date: '04.20 (월)', label: '오늘', desc: '4/15 합의 사항 진행도 점검 + 신규 의제 4건 합의' },
];

export default function AgendaSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <div className="inline-flex items-center bg-violet-900/40 border border-violet-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-violet-300 text-sm font-medium tracking-wider">TODAY · AGENDA</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">오늘 다룰 4가지</h2>
          <p className="text-slate-500">진행 점검(과거) → 개발 피드백(현재) → 외부 기회(미래) → 인건비 정리(내부)</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {context.map((t, i) => (
            <motion.div key={t.date} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }} className="bg-slate-900/60 rounded-xl p-4 border border-slate-800/60">
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{t.label}</div>
              <div className="text-base font-bold text-violet-300 font-mono tabular-nums mb-1">{t.date}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{t.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {agenda.map((a, i) => (
            <motion.div key={a.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className={`bg-slate-900/60 rounded-xl p-5 border ${a.color} flex items-start gap-4`}>
              <div className={`text-2xl font-mono font-bold ${a.accent} shrink-0`}>{a.id}</div>
              <div>
                <div className="text-lg font-semibold text-slate-100 mb-1">{a.title}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{a.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
