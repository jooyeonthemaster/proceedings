'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AIComparisonSlide() {
  return (
    <div className="w-full h-screen bg-white p-12 flex flex-col relative overflow-hidden font-sans">
      {/* Background Decoration - Subtle & Professional */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-50 blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gradient-to-tr from-gray-50 to-transparent rounded-full opacity-50 blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-8 flex justify-between items-end border-b border-gray-200 pb-6"
      >
        <div>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">
            AI 발전 속도 <span className="text-gray-400 font-light">vs</span> 인간의 학습 속도
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Gemini 1.5 Pro의 UI 디자인 역량과 생산성 혁명
          </p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Case Study</span>
          <span className="text-blue-600 font-bold">Duckmate Project</span>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-2 gap-12 relative z-10 h-full">
        
        {/* LEFT: The Past (Human Effort / Early AI) */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="px-3 py-1 bg-gray-200 rounded-full text-gray-600 text-xs font-bold uppercase">
                2025. 09 (3개월 전)
              </div>
              <span className="text-gray-400 text-sm">중간평가 시즌</span>
            </div>
            
            <div className="flex-1 bg-white rounded-xl border border-gray-200 overflow-hidden relative group mb-6 shadow-inner cursor-pointer hover:ring-4 hover:ring-gray-200 transition-all duration-300 transform hover:scale-[1.02]">
               <a 
                 href="https://duckmate-phi.vercel.app/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="block w-full h-full relative"
               >
                 <Image 
                   src="/week5/old.png" 
                   alt="Duckmate Old Version"
                   fill
                   className="object-cover object-top"
                 />
                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-4 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      사이트 방문하기 ↗
                    </span>
                 </div>
               </a>
            </div>

            <div className="space-y-3">
               <h3 className="text-xl font-bold text-gray-800">과거의 결과물</h3>
               <ul className="space-y-2 text-gray-600 text-sm">
                 <li className="flex items-start">
                   <span className="mr-2 text-gray-400">•</span>
                   기획부터 디자인까지 상당한 수작업 소요
                 </li>
                 <li className="flex items-start">
                   <span className="mr-2 text-gray-400">•</span>
                   제한적인 레이아웃과 전형적인 템플릿 느낌
                 </li>
                 <li className="flex items-start">
                   <span className="mr-2 text-red-500 font-semibold">•</span>
                   <span className="text-red-500 font-semibold">"열심히 만들었지만 한계가 보임"</span>
                 </li>
               </ul>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: The Present (AI Velocity) */}
        <div className="flex flex-col relative">
          {/* Floating Badge */}
          <motion.div
             initial={{ opacity: 0, scale: 0, rotate: 15 }}
             animate={{ opacity: 1, scale: 1, rotate: 0 }}
             transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
             className="absolute -top-4 -right-4 z-20 bg-blue-600 text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg shadow-blue-200"
          >
             <span className="text-2xl font-bold">5분</span>
             <span className="text-xs font-light">소요 시간</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 bg-gradient-to-br from-white to-blue-50 rounded-2xl border border-blue-100 p-6 shadow-lg flex flex-col ring-1 ring-blue-200"
          >
             <div className="flex justify-between items-center mb-4">
              <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                2025. 11 (Yesterday)
              </div>
              <span className="text-blue-500 text-sm font-semibold">Gemini 1.5 Pro</span>
            </div>

            <div className="flex-1 bg-white rounded-xl border border-blue-100 overflow-hidden relative group mb-6 shadow-sm cursor-pointer hover:ring-4 hover:ring-blue-200 transition-all duration-300 transform hover:scale-[1.02]">
               <a 
                 href="https://duckmatesite.vercel.app/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="block w-full h-full relative"
               >
                 <Image 
                   src="/week5/new.png" 
                   alt="Duckmate New Version"
                   fill
                   className="object-cover object-top"
                 />
                 <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      사이트 방문하기 ↗
                    </span>
                 </div>
               </a>
            </div>

            <div className="space-y-3">
               <h3 className="text-xl font-bold text-gray-900">현재의 결과물 (AI Powered)</h3>
               <ul className="space-y-2 text-gray-700 text-sm">
                 <li className="flex items-start">
                   <span className="mr-2 text-blue-500">✓</span>
                   <span className="font-semibold">단 5분</span>만에 기획, 레이아웃, 디자인 완료
                 </li>
                 <li className="flex items-start">
                   <span className="mr-2 text-blue-500">✓</span>
                   AI스럽지 않은 자연스러운 'Human-like' 감성
                 </li>
                 <li className="flex items-start">
                   <span className="mr-2 text-blue-500">✓</span>
                   <span className="text-blue-700 font-bold bg-blue-50 px-1 rounded">"3개월을 배워도 따라잡을 수 없는 격차"</span>
                 </li>
               </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Conclusion Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="mt-8 bg-gray-900 rounded-xl p-6 text-white flex items-center justify-between shadow-xl"
      >
        <div className="flex-1 pr-8">
          <h3 className="text-xl font-bold mb-1 text-blue-300">Insight</h3>
          <p className="text-gray-300 font-light text-lg">
            "피그마, 웹디자인, 프론트엔드를 3개월간 배워도 <b className="text-white font-semibold">AI의 5분을 이길 수 없습니다.</b><br/>
            단순 기능 구현을 넘어 <span className="text-white underline decoration-blue-500 decoration-2 underline-offset-4">기획과 감각의 영역</span>까지 AI가 압도하고 있습니다."
          </p>
        </div>
        <div className="h-12 w-px bg-gray-700 mx-6"></div>
        <div className="text-right min-w-[150px]">
           <p className="text-xs text-gray-400 mb-1">NEXT STEP</p>
           <p className="text-lg font-bold text-white">AI 활용 전략의 <br/>전면적 수정 필요</p>
        </div>
      </motion.div>
    </div>
  );
}
