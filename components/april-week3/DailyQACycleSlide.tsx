'use client';

import { motion } from 'framer-motion';

const cycle = [
  { time: '09:00', title: '주연 이탈리아 밤 푸시 확인', detail: 'Vercel Preview 링크 · 변경 로그 확인', color: 'text-emerald-300' },
  { time: '10:00 ~ 12:00', title: '신규 기능 QA', detail: '기능별 체크리스트 · 크로스브라우저 · 모바일', color: 'text-cyan-300' },
  { time: '13:00', title: '재영 미팅 인사이트 수신', detail: '기능 점수 → QA 항목 변환 · 우선순위 조정', color: 'text-amber-300' },
  { time: '14:00 ~ 16:00', title: '문제 퀄리티 검수', detail: 'AI 생성 문제 정답률 · 난이도 · 지문 일치성', color: 'text-fuchsia-300' },
  { time: '16:00', title: '선화 광고 피드백 모니터링', detail: '댓글·DM·부정반응 → 개선안 도출', color: 'text-rose-300' },
  { time: '17:00', title: '노션 일일 리포트 → 주연 푸시', detail: 'Critical/Major/Minor 분류 · 슬랙 멘션', color: 'text-indigo-300' },
];

export default function DailyQACycleSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-blue-900/40 border border-blue-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-blue-300 text-sm font-medium tracking-wider">DAILY QA CYCLE · 09:00 → 17:00</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">일일 QA 사이클</h2>
          <p className="text-slate-500 text-sm">8시간 · 6단계 · 매일 반복</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[24px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-700/60 via-fuchsia-700/60 to-indigo-700/60" />
          <div className="space-y-3">
            {cycle.map((c, i) => (
              <motion.div key={c.time} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }} className="flex items-start gap-4 relative">
                <div className="shrink-0 w-12 h-12 rounded-full bg-slate-900 border-2 border-blue-700/60 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>
                <div className="flex-1 bg-slate-900/60 rounded-xl p-4 border border-blue-900/40">
                  <div className="flex items-baseline gap-3 mb-1">
                    <div className={`font-mono font-bold text-sm ${c.color}`}>{c.time}</div>
                    <div className="text-base text-slate-100 font-semibold">{c.title}</div>
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">{c.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
