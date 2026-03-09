'use client';

import { motion } from 'framer-motion';

export default function DevTeamSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-cyan-400 text-sm">DEV TEAM &amp; ONLINE BIZ</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">개발팀 &amp; 온라인 사업 고도화</h2>
          <p className="text-gray-400 mb-8">악센트 사이트 개발 고도화 + PG 연동 + 온라인 판매 가속화</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* 악센트 사이트 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-cyan-500/30"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4">악센트 사이트 고도화</h3>

              <div className="space-y-3">
                <div className="flex items-center bg-cyan-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">사이트 개발 고도화 진행 중</div>
                    <div className="text-gray-400 text-xs">짬짬이 주문 들어오는 중</div>
                  </div>
                </div>

                <div className="flex items-center bg-amber-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">PG 연동 준비 중</div>
                    <div className="text-gray-400 text-xs">카드 결제 탑재 임박</div>
                  </div>
                </div>

                <div className="flex items-center bg-violet-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">상세페이지 제작</div>
                    <div className="text-gray-400 text-xs">상품별 매력을 보여줄 수 있는 페이지</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 온라인 판매 전략 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-emerald-500/30"
            >
              <h3 className="text-xl font-bold text-emerald-400 mb-4">온라인 판매 활성화 로드맵</h3>

              <div className="space-y-4">
                <div className="relative pl-6 border-l-2 border-emerald-500/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-dark"></div>
                  <div className="mb-4">
                    <div className="text-emerald-400 text-xs font-bold">STEP 1 &mdash; 현재</div>
                    <div className="text-white text-sm font-semibold">PG 결제 탑재</div>
                    <div className="text-gray-400 text-xs">카드 결제 시스템 연동 완료</div>
                  </div>
                </div>

                <div className="relative pl-6 border-l-2 border-emerald-500/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-amber-500 rounded-full border-2 border-dark"></div>
                  <div className="mb-4">
                    <div className="text-amber-400 text-xs font-bold">STEP 2 &mdash; PG 완료 후</div>
                    <div className="text-white text-sm font-semibold">광고 집행 기획</div>
                    <div className="text-gray-400 text-xs">SNS / 검색 광고 전략 수립</div>
                  </div>
                </div>

                <div className="relative pl-6 border-l-2 border-emerald-500/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-dark"></div>
                  <div className="mb-4">
                    <div className="text-blue-400 text-xs font-bold">STEP 3</div>
                    <div className="text-white text-sm font-semibold">온라인 판매 본격 활성화</div>
                    <div className="text-gray-400 text-xs">리뷰 쌓기 + 마케팅 연계</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 핵심 메시지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-cyan-500/10 rounded-xl p-5 border border-cyan-500/40"
          >
            <p className="text-gray-300 text-sm text-center leading-relaxed">
              PG 결제 탑재가 완료되면 본격적으로 <span className="text-cyan-400 font-semibold">광고 집행 + 온라인 판매 활성화</span>를 빠르게 기획해서 실행해야 합니다.
              지금은 준비 단계 &mdash; 속도감 있게 준비합시다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
