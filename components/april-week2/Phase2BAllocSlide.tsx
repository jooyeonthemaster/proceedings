'use client';

import { motion } from 'framer-motion';

type Slice = { label: string; pct: number; color: string };
type Person = {
  name: string;
  role: string;
  initial: string;
  slices: Slice[];
};

const COLORS = {
  accent: 'bg-amber-500',
  classroom: 'bg-emerald-500',
  photobooth: 'bg-violet-500',
  outsource: 'bg-sky-500',
  online: 'bg-cyan-500',
  etc: 'bg-slate-500',
};

const people: Person[] = [
  {
    name: '김주연',
    role: 'CTO',
    initial: '주연',
    slices: [
      { label: '악센트 유지보수', pct: 15, color: COLORS.accent },
      { label: '학원 AI', pct: 75, color: COLORS.classroom },
      { label: '기타', pct: 10, color: COLORS.etc },
    ],
  },
  {
    name: '김제연',
    role: '개발',
    initial: '제연',
    slices: [
      { label: '학원 AI', pct: 50, color: COLORS.classroom },
      { label: '포토부스', pct: 30, color: COLORS.photobooth },
      { label: '외주', pct: 20, color: COLORS.outsource },
    ],
  },
  {
    name: '유재영',
    role: 'CEO/영업',
    initial: '재영',
    slices: [
      { label: '악센트', pct: 10, color: COLORS.accent },
      { label: '학원 영업', pct: 40, color: COLORS.classroom },
      { label: '포토부스', pct: 30, color: COLORS.photobooth },
      { label: '외주', pct: 20, color: COLORS.outsource },
    ],
  },
  {
    name: '김주희',
    role: '영업',
    initial: '주희',
    slices: [
      { label: '학원 영업', pct: 20, color: COLORS.classroom },
      { label: '포토부스', pct: 70, color: COLORS.photobooth },
      { label: '외주', pct: 10, color: COLORS.outsource },
    ],
  },
  {
    name: '유선화',
    role: 'CMO',
    initial: '선화',
    slices: [
      { label: '악센트', pct: 40, color: COLORS.accent },
      { label: '학원 AI', pct: 40, color: COLORS.classroom },
      { label: '포토부스', pct: 10, color: COLORS.photobooth },
      { label: '온라인', pct: 10, color: COLORS.online },
    ],
  },
  {
    name: '김정연',
    role: '마케팅',
    initial: '정연',
    slices: [
      { label: '악센트', pct: 70, color: COLORS.accent },
      { label: '학원 커뮤니티', pct: 20, color: COLORS.classroom },
      { label: '포토부스', pct: 10, color: COLORS.photobooth },
    ],
  },
  {
    name: '이동주',
    role: '재무/운영',
    initial: '동주',
    slices: [
      { label: '악센트 운영', pct: 30, color: COLORS.accent },
      { label: '학원 AI', pct: 20, color: COLORS.classroom },
      { label: '포토부스', pct: 30, color: COLORS.photobooth },
      { label: '외주', pct: 20, color: COLORS.outsource },
    ],
  },
  {
    name: '류다혜 + 조수빈',
    role: '악센트 와우',
    initial: '와우',
    slices: [
      { label: '악센트 와우', pct: 100, color: COLORS.accent },
    ],
  },
];

export default function Phase2BAllocSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(49,46,129,0.25)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,27,75,0.4)_0%,transparent_60%)]" />

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center bg-indigo-900/40 border border-indigo-700/50 rounded-full px-5 py-1.5 mb-4">
            <span className="text-indigo-300 text-xs font-medium tracking-[0.2em]">PHASE 2-B · 밸런스 모드</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
            Phase 2-B: 8~12월 (악센트 재계약 시) — 현행 유지 + 학원 AI 비중 증가
          </h2>
          <p className="text-slate-500 text-sm">8명 체제 유지 · Phase 1 대비 학원 AI 투입률 상향</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="bg-indigo-950/40 border border-indigo-700/50 rounded-2xl p-4 mb-4"
        >
          <div className="flex items-start gap-3">
            <div className="text-indigo-400 text-xs font-bold tracking-wider mt-1 shrink-0">조건</div>
            <p className="text-slate-200 text-sm leading-relaxed">
              7월 말 판단 기준 <span className="font-mono text-indigo-300 font-bold">2/3 이상 NO</span> → 악센트 재계약, 밸런스 유지
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {people.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 + i * 0.05, duration: 0.5 }}
              className="bg-slate-900/70 rounded-xl p-3.5 border border-indigo-800/40"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-900/40 text-indigo-300 flex items-center justify-center font-bold text-[10px] border border-indigo-700/40">
                  {p.initial}
                </div>
                <div>
                  <div className="text-slate-100 text-[13px] font-bold leading-tight">{p.name}</div>
                  <div className="text-indigo-400/70 text-[10px]">{p.role}</div>
                </div>
              </div>

              {/* Stacked bar */}
              <div className="h-2.5 w-full rounded-full overflow-hidden flex bg-slate-950/60 mb-2.5 border border-slate-800/50">
                {p.slices.map((s, j) => (
                  <div
                    key={j}
                    className={`${s.color} h-full`}
                    style={{ width: `${s.pct}%` }}
                  />
                ))}
              </div>

              <div className="space-y-1">
                {p.slices.map((s, j) => (
                  <div key={j} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className={`w-1.5 h-1.5 rounded-sm ${s.color} shrink-0`} />
                      <div className="text-slate-300 text-[10.5px] leading-tight truncate">{s.label}</div>
                    </div>
                    <div className="text-slate-100 text-[10.5px] font-mono font-bold tabular-nums shrink-0">{s.pct}%</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[10.5px]"
        >
          {[
            { label: '학원 AI', color: COLORS.classroom },
            { label: '악센트', color: COLORS.accent },
            { label: '포토부스', color: COLORS.photobooth },
            { label: '외주', color: COLORS.outsource },
            { label: '온라인', color: COLORS.online },
            { label: '기타', color: COLORS.etc },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-sm ${l.color}`} />
              <span className="text-slate-400">{l.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
