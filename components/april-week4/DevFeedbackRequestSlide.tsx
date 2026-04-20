'use client';

import { motion } from 'framer-motion';

const questions = [
  { who: '재영', color: 'text-emerald-300', border: 'border-emerald-700/40', q: '대흥 미팅에서 원장님이 가장 자주 보여준 자료 형태는? (인쇄 시험지 / 손필기 / PDF / 사진)', why: '추출 우선 케이스 결정' },
  { who: '선화', color: 'text-fuchsia-300', border: 'border-fuchsia-700/40', q: '광고에서 "샘플 업로드" CTA를 1번 클릭으로 보여줄 가치가 있는가?', why: '랜딩 위치·복사본 결정' },
  { who: '동주', color: 'text-blue-300', border: 'border-blue-700/40', q: 'QA 셋: 어떤 샘플 10개를 정답 데이터로 쓸 것인가?', why: '추출 정확도 측정 기준' },
  { who: '전체', color: 'text-amber-300', border: 'border-amber-700/40', q: '실패한 추출 결과 → 사용자가 직접 수정할 UI를 제공할 것인가, 자동 폐기할 것인가?', why: '5단계 검증 UX 방향' },
];

const decide = [
  { id: 'D1', t: '오늘 4/20 결정', d: '구조 파싱 우선 케이스 1개 + 검증 UI 제공 여부' },
  { id: 'D2', t: '4/21 EOD', d: 'CTO 푸시 → 동주 QA 10건 검증' },
  { id: 'D3', t: '4/22 ON', d: '광고 시작 시점에 80% → 90% 진입' },
];

export default function DevFeedbackRequestSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-slate-900 to-indigo-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-amber-900/40 border border-amber-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-amber-300 text-sm font-medium tracking-wider">FEEDBACK REQUEST · 4 QUESTIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">오늘 회의에서 받고 싶은 피드백</h2>
          <p className="text-slate-500">기능을 더 만들지 말고, 지금 80%를 90%로 보내는 핵심 1~2개를 결정한다.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
          {questions.map((q, i) => (
            <motion.div key={q.who} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className={`bg-slate-900/60 rounded-xl p-4 border ${q.border}`}>
              <div className="flex items-baseline justify-between mb-2">
                <div className={`text-xs uppercase tracking-widest font-bold ${q.color}`}>To. {q.who}</div>
                <div className="text-[10px] text-slate-500 italic">{q.why}</div>
              </div>
              <div className="text-sm text-slate-100 leading-relaxed">{q.q}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-slate-900/40 rounded-xl p-4 border border-amber-900/40">
          <div className="text-xs uppercase tracking-widest text-amber-400/80 mb-3 font-semibold">의사결정 타임박스 · 3단계</div>
          <div className="grid grid-cols-3 gap-2">
            {decide.map((d) => (
              <div key={d.id} className="bg-slate-950/40 rounded-lg px-3 py-2 border border-slate-800/60">
                <div className="text-[10px] text-amber-300 font-mono font-bold">{d.id} · {d.t}</div>
                <div className="text-[11px] text-slate-300 mt-1 leading-snug">{d.d}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
