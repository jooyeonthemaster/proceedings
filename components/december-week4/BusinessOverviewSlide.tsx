'use client';

import { motion } from 'framer-motion';

export default function BusinessOverviewSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            빅 픽처
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            2026년 네안데르 <span className="text-primary">4대 핵심 사업</span>
          </h2>
          <p className="text-gray-400">잡다한 것들 정리 → 딱 4가지에 집중</p>
        </motion.div>

        {/* Business Structure */}
        <div className="space-y-6">
          {/* 장기 비전 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary">🚀</span>
              <h3 className="text-lg text-primary font-semibold">장기 비전 (Future)</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-xl p-5 border border-primary/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <h4 className="text-xl font-bold text-white">네안데르랩</h4>
                    <p className="text-primary text-sm">체험형 AI 콘텐츠 창작 집단</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">오프라인 공간에서 체험할 수 있는 AI 콘텐츠 기획 및 개발</p>
              </div>
              <div className="bg-cyan-500/10 rounded-xl p-5 border border-cyan-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🌿</span>
                  <div>
                    <h4 className="text-xl font-bold text-white">스팟 (SPOT)</h4>
                    <p className="text-cyan-400 text-sm">공간 향기 디퓨저 브랜드</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">핫플레이스 콜라보 + 온라인 판매</p>
              </div>
            </div>
          </motion.div>

          {/* 캐시카우 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-amber-400">💰</span>
              <h3 className="text-lg text-amber-400 font-semibold">캐시카우 (Now)</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🧪</span>
                  <div>
                    <h4 className="text-xl font-bold text-white">악센트 ID</h4>
                    <p className="text-amber-400 text-sm">AI 기반 향수공방</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-amber-500/20 rounded text-xs text-amber-300">월 1,500만 목표</span>
                  <span className="px-2 py-0.5 bg-primary/20 rounded text-xs text-primary">장기비전 요소 有</span>
                </div>
                <p className="text-gray-400 text-sm">AI 콘텐츠 + 조향 체험</p>
              </div>
              <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🎂</span>
                  <div>
                    <h4 className="text-xl font-bold text-white">악센트 WOW</h4>
                    <p className="text-purple-400 text-sm">생일 이벤트 향수공방</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-purple-500/20 rounded text-xs text-purple-300">월 1,500만 목표</span>
                  <span className="px-2 py-0.5 bg-gray-500/20 rounded text-xs text-gray-300">순수 캐시카우</span>
                </div>
                <p className="text-gray-400 text-sm">류다혜 전담 예정 (2026~)</p>
              </div>
            </div>
          </motion.div>

          {/* 신규 추진 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-400">🆕</span>
              <h3 className="text-lg text-green-400 font-semibold">신규 추진 (2026)</h3>
            </div>
            <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📦</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white">뿌덕 온라인</h4>
                  <p className="text-green-400 text-sm">악센트 ID 온라인 배송 서비스화</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-300">캐시카우 보강</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
