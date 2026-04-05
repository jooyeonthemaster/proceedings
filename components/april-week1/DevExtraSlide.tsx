'use client';

import { motion } from 'framer-motion';

export default function DevExtraSlide() {
  const accomplished = [
    { label: '뿌덕 온라인 사이트 디벨롭', desc: '관리자 페이지 다양한 기능 추가' },
    { label: 'PG 결제 심사 진행 중', desc: '4월 첫째주 중 완료 예정' },
  ];

  const upcoming = [
    { label: '영어 학원 AI 프로그램 개발', desc: '영어 학원 원장쌤이 AI 학원 프로그램 개발 외주 의뢰 → 5월부터 영어 학원 전문 프로그램을 솔루션 형태로 개발·제공 계획' },
    { label: '다양한 프로그램 지속 개발 중', desc: '새로운 기회 탐색 및 개발 진행' },
  ];

  const examples = [
    '힉스필드',
    '뤼튼',
    '제타',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-cyan-900/20 border border-cyan-800/30 rounded-full px-4 py-1 mb-4">
            <span className="text-cyan-400/70 text-sm">BEYOND KPI</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-200 mb-2">KPI 외적 성과 + 향후 계획</h2>
          <p className="text-slate-500 mb-8">개발팀 추가 성과 및 방향성</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* 성과 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/60 rounded-2xl p-6 border border-cyan-900/30"
            >
              <h3 className="text-lg font-bold text-cyan-300/80 mb-4">완료 항목</h3>
              <div className="space-y-3">
                {accomplished.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-cyan-950/20 rounded-lg p-3 flex items-start gap-2"
                  >
                    <span className="text-cyan-400 mt-0.5">&#10003;</span>
                    <div>
                      <p className="text-slate-300 text-sm font-semibold">{item.label}</p>
                      <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 향후 계획 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/60 rounded-2xl p-6 border border-teal-900/30"
            >
              <h3 className="text-lg font-bold text-teal-300/80 mb-4">향후 계획</h3>
              <div className="space-y-3">
                {upcoming.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="bg-teal-950/20 rounded-lg p-3 flex items-start gap-2"
                  >
                    <span className="text-teal-400 mt-0.5">&#9654;</span>
                    <div>
                      <p className="text-slate-300 text-sm font-semibold">{item.label}</p>
                      <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Critical realization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-amber-950/30 to-red-950/20 rounded-2xl p-6 border border-amber-700/40"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-900/40 rounded-lg flex items-center justify-center">
                <span className="text-amber-400 text-lg">!</span>
              </div>
              <h3 className="text-lg font-bold text-amber-300">위기 인식</h3>
            </div>

            <p className="text-amber-200/80 text-base font-semibold mb-4 leading-relaxed">
              &ldquo;진짜 이 상태로 가면 큰일 나겠다. 지금 이대로 있다가는 진짜 나는 기회를 놓치겠다&rdquo;
            </p>

            <div className="space-y-2 mb-4">
              <p className="text-slate-400 text-sm">
                &#8226; 기술 개발 자체가 중요하지 않음
              </p>
              <p className="text-slate-400 text-sm">
                &#8226; 얼마나 빠르게 인프라를 뚫고, 유저를 모으고, 시장 진입 장벽을 만드느냐가 핵심
              </p>
              <p className="text-slate-400 text-sm">
                &#8226; {examples.join(', ')} 예시: 누구나 만들 수 있지만, &ldquo;처음 했고 잘 했던&rdquo; 곳이 승자
              </p>
              <p className="text-slate-400 text-sm">
                &#8226; 지금 와서 같은 걸 만들면? 종속된 유저를 어떻게 데려와? 가격 경쟁력도 없는데?
              </p>
            </div>

            <div className="bg-amber-950/30 rounded-lg p-3 text-center">
              <p className="text-amber-400/80 text-sm font-medium">
                &ldquo;타이밍이 정말 중요하고, 그 타이밍이 보이는 시장이 너무너무 많다&rdquo;
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
