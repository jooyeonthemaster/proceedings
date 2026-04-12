'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    date: '2026.04.11 (금)',
    label: '문서 작성일',
    desc: '본 전략 분석 보고서 작성 완료',
    color: 'border-slate-700/50',
    accent: 'text-slate-300',
  },
  {
    date: '2026.04.12 (일)',
    label: '회의록 날짜',
    desc: '4월 2주차 회의록 정리 / 사전 배포',
    color: 'border-indigo-700/50',
    accent: 'text-indigo-300',
  },
  {
    date: '2026.04.14 (화)',
    label: '전략회의 D-Day',
    desc: '영업·마케팅·개발·운영팀 1시간 합동 회의',
    color: 'border-rose-700/60',
    accent: 'text-rose-300',
  },
];

const agenda = [
  { id: '01', title: '회사 현황 종합', sub: '개요 · 인력 · 재무 · 매출 구조' },
  { id: '02', title: '사업별 심층 분석', sub: '학원 AI · AI 포토부스 · 외주개발 · 악센트' },
  { id: '03', title: '마케팅 리소스 재배치', sub: '악센트 ↔ 학원 AI ↔ 포토부스' },
  { id: '04', title: '시나리오 분석', sub: 'A 밸런스 · B 올인 · C 캐시우선 · D 하이브리드' },
  { id: '05', title: '인력 배치 시나리오', sub: '9명 리소스 재구성안' },
  { id: '06', title: '4월 14일 화요일 회의 전략', sub: '아젠다·질문·의사결정 포인트' },
  { id: '07', title: '2026 로드맵', sub: '월별 마일스톤·KPI' },
  { id: '08', title: '핵심 리스크 & 대응', sub: '런웨이·집중도·캐시 리스크' },
  { id: '09', title: '최종 요약 & 의사결정 요청', sub: '전사 합의 사항' },
];

export default function MeetingContextSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center bg-indigo-900/40 border border-indigo-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-indigo-300 text-sm font-medium tracking-wider">
              MEETING CONTEXT
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">회의 배경</h2>
          <p className="text-slate-500">왜 이 문서가 필요한가</p>
        </motion.div>

        {/* Origin Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-slate-900/60 rounded-2xl p-5 border border-indigo-800/40 mb-6"
        >
          <div className="flex items-start gap-4 flex-wrap">
            <div className="text-xs uppercase tracking-widest text-indigo-400/80 mt-1 shrink-0">
              작성 배경
            </div>
            <div className="flex-1 text-slate-300 text-sm leading-relaxed">
              <span className="text-indigo-300 font-semibold">CEO 유재영</span>
              <span className="text-slate-500"> → </span>
              <span className="text-indigo-300 font-semibold">CTO 김주연</span>
              에게 <span className="text-slate-200 font-semibold">AI 포토부스 제안서 기반 회의</span>를
              요청. 이에 대한 <span className="text-slate-200 font-semibold">전사 전략 관점의 분석</span> 및
              <span className="text-slate-200 font-semibold"> 의사결정 프레임워크</span>를 수립해
              4월 14일(화) 전략회의 사전 자료로 배포한다.
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-800/60 text-xs text-slate-500 leading-relaxed">
            <span className="text-slate-400">목적</span> &nbsp;·&nbsp; 4월 14일(화) 전략회의 사전 자료 +
            전사 의사결정 프레임워크 — 임원진이 회의 전에 같은 그림을 공유한 채로 들어가는 것
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {timeline.map((t, i) => (
            <motion.div
              key={t.date}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className={`bg-slate-900/60 rounded-xl p-4 border ${t.color}`}
            >
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{t.label}</div>
              <div className={`text-lg font-bold ${t.accent} font-mono tabular-nums mb-1`}>
                {t.date}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">{t.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Agenda Index */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-slate-900/40 rounded-2xl p-5 border border-slate-800/60"
        >
          <div className="flex items-baseline justify-between mb-4">
            <div className="text-sm uppercase tracking-widest text-slate-400">
              회의 아젠다 흐름 · 9 sections
            </div>
            <div className="text-xs text-slate-600">회사 현황 → 의사결정 요청</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {agenda.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.05, duration: 0.4 }}
                className="flex items-start gap-3 bg-slate-950/50 rounded-lg px-3 py-2.5 border border-slate-800/40 hover:border-indigo-800/40 transition-colors"
              >
                <div className="text-xs font-mono text-indigo-400/70 mt-0.5 shrink-0">{a.id}</div>
                <div className="min-w-0">
                  <div className="text-sm text-slate-200 font-medium leading-tight truncate">
                    {a.title}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{a.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
