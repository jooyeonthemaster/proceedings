'use client';

import { motion } from 'framer-motion';

export default function AIMindsetSlide() {
  return (
    <div className="w-full h-screen bg-white p-12 flex flex-col relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
      
      <div className="flex-1 flex flex-col justify-center items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            "배움의 단계를 넘어<br/>
            <span className="text-blue-600">압도적 활용</span>의 단계로"
          </h2>
          <div className="h-1 w-24 bg-gray-200 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
          {[
            {
              title: "Continuous Follow-up",
              desc: "AI 기술력의 한계와 가능성을\n실시간으로 파악하고 추적",
              icon: "🔭"
            },
            {
              title: "Active Utilization",
              desc: "단순 학습(Learning)이 아닌\n실전 적용(Application) 중심",
              icon: "⚡"
            },
            {
              title: "Unstoppable Growth",
              desc: "내 영역 안에서 끊임없이\n진화하고 확장하는 태도",
              icon: "📈"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group text-center"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-500 whitespace-pre-line leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 bg-blue-50 px-8 py-4 rounded-full text-blue-800 font-medium"
        >
          💡 기술의 속도를 따라잡는 유일한 방법은, 그 기술을 <span className="font-bold underline">도구로 완전히 장악</span>하는 것뿐입니다.
        </motion.div>
      </div>
    </div>
  );
}

