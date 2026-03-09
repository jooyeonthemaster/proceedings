'use client';

import { motion } from 'framer-motion';

export default function DigitalWreathSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-emerald-400 text-sm">SETTLEMENT COMPLETE</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">디지털 화환 최종 정산</h2>
          <p className="text-gray-400 mb-8">첫 외부 서비스 매출 정산 완료!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 정산 내역 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-emerald-500/30"
            >
              <h3 className="text-xl font-bold text-emerald-400 mb-6">정산 내역</h3>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-black text-emerald-400 mb-2">880만원</div>
                  <div className="text-gray-400 text-sm">총 입금액</div>
                </div>

                <div className="h-px bg-gray-700"></div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-500/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-400">580만</div>
                    <div className="text-gray-400 text-xs mt-1">회사 수익</div>
                  </div>
                  <div className="bg-blue-500/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">300만</div>
                    <div className="text-gray-400 text-xs mt-1">제연이형 지급</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 외주 관계 리스크 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-amber-500/30"
            >
              <h3 className="text-xl font-bold text-amber-400 mb-4">외주 관계 현황 &amp; 리스크</h3>

              <div className="space-y-4">
                <div className="bg-amber-500/10 rounded-lg p-4">
                  <div className="text-white text-sm font-semibold mb-2">정산 지연 이슈</div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    1월부터 본격 작업 시작 &rarr; 3월 정산 완료. 2개월에 걸쳐 300만원 지급.
                    한 달에 300만원이면 최대한 활용해야 하는 금액이나, 정산이 계속 미뤄진 상황.
                  </p>
                </div>

                <div className="bg-red-500/10 rounded-lg p-4">
                  <div className="text-red-400 text-sm font-semibold mb-2">현재 리스크</div>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">&bull;</span>
                      <span>다음 개발 외주 건이 아직 없음</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">&bull;</span>
                      <span>추가 업무 요청 시 눈치보이는 타이밍</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">&bull;</span>
                      <span>대책 마련이 시급한 상황</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-dark-light/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-gray-300 text-sm font-semibold mb-2">논의 필요</div>
                  <p className="text-gray-400 text-xs">
                    외주 인력 관리 전략 재수립 필요. 지속적 업무 확보 or 관계 재정의가 필요한 시점.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
