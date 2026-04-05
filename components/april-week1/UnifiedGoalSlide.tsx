'use client';

import { motion } from 'framer-motion';

export default function UnifiedGoalSlide() {
  const pillar1Items = [
    '공통의 목표를 바라봐야 함',
    '구체적인 실현 스텝, 경우의 수와 플랜을 철저하게 설계',
    '큰 그림이 그려져야 함 — "계획 세우는 게 의미 없다"는 생각이 문제였음',
    'A를 시도했을 때 나올 수 있는 모든 경우의 수를 상정하고, 각각에 대해 철저한 실행 전략 수립',
    '파생적 컨트롤 타워가 있고, 실무는 컨트롤 타워에 따라 이루어져야',
    '컨트롤 타워 일원화 필요',
  ];

  const pillar2Items = [
    '30살 전까지 이렇게까지 일할 수 있나 싶을 정도로 일할 것',
    '재밌게 일하고 싶고, 그러려면 성과가 나와야',
    '일하는 열정이나 목표의식이 같을 때까지 우리는 계속 같이 일할 것',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Emerald ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,78,59,0.1)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(13,148,136,0.06)_0%,transparent_50%)]" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-emerald-900/30 border border-emerald-800/40 rounded-full px-4 py-1 mb-4">
            <span className="text-emerald-400/80 text-sm">ALIGNMENT</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-200 mb-2">동일한 목표 &amp; 동일한 열정</h2>
          <p className="text-slate-500 mb-4">최소한 우리 4명은 동일한 목표의식과 동일한 열정을 지녀야 한다</p>

          {/* 현재 상태 진단 - CRITICAL FIX */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-red-950/20 rounded-xl p-4 border border-red-800/30 mb-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <p className="text-red-400/80 text-sm font-bold">현재 상태: 동일한 목표의식 아님</p>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              과연 우리가 지금 동일한 목표의식을 지니고 있는가? 봤을 때 아니라고 생각한다.
              마케팅 팀은 IP 콜라보를 외치고, CAIO는 자체 상품 개발을 어필하고, 영업팀은 또 따로, 재무팀도 각자.
              캐시카우를 형성하는 과정에서조차 의견 합치가 안 되고, 각자 방향으로 가고 있다.
            </p>
          </motion.div>

          {/* Two Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Pillar 1: 목표의식 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/60 rounded-2xl p-5 border border-emerald-900/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-9 h-9 bg-emerald-900/30 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-emerald-400/80 text-lg">&#9678;</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-emerald-400/80">동일한 목표의식</h3>
                  <span className="text-slate-600 text-xs">Shared Vision &amp; Plan</span>
                </div>
              </div>
              <div className="space-y-2">
                {pillar1Items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    className="flex items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 mt-1.5 flex-shrink-0 opacity-60" />
                    <span className="text-slate-400 text-xs leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pillar 2: 열정 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/60 rounded-2xl p-5 border border-teal-900/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-9 h-9 bg-teal-900/30 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-teal-400/80 text-lg">&#9733;</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-teal-400/80">동일한 열정</h3>
                  <span className="text-slate-600 text-xs">Shared Passion &amp; Drive</span>
                </div>
              </div>
              <div className="space-y-3">
                {pillar2Items.map((quote, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="bg-teal-950/20 rounded-lg p-3 border border-teal-900/20"
                  >
                    <p className="text-slate-300 text-sm italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-emerald-950/20 border border-emerald-900/30 rounded-2xl p-5 text-center"
          >
            <p className="text-emerald-400/60 text-xs uppercase tracking-wider font-bold mb-3">핵심</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              공통의 목표와 구체적인 실현 스텝, 그 과정에서 나오는 변수들을<br />
              <span className="text-emerald-300 font-semibold">전부 철저하게 설계해서 큰 그림이 그려져야</span> 하고,<br />
              우리 모두가 그 동일한 목표에 따라서 가는 것이 중요하다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
