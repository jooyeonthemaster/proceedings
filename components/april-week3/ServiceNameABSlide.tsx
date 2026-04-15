'use client';

import { motion } from 'framer-motion';

const candidates = [
  { name: '에듀플로우', tone: '전문·안정', target: '원장 40대+', ctrGoal: '1.8%+', risk: '경쟁사 겹침 위험', accent: 'text-indigo-300', border: 'border-indigo-700/50' },
  { name: '틴북', tone: '친근·젊음', target: '원장 30대', ctrGoal: '2.2%+', risk: '브랜드 무게감 부족', accent: 'text-fuchsia-300', border: 'border-fuchsia-700/50' },
  { name: '원장AI', tone: '직관·기능형', target: '전 연령 원장', ctrGoal: '2.5%+', risk: 'AI 편견 유발', accent: 'text-amber-300', border: 'border-amber-700/50' },
  { name: '시험러', tone: '캐주얼·학생형', target: '학생 보조 포지션', ctrGoal: '1.5%+', risk: '원장 페르소나와 불일치', accent: 'text-emerald-300', border: 'border-emerald-700/50' },
  { name: 'AI튜터', tone: '교육·신뢰', target: '학부모 동시 소구', ctrGoal: '2.0%+', risk: '기능 범위 오해', accent: 'text-cyan-300', border: 'border-cyan-700/50' },
];

export default function ServiceNameABSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-fuchsia-900/40 border border-fuchsia-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-fuchsia-300 text-sm font-medium tracking-wider">#2 SERVICE NAME A/B</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">#2 서비스 이름 A/B 설계</h2>
          <p className="text-slate-500 text-sm">5개 후보 × 인스타 광고 A/B × CTR 비교</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-5">
          {candidates.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }} className={`bg-slate-900/60 rounded-xl p-4 border ${c.border} flex flex-col`}>
              <div className={`text-xl font-bold ${c.accent} mb-3`}>{c.name}</div>
              <div className="space-y-2 text-xs flex-1">
                <div><span className="text-slate-500">톤</span> <span className="text-slate-200 ml-1">{c.tone}</span></div>
                <div><span className="text-slate-500">타겟</span> <span className="text-slate-200 ml-1">{c.target}</span></div>
                <div><span className="text-slate-500">CTR 목표</span> <span className={`${c.accent} ml-1 font-mono font-semibold`}>{c.ctrGoal}</span></div>
                <div className="pt-2 border-t border-slate-800/60"><span className="text-red-400/80 text-[10px] uppercase tracking-wider">Risk</span> <div className="text-slate-400 text-[11px] leading-snug mt-1">{c.risk}</div></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800/60">
            <div className="text-[10px] uppercase tracking-widest text-fuchsia-400 mb-1">노출 방식</div>
            <div className="text-sm text-slate-200">인스타 피드 광고 5안 동시 집행 · 일 2~3만×8일</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800/60">
            <div className="text-[10px] uppercase tracking-widest text-fuchsia-400 mb-1">승자 기준</div>
            <div className="text-sm text-slate-200">최고 CTR 후보 ≥ 2위의 <span className="font-mono font-bold">1.5배</span> 격차 시 확정</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800/60">
            <div className="text-[10px] uppercase tracking-widest text-fuchsia-400 mb-1">4/25 중간점검</div>
            <div className="text-sm text-slate-200">격차 부족 시 후보 2~3개로 압축 후 2차 라운드</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
