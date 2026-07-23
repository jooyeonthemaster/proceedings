'use client';

import { motion } from 'framer-motion';

const phases = [
  {
    period: '7월 — 지금',
    label: '골든타임',
    desc: '방학 시즌, 연중 가장 한가한 구간. 그런데도 마케팅이 멈춰 있다는 게 진짜 경고 신호.',
    color: 'border-emerald-600/50',
    accent: 'text-emerald-300',
    bar: 'from-emerald-600 to-emerald-800',
    tag: '지금',
  },
  {
    period: '8월 중하순',
    label: '개학',
    desc: '학교·학원 시즌 재가동. 외주·운영 업무가 다시 몰리면서 가용 시간이 급격히 줄어든다.',
    color: 'border-amber-600/50',
    accent: 'text-amber-300',
    bar: 'from-amber-600 to-orange-800',
    tag: 'D-30±',
  },
  {
    period: '9월~',
    label: '모평·내신 시즌',
    desc: '본업 풀가동. 이때 스모트를 새로 밀어붙이는 건 사실상 불가능 — 지금 만든 관성으로만 굴러간다.',
    color: 'border-rose-600/50',
    accent: 'text-rose-300',
    bar: 'from-rose-600 to-rose-900',
    tag: '실기 구간',
  },
];

export default function GoldenTimeSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <div className="inline-flex items-center bg-rose-900/40 border border-rose-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-rose-300 text-sm font-medium tracking-wider">진단 ② · 타이밍</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">가장 한가한 지금이 이 상태라는 것</h2>
          <p className="text-slate-500">개학하면 시간은 더 없다 — 남은 골든타임은 약 4주</p>
        </motion.div>

        <div className="space-y-4 mb-5">
          {phases.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.15 }} className={`bg-slate-900/60 rounded-2xl p-5 border ${p.color} flex items-start gap-5`}>
              <div className={`shrink-0 w-28 md:w-36`}>
                <div className={`text-xs font-mono uppercase tracking-wider text-slate-500 mb-1`}>{p.tag}</div>
                <div className={`text-base md:text-lg font-bold ${p.accent}`}>{p.period}</div>
                <div className={`h-1.5 rounded-full bg-gradient-to-r ${p.bar} mt-2`} />
              </div>
              <div>
                <div className="text-slate-100 font-bold mb-1">{p.label}</div>
                <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} className="bg-emerald-950/40 rounded-2xl p-5 border border-emerald-600/40 text-center">
          <p className="text-slate-200 leading-relaxed">
            &ldquo;바빠서 못 했다&rdquo;가 성립하지 않는 유일한 달이 7월이다.
            <span className="text-emerald-300 font-bold"> 지금 굴러가는 구조를 못 만들면, 개학 후엔 기회 자체가 없다.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
