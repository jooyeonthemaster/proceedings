'use client';

import { motion } from 'framer-motion';

export default function WhyAIQuestionSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-4">
            01. 출발점
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-purple-400">Q.</span> AI로 예술을 한다면,<br/>
            <span className="text-pink-400">왜 하필 AI인가?</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-10"
        >
          <p className="text-xl text-gray-400 mb-6">
            단순해 보이지만, 파고들수록 복잡한 질문이었다.<br/>
            이 질문에는 사실 <span className="text-white font-bold">두 개의 완전히 다른 질문</span>이 숨어 있다.
          </p>
        </motion.div>

        {/* Two Hidden Questions */}
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-dark-light/50 rounded-2xl p-6 border border-gray-700"
          >
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              "AI로 예술을 한다"
            </h3>
            <p className="text-gray-400 mb-4">
              AI를 <span className="text-cyan-400 font-semibold">도구</span>로 쓴다는 뜻.<br/>
              붓, 카메라, 신시사이저처럼.
            </p>
            <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
              <p className="text-red-400 text-sm font-semibold mb-2">본질적인 약점:</p>
              <p className="text-gray-400 text-sm">
                AI는 너무 많은 걸 대신해준다. 이미지 구상, 구도, 색감, 스타일—
                <span className="text-red-300">"그래서 작가인 내가 한 건 뭐지?"</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/30"
          >
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              "AI가 예술이 된다"
            </h3>
            <p className="text-gray-400 mb-4">
              AI의 <span className="text-purple-400 font-semibold">반응 자체</span>가 작품이 되는 것.<br/>
              완전히 다른 이야기.
            </p>
            <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
              <p className="text-purple-400 text-sm font-semibold mb-2">AC'SCENT의 예:</p>
              <p className="text-gray-400 text-sm">
                관객이 사진 입력 → AI가 해석 → 향기 출력 → 경험 생성<br/>
                <span className="text-purple-300">관객과 AI 사이의 상호작용 자체가 예술</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* First Answer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
            <p className="text-lg text-white font-semibold mb-2">
              💡 첫 번째 답:
            </p>
            <p className="text-gray-300">
              <span className="text-purple-400 font-bold">"사람이 혼자서는 절대 만들 수 없는 경험이 있으니까."</span><br/>
              실시간 반응, 매번 다름, 예측 불가능하면서 맥락 있는 경험—<br/>
              정적인 작품으로는 불가능. AI가 "살아있는 매체"가 될 때만 가능.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
