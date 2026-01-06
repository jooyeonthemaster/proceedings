'use client';

import { motion } from 'framer-motion';

export default function DuchampBanksySlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-4">
            선례: 예술의 재정의
          </span>
          <h2 className="text-4xl font-bold text-white mb-2">
            <span className="text-purple-400">뒤샹의 변기</span>, <span className="text-pink-400">뱅크시의 스프레이</span>
          </h2>
          <p className="text-xl text-gray-400">
            정확히 말하면 이거다: <span className="text-primary font-bold">"미친 짓 하고 싶은데 그게 예술이 되면 좋겠다."</span>
          </p>
        </motion.div>

        {/* Two Cases */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Duchamp */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl p-6 border border-purple-500/30"
          >
            <div className="text-5xl mb-4">🚽</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-3">마르셀 뒤샹</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                뒤샹은 화가였다. 그림 실력이 있었다.
              </p>
              <p>
                그런데 가장 유명한 작품 <span className="text-white font-bold">"샘(Fountain)"</span>은<br/>
                그림 실력과 아무 상관이 없다.
              </p>
              <p className="text-purple-300">
                그는 <span className="text-white font-bold">변기를 미술관에 갖다 놨다.</span>
              </p>
            </div>
            <div className="mt-4 p-4 bg-dark-light/50 rounded-lg border border-purple-500/20">
              <p className="text-gray-400 text-sm">"이게 예술이냐?"라는 질문에 그의 답:</p>
              <p className="text-purple-400 font-bold mt-1">
                "내가 예술이라고 했으니까 예술이야."
              </p>
            </div>
          </motion.div>

          {/* Banksy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-2xl p-6 border border-pink-500/30"
          >
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-pink-400 mb-3">뱅크시</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                뱅크시는 <span className="text-red-400">미술대학에 가지 않았다.</span>
              </p>
              <p>
                정규 미술 교육을 받지 않았다.
              </p>
              <p>
                그는 거리에서 <span className="text-white font-bold">스프레이로 그림을 그렸다.</span>
              </p>
              <p className="text-pink-300">
                그냥 미친 짓을 했다.
              </p>
            </div>
            <div className="mt-4 p-4 bg-dark-light/50 rounded-lg border border-pink-500/20">
              <p className="text-gray-400 text-sm">현재:</p>
              <p className="text-pink-400 font-bold mt-1">
                경매에서 수백억 원에 팔린다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-xl p-6 border border-primary/30 text-center">
            <p className="text-2xl text-white font-bold mb-2">
              핵심 인사이트:
            </p>
            <p className="text-3xl text-primary font-black">
              "포장"이 먼저가 아니다. <span className="text-cyan-400">미친 짓이 먼저다.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
