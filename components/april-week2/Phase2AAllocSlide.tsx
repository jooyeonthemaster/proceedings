'use client';

import { motion } from 'framer-motion';

type Slice = { label: string; pct: number; color: string };
type Person = {
  name: string;
  role: string;
  initial: string;
  slices: Slice[];
  note?: string;
};

const people: Person[] = [
  {
    name: '김주연',
    role: 'CTO',
    initial: '주연',
    slices: [
      { label: '학원 AI', pct: 85, color: 'bg-emerald-500' },
      { label: '온라인 유지보수', pct: 10, color: 'bg-sky-500' },
      { label: '외주', pct: 5, color: 'bg-amber-500' },
    ],
  },
  {
    name: '김제연',
    role: '개발',
    initial: '제연',
    slices: [
      { label: '학원 AI', pct: 70, color: 'bg-emerald-500' },
      { label: '포토부스 디벨롭', pct: 20, color: 'bg-violet-500' },
      { label: '외주', pct: 20, color: 'bg-amber-500' },
    ],
    note: '원문 합계 110% (원본 표기 그대로)',
  },
  {
    name: '유재영',
    role: 'CEO/영업',
    initial: '재영',
    slices: [
      { label: '학원 영업', pct: 70, color: 'bg-emerald-500' },
      { label: '포토부스', pct: 15, color: 'bg-violet-500' },
      { label: '외주', pct: 15, color: 'bg-amber-500' },
    ],
  },
  {
    name: '유선화',
    role: 'CMO',
    initial: '선화',
    slices: [
      { label: '학원 AI 브랜딩·마케팅 풀타임', pct: 80, color: 'bg-emerald-500' },
      { label: '온라인', pct: 20, color: 'bg-sky-500' },
    ],
  },
  {
    name: '이동주',
    role: '재무/운영',
    initial: '동주',
    slices: [
      { label: '재무', pct: 30, color: 'bg-rose-500' },
      { label: '학원 AI QA·운영', pct: 40, color: 'bg-emerald-500' },
      { label: '포토부스 현장', pct: 20, color: 'bg-violet-500' },
      { label: '외주', pct: 10, color: 'bg-amber-500' },
    ],
  },
];

const released = ['김정연', '김주희', '류다혜', '조수빈', '알바'];

export default function Phase2AAllocSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,78,59,0.22)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,95,70,0.12)_0%,transparent_60%)]" />

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/50 rounded-full px-5 py-1.5 mb-4">
            <span className="text-emerald-300 text-xs font-medium tracking-[0.2em]">PHASE 2-A · 학원 AI 올인 모드</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
            Phase 2-A: 8~12월 (악센트 종료 시) — 5인 체제
          </h2>
          <p className="text-slate-500 text-sm">악센트 종료 후 학원 AI 올인 · 고정비 4,500 → 3,000만원</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="bg-emerald-950/40 border border-emerald-700/50 rounded-2xl p-4 mb-5"
        >
          <div className="flex items-start gap-3">
            <div className="text-emerald-400 text-xs font-bold tracking-wider mt-1 shrink-0">조건</div>
            <p className="text-slate-200 text-sm leading-relaxed">
              7월 말 판단 기준 <span className="font-mono text-emerald-300 font-bold">2/3 이상 YES</span> → 악센트 종료, 5인 체제 학원 AI 올인
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {people.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
              className="bg-slate-900/70 rounded-xl p-4 border border-emerald-800/40"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-900/40 text-emerald-300 flex items-center justify-center font-bold text-xs border border-emerald-700/40">
                  {p.initial}
                </div>
                <div>
                  <div className="text-slate-100 text-sm font-bold leading-tight">{p.name}</div>
                  <div className="text-emerald-400/70 text-[10px]">{p.role}</div>
                </div>
              </div>

              {/* Stacked bar (normalized for visualization) */}
              <div className="h-3 w-full rounded-full overflow-hidden flex bg-slate-950/60 mb-3 border border-slate-800/50">
                {(() => {
                  const total = p.slices.reduce((s, x) => s + x.pct, 0);
                  return p.slices.map((s, j) => (
                    <div
                      key={j}
                      className={`${s.color} h-full`}
                      style={{ width: `${(s.pct / total) * 100}%` }}
                    />
                  ));
                })()}
              </div>

              <div className="space-y-1.5">
                {p.slices.map((s, j) => (
                  <div key={j} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className={`w-2 h-2 rounded-sm ${s.color} shrink-0`} />
                      <div className="text-slate-300 text-[11px] leading-tight truncate">{s.label}</div>
                    </div>
                    <div className="text-slate-100 text-[11px] font-mono font-bold tabular-nums shrink-0">{s.pct}%</div>
                  </div>
                ))}
              </div>

              {p.note && (
                <div className="mt-2 pt-2 border-t border-slate-800/50 text-[9px] text-amber-400/70 leading-tight">
                  * {p.note}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3"
        >
          <div className="md:col-span-2 bg-slate-900/60 border border-slate-800/60 rounded-xl p-4">
            <div className="text-slate-400 text-[10px] font-bold tracking-wider mb-1.5">NOTE</div>
            <p className="text-slate-300 text-[12px] leading-relaxed">
              이 구조에서 김주희가 빠지면 포토부스 영업을 유재영이 겸해야 한다. 다만 이 시점이면 가을 축제 시즌 물량은 <span className="text-emerald-300 font-semibold">7~8월에 이미 수주 완료</span> 상태일 것이고, 학원 영업이 훨씬 중요해지므로 재영의 학원 영업 비중을 높이는 것이 맞다.
            </p>
          </div>
          <div className="bg-red-950/30 border border-red-900/40 rounded-xl p-4">
            <div className="text-red-400 text-[10px] font-bold tracking-wider mb-1.5">정리되는 인력 — 계약 종료</div>
            <div className="flex flex-wrap gap-1.5">
              {released.map((n) => (
                <span key={n} className="text-[11px] text-slate-400 bg-slate-900/60 border border-slate-800/60 rounded px-2 py-0.5 line-through">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
