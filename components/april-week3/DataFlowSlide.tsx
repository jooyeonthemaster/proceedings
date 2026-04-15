'use client';

import { motion } from 'framer-motion';

const nodes = [
  { id: 'sales', label: '영업 (재영)', sub: '대흥 10곳 · 기능점수 · 인사이트', color: 'border-emerald-700/50 text-emerald-300', pos: 'md:col-start-1' },
  { id: 'landing', label: '랜딩페이지', sub: '7필드 응답 · A/B 분기 · UTM', color: 'border-cyan-700/50 text-cyan-300', pos: 'md:col-start-2' },
  { id: 'marketing', label: '마케팅 (선화)', sub: '광고 CTR · 댓글·DM · 피드백', color: 'border-fuchsia-700/50 text-fuchsia-300', pos: 'md:col-start-3' },
  { id: 'notion', label: '노션 통합 DB', sub: '실시간 단일 저장소', color: 'border-amber-700/50 text-amber-300', pos: 'md:col-start-2' },
  { id: 'qa', label: 'QA (동주)', sub: '엔드리스 QA · Critical 태그', color: 'border-blue-700/50 text-blue-300', pos: 'md:col-start-1' },
  { id: 'dev', label: '개발 (주연 · 이탈리아)', sub: '푸시 · 머지 · 배포', color: 'border-indigo-700/50 text-indigo-300', pos: 'md:col-start-3' },
  { id: 'deploy', label: '5월 배포', sub: '실사용자 MVP', color: 'border-rose-700/50 text-rose-300', pos: 'md:col-start-2' },
];

export default function DataFlowSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-slate-800/60 border border-slate-700/60 rounded-full px-5 py-1.5 mb-5">
            <span className="text-slate-300 text-sm font-medium tracking-wider">CROSS-FUNCTIONAL DATA FLOW</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">부서별 데이터 흐름도</h2>
          <p className="text-slate-500 text-sm">영업·랜딩·마케팅 → 노션 → QA → 개발 → 배포 루프</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {nodes.map((n, i) => (
            <motion.div key={n.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }} className={`bg-slate-900/60 rounded-xl p-4 border ${n.color.split(' ')[0]} ${n.pos} text-center`}>
              <div className={`text-sm font-bold ${n.color.split(' ')[1]} mb-1`}>{n.label}</div>
              <div className="text-[10px] text-slate-400 leading-snug">{n.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }} className="mt-6 bg-slate-900/60 rounded-xl p-4 border border-slate-800/60 text-center">
          <div className="text-xs text-slate-400">
            <span className="text-emerald-400">영업</span> + <span className="text-cyan-400">랜딩</span> + <span className="text-fuchsia-400">마케팅</span>
            <span className="text-slate-600 mx-2">→</span>
            <span className="text-amber-400">노션 DB</span>
            <span className="text-slate-600 mx-2">→</span>
            <span className="text-blue-400">QA</span>
            <span className="text-slate-600 mx-2">→</span>
            <span className="text-indigo-400">개발</span>
            <span className="text-slate-600 mx-2">→</span>
            <span className="text-rose-400">5월 배포</span>
            <span className="text-slate-600 mx-2">↺</span>
            <span className="text-slate-300">피드백 다시 영업·마케팅으로</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
