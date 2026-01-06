'use client';

import { motion } from 'framer-motion';

export default function TruckFormSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500 bg-opacity-20 text-blue-400 text-sm mb-4">
            물리적 형태
          </span>
          <h2 className="text-4xl font-bold text-white mb-2">
            <span className="text-blue-400">1톤 윙바디 트럭</span> + 고해소 부스
          </h2>
        </motion.div>

        {/* Truck Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/30">
            <div className="flex items-center gap-6">
              {/* Truck Visual */}
              <div className="flex-1">
                <div className="bg-dark-light/70 rounded-xl p-4 text-center">
                  <div className="text-6xl mb-3">🚛</div>
                  <p className="text-white font-bold mb-2">1톤 윙바디 트럭</p>
                  <p className="text-gray-400 text-sm">
                    양쪽 날개가 펼쳐지면서<br/>
                    내부가 공개되는 구조
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-3xl text-purple-400">→</div>

              {/* Booth Visual */}
              <div className="flex-1">
                <div className="bg-dark-light/70 rounded-xl p-4 text-center">
                  <div className="text-6xl mb-3">🚪</div>
                  <p className="text-white font-bold mb-2">고해소 부스</p>
                  <p className="text-gray-400 text-sm">
                    1인용 밀폐 공간<br/>
                    AI와 1:1 대화
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why This Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">왜 이 형태인가?</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <p className="text-blue-400 font-bold mb-2">이동성</p>
                <p className="text-gray-400 text-sm">축제, 행사장, 거리<br/>어디든 갈 수 있음</p>
              </div>
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <p className="text-purple-400 font-bold mb-2">스펙터클</p>
                <p className="text-gray-400 text-sm">날개가 펼쳐지는<br/>시각적 임팩트</p>
              </div>
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <p className="text-cyan-400 font-bold mb-2">친숙함</p>
                <p className="text-gray-400 text-sm">선거 유세 트럭 연상<br/>→ 권위적 형식</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Inside View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-5 border border-purple-500/30">
            <h3 className="text-lg font-bold text-white mb-3 text-center">내부 구성</h3>
            <div className="flex justify-center gap-4">
              <div className="text-center px-4 py-2 bg-dark-light/50 rounded-lg">
                <span className="text-purple-400 font-bold">스피커</span>
                <p className="text-gray-500 text-xs">AI 설교 송출</p>
              </div>
              <div className="text-center px-4 py-2 bg-dark-light/50 rounded-lg">
                <span className="text-blue-400 font-bold">모니터</span>
                <p className="text-gray-500 text-xs">AI 교주 영상</p>
              </div>
              <div className="text-center px-4 py-2 bg-dark-light/50 rounded-lg">
                <span className="text-cyan-400 font-bold">부스</span>
                <p className="text-gray-500 text-xs">고해성사 체험</p>
              </div>
              <div className="text-center px-4 py-2 bg-dark-light/50 rounded-lg">
                <span className="text-pink-400 font-bold">전단</span>
                <p className="text-gray-500 text-xs">AI교 교리 배포</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
