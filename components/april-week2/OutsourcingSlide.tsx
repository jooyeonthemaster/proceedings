'use client';

import { motion } from 'framer-motion';

export default function OutsourcingSlide() {
  const reasons = [
    {
      no: '1',
      title: '마케팅 → 정산 타임라인 너무 김',
      detail:
        '콘텐츠 기획·제작(2~3주) → 메타광고·바이럴(1~2개월) → 문의 유입 → 미팅·견적(1~2주) → 계약(1~2주) → 개발 착수~완료(1~3개월) → 정산(완료 후 30일)',
      conclusion: '최소 4~6개월 후 첫 정산 — 런웨이 안에 현금 안 들어옴',
    },
    {
      no: '2',
      title: '마케팅 인바운드는 소규모(500~1,000만원대) 확률 높음',
      detail:
        '인맥으로 들어오는 건이 오히려 단가 높았던 이유 — 신뢰 기반이라 큰 프로젝트가 들어옴. 마케팅 채널은 가격 비교형 소액 문의 위주.',
      conclusion: '단가 측면에서도 인맥 채널이 우위',
    },
    {
      no: '3',
      title: '마케팅팀 리소스 분산 비용',
      detail:
        '여기에 마케팅팀 리소스를 투입하면 악센트(아이디·온라인)나 학원 AI 지원이 약해짐. 기회비용이 너무 큼.',
      conclusion: '마케팅팀은 학원 AI / 악센트에 집중',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center bg-amber-900/40 border border-amber-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-amber-400 text-sm font-medium tracking-wider">OUTSOURCING DEV</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">
            외주개발 — 인맥 기반 유지 전략
          </h2>
          <p className="text-slate-500 text-sm">단가·타임라인·리소스 — 세 가지 모두 마케팅 투입을 거부</p>
        </motion.div>

        {/* Capacity + Marketing Decision Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-slate-900/60 rounded-2xl p-6 border border-amber-800/40"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <h3 className="text-lg font-semibold text-slate-200">현실적 Capacity</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              500만원짜리 외주 기준 — 이론상 월 최대 <span className="text-amber-300 font-mono">3건</span>
            </p>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-amber-900/40">
              <p className="text-xs text-slate-500 mb-1">학원 AI 개발 병행 시</p>
              <p className="text-2xl font-bold text-amber-400 font-mono">월 1건</p>
              <p className="text-xs text-slate-500 mt-1">현실적 capacity</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-slate-900/60 rounded-2xl p-6 border border-red-800/50"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <h3 className="text-lg font-semibold text-slate-200">마케팅 투입 필요성</h3>
            </div>
            <p className="text-4xl font-black text-red-400 mb-2">불필요</p>
            <p className="text-xs text-slate-500 leading-relaxed">
              세 가지 이유로 외주개발에 마케팅팀 리소스를 별도로 투입하지 않음
            </p>
          </motion.div>
        </div>

        {/* 3 Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.no}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
              className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/60"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-amber-900/60 border border-amber-700/50 flex items-center justify-center text-amber-300 text-xs font-bold">
                  {r.no}
                </span>
                <h4 className="text-sm font-semibold text-slate-200">{r.title}</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-2">{r.detail}</p>
              <p className="text-xs text-amber-300/90 font-medium">{r.conclusion}</p>
            </motion.div>
          ))}
        </div>

        {/* CTO Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-slate-900/40 rounded-2xl p-5 border-l-4 border-amber-600 border-y border-r border-slate-800/40 mb-5"
        >
          <div className="flex items-start gap-3">
            <span className="text-amber-500 text-3xl leading-none">&ldquo;</span>
            <div>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                마케팅 팀의 인력을 배분해서 접근하는 것보다 <span className="text-amber-300 font-semibold">선택과 집중이 필요하다</span>. 콘텐츠 한두 개 올려서 메타광고 돌려줄 수는 있지만, 이걸 하나의 마케팅 프로젝트까지 연결해서 가져갈 비즈니스는 아님. 차라리 영업팀에서 방탈출 카페·잘나가는 카페에 필요한 프로그램 없는지 <span className="text-amber-300 font-semibold">방문 판매식 접근이 효율적</span>.
              </p>
              <p className="text-xs text-slate-500 mt-2">— CTO 김주연</p>
            </div>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="bg-slate-900/60 rounded-2xl p-5 border border-emerald-800/40"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <h3 className="text-base font-semibold text-slate-200">결론 — 인맥 기반 영업 유지</h3>
          </div>
          <ul className="text-xs text-slate-400 space-y-1.5 leading-relaxed">
            <li>• 재영(CEO) 기존 네트워크 + 주희가 포토부스 영업 동선에서 자연스럽게 외주 니즈 캐치</li>
            <li>• 회사 소개서에 외주개발 포트폴리오 페이지 1장 추가 정도</li>
            <li>• <span className="text-red-300">마케팅팀 별도 리소스 투입 없음</span></li>
            <li>• 재무 계획에는 <span className="text-amber-300 font-mono">분기 1건(500만원)</span> 보수적 계상 (5월·8월·11월)</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
