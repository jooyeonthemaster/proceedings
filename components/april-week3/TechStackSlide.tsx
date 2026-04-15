'use client';

import { motion } from 'framer-motion';

const stack = [
  { name: 'Next.js 14', role: '프론트 · App Router · SSR 랜딩', accent: 'text-slate-200' },
  { name: 'Tailwind CSS', role: '스타일 · 반응형', accent: 'text-cyan-300' },
  { name: 'Supabase', role: '응답 DB · RLS 인증', accent: 'text-emerald-300' },
  { name: 'Vercel', role: '호스팅 · Preview 배포', accent: 'text-slate-200' },
  { name: 'Notion API', role: '실시간 임원진 미러링', accent: 'text-amber-300' },
];

const utm = [
  { code: '?utm_source=instagram&utm_campaign=trial1', desc: '콘텐츠 1안 · 무료체험' },
  { code: '?utm_source=instagram&utm_campaign=reserve2', desc: '콘텐츠 2안 · 사전예약' },
  { code: '?utm_source=sales&utm_id=<meetingId>', desc: '재영 미팅 후 전송' },
];

export default function TechStackSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-indigo-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-indigo-900/40 border border-indigo-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-indigo-300 text-sm font-medium tracking-wider">TECH STACK · UTM · SYNC</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">기술 스택 & 데이터 미러링</h2>
          <p className="text-slate-500 text-sm">Next.js + Supabase + Vercel · 노션 실시간 임베드</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-5">
          {stack.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }} className="bg-slate-900/60 rounded-xl p-3 border border-slate-800/60">
              <div className={`text-sm font-bold ${s.accent} mb-1`}>{s.name}</div>
              <div className="text-[10px] text-slate-500 leading-snug">{s.role}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="bg-slate-900/60 rounded-2xl p-5 border border-indigo-900/40">
            <div className="text-xs uppercase tracking-widest text-indigo-400 mb-3">UTM 태그 구조</div>
            <div className="space-y-2">
              {utm.map((u, i) => (
                <div key={i} className="bg-slate-950/60 rounded-lg p-3 border border-slate-800/60">
                  <div className="text-[10px] font-mono text-indigo-300/80 break-all mb-1">{u.code}</div>
                  <div className="text-[11px] text-slate-400">{u.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="bg-slate-900/60 rounded-2xl p-5 border border-amber-900/40">
            <div className="text-xs uppercase tracking-widest text-amber-400 mb-3">데이터 흐름</div>
            <div className="space-y-2 text-sm">
              {[
                ['응답 폼 제출', 'Supabase INSERT', 'text-cyan-300'],
                ['Supabase Webhook', 'Vercel Edge Func', 'text-emerald-300'],
                ['노션 데이터베이스 API', 'row 자동 추가', 'text-amber-300'],
                ['임원진 노션 대시보드', '1분 내 반영', 'text-rose-300'],
              ].map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + i * 0.1 }} className="flex items-center gap-3">
                  <div className={`text-xs font-mono ${r[2]} shrink-0 w-8`}>0{i + 1}</div>
                  <div className="flex-1 text-slate-200 text-xs">{r[0]}</div>
                  <div className="text-slate-500 text-[10px]">→</div>
                  <div className={`text-xs ${r[2]}`}>{r[1]}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
