'use client';

import { motion } from 'framer-motion';

const sections = [
  { n: '01', title: '히어로', purpose: '서비스 이름 A/B × "우리 구에 딱 3자리" 프레이밍', note: '후보 5개 랜덤 노출 · 분기 기록' },
  { n: '02', title: '데모 영상', purpose: '지문 업로드 → AI 시험지 생성 20초 영상', note: '4/15 17-19시 녹화 · 선화 전달' },
  { n: '03', title: '기능 5종 상세', purpose: 'ERP / AI지문분석 / AI문제생성 / 자동조판 / 학습리포트', note: '각 섹션 스크롤 깊이 측정' },
  { n: '04', title: '가격 3안 비교', purpose: '독점 50만 / 크레딧 / 하이브리드 클릭률 측정', note: '어느 안에 호버·클릭 집중?' },
  { n: '05', title: 'CTA 분기', purpose: '[무료 체험] | [사전 예약(50만)] 동시 노출', note: '클릭 비율 = 가격 저항 지점' },
  { n: '06', title: '응답 폼', purpose: '학원명·지역·규모·과목·연락처·희망일·기능', note: '필수필드 최소화 · 체크박스 우선' },
];

export default function LandingStructureSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-cyan-900/40 border border-cyan-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-cyan-300 text-sm font-medium tracking-wider">LANDING PAGE · 6 SECTIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">랜딩페이지 6섹션 구조</h2>
          <p className="text-slate-500 text-sm">4/15 확정 · 4/16~19 구축 · Next.js + Tailwind</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sections.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }} className="bg-slate-900/60 rounded-xl p-4 border border-cyan-900/40 flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-cyan-950/60 border border-cyan-700/50 flex items-center justify-center">
                <span className="text-sm font-mono font-bold text-cyan-300">{s.n}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-base font-bold text-slate-100 mb-1">{s.title}</div>
                <div className="text-xs text-slate-300 leading-snug mb-1.5">{s.purpose}</div>
                <div className="text-[10px] uppercase tracking-wider text-cyan-400/70">{s.note}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
