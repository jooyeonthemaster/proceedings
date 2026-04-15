'use client';

import { motion } from 'framer-motion';

const schedule = [
  { date: '04.19 (일)', label: '랜딩 싱크', desc: '선화 UTM·픽셀 완료 · 콘텐츠 1안 최종', color: 'text-fuchsia-300', border: 'border-fuchsia-700/50' },
  { date: '04.22 (수)', label: '광고 ON', desc: '인스타 2안 집행 시작 · 응답 수집 본격화', color: 'text-amber-300', border: 'border-amber-700/50' },
  { date: '04.25 (토)', label: '중간 점검', desc: '화상 미팅 · 이름·가격 1차 판단', color: 'text-emerald-300', border: 'border-emerald-700/50' },
  { date: '04.30 (목)', label: '5대 확정', desc: '니즈·이름·요금제·기능·플로우 최종 승인', color: 'text-rose-300', border: 'border-rose-700/50' },
];

const summary = [
  '통합 랜딩페이지 = 4월 데이터의 단일 수집기',
  '4월 5대 산출물 = 5월 MVP의 뇌피셜 방지 근거',
  '병렬 실행 = 4/20 → 4/22 전환으로 7일 단축',
  '엔드리스 QA = 이벤트성 3회 → 매일 반복',
  '이탈리아 원격 = KST-7h 24시간 루프 가동',
];

export default function NextStepsSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-indigo-900/40 border border-indigo-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-indigo-300 text-sm font-medium tracking-wider">NEXT STEPS · WRAP UP</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">다음 일정 & 회의록 요약</h2>
          <p className="text-slate-500 text-sm">4개 이정표 + 5개 핵심 요약</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
          {schedule.map((s, i) => (
            <motion.div key={s.date} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }} className={`bg-slate-900/60 rounded-xl p-4 border ${s.border}`}>
              <div className={`font-mono text-xs font-bold ${s.color} mb-1`}>{s.date}</div>
              <div className="text-base font-bold text-slate-100 mb-2">{s.label}</div>
              <div className="text-xs text-slate-400 leading-snug">{s.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="bg-slate-900/60 rounded-2xl p-5 border border-indigo-900/40">
          <div className="text-xs uppercase tracking-widest text-indigo-400 mb-3">회의록 핵심 5줄 요약</div>
          <div className="space-y-2">
            {summary.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + i * 0.08 }} className="flex items-start gap-3">
                <div className="text-xs font-mono text-indigo-400 shrink-0 mt-0.5">0{i + 1}</div>
                <div className="text-sm text-slate-200 leading-relaxed">{s}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
