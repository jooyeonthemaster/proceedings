'use client';

import { motion } from 'framer-motion';

const staff = [
  {
    name: '김정연',
    team: '마케팅팀',
    accent: 'border-rose-700/40',
    label: 'text-rose-300',
    desc: '인스타그램 릴스 기획 등 악센트 아이디의 SNS 마케팅을 담당.',
    tag: 'SNS / 릴스',
  },
  {
    name: '김주희',
    team: '영업팀',
    accent: 'border-violet-700/50',
    label: 'text-violet-300',
    desc: (
      <>
        매장 매니저 + 영업 제안서 작성/관리. 현재{' '}
        <span className="text-slate-100 font-semibold">AI 포토부스 제안서 21페이지 작성 완료</span>,
        회의용 노션 자료도 체계적으로 준비.{' '}
        <span className="text-violet-300">포토부스 B2B 영업 핵심 실행 인력</span>.
      </>
    ),
    tag: '제안서 21p · 노션',
  },
  {
    name: '김제연',
    team: '개발 · 프리랜서',
    accent: 'border-emerald-700/50',
    label: 'text-emerald-300',
    desc: (
      <>
        김주연의 친형, 개발자. <span className="text-slate-100 font-semibold">하드웨어 설계도 가능</span>.
        원래 직원 개념이 아니라 프리랜서로, 네안데르에 웹사이트 개발 외주가 많이 들어왔을 때 김주연이
        처리하기보다 형에게 맡기기 위해 데려옴. 현재{' '}
        <span className="text-amber-300">외주 개발이 들어오지 않아</span>{' '}
        <span className="text-emerald-300 font-semibold">학원 AI 솔루션 개발에 집중</span>.
      </>
    ),
    tag: 'HW 가능',
  },
  {
    name: '류다혜',
    team: '미디어아티스트 · 와우팀',
    accent: 'border-pink-700/40',
    label: 'text-pink-300',
    desc: (
      <>
        악센트 와우 생일 이벤트 담당. 이벤트 진행 전반을 관리하며{' '}
        <span className="text-slate-100 font-semibold">디자이너 조수빈을 핸들링</span>.
      </>
    ),
    tag: '와우 운영',
  },
  {
    name: '조수빈',
    team: '디자이너 · 와우팀',
    accent: 'border-pink-700/40',
    label: 'text-pink-300',
    desc: '생일 이벤트 포스터 디자인을 담당.',
    tag: '와우 디자인',
  },
];

const teams = [
  {
    name: '영업팀',
    members: '유재영 + 김주희',
    color: 'border-indigo-700/50 bg-indigo-950/30',
    label: 'text-indigo-300',
    role: 'B2B 담당 · 포토부스 영업',
  },
  {
    name: '마케팅팀',
    members: '유선화 + 김정연',
    color: 'border-rose-700/40 bg-rose-950/20',
    label: 'text-rose-300',
    role: '악센트 아이디 담당',
  },
  {
    name: '개발팀',
    members: '김주연 + 김제연',
    color: 'border-emerald-700/50 bg-emerald-950/20',
    label: 'text-emerald-300',
    role: '기술 개발 · 학원 AI',
  },
  {
    name: '운영/재무',
    members: '이동주',
    color: 'border-amber-700/50 bg-amber-950/20',
    label: 'text-amber-300',
    role: '매장 운영 · 재무',
  },
  {
    name: '와우팀',
    members: '류다혜 + 조수빈',
    color: 'border-pink-700/40 bg-pink-950/20',
    label: 'text-pink-300',
    role: '생일 이벤트',
  },
];

export default function StaffTeamSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center bg-slate-800/60 border border-slate-700/60 rounded-full px-5 py-1.5 mb-4">
            <span className="text-slate-300 text-sm font-medium tracking-wider">
              STAFF & TEAM STRUCTURE · 1-2 (b)
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">
            직원/프리랜서 <span className="text-slate-500 font-mono">(5명)</span> + 팀 구조
          </h2>
          <p className="text-slate-500">전사 인력 9명 = 임원 4 + 직원/프리랜서 5</p>
        </motion.div>

        {/* Staff Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
          {staff.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
              className={`bg-slate-900/60 rounded-xl p-4 border ${s.accent}`}
            >
              <div className="flex items-start justify-between mb-2 pb-2 border-b border-slate-800/60">
                <div>
                  <div className="text-lg font-bold text-slate-200">{s.name}</div>
                  <div className={`text-[11px] ${s.label} font-medium mt-0.5`}>{s.team}</div>
                </div>
                <span className="text-[10px] text-slate-500 bg-slate-950/60 border border-slate-800/60 rounded-full px-2 py-0.5 shrink-0 ml-2">
                  {s.tag}
                </span>
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">{s.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Team Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-slate-900/40 rounded-2xl p-5 border border-slate-800/60"
        >
          <div className="flex items-baseline justify-between mb-3">
            <div className="text-sm uppercase tracking-widest text-slate-400">팀 구조 요약</div>
            <div className="text-[11px] text-slate-600">5개 팀 · 임원 + 직원 통합 구성</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5">
            {teams.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.85 + i * 0.06, duration: 0.4 }}
                className={`rounded-lg border ${t.color} p-3`}
              >
                <div className={`text-sm font-bold ${t.label}`}>{t.name}</div>
                <div className="text-[11px] text-slate-300 mt-1 leading-snug">{t.members}</div>
                <div className="text-[10px] text-slate-500 mt-1.5 leading-snug">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
