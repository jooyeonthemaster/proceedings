'use client';

import { motion } from 'framer-motion';

export default function YesMenLegalSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-green-500 bg-opacity-20 text-green-400 text-sm mb-4">
            법적 안전성
          </span>
          <h2 className="text-5xl font-bold text-white mb-2">
            <span className="text-green-400">Q.</span> 그 사람들 감옥 안 갔어?
          </h2>
        </motion.div>

        {/* Short Answer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl p-6 border border-green-500/30">
            <p className="text-xl text-white font-bold text-center mb-4">
              짧은 답: <span className="text-green-400">딱 한 번 갔다. 26시간.</span>
            </p>
            <div className="bg-dark-light/50 rounded-lg p-4 text-gray-300 text-sm">
              <p className="mb-2">
                <span className="text-yellow-400 font-semibold">2009년</span>, Andy Bichlbaum이 뉴욕 이스트 리버에서 "SurvivaBall" 시연 중 체포.
              </p>
              <p className="mb-2">
                SurvivaBall = 기후재난에서 부자들만 살아남을 수 있는 거대한 풍선 슈트
              </p>
              <p className="text-green-400">
                체포 사유? <span className="text-white font-bold">미납 자전거 딱지.</span> 퍼포먼스 자체가 아님.
              </p>
              <p className="text-gray-500 mt-2 italic">판사가 법정에서 웃었다고 한다.</p>
            </div>
          </div>
        </motion.div>

        {/* Lawsuits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <div className="bg-dark-light/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">고소는 여러 번 당했다</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                <p className="text-red-400 font-semibold mb-2">미국 상공회의소 고소:</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• "상업적 신원 도용"</li>
                  <li>• "사이버 해적질"</li>
                  <li>• "상표권 침해"</li>
                </ul>
              </div>
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                <p className="text-green-400 font-semibold mb-2">결과 (2013년):</p>
                <p className="text-white font-bold">상공회의소가 소송 취하</p>
                <p className="text-gray-400 text-sm mt-2">
                  왜? 소송을 계속하면<br/>
                  오히려 홍보만 더 되니까.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legal Protection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-xl p-6 border border-cyan-500/30 text-center">
            <p className="text-lg text-gray-300 mb-2">법적 보호의 핵심:</p>
            <p className="text-2xl text-white font-bold mb-2">
              <span className="text-cyan-400">"패러디"</span>는 표현의 자유로 보호받는다.
            </p>
            <p className="text-gray-400">
              The Yes Men은 항상 나중에 "이건 퍼포먼스였습니다"라고 밝힌다.<br/>
              그래서 "사기"가 아니라 <span className="text-green-400 font-semibold">"풍자"</span>로 인정받는다.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
