'use client';

import { motion } from 'framer-motion';

export default function ComparisonSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-slate-800/60 border border-slate-600/40 rounded-full px-4 py-1 mb-4">
            <span className="text-slate-400 text-sm">YEAR COMPARISON</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-200 mb-2">2025 vs 2026</h2>
          <p className="text-slate-500 mb-10">극과 극의 1년</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 2025 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/40 rounded-2xl p-8 border border-emerald-800/20 relative"
            >
              <div className="absolute -top-3 left-6 bg-emerald-900/40 px-4 py-1 rounded-full border border-emerald-700/30">
                <span className="text-emerald-400/60 text-sm font-bold">2025년</span>
              </div>
              <div className="mt-4 text-center">
                <div className="text-7xl font-black text-emerald-400/40 mb-4">ALL PASS</div>
                <p className="text-slate-500 text-sm mb-6">지원한 거의 모든 사업 합격</p>
                <div className="space-y-2">
                  <div className="bg-emerald-900/15 rounded-lg p-3 text-emerald-400/50 text-sm">R&D 2억 합격</div>
                  <div className="bg-emerald-900/15 rounded-lg p-3 text-emerald-400/50 text-sm">다수 지원사업 동시 합격</div>
                  <div className="bg-emerald-900/15 rounded-lg p-3 text-emerald-400/50 text-sm">자신감 충만한 해</div>
                </div>
              </div>
            </motion.div>

            {/* 2026 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/60 rounded-2xl p-8 border border-red-900/40 relative"
            >
              <div className="absolute -top-3 left-6 bg-red-900/40 px-4 py-1 rounded-full border border-red-700/30">
                <span className="text-red-400/80 text-sm font-bold">2026년</span>
              </div>
              <div className="mt-4 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="text-7xl font-black text-red-400/70 mb-4"
                >
                  ALL FAIL
                </motion.div>
                <p className="text-slate-500 text-sm mb-6">지원한 모든 사업 탈락</p>
                <div className="space-y-2">
                  <div className="bg-red-950/30 rounded-lg p-3 text-red-400/50 text-sm">1차 서류 다수 탈락</div>
                  <div className="bg-red-950/30 rounded-lg p-3 text-red-400/50 text-sm">2차 발표까지 간 것도 탈락</div>
                  <div className="bg-red-950/30 rounded-lg p-3 text-red-400/50 text-sm">올해 0건 합격도 가능성 있음</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-10"
          >
            <p className="text-slate-600 text-sm italic">
              &ldquo;작년의 영광은 지나갔다. 이제 스스로 서야 할 때.&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
