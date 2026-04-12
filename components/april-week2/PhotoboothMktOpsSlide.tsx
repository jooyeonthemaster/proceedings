'use client';

import { motion } from 'framer-motion';

const mktQuestions = [
  {
    id: 1,
    title: 'AI 스타일 변환 — 자극적 컨셉',
    page: 'p7',
    groups: [
      { label: '시대 여행', items: ['조선시대 초상화풍', '1980년대 졸업사진풍', '미래 사이버펑크풍'] },
      { label: 'K-콘텐츠 후킹', items: ['웹툰풍', 'K-드라마 포스터풍', '아이돌 데뷔앨범 커버풍'] },
      { label: '계절·지역 특화', items: ['벚꽃엔딩풍', '한지·민화풍', '지역 특산물 캐릭터 합성'] },
      { label: '밈/SNS 바이럴', items: ['픽사풍', '지브리풍', '페이크 다큐멘터리풍 (저작권)'] },
    ],
    ask: '"최근 SNS에서 가장 잘 먹히는 사진 변환 트렌드? 우리가 빠르게 따라잡을 수 있는 건?"',
  },
  {
    id: 2,
    title: 'AI 배경 합성 컨셉',
    page: 'p8',
    list: [
      '국내 명소 합성 (한라산·경복궁·해운대) — 지자체 입찰 대응',
      '가상 콜라보 배경 (브랜드 굿즈샵 / K팝 콘서트 무대 / 영화 포스터 속)',
      '계절·이벤트 패키지 (할로윈·크리스마스·축제 기간별 자동 세트)',
      '밈 배경 (우주·만화 속 한 장면·게임 속 캐릭터 옆)',
    ],
  },
  {
    id: 3,
    title: '축제 타겟 마케팅 — 같이 풀 고민',
    list: [
      '사전 홍보: 발주처 SNS "이번 축제에 AI 포토부스 등장" 티저 → 주최측 채널 활용',
      '사후 콘텐츠: 행사 종료 후 베스트 컷 모음 영상 → 다음 영업 자료 재활용',
      '인플루언서 초청: 지역 인플루언서·유튜버 사전 초대 → 후기 콘텐츠 확보',
    ],
  },
];

const opsQuestions = [
  {
    id: 1,
    title: '외관·설치',
    page: 'p4, p11',
    items: [
      '외관 래핑 제작 리드타임 (시안 픽스 D-며칠)',
      '부스 1대 설치 인원·시간',
      '차량 운반 사이즈·무게',
      '운영 인력 1대당 (안내·트러블슈팅)',
    ],
  },
  {
    id: 2,
    title: '운영 프로세스',
    page: 'p13, p15',
    items: [
      '소모품 관리 (인쇄용지·잉크·리본) 행사당 소진량·발주 리드타임',
      '장비 임대 vs 판매 마진 모델',
    ],
  },
  {
    id: 3,
    title: '활용사례 — 사주 포토부스',
    page: 'p18-20',
    items: [
      '사주 분석 1분 이내 가능 여부 (현장 처리량 직결)',
      '영수증 + AI 포토 동시 출력 시 인쇄기 2대?',
    ],
  },
];

const useCases = [
  { id: 1, name: '사주 포토부스', cat: '운명/엔터테인먼트' },
  { id: 2, name: 'MBTI/성향 진단', cat: '자기탐색' },
  { id: 3, name: '결혼·돌잔치 영상 굿즈', cat: '개인 행사' },
  { id: 4, name: '브랜드 콜라보', cat: 'B2B 마케팅' },
  { id: 5, name: '지역축제 특화', cat: '지자체 입찰' },
  { id: 6, name: '국제행사·전시', cat: '다국어·외국인 타겟' },
];

const checklistItems = [
  '팩트체크 항목 → 담당자 / 데드라인',
  '새 컨셉 아이디어 정리',
  '활용사례 → 발주처 니즈 매핑 (영업)',
  '다음 회의 일정 / 제안서 데드라인',
  'MVP 기능 / 확장 기능 / MVP 완료 시점',
];

export default function PhotoboothMktOpsSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-gray-950 flex items-center justify-center p-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,70,239,0.06),transparent_60%)]" />
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center bg-violet-900/40 border border-violet-700/40 rounded-full px-5 py-1 mb-2">
            <span className="text-violet-300 text-xs font-medium tracking-wider">SECTION 2-2 · MKT / OPS / USE CASES</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-1">
            마케팅 / 운영팀 질문 + 활용사례 카테고리
          </h2>
          <p className="text-slate-500 text-xs">CONCEPTS · OPS · 6 USE CASES · CLOSING CHECKLIST</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* Marketing — left 7 cols */}
          <div className="lg:col-span-7 space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-medium px-2 py-0.5 rounded-full border bg-fuchsia-900/40 text-fuchsia-300 border-fuchsia-700/40">
                MARKETING TEAM
              </span>
              <h3 className="text-xs font-semibold text-slate-200">마케팅팀 질문 3</h3>
            </div>

            {/* Q1 - Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="bg-slate-900/60 rounded-xl p-3 border border-fuchsia-900/40"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-fuchsia-400 font-mono tabular-nums text-[10px]">01</span>
                  <h4 className="text-xs font-semibold text-slate-100">{mktQuestions[0].title}</h4>
                </div>
                <span className="text-[8px] font-mono px-1.5 py-0.5 rounded border bg-slate-800/60 text-fuchsia-300 border-slate-700/60">
                  [{mktQuestions[0].page}]
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 mb-2">
                {mktQuestions[0].groups!.map((g) => (
                  <div key={g.label} className="bg-slate-950/50 rounded-md px-2 py-1.5 border border-slate-800/50">
                    <div className="text-[9px] text-fuchsia-300 mb-0.5 font-medium">{g.label}</div>
                    <div className="text-[10px] text-slate-300 leading-snug">
                      {g.items.join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-fuchsia-300 italic leading-snug border-t border-slate-800/50 pt-1.5">
                → {mktQuestions[0].ask}
              </div>
            </motion.div>

            {/* Q2 - Background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.5 }}
              className="bg-slate-900/60 rounded-xl p-3 border border-fuchsia-900/40"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-fuchsia-400 font-mono tabular-nums text-[10px]">02</span>
                  <h4 className="text-xs font-semibold text-slate-100">{mktQuestions[1].title}</h4>
                </div>
                <span className="text-[8px] font-mono px-1.5 py-0.5 rounded border bg-slate-800/60 text-fuchsia-300 border-slate-700/60">
                  [{mktQuestions[1].page}]
                </span>
              </div>
              <ul className="space-y-1">
                {mktQuestions[1].list!.map((it, j) => (
                  <li key={j} className="flex items-start gap-1.5 text-[10.5px] text-slate-300 leading-snug">
                    <span className="text-fuchsia-500 mt-1 shrink-0 h-1 w-1 rounded-full bg-fuchsia-400" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Q3 - Festival mkt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-slate-900/60 rounded-xl p-3 border border-fuchsia-900/40"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-fuchsia-400 font-mono tabular-nums text-[10px]">03</span>
                <h4 className="text-xs font-semibold text-slate-100">{mktQuestions[2].title}</h4>
              </div>
              <ul className="space-y-1">
                {mktQuestions[2].list!.map((it, j) => (
                  <li key={j} className="flex items-start gap-1.5 text-[10.5px] text-slate-300 leading-snug">
                    <span className="text-fuchsia-500 mt-1 shrink-0 h-1 w-1 rounded-full bg-fuchsia-400" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right column 5 - Ops + Use cases */}
          <div className="lg:col-span-5 space-y-2.5">
            {/* Ops */}
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[9px] font-medium px-2 py-0.5 rounded-full border bg-amber-900/40 text-amber-300 border-amber-700/40">
                  OPS TEAM
                </span>
                <h3 className="text-xs font-semibold text-slate-200">운영팀 질문 (추후에 해도 될듯)</h3>
              </div>
              <div className="space-y-1.5">
                {opsQuestions.map((q, i) => (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                    className="bg-slate-900/60 rounded-lg p-2 border border-amber-900/30"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-amber-400 font-mono tabular-nums text-[9px]">0{q.id}</span>
                        <h5 className="text-[11px] font-semibold text-slate-200">{q.title}</h5>
                      </div>
                      <span className="text-[8px] font-mono px-1 py-0.5 rounded border bg-slate-800/60 text-amber-300 border-slate-700/60">
                        [{q.page}]
                      </span>
                    </div>
                    <ul className="space-y-0.5">
                      {q.items.map((it, j) => (
                        <li key={j} className="flex items-start gap-1 text-[10px] text-slate-400 leading-snug">
                          <span className="text-amber-500 mt-0.5 shrink-0">·</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[9px] font-medium px-2 py-0.5 rounded-full border bg-violet-900/40 text-violet-300 border-violet-700/40">
                  USE CASES [p20]
                </span>
                <h3 className="text-xs font-semibold text-slate-200">활용 사례 6 카테고리</h3>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {useCases.map((u) => (
                  <div key={u.id} className="bg-slate-900/60 rounded-md px-2 py-1.5 border border-violet-900/30">
                    <div className="flex items-center gap-1">
                      <span className="text-violet-400 font-mono text-[9px]">0{u.id}</span>
                      <span className="text-[10.5px] text-slate-200 font-medium">{u.name}</span>
                    </div>
                    <div className="text-[9px] text-slate-500 ml-3">{u.cat}</div>
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-slate-500 mt-1 italic leading-snug">
                → 각 카테고리 1페이지: "이런 행사 → 이런 모듈 조합 → 결과물 예시"
              </p>
            </div>
          </div>
        </div>

        {/* Closing Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-3 bg-rose-950/30 border border-rose-800/40 rounded-xl p-2.5"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[9px] font-medium px-2 py-0.5 rounded-full border bg-rose-900/40 text-rose-300 border-rose-700/40">
              CLOSING CHECKLIST
            </span>
            <span className="text-xs font-semibold text-slate-200">회의 마무리 — 꼭 정리할 것</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1.5">
            {checklistItems.map((c, i) => (
              <div key={i} className="flex items-start gap-1 text-[10px] text-slate-300 leading-snug">
                <span className="text-rose-400 font-mono">{i + 1}</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
