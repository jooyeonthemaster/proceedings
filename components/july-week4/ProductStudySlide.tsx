'use client';

import { motion } from 'framer-motion';

const steps = [
  { step: 'STEP 1', title: '전원 직접 사용', desc: '각자 스모트로 문제 생성 → 다운로드까지 최소 1회 완주. 계정은 즉시 지급', when: '이번 주 내' },
  { step: 'STEP 2', title: '기능 데모 세션', desc: '주연 주도 60분 — 문제 생성·유형·크레딧·플랜 구조까지 전 기능 워크스루', when: '데일리 직후 1회' },
  { step: 'STEP 3', title: '영업 화법 정리', desc: '기능 이해를 바탕으로 "학원장에게 뭐라고 말할지" 1페이지 화법 시트 공동 작성', when: '데모 후 3일 내' },
];

export default function ProductStudySlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <div className="inline-flex items-center bg-cyan-900/40 border border-cyan-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-cyan-300 text-sm font-medium tracking-wider">제안 ③ · 제품 이해</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">우리가 파는 제품을 우리가 모른다</h2>
          <p className="text-slate-500">각자 스모트 기능 이해도가 사실상 0 — 기능을 모르면 영업도, 콘텐츠도, 광고 문구도 안 나온다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.12 }} className="bg-slate-900/60 rounded-2xl p-5 border border-cyan-800/40 flex flex-col">
              <div className="text-xs font-mono font-bold text-cyan-400 mb-2">{s.step}</div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-3 pt-3 border-t border-slate-800/60 text-[11px] text-slate-500">⏰ {s.when}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="bg-cyan-950/40 rounded-2xl p-5 border border-cyan-600/40 text-center">
          <p className="text-slate-200 leading-relaxed">
            소윤쌤이 통하는 이유는 <span className="text-cyan-300 font-bold">본인이 쓰는 걸 그대로 보여주기 때문</span>이다.
            기능 이해는 마케팅의 선택이 아니라 전제조건이다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
