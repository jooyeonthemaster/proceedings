'use client';

import { motion } from 'framer-motion';

export default function WhyThisTopicSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500 bg-opacity-20 text-orange-400 text-sm mb-4">
            왜 이 주제인가
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="text-orange-400">Q.</span> 왜 종교를 건드리는가?
          </h2>
        </motion.div>

        {/* Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-500/30">
            <h3 className="text-xl font-bold text-orange-400 mb-4">현재 상황: 통일교 게이트</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <span className="text-yellow-400">•</span> 일본에서 통일교 문제가 사회적 이슈로 폭발
              </p>
              <p>
                <span className="text-yellow-400">•</span> 아베 총리 암살 사건의 배경으로 통일교 연루
              </p>
              <p>
                <span className="text-yellow-400">•</span> 한국에서도 관련 논의가 점점 활발해지는 중
              </p>
              <p>
                <span className="text-yellow-400">•</span> 종교 권력에 대한 사회적 관심이 최고조
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why It's Perfect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4 text-center">왜 지금 이 주제가 완벽한가</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-red-500/10 rounded-lg">
                <p className="text-red-400 font-bold mb-1">시의성</p>
                <p className="text-gray-400 text-sm">사회가 이미 이 주제에<br/>관심을 갖고 있음</p>
              </div>
              <div className="text-center p-3 bg-orange-500/10 rounded-lg">
                <p className="text-orange-400 font-bold mb-1">보편성</p>
                <p className="text-gray-400 text-sm">종교 권위는 모든 문화권에서<br/>민감한 주제</p>
              </div>
              <div className="text-center p-3 bg-yellow-500/10 rounded-lg">
                <p className="text-yellow-400 font-bold mb-1">AI 적합성</p>
                <p className="text-gray-400 text-sm">\"AI가 설교한다\"는<br/>강력한 불편함 유발</p>
              </div>
              <div className="text-center p-3 bg-cyan-500/10 rounded-lg">
                <p className="text-cyan-400 font-bold mb-1">예술성</p>
                <p className="text-gray-400 text-sm">패러디를 통한<br/>사회적 질문</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Point */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-5 border border-red-500/30 text-center">
            <p className="text-xl text-white font-bold">
              <span className="text-red-400">\"불신지옥\"</span>이 아니라<br/>
              <span className="text-orange-400">\"AI를 믿지 않으면 최적화되지 못한다\"</span>
            </p>
            <p className="text-gray-400 mt-2">
              → 종교적 메시지를 AI 용어로 번역했을 때의 기괴함
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
