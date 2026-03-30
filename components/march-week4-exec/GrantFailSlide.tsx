'use client';

import { motion } from 'framer-motion';

export default function GrantFailSlide() {
  const failures = [
    { name: '청창사', entity: '일해라컴퍼니', stage: '1차 서류 탈락' },
    { name: '청창사', entity: '와작홈즈', stage: '1차 서류 탈락' },
    { name: '관광 초기', entity: '-', stage: '1차 서류 탈락' },
    { name: '초창패 딥테크', entity: '-', stage: '1차 탈락' },
    { name: '초창패 일반', entity: '와작홈즈', stage: '서류 탈락' },
    { name: '초창패 일반', entity: '일해라컴퍼니', stage: '서류 탈락' },
    { name: 'R&D 디딤돌', entity: '(주) 네안데르', stage: '2차 발표 탈락' },
    { name: '청창사 딥테크', entity: '(주) 네안데르', stage: '2차 탈락' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Subtle dark vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-red-900/30 border border-red-800/40 rounded-full px-4 py-1 mb-4">
            <span className="text-red-400/80 text-sm">GRANT STATUS 2026</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-200 mb-2">지원사업 탈락 현황</h2>
          <p className="text-slate-500 mb-8">작년 All Pass &rarr; 올해 All Fail</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 탈락 리스트 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/60 rounded-2xl p-6 border border-red-900/30"
            >
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 bg-red-900/30 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-red-400/80 text-xl">&#10007;</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400/80">탈락 목록</h3>
                  <span className="text-slate-600 text-sm">2026년 누적</span>
                </div>
              </div>
              <div className="space-y-2">
                {failures.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="bg-red-950/30 rounded-lg p-3 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-slate-300 text-sm font-semibold">{item.name}</div>
                      <div className="text-slate-600 text-xs">{item.entity}</div>
                    </div>
                    <span className="text-red-400/60 text-xs bg-red-950/40 px-2 py-1 rounded">{item.stage}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 text-center">
                <span className="text-4xl font-black text-red-400/70">{failures.length}건</span>
                <span className="text-slate-600 text-sm ml-2">탈락</span>
              </div>
            </motion.div>

            {/* 합격 (텅 빈 카드) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800/50 flex flex-col"
            >
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 bg-emerald-900/20 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-emerald-600/40 text-xl">&#10003;</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-600/40">합격</h3>
                  <span className="text-slate-600 text-sm">2026년 누적</span>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4 opacity-30">...</div>
                  <p className="text-slate-600 text-lg">텅 비어있음</p>
                  <p className="text-slate-700 text-sm mt-2">아직 합격한 지원사업 0건</p>
                </motion.div>
              </div>

              <div className="mt-5 text-center">
                <span className="text-4xl font-black text-slate-700">0건</span>
                <span className="text-slate-600 text-sm ml-2">합격</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
