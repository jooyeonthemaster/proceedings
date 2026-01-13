'use client';

import { motion } from 'framer-motion';

export default function AIReligionBackgroundSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Background Story
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              AI교 제안의 배경
            </h2>
            <p className="text-gray-400 mt-2">왜 이런 아이디어가 나왔는가</p>
          </div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-2xl p-6 mb-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">비전</h3>
                <span className="text-purple-400 text-sm">팀랩/디스트릭트처럼</span>
              </div>
            </div>
            <p className="text-gray-300">
              <span className="text-purple-400 font-medium">AI 예술 집단</span>으로서의 정체성을 확립하고,
              장기적으로 지속 가능한 사업 모델을 구축하자는 제안이었습니다.
            </p>
          </motion.div>

          {/* Timeline Reality */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* 2026년 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/50 border border-amber-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-amber-500/20 border-2 border-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-lg">2026</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">마지막 기회</h3>
                  <span className="text-amber-400 text-sm">지원금 활용 가능</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>아직 지원금 수령 가능</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>새로운 시도를 위한 버퍼 존재</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>피벗을 위한 시간적 여유</span>
                </li>
              </ul>
            </motion.div>

            {/* 2027년 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/50 border border-red-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-red-500/20 border-2 border-red-500 rounded-full flex items-center justify-center">
                  <span className="text-red-400 font-bold text-lg">2027</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">지원금 종료</h3>
                  <span className="text-red-400 text-sm">자립 필수</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>지원금 수령 어려움</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>자체 수익으로 운영 필수</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>준비 안 되면 존속 위기</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Key Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-purple-500/10 to-amber-500/10 border border-purple-500/30 rounded-2xl p-6 text-center"
          >
            <p className="text-xl text-white">
              <span className="text-purple-400 font-bold">2026년</span>이{' '}
              <span className="text-amber-400 font-bold">마지막 준비 기간</span>입니다.
            </p>
            <p className="text-gray-400 mt-2">
              하지만 계획한 투자를 실행하면 어떻게 될까요?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
