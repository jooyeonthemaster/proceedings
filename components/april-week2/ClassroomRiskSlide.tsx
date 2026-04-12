'use client';

import { motion } from 'framer-motion';

const risks = [
  {
    id: 1,
    title: '학원 원장 이탈',
    body:
      '동네 학원 원장들은 3개월 써보고 효과 없으면 바로 끊는다. 온보딩 후 첫 시험 기간까지 밀착 지원해서 "이거 없으면 시험지 못 만들어요" 수준의 의존도를 만들어야 한다.',
    tag: 'CHURN',
  },
  {
    id: 2,
    title: '경쟁',
    body:
      'AI 시험 생성 자체는 진입장벽이 높지 않아서 대형 에듀테크가 비슷한 기능을 만들 수 있다. 차별화는 "동네 학원 현장에 맞춘 UX + 내신 교과서별 특화 데이터"로 가야 한다.',
    tag: 'COMPETITION',
  },
];

const baseRows = [
  { month: '5월', new: 3, total: 3, mrr: 150, cum: 150 },
  { month: '6월', new: 5, total: 8, mrr: 400, cum: 550 },
  { month: '7월', new: 7, total: 15, mrr: 750, cum: '1,300' },
  { month: '8월', new: 10, total: 25, mrr: '1,250', cum: '2,550' },
  { month: '9월', new: 10, total: 35, mrr: '1,750', cum: '4,300' },
  { month: '10월', new: 10, total: 45, mrr: '2,250', cum: '6,550' },
  { month: '11월', new: 13, total: 58, mrr: '2,900', cum: '9,450' },
  { month: '12월', new: 12, total: 70, mrr: '3,500', cum: '12,950' },
];

const worstRows = [
  { month: '5월', total: 2, mrr: 100 },
  { month: '6월', total: 5, mrr: 250 },
  { month: '7월', total: 8, mrr: 400 },
  { month: '8월', total: 12, mrr: 600 },
  { month: '9월', total: 18, mrr: 900 },
  { month: '10월', total: 23, mrr: '1,150' },
  { month: '11월', total: 28, mrr: '1,400' },
  { month: '12월', total: 35, mrr: '1,750' },
];

export default function ClassroomRiskSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.06),transparent_60%)]" />
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center bg-emerald-900/40 border border-emerald-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-emerald-400 text-sm font-medium tracking-wider">SECTION 2-1 · RISK & ROADMAP</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
            핵심 리스크 + 2026 로드맵
          </h2>
          <p className="text-slate-500">2 RISKS · BASE & WORST CASE</p>
        </motion.div>

        {/* Risks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
          {risks.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
              className="bg-slate-900/60 rounded-2xl p-4 border border-amber-800/40"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-slate-100">{r.title}</h3>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border bg-amber-900/40 text-amber-300 border-amber-700/40">
                  {r.tag}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{r.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Base Scenario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border bg-emerald-900/40 text-emerald-300 border-emerald-700/40">
                BASE
              </span>
              <h3 className="text-sm font-semibold text-slate-200">보수적 시나리오 (5월~12월)</h3>
            </div>
            <div className="overflow-x-auto rounded-xl border border-emerald-900/40">
              <table className="w-full text-xs">
                <thead className="bg-emerald-950/40 text-emerald-300/80">
                  <tr>
                    <th className="px-2 py-2 text-left font-medium">월</th>
                    <th className="px-2 py-2 text-right font-medium">신규</th>
                    <th className="px-2 py-2 text-right font-medium">누적</th>
                    <th className="px-2 py-2 text-right font-medium">월매출(만)</th>
                    <th className="px-2 py-2 text-right font-medium">누적(만)</th>
                  </tr>
                </thead>
                <tbody>
                  {baseRows.map((row, i) => (
                    <tr
                      key={row.month}
                      className={`border-t border-slate-800/40 ${
                        i === baseRows.length - 1 ? 'bg-emerald-950/30' : ''
                      }`}
                    >
                      <td className="px-2 py-1.5 text-slate-300">{row.month}</td>
                      <td className="px-2 py-1.5 text-right text-slate-400 font-mono tabular-nums">{row.new}</td>
                      <td className="px-2 py-1.5 text-right text-slate-200 font-mono tabular-nums font-semibold">{row.total}</td>
                      <td className="px-2 py-1.5 text-right text-emerald-300 font-mono tabular-nums">{row.mrr}</td>
                      <td className="px-2 py-1.5 text-right text-emerald-200 font-mono tabular-nums font-semibold">{row.cum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
              낙관: 12월 <span className="text-emerald-400 font-mono">75개</span> · MRR{' '}
              <span className="text-emerald-400 font-mono">3,750만</span> · 누적{' '}
              <span className="text-emerald-400 font-mono">1.485억</span> 가능. 보수적으로 70개·3,500만이 현실.
            </p>
          </motion.div>

          {/* Worst Scenario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border bg-red-900/40 text-red-300 border-red-700/40">
                WORST
              </span>
              <h3 className="text-sm font-semibold text-slate-200">최악 시나리오 (계획의 50% 달성)</h3>
            </div>
            <div className="overflow-x-auto rounded-xl border border-red-900/40">
              <table className="w-full text-xs">
                <thead className="bg-red-950/40 text-red-300/80">
                  <tr>
                    <th className="px-2 py-2 text-left font-medium">월</th>
                    <th className="px-2 py-2 text-right font-medium">누적 학원</th>
                    <th className="px-2 py-2 text-right font-medium">월 매출(만원)</th>
                  </tr>
                </thead>
                <tbody>
                  {worstRows.map((row, i) => (
                    <tr
                      key={row.month}
                      className={`border-t border-slate-800/40 ${
                        i === worstRows.length - 1 ? 'bg-red-950/30' : ''
                      }`}
                    >
                      <td className="px-2 py-1.5 text-slate-300">{row.month}</td>
                      <td className="px-2 py-1.5 text-right text-slate-200 font-mono tabular-nums font-semibold">{row.total}</td>
                      <td className="px-2 py-1.5 text-right text-red-300 font-mono tabular-nums">{row.mrr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
              최악에도 12월 MRR <span className="text-red-300 font-mono">1,750만원</span>. 고정비가{' '}
              <span className="text-amber-300 font-mono">3,000만원대</span>로 줄어든 상태라면 충분히 의미 있는 매출원.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
