'use client';

import { motion } from 'framer-motion';

const meetingInfo = [
  { label: '일시', value: '2026.04.14 (화)' },
  { label: '참석자', value: '영업 / 마케팅 / 개발 / 운영' },
  { label: '자료', value: '회의용_1차.pdf (21p)' },
  { label: '목적', value: '개발 범위·리드타임 + 컨셉 + 운영 변수' },
];

const agenda = [
  { time: '5분', topic: '제안서 컨셉/타겟 공유', owner: '영업/주희' },
  { time: '15분', topic: '기술 가능 범위 확정, 스펙·기능', owner: '개발팀' },
  { time: '15분', topic: '컨셉/마케팅 방향 브레인스토밍', owner: '마케팅팀' },
  { time: '10분', topic: '운영·현장 변수 점검', owner: '운영팀' },
  { time: '10분', topic: '활용사례(사주 포토부스) 방향성', owner: '전체' },
  { time: '5분', topic: '다음 액션·담당자 정리', owner: '영업' },
];

const homeworks = [
  {
    id: 1,
    title: '축제 영업 전략 잡기',
    tag: 'FESTIVAL SALES',
    items: [
      '타겟 축제 시장 우선순위: 지자체 / 대학축제 / 기업 페스티벌 / 박람회',
      '시즌 영업 캘린더 (봄·가을 집중, 비수기 전시·웨딩·기업행사 대안?)',
      '1차 콜드콜 리스트 — 우선 발주처 10곳 너댓 선정',
      '견적 패키지: 기본/스탠다드/프리미엄 (MVP 라인 확정 후)',
    ],
  },
  {
    id: 2,
    title: '세일즈 무기 준비',
    tag: 'SALES KIT',
    items: [
      '마케팅 효과 리포트 템플릿 (방문자수·SNS 노출·해시태그 도달·재차율)',
      '레퍼런스 영상·사진 확보 (첫 행사 후 케이스 영상 제작)',
      '지자체 입찰용 지역 특화 컨셉 (지역명소·특산물·랜드마크)',
      '회사 소개 자료에 AI 포토부스 페이지 디벨롭',
      '발주처 마케팅 채널(SNS·LED·현수막) 활용 협상',
      '첫 행사 때 무조건 수집할 데이터 정의 (다음 영업에 재활용)',
    ],
  },
  {
    id: 3,
    title: '내부 결정 사항',
    tag: 'INTERNAL DECISION',
    items: [
      '입찰 vs 직거래 — 어디 더 집중할지',
      '장비 임대 vs 판매 — 기본 모델 결정',
      '포토부스 전담 제안서 vs 회사 소개서 한 파트',
    ],
  },
];

export default function PhotoboothMeetingPrepSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,70,239,0.06),transparent_60%)]" />
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center bg-violet-900/40 border border-violet-700/40 rounded-full px-5 py-1.5 mb-3">
            <span className="text-violet-300 text-sm font-medium tracking-wider">SECTION 2-2 · MEETING PREP</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
            화요일 포토부스 회의 준비
          </h2>
          <p className="text-slate-500">영업팀 사전 숙제 · 1HOUR AGENDA</p>
        </motion.div>

        {/* Meeting Info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4"
        >
          {meetingInfo.map((m) => (
            <div key={m.label} className="bg-slate-900/60 border border-violet-900/40 rounded-xl px-3 py-2">
              <div className="text-[9px] text-violet-300 tracking-[0.18em] mb-0.5">{m.label}</div>
              <div className="text-xs font-semibold text-slate-200">{m.value}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Agenda Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="lg:col-span-2 bg-slate-900/60 rounded-2xl p-4 border border-violet-800/40"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-slate-100">1시간 회의 구조</h3>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border bg-violet-900/40 text-violet-300 border-violet-700/40">
                AGENDA
              </span>
            </div>
            <ol className="space-y-2">
              {agenda.map((a, i) => (
                <li key={i} className="flex items-start gap-2 bg-slate-950/50 rounded-lg px-2.5 py-1.5 border border-slate-800/50">
                  <span className="text-violet-400 font-mono tabular-nums text-[10px] w-6 shrink-0 mt-0.5">
                    0{i + 1}
                  </span>
                  <span className="text-violet-300 font-mono tabular-nums text-[10px] w-10 shrink-0 mt-0.5">
                    {a.time}
                  </span>
                  <div className="flex-1">
                    <div className="text-xs text-slate-200 leading-snug">{a.topic}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{a.owner}</div>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Homework — 3 blocks */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full border bg-fuchsia-900/40 text-fuchsia-300 border-fuchsia-700/40">
                SALES TEAM HOMEWORK
              </span>
              <h3 className="text-sm font-semibold text-slate-200">영업팀 사전 숙제</h3>
            </div>
            {homeworks.map((h, i) => (
              <motion.div
                key={h.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.1, duration: 0.5 }}
                className="bg-slate-900/60 rounded-2xl p-3.5 border border-fuchsia-900/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-fuchsia-400 font-mono tabular-nums text-xs">0{h.id}</span>
                    <h4 className="text-sm font-semibold text-slate-100">{h.title}</h4>
                  </div>
                  <span className="text-[9px] font-medium px-1.5 py-0.5 rounded border bg-fuchsia-900/30 text-fuchsia-300 border-fuchsia-700/30 tracking-wider">
                    {h.tag}
                  </span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-1">
                  {h.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-1.5 text-[11px] text-slate-300 leading-snug">
                      <span className="text-fuchsia-500 mt-1 shrink-0 h-1 w-1 rounded-full bg-fuchsia-400" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
