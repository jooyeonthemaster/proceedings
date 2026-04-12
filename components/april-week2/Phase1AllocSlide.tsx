'use client';

import { motion } from 'framer-motion';

type PersonAlloc = {
  initial: string;
  name: string;
  role: string;
  borderColor: string;
  badgeColor: string;
  schedule: { day: string; task: string }[];
  note?: string;
};

const people: PersonAlloc[] = [
  {
    initial: '주연',
    name: '김주연',
    role: 'CTO',
    borderColor: 'border-emerald-800/50',
    badgeColor: 'bg-emerald-900/30 text-emerald-300',
    schedule: [
      { day: '월~수', task: '학원 AI 핵심 로직 개발 (AI 시험 생성 엔진, 내신 지문 분석 모듈)' },
      { day: '목', task: '악센트 서비스 유지보수' },
      { day: '금', task: '학원 AI 개발 + 주간 리뷰' },
    ],
    note: '포토부스는 김제연에게 방향만 잡아주는 기술 자문 수준',
  },
  {
    initial: '제연',
    name: '김제연',
    role: '개발',
    borderColor: 'border-emerald-800/50',
    badgeColor: 'bg-emerald-900/30 text-emerald-300',
    schedule: [
      { day: '월~수', task: '학원 AI 프론트엔드/백엔드 개발 (주연과 분업)' },
      { day: '목', task: '외주개발 또는 포토부스 (학원 AI 일정 안 밀리는 선에서)' },
      { day: '금', task: '학원 AI QA' },
    ],
    note: '핵심 원칙: 외주개발이 들어온다고 해서 학원 AI 개발 딜레이되면 절대 안 됨',
  },
  {
    initial: '재영',
    name: '유재영',
    role: 'CEO/영업',
    borderColor: 'border-amber-800/50',
    badgeColor: 'bg-amber-900/30 text-amber-300',
    schedule: [
      { day: '월~수', task: '학원 밀집 지역 직접 방문 영업 (대치, 목동, 중계 우선)' },
      { day: '목', task: '포토부스 미팅 동행 (주희가 잡아온 큰 건)' },
      { day: '금', task: '파이프라인 정리 + 기존 네트워크 영업' },
    ],
    note: '학원 영업에 주 3일 이상 투입',
  },
  {
    initial: '주희',
    name: '김주희',
    role: '영업',
    borderColor: 'border-violet-800/50',
    badgeColor: 'bg-violet-900/30 text-violet-300',
    schedule: [
      { day: '월~화', task: '포토부스 콜드콜 (하루 10건 목표)' },
      { day: '수~목', task: '현장 미팅 / 방문' },
      { day: '금', task: '리스트 정리 + 제안서 수정 + 다음 주 콜 리스트 준비' },
    ],
    note: '포토부스 영업하면서 외주개발 니즈 캐치 (크로스셀) · 학원 영업 시 재영 동행 지원',
  },
  {
    initial: '선화',
    name: '유선화',
    role: 'CMO',
    borderColor: 'border-sky-800/50',
    badgeColor: 'bg-sky-900/30 text-sky-300',
    schedule: [
      { day: '월~화', task: '악센트 아이디/온라인 마케팅 (기존)' },
      { day: '수', task: '학원 AI 브랜딩 콘텐츠 제작 (주 1회) + AB 테스트' },
      { day: '목', task: '악센트 온라인 광고 운영' },
      { day: '금', task: 'AB 테스트 결과 분석' },
    ],
  },
  {
    initial: '정연',
    name: '김정연',
    role: '마케팅',
    borderColor: 'border-sky-800/50',
    badgeColor: 'bg-sky-900/30 text-sky-300',
    schedule: [
      { day: '월~목', task: '악센트 아이디 릴스 기획·제작 + 악센트 온라인 콘텐츠' },
      { day: '금', task: '학원 커뮤니티/네이버 카페 포스팅 (월 2~3건)' },
    ],
  },
  {
    initial: '동주',
    name: '이동주',
    role: '재무/운영',
    borderColor: 'border-rose-800/50',
    badgeColor: 'bg-rose-900/30 text-rose-300',
    schedule: [
      { day: '상시', task: '기존 재무회계 업무 유지' },
      { day: '상시', task: '학원 AI 크레딧 과금 체계 설계 지원' },
      { day: '상시', task: '포토부스 견적 패키지 원가 계산' },
      { day: '행사', task: 'B2B 행사 수주 시 현장 운영 총괄 (설치, 소모품, 트러블슈팅)' },
    ],
  },
  {
    initial: '와우',
    name: '류다혜 + 조수빈',
    role: '악센트 와우',
    borderColor: 'border-slate-700/60',
    badgeColor: 'bg-slate-800/50 text-slate-300',
    schedule: [
      { day: '상시', task: '악센트 와우 기존대로 유지' },
    ],
  },
];

export default function Phase1AllocSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(63,63,70,0.18)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(15,23,42,0.4)_0%,transparent_60%)]" />

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center bg-zinc-900/60 border border-zinc-700/50 rounded-full px-5 py-1.5 mb-4">
            <span className="text-zinc-300 text-xs font-medium tracking-[0.2em]">PHASE 1 · 5~7월 검증기</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
            Phase 1: 5~7월 (검증기) — 각자 맡은 거 제대로
          </h2>
          <p className="text-slate-500 text-sm">8명 체제 · 요일별 업무 배치</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-slate-900/70 border border-zinc-700/50 rounded-2xl p-5 mb-5"
        >
          <div className="flex items-start gap-3">
            <div className="text-zinc-400 text-xs font-bold tracking-wider mt-1 shrink-0">PRINCIPLE</div>
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-zinc-100 font-semibold">각자 맡은 거 제대로 하기.</span> 마케팅팀이 학원 AI에 크게 기여할 수 있는 게 별로 없다 — 학원 영업은 결국 재영이가 직접 발로 뛰면서 원장 만나야 되는 거고, 인스타 콘텐츠 몇 개 올린다고 동네 학원 원장이 <span className="text-zinc-200">"아 이거 써야겠다"</span> 하는 구조가 아니다.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {people.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
              className={`bg-slate-900/70 rounded-xl p-4 border ${p.borderColor}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-9 h-9 rounded-lg ${p.badgeColor} flex items-center justify-center font-bold text-xs`}>
                  {p.initial}
                </div>
                <div>
                  <div className="text-slate-100 text-sm font-bold leading-tight">{p.name}</div>
                  <div className="text-slate-500 text-[11px]">{p.role}</div>
                </div>
              </div>

              <div className="space-y-1.5">
                {p.schedule.map((s, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <div className="text-[10px] font-mono text-zinc-400 bg-zinc-900/60 border border-zinc-800/60 rounded px-1.5 py-0.5 shrink-0 mt-0.5 min-w-[42px] text-center">
                      {s.day}
                    </div>
                    <div className="text-slate-300 text-[11px] leading-snug">{s.task}</div>
                  </div>
                ))}
              </div>

              {p.note && (
                <div className="mt-3 pt-2 border-t border-zinc-800/60">
                  <p className="text-slate-500 text-[10px] leading-snug italic">{p.note}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-4 text-center text-slate-600 text-[11px]"
        >
          PHASE 1 · 8명 가동 · 학원 AI MVP 완성과 첫 고객 온보딩이 절대 우선
        </motion.div>
      </div>
    </div>
  );
}
