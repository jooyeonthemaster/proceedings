'use client';

import { motion } from 'framer-motion';

export default function JournalistIdeaSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500 bg-opacity-20 text-blue-400 text-sm mb-4">
            보너스 아이디어
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🎤 특별 연결고리: <span className="text-blue-400">기자 컨셉?</span>
          </h2>
        </motion.div>

        {/* Background Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30 mb-8"
        >
          <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
            <span>📰</span> 배경
          </h4>
          <ul className="text-gray-300 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>김주연 아버지: <span className="text-white font-semibold">뉴스타파</span> 대표 (대한민국 유명 언론사)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span><span className="text-white font-semibold">봉지욱</span> 기자 소개 예정 (대한민국에서 유명한 기자)</span>
            </li>
          </ul>
        </motion.div>

        {/* Ideas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark-light/50 rounded-xl p-6 border border-gray-700 mb-8"
        >
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <span>💡</span> 아이디어 (브레인스토밍)
          </h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-dark rounded-lg p-4 border border-gray-600 text-center">
              <span className="text-3xl mb-2 block">🤖</span>
              <p className="text-gray-300 text-sm">AI 기자 마네킹 제작</p>
            </div>
            <div className="bg-dark rounded-lg p-4 border border-gray-600 text-center">
              <span className="text-3xl mb-2 block">🎙️</span>
              <p className="text-gray-300 text-sm">기자회견장에서<br />웃기게 인터뷰 따오기</p>
            </div>
            <div className="bg-dark rounded-lg p-4 border border-gray-600 text-center">
              <span className="text-3xl mb-2 block">🏛️</span>
              <p className="text-gray-300 text-sm">정치인 대상<br />AI 인터뷰?</p>
            </div>
          </div>
        </motion.div>

        {/* Caution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30"
        >
          <h4 className="text-amber-400 font-bold mb-3 flex items-center gap-2">
            <span>⚠️</span> 주의
          </h4>
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-amber-400">•</span>
              <span>아직 구체화 필요</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">•</span>
              <span>단순 아이디어 단계</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">•</span>
              <span>더 재밌는 형태로 발전 필요</span>
            </li>
          </ul>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-500 text-sm">
            * 기자 컨셉은 아버지 연결고리를 활용한 아이디어 중 하나일 뿐,<br />
            VS AI의 핵심은 "스트릿 포토그래퍼"와 같은 길거리 체험형 콘텐츠
          </p>
        </motion.div>
      </div>
    </div>
  );
}
