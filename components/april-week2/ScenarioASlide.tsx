'use client';

import { motion } from 'framer-motion';

export default function ScenarioASlide() {
  const staffing = [
    { name: '김주연', role: 'CTO', alloc: '악센트 유지보수 20% / 학원 AI 70% / 포토부스 기술자문 5% / 외주 5%' },
    { name: '김제연', role: '개발', alloc: '학원 AI 70% / 포토부스 10% / 외주 20%' },
    { name: '유재영', role: 'CEO·영업', alloc: '악센트 10% / 학원 영업 50% / 포토부스 미팅 20% / 외주 영업 20%' },
    { name: '김주희', role: '영업', alloc: '학원 영업 동행 20% / 포토부스 영업 70% / 외주 10%' },
    { name: '유선화', role: 'CMO', alloc: '악센트 50% / 학원 AI 브랜딩·주1회 콘텐츠·AB 30% / 포토부스 10% / 외주 10%' },
    { name: '김정연', role: '마케팅', alloc: '악센트 80% / 학원 커뮤니티 포스팅 10% / 포토부스 10%' },
    { name: '이동주', role: '재무·운영', alloc: '악센트 운영 30% / 학원 AI 과금체계 20% / 포토부스 현장 30% / 외주 20%' },
    { name: '류다혜+조수빈', role: '와우', alloc: '악센트 와우 100%' },
  ];

  const finance = [
    { m: '4월', off: 1500, wow: 1000, on: 50, ai: 0, ph: 0, out: 0, rev: 2550, fix: 4500, pl: -1950, cash: 8000 },
    { m: '5월', off: 1500, wow: 1000, on: 100, ai: 150, ph: 0, out: 500, rev: 3250, fix: 4500, pl: -1250, cash: 6750 },
    { m: '6월', off: 1500, wow: 1000, on: 150, ai: 400, ph: 300, out: 0, rev: 3350, fix: 4500, pl: -1150, cash: 5600 },
    { m: '7월', off: 1500, wow: 1000, on: 200, ai: 750, ph: 300, out: 0, rev: 3750, fix: 4500, pl: -750, cash: 4850 },
    { m: '8월', off: 1500, wow: 1000, on: 250, ai: 1250, ph: 500, out: 500, rev: 5000, fix: 4500, pl: 500, cash: 5350 },
    { m: '9월', off: 1500, wow: 1000, on: 300, ai: 1750, ph: 500, out: 0, rev: 5050, fix: 4500, pl: 550, cash: 5900 },
    { m: '10월', off: 1500, wow: 1000, on: 350, ai: 2250, ph: 300, out: 0, rev: 5400, fix: 4500, pl: 900, cash: 6800 },
    { m: '11월', off: 1500, wow: 1000, on: 400, ai: 2900, ph: 300, out: 500, rev: 6600, fix: 4500, pl: 2100, cash: 8900 },
    { m: '12월', off: 1500, wow: 1000, on: 450, ai: 3500, ph: 200, out: 0, rev: 6650, fix: 4500, pl: 2150, cash: 11050 },
  ];

  const fmt = (n: number) => n.toLocaleString();
  const fmtSign = (n: number) => (n >= 0 ? `+${n.toLocaleString()}` : n.toLocaleString());

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-900/40 border border-indigo-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-indigo-300 text-sm font-medium tracking-wider">SCENARIO A</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-800/60 text-indigo-200 border border-indigo-600/50">현재 계획</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">
            Scenario A — 밸런스 (현재 계획)
          </h2>
          <p className="text-indigo-300/80 text-sm">
            학원 AI 우선 + 포토부스 영업 + 악센트 유지 + 8월 재계약 판단
          </p>
        </motion.div>

        {/* Strategy detail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-slate-900/60 rounded-xl p-4 border border-indigo-800/40 mb-5"
        >
          <p className="text-xs text-slate-300 leading-relaxed">
            5~7월 모든 사업 병행. 학원 AI에 개발 리소스(<span className="text-indigo-300">주연+제연</span>) 집중. 주희는 포토부스 영업으로 단기 현금 보충. 악센트는 현행 마케팅팀 유지. <span className="text-indigo-300 font-medium">8월 재계약 시점에 학원 AI 성과 보고 판단</span>.
          </p>
        </motion.div>

        {/* Staffing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/60 mb-5"
        >
          <h3 className="text-sm font-semibold text-indigo-300 mb-3">인력 배치 (8명 전원)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {staffing.map((s) => (
              <div key={s.name} className="bg-slate-800/40 rounded-lg px-3 py-2 border border-slate-700/40">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-slate-200">{s.name}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-900/50 text-indigo-300 border border-indigo-700/40">{s.role}</span>
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
          <h3 className="text-sm font-semibold text-indigo-300 mb-2">월별 재무 (4~12월, 단위 만원)</h3>
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
                  <tr key={f.m} className="border-t border-slate-800/40 font-mono tabular-nums">
                    <td className="px-2 py-1.5 text-slate-300 font-sans">{f.m}</td>
                    <td className="px-2 py-1.5 text-right text-slate-300">{fmt(f.off)}</td>
                    <td className="px-2 py-1.5 text-right text-slate-300">{fmt(f.wow)}</td>
                    <td className="px-2 py-1.5 text-right text-slate-300">{fmt(f.on)}</td>
                    <td className="px-2 py-1.5 text-right text-indigo-300">{fmt(f.ai)}</td>
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
          <p className="text-[10px] text-slate-500 mt-1.5">* 외주는 5월·8월·11월 분기 1건씩. 학원AI 보수적 추정.</p>
        </motion.div>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4"
        >
          <div className="bg-slate-900/60 rounded-xl p-3 border border-indigo-800/40 text-center">
            <p className="text-[10px] text-slate-500 mb-1">손익분기</p>
            <p className="text-lg font-bold text-indigo-300">8월</p>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-amber-800/40 text-center">
            <p className="text-[10px] text-slate-500 mb-1">최저 현금</p>
            <p className="text-lg font-bold text-amber-300 font-mono">7월 4,850</p>
            <p className="text-[9px] text-amber-400/80">고정비 1.08개월분 (아슬)</p>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-emerald-800/40 text-center">
            <p className="text-[10px] text-slate-500 mb-1">연말 현금</p>
            <p className="text-lg font-bold text-emerald-300 font-mono">11,050</p>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-indigo-800/40 text-center">
            <p className="text-[10px] text-slate-500 mb-1">12월 학원AI MRR</p>
            <p className="text-lg font-bold text-indigo-300 font-mono">3,500</p>
          </div>
        </motion.div>

        {/* Pros / Cons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <div className="bg-slate-900/60 rounded-xl p-4 border border-emerald-800/40">
            <h4 className="text-xs font-semibold text-emerald-300 mb-2">장점</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              리스크 분산, 기존 캐시카우 유지, 학원 AI 실패 시에도 악센트로 버틸 수 있음
            </p>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-4 border border-red-800/40">
            <h4 className="text-xs font-semibold text-red-300 mb-2">단점</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              인력 분산, 학원 AI 스케일업 속도 제한, 7월 현금 아슬아슬, 마케팅팀이 악센트에 묶여 학원 AI 마케팅 한계
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
