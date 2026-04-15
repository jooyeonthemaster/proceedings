'use client';

import { motion } from 'framer-motion';

const checklist = [
  { time: '12:00', task: '랜딩페이지 섹션 1~3 커밋 · Vercel Preview 확인', owner: '주연' },
  { time: '17:00', task: '섹션 4~6 + Supabase 스키마 완성 · 응답 폼 동작 테스트', owner: '주연' },
  { time: '19:00', task: '데모 영상 녹화 완료 · 선화에게 MP4 원본 전송', owner: '주연 → 선화' },
  { time: '20:00', task: '김제연 Vercel 권한 · GitHub Collaborator · 긴급 대응 플레이북', owner: '주연 → 제연' },
  { time: '20:30', task: '재영 데모 환경 샌드박스 URL 전달 · 미팅용 설명서', owner: '주연 → 재영' },
  { time: '21:00', task: '동주 QA 계정 3개 발급 · 노션 QA 이슈 보드 템플릿 세팅', owner: '주연 → 동주' },
  { time: '21:30', task: '노션 일일 대시보드 URL 공유 · 임원진 접근 권한 부여', owner: '주연' },
  { time: '22:00', task: '슬랙 Critical 알림 채널 생성 · 멘션 규칙 문서화', owner: '주연' },
  { time: '22:30', task: '광고 UTM 태그 표준 · 선화에게 링크 3종 전달', owner: '주연 → 선화' },
  { time: '23:00', task: '출발 전 최종 체크 · 노트북·어댑터·백업 접근키 확인', owner: '주연' },
];

export default function ChecklistD1Slide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-rose-900/40 border border-rose-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-rose-300 text-sm font-medium tracking-wider">D-1 CHECKLIST · 04.15 23:00까지</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-1">출발 전 체크리스트</h2>
          <p className="text-slate-500 text-sm">주연 출발 전 반드시 완료할 10항목</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="bg-slate-900/60 rounded-2xl p-5 border border-rose-900/40">
          <div className="space-y-2">
            {checklist.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.06 }} className="flex items-center gap-3 bg-slate-950/50 rounded-lg px-3 py-2 border border-slate-800/40 hover:border-rose-800/50 transition-colors">
                <div className="shrink-0 w-5 h-5 rounded border-2 border-rose-500/60 bg-slate-950 hover:bg-rose-900/30 cursor-pointer" />
                <div className="font-mono text-xs text-rose-300 font-bold w-12 shrink-0">{c.time}</div>
                <div className="flex-1 text-xs text-slate-200">{c.task}</div>
                <div className="text-[10px] text-slate-500 shrink-0">{c.owner}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
