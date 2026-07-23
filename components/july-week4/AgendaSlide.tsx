'use client';

import { motion } from 'framer-motion';

const agenda = [
  {
    no: '01',
    title: '현주소 진단',
    desc: '스모트 마케팅 실행 공백 — 7/7 우려의 현실화, 그리고 "가장 한가한 지금"이라는 문제',
    color: 'border-rose-700/50',
    accent: 'text-rose-300',
  },
  {
    no: '02',
    title: '실행 점검',
    desc: '7/15 우선순위 보드 12건 전수 점검 + 세미나 D-3 최종 체크',
    color: 'border-amber-700/50',
    accent: 'text-amber-300',
  },
  {
    no: '03',
    title: '체계 제안',
    desc: '전담 오너 지정 · 데일리 회의 복원 · 스모트 기능 이해도 확보 — 3가지 제안',
    color: 'border-cyan-700/50',
    accent: 'text-cyan-300',
  },
  {
    no: '04',
    title: '결정 & 액션',
    desc: '오늘 자리에서 정한다 — 오너·데일리 시간·이번 주 실행 3건',
    color: 'border-emerald-700/50',
    accent: 'text-emerald-300',
  },
];

export default function AgendaSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-10">
          <div className="inline-flex items-center bg-rose-900/40 border border-rose-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-rose-300 text-sm font-medium tracking-wider">AGENDA · 7/23</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">오늘 다룰 것</h2>
          <p className="text-slate-500">진단 → 점검 → 제안 → 결정. 결론 없이 끝내지 않는다.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {agenda.map((a, i) => (
            <motion.div key={a.no} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.12 }} className={`bg-slate-900/60 rounded-2xl p-6 border ${a.color}`}>
              <div className={`text-sm font-mono font-bold mb-2 ${a.accent}`}>{a.no}</div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{a.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
