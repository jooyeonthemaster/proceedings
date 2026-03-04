'use client';

import { motion } from 'framer-motion';

export default function AcscentOnlineSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-orange-400 text-sm">AC&apos;SCENT IDENTITY</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">온라인 사이트 업데이트</h2>
          <p className="text-gray-400 mb-8">acscent.co.kr | PG 심사 중 + 사이트 개선 계획</p>

          <div className="max-w-4xl mx-auto">
            {/* PG Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl p-6 border border-orange-500/30 mb-6"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-3xl">&#128179;</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">PG 심사 진행 중</h3>
                    <p className="text-gray-400 text-sm">곧 카드 결제도 가능해집니다!</p>
                  </div>
                </div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-2"
                >
                  <span className="text-amber-400 text-sm font-bold">심사 중...</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Improvement Plans */}
            <h3 className="text-xl font-semibold text-white mb-4">사이트 개선 계획</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-dark-light/60 rounded-xl p-5 border border-gray-700"
              >
                <div className="flex items-center mb-3">
                  <span className="text-xl mr-2">&#128196;</span>
                  <h4 className="text-lg font-semibold text-white">상품별 상세페이지 제작</h4>
                </div>
                <p className="text-gray-400 text-sm">각 상품의 매력을 제대로 보여줄 수 있는 상세 페이지 필요</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-dark-light/60 rounded-xl p-5 border border-gray-700"
              >
                <div className="flex items-center mb-3">
                  <span className="text-xl mr-2">&#11088;</span>
                  <h4 className="text-lg font-semibold text-white">리뷰 쌓기</h4>
                </div>
                <p className="text-gray-400 text-sm">고객 후기와 리뷰를 체계적으로 수집하고 노출</p>
              </motion.div>
            </div>

            {/* Open Call */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-cyan-500/10 rounded-xl p-5 border border-cyan-500/20 text-center"
            >
              <p className="text-cyan-400 font-medium mb-1">
                &#128227; 온라인 사이트 개선에 대한 다양한 의견을 기다립니다!
              </p>
              <p className="text-gray-500 text-sm">
                단순 개선이 아닌, 전략적 사이트 혁신을 목표로 합니다. 언제든 제안 주시면 적극 반영할 계획입니다.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
