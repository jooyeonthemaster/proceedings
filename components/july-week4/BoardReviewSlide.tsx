'use client';

import { motion } from 'framer-motion';

const items = [
  { no: 1, text: '세미나 추가 홍보 + 광고 A/B (유머 vs 전문성)', who: '유선화', due: '즉시', pri: '최우선', priColor: 'bg-rose-900/60 text-rose-300 border-rose-700/50' },
  { no: 2, text: '블로그 자동 발행 + 지역 타겟 네이버 SEO', who: '유선화', due: '상시', pri: '최우선', priColor: 'bg-rose-900/60 text-rose-300 border-rose-700/50' },
  { no: 3, text: '학교별 사설 모의고사 무료 배포 (포스코고 파이프라인)', who: '유재영·유선화', due: '7/31', pri: '높음', priColor: 'bg-amber-900/60 text-amber-300 border-amber-700/50' },
  { no: 4, text: '강사 페르소나 숏폼 — Seedance 얼굴변형 (여/남)', who: '유선화·유재영', due: '상시', pri: '높음', priColor: 'bg-amber-900/60 text-amber-300 border-amber-700/50' },
  { no: 5, text: '소윤쌤 벤치 — 동형 모의고사 세미나 카피 벤치마킹', who: '유선화', due: '7/22', pri: '보통', priColor: 'bg-slate-800/60 text-slate-400 border-slate-700/50' },
  { no: 6, text: '인스타 팔로우 게이트 자동화', who: '이동주·유재영', due: '7/31', pri: '높음', priColor: 'bg-amber-900/60 text-amber-300 border-amber-700/50' },
  { no: 7, text: '기사 배포 / 보도자료', who: '유재영', due: '상시', pri: '보통', priColor: 'bg-slate-800/60 text-slate-400 border-slate-700/50' },
  { no: 8, text: '인스타그램 활성화', who: '유선화', due: '상시', pri: '보통', priColor: 'bg-slate-800/60 text-slate-400 border-slate-700/50' },
  { no: 9, text: '네이버 검색 최적화', who: '유선화', due: '상시', pri: '높음', priColor: 'bg-amber-900/60 text-amber-300 border-amber-700/50' },
  { no: 10, text: '구글 SEO 최적화', who: '유선화', due: '상시', pri: '보통', priColor: 'bg-slate-800/60 text-slate-400 border-slate-700/50' },
  { no: 11, text: '당근 광고', who: '유선화', due: '7/22', pri: '보통', priColor: 'bg-slate-800/60 text-slate-400 border-slate-700/50' },
  { no: 12, text: '오픈채팅방 홍보', who: '유재영', due: '상시', pri: '높음', priColor: 'bg-amber-900/60 text-amber-300 border-amber-700/50' },
];

export default function BoardReviewSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-amber-900/40 border border-amber-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-amber-300 text-sm font-medium tracking-wider">실행 점검 ① · 7/15 보드 12건</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">보드 12건 — 오늘 전수 점검</h2>
          <p className="text-slate-500">항목별로 이 자리에서 <span className="text-amber-300">진행 / 착수 전 / 보류·드랍</span>을 판정하고, 이번 주 집중 3건을 고른다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {items.map((it, i) => (
            <motion.div key={it.no} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05 }} className="bg-slate-900/60 rounded-xl px-4 py-3 border border-slate-700/50 flex items-center gap-3">
              <div className="w-7 h-7 shrink-0 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-mono font-bold text-slate-400">{it.no}</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-slate-200 leading-snug">{it.text}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">👤 {it.who} · ⏰ {it.due}</div>
              </div>
              <span className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full border ${it.priColor}`}>{it.pri}</span>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} className="text-center text-xs text-slate-500 mt-5">
          7/23 기준 대부분 착수 전 — 12건을 다 들고 가지 말고, 오너가 정해지면 <span className="text-amber-300">이번 주 3건</span>으로 줄여서 확실히 끝낸다
        </motion.p>
      </div>
    </div>
  );
}
