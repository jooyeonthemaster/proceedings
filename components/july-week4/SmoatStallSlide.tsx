'use client';

import { motion } from 'framer-motion';

export default function SmoatStallSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <div className="inline-flex items-center bg-rose-900/40 border border-rose-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-rose-300 text-sm font-medium tracking-wider">진단 ① · 실행 공백</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">스모트 마케팅 — 지금 멈춰 있다</h2>
          <p className="text-slate-500">7/7 사전준비 회의에서 걱정했던 그대로 흘러가고 있다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} className="bg-slate-900/60 rounded-2xl p-6 border border-rose-700/50">
            <h3 className="text-lg font-bold text-rose-300 mb-3">⚠️ 7/7에 우려했던 것</h3>
            <ul className="space-y-2.5 text-sm text-slate-300 leading-relaxed">
              <li>→ 일이 몰아치기 시작하면 스모트 영업·마케팅은 <span className="text-rose-300 font-semibold">가장 먼저 밀린다</span></li>
              <li>→ 각자 본업(악센트·사주·외주)에 치이면 &ldquo;나중에&rdquo;가 반복된다</li>
              <li>→ 전담자 없이는 실행이 유지되지 않는다</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-slate-900/60 rounded-2xl p-6 border border-amber-700/50">
            <h3 className="text-lg font-bold text-amber-300 mb-3">📉 7/23 현재 — 그대로 현실이 됨</h3>
            <ul className="space-y-2.5 text-sm text-slate-300 leading-relaxed">
              <li>→ 일이 실제로 몰아치면서 스모트 영업·마케팅 <span className="text-amber-300 font-semibold">정상 진행이 사실상 불가</span></li>
              <li>→ 7/15에 정한 실행안 대부분 착수 전 — 보드는 쌓여만 있다</li>
              <li>→ 세미나 &lsquo;신청 0명&rsquo; 비상등 이후에도 실행이 붙지 않았다</li>
            </ul>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="bg-rose-950/40 rounded-2xl p-5 border border-rose-600/40 text-center">
          <p className="text-slate-200 leading-relaxed">
            예측이 맞았다는 게 중요한 게 아니라, <span className="text-rose-300 font-bold">예측이 맞았는데도 구조를 안 바꿨다</span>는 게 문제다.
            <br className="hidden md:block" />
            오늘은 그 구조를 바꾸는 회의다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
