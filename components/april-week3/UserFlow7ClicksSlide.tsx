'use client';

import { motion } from 'framer-motion';

const clicks = [
  { n: 1, label: '로그인', detail: 'SSO 1-탭 · 원장 계정', time: '3s' },
  { n: 2, label: '지문 업로드', detail: 'PDF/사진 드래그 · OCR 자동', time: '8s' },
  { n: 3, label: 'AI 분석', detail: '단어·문법·난이도 자동 추출', time: '자동' },
  { n: 4, label: '문제 선택', detail: '5·10·20문 템플릿 · 난이도 슬라이더', time: '10s' },
  { n: 5, label: '자동 조판', detail: 'A4 · 답지 동시 생성', time: '자동' },
  { n: 6, label: 'PDF 출력', detail: '인쇄 or 다운로드', time: '3s' },
  { n: 7, label: '공유', detail: '학생/학부모 링크 · 카톡 전송', time: '5s' },
];

export default function UserFlow7ClicksSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <div className="inline-flex items-center bg-cyan-900/40 border border-cyan-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-cyan-300 text-sm font-medium tracking-wider">#5 USER FLOW · 7 CLICKS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">#5 원장 하루 7클릭 시나리오</h2>
          <p className="text-slate-500 text-sm">앱 진입 → 시험지 출력 ≤ 7클릭 · 총 30초 이내</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-6 h-0.5 bg-gradient-to-r from-cyan-700/60 via-emerald-700/60 to-indigo-700/60" />
          <div className="grid grid-cols-7 gap-2 relative">
            {clicks.map((c, i) => (
              <motion.div key={c.n} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-cyan-600/60 z-10 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-cyan-300 font-mono">{c.n}</span>
                </div>
                <div className="bg-slate-900/60 rounded-xl p-3 border border-cyan-900/40 w-full min-h-[120px]">
                  <div className="text-sm font-bold text-slate-100 mb-1 text-center">{c.label}</div>
                  <div className="text-[10px] text-slate-400 leading-snug text-center mb-2">{c.detail}</div>
                  <div className="text-[10px] font-mono text-cyan-300/80 text-center font-semibold">{c.time}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }} className="mt-8 grid grid-cols-3 gap-3">
          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800/60 text-center">
            <div className="text-xs text-slate-500 mb-1">총 클릭 수</div>
            <div className="text-2xl font-mono font-bold text-cyan-300">7</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800/60 text-center">
            <div className="text-xs text-slate-500 mb-1">총 체감 시간</div>
            <div className="text-2xl font-mono font-bold text-cyan-300">≤ 30s</div>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800/60 text-center">
            <div className="text-xs text-slate-500 mb-1">측정 담당</div>
            <div className="text-sm text-slate-200 mt-2">동주 QA + 재영 현장</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
