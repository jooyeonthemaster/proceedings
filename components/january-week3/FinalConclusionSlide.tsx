'use client';

import { motion } from 'framer-motion';

export default function FinalConclusionSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Conclusion
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              최종 결론
            </h2>
          </div>

          {/* Main Conclusion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/30 rounded-3xl p-8 mb-8 text-center"
          >
            <div className="inline-block p-4 bg-primary/20 rounded-full mb-6">
              <span className="text-5xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              2027년을 대비한
            </h3>
            <p className="text-3xl text-primary font-bold mb-4">
              적자 해소 구조 필요
            </p>
            <p className="text-gray-400">
              지원금 없이도 지속 가능한 사업 모델 구축이 최우선
            </p>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-light/50 border border-gray-700 rounded-2xl p-6 mb-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 text-center">다음 스텝</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-dark/50 rounded-xl p-4">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400 font-bold">1</span>
                </div>
                <div>
                  <p className="text-white font-medium">뿌디 V2 완성</p>
                  <p className="text-gray-400 text-sm">1/21 목표, 온라인 판매 기반</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-dark/50 rounded-xl p-4">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold">2</span>
                </div>
                <div>
                  <p className="text-white font-medium">브랜드 컨셉 정립</p>
                  <p className="text-gray-400 text-sm">"당신만의 향을 찾는 가장 유쾌한 방법"</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-dark/50 rounded-xl p-4">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <div>
                  <p className="text-white font-medium">AI교 콘텐츠 기획</p>
                  <p className="text-gray-400 text-sm">바이럴 마케팅 도구로 활용</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-dark/50 rounded-xl p-4">
                <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 font-bold">4</span>
                </div>
                <div>
                  <p className="text-white font-medium">팬덤 시장 영업</p>
                  <p className="text-gray-400 text-sm">대량 납품 채널 확보</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-4 mb-6"
          >
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🚫</div>
              <div className="text-red-400 text-sm font-medium">과대평가 금지</div>
              <div className="text-gray-500 text-xs mt-1">단기 성과 기대 X</div>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-amber-400 text-sm font-medium">적자 해소 우선</div>
              <div className="text-gray-500 text-xs mt-1">지속 가능성 확보</div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">📈</div>
              <div className="text-emerald-400 text-sm font-medium">장기 성장 도모</div>
              <div className="text-gray-500 text-xs mt-1">10년 관점 유지</div>
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/30 rounded-2xl px-8 py-4">
              <p className="text-xl text-white">
                <span className="text-primary font-bold">2026년</span>, 생존을 위한 구조 개편의 해
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
