'use client';

import { motion } from 'framer-motion';

const decisions = [
  { n: '01', who: '김주연 (CTO)', title: '4/15 내 통합 랜딩페이지 완성', detail: '응답 7필드 + CTA 분기 + 이름·가격 A/B · 4/16 이탈리아 출발', color: 'text-cyan-300', border: 'border-cyan-700/50' },
  { n: '02', who: '유선화 (CMO)', title: '4/22까지 병렬 실행 완료', detail: '계정·콘텐츠1·콘텐츠2·랜딩싱크·광고 5트랙 동시 진행. 랜딩으로 CTA 통일', color: 'text-fuchsia-300', border: 'border-fuchsia-700/50' },
  { n: '03', who: '유재영 (CEO)', title: '대흥 10곳 + 랜딩 2차 전환', detail: '모든 미팅자료 랜딩 URL 포함. 주 2회(화·금) 동주 싱크', color: 'text-emerald-300', border: 'border-emerald-700/50' },
  { n: '04', who: '이동주 (재무/운영)', title: '엔드리스 QA 전환', detail: '일일 리포트 + Critical 슬랙 즉시 에스컬레이션', color: 'text-blue-300', border: 'border-blue-700/50' },
  { n: '05', who: '전 임원진', title: '4월 목표 5대 산출물 확정', detail: '니즈 · 이름 · 요금제 · 기능Top3 · 유저플로우 · 뇌피셜 금지, 데이터 only', color: 'text-amber-300', border: 'border-amber-700/50' },
  { n: '06', who: '전 임원진', title: '5월 목표 승인', detail: '실사용자 배포 + 과금 모델 확정 + 지역 스케일업 시작', color: 'text-rose-300', border: 'border-rose-700/50' },
];

export default function Decisions6Slide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-indigo-900/40 border border-indigo-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-indigo-300 text-sm font-medium tracking-wider">DECISIONS · 04.15 (수)</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">오늘의 6대 결정사항</h2>
          <p className="text-slate-500 text-sm">전 임원진 합의 · 4/16부터 즉시 실행</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {decisions.map((d, i) => (
            <motion.div key={d.n} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }} className={`bg-slate-900/60 rounded-xl p-4 border ${d.border} flex items-start gap-4`}>
              <div className="shrink-0">
                <div className={`w-10 h-10 rounded-lg bg-slate-950/60 border ${d.border} flex items-center justify-center`}>
                  <span className={`text-sm font-mono font-bold ${d.color}`}>{d.n}</span>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className={`text-[10px] uppercase tracking-widest ${d.color} mb-0.5`}>{d.who}</div>
                <div className="text-base text-slate-100 font-semibold mb-1">{d.title}</div>
                <div className="text-xs text-slate-400 leading-snug">{d.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
