'use client';

import { motion } from 'framer-motion';

export default function MarketingResourceSlide() {
  const priorities = [
    {
      rank: '1',
      name: '악센트 아이디 오프라인 + 온라인',
      detail: '기존 유지, 온라인 월 500만원 목표',
      color: 'rose',
      owner: '선화 + 정연',
    },
    {
      rank: '2',
      name: '학원 AI 브랜딩·인스타 바이럴',
      detail: '선화 담당, 주 1회 콘텐츠 + AB 테스트',
      color: 'emerald',
      owner: '유선화',
    },
    {
      rank: '3',
      name: '포토부스 최소 콘텐츠 지원',
      detail: '릴스 1~2개, 제안서 디자인 보조',
      color: 'violet',
      owner: '선화 (최소)',
    },
  ];

  const ctoCalls = [
    {
      label: '외주개발 마케팅',
      verdict: '불필요',
      reason: '타임라인 너무 길고 영업이 효율적',
      verdictColor: 'red',
    },
    {
      label: '포토부스 마케팅',
      verdict: '최소한만 지원',
      reason: '인스타 릴스 1~2개 + 회사 소개에 포토부스 섹션. 핵심은 주희가 제안서 들고 직접 영업, 마케팅 바이럴 인바운드 기대 X',
      verdictColor: 'amber',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-7"
        >
          <div className="inline-flex items-center bg-blue-900/40 border border-blue-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-sky-300 text-sm font-medium tracking-wider">MARKETING RESOURCE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">
            마케팅팀 리소스 배분 분석
          </h2>
          <p className="text-slate-500 text-sm">유선화(CMO) + 김정연 — 어디에 얼마만큼 쓸 것인가</p>
        </motion.div>

        {/* 3-1 Current State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-slate-900/60 rounded-2xl p-5 border border-blue-800/40 mb-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/50">3-1</span>
            <h3 className="text-base font-semibold text-slate-200">현재 마케팅팀 상태</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="text-slate-200 font-medium">유선화(CMO) + 김정연</span> 마케팅팀. 사실상 대부분 리소스가 <span className="text-rose-300">악센트 아이디 오프라인 + 악센트 온라인</span>에 투입. 영업팀에서 B2B용 마케팅도 요청 중. 마케팅팀/회사 전반적으로 <span className="text-amber-300">사업체 정리 필요 인식</span>.
          </p>
        </motion.div>

        {/* 3-2 Sales Team Request + CTO Call */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="bg-slate-900/60 rounded-2xl p-5 border border-blue-800/40 mb-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/50">3-2</span>
            <h3 className="text-base font-semibold text-slate-200">영업팀(유재영)의 마케팅 지원 요청 → CTO(김주연) 판단</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {ctoCalls.map((c, i) => (
              <div
                key={i}
                className={`bg-slate-800/40 rounded-xl p-4 border ${
                  c.verdictColor === 'red' ? 'border-red-800/50' : 'border-amber-800/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400">{c.label}</span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded ${
                      c.verdictColor === 'red'
                        ? 'bg-red-950/60 text-red-300 border border-red-800/50'
                        : 'bg-amber-950/60 text-amber-300 border border-amber-800/50'
                    }`}
                  >
                    {c.verdict}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{c.reason}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3-3 Priorities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-slate-900/60 rounded-2xl p-5 border border-blue-800/40 mb-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/50">3-3</span>
            <h3 className="text-base font-semibold text-slate-200">마케팅팀 우선순위</h3>
          </div>
          <div className="space-y-2">
            {priorities.map((p, i) => {
              const colorMap: Record<string, string> = {
                rose: 'border-rose-800/50 bg-rose-950/20',
                emerald: 'border-emerald-800/50 bg-emerald-950/20',
                violet: 'border-violet-800/50 bg-violet-950/20',
              };
              const textMap: Record<string, string> = {
                rose: 'text-rose-300',
                emerald: 'text-emerald-300',
                violet: 'text-violet-300',
              };
              return (
                <div
                  key={i}
                  className={`rounded-xl p-3 border ${colorMap[p.color]} flex items-center gap-3`}
                >
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-900/80 border ${colorMap[p.color]} flex items-center justify-center font-bold ${textMap[p.color]}`}
                  >
                    {p.rank}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-semibold ${textMap[p.color]}`}>{p.name}</p>
                    <p className="text-[11px] text-slate-400">{p.detail}</p>
                  </div>
                  <span className="text-[10px] text-slate-500 px-2 py-1 rounded bg-slate-800/60 border border-slate-700/50">
                    {p.owner}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-gradient-to-r from-rose-950/40 via-slate-900/60 to-rose-950/40 rounded-2xl p-4 border border-rose-700/50 text-center"
        >
          <p className="text-sm text-slate-200">
            <span className="text-rose-300 font-bold">김정연은 악센트 아이디 + 악센트 온라인</span>에 집중
          </p>
        </motion.div>
      </div>
    </div>
  );
}
