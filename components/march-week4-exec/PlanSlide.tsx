'use client';

import { motion } from 'framer-motion';

export default function PlanSlide() {
  const plans = [
    { label: '지원사업', desc: '계속 다양하게 시도할 예정', status: '지속 도전', statusColor: 'text-amber-400/60' },
    { label: '올해 0건', desc: '최악의 시나리오도 대비 필요', status: '시나리오 대비', statusColor: 'text-red-400/60' },
    { label: '자체 매출', desc: '지원사업 의존 탈피 — 영업/마케팅 가속', status: '핵심 과제', statusColor: 'text-blue-400/60' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-amber-900/20 border border-amber-800/30 rounded-full px-4 py-1 mb-4">
            <span className="text-amber-400/70 text-sm">FORWARD PLAN</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-200 mb-2">앞으로의 방향</h2>
          <p className="text-slate-500 mb-10">그래도 멈추지 않는다</p>

          <div className="space-y-4 max-w-3xl mx-auto mb-10">
            {plans.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/50 flex items-center justify-between"
              >
                <div>
                  <div className="text-slate-300 font-bold">{item.label}</div>
                  <div className="text-slate-500 text-sm mt-1">{item.desc}</div>
                </div>
                <span className={`${item.statusColor} text-sm font-medium bg-slate-800/50 px-3 py-1 rounded-full`}>
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>

          {/* 핵심 메시지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-slate-900/40 rounded-2xl p-8 border border-slate-700/30 max-w-3xl mx-auto text-center"
          >
            <p className="text-slate-400 text-lg leading-relaxed">
              언제까지고 지원사업에 의존할 수는 없다.<br />
              <span className="text-slate-300 font-semibold">
                결국 진짜 다들 위기의식을 느끼고,<br />
                각자의 영역에서 최선을 다할 시점이다.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
