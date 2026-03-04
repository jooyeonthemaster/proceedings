'use client';

import { motion } from 'framer-motion';

export default function AIEducationSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-violet-500/20 border border-violet-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-violet-400 text-sm">NEW BUSINESS</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">AI 교육 프로그램 사업 제안</h2>
          <p className="text-gray-400 mb-8">김기홍 교수님으로부터 새로운 비즈니스 기회가 왔습니다</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Left: Proposal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/60 rounded-xl p-6 border border-violet-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-2xl">&#128172;</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-violet-400">교수님 제안</h3>
                  <p className="text-gray-500 text-xs">김기홍 교수 via 카카오톡</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-dark/50 rounded-lg p-3">
                  <p className="text-gray-300 text-sm">&quot;AI 창업교육 프로그램 만들어서 같이 교육사업 해보면 어떨까?&quot;</p>
                </div>
                <div className="bg-dark/50 rounded-lg p-3">
                  <p className="text-gray-300 text-sm">&quot;인맥이 있으니까 프로그램만 괜찮으면 확산은 잘 될 거야&quot;</p>
                </div>
                <div className="bg-dark/50 rounded-lg p-3">
                  <p className="text-gray-300 text-sm">&quot;민간자격증 교육 참가비가 250만원인데 별거 없더라&quot;</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Our Plan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/60 rounded-xl p-6 border border-cyan-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-2xl">&#128161;</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400">우리의 방향</h3>
                  <p className="text-gray-500 text-xs">AI 교육 프로그램 고도화</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-xs">1</span>
                  </div>
                  <p className="text-gray-300 text-sm">기존 민간자격증 &quot;AI창업교육지도사&quot; 프로그램 분석</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-xs">2</span>
                  </div>
                  <p className="text-gray-300 text-sm">우리만의 AI 교육 프로그램으로 고도화 개발</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-xs">3</span>
                  </div>
                  <p className="text-gray-300 text-sm">교수님 네트워크를 통한 확산 전략</p>
                </div>
              </div>

              <div className="mt-4 bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/20">
                <p className="text-cyan-400 text-sm font-medium">참고: campiel.com (AI 창업교육 플랫폼)</p>
                <p className="text-gray-500 text-xs mt-1">우리 AI 도구로 더 잘 만들 수 있다는 판단</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-6"
          >
            <div className="inline-flex items-center bg-violet-500/10 rounded-full px-4 py-2">
              <span className="text-violet-400 text-sm">조만간 김기홍 교수님과 회의 예정 &#8212; 구체적인 방향 논의할 계획</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
