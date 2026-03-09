'use client';

import { motion } from 'framer-motion';

export default function WowLaunchSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-violet-500/20 border border-violet-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-violet-400 text-sm">PRODUCT LAUNCH</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">AC&apos;SCENT WOW 출시 논의</h2>
          <p className="text-gray-400 mb-8">개발 완료 &mdash; 출시 일정 결정이 필요합니다</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 현황 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-violet-500/30"
            >
              <h3 className="text-xl font-bold text-violet-400 mb-4">개발 현황</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between bg-emerald-500/10 rounded-lg p-4">
                  <div>
                    <div className="text-white font-semibold">프로그램 개발</div>
                    <div className="text-gray-400 text-xs">핵심 기능 구현 완료</div>
                  </div>
                  <div className="bg-emerald-500/20 rounded-full px-4 py-1">
                    <span className="text-emerald-400 text-sm font-bold">완료</span>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-emerald-500/10 rounded-lg p-4">
                  <div>
                    <div className="text-white font-semibold">내부 테스트</div>
                    <div className="text-gray-400 text-xs">전직원 테스트 진행 중</div>
                  </div>
                  <div className="bg-emerald-500/20 rounded-full px-4 py-1">
                    <span className="text-emerald-400 text-sm font-bold">완료</span>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-amber-500/10 rounded-lg p-4">
                  <div>
                    <div className="text-white font-semibold">출시 일정</div>
                    <div className="text-gray-400 text-xs">출시 시점 결정 필요</div>
                  </div>
                  <div className="bg-amber-500/20 rounded-full px-4 py-1">
                    <span className="text-amber-400 text-sm font-bold">논의 필요</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 논의 사항 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-amber-500/30"
            >
              <h3 className="text-xl font-bold text-amber-400 mb-4">결정 필요 사항</h3>

              <div className="space-y-4">
                <div className="bg-dark-light/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-white text-sm font-semibold mb-2">1. 출시 타이밍</div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    PG 결제 탑재 전에 출시할 것인가, PG 완료 후 동시 출시할 것인가?
                  </p>
                </div>

                <div className="bg-dark-light/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-white text-sm font-semibold mb-2">2. 마케팅 연계</div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    온라인 판매 활성화 전략과 WOW 프로그램 출시를 어떻게 연계할 것인지 기획 필요
                  </p>
                </div>

                <div className="bg-dark-light/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-white text-sm font-semibold mb-2">3. 고객 피드백 수집</div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    소프트 런칭 후 초기 고객 피드백을 어떻게 수집하고 반영할 것인지 프로세스 설계
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
