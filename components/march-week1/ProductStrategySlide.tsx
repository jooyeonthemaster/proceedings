'use client';

import { motion } from 'framer-motion';

export default function ProductStrategySlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-violet-500/20 border border-violet-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-violet-400 text-sm">PRODUCT STRATEGY</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">상품 전략 & 3D 프린터 수익화</h2>
          <p className="text-gray-400 mb-8">시그니처 상품 + 3D 프린터 활용 수익 창출 방안</p>

          {/* Signature Product Callback */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-xl p-5 border border-pink-500/30 mb-6"
          >
            <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
              <h3 className="text-lg font-semibold text-pink-400">시그니처 상품 논의 (계속)</h3>
              <a
                href="/february/week1"
                className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-sm hover:bg-pink-500/30 transition-colors"
              >
                → 2월 1주차 회의록 보기
              </a>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              마케팅 팀과 논의 필요: 온라인에서 판매할 시그니처 상품에 대한 구체적 방향 설정. AI 분석 기반 추천 + 온라인 판매 전략 결정 필요.
            </p>
          </motion.div>

          {/* 3D Printer Strategy */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-light/60 rounded-xl p-6 border border-orange-500/30 mb-6"
          >
            <h3 className="text-xl font-bold text-orange-400 mb-4">🔧 3D 프린터 수익화 제안</h3>

            {/* Our Assets */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="bg-orange-500/10 rounded-lg p-3 text-center border border-orange-500/20">
                <p className="text-orange-400 text-2xl font-bold">10대</p>
                <p className="text-gray-400 text-xs">3D 프린터 보유</p>
              </div>
              <div className="bg-violet-500/10 rounded-lg p-3 text-center border border-violet-500/20">
                <p className="text-violet-400 text-2xl font-bold">판매처</p>
                <p className="text-gray-400 text-xs">제작 능력 보유</p>
              </div>
              <div className="bg-pink-500/10 rounded-lg p-3 text-center border border-pink-500/20">
                <p className="text-pink-400 text-2xl font-bold">릴스</p>
                <p className="text-gray-400 text-xs">릴스 제작 능력</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4">
              이 삼박자가 다 있는 집단이 많이 없음. 모든 전략을 동원해야 함.
            </p>

            {/* Example Products */}
            <div className="space-y-3">
              <div className="bg-dark-light/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">⌨️</span>
                  <h4 className="text-white font-semibold">키캡 키링</h4>
                </div>
                <p className="text-gray-400 text-sm">트렌드 맞춤형 키캡 키링 제작 → 온라인 판매. 소량 생산이지만 3D 프린터 10대로 충분한 물량 확보 가능.</p>
              </div>

              <div className="bg-dark-light/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🎁</span>
                  <h4 className="text-white font-semibold">맞춤형 굿즈</h4>
                </div>
                <p className="text-gray-400 text-sm">팔등 굿즈(오리 키링 등) + 릴스 콘텐츠 활용 판매. 부스 운영 시 현장 판매도 가능.</p>
              </div>
            </div>
          </motion.div>

          {/* Instagram Reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-dark-light/40 rounded-xl p-4 border border-gray-700"
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📱</span>
                <div>
                  <p className="text-white text-sm font-semibold">참고 레퍼런스</p>
                  <p className="text-gray-400 text-xs">키캡 키링 트렌드 레퍼런스 릴스</p>
                </div>
              </div>
              <a
                href="https://www.instagram.com/reels/DVLPQ2sktFa/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-pink-400 px-4 py-2 rounded-lg text-sm hover:from-purple-500/40 hover:to-pink-500/40 transition-all"
              >
                인스타그램 보기 →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
