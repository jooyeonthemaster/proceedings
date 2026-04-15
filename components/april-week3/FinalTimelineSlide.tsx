'use client';

import { motion } from 'framer-motion';

const rows = [
  { date: '04.16 (목)', main: '주연 이탈리아 출발', detail: '랜딩 LIVE · 동주 QA 개시 · 재영 대흥 컨택 시작', tone: 'text-rose-300' },
  { date: '04.17 (금)', main: '광고 계정 개설', detail: '선화 인스타 프로필 · 콘텐츠 1안 소스 수령', tone: 'text-fuchsia-300' },
  { date: '04.18 (토)', main: '티저 1건 업로드', detail: '편집 1차 · UTM 세팅 · 픽셀 설치', tone: 'text-violet-300' },
  { date: '04.19 (일)', main: '랜딩 싱크 완료', detail: '콘텐츠 1안 최종 · 테스트', tone: 'text-cyan-300' },
  { date: '04.20 (월)', main: '콘텐츠 1안 업로드', detail: 'QA · 광고 예산 확정', tone: 'text-blue-300' },
  { date: '04.21 (화)', main: '광고 리허설', detail: '콘텐츠 2안 최종 · QA 2차', tone: 'text-emerald-300' },
  { date: '04.22 (수)', main: '🔥 광고 집행 시작', detail: '인스타 1안+2안 동시 집행 · 응답 수집 본격화', tone: 'text-amber-300' },
  { date: '04.25 (토)', main: '중간 점검 화상미팅', detail: '이름·가격 1차 판단 · 기능 점수 중간 집계', tone: 'text-slate-300' },
  { date: '04.30 (목)', main: '5대 산출물 확정', detail: '니즈·이름·요금제·기능Top3·플로우 승인 · 5월 배포 시나리오', tone: 'text-rose-300' },
  { date: '05.01 (금)', main: '🚀 MVP 배포', detail: '사전예약자 10~20명 우선 온보딩', tone: 'text-amber-300' },
];

export default function FinalTimelineSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-slate-800/60 border border-slate-700/60 rounded-full px-5 py-1.5 mb-4">
            <span className="text-slate-300 text-sm font-medium tracking-wider">FINAL TIMELINE · 04.16 → 05.01</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-200 mb-1">4월 → 5월 최종 타임라인</h2>
          <p className="text-slate-500 text-sm">15일 · 10개 마일스톤</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] top-1 bottom-1 w-0.5 bg-gradient-to-b from-rose-700/60 via-cyan-700/60 to-amber-700/60" />
          <div className="space-y-1.5">
            {rows.map((r, i) => (
              <motion.div key={r.date} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }} className="flex items-start gap-4 relative">
                <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600 z-10 mt-1 shrink-0" />
                <div className="flex-1 bg-slate-900/60 rounded-lg px-4 py-2 border border-slate-800/60 grid grid-cols-[120px_1fr_2fr] gap-3 items-center">
                  <div className={`font-mono text-xs font-bold ${r.tone}`}>{r.date}</div>
                  <div className="text-sm text-slate-100 font-semibold">{r.main}</div>
                  <div className="text-xs text-slate-400">{r.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
