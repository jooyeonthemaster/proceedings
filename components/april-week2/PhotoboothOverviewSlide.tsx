'use client';

import { motion } from 'framer-motion';

const proposalSections = [
  {
    code: '01',
    title: 'AI 포토부스란',
    body: '생성형 AI 기술로 실시간 사진 변환 체험형 포토 서비스',
    metrics: [
      { label: 'AI 변환', value: '10~30초' },
      { label: '전체 체험', value: '1~2분' },
      { label: '시간당 처리', value: '40명/h' },
    ],
    factCheck: true,
  },
  {
    code: '02',
    title: '서비스 소개',
    body: '5개 핵심 모듈',
    bullets: [
      'AI 스타일 변환 (Image-to-Image, 15~30초, 만화풍/수채화/팝아트/3D/유화)',
      'AI 배경 합성 (Stable Diffusion + ControlNet, 10~15초, 무제한 커스텀)',
      '포토 레이아웃 & 컬러 (4컷/2컷/6컷, 배경 색상 8종, 컬러/모노)',
      '프레임 디자인 (기본 + 브랜드 맞춤 커스텀)',
      '외관 커스텀 (평면 부위 시트지 래핑)',
    ],
  },
  {
    code: '03',
    title: '체험 프로세스 — 8단계',
    body: '기본형 UX (커스텀 범위 확인 필요)',
    steps: [
      '시작터치',
      '쿠폰번호 입력',
      '레이아웃 선택',
      '출력수량 선택',
      '결제',
      '촬영',
      '출력중',
      '출력완료',
    ],
  },
  {
    code: '04',
    title: '부가 기능',
    body: '운영·결제 + 사용자 경험',
    twoCol: {
      left: {
        title: '운영·결제',
        items: ['카드 리더기', '쿠폰', '정산 대시보드', '웹 관리자', '운영 옵션 설정', '데이터 리포트'],
      },
      right: {
        title: '사용자 경험',
        items: ['12개 언어 지원', '재촬영', 'QR 전송', 'BGM·효과음', '실시간 슬라이드쇼', '레이아웃 유형'],
      },
    },
  },
  {
    code: '07',
    title: '활용 사례 — 사주 포토부스',
    body: '4단계 프로세스',
    steps: ['생년월일 입력', 'AI 사주 분석', 'AI 포토 촬영', '영수증 출력'],
  },
];

export default function PhotoboothOverviewSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_60%)]" />
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center bg-violet-900/40 border border-violet-700/40 rounded-full px-5 py-1.5 mb-3">
            <span className="text-violet-300 text-sm font-medium tracking-wider">SECTION 2-2 · PHOTOBOOTH</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
            AI 포토부스 — 현재 상태 & 제안서 요약
          </h2>
          <p className="text-slate-500">PROPOSAL 21p · 회의용_1차.pdf</p>
        </motion.div>

        {/* Status Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4"
        >
          <div className="bg-violet-900/20 border border-violet-700/40 rounded-xl px-4 py-3">
            <div className="text-[10px] text-violet-300 tracking-[0.18em] mb-1">PRODUCT STATUS</div>
            <div className="text-sm font-bold text-slate-100">상품 개발 완료</div>
          </div>
          <div className="bg-fuchsia-900/20 border border-fuchsia-700/40 rounded-xl px-4 py-3">
            <div className="text-[10px] text-fuchsia-300 tracking-[0.18em] mb-1">DOCUMENT</div>
            <div className="text-sm font-bold text-slate-100">21페이지 제안서 (김주희)</div>
          </div>
          <div className="bg-violet-900/20 border border-violet-700/40 rounded-xl px-4 py-3">
            <div className="text-[10px] text-violet-300 tracking-[0.18em] mb-1">NOTION</div>
            <div className="text-sm font-bold text-slate-100">팀별 질문 리스트 정리 완료</div>
          </div>
        </motion.div>

        {/* Proposal Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {proposalSections.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
              className={`bg-slate-900/60 rounded-2xl p-4 border border-violet-900/40 ${
                s.code === '02' || s.code === '04' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-violet-400 font-mono tabular-nums text-xs tracking-wider">
                  {s.code}
                </span>
                <h3 className="text-sm font-semibold text-slate-100">{s.title}</h3>
                {s.factCheck && (
                  <span className="text-[9px] font-medium px-1.5 py-0.5 rounded border bg-red-900/40 text-red-300 border-red-700/40">
                    팩트체크 필요
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 mb-2">{s.body}</p>

              {s.metrics && (
                <div className="grid grid-cols-3 gap-2">
                  {s.metrics.map((m) => (
                    <div key={m.label} className="bg-slate-950/50 rounded-lg px-2 py-1.5 border border-slate-800/50">
                      <div className="text-[9px] text-slate-500 mb-0.5">{m.label}</div>
                      <div className="text-xs font-bold text-violet-300 font-mono tabular-nums">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {s.bullets && (
                <ul className="space-y-1.5">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                      <span className="text-violet-500 mt-1 shrink-0 h-1 w-1 rounded-full bg-violet-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {s.steps && (
                <div className="flex flex-wrap items-center gap-1.5">
                  {s.steps.map((step, j) => (
                    <div key={j} className="flex items-center gap-1.5">
                      <div className="bg-violet-950/60 border border-violet-800/40 rounded-md px-2 py-1 text-[10px] text-slate-200">
                        <span className="text-violet-400 font-mono mr-1">{j + 1}</span>
                        {step}
                      </div>
                      {j < s.steps.length - 1 && <span className="text-slate-700 text-[10px]">›</span>}
                    </div>
                  ))}
                </div>
              )}

              {s.twoCol && (
                <div className="grid grid-cols-2 gap-3">
                  {[s.twoCol.left, s.twoCol.right].map((col) => (
                    <div key={col.title}>
                      <div className="text-[10px] text-fuchsia-300 tracking-[0.15em] mb-1.5">
                        {col.title}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {col.items.map((it) => (
                          <span
                            key={it}
                            className="text-[10px] text-slate-300 bg-slate-950/60 border border-slate-800/60 rounded px-1.5 py-0.5"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Warning */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="mt-3 bg-red-950/30 border border-red-800/40 rounded-xl px-4 py-2.5 text-center"
        >
          <span className="text-red-300 text-xs font-medium">
            ⚠ 빨간 텍스트로 개발팀 팩트체크 필요 항목들이 제안서에 표시됨
          </span>
        </motion.div>
      </div>
    </div>
  );
}
