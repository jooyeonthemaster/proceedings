'use client';

import { motion } from 'framer-motion';

export default function ScenarioDSlide() {
  const criteria = [
    { metric: '학원 AI MRR ≥ 750만원?', yes: '15개 이상 학원 확보', meaning: 'PMF 신호' },
    { metric: '학원 이탈률 ≤ 10%?', yes: '한번 잡으면 안 빠짐', meaning: 'MRR 예측 가능' },
    { metric: '8~10월 영업 파이프라인 ≥ 20개?', yes: '하반기 스케일업 가시성', meaning: '성장 가속 가능' },
  ];

  const restructure = [
    { name: '유선화', from: '악센트 마케팅 총괄', to: '학원 AI 브랜딩·콘텐츠 마케팅 풀타임', keep: true },
    { name: '김정연', from: '악센트 릴스 기획', to: '계약 종료', keep: false },
    { name: '김주희', from: '포토부스 영업', to: '계약 종료 (또는 학원 영업 전환 검토)', keep: false },
    { name: '류다혜', from: '와우 이벤트 운영', to: '계약 종료', keep: false },
    { name: '조수빈', from: '포스터 디자인', to: '계약 종료', keep: false },
    { name: '알바', from: '매장 운영', to: '종료', keep: false },
  ];

  const finance = [
    { m: '4월', off: 1500, wow: 1000, on: 50, ai: 0, ph: 0, out: 0, rev: 2550, fix: 4500, pl: -1950, cash: 8000 },
    { m: '5월', off: 1500, wow: 1000, on: 100, ai: 150, ph: 0, out: 500, rev: 3250, fix: 4500, pl: -1250, cash: 6750 },
    { m: '6월', off: 1500, wow: 1000, on: 150, ai: 400, ph: 300, out: 0, rev: 3350, fix: 4500, pl: -1150, cash: 5600 },
    { m: '7월', off: 1500, wow: 1000, on: 200, ai: 750, ph: 300, out: 0, rev: 3750, fix: 4500, pl: -750, cash: 4850 },
    { m: '8월(전환)', off: 0, wow: 0, on: 250, ai: 1250, ph: 500, out: 500, rev: 2500, fix: 3000, pl: -500, cash: 4350, pivot: true },
    { m: '9월', off: 0, wow: 0, on: 300, ai: 1750, ph: 500, out: 0, rev: 2550, fix: 3000, pl: -450, cash: 3900 },
    { m: '10월', off: 0, wow: 0, on: 350, ai: 2250, ph: 300, out: 0, rev: 2900, fix: 3000, pl: -100, cash: 3800 },
    { m: '11월', off: 0, wow: 0, on: 400, ai: 2900, ph: 300, out: 500, rev: 4100, fix: 3000, pl: 1100, cash: 4900 },
    { m: '12월', off: 0, wow: 0, on: 450, ai: 3500, ph: 200, out: 0, rev: 4150, fix: 3000, pl: 1150, cash: 6050 },
  ];

  const renewFinance = [
    { m: '8월', rev: 5000, fix: 4500, pl: 500, cash: 5350 },
    { m: '9월', rev: 5050, fix: 4500, pl: 550, cash: 5900 },
    { m: '10월', rev: 5400, fix: 4500, pl: 900, cash: 6800 },
    { m: '11월', rev: 6600, fix: 4500, pl: 2100, cash: 8900 },
    { m: '12월', rev: 6650, fix: 4500, pl: 2150, cash: 11050 },
  ];

  const worstCase = [
    { m: '5월', mrr: '100 (2개)', rev: 3100, cash: 6600 },
    { m: '6월', mrr: '250 (5개)', rev: 3050, cash: 5150 },
    { m: '7월', mrr: '400 (8개)', rev: 3250, cash: 3900 },
  ];

  const fmt = (n: number) => n.toLocaleString();
  const fmtSign = (n: number) => (n >= 0 ? `+${n.toLocaleString()}` : n.toLocaleString());

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-900/40 border border-emerald-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-emerald-300 text-sm font-medium tracking-wider">SCENARIO D</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-800/60 text-emerald-200 border border-emerald-600/50">★ 추천안 ★</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">
            Scenario D — 하이브리드 (추천안)
          </h2>
          <p className="text-emerald-300/80 text-sm">
            5~7월 A로 운영 + 학원 AI 검증 → 7월 말 데이터 기반 판단 → 8월 B(종료) 또는 A 유지
          </p>
        </motion.div>

        {/* Strategy detail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="bg-slate-900/60 rounded-xl p-4 border border-emerald-800/50 mb-4"
        >
          <p className="text-xs text-slate-300 leading-relaxed">
            5~7월 모든 사업 병행. 학원 AI 개발 리소스는 <span className="text-emerald-300 font-semibold">주연 + 제연</span>에 집중.
            <span className="text-emerald-300 font-semibold"> 주희</span>는 포토부스 및 축제 영업으로 중장기 추가 현금 흐름 구축.
            악센트는 <span className="text-emerald-300">현행 마케팅 유지 + 학원 홍보용 마케팅</span> 병행.
            <span className="text-emerald-300 font-semibold">유재영</span>은 영업 전략에 따라 학원 영업에 반드시 투입.
            8월 재계약 시점에 학원 AI 성과를 데이터로 보고 판단. 핵심은 <span className="text-emerald-300 font-semibold">&ldquo;옵셔널리티&rdquo;</span> — 잘 되면 악센트 접고 올인, 안 되면 악센트 유지하면서 학원 AI 더 키움.
          </p>
        </motion.div>

        {/* 2-column main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* LEFT: Decision criteria + rule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-slate-900/60 rounded-2xl p-4 border border-emerald-800/40"
          >
            <h3 className="text-sm font-semibold text-emerald-300 mb-3">8월 재계약 판단 기준 (7월 말)</h3>
            <div className="overflow-x-auto rounded-lg border border-slate-800/60 mb-3">
              <table className="w-full text-[11px]">
                <thead className="bg-slate-900/80 text-slate-400">
                  <tr>
                    <th className="px-2 py-2 text-left font-medium">판단 기준</th>
                    <th className="px-2 py-2 text-left font-medium">YES 조건</th>
                    <th className="px-2 py-2 text-left font-medium">의미</th>
                  </tr>
                </thead>
                <tbody>
                  {criteria.map((c, i) => (
                    <tr key={i} className="border-t border-slate-800/40">
                      <td className="px-2 py-1.5 text-slate-200">{c.metric}</td>
                      <td className="px-2 py-1.5 text-emerald-300">{c.yes}</td>
                      <td className="px-2 py-1.5 text-slate-400">{c.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-emerald-950/30 rounded-lg p-2 border border-emerald-700/50">
                <p className="text-[10px] text-emerald-400 font-bold">3개 중 2개+ YES</p>
                <p className="text-[10px] text-slate-300 mt-0.5">악센트 종료, 5인 학원 AI 올인 (B 전환)</p>
              </div>
              <div className="bg-amber-950/30 rounded-lg p-2 border border-amber-700/50">
                <p className="text-[10px] text-amber-400 font-bold">2개 이상 NO</p>
                <p className="text-[10px] text-slate-300 mt-0.5">악센트 재계약, A 유지</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Restructure + Final 5 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-slate-900/60 rounded-2xl p-4 border border-emerald-800/40"
          >
            <h3 className="text-sm font-semibold text-emerald-300 mb-3">악센트 종료 시 인력 재배치</h3>
            <div className="space-y-1.5 mb-3">
              {restructure.map((r) => (
                <div
                  key={r.name}
                  className={`flex items-center gap-2 text-[10.5px] rounded-lg px-2 py-1.5 border ${
                    r.keep ? 'bg-emerald-950/20 border-emerald-800/50' : 'bg-red-950/20 border-red-800/40'
                  }`}
                >
                  <span className="text-slate-200 font-bold w-12 shrink-0">{r.name}</span>
                  <span className="text-slate-500 flex-1">{r.from} →</span>
                  <span className={r.keep ? 'text-emerald-300' : 'text-red-300'}>{r.to}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-emerald-950/40 to-slate-900/60 rounded-lg p-2 border border-emerald-700/50">
              <p className="text-[10px] text-emerald-400 mb-0.5 font-bold">최종 5인 체제</p>
              <p className="text-[11px] text-slate-200">유재영(CEO/영업) + 유선화(CMO/마케팅) + 이동주(재무/운영) + 김주연(CTO/개발) + 김제연(개발)</p>
            </div>
          </motion.div>
        </div>

        {/* Finance Table - Termination case */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-3"
        >
          <h3 className="text-sm font-semibold text-emerald-300 mb-2">월별 재무 — 악센트 종료 시 (B와 동일, 단위 만원)</h3>
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
                {finance.map((f) => (
                  <tr key={f.m} className={`border-t border-slate-800/40 font-mono tabular-nums ${f.pivot ? 'bg-emerald-950/30' : ''}`}>
                    <td className="px-2 py-1.5 text-slate-300 font-sans">
                      {f.pivot ? <span className="text-emerald-300 font-bold">{f.m} ★</span> : f.m}
                    </td>
                    <td className="px-2 py-1.5 text-right text-slate-300">{fmt(f.off)}</td>
                    <td className="px-2 py-1.5 text-right text-slate-300">{fmt(f.wow)}</td>
                    <td className="px-2 py-1.5 text-right text-slate-300">{fmt(f.on)}</td>
                    <td className="px-2 py-1.5 text-right text-emerald-300">{fmt(f.ai)}</td>
                    <td className="px-2 py-1.5 text-right text-slate-300">{fmt(f.ph)}</td>
                    <td className="px-2 py-1.5 text-right text-slate-300">{fmt(f.out)}</td>
                    <td className="px-2 py-1.5 text-right text-slate-200 font-semibold">{fmt(f.rev)}</td>
                    <td className="px-2 py-1.5 text-right text-slate-400">{fmt(f.fix)}</td>
                    <td className={`px-2 py-1.5 text-right font-semibold ${f.pl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>{fmtSign(f.pl)}</td>
                    <td className="px-2 py-1.5 text-right text-slate-200">{fmt(f.cash)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Worst-point warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-amber-950/30 rounded-xl p-3 border border-amber-700/50 mb-4"
        >
          <p className="text-[11px] text-amber-200 leading-relaxed">
            <span className="font-bold text-amber-300">최저점 경고:</span> 10월 잔여 현금 <span className="font-mono text-amber-300">3,800만원</span>. 고정비 3,000만원 대비 <span className="font-mono">1.27개월분</span>. 악센트 종료 직후 매출 급감 + 학원 AI 풀커버 못 하는 구간. <span className="text-amber-300">9~10월 2개월 버텨야 11월부터 숨통</span>.
          </p>
        </motion.div>

        {/* 2-column: Renew & Worst case */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Renew table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-slate-900/60 rounded-xl p-3 border border-indigo-800/40"
          >
            <h4 className="text-xs font-semibold text-indigo-300 mb-2">악센트 재계약 시 요약 (8~12월)</h4>
            <div className="overflow-x-auto rounded-lg border border-slate-800/60">
              <table className="w-full text-[10.5px]">
                <thead className="bg-slate-900/80 text-slate-400">
                  <tr>
                    <th className="px-2 py-1 text-left">월</th>
                    <th className="px-2 py-1 text-right">총매출</th>
                    <th className="px-2 py-1 text-right">고정비</th>
                    <th className="px-2 py-1 text-right">손익</th>
                    <th className="px-2 py-1 text-right">잔여현금</th>
                  </tr>
                </thead>
                <tbody>
                  {renewFinance.map((r) => (
                    <tr key={r.m} className="border-t border-slate-800/40 font-mono tabular-nums">
                      <td className="px-2 py-1 text-slate-300 font-sans">{r.m}</td>
                      <td className="px-2 py-1 text-right text-slate-200">{fmt(r.rev)}</td>
                      <td className="px-2 py-1 text-right text-slate-400">{fmt(r.fix)}</td>
                      <td className="px-2 py-1 text-right text-emerald-400">{fmtSign(r.pl)}</td>
                      <td className="px-2 py-1 text-right text-slate-200">{fmt(r.cash)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
              재계약하면 연말 현금 <span className="font-mono text-indigo-300">11,050</span>으로 종료 시(<span className="font-mono">6,050</span>)보다 <span className="font-mono text-indigo-300">5,000만원</span> 많음. 하지만 고정비 4,500 유지 + 마케팅팀 악센트 묶임 → 학원 AI 스케일업 속도 제한, 2027년 투자유치 스토리 약화.
            </p>
          </motion.div>

          {/* Worst case */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-slate-900/60 rounded-xl p-3 border border-red-800/40"
          >
            <h4 className="text-xs font-semibold text-red-300 mb-2">최악 시나리오 — 학원 AI 50% 미달</h4>
            <div className="overflow-x-auto rounded-lg border border-slate-800/60">
              <table className="w-full text-[10.5px]">
                <thead className="bg-slate-900/80 text-slate-400">
                  <tr>
                    <th className="px-2 py-1 text-left">월</th>
                    <th className="px-2 py-1 text-right">학원AI MRR</th>
                    <th className="px-2 py-1 text-right">총매출</th>
                    <th className="px-2 py-1 text-right">잔여현금</th>
                  </tr>
                </thead>
                <tbody>
                  {worstCase.map((w) => (
                    <tr key={w.m} className="border-t border-slate-800/40 font-mono tabular-nums">
                      <td className="px-2 py-1 text-slate-300 font-sans">{w.m}</td>
                      <td className="px-2 py-1 text-right text-red-300">{w.mrr}</td>
                      <td className="px-2 py-1 text-right text-slate-200">{fmt(w.rev)}</td>
                      <td className="px-2 py-1 text-right text-slate-200">{fmt(w.cash)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
              7월 말 MRR <span className="font-mono text-red-300">400만원</span>으로 판단 기준(<span className="font-mono">750만원</span>) 미달 → <span className="text-red-300 font-medium">악센트 재계약 필수</span>. 재계약하고 학원 AI 더 키운 후 2027년 2월(다음 재계약) 다시 판단.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
