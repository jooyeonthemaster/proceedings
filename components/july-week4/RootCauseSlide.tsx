'use client';

import { motion } from 'framer-motion';

const have = [
  'SMOAT 실행 플레이북 — 채널 6종 + 기사작성 엔진 SOP (7/15)',
  '우선순위 보드 12건 — 담당·마감·우선순위까지 정리 완료',
  '경쟁사 검증 레퍼런스 — 리얼영어·지인에듀 팔로우 게이트, 소윤쌤 동형모고 세미나',
  '학교별 내신 파이프라인 설계 — 기출 분석 → 예상문제 → 무료 배포 (포스코고)',
];

const missing = [
  { text: '끝까지 밀고나갈 전담 오너', sub: '전원이 겸업 — 아무도 스모트가 1순위가 아니다' },
  { text: '데일리 리듬', sub: '매일 회의가 무너짐 — 실행 점검 주기가 없다' },
  { text: '제품 기능 이해', sub: '각자 스모트 기능 이해도가 사실상 없음 — 영업 화법이 안 나온다' },
  { text: '실행 체계', sub: '보드는 있는데 보드를 굴리는 사람과 규칙이 없다' },
];

export default function RootCauseSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <div className="inline-flex items-center bg-rose-900/40 border border-rose-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-rose-300 text-sm font-medium tracking-wider">진단 ③ · 원인</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">실행안이 없어서가 아니다</h2>
          <p className="text-slate-500">재영이 정리한 실행안은 이미 충분하다 — 딜레이의 원인은 다른 곳에 있다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} className="bg-slate-900/60 rounded-2xl p-6 border border-cyan-700/50">
            <h3 className="text-lg font-bold text-cyan-300 mb-4">✅ 이미 갖춰진 것 — 아이디어·전략</h3>
            <ul className="space-y-3">
              {have.map((t, i) => (
                <li key={i} className="text-sm text-slate-300 leading-relaxed flex gap-2">
                  <span className="text-cyan-500 shrink-0">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-slate-900/60 rounded-2xl p-6 border border-rose-700/50">
            <h3 className="text-lg font-bold text-rose-300 mb-4">❌ 비어 있는 것 — 오너십·체계</h3>
            <ul className="space-y-3">
              {missing.map((m, i) => (
                <li key={i} className="text-sm leading-relaxed flex gap-2">
                  <span className="text-rose-500 shrink-0">→</span>
                  <span>
                    <span className="text-slate-100 font-semibold">{m.text}</span>
                    <span className="block text-xs text-slate-500 mt-0.5">{m.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-rose-950/40 rounded-2xl p-5 border border-rose-600/40 text-center">
          <p className="text-slate-200 leading-relaxed">
            결론 — 부족한 건 기획이 아니라 <span className="text-rose-300 font-bold">책임지고 밀고나갈 사람과 매일 굴러가는 체계</span>다.
            뒤이어 3가지 제안으로 이걸 채운다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
