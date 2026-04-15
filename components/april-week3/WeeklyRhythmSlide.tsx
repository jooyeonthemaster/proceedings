'use client';

import { motion } from 'framer-motion';

const days = ['월', '화', '수', '목', '금', '토', '일'];

const rows = [
  { role: '재영 (CEO)', color: 'text-emerald-300', cells: ['미팅 2곳', '미팅 + 동주 싱크', '광고 응답 컨택', '미팅 2곳', '미팅 + 동주 싱크', '주간 리뷰', '휴식'] },
  { role: '선화 (CMO)', color: 'text-fuchsia-300', cells: ['콘텐츠 제작', '광고 모니터', '광고 최적화', '콘텐츠 제작', '주간 CTR 리포트', '다음주 기획', '휴식'] },
  { role: '주연 (CTO)', color: 'text-cyan-300', cells: ['푸시 · 머지', '푸시 · 머지', '랜딩 싱크', '푸시 · 머지', '주간 코드리뷰', '핫픽스', '로드맵 정리'] },
  { role: '동주 (QA)', color: 'text-blue-300', cells: ['QA 사이클', 'QA + 재영 싱크', 'QA 사이클', 'QA 사이클', 'QA + 재영 싱크', '주간 리포트', '휴식'] },
];

export default function WeeklyRhythmSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-7xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-slate-800/60 border border-slate-700/60 rounded-full px-5 py-1.5 mb-4">
            <span className="text-slate-300 text-sm font-medium tracking-wider">WEEKLY RHYTHM · 4 ROLES × 7 DAYS</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-200 mb-1">주간·일일 리듬</h2>
          <p className="text-slate-500 text-sm">이탈리아 원격 기간 표준 루틴</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="bg-slate-900/60 rounded-2xl border border-slate-800/60 overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-950/80">
                <th className="px-3 py-2 text-left font-medium text-slate-400 border-b border-slate-800/60 w-32">담당</th>
                {days.map((d) => (<th key={d} className="px-2 py-2 text-center font-mono text-slate-400 border-b border-slate-800/60">{d}</th>))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.role} className="border-t border-slate-800/40">
                  <td className={`px-3 py-2 font-semibold ${r.color} border-r border-slate-800/60`}>{r.role}</td>
                  {r.cells.map((c, i) => (
                    <td key={i} className="px-2 py-2 text-center">
                      <div className="bg-slate-950/50 rounded-md py-1.5 px-1 text-[10px] text-slate-300 border border-slate-800/40 min-h-[36px] flex items-center justify-center">
                        {c}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}
