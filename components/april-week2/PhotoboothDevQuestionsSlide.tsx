'use client';

import { motion } from 'framer-motion';

const devQuestions = [
  {
    id: 1,
    title: 'AI 처리 성능',
    page: 'p4',
    items: [
      '처리 시간/시간당 처리 인원/GPU 사양/동시 처리 팩트체크',
      '처리 속도 ↑ 시 서버 비용 얼마? (견적·마진 계산)',
    ],
  },
  {
    id: 2,
    title: 'AI 스타일 변환 — 확장성·한계',
    page: 'p6, p7',
    items: [
      '새 스타일 1개 추가 며칠? (행사별 커스텀 컨셉 대응)',
      '학습 데이터·저작권 이슈로 못 쓰는 스타일 (지브리·픽사풍 등)',
      '→ 영업 단계에서 약속 못 할 것 미리 정리',
      '인물 인식 실패율 (안경·단체·어두운 조명·어린이)',
    ],
  },
  {
    id: 3,
    title: 'AI 배경 합성',
    page: 'p8',
    items: [
      '그린스크린 없이 단색 벽만으로 배경 분리 잘 되는지',
      '별도 조명·배경 셋업 필수 여부',
      '새 배경 컨셉 추가 리드타임',
    ],
  },
  {
    id: 4,
    title: '프로세스 — 개발 범위·모듈화',
    page: 'p13',
    items: [
      '8단계 풀 개발 시 MVP 기준 리드타임',
      '단계 ON/OFF (쿠폰·결제·수량 빼기) 모듈식 설계 가능?',
      '매번 새 빌드인지',
    ],
  },
  {
    id: 5,
    title: '커스텀 가능 범위',
    page: 'p9, p10, p11',
    items: [
      '프레임 내 로고·이벤트명·QR 동적 삽입 난이도',
      '외관 래핑·시트지 실현 가능 (with 운영팀)',
      '브랜드 컬러로 UI 전체 테마 변경 — 한 번? 매번 수작업?',
      '레이아웃 4컷/2컷/6컷 외 추가 가능? (인쇄기 제약)',
    ],
  },
  {
    id: 6,
    title: '운영·관리자 페이지',
    page: 'p15',
    items: [
      '웹 관리자: 발주처 직접 쿠폰 발급 / 실시간 운영현황 / 리포트 다운로드',
      '→ MVP / v2 라인 잡기',
      '데이터 리포트 자동 집계 지표 (방문자수·시간대 회전율·스타일 선호도·성별·연령 추정)',
      '트러블슈팅 원격 지원 (원격 모니터링·재부팅) 가능?',
    ],
  },
];

const featureRows = [
  { feature: '다국어 지원 (12개)', check: '언어팩 갈아끼우는 구조? 언어 추가 며칠?' },
  { feature: '재촬영 기능', check: 'AI 처리 후 재촬영도 가능? 촬영 직후만?' },
  { feature: 'QR 사진 전송', check: '클라우드 보관 며칠? 개인정보 처리방침 같이 만들 건지' },
  { feature: 'BGM/효과음', check: '발주처 커스텀 가능? 저작권 라이브러리 정해져 있는지' },
  { feature: '실시간 슬라이드쇼', check: '외부 LED·디스플레이 미러링 가능? 별도 출력 모듈?' },
  { feature: '레이아웃 유형', check: '4컷/2컷/6컷 외 추가 가능? 인쇄기 제약?' },
];

export default function PhotoboothDevQuestionsSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.06),transparent_60%)]" />
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center bg-violet-900/40 border border-violet-700/40 rounded-full px-5 py-1.5 mb-3">
            <span className="text-violet-300 text-sm font-medium tracking-wider">SECTION 2-2 · DEV TEAM Q&A</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
            개발팀 질문 — 가능성·한계·리드타임 중심
          </h2>
          <p className="text-slate-500">7 QUESTIONS · MVP / v2 LINE</p>
        </motion.div>

        {/* 6 Question Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          {devQuestions.map((q, i) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.07, duration: 0.5 }}
              className="bg-slate-900/60 rounded-2xl p-3.5 border border-violet-900/40"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-violet-400 font-mono tabular-nums text-xs">0{q.id}</span>
                  <h3 className="text-xs font-semibold text-slate-100 leading-tight">{q.title}</h3>
                </div>
                <span className="text-[9px] font-medium px-1.5 py-0.5 rounded border bg-slate-800/60 text-violet-300 border-slate-700/60 font-mono shrink-0">
                  [{q.page}]
                </span>
              </div>
              <ul className="space-y-1">
                {q.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-1.5 text-[10.5px] text-slate-300 leading-snug">
                    <span className="text-violet-500 mt-1 shrink-0 h-1 w-1 rounded-full bg-violet-400" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Q7 — UX Feature Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-slate-900/60 rounded-2xl p-4 border border-fuchsia-800/40"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-fuchsia-400 font-mono tabular-nums text-xs">07</span>
              <h3 className="text-sm font-semibold text-slate-100">사용자 경험 부가 기능 — 우선순위</h3>
              <span className="text-[10px] text-slate-500">개발 난이도·소요시간 → MVP/v2 라인 + 서버/외주 비용</span>
            </div>
            <span className="text-[9px] font-medium px-1.5 py-0.5 rounded border bg-slate-800/60 text-fuchsia-300 border-slate-700/60 font-mono">
              [p16]
            </span>
          </div>
          <div className="overflow-x-auto rounded-xl border border-fuchsia-900/30">
            <table className="w-full text-xs">
              <thead className="bg-fuchsia-950/40 text-fuchsia-300/80">
                <tr>
                  <th className="px-3 py-2 text-left font-medium w-1/3">기능</th>
                  <th className="px-3 py-2 text-left font-medium">확인 포인트</th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-800/40">
                    <td className="px-3 py-1.5 text-slate-200 font-medium">{row.feature}</td>
                    <td className="px-3 py-1.5 text-slate-400">{row.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
