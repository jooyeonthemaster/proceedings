'use client';

import { motion } from 'framer-motion';

const checks = [
  { item: '신청 현황 — 7/15 기준 0명, 오늘 몇 명인가?', who: '유선화', status: '현황 공유' },
  { item: '광고 A/B (유머 vs 전문성) — 집행됐나? CTR·전환은?', who: '유선화', status: '집행 확인' },
  { item: 'META 광고 소스 · 편집 · 홍보 문구', who: '유재영 → 유선화', status: '완료 확인' },
  { item: '세미나 PPT 발표 자료 (마감 7/22)', who: '김주연', status: '완료 확인' },
  { item: '매뉴얼북 · 쿠폰 · 장소(강남) · 데코 준비물', who: '이동주·유선화', status: '완료 확인' },
  { item: '신청 링크 — 홈페이지 기능 + 링크트리 연동', who: '이동주·유선화', status: '완료 확인' },
];

export default function SeminarD3Slide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-6">
          <div className="inline-flex items-center bg-amber-900/40 border border-amber-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-amber-300 text-sm font-medium tracking-wider">실행 점검 ② · 세미나 D-3</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">🚨 7/26(일)·27(월) 단체 세미나 — 최종 점검</h2>
          <p className="text-slate-500">목표 일별 20명 · 7/15 기준 신청 0명이었다 — 오늘 숫자부터 확인하고 Go / 축소 / 연기를 정한다</p>
        </motion.div>

        <div className="space-y-2 mb-5">
          {checks.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }} className="bg-slate-900/60 rounded-xl px-5 py-3 border border-slate-700/50 flex items-center gap-4">
              <span className="text-amber-400 text-lg shrink-0">☐</span>
              <div className="flex-1 text-sm text-slate-200">{c.item}</div>
              <div className="text-[11px] text-slate-500 shrink-0 hidden md:block">👤 {c.who}</div>
              <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-amber-900/50 text-amber-300 border border-amber-700/50">{c.status}</span>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-emerald-950/40 rounded-xl p-4 border border-emerald-700/40 text-center">
            <div className="text-emerald-300 font-bold mb-1">Go</div>
            <p className="text-xs text-slate-400 leading-relaxed">신청이 유의미하면 — 남은 3일 홍보 총력전 (오픈채팅·SMS·전화 영업 포함)</p>
          </div>
          <div className="bg-amber-950/40 rounded-xl p-4 border border-amber-700/40 text-center">
            <div className="text-amber-300 font-bold mb-1">축소</div>
            <p className="text-xs text-slate-400 leading-relaxed">소수 신청이면 — 소규모 밀착 데모로 전환해 전원 유료 전환을 노린다</p>
          </div>
          <div className="bg-rose-950/40 rounded-xl p-4 border border-rose-700/40 text-center">
            <div className="text-rose-300 font-bold mb-1">연기</div>
            <p className="text-xs text-slate-400 leading-relaxed">여전히 0이면 — 무리하게 열지 말고 8월 개학 직전으로 재설계 (훅: 무료 자료 배포)</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
