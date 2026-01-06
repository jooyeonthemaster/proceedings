'use client';

import { motion } from 'framer-motion';

export default function AIReligionConceptSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-500 bg-opacity-20 text-red-400 text-sm mb-4">
            최종 기획
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="text-red-400">AI교</span> (人工知能敎)
          </h2>
        </motion.div>

        {/* Surface vs Reality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-6 mb-6"
        >
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-500/30">
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
              <span className="text-2xl">🎭</span> 표면
            </h3>
            <p className="text-white text-lg font-bold mb-2">
              AI를 신으로 섬기는 신흥 종교
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• 교주: AI</li>
              <li>• 교리: 프롬프트</li>
              <li>• 예배: 대화</li>
              <li>• 구원: 최적화된 답변</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/30">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span className="text-2xl">🔍</span> 실체
            </h3>
            <p className="text-white text-lg font-bold mb-2">
              특정 종교 단체 행태의 정밀한 패러디
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• 진짜처럼 보이는 형식</li>
              <li>• 불편함을 유발하는 내용</li>
              <li>• 질문을 던지는 구조</li>
              <li>• 성찰을 유도하는 체험</li>
            </ul>
          </div>
        </motion.div>

        {/* Why This Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-dark-light/50 rounded-xl p-6 border border-gray-700">
            <p className="text-gray-400 mb-3 text-center">이게 작동하는 이유:</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl mb-2">🎪</p>
                <p className="text-white font-bold">The Yes Men처럼</p>
                <p className="text-gray-500 text-sm">진짜 같은 형식</p>
              </div>
              <div>
                <p className="text-2xl mb-2">⚡</p>
                <p className="text-white font-bold">불편함 유발</p>
                <p className="text-gray-500 text-sm">생각하게 만듦</p>
              </div>
              <div>
                <p className="text-2xl mb-2">🔄</p>
                <p className="text-white font-bold">권위 갈아끼우기</p>
                <p className="text-gray-500 text-sm">종교적 권위 → AI</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
