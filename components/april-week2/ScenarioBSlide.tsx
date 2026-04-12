'use client';

import { motion } from 'framer-motion';

export default function ScenarioBSlide() {
  const staffing = [
    { name: '김주연', role: 'CTO', alloc: '학원 AI 85% / 온라인 유지보수 10% / 외주 5%' },
    { name: '김제연', role: '개발', alloc: '학원 AI 70% / 포토부스(기존 상품 기반 운영) 10% / 외주 20%' },
    { name: '유재영', role: 'CEO·영업', alloc: '학원 영업 70% / 포토부스 15% / 외주 15%' },
    { name: '유선화', role: 'CMO', alloc: '학원 AI 브랜딩·마케팅 80% / 온라인 20%' },
    { name: '이동주', role: '재무·운영', alloc: '재무 30% / 학원 AI QA·운영 40% / 포토부스 현장 20% / 외주 10%' },
  ];

  const finance = [
    { m: '4월', off: 1500, wow: 1000, on: 50, ai: 0, ph: 0, out: 0, rev: 2550, fix: 4500, pl: -1950, cash: 8000 },
    { m: '5월', off: 1500, wow: 1000, on: 100, ai: 150, ph: 0, out: 500, rev: 3250, fix: 4500, pl: -1250, cash: 6750 },
    { m: '6월', off: 1500, wow: 1000, on: 150, ai: 400, ph: 300, out: 0, rev: 3350, fix: 4500, pl: -1150, cash: 5600 },
    { m: '7월', off: 1500, wow: 1000, on: 200, ai: 750, ph: 300, out: 0, rev: 3750, fix: 4500, pl: -750, cash: 4850 },
    { m: '8월', off: 0, wow: 0, on: 250, ai: 1250, ph: 500, out: 500, rev: 2500, fix: 3000, pl: -500, cash: 4350 },
    { m: '9월', off: 0, wow: 0, on: 300, ai: 1750, ph: 500, out: 0, rev: 2550, fix: 3000, pl: -450, cash: 3900 },
    { m: '10월', off: 0, wow: 0, on: 350, ai: 2250, ph: 300, out: 0, rev: 2900, fix: 3000, pl: -100, cash: 3800 },
    { m: '11월', off: 0, wow: 0, on: 400, ai: 2900, ph: 300, out: 500, rev: 4100, fix: 3000, pl: 1100, cash: 4900 },
    { m: '12월', off: 0, wow: 0, on: 450, ai: 3500, ph: 200, out: 0, rev: 4150, fix: 3000, pl: 1150, cash: 6050 },
  ];

  const fmt = (n: number) => n.toLocaleString();
  const fmtSign = (n: number) => (n >= 0 ? `+${n.toLocaleString()}` : n.toLocaleString());

  const pros = [
    '고정비 4,500 → 3,000만원으로 33% 절감',
    '전원 집중으로 학원 AI 스케일업 가속 (선화 풀타임 마케팅, 정연·주희 정리로 인건비 절감)',
    '2027년 투자유치 시 "학원 AI SaaS 전문 회사" 스토리 깔끔',
  ];

  const cons = [
    '8월까지 학원 AI 검증 안 되면 매출원 전부 사라질 위험',
    '올인 리스크 — 학원 AI 실패 시 회사 존립 위기',
    '인력 정리 과정에서 팀 사기 저하',
    '9~10월 현금 3,800만원대 — 여유 거의 없음',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-red-900/40 border border-red-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-red-300 text-sm font-medium tracking-wider">SCENARIO B</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-800/60 text-red-200 border border-red-600/50">고위험 고수익</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">
            Scenario B — 학원 AI 올인
          </h2>
          <p className="text-red-300/80 text-sm">
            8월 악센트 재계약 안 함 + 전사 학원 AI 집중 + 임원 4명 + 김제연 5인 체제
          </p>
        </motion.div>

        {/* Strategy detail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-slate-900/60 rounded-xl p-4 border border-red-800/40 mb-5"
        >
          <p className="text-xs text-slate-300 leading-relaxed">
            8월부터 악센트 오프라인/와우 종료. <span className="text-red-300">류다혜, 조수빈, 알바, 김정연, 김주희 정리</span>. 선화는 학원 AI 마케팅 풀타임 전환. 고정비 대폭 절감 + 학원 AI 전사 올인.
          </p>
        </motion.div>

        {/* Staffing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/60 mb-5"
        >
          <h3 className="text-sm font-semibold text-red-300 mb-3">인력 배치 (8월~, 5인 체제)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {staffing.map((s) => (
              <div key={s.name} className="bg-slate-800/40 rounded-lg px-3 py-2 border border-slate-700/40">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-slate-200">{s.name}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-900/50 text-red-300 border border-red-700/40">{s.role}</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-snug">{s.alloc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Finance Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mb-3"
        >
          <h3 className="text-sm font-semibold text-red-300 mb-2">월별 재무 (4~12월, 단위 만원)</h3>
          <div className="overflow-x-auto rounded-xl border border-slate-800/60">
            <table className="w-full text-[11px]">
              <thead className="bg-slate-900/80 text-slate-400">
                <tr>
                  <th className="px-2 py-2 text-left font-medium">월</th>
                  <th className="px-2 py-2 text-right font-medium">오프라인</th>
                  <th className="px-2 py-2 text-right font-medium">와우</th>
                  <th className="px-2 py-2 text-right font-medium">온라인</th>
                  <th className="px-2 py-2 text-right font-medium">학원AI</th>
                  <th className="px-2 py-2 text-right font-medium">포토부스</th>
                  <th className="px-2 py-2 text-right font-medium">외주</th>
                  <th className="px-2 py-2 text-right font-medium">총매출</th>
                  <th className="px-2 py-2 text-right font-medium">고정비</th>
                  <th className="px-2 py-2 text-right font-medium">손익</th>
                  <th className="px-2 py-2 text-right font-medium">잔여현금</th>
                </tr>
              </thead>
              <tbody>
                {finance.map((f) => {
                  const isPivot = f.m === '8월';
                  return (
                    <tr key={f.m} className={`border-t border-slate-800/40 font-mono tabular-nums ${isPivot ? 'bg-red-950/20' : ''}`}>
                      <td className="px-2 py-1.5 text-slate-300 font-sans">{isPivot ? <span className="text-red-300 font-bold">{f.m} ★</span> : f.m}</td>
                      <td className="px-2 py-1.5 text-right text-slate-300">{fmt(f.off)}</td>
                      <td className="px-2 py-1.5 text-right text-slate-300">{fmt(f.wow)}</td>
                      <td className="px-2 py-1.5 text-right text-slate-300">{fmt(f.on)}</td>
                      <td className="px-2 py-1.5 text-right text-red-300">{fmt(f.ai)}</td>
                      <td className="px-2 py-1.5 text-right text-slate-300">{fmt(f.ph)}</td>
                      <td className="px-2 py-1.5 text-right text-slate-300">{fmt(f.out)}</td>
                      <td className="px-2 py-1.5 text-right text-slate-200 font-semibold">{fmt(f.rev)}</td>
                      <td className="px-2 py-1.5 text-right text-slate-400">{fmt(f.fix)}</td>
                      <td className={`px-2 py-1.5 text-right font-semibold ${f.pl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>{fmtSign(f.pl)}</td>
                      <td className="px-2 py-1.5 text-right text-slate-200">{fmt(f.cash)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-slate-500 mt-1.5">* 8월부터 악센트 오프라인+와우 종료, 고정비 4,500 → 3,000만원</p>
        </motion.div>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4"
        >
          <div className="bg-slate-900/60 rounded-xl p-3 border border-red-800/40 text-center">
            <p className="text-[10px] text-slate-500 mb-1">손익분기</p>
            <p className="text-lg font-bold text-red-300">11월</p>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-amber-800/40 text-center">
            <p className="text-[10px] text-slate-500 mb-1">최저 현금</p>
            <p className="text-lg font-bold text-amber-300 font-mono">10월 3,800</p>
            <p className="text-[9px] text-amber-400/80">고정비 1.27개월분</p>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-emerald-800/40 text-center">
            <p className="text-[10px] text-slate-500 mb-1">연말 현금</p>
            <p className="text-lg font-bold text-emerald-300 font-mono">6,050</p>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-red-800/40 text-center">
            <p className="text-[10px] text-slate-500 mb-1">12월 학원AI MRR</p>
            <p className="text-lg font-bold text-red-300 font-mono">3,500</p>
            <p className="text-[9px] text-emerald-400/80">고정비 ↓ 흑자폭 ↑</p>
          </div>
        </motion.div>

        {/* Pros / Cons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3"
        >
          <div className="bg-slate-900/60 rounded-xl p-4 border border-emerald-800/40">
            <h4 className="text-xs font-semibold text-emerald-300 mb-2">장점 3가지</h4>
            <ul className="text-[11px] text-slate-400 space-y-1 leading-relaxed">
              {pros.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-4 border border-red-800/40">
            <h4 className="text-xs font-semibold text-red-300 mb-2">단점 4가지</h4>
            <ul className="text-[11px] text-slate-400 space-y-1 leading-relaxed">
              {cons.map((c, i) => (
                <li key={i}>• {c}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Precondition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-gradient-to-r from-amber-950/40 via-slate-900/60 to-amber-950/40 rounded-xl p-3 border border-amber-700/50 text-center"
        >
          <p className="text-xs text-amber-200">
            <span className="font-bold text-amber-300">전제 조건:</span> 7월까지 학원 AI MRR 최소 <span className="font-mono text-amber-300">750~1,000만원</span> 달성해야 이 결단 가능
          </p>
        </motion.div>
      </div>
    </div>
  );
}
