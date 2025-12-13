'use client';

import { motion } from 'framer-motion';

export default function HiggsfieldSlide() {
  return (
    <div className="w-full h-screen bg-white p-12 flex flex-col relative overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-purple-50 rounded-full opacity-60 blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 mb-10 flex justify-between items-end border-b border-gray-200 pb-6"
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-bold">2025. 11. 28 결제완료</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold">Highest Tier</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Higgsfield AI 도입 및 활용 가이드</h2>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500 uppercase tracking-widest">Resource Update</p>
          <p className="text-purple-600 font-bold text-xl">$85 / Month</p>
        </div>
      </motion.div>

      <div className="flex-1 grid grid-cols-2 gap-12 z-10">
        {/* Left: Capabilities */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg relative overflow-hidden group hover:border-purple-300 transition-colors"
          >
            <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">NanoBanana Pro</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">이미지 생성 용량</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-purple-600">3,000</span>
              <span className="text-xl text-gray-500">장 / 월</span>
            </div>
            <p className="text-gray-400 mt-2 text-sm">(일일 100장 생성 가능)</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg relative overflow-hidden group hover:border-purple-300 transition-colors"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">영상 생성 용량</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-blue-600">540</span>
              <span className="text-xl text-gray-500">개 / 월</span>
            </div>
            <p className="text-gray-400 mt-2 text-sm">고품질 AI 비디오 생성</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-red-50 text-red-600 px-6 py-3 rounded-xl text-center font-semibold border border-red-100"
          >
            "안 쓰면 손해입니다. 마케팅팀 외 전사적 활용 권장"
          </motion.div>
        </div>

        {/* Right: Pricing Strategy */}
        <div className="flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900 text-white rounded-2xl p-8 shadow-2xl relative"
          >
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black font-bold w-20 h-20 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
              <div className="text-center leading-tight text-sm">
                Price<br/>UP!
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-6 text-purple-300 border-b border-gray-700 pb-4">
              구독 전략 (Pricing Insight)
            </h3>

            <div className="space-y-6">
              <div className="flex justify-between items-center opacity-50">
                <span className="text-gray-400">Current (11월)</span>
                <span className="text-2xl font-mono">$85</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-white font-bold">Next Month (12월~)</span>
                <span className="text-3xl font-mono text-red-400 font-bold">$150</span>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold">연간 결제 시</span>
                  <span className="text-2xl font-mono text-yellow-400">$75 / mo</span>
                </div>
                <p className="text-xs text-gray-400 text-right">약 50% 비용 절감 효과</p>
              </div>

              <div className="pt-6 border-t border-gray-700 mt-2">
                <p className="text-lg font-medium leading-relaxed">
                  "적극적 활용 의지가 있다면 <span className="text-yellow-400 font-bold underline">연간 결제가 필수</span>입니다.<br/>
                  <span className="text-sm text-gray-400 mt-2 block font-normal">
                    (반대로 활용하지 않는다면, 그것 자체가 위기입니다)
                  </span>"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}



