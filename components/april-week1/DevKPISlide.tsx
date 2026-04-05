'use client';

import { motion } from 'framer-motion';

export default function DevKPISlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-blue-900/20 border border-blue-800/30 rounded-full px-4 py-1 mb-4">
            <span className="text-blue-400/70 text-sm">DEV TEAM Q1 REVIEW</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-200 mb-2">개발팀(CAIO) 1분기 KPI 점검</h2>
          <p className="text-slate-500 mb-8">달성 / 미달성 / 폐지 전체 리뷰</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Section A - 내부 협업 KPI */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/60 rounded-2xl p-6 border border-red-900/30"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-200">A. 회사 내부 협업 KPI</h3>
                <span className="text-red-400 text-sm font-bold bg-red-950/40 px-2 py-0.5 rounded-full">미달성</span>
              </div>

              <div className="space-y-3">
                <div className="bg-red-950/20 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&#10007;</span>
                    <div>
                      <p className="text-slate-300 text-sm font-semibold">영업팀 협업</p>
                      <p className="text-slate-500 text-xs mt-1">제안 가능 프로그램 확대, 신규 솔루션 1개 이상, 영업 제안서용 데모</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-950/20 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&#10007;</span>
                    <div>
                      <p className="text-slate-300 text-sm font-semibold">마케팅팀 협업</p>
                      <p className="text-slate-500 text-xs mt-1">데이터 기반 마케팅 효율화, 콘텐츠 일별 기록, 댓글 수집, 언급 크롤링, LLM 인사이트</p>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-950/20 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">~</span>
                    <div>
                      <p className="text-slate-300 text-sm font-semibold">재무회계팀 협업</p>
                      <p className="text-slate-500 text-xs mt-1">악센트 아이디 뿌덕 v2 연동, 향료 데이터, 재고 데이터</p>
                      <p className="text-emerald-400/60 text-xs mt-1">유일하게 이동주가 적극적으로 협조 요청 (온라인 자사몰 데이터 관리)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-red-950/30 rounded-lg p-3 text-center">
                <p className="text-red-400/70 text-sm font-medium">&ldquo;아무도 날 찾지 않았어&rdquo;</p>
              </div>
            </motion.div>

            {/* Section B - 뿌덕 서비스 KPI */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/60 rounded-2xl p-6 border border-emerald-900/30"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-200">B. 뿌덕 서비스 KPI</h3>
                <span className="text-emerald-400 text-sm font-bold bg-emerald-950/40 px-2 py-0.5 rounded-full">달성</span>
              </div>

              <div className="space-y-3">
                <div className="bg-emerald-950/20 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">&#10003;</span>
                    <div>
                      <p className="text-slate-300 text-sm font-semibold">분기별 프로그램 1개 개발</p>
                      <p className="text-slate-500 text-xs mt-1">뿌덕 시즌3 캐미 향수 개발 완료</p>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-950/20 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">&#10003;</span>
                    <div>
                      <p className="text-slate-300 text-sm font-semibold">단순 AI 추천 넘어서기</p>
                      <p className="text-slate-500 text-xs mt-1">확실한 차별화 + 즐길 수 있는 재미 달성</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section C - 기타 달성 */}
              <div className="mt-6">
                <h4 className="text-sm font-bold text-slate-400 mb-3">C. 기타 달성 항목</h4>
                <div className="space-y-2">
                  <div className="bg-emerald-950/20 rounded-lg p-3 flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">&#10003;</span>
                    <div>
                      <p className="text-slate-300 text-sm">포토부스 로봇 김제연 협업 + 외주 개발 처리</p>
                      <p className="text-emerald-400/60 text-xs mt-1">880만원 정산 완료</p>
                    </div>
                  </div>
                  <div className="bg-emerald-950/20 rounded-lg p-3 flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">&#10003;</span>
                    <p className="text-slate-300 text-sm">악센트 아이디 매장 설치 완료</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section D - 폐지된 항목 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="md:col-span-2 bg-slate-900/60 rounded-2xl p-6 border border-amber-900/30"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-200">D. 개발했지만 폐지된 항목</h3>
                <span className="text-amber-400/70 text-sm font-bold bg-amber-950/30 px-2 py-0.5 rounded-full">폐지</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-amber-950/20 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">&#9888;</span>
                    <div>
                      <p className="text-slate-300 text-sm font-semibold">향수 키링 파츠</p>
                      <p className="text-slate-500 text-xs mt-1">10ml 기준 디자인 30개 완료</p>
                      <p className="text-amber-400/60 text-xs mt-1">아이템 자체 폐지</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-950/20 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">&#9888;</span>
                    <div>
                      <p className="text-slate-300 text-sm font-semibold">3D 커스터마이징 웹 서비스</p>
                      <p className="text-slate-500 text-xs mt-1">케이스티파이 스타일 개발 완료</p>
                      <p className="text-amber-400/60 text-xs mt-1">개발했지만 폐지</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-amber-950/20 rounded-lg p-3 text-center">
                <p className="text-amber-400/60 text-sm">
                  &ldquo;KPI로 설정하고, 개발까지 다 했는데, 폐지되는 것에 대해서도 할 말이 많다&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
