'use client';

import { motion } from 'framer-motion';

export default function GrantResultsSlide() {
  const passed = [
    { name: 'R&D 디딤돌', entity: '(주) 네안데르', note: '서류 합격 → 발표평가 완료' },
    { name: '청창사 딥테크', entity: '(주) 네안데르', note: '서류 합격' },
    { name: '흑석 캠퍼스타운', entity: '(주) 네안데르', note: '서류 합격' },
  ];

  const failed = [
    { name: '초창패 딥테크', entity: '일해라컴퍼니' },
    { name: '청창사 일반', entity: '와작홈즈' },
    { name: '청창사 일반', entity: '일해라컴퍼니' },
    { name: '흑석 캠퍼스타운', entity: '일해라컴퍼니' },
    { name: '고대 캠퍼스타운', entity: '와작홈즈' },
  ];

  const dropped = [
    { name: '동서울대 AI 교육 입찰', reason: '설명회 참석 후 핏하지 않아 지원 취소' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-cyan-400 text-sm">GRANT STATUS</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">지원사업 결과 현황</h2>
          <p className="text-gray-400 mb-8">합격 / 불합격 / 지원 취소 정리</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 합격 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-emerald-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-emerald-400 text-xl">&#10003;</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-400">합격</h3>
                  <span className="text-gray-500 text-sm">서류 합격 기준</span>
                </div>
              </div>
              <div className="space-y-3">
                {passed.map((item, i) => (
                  <div key={i} className="bg-emerald-500/10 rounded-lg p-3">
                    <div className="text-white text-sm font-semibold">{item.name}</div>
                    <div className="text-emerald-400 text-xs">{item.entity}</div>
                    <div className="text-gray-500 text-xs mt-1">{item.note}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="text-3xl font-black text-emerald-400">{passed.length}건</span>
              </div>
            </motion.div>

            {/* 불합격 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-red-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-red-400 text-xl">&#10007;</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400">불합격</h3>
                  <span className="text-gray-500 text-sm">탈락 건</span>
                </div>
              </div>
              <div className="space-y-3">
                {failed.map((item, i) => (
                  <div key={i} className="bg-red-500/10 rounded-lg p-3">
                    <div className="text-white text-sm font-semibold">{item.name}</div>
                    <div className="text-red-400 text-xs">{item.entity}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="text-3xl font-black text-red-400">{failed.length}건</span>
              </div>
            </motion.div>

            {/* 지원 취소 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-gray-600"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-500/20 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-gray-400 text-xl">&mdash;</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-400">지원 취소</h3>
                  <span className="text-gray-500 text-sm">전략적 포기</span>
                </div>
              </div>
              <div className="space-y-3">
                {dropped.map((item, i) => (
                  <div key={i} className="bg-gray-500/10 rounded-lg p-3">
                    <div className="text-white text-sm font-semibold">{item.name}</div>
                    <div className="text-gray-500 text-xs mt-1">{item.reason}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="text-3xl font-black text-gray-400">{dropped.length}건</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
