'use client';

import { motion } from 'framer-motion';

const businesses = [
  {
    id: 1,
    name: '악센트 아이디 오프라인',
    tag: '메인 캐시카우',
    revenue: '월 1,500만원',
    revColor: 'text-blue-300',
    border: 'border-blue-700/50',
    badge: 'bg-blue-900/40 text-blue-300 border-blue-700/50',
    points: [
      '홍대 매장에서 운영 중',
      '안정적인 일매출 발생',
      '15평 공간 · 와우와 운명공동체',
    ],
    note: '6개 사업부 중 가장 안정적, 회사의 근간',
  },
  {
    id: 2,
    name: '악센트 와우 (생일 이벤트)',
    tag: '서브 캐시카우',
    revenue: '월 1,000만원',
    revColor: 'text-rose-300',
    border: 'border-rose-700/50',
    badge: 'bg-rose-900/40 text-rose-300 border-rose-700/50',
    points: [
      '수익성 검토 필요',
      '알바비 + 류다혜 + 조수빈 + 월세 고려 시 실질 수익성 거의 없음',
      '거의 자동화 → 유지 가능한 상황',
      '악센트 아이디와 공간적 운명공동체 → 별도 종료 불가',
    ],
    note: '독립 손익은 마이너스에 가깝지만 자동화로 유지 OK',
  },
  {
    id: 3,
    name: '악센트 온라인',
    tag: '초기 단계',
    revenue: '월 50만원',
    revColor: 'text-emerald-300',
    border: 'border-emerald-700/50',
    badge: 'bg-emerald-900/40 text-emerald-300 border-emerald-700/50',
    points: [
      '2026년 2월부터 온라인 서비스 구축',
      '3개월 누적 매출 100만원',
      'PG 심사 최근 통과',
      '목표 매출 월 500만원',
    ],
    note: '아직 초기 단계, 본격 매출은 PG 통과 이후',
  },
  {
    id: 4,
    name: 'B2B 체험형 AI 콘텐츠',
    tag: '재정의 진행',
    revenue: '현재 거의 0원',
    revColor: 'text-violet-300',
    border: 'border-violet-700/50',
    badge: 'bg-violet-900/40 text-violet-300 border-violet-700/50',
    points: [
      '팝업스토어·축제 등 오프라인 체험 콘텐츠 기획·납품 사업',
      '원래 B2B 행사 수요 많았으나 2026년에는 기존 네트워크 영업만 진행',
      '외부 인바운드 영업은 거의 없음',
      '"AI 체험형 콘텐츠"라는 넓은 범위 대신 "AI 포토부스"라는 구체적 상품으로 접근',
      '포토부스 → 축제/행사장 접점 → 다른 콘텐츠 크로스셀 전략',
    ],
    note: '4월 14일 회의의 핵심 주제',
  },
  {
    id: 5,
    name: '외주개발',
    tag: '인맥 의존',
    revenue: '현재 0원 (불규칙)',
    revColor: 'text-amber-300',
    border: 'border-amber-700/50',
    badge: 'bg-amber-900/40 text-amber-300 border-amber-700/50',
    points: [
      '작년 마케팅 없이 약 4,000만원 매출 — 전부 순수 인맥',
      '현실 capacity: 500만원짜리 기준 월 최대 3건, 학원AI 병행 시 월 1건',
      '한 달 3건 채우려면 마케팅 인바운드 X, 영업으로 직접 따와야 하는 구조',
      '김기홍 소개로 외주개발 건 진행 예정',
      '학원 AI 솔루션도 5월부터 외주개발비 + 월 사용료로 시작 예정',
    ],
    network: [
      { src: '김기홍 소개', items: '에코사(변기) · 써큐(중고가구 플랫폼) · 디지털 홀로그램 화환' },
      { src: '유재영 지원사업 동료', items: '크래커스 · kpop 사이트' },
      { src: '크몽 인바운드', items: '잡매칭 서비스' },
      { src: '주연 → 중앙대 직접 연결', items: '마케팅 매니저' },
    ],
    note: '6번째 사업부 중 정보 밀도 최대 — 인맥 사례 전수 기록',
    wide: true,
  },
  {
    id: 6,
    name: '학원 AI 솔루션',
    tag: '5월 출시 예정',
    revenue: '개발 중',
    revColor: 'text-cyan-300',
    border: 'border-cyan-700/50',
    badge: 'bg-cyan-900/40 text-cyan-300 border-cyan-700/50',
    points: [
      '김주연이 3월부터 별도로 기획한 신사업',
      '영어 학원 대상: AI 내신 지문 분석 / 문제 생성 / 시험 생성',
      '기존 다니던 영어 학원 선생님이 개발비 + 월 사용료 지불 예정',
      '월 사용료 50만원 (크레딧 기반)',
      '5월부터 외주개발비와 함께 시작',
    ],
    note: '국영수사과 전 과목 대응 목표 · 영어부터 시작',
  },
];

export default function RevenueStructureSlide() {
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
          <div className="inline-flex items-center bg-blue-900/40 border border-blue-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-blue-300 text-sm font-medium tracking-wider">
              REVENUE STRUCTURE · 1-4
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">
            현재 매출 구조 — <span className="text-blue-300">6개 사업부</span>
          </h2>
          <p className="text-slate-500">
            현금 사업부 (악센트 3종) + 신사업 (B2B / 외주 / 학원 AI)
          </p>
        </motion.div>

        {/* Business Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {businesses.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className={`bg-slate-900/60 rounded-xl p-4 border ${b.border} ${
                b.wide ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-2 gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-slate-600">
                      0{b.id}
                    </span>
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${b.badge}`}
                    >
                      {b.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100 leading-tight">{b.name}</h3>
                </div>
                <div className="text-right shrink-0">
                  <div className={`text-sm font-bold ${b.revColor} font-mono tabular-nums`}>
                    {b.revenue}
                  </div>
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-1 mt-2 mb-2">
                {b.points.map((p, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-1.5 text-[11px] text-slate-400 leading-snug"
                  >
                    <span className="text-slate-700 mt-0.5 shrink-0">▪</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              {/* External network for outsourcing card */}
              {b.network && (
                <div className="mt-2 pt-2 border-t border-slate-800/60">
                  <div className="text-[10px] uppercase tracking-wider text-amber-400/80 mb-1.5">
                    인맥 외주 사례 (작년 4,000만 매출 출처)
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    {b.network.map((n, k) => (
                      <div
                        key={k}
                        className="bg-slate-950/60 rounded-md px-2 py-1 border border-slate-800/40"
                      >
                        <div className="text-[10px] text-amber-300/90 font-medium">{n.src}</div>
                        <div className="text-[10px] text-slate-400 leading-snug mt-0.5">
                          {n.items}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Note */}
              <div className="mt-2 pt-2 border-t border-slate-800/40">
                <div className="text-[10px] text-slate-500 italic leading-snug">{b.note}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          <div className="bg-slate-900/50 rounded-lg px-4 py-2.5 border border-slate-800/60">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">현금 매출 합계</div>
            <div className="text-base font-bold text-blue-300 font-mono tabular-nums">
              월 ~2,550만
            </div>
            <div className="text-[10px] text-slate-600 mt-0.5">악센트 3종 합산</div>
          </div>
          <div className="bg-slate-900/50 rounded-lg px-4 py-2.5 border border-slate-800/60">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">평균 월 매출</div>
            <div className="text-base font-bold text-slate-200 font-mono tabular-nums">
              2,500만
            </div>
            <div className="text-[10px] text-slate-600 mt-0.5">6개 사업부 합산</div>
          </div>
          <div className="bg-slate-900/50 rounded-lg px-4 py-2.5 border border-amber-800/40">
            <div className="text-[10px] uppercase tracking-wider text-amber-400/70">신사업 비중</div>
            <div className="text-base font-bold text-amber-300 font-mono tabular-nums">~0%</div>
            <div className="text-[10px] text-slate-600 mt-0.5">B2B/외주/학원AI 현재</div>
          </div>
          <div className="bg-slate-900/50 rounded-lg px-4 py-2.5 border border-emerald-800/40">
            <div className="text-[10px] uppercase tracking-wider text-emerald-400/70">5월 ~ 변화</div>
            <div className="text-base font-bold text-emerald-300 font-mono tabular-nums">
              학원AI 시작
            </div>
            <div className="text-[10px] text-slate-600 mt-0.5">외주개발 + 월 50만 SaaS</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
