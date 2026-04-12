'use client';

import { motion } from 'framer-motion';

export default function ScenarioCSlide() {
  const finance = [
    { m: '4월', off: 1500, wow: 1000, on: 50, ai: 0, ph: 0, out: 0, rev: 2550, fix: 4500, pl: -1950, cash: 8000 },
    { m: '5월', off: 1500, wow: 1000, on: 100, ai: 0, ph: 0, out: 1000, rev: 3600, fix: 4500, pl: -900, cash: 7100 },
    { m: '6월', off: 1500, wow: 1000, on: 150, ai: 0, ph: 300, out: 1000, rev: 3950, fix: 4500, pl: -550, cash: 6550 },
    { m: '7월', off: 1500, wow: 1000, on: 200, ai: 100, ph: 500, out: 500, rev: 3800, fix: 4500, pl: -700, cash: 5850 },
    { m: '8월', off: 1500, wow: 1000, on: 250, ai: 200, ph: 500, out: 1000, rev: 4450, fix: 4500, pl: -50, cash: 5800 },
    { m: '9월', off: 1500, wow: 1000, on: 300, ai: 300, ph: 500, out: 500, rev: 4100, fix: 4500, pl: -400, cash: 5400 },
    { m: '10월', off: 1500, wow: 1000, on: 350, ai: 500, ph: 300, out: 1000, rev: 4650, fix: 4500, pl: 150, cash: 5550 },
    { m: '11월', off: 1500, wow: 1000, on: 400, ai: 700, ph: 300, out: 500, rev: 4400, fix: 4500, pl: -100, cash: 5450 },
    { m: '12월', off: 1500, wow: 1000, on: 450, ai: 900, ph: 200, out: 1000, rev: 5050, fix: 4500, pl: 550, cash: 6000 },
  ];

  const fmt = (n: number) => n.toLocaleString();
  const fmtSign = (n: number) => (n >= 0 ? `+${n.toLocaleString()}` : n.toLocaleString());

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-amber-900/40 border border-amber-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-amber-300 text-sm font-medium tracking-wider">SCENARIO C</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-800/60 text-amber-200 border border-amber-600/50">생존 모드 — 비추</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">
            Scenario C — 캐시 우선 (포토부스 + 외주 극대화)
          </h2>
          <p className="text-amber-300/80 text-sm">
            단기 현금 확보에 집중, 학원 AI는 서브로
          </p>
        </motion.div>

        {/* Strategy detail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-slate-900/60 rounded-xl p-4 border border-amber-800/40 mb-5"
        >
          <p className="text-xs text-slate-300 leading-relaxed">
            <span className="text-amber-300">김제연 리소스를 포토부스 개발 + 외주 월 2~3건으로 최대 활용</span>. 학원 AI는 주연이 혼자 느리게 개발. 악센트도 유지. 단기 현금 흐름은 가장 안정적이지만, 학원 AI 스케일업은 포기하는 시나리오.
          </p>
        </motion.div>

        {/* Approach blocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5"
        >
          <div className="bg-slate-900/60 rounded-xl p-4 border border-amber-800/40">
            <p className="text-[10px] text-amber-400 mb-1">개발 리소스</p>
            <p className="text-sm font-semibold text-slate-200 mb-1">김제연: 포토부스 + 외주</p>
            <p className="text-[10px] text-slate-500">월 2~3건 외주 + 포토부스 상품화</p>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-4 border border-amber-800/40">
            <p className="text-[10px] text-amber-400 mb-1">학원 AI</p>
            <p className="text-sm font-semibold text-slate-200 mb-1">주연 단독 개발</p>
            <p className="text-[10px] text-slate-500">속도 매우 느림 / 12월 MRR 900만원</p>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-4 border border-amber-800/40">
            <p className="text-[10px] text-amber-400 mb-1">악센트</p>
            <p className="text-sm font-semibold text-slate-200 mb-1">현행 유지</p>
            <p className="text-[10px] text-slate-500">고정비 4,500만원 그대로</p>
          </div>
        </motion.div>

        {/* Finance Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mb-3"
        >
          <h3 className="text-sm font-semibold text-amber-300 mb-2">월별 재무 (4~12월, 단위 만원)</h3>
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
                    <td className="px-2 py-1.5 text-right text-slate-300">{fmt(f.ai)}</td>
                    <td className="px-2 py-1.5 text-right text-amber-300">{fmt(f.ph)}</td>
                    <td className="px-2 py-1.5 text-right text-amber-300">{fmt(f.out)}</td>
                    <td className="px-2 py-1.5 text-right text-slate-200 font-semibold">{fmt(f.rev)}</td>
                    <td className="px-2 py-1.5 text-right text-slate-400">{fmt(f.fix)}</td>
                    <td className={`px-2 py-1.5 text-right font-semibold ${f.pl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>{fmtSign(f.pl)}</td>
                    <td className="px-2 py-1.5 text-right text-slate-200">{fmt(f.cash)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-slate-500 mt-1.5">* 외주 월 1,000만원은 월 2건 가정 — 현실적으로 보장 어려움</p>
        </motion.div>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4"
        >
          <div className="bg-slate-900/60 rounded-xl p-3 border border-amber-800/40 text-center">
            <p className="text-[10px] text-slate-500 mb-1">손익분기</p>
            <p className="text-lg font-bold text-amber-300">10월 (겨우)</p>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-emerald-800/40 text-center">
            <p className="text-[10px] text-slate-500 mb-1">최저 현금</p>
            <p className="text-lg font-bold text-emerald-300 font-mono">9월 5,400</p>
            <p className="text-[9px] text-emerald-400/80">상대적 안정</p>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-amber-800/40 text-center">
            <p className="text-[10px] text-slate-500 mb-1">연말 현금</p>
            <p className="text-lg font-bold text-amber-300 font-mono">6,000</p>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-3 border border-red-800/40 text-center">
            <p className="text-[10px] text-slate-500 mb-1">12월 학원AI MRR</p>
            <p className="text-lg font-bold text-red-300 font-mono">900</p>
            <p className="text-[9px] text-red-400/80">A/B/D의 1/4 수준</p>
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
            <h4 className="text-xs font-semibold text-emerald-300 mb-2">장점</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              단기 현금 가장 안정적. 런웨이 길어져 생존 확률 높음.
            </p>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-4 border border-red-800/40">
            <h4 className="text-xs font-semibold text-red-300 mb-2">단점</h4>
            <ul className="text-[11px] text-slate-400 space-y-1 leading-relaxed">
              <li>• 학원 AI 스케일업 1년 지연</li>
              <li>• MRR 구조 못 만들어 2027년에도 같은 적자 구조 반복</li>
              <li>• 외주개발 월 2~3건은 현실적으로 보장되지 않음</li>
              <li>• 투자유치 스토리 없음</li>
            </ul>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-gradient-to-r from-red-950/40 via-slate-900/60 to-red-950/40 rounded-xl p-3 border border-red-700/50 text-center"
        >
          <p className="text-sm text-red-200 font-semibold">
            &ldquo;생존은 하지만 성장 못 함. 비추.&rdquo;
          </p>
        </motion.div>
      </div>
    </div>
  );
}
