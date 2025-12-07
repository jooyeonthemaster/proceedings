'use client';

import { motion } from 'framer-motion';

export default function NewProjectsSlide() {
  const accentPrograms = [
    { name: "AI 향 추천", description: "AI가 취향에 맞는 향을 추천", status: "운영 중" },
    { name: "MBTI 궁합 향수 매칭", description: "MBTI 기반 커플/친구 향수 매칭", status: "기획 중" },
    { name: "계절/무드 향수 추천", description: "계절, 상황별 맞춤 향수 제안", status: "기획 중" },
    { name: "향수 블렌딩 가이드", description: "AI가 블렌딩 레시피 제안", status: "기획 중" }
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-16 flex flex-col justify-center relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-purple-400 pl-8 mb-12"
      >
        <h2 className="text-5xl font-bold text-white mb-3">신규 프로젝트</h2>
        <p className="text-xl text-gray-400">자사 브랜드 강화 & 서비스 확장</p>
      </motion.div>

      <div className="flex gap-10 flex-1 max-h-[600px]">
        {/* Left: SPOT 자사몰 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1"
        >
          <div className="h-full bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="text-8xl">🎨</div>
                <div>
                  <h3 className="text-5xl font-bold">SPOT</h3>
                  <p className="text-xl text-orange-100">피규어 디퓨저 브랜드</p>
                </div>
              </div>

              <div className="bg-white bg-opacity-20 rounded-2xl p-8 mb-8">
                <h4 className="font-bold text-2xl mb-5">자사몰 개발 계획</h4>
                <ul className="space-y-4 text-orange-100">
                  <li className="flex items-center gap-3 text-xl">
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                    브랜드 아이덴티티 강화
                  </li>
                  <li className="flex items-center gap-3 text-xl">
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                    D2C 직접 판매 채널 확보
                  </li>
                  <li className="flex items-center gap-3 text-xl">
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                    고객 데이터 직접 수집
                  </li>
                  <li className="flex items-center gap-3 text-xl">
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                    마진율 개선 (플랫폼 수수료 절감)
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <span className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-xl">
                  개발 예정
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: 악센트 아이디 AI 프로그램 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1"
        >
          <div className="h-full bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
            {/* Background Pattern */}
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="text-8xl">🧪</div>
                <div>
                  <h3 className="text-5xl font-bold">악센트 아이디</h3>
                  <p className="text-xl text-purple-100">향수공방 AI 프로그램</p>
                </div>
              </div>

              <div className="space-y-4">
                {accentPrograms.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-white bg-opacity-20 rounded-2xl p-5 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-xl">{program.name}</h4>
                      <p className="text-lg text-purple-200">{program.description}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      program.status === '운영 중'
                        ? 'bg-green-400 text-green-900'
                        : 'bg-purple-300 text-purple-900'
                    }`}>
                      {program.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-10 text-center"
      >
        <p className="text-xl text-gray-400">자사 브랜드 육성을 통한 <span className="text-white font-bold text-2xl">지속 가능한 수익 모델</span> 구축</p>
      </motion.div>
    </div>
  );
}
