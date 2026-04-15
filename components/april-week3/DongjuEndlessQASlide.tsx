'use client';

import { motion } from 'framer-motion';

export default function DongjuEndlessQASlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
          <div className="bg-slate-900/60 rounded-2xl p-6 border border-blue-700/40 text-center">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center mb-4 text-3xl font-bold text-white">동주</div>
            <div className="text-xs uppercase tracking-widest text-blue-400 mb-1">재무 / 운영 · QA 총괄</div>
            <div className="text-2xl font-bold text-slate-100 mb-1">이동주</div>
            <div className="text-sm text-slate-400 mb-4">엔드리스 QA 전환</div>
            <div className="space-y-2 text-left border-t border-slate-800/60 pt-4">
              <div className="flex justify-between text-xs"><span className="text-slate-500">이전</span><span className="text-slate-400 font-mono">3이벤트</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">변경</span><span className="text-blue-300 font-mono">매일 반복</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">리포트</span><span className="text-slate-300">17:00 일일</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">Critical</span><span className="text-rose-300">실시간 슬랙</span></div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <div className="text-xs uppercase tracking-widest text-blue-400/80 mb-1">UPDATE · 엔드리스 QA 전환</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">"엔드리스 QA"의 의미</h2>
              <p className="text-slate-500 text-sm">이벤트성 3회 리포트 → 매일 반복 + 실시간 피드백</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-red-950/30 rounded-xl p-4 border border-red-800/50">
                <div className="text-xs uppercase tracking-widest text-red-400 mb-2">BEFORE · 이벤트성</div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li>• 1차 리포트 4/18</li>
                  <li>• 중간 리포트 4/25</li>
                  <li>• 최종 리포트 4/30</li>
                  <li className="text-red-300 font-semibold">총 3이벤트 · 이슈 발견까지 최대 7일 지연</li>
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-blue-950/30 rounded-xl p-4 border border-blue-700/50">
                <div className="text-xs uppercase tracking-widest text-blue-400 mb-2">AFTER · 엔드리스</div>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li>• 주연 푸시 올 때마다 당일 검증</li>
                  <li>• 17:00 매일 노션 일일 리포트</li>
                  <li>• Critical 발견 즉시 슬랙 멘션</li>
                  <li className="text-blue-300 font-semibold">이슈 발견-수정 사이클 ≤ 24h</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
