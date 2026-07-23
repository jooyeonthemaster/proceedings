'use client';

import { motion } from 'framer-motion';

export default function DailyStandupSlide() {
  const rules = [
    { title: '매일 · 15분 · 고정 시간', desc: '시간을 오늘 확정한다 (예: 오전 10시). 안 모이면 오픈채팅 텍스트로라도 진행 — 건너뛰는 날을 만들지 않는다', icon: '⏰' },
    { title: '3줄 형식', desc: '어제 한 것 / 오늘 할 것 / 막힌 것 — 각자 3줄이면 끝. 길게 하지 않는 게 유지의 핵심', icon: '📝' },
    { title: '보드 기준 진행', desc: '우선순위 보드를 띄워놓고 그 순서대로 체크 — 스모트 안건이 매일 1순위로 올라온다', icon: '📌' },
    { title: '오너가 사회', desc: '스모트 오너가 데일리를 주재 — 마감 임박 항목을 매일 짚는다', icon: '🎙️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <div className="inline-flex items-center bg-cyan-900/40 border border-cyan-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-cyan-300 text-sm font-medium tracking-wider">제안 ② · 리듬</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">데일리 회의를 복원하자</h2>
          <p className="text-slate-500">지금 매일 회의가 안 되고 있다 — 점검 주기가 없으면 실행은 반드시 밀린다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {rules.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="bg-slate-900/60 rounded-2xl p-5 border border-cyan-800/40">
              <div className="text-2xl mb-2">{r.icon}</div>
              <h3 className="text-base font-bold text-slate-100 mb-1.5">{r.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="bg-cyan-950/40 rounded-2xl p-5 border border-cyan-600/40 text-center">
          <p className="text-slate-200 leading-relaxed">
            거창한 회의가 아니라 <span className="text-cyan-300 font-bold">매일 15분의 점검 리듬</span>이 목적이다.
            7/15 보드가 8일째 그대로인 건, 그 8일 동안 아무도 보드를 열지 않았기 때문이다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
