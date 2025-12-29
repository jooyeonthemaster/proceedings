'use client';

import { motion } from 'framer-motion';

export default function VSAICueSheet1Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            큐시트 Part 1
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            🎬 인트로 + 탐색전
          </h2>
        </motion.div>

        {/* Two Sections */}
        <div className="grid grid-cols-2 gap-6">
          {/* Intro Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary/10 rounded-xl p-6 border border-primary/30"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-primary font-bold text-2xl flex items-center gap-2">
                <span>🎥</span> 인트로
              </h3>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                약 3분
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-dark/50 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">🎞️ 영상 구성</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>각 캐릭터가 <span className="text-primary font-semibold">왜 나왔는지</span> 소개 영상</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><span className="text-primary font-semibold">예고편 느낌</span>으로 편집</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>긴장감 있는 BGM + 자막 효과</span>
                  </li>
                </ul>
              </div>

              <div className="bg-dark/50 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">📝 예상 멘트</h4>
                <p className="text-gray-400 text-sm italic">
                  &quot;오늘, AI와 인간의 대결이 시작됩니다...<br />
                  과연 기술이 감성을 이길 수 있을까요?&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Exploration Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-500/30"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-cyan-400 font-bold text-2xl flex items-center gap-2">
                <span>🔍</span> 탐색전
              </h3>
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                약 5분
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-dark/50 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-3">🗺️ 진행 순서</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-cyan-500/20 text-cyan-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span className="text-gray-300 text-sm">임의의 <span className="text-cyan-400 font-semibold">지점 선정</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-cyan-500/20 text-cyan-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-gray-300 text-sm">지나가는 행인에게 <span className="text-cyan-400 font-semibold">&quot;사진 찍어드려요~&quot;</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-cyan-500/20 text-cyan-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-gray-300 text-sm"><span className="text-cyan-400 font-semibold">오늘의 주제 스팟</span> 소개</span>
                  </div>
                </div>
              </div>

              <div className="bg-dark/50 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">🎯 목적</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• 촬영 장소와 분위기 소개</li>
                  <li>• 양 팀의 준비 과정 보여주기</li>
                  <li>• 시청자 기대감 조성</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 bg-dark-light/50 rounded-xl p-4 border border-gray-700"
        >
          <div className="flex items-center gap-2">
            <div className="flex-1 h-3 rounded-full bg-gray-800 overflow-hidden">
              <div className="flex h-full">
                <div className="bg-primary w-[15%]"></div>
                <div className="bg-cyan-500 w-[25%]"></div>
                <div className="bg-gray-600 w-[60%]"></div>
              </div>
            </div>
            <span className="text-gray-400 text-sm whitespace-nowrap">8분 / 20분</span>
          </div>
          <div className="flex mt-2 text-xs text-gray-500">
            <span className="w-[15%]">인트로</span>
            <span className="w-[25%]">탐색전</span>
            <span className="w-[60%]">나머지</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
