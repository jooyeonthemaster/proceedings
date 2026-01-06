'use client';

import { motion } from 'framer-motion';

export default function LeeLenamPhilosophySlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500 bg-opacity-20 text-amber-400 text-sm mb-4">
            선례 연구 03
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="text-amber-400">이이남</span>의 철학
          </h2>
          <p className="text-2xl text-gray-300 font-semibold">
            "대중과 소통하는 예술"
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left: 5분의 미학 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl p-6 border border-amber-500/30"
          >
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">"5분의 미학"</h3>
            <p className="text-gray-300 text-lg mb-4">
              한 작품 앞에 <span className="text-white font-bold">5분 이상</span> 머물게 만드는 것.
            </p>
            <div className="space-y-3">
              <div className="bg-dark-light/50 rounded-lg p-4 border border-amber-500/20">
                <p className="text-gray-400 text-sm">
                  제도와 시스템에 갇혀 빛을 잃은 고전을<br/>
                  <span className="text-amber-400 font-semibold">디지털로 부활</span>시킨다.
                </p>
              </div>
              <div className="bg-dark-light/50 rounded-lg p-4 border border-amber-500/20">
                <p className="text-gray-400 text-sm">
                  김홍도의 풍속도 속 인물들이 <span className="text-white">움직이고</span>,<br/>
                  모네의 수련이 <span className="text-white">바람에 흔들린다</span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Key Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div className="bg-dark-light/50 rounded-2xl p-6 border border-gray-700">
              <div className="text-4xl mb-4">🎨</div>
              <p className="text-gray-400 mb-2">왜 김홍도를 선택했나?</p>
              <p className="text-2xl text-white font-bold mb-4">
                "대중에게 사랑받기 위해서."
              </p>
              <p className="text-gray-500 text-sm italic">
                — 이이남 작가 인터뷰 중
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-5 border border-amber-500/30"
            >
              <div className="text-3xl mb-3">❄️</div>
              <p className="text-xl text-white font-semibold">
                "차가운 디지털에<br/>
                <span className="text-amber-400">온기를 불어넣는 것</span>"
              </p>
              <p className="text-gray-400 text-sm mt-2">
                — 이이남의 작업 철학
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
