'use client';

import { motion } from 'framer-motion';

type Month = {
  month: string;
  tag: string;
  title: string;
  color: string;
  border: string;
  text: string;
  badge: string;
  items: string[];
  kpis?: { label: string; value: string }[];
};

const months: Month[] = [
  {
    month: '4월',
    tag: '현재',
    title: '위기 인식',
    color: 'from-red-950/40 to-slate-900/40',
    border: 'border-red-800/50',
    text: 'text-red-300',
    badge: 'bg-red-900/40 text-red-300',
    items: [
      '런웨이 4개월',
      '전략 회의 통해 전사 우선순위 확정',
      '인력 역할 재배치 확정',
      '포토부스 제안서 최종 완성',
    ],
    kpis: [{ label: '런웨이', value: '4개월' }],
  },
  {
    month: '5월',
    tag: '전투 개시',
    title: 'MVP 출시 + 첫 매출',
    color: 'from-amber-950/40 to-slate-900/40',
    border: 'border-amber-800/50',
    text: 'text-amber-300',
    badge: 'bg-amber-900/40 text-amber-300',
    items: [
      '학원 AI MVP 출시 + 첫 고객(기존 영어 학원 선생님) 온보딩',
      '외주개발비 + 월 사용료로 첫 매출',
      '재영 학원 밀집 지역 방문영업 시작 (대치·목동·중계)',
      '주희 포토부스 콜드콜 시작 (지자체·대학·기업)',
    ],
    kpis: [{ label: '5월 목표', value: '학원 3~5개 확보' }],
  },
  {
    month: '6월',
    tag: '첫 검증',
    title: '체크포인트 회의',
    color: 'from-cyan-950/40 to-slate-900/40',
    border: 'border-cyan-800/50',
    text: 'text-cyan-300',
    badge: 'bg-cyan-900/40 text-cyan-300',
    items: [
      '학원 AI 누적 8~12개 목표',
      '첫 고객 케이스스터디 제작',
      '포토부스 첫 수주 목표',
      '선화 학원 AI 첫 인스타 콘텐츠 + AB테스트 시작',
      '중간 체크포인트 회의 (매출·현금·학원 수·포토부스 파이프라인 점검)',
    ],
    kpis: [{ label: '학원 누적', value: '8~12개' }],
  },
  {
    month: '7월',
    tag: '판단의 달',
    title: '국어 추가 + 8월 방향 확정',
    color: 'from-emerald-950/40 to-slate-900/40',
    border: 'border-emerald-800/50',
    text: 'text-emerald-300',
    badge: 'bg-emerald-900/40 text-emerald-300',
    items: [
      '학원 AI MRR 750만원+ 확인',
      '국어 과목 추가',
      '악센트 재계약 여부 최종 데이터 수집 및 결정',
      '포토부스 가을 축제 사전 영업 (9~10월 축제 발주 수주)',
      '7월 말 전사 전략 회의 — 8월 방향 확정',
    ],
    kpis: [{ label: 'MRR', value: '750만원+' }],
  },
  {
    month: '8월',
    tag: '전환점',
    title: '두 갈래 분기',
    color: 'from-violet-950/40 to-slate-900/40',
    border: 'border-violet-800/50',
    text: 'text-violet-300',
    badge: 'bg-violet-900/40 text-violet-300',
    items: [
      '[악센트 종료 시] 인력 정리 실행 · 고정비 4,500→3,000만원 · 선화+이동주 역할 전환 · 5인 체제 가동',
      '[재계약 시] 현행 유지 · 학원 AI 비중 서서히 증가 · 김제연 포토부스 디벨롭 착수',
    ],
    kpis: [{ label: '고정비', value: '4,500→3,000' }],
  },
  {
    month: '9~10월',
    tag: '스케일업',
    title: '수학 추가 + 서울 전역',
    color: 'from-indigo-950/40 to-slate-900/40',
    border: 'border-indigo-800/50',
    text: 'text-indigo-300',
    badge: 'bg-indigo-900/40 text-indigo-300',
    items: [
      '학원 AI 수학 과목 추가',
      '서울 전역 확대',
      'MRR 2,000~2,500만원 목표',
      '가을 축제 시즌 포토부스 매출',
      '구별 독점 프레이밍 FOMO 영업 시작',
    ],
    kpis: [{ label: 'MRR 목표', value: '2,000~2,500' }],
  },
  {
    month: '11~12월',
    tag: '안정화 + 투자',
    title: '사탐·과탐 + IR 준비',
    color: 'from-sky-950/40 to-slate-900/40',
    border: 'border-sky-800/50',
    text: 'text-sky-300',
    badge: 'bg-sky-900/40 text-sky-300',
    items: [
      '학원 AI MRR 3,000~3,750만원',
      '사탐·과탐 추가',
      '투자 IR 자료 준비 시작',
      '2027년 전국 확장 로드맵 수립',
      'ARR 기준 에듀테크 VC 타겟팅',
    ],
    kpis: [{ label: 'MRR', value: '3,000~3,750' }],
  },
];

export default function RoadmapSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-slate-900 to-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(8,51,68,0.3)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(15,23,42,0.45)_0%,transparent_60%)]" />

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center bg-cyan-900/40 border border-cyan-700/50 rounded-full px-5 py-1.5 mb-4">
            <span className="text-cyan-300 text-xs font-medium tracking-[0.2em]">2026 ROADMAP · 4월 → 12월</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
            2026 로드맵 — 4월부터 12월까지
          </h2>
          <p className="text-slate-500 text-sm">위기 인식 · 전투 개시 · 첫 검증 · 판단 · 전환 · 스케일업 · 투자 준비</p>
        </motion.div>

        {/* Vertical timeline rail */}
        <div className="relative">
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-700/50 via-cyan-800/30 to-transparent" />

          <div className="space-y-3">
            {months.map((m, i) => (
              <motion.div
                key={m.month}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
                className="relative pl-12"
              >
                {/* dot */}
                <div className={`absolute left-[10px] top-3 w-4 h-4 rounded-full ${m.badge} border-2 border-slate-950 shadow-lg`}>
                  <div className={`absolute inset-0.5 rounded-full ${m.badge.split(' ')[0]} animate-pulse`} />
                </div>

                <div className={`bg-gradient-to-r ${m.color} rounded-xl p-3.5 border ${m.border}`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className={`text-sm font-bold ${m.text} font-mono`}>{m.month}</div>
                      <div className={`${m.badge} text-[10px] font-bold tracking-wider rounded px-1.5 py-0.5`}>
                        {m.tag}
                      </div>
                      <div className="text-slate-200 text-[12px] font-semibold">{m.title}</div>
                    </div>
                    {m.kpis && (
                      <div className="flex gap-1.5 shrink-0">
                        {m.kpis.map((k, j) => (
                          <div key={j} className="bg-slate-900/70 border border-slate-700/50 rounded px-2 py-0.5">
                            <div className="text-slate-500 text-[9px]">{k.label}</div>
                            <div className="text-slate-100 text-[11px] font-mono font-bold">{k.value}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-0.5">
                    {m.items.map((it, j) => (
                      <div key={j} className="flex items-start gap-1.5">
                        <div className={`w-1 h-1 rounded-full ${m.badge.split(' ')[0]} mt-1.5 shrink-0`} />
                        <div className="text-slate-300 text-[11px] leading-snug">{it}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
