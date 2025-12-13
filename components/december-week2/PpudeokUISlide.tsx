'use client';

import { motion } from 'framer-motion';

export default function PpudeokUISlide() {
  const uiImprovements = [
    {
      category: "레이아웃 개선",
      icon: "📐",
      items: [
        "전체 화면 구성 재설계",
        "반응형 디자인 강화",
        "컴포넌트 배치 최적화"
      ]
    },
    {
      category: "비주얼 업그레이드",
      icon: "✨",
      items: [
        "새로운 컬러 팔레트",
        "모던한 타이포그래피",
        "애니메이션 효과 추가"
      ]
    },
    {
      category: "사용성 개선",
      icon: "👆",
      items: [
        "직관적인 네비게이션",
        "명확한 버튼 디자인",
        "피드백 시스템 강화"
      ]
    },
    {
      category: "성능 최적화",
      icon: "⚡",
      items: [
        "로딩 속도 개선",
        "이미지 최적화",
        "부드러운 전환 효과"
      ]
    }
  ];

  return (
    <div className="w-full h-screen bg-white p-16 flex flex-col justify-center relative overflow-hidden font-sans">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-purple-500 pl-8 mb-10"
      >
        <div className="flex items-center mb-2">
          <span className="text-4xl mr-4">🎨</span>
          <h2 className="text-5xl font-bold text-gray-900">UI/UX 전면 개선</h2>
        </div>
        <p className="text-xl text-gray-500">뿌덕 V2의 새로운 사용자 경험</p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-2 gap-8">
        {uiImprovements.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{section.icon}</span>
              <h3 className="text-2xl font-bold text-purple-800">{section.category}</h3>
            </div>
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Before/After Concept */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 flex justify-center"
      >
        <div className="bg-gradient-to-r from-gray-100 to-purple-100 rounded-2xl p-6 flex items-center gap-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">BEFORE</p>
            <div className="w-32 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">V1</span>
            </div>
          </div>
          <div className="text-4xl text-purple-400">→</div>
          <div className="text-center">
            <p className="text-purple-500 text-sm mb-2 font-bold">AFTER</p>
            <div className="w-32 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">V2</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
