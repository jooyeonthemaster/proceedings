'use client';

import { motion } from 'framer-motion';

const targets = [
  {
    id: 1,
    label: '1차',
    title: '지자체 축제',
    sub: '가장 빠른 돈',
    color: 'border-violet-700/50 bg-violet-950/30',
    pill: 'bg-violet-800/50 text-violet-200 border-violet-600/50',
    points: [
      '4월 = 5~6월 봄 축제 발주 막차 타이밍',
      '주희가 구청/시청 축제 담당부서 직접 콜드콜',
      '"올해 축제에 AI 포토부스 부스 운영 제안"',
      '나라장터 입찰 공고 매일 모니터링 + 콜드콜 병행',
      '서울 25개구 + 경기 주요 시 5~10월 축제 캘린더',
      '주희 매일 5~10콜',
    ],
  },
  {
    id: 2,
    label: '2차',
    title: '대학 축제',
    sub: '레퍼런스 확보',
    color: 'border-fuchsia-700/50 bg-fuchsia-950/30',
    pill: 'bg-fuchsia-800/50 text-fuchsia-200 border-fuchsia-600/50',
    points: [
      '5월 대축제 시즌 — 지금이 타이밍 (좀 늦었을 수)',
      '총학생회 인스타로 연락처 확인',
      'DM + 전화 동시 접근',
      '단가 낮지만 레퍼런스 사진·영상 확보용 최고',
      '첫 1~2건은 거의 원가라도 레퍼런스 만드는 게 중요',
    ],
  },
  {
    id: 3,
    label: '3차',
    title: '기업 행사 / 박람회',
    sub: '단가 高',
    color: 'border-violet-700/50 bg-violet-950/30',
    pill: 'bg-violet-800/50 text-violet-200 border-violet-600/50',
    points: [
      '리드타임 길어서 중기',
      '기업 마케팅 담당자 → 링크드인 / 대표번호 경유',
      '단가 300~500만원 이상 가능',
    ],
  },
];

const timeline = [
  { step: '01', label: '제안서 완성', period: '이번 주~다음 주' },
  { step: '02', label: '콜드콜 + 콘텐츠 바이럴', period: '동시 2~4주' },
  { step: '03', label: '문의·미팅', period: '1~2주' },
  { step: '04', label: '계약', period: '1~2주' },
  { step: '05', label: '행사 D-day 준비', period: '2~4주' },
  { step: '06', label: '행사 진행', period: 'D-day' },
  { step: '07', label: '정산', period: '행사 후 30일' },
];

const advantages = [
  '제안서 거의 완성됨',
  '단가 상대적 표준화 (패키지 견적)',
  '축제 시즌(봄·가을) 임박',
  '한번 레퍼런스 만들면 반복 영업 쉬움',
  '상품 개발 이미 완료',
];

const weeklyRoutine = [
  { day: '월~화', task: '콜드콜 하루 10건' },
  { day: '수~목', task: '미팅 / 현장 방문' },
  { day: '금', task: '파이프라인 정리 + 다음 주 콜 리스트' },
];

export default function PhotoboothSalesStrategySlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-gray-950 flex items-center justify-center p-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_60%)]" />
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center bg-violet-900/40 border border-violet-700/40 rounded-full px-5 py-1 mb-2">
            <span className="text-violet-300 text-xs font-medium tracking-wider">SECTION 2-2 · SALES STRATEGY</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-1">
            포토부스 영업 전략 + 타임라인
          </h2>
          <p className="text-slate-500 text-xs">3 TARGETS · B2B PIPELINE · CROSS-SELL</p>
        </motion.div>

        {/* 3 Targets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {targets.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className={`rounded-xl p-3 border ${t.color}`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${t.pill}`}>
                  {t.label}
                </span>
                <span className="text-[9px] text-slate-500 italic">{t.sub}</span>
              </div>
              <h3 className="text-base font-bold text-slate-100 mb-2">{t.title}</h3>
              <ul className="space-y-1">
                {t.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-1.5 text-[10.5px] text-slate-300 leading-snug">
                    <span className="text-violet-500 mt-1 shrink-0 h-1 w-1 rounded-full bg-violet-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-3">
          {/* Weekly Routine */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="lg:col-span-4 bg-slate-900/60 rounded-xl p-3 border border-fuchsia-800/40"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-[9px] font-medium px-2 py-0.5 rounded-full border bg-fuchsia-900/40 text-fuchsia-300 border-fuchsia-700/40">
                JOOHEE WEEK
              </span>
              <h3 className="text-xs font-semibold text-slate-200">주희 주간 루틴</h3>
            </div>
            <div className="space-y-1.5">
              {weeklyRoutine.map((r) => (
                <div key={r.day} className="flex items-center gap-2 bg-slate-950/50 rounded-md px-2 py-1.5 border border-slate-800/50">
                  <span className="text-fuchsia-300 font-mono text-[10px] w-12 shrink-0">{r.day}</span>
                  <span className="text-[10.5px] text-slate-300">{r.task}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 mt-2 leading-snug">
              재영은 기존 네트워크 영업 + 주희가 잡아온 큰 건 동행
            </p>
          </motion.div>

          {/* Advantages */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="lg:col-span-8 bg-slate-900/60 rounded-xl p-3 border border-emerald-800/40"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-[9px] font-medium px-2 py-0.5 rounded-full border bg-emerald-900/40 text-emerald-300 border-emerald-700/40">
                vs 외주개발 — 5 ADVANTAGES
              </span>
              <h3 className="text-xs font-semibold text-slate-200">포토부스가 외주개발보다 유리한 점</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
              {advantages.map((a, i) => (
                <div key={i} className="flex items-start gap-1.5 bg-slate-950/50 rounded-md px-2 py-1.5 border border-emerald-900/30">
                  <span className="text-emerald-400 font-mono text-[10px] shrink-0">0{i + 1}</span>
                  <span className="text-[10.5px] text-slate-200">{a}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="bg-slate-900/60 rounded-xl p-3 border border-violet-800/40 mb-3"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-medium px-2 py-0.5 rounded-full border bg-violet-900/40 text-violet-300 border-violet-700/40">
                B2B PIPELINE
              </span>
              <h3 className="text-xs font-semibold text-slate-200">B2B 마케팅 → 정산 타임라인</h3>
            </div>
            <span className="text-[10px] text-violet-300 font-medium">
              최소 <span className="font-mono tabular-nums">2~3개월</span> 후 첫 정산
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1">
            {timeline.map((t, j) => (
              <div key={j} className="flex items-center gap-1">
                <div className="bg-violet-950/50 border border-violet-800/40 rounded-md px-2 py-1">
                  <div className="flex items-center gap-1">
                    <span className="text-violet-400 font-mono text-[9px]">{t.step}</span>
                    <span className="text-[10px] text-slate-200 font-medium">{t.label}</span>
                  </div>
                  <div className="text-[9px] text-slate-500">{t.period}</div>
                </div>
                {j < timeline.length - 1 && <span className="text-slate-700 text-[10px]">›</span>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom: Develop owner + Cross-sell */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="bg-amber-950/30 border border-amber-800/40 rounded-xl p-3"
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[9px] font-medium px-2 py-0.5 rounded-full border bg-amber-900/40 text-amber-300 border-amber-700/40">
                DEVELOP OWNER
              </span>
              <h3 className="text-xs font-semibold text-slate-200">디벨롭 담당</h3>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              <span className="text-amber-300 font-semibold">김제연</span>이 맡음.
              단, <span className="text-amber-300">학원 AI가 1순위</span> →
              학원 AI MVP 안정화 후 착수 원칙.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-cyan-950/30 border border-cyan-800/40 rounded-xl p-3"
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[9px] font-medium px-2 py-0.5 rounded-full border bg-cyan-900/40 text-cyan-300 border-cyan-700/40">
                CROSS-SELL
              </span>
              <h3 className="text-xs font-semibold text-slate-200">외주개발 크로스셀 동선</h3>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              주희가 축제·행사 담당자 만나면 <span className="text-cyan-300">"다른 체험형 콘텐츠도 있어요"</span> +
              <span className="text-cyan-300"> "프로그램 개발도 해드려요"</span> →
              외주개발 니즈 같이 캐치. 별도 마케팅 없이 외주 파이프라인 일부 확보.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
