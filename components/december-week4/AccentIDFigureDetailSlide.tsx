'use client';

import { motion } from 'framer-motion';

export default function AccentIDFigureDetailSlide() {
  const processSteps = [
    { step: '1', text: '고객이 최애 이미지 전송', icon: '📱' },
    { step: '2', text: 'AI로 3D 모델링', icon: '🤖' },
    { step: '3', text: '3D 프린터로 피규어 출력 (사전 준비)', icon: '🖨️' },
    { step: '4', text: '고객 방문 전 피규어 준비 완료', icon: '✅' },
    { step: '5', text: '고객 오프라인 매장 방문', icon: '🏪' },
    { step: '6', text: '이미지 분석 + 향 추천 프로그램 체험', icon: '🎯' },
    { step: '7', text: '직접 조향', icon: '🧪' },
    { step: '8', text: '5ml 향 원액 앰플 + 3D 피규어 디퓨저 수령', icon: '🎁' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-pink-500 bg-opacity-20 text-pink-400 text-sm mb-3">
            12월 신규 런칭
          </span>
          <h2 className="text-4xl font-bold text-white mb-2">
            🎨 신규 런칭: <span className="text-pink-400">AI 피규어 디퓨저 클래스</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {/* Process Flow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-light/50 rounded-xl p-5 border border-gray-700"
          >
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">📋</span> 체험 프로세스
            </h3>
            <div className="space-y-2">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3 bg-dark/50 rounded-lg p-2"
                >
                  <span className="bg-pink-500/20 text-pink-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    {item.step}
                  </span>
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Info */}
          <div className="space-y-4">
            {/* Price */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-5 border border-pink-500/30"
            >
              <h3 className="text-pink-400 font-bold mb-3 flex items-center gap-2">
                <span className="text-xl">💰</span> 가격
              </h3>
              <div className="text-center">
                <p className="text-4xl font-black text-white mb-2">4.8만원</p>
                <p className="text-gray-400 text-sm">
                  기존 향수 조향 체험 2.4만 원의 <span className="text-pink-400 font-bold">2배</span>
                </p>
              </div>
            </motion.div>

            {/* Marketing Result */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-primary/10 rounded-xl p-5 border border-primary/30"
            >
              <h3 className="text-primary font-bold mb-3 flex items-center gap-2">
                <span className="text-xl">📈</span> 마케팅 성과
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>마케팅 팀 + 전원 노력</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>인플루언서 바이럴 <span className="text-primary font-bold">10만 회 이상</span> 터짐</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>예약 들어오는 중</span>
                </li>
              </ul>
            </motion.div>

            {/* What You Get */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30"
            >
              <h3 className="text-amber-400 font-bold mb-3 flex items-center gap-2">
                <span className="text-xl">🎁</span> 수령품
              </h3>
              <div className="flex gap-4 justify-center">
                <div className="text-center">
                  <div className="text-3xl mb-1">💧</div>
                  <p className="text-white text-sm font-semibold">5ml 향 원액</p>
                  <p className="text-gray-500 text-xs">앰플</p>
                </div>
                <div className="text-2xl text-gray-600">+</div>
                <div className="text-center">
                  <div className="text-3xl mb-1">🗿</div>
                  <p className="text-white text-sm font-semibold">3D 피규어</p>
                  <p className="text-gray-500 text-xs">디퓨저</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
