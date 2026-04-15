'use client';

import { motion } from 'framer-motion';

const kst = [
  { h: '09:00', label: '한국 오전', detail: '주연의 노션 일일 업데이트 · 동주 QA 푸시 확인', color: 'text-emerald-300' },
  { h: '13:00', label: '한국 오후', detail: '재영 미팅 인사이트 / 동주 QA 리스트 갱신', color: 'text-amber-300' },
  { h: '17:00', label: '한국 저녁', detail: '동주 일일 리포트 → 슬랙 주연 멘션', color: 'text-fuchsia-300' },
  { h: '22:00', label: '한국 밤 · 이탈리아 낮', detail: '주연 푸시 시작 · 김제연 1차 대응', color: 'text-cyan-300' },
];

const cet = [
  { h: '02:00', label: '이탈리아 새벽', detail: 'QA 리포트 읽기 · 다음 푸시 계획', color: 'text-emerald-300' },
  { h: '06:00', label: '이탈리아 아침', detail: '한국 오후 싱크 준비 · 재영 인사이트 처리', color: 'text-amber-300' },
  { h: '10:00', label: '이탈리아 오전', detail: '슬랙 멘션 확인 · Critical 이슈 판단', color: 'text-fuchsia-300' },
  { h: '15:00', label: '이탈리아 낮 · 한국 밤', detail: '핵심 푸시 세션 · 주연 최종 머지', color: 'text-cyan-300' },
];

export default function ItalyRemoteRoutineSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-indigo-900/40 border border-indigo-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-indigo-300 text-sm font-medium tracking-wider">ITALY REMOTE ROUTINE · KST-7h</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">이탈리아 원격 개발 루틴</h2>
          <p className="text-slate-500 text-sm">시차 7시간 · 한국 오전 노션 → 이탈리아 낮 푸시 → 한국 밤 대응</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="bg-slate-900/60 rounded-2xl p-5 border border-emerald-800/40">
            <div className="text-xs uppercase tracking-widest text-emerald-400 mb-3">KST · 한국 시간</div>
            <div className="space-y-3">
              {kst.map((k, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`font-mono text-sm font-bold ${k.color} w-14 shrink-0`}>{k.h}</div>
                  <div>
                    <div className="text-xs text-slate-200 font-semibold">{k.label}</div>
                    <div className="text-[11px] text-slate-400 leading-snug">{k.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="bg-slate-900/60 rounded-2xl p-5 border border-cyan-800/40">
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-3">CET · 이탈리아 시간 (-7h)</div>
            <div className="space-y-3">
              {cet.map((k, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`font-mono text-sm font-bold ${k.color} w-14 shrink-0`}>{k.h}</div>
                  <div>
                    <div className="text-xs text-slate-200 font-semibold">{k.label}</div>
                    <div className="text-[11px] text-slate-400 leading-snug">{k.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="bg-gradient-to-r from-emerald-950/50 via-indigo-950/40 to-cyan-950/50 rounded-xl p-4 border border-indigo-700/50 text-center">
          <span className="text-xs text-slate-400">핵심 루프 · </span>
          <span className="text-sm text-slate-200"><span className="text-emerald-300 font-semibold">한국 09시 동주 푸시 확인</span> → <span className="text-cyan-300 font-semibold">이탈리아 15시 주연 수정</span> → <span className="text-fuchsia-300 font-semibold">한국 22시 제연 1차 대응</span> → <span className="text-amber-300 font-semibold">주연 최종 머지</span></span>
        </motion.div>
      </div>
    </div>
  );
}
