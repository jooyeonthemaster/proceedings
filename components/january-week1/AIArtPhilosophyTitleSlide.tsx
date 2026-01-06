'use client';

import { motion } from 'framer-motion';

export default function AIArtPhilosophyTitleSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>

        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-10 text-[120px] font-black text-white select-none">
            WHY
          </div>
          <div className="absolute bottom-1/4 right-10 text-[120px] font-black text-purple-400 select-none">
            AI?
          </div>
        </div>
      </div>

      <div className="text-center z-10 space-y-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-6 py-3 rounded-full bg-purple-500 bg-opacity-20 border border-purple-500 text-purple-400 mb-6 text-lg">
            AI 예술 브랜딩 전략
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
            <span className="text-purple-400">사고의 여정</span>
          </h1>
          <div className="h-2 w-64 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <p className="text-2xl text-gray-300 leading-relaxed">
            "우리는 왜 AI로 예술을 하는가"라는 단순한 질문에서 출발해,<br/>
            <span className="text-pink-400 font-bold">90분에 걸친 문답</span> 끝에<br/>
            <span className="text-cyan-400 font-bold">"AI교 트럭 퍼포먼스"</span>라는 구체적 기획에 도달하기까지
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4"
        >
          <div className="bg-dark-light/50 rounded-xl p-6 border border-purple-500/30 max-w-3xl mx-auto">
            <p className="text-lg text-gray-400 italic">
              "중요한 것은 결론이 아니다.<br/>
              어떤 질문이 어떤 답을 낳았고,<br/>
              그 답이 왜 불충분해서 다음 질문으로 이어졌는지—<br/>
              <span className="text-purple-400 font-semibold">그 흐름 자체가 이 문서의 핵심이다.</span>"
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-6"
        >
          <div className="flex justify-center gap-3 text-sm text-gray-500 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-2 bg-dark-light rounded-lg border border-gray-700">
              <span className="text-purple-400">01</span>
              <span>출발점</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-dark-light rounded-lg border border-gray-700">
              <span className="text-pink-400">02</span>
              <span>선례연구</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-dark-light rounded-lg border border-gray-700">
              <span className="text-cyan-400">03</span>
              <span>AI특성</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-dark-light rounded-lg border border-gray-700">
              <span className="text-amber-400">04</span>
              <span>방향전환</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-dark-light rounded-lg border border-gray-700">
              <span className="text-red-400">05</span>
              <span>AI교</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
