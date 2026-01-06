'use client';

import { motion } from 'framer-motion';

export default function AINotDigitalArtSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-500 bg-opacity-20 text-red-400 text-sm mb-4">
            핵심 질문
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-red-400">Q.</span> 이건 "디지털 아트"의 특성이지,<br/>
            <span className="text-orange-400">"AI"만의 특성은 아니잖아?</span>
          </h2>
        </motion.div>

        {/* Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-dark-light/50 rounded-2xl p-6 border border-gray-700">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 rounded-lg bg-pink-500/10 border border-pink-500/20">
                <p className="text-pink-400 font-bold mb-1">teamLab</p>
                <p className="text-gray-400 text-sm">프로젝션 매핑, 센서</p>
                <p className="text-red-400 text-xs mt-1">AI 미사용</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <p className="text-cyan-400 font-bold mb-1">d'strict</p>
                <p className="text-gray-400 text-sm">인터랙티브 미디어</p>
                <p className="text-red-400 text-xs mt-1">AI 미사용</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <p className="text-amber-400 font-bold mb-1">이이남</p>
                <p className="text-gray-400 text-sm">디지털 애니메이션</p>
                <p className="text-red-400 text-xs mt-1">AI 미사용</p>
              </div>
            </div>
            <p className="text-gray-300 text-center text-lg">
              세 팀/작가 모두 <span className="text-red-400 font-bold">AI를 핵심 매체로 쓰지 않는다.</span><br/>
              프로젝션 매핑, 센서, 인터랙티브 미디어. AI가 아니어도 가능한 작업들이다.
            </p>
          </div>
        </motion.div>

        {/* New Direction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-2xl text-white font-bold mb-4">
              우리가 굳이 AI를 선택했다면,<br/>
              <span className="text-purple-400">AI만이 가진 고유한 특성</span>이 뭔지 알아야 한다.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>AI가 아니면 안 되는 이유.</p>
              <p>다른 어떤 매체로도 대체할 수 없는 AI만의 예술적 특성.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
