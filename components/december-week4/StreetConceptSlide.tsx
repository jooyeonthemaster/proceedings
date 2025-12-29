'use client';

import { motion } from 'framer-motion';

export default function StreetConceptSlide() {
  const examples = [
    {
      content: 'AI 포토부스',
      street: '스트릿 포토그래퍼',
      desc: 'AI 포토 로봇을 길거리로 가져와 체험',
      icon: '📸',
    },
    {
      content: 'AI 사주',
      street: '푸드트럭 사주집',
      desc: '푸드트럭을 AI 사주집으로 꾸며서 운영 + 실제 사주가와 비교 체험',
      icon: '🔮',
    },
    {
      content: 'AI 판사',
      street: '길거리 재판 체험?',
      desc: '거리에서 진행하는 판결 체험',
      icon: '⚖️',
    },
    {
      content: 'AI 기자',
      street: '기자회견장 인터뷰',
      desc: 'AI 마네킹으로 인터뷰 따오기',
      icon: '🎤',
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500 bg-opacity-20 text-orange-400 text-sm mb-4">
            VS AI 컨셉
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            오프라인을 넘어, <span className="text-orange-400">스트릿(길거리)</span>로
          </h2>
        </motion.div>

        {/* Main Concept */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-orange-500/10 to-primary/10 rounded-2xl p-6 border border-orange-500/30 mb-8 text-center"
        >
          <p className="text-2xl text-white">
            AI 콘텐츠를 <span className="text-orange-400 font-bold">오프라인</span>, 그것을 넘어서<br />
            <span className="text-primary font-bold">스트릿(길거리)</span>로 가져온다
          </p>
        </motion.div>

        {/* Examples Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-4 gap-4 mb-8"
        >
          {examples.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="bg-dark-light/50 rounded-xl p-4 border border-gray-700"
            >
              <div className="text-3xl mb-3 text-center">{item.icon}</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs">콘텐츠</span>
                  <span className="text-gray-400 text-sm">{item.content}</span>
                </div>
                <div className="text-center text-gray-600">↓</div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400 text-xs">스트릿</span>
                  <span className="text-white text-sm font-semibold">{item.street}</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Food Truck Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/30">
            <h4 className="text-purple-400 font-bold mb-3 flex items-center gap-2">
              <span>🚚</span> 푸드트럭 사주집 아이디어
            </h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• 푸드트럭을 AI 사주집 형태로 꾸밈</li>
              <li>• 길에서 고객들에게 AI 사주 체험 제공</li>
              <li>• <span className="text-purple-400 font-semibold">바로 옆에 실제 사주가 배치</span></li>
              <li>• 고객들에게 <span className="text-primary font-semibold">만족도 비교 체험</span> 제공</li>
              <li>• → VS AI 컨셉 극대화</li>
            </ul>
          </div>
          <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30">
            <h4 className="text-amber-400 font-bold mb-3 flex items-center gap-2">
              <span>🎨</span> 영감: 뱅크시
            </h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• 뱅크시의 <span className="text-amber-400 font-semibold">스트릿 아트</span> 컨셉 차용</li>
              <li>• 전시장이 없어도 <span className="text-primary font-semibold">길거리가 우리의 무대</span></li>
              <li>• 미친 척 사람들에게 보여주고 튀는 형태</li>
              <li>• 예측 불가능한 등장 → 호기심 유발</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
