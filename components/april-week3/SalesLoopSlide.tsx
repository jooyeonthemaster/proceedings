'use client';

import { motion } from 'framer-motion';

const flow = [
  { day: '월요일', tasks: ['대흥 2곳 미팅', '랜딩 응답자 리스트 확인'], color: 'text-emerald-300' },
  { day: '화요일', tasks: ['대흥 2곳 미팅', '동주 싱크 17:00 · 인사이트 공유'], color: 'text-cyan-300' },
  { day: '수요일', tasks: ['광고 응답자 컨택 집중', '중간 점검 노트 작성'], color: 'text-amber-300' },
  { day: '목요일', tasks: ['대흥 2곳 미팅', '기능 점수 기록 → 노션'], color: 'text-fuchsia-300' },
  { day: '금요일', tasks: ['대흥 2곳 미팅', '동주 싱크 17:00 · 주간 정리'], color: 'text-rose-300' },
];

export default function SalesLoopSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-emerald-300 text-sm font-medium tracking-wider">SALES LOOP · 대흥 10곳 + 광고 응답자</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">통합 영업 플로우</h2>
          <p className="text-slate-500 text-sm">오프라인 10곳 + 온라인 응답자 · 주 2회 동주 싱크</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-5">
          {flow.map((f, i) => (
            <motion.div key={f.day} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }} className="bg-slate-900/60 rounded-xl p-4 border border-emerald-900/40">
              <div className={`text-sm font-bold ${f.color} mb-3 font-mono`}>{f.day}</div>
              <ul className="space-y-2">
                {f.tasks.map((t, j) => (
                  <li key={j} className="text-xs text-slate-300 leading-snug flex items-start gap-1.5">
                    <span className={`${f.color} mt-0.5`}>›</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-slate-900/60 rounded-xl p-4 border border-emerald-800/40">
            <div className="text-[10px] uppercase tracking-widest text-emerald-400 mb-1">주간 목표</div>
            <div className="text-sm text-slate-200">대흥 10곳 미팅 완주 · 기능 점수 50행 기록</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-4 border border-emerald-800/40">
            <div className="text-[10px] uppercase tracking-widest text-emerald-400 mb-1">랜딩 2차 전환</div>
            <div className="text-sm text-slate-200">미팅 후 "고민중" 고객 → 랜딩 링크 전송 → 48h 후 팔로업</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-4 border border-emerald-800/40">
            <div className="text-[10px] uppercase tracking-widest text-emerald-400 mb-1">동주 싱크</div>
            <div className="text-sm text-slate-200">화·금 17:00 · 미팅 인사이트 → QA 리스트 즉시 반영</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
