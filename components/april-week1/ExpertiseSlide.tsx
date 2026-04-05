'use client';

import { motion } from 'framer-motion';

export default function ExpertiseSlide() {
  const timeline = [
    { year: '2024', desc: '신촌 매장 창고에서 ChatGPT 코드를 아임웹에 붙여넣기', dot: 'bg-violet-600/40' },
    { year: '2025', desc: '성장기', dot: 'bg-violet-500/50' },
    { year: '2026', desc: '중대 AI 대학원 앞에서 바이브코딩 시연 / 중대 소프트웨어 4학년 80명 대상 강의', dot: 'bg-violet-400' },
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
          <div className="inline-flex items-center bg-violet-900/20 border border-violet-800/30 rounded-full px-4 py-1 mb-4">
            <span className="text-violet-400/70 text-sm">EXPERTISE &amp; AI</span>
          </div>

          <h2 className="text-4xl font-bold text-slate-200 mb-2">전문성 &amp; AI 활용론</h2>
          <p className="text-slate-500 mb-6">우리 4명, 각자의 역할에서 최고가 되어야</p>

          {/* Key message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-violet-950/30 rounded-2xl p-5 border border-violet-800/30 mb-6"
          >
            <p className="text-violet-200/80 text-sm leading-relaxed text-center">
              &ldquo;대한민국에서 사업계획서를 가장 잘 쓰는 사람이 되기는 힘들지만,<br />
              <span className="text-violet-300 font-bold">사업계획서 쓰는 사람들 중에서 AI를 가장 잘 쓰는 사람이 될 수는 있다</span>&rdquo;
            </p>
          </motion.div>

          {/* 전문성 정의 + 한철 지남 경고 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-slate-900/60 rounded-xl p-4 border border-violet-800/20 mb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-violet-400/70 text-xs font-bold mb-2">&ldquo;전문성&rdquo;의 정의</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  해당 역할을 하는 현업 종사자들을 대상으로 <span className="text-violet-300 font-semibold">체계적으로 정리해서 공유할 수 있는 노하우</span>가 체계화된 형태로 기록되고 전달될 수 있는 수준
                </p>
              </div>
              <div>
                <p className="text-amber-400/70 text-xs font-bold mb-2">이미 한철 지났다</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  &ldquo;남들보다 AI 잘 쓴다&rdquo; 수준이면 <span className="text-amber-300 font-semibold">이미 한철 지나있음</span>. 새 기술에 관심 가지는 게 아니라, 지금 하는 것들을 <span className="text-amber-300 font-semibold">얼마나 효율적으로 개선할 수 있을까</span>에 집중해야
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {/* AI Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/60 rounded-2xl p-5 border border-violet-900/30"
            >
              <h3 className="text-lg font-bold text-violet-300/80 mb-4">AI Journey</h3>
              <div className="relative">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-violet-800/30" />
                <div className="space-y-4">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.15 }}
                      className="flex items-start gap-4 pl-0"
                    >
                      <div className={`w-6 h-6 ${item.dot} rounded-full flex-shrink-0 flex items-center justify-center relative z-10`}>
                        <div className="w-2 h-2 bg-violet-300 rounded-full" />
                      </div>
                      <div>
                        <span className="text-violet-400 text-sm font-bold">{item.year}</span>
                        <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mt-3 bg-violet-950/20 rounded-lg p-3">
                <p className="text-slate-500 text-xs">
                  클로드 쓰는 사람 4명, 맥스 플랜 0명 (80명 중) / 교수님 재초청 요청
                </p>
              </div>
            </motion.div>

            {/* 구태언 변호사 + 핵심 메시지 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/60 rounded-2xl p-5 border border-purple-900/30"
            >
              <h3 className="text-lg font-bold text-purple-300/80 mb-4">AI = 계층 이동의 마지막 사다리</h3>

              <div className="bg-purple-950/30 rounded-lg p-4 border border-purple-800/20 mb-4">
                <p className="text-purple-300/70 text-xs font-bold mb-1">구태언 변호사 (김앤장 출신)</p>
                <p className="text-slate-400 text-xs">법조계에서도 신입 변호사 자체가 필요 없어짐. AI를 얼마나 잘 다루냐에 대해 계속 고민 중</p>
                <p className="text-slate-400 text-xs mt-2">최고의 변호사가 되려고 하면 망함. <span className="text-purple-300">변호사들 중 AI를 가장 잘 쓰는 사람</span>이 되어야</p>
              </div>

              <div className="space-y-2">
                <div className="bg-purple-950/15 rounded-lg p-3">
                  <p className="text-slate-400 text-xs">
                    회계사, 세무사 다 마찬가지. 각자 역할에서 진짜 <span className="text-slate-300 font-semibold">영업에서, 마케팅에서, 재무관리에서</span> AI를 이렇게까지 쓸 수 있다고? 하는 수준
                  </p>
                </div>
                <div className="bg-purple-950/15 rounded-lg p-3">
                  <p className="text-slate-400 text-xs">
                    실무에서 하는 일을 하는 것과 별개로, 그 실무가 <span className="text-slate-300 font-semibold">노하우로 쌓이고 내재화</span>되고, 현업에서 실용적으로 적용되어야
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 결론 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-slate-900/40 rounded-2xl p-5 border border-violet-700/30"
          >
            <div className="space-y-2 text-center">
              <p className="text-slate-400 text-sm">
                AI를 쓰든 안 쓰든 자유. 하지만 각자 역할에서 <span className="text-slate-200 font-semibold">현업 전문가들 앞에서 강의해도 부끄럽지 않을 수준</span> 필요
              </p>
              <p className="text-violet-400/70 text-sm font-medium">
                각자의 노하우를 체계화하고, 내재화해야
              </p>
              <div className="h-px w-32 bg-violet-800/30 mx-auto my-2" />
              <p className="text-slate-500 text-xs">
                &ldquo;각자 진짜 자기 역할이나 분야에 대해서 알고 싶은 부분들이 있으면 난 항상 발벗고 나선다&rdquo;
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
