'use client';

import { motion } from 'framer-motion';

const courses = [
  { n: '1', date: '5월 초', topic: 'AI 마케팅 개론 · 도구 지형도', hours: 6 },
  { n: '2', date: '5월 중', topic: '카피·이미지 생성 자동화', hours: 6 },
  { n: '3', date: '5월 말', topic: 'GPT 활용 콘텐츠 파이프라인', hours: 6 },
  { n: '4', date: '6월 초', topic: '광고 크리에이티브 A/B 자동화', hours: 6 },
  { n: '5', date: '6월 중', topic: '데이터 분석·리포트 자동화', hours: 6 },
  { n: '6', date: '6월 말', topic: 'CRM·세그먼트·자동 발송', hours: 6 },
  { n: '7', date: '7월 초', topic: '브랜드 보이스·스타일 학습', hours: 6 },
  { n: '8', date: '7월 중', topic: 'SNS·인플루언서 자동 응대', hours: 6 },
  { n: '9', date: '7월 말', topic: '영상·숏폼 자동 생성', hours: 6 },
  { n: '10', date: '8월 초', topic: '실전 프로젝트 · 종합 평가', hours: 6 },
];

const summary = [
  { v: '10', s: '차시', label: '총 강의 횟수' },
  { v: '60', s: 'h', label: '총 강의 시간' },
  { v: '5월', s: '시작', label: '첫 차시' },
  { v: '8월', s: '종료', label: '마지막 차시' },
];

export default function MarketerCourseTimelineSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-950 via-slate-900 to-violet-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-5">
          <div className="inline-flex items-center bg-fuchsia-900/40 border border-fuchsia-700/40 rounded-full px-5 py-1.5 mb-3">
            <span className="text-fuchsia-300 text-sm font-medium tracking-wider">SCHEDULE · 5월 ~ 8월 · 4개월</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">AI 마케터 양성과정 · 10차시 60시간</h2>
          <p className="text-slate-500">5월 첫 강의 시작 — 차시당 6시간 · 월 2~3회 · 김기홍 직접 강의</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {summary.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="bg-slate-900/60 rounded-xl p-3 border border-fuchsia-900/40 text-center">
              <div className="text-2xl font-bold text-fuchsia-300 font-mono tabular-nums">
                {s.v}<span className="text-base align-middle ml-0.5 text-slate-400">{s.s}</span>
              </div>
              <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-slate-900/40 rounded-2xl p-4 border border-fuchsia-900/30">
          <div className="text-xs uppercase tracking-widest text-fuchsia-400/80 mb-3 font-semibold">차시별 커리큘럼 (잠정)</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
            {courses.map((c, i) => (
              <motion.div key={c.n} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.04 }} className="bg-slate-950/40 rounded-lg px-3 py-2 border border-fuchsia-900/20 flex items-center gap-3">
                <div className="text-xs font-mono font-bold text-fuchsia-300 shrink-0 w-6">#{c.n}</div>
                <div className="text-[11px] text-slate-500 font-mono shrink-0 w-12">{c.date}</div>
                <div className="text-xs text-slate-200 flex-1">{c.topic}</div>
                <div className="text-[10px] text-slate-500 font-mono shrink-0">{c.hours}h</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
