'use client';

import { motion } from 'framer-motion';

const diffs = [
  {
    id: '01',
    topic: '통합 랜딩페이지',
    before: { label: '4/13 임원진 회의', text: '광고·영업·무료체험 각각 별개 채널. 데이터 수집 경로 미정.' },
    after: { label: '4/15 업데이트', text: 'Next.js 랜딩 1개 = 모든 채널이 꽂히는 단일 응답 수집기. Supabase + 노션 미러링.' },
    color: 'border-indigo-700/50',
  },
  {
    id: '02',
    topic: '병렬화',
    before: { label: '4/13 — 순차 진행', text: '4/20 광고 D-Day. 계정 → 콘텐츠 → 광고 순차.' },
    after: { label: '4/15 — 병렬 실행', text: '4/22 광고 D-Day (2일 버퍼). 5개 트랙 동시 진행: 계정·콘텐츠1·콘텐츠2·랜딩싱크·광고세팅.' },
    color: 'border-fuchsia-700/50',
  },
  {
    id: '03',
    topic: '엔드리스 QA',
    before: { label: '4/13 — 이벤트성', text: '1차(4/18) + 중간(4/25) + 최종(4/30). 3이벤트.' },
    after: { label: '4/15 — 매일 반복', text: '매일 QA 사이클. 이탈리아 원격 푸시 즉시 검증. Critical 실시간 에스컬레이션.' },
    color: 'border-cyan-700/50',
  },
];

export default function DiffFrom413Slide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-slate-800/60 border border-slate-700/60 rounded-full px-5 py-1.5 mb-5">
            <span className="text-slate-300 text-sm font-medium tracking-wider">48H DIFF · 04.13 → 04.15</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">48시간 차이점</h2>
          <p className="text-slate-500 text-sm">프레임은 유효. 실행 정밀도 3단계 상승.</p>
        </motion.div>

        <div className="space-y-4">
          {diffs.map((d, i) => (
            <motion.div key={d.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }} className={`bg-slate-900/60 rounded-2xl border ${d.color} overflow-hidden`}>
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-0">
                <div className="bg-slate-950/60 px-5 py-4 border-r border-slate-800/60 flex flex-col items-center justify-center min-w-[160px]">
                  <div className="text-xs font-mono text-slate-500 mb-1">{d.id}</div>
                  <div className="text-base font-bold text-slate-200 text-center">{d.topic}</div>
                </div>
                <div className="px-5 py-4 border-r border-slate-800/60">
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">BEFORE</div>
                  <div className="text-xs text-slate-500 mb-1.5">{d.before.label}</div>
                  <div className="text-sm text-slate-400 leading-relaxed">{d.before.text}</div>
                </div>
                <div className="px-5 py-4 bg-slate-950/30">
                  <div className="text-[10px] uppercase tracking-widest text-rose-400/80 mb-1">AFTER</div>
                  <div className="text-xs text-rose-300/80 mb-1.5">{d.after.label}</div>
                  <div className="text-sm text-slate-200 leading-relaxed">{d.after.text}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
