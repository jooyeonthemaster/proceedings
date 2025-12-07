'use client';

import { motion } from 'framer-motion';

export default function ContentBrandingSlide() {
  const contentExamples = [
    { name: "AI 포토부스", description: "AI 기반 실시간 이미지 생성 체험", status: "개발 완료" },
    { name: "AI 향 추천 시스템", description: "취향 분석 기반 맞춤 향수 추천", status: "운영 중" },
    { name: "AI 미디어아트 체험존", description: "인터랙티브 AI 아트 설치물", status: "기획 중" },
    { name: "AI 굿즈 제작 서비스", description: "AI 생성 이미지 기반 커스텀 굿즈", status: "기획 중" }
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 p-16 flex flex-col justify-center relative overflow-hidden">
      {/* Warning Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)'
        }}></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-red-500 pl-8 mb-10"
      >
        <h2 className="text-5xl font-bold text-white mb-3">자체 콘텐츠 = 생존</h2>
        <p className="text-xl text-red-300">네안데르 랩, AI 미디어아트 콘텐츠 기획사로의 브랜딩</p>
      </motion.div>

      <div className="flex gap-10">
        {/* Left: Warning Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-2/5"
        >
          <div className="h-full bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 text-6xl opacity-20">⚠️</div>

            <h3 className="text-3xl font-black mb-6 text-yellow-300">절대 간과 금지</h3>

            <div className="space-y-6">
              <div className="bg-black bg-opacity-30 rounded-2xl p-6">
                <p className="text-xl font-bold mb-3">자체 콘텐츠 없이는?</p>
                <p className="text-red-200 text-lg leading-relaxed">
                  → <span className="text-yellow-300 font-bold text-2xl">전시 대행사</span>로 전락
                </p>
                <p className="text-red-300 text-base mt-3">
                  남의 콘텐츠를 대신 설치해주는 하청업체가 됩니다
                </p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-2xl p-6">
                <p className="text-xl font-bold mb-3">자체 콘텐츠가 있으면?</p>
                <p className="text-green-300 text-lg leading-relaxed">
                  → <span className="font-bold text-2xl">AI 콘텐츠 기획사</span>로 도약
                </p>
                <p className="text-green-200 text-base mt-3">
                  우리만의 IP와 기술력으로 시장을 선도합니다
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-500 text-yellow-900 rounded-xl text-center">
              <p className="font-black text-xl">
                "콘텐츠가 없으면 협상력도 없다"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Action Items */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Our Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">🎨</span> 네안데르 랩 자체 콘텐츠
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {contentExamples.map((content, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-gray-700 rounded-2xl p-5"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-white">{content.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      content.status === '개발 완료' ? 'bg-green-500 text-green-900' :
                      content.status === '운영 중' ? 'bg-blue-500 text-blue-900' :
                      'bg-yellow-500 text-yellow-900'
                    }`}>
                      {content.status}
                    </span>
                  </div>
                  <p className="text-gray-400">{content.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Required */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 flex-1"
          >
            <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
              <span className="text-4xl">📢</span> 즉시 실행 과제
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                <h4 className="font-bold text-xl text-white mb-4">마케팅 홍보</h4>
                <ul className="text-lg text-blue-100 space-y-2">
                  <li>• AI 포토부스 홍보 영상 제작</li>
                  <li>• SNS 채널 콘텐츠 업로드</li>
                  <li>• 포트폴리오 웹사이트 구축</li>
                  <li>• B2B 영업 자료 제작</li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                <h4 className="font-bold text-xl text-white mb-4">브랜드 정체성</h4>
                <ul className="text-lg text-purple-100 space-y-2">
                  <li>• "AI 미디어아트 기획사" 포지셔닝</li>
                  <li>• 자체 IP 콘텐츠 지속 개발</li>
                  <li>• 행사 솔루션 패키지화</li>
                  <li>• 기술력 기반 차별화</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <p className="text-2xl text-white font-bold">
          <span className="text-red-400">대행사</span>가 아닌 <span className="text-green-400">기획사</span>로,
          <span className="text-yellow-400"> 하청</span>이 아닌 <span className="text-cyan-400">원청</span>으로
        </p>
      </motion.div>
    </div>
  );
}
