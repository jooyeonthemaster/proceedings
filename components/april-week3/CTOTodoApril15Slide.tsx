'use client';

import { motion } from 'framer-motion';

const todos = [
  { time: '09:00 ~ 12:00', title: '랜딩 스캐폴딩 + 섹션 1~3', detail: 'Next.js 초기 세팅 · 히어로 · 데모영상 플레이스홀더 · 기능 5종 상세', status: 'dev' },
  { time: '13:00 ~ 17:00', title: '섹션 4~6 + Supabase 연동', detail: '가격 3안 테이블 · CTA 분기 · 응답 폼 · Supabase 스키마', status: 'dev' },
  { time: '17:00 ~ 19:00', title: '데모 영상 녹화', detail: '지문 업로드 → AI 시험지 생성 20초 · 원본 선화 전달', status: 'media' },
  { time: '19:00 ~ 21:00', title: '김제연 분업 확정 + 배포 핸드오버', detail: 'Vercel 권한 · 긴급 대응 플로우 · 코드 리뷰 체크포인트', status: 'handover' },
  { time: '21:00 ~ 23:00', title: '재영 데모 환경 + 동주 QA 계정', detail: '대흥 미팅용 샌드박스 · QA 계정 3개 · 이슈 보드 세팅', status: 'handover' },
];

const statusColor: Record<string, string> = {
  dev: 'border-cyan-700/50 text-cyan-300',
  media: 'border-fuchsia-700/50 text-fuchsia-300',
  handover: 'border-amber-700/50 text-amber-300',
};

export default function CTOTodoApril15Slide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-cyan-900/40 border border-cyan-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-cyan-300 text-sm font-medium tracking-wider">CTO TO-DO · 04.15 HOURLY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">4/15 시간별 To-Do</h2>
          <p className="text-slate-500 text-sm">14시간 · 랜딩 완성부터 핸드오버까지</p>
        </motion.div>

        <div className="space-y-3">
          {todos.map((t, i) => (
            <motion.div key={t.time} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }} className={`bg-slate-900/60 rounded-xl p-4 border ${statusColor[t.status]} grid grid-cols-[auto_1fr] md:grid-cols-[180px_1fr] gap-4 items-center`}>
              <div className={`font-mono tabular-nums text-sm font-bold ${statusColor[t.status].split(' ')[1]}`}>{t.time}</div>
              <div>
                <div className="text-base font-semibold text-slate-100 mb-1">{t.title}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{t.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
