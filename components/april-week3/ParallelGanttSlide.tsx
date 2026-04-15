'use client';

import { motion } from 'framer-motion';

const dates = ['4/15', '4/16', '4/17', '4/18', '4/19', '4/20', '4/21', '4/22'];

type Cell = { label?: string; tone?: 'c1' | 'c2' | 'c3' | 'c4' | 'c5' } | null;

const tracks: { track: string; owner: string; cells: Cell[]; tone: string }[] = [
  { track: '인스타 계정', owner: '선화', tone: 'border-fuchsia-700/50', cells: [
    { label: '이름 A/B', tone: 'c1' }, { label: '계정 개설', tone: 'c1' }, { label: '프로필·하이라이트', tone: 'c1' }, { label: '티저 1건', tone: 'c1' }, null, null, null, null,
  ] },
  { track: '콘텐츠 1안', owner: '선화+정연', tone: 'border-violet-700/50', cells: [
    { label: '스토리보드', tone: 'c2' }, { label: '소스', tone: 'c2' }, { label: '편집 1차', tone: 'c2' }, { label: '편집 2차', tone: 'c2' }, { label: '최종', tone: 'c2' }, { label: '업로드', tone: 'c2' }, null, null,
  ] },
  { track: '콘텐츠 2안', owner: '선화+정연', tone: 'border-rose-700/50', cells: [
    null, { label: '스토리보드', tone: 'c3' }, { label: '소스', tone: 'c3' }, { label: '편집 1차', tone: 'c3' }, { label: '편집 2차', tone: 'c3' }, { label: '최종', tone: 'c3' }, { label: '업로드', tone: 'c3' }, null,
  ] },
  { track: '랜딩 싱크', owner: '선화+주연', tone: 'border-cyan-700/50', cells: [
    null, { label: '링크 수령', tone: 'c4' }, { label: 'UTM', tone: 'c4' }, { label: '픽셀', tone: 'c4' }, { label: '테스트', tone: 'c4' }, { label: 'QA', tone: 'c4' }, { label: 'QA', tone: 'c4' }, { label: '광고 ON', tone: 'c4' },
  ] },
  { track: '광고 세팅', owner: '선화', tone: 'border-amber-700/50', cells: [
    null, null, { label: '광고 계정', tone: 'c5' }, { label: '크리에이티브', tone: 'c5' }, { label: '타겟팅', tone: 'c5' }, { label: '예산', tone: 'c5' }, { label: '리허설', tone: 'c5' }, { label: '집행 시작', tone: 'c5' },
  ] },
];

const toneBg: Record<string, string> = {
  c1: 'bg-fuchsia-900/50 text-fuchsia-100 border-fuchsia-700/50',
  c2: 'bg-violet-900/50 text-violet-100 border-violet-700/50',
  c3: 'bg-rose-900/50 text-rose-100 border-rose-700/50',
  c4: 'bg-cyan-900/50 text-cyan-100 border-cyan-700/50',
  c5: 'bg-amber-900/50 text-amber-100 border-amber-700/50',
};

export default function ParallelGanttSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-7xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-fuchsia-900/40 border border-fuchsia-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-fuchsia-300 text-sm font-medium tracking-wider">PARALLEL GANTT · 5 TRACKS × 8 DAYS</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-200 mb-1">병렬 작업 분해 간트</h2>
          <p className="text-slate-500 text-sm">4/15 → 4/22 · 5개 트랙 동시 진행</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="bg-slate-900/60 rounded-2xl border border-slate-800/60 overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-950/80">
                <th className="px-3 py-2 text-left font-medium text-slate-400 border-b border-slate-800/60 w-36">트랙 / 담당</th>
                {dates.map((d) => (<th key={d} className="px-2 py-2 text-center font-mono text-slate-400 border-b border-slate-800/60">{d}</th>))}
              </tr>
            </thead>
            <tbody>
              {tracks.map((t) => (
                <tr key={t.track} className={`border-t border-slate-800/40`}>
                  <td className={`px-3 py-2 border-r border-slate-800/60 ${t.tone}`}>
                    <div className="text-slate-100 font-semibold">{t.track}</div>
                    <div className="text-[10px] text-slate-500">{t.owner}</div>
                  </td>
                  {t.cells.map((c, i) => (
                    <td key={i} className="px-1 py-1.5">
                      {c ? (
                        <div className={`rounded px-1.5 py-1 text-[10px] text-center border ${toneBg[c.tone!]}`}>{c.label}</div>
                      ) : (
                        <div className="h-6 border-t border-slate-800/30" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-4 text-center text-xs text-slate-500">
          <span className="text-fuchsia-400">핵심:</span> 순차였다면 4/29 이후에야 광고 ON. 병렬화로 4/22 달성 → 약 7일 스케줄 단축.
        </motion.div>
      </div>
    </div>
  );
}
