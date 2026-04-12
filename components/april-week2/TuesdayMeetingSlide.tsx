'use client';

import { motion } from 'framer-motion';

const frameItems = [
  '개발팀 리소스는 학원 AI가 1순위',
  '포토부스 디벨롭은 기존 완성된 상품 기준으로 영업 먼저',
  '추가 기능 개발은 학원 AI MVP 안정화 후',
  '마케팅팀은 악센트에 집중, 포토부스 지원은 최소한',
];

const decisions = [
  { num: '1', title: '학원 AI MVP 5월 완성 가능?', body: '김주연+김제연 확인. 불가 시 일정 조정.' },
  { num: '2', title: '포토부스 제안서 최종 픽스 일정', body: '주희 담당, 이번 주 내 완성 목표.' },
  { num: '3', title: '5월 영업 담당 배분', body: '재영 → 학원 주 3일, 주희 → 포토부스 주 5일.' },
  { num: '4', title: '마케팅팀 학원 AI 지원 범위', body: '선화: 학원 브랜딩 + 주1회 콘텐츠 + AB테스트. 정연: 악센트 집중.' },
  { num: '5', title: '외주개발 마케팅 투입 여부', body: '안 함. 인맥 기반 유지.' },
];

const checkpoints = [
  { kpi: '학원 AI 누적 학원 수', target: '8~12개', floor: '최소 5개', warn: '5개 미만이면 제품/영업 전략 피벗' },
  { kpi: '포토부스 수주 건수', target: '1~2건', floor: '0건', warn: '0건이면 영업 방식 재검토' },
  { kpi: '잔여 현금', target: '5,500만원+', floor: '5,000만원', warn: '5,000만원 이하면 비상 플랜 발동' },
];

const julyDecision = [
  { q: '학원 AI MRR ≥ 750만원?', yes: '악센트 종료 강력 검토' },
  { q: '학원 이탈률 ≤ 10%?', yes: 'MRR 예측 신뢰 가능' },
  { q: '8~10월 파이프라인 ≥ 20개?', yes: '하반기 성장 가시성 확보' },
];

const emergency = [
  '재영 네트워크 총동원 외주개발 긴급 수주',
  '단기 대출/정책자금 검토',
  '고정비 추가 절감 항목 검토 (이동주가 항목별 분석)',
  '포토부스 첫 건을 더 공격적으로 (원가 수준이라도 현금 확보)',
];

export default function TuesdayMeetingSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(136,19,55,0.22)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(15,23,42,0.5)_0%,transparent_60%)]" />

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center bg-rose-900/40 border border-rose-700/50 rounded-full px-5 py-1.5 mb-4">
            <span className="text-rose-300 text-xs font-medium tracking-[0.2em]">CTO ACTION PLAN · D-2</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
            4월 14일(화) 회의 전략 — CTO 액션 플랜
          </h2>
          <p className="text-slate-500 text-sm">상위 전략 정리부터 비상 플랜까지 5개 블록</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
          {/* ① 회의 전 상위 전략 정리 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-slate-900/70 rounded-xl p-4 border border-rose-800/40 lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-rose-900/50 text-rose-300 flex items-center justify-center font-bold text-xs border border-rose-700/50">①</div>
              <h3 className="text-rose-200 text-sm font-bold">회의 전 상위 전략 정리 (5분)</h3>
            </div>
            <p className="text-slate-300 text-[12px] leading-relaxed mb-2">
              주희가 준비한 포토부스 질문에 답하기 전에, 먼저 <span className="text-rose-300 font-semibold">전사 우선순위 정리</span> 필요. 주희 노션 자료는 <span className="text-slate-200">"포토부스를 어떻게 잘 만들까"</span>에 초점 → <span className="text-slate-200">"포토부스에 개발 리소스를 얼마나 투입할 수 있느냐, 학원 AI와 우선순위를 어떻게 나누느냐"</span>라는 상위 전략 논의가 빠져 있음.
            </p>
            <div className="text-rose-300 text-[10px] font-bold tracking-wider mb-1.5 mt-2">회의 시작 시 공유할 프레임 4가지</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
              {frameItems.map((f, i) => (
                <div key={i} className="flex items-start gap-2 bg-rose-950/30 border border-rose-900/40 rounded px-2.5 py-1.5">
                  <span className="text-rose-400 text-[10px] font-mono shrink-0 mt-0.5">F{i + 1}</span>
                  <span className="text-slate-300 text-[11px] leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ② 즉시 결정 사항 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-slate-900/70 rounded-xl p-4 border border-rose-800/40"
          >
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-7 h-7 rounded-lg bg-rose-900/50 text-rose-300 flex items-center justify-center font-bold text-xs border border-rose-700/50">②</div>
              <h3 className="text-rose-200 text-sm font-bold">즉시 결정 사항 5가지</h3>
            </div>
            <div className="space-y-1.5">
              {decisions.map((d) => (
                <div key={d.num} className="flex items-start gap-2 bg-slate-950/40 border border-slate-800/60 rounded px-2.5 py-1.5">
                  <span className="text-rose-400 text-[10px] font-mono font-bold shrink-0 mt-0.5">{d.num}</span>
                  <div className="min-w-0">
                    <div className="text-slate-100 text-[11.5px] font-semibold leading-tight">{d.title}</div>
                    <div className="text-slate-400 text-[10.5px] leading-snug mt-0.5">{d.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ③ 6월 말 체크포인트 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-slate-900/70 rounded-xl p-4 border border-amber-800/40"
          >
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-7 h-7 rounded-lg bg-amber-900/50 text-amber-300 flex items-center justify-center font-bold text-xs border border-amber-700/50">③</div>
              <h3 className="text-amber-200 text-sm font-bold">6월 말 체크포인트</h3>
            </div>
            <div className="space-y-2">
              {checkpoints.map((c, i) => (
                <div key={i} className="bg-amber-950/20 border border-amber-900/40 rounded px-2.5 py-2">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="text-slate-100 text-[11.5px] font-semibold">{c.kpi}</div>
                    <div className="font-mono text-[10.5px]">
                      <span className="text-emerald-400">{c.target}</span>
                      <span className="text-slate-600 mx-1">·</span>
                      <span className="text-amber-300">{c.floor}</span>
                    </div>
                  </div>
                  <div className="text-slate-400 text-[10.5px] leading-snug">{c.warn}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ④ 7월 말 최대 결정 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-slate-900/70 rounded-xl p-4 border border-emerald-800/40"
          >
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-900/50 text-emerald-300 flex items-center justify-center font-bold text-xs border border-emerald-700/50">④</div>
              <h3 className="text-emerald-200 text-sm font-bold">7월 말 최대 결정 — 악센트 재계약</h3>
            </div>
            <div className="space-y-1.5 mb-2.5">
              {julyDecision.map((j, i) => (
                <div key={i} className="flex items-start gap-2 bg-emerald-950/20 border border-emerald-900/40 rounded px-2.5 py-1.5">
                  <span className="text-emerald-400 text-[10px] font-bold shrink-0 mt-0.5">Q{i + 1}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-slate-100 text-[11px] font-semibold">{j.q}</div>
                    <div className="text-emerald-300/80 text-[10px]">YES → {j.yes}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-emerald-900/30 border border-emerald-700/50 rounded px-2 py-1.5">
                <div className="text-emerald-300 text-[10px] font-bold">2/3 이상 YES</div>
                <div className="text-slate-300 text-[10px] leading-snug">악센트 종료, 5인 체제 학원 AI 올인</div>
              </div>
              <div className="bg-indigo-900/30 border border-indigo-700/50 rounded px-2 py-1.5">
                <div className="text-indigo-300 text-[10px] font-bold">2/3 이상 NO</div>
                <div className="text-slate-300 text-[10px] leading-snug">악센트 재계약, 밸런스 유지</div>
              </div>
            </div>
          </motion.div>

          {/* ⑤ 비상 플랜 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-slate-900/70 rounded-xl p-4 border border-red-800/50 lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-red-900/50 text-red-300 flex items-center justify-center font-bold text-xs border border-red-700/50">⑤</div>
              <h3 className="text-red-200 text-sm font-bold">비상 플랜</h3>
              <div className="ml-auto text-red-400 text-[10px] font-mono">8월 전 현금 5,000만원 이하 추락 시</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
              {emergency.map((e, i) => (
                <div key={i} className="flex items-start gap-2 bg-red-950/30 border border-red-900/40 rounded px-2.5 py-1.5">
                  <span className="text-red-400 text-[10px] font-mono shrink-0 mt-0.5">E{i + 1}</span>
                  <span className="text-slate-300 text-[11px] leading-snug">{e}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
