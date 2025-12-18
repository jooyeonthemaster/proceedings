'use client';

import { motion } from 'framer-motion';

export default function GovSupportSlide() {
  const programs = [
    { name: '청년창업사관학교', status: '합격', amount: '1천만원+', category: '창업교육' },
    { name: '초기창업패키지 (초창패)', status: '합격', amount: '1천만원+', category: '창업지원' },
    { name: '예술경영지원센터 초기', status: '합격', amount: '2천만원+', category: '예술/문화' },
    { name: '관광벤처 예비 #1', status: '합격', amount: '1천만원+', category: '관광' },
    { name: '관광벤처 예비 #2', status: '합격', amount: '1천만원+', category: '관광' },
    { name: '신사업창업사관학교', status: '합격', amount: '2천만원+', category: '창업교육' },
    { name: '예비창업패키지 #1', status: '합격', amount: '2천만원+', category: '창업지원' },
    { name: '예비창업패키지 #2', status: '합격', amount: '2천만원+', category: '창업지원' },
    { name: '창업중심대학', status: '합격', amount: '2천만원+', category: '대학연계' },
    { name: '강한소상공인', status: '탈락', amount: '-', category: '소상공인' },
  ];

  const passCount = programs.filter(p => p.status === '합격').length;

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500 bg-opacity-20 text-amber-400 text-sm mb-4">
            2025 회고 - Part 1
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            📋 정부지원사업 <span className="text-green-400">올킬</span>
          </h2>
          <p className="text-xl text-gray-400">
            연초 10개+ 사업계획서 작성 → {passCount}개 합격
          </p>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-8 mb-8"
        >
          <div className="bg-dark-light rounded-2xl p-6 border border-green-500/30 text-center min-w-[180px]">
            <div className="text-5xl font-black text-green-400 mb-2">{passCount}/10</div>
            <div className="text-gray-400">합격률</div>
            <div className="text-green-400 text-sm mt-1">90% 성공</div>
          </div>
          <div className="bg-dark-light rounded-2xl p-6 border border-primary/30 text-center min-w-[180px]">
            <div className="text-5xl font-black text-primary mb-2">1.5억+</div>
            <div className="text-gray-400">총 확보 자금</div>
            <div className="text-primary text-sm mt-1">정부지원금</div>
          </div>
          <div className="bg-dark-light rounded-2xl p-6 border border-amber-500/30 text-center min-w-[180px]">
            <div className="text-5xl font-black text-amber-400 mb-2">10+</div>
            <div className="text-gray-400">사업계획서 작성</div>
            <div className="text-amber-400 text-sm mt-1">AI 활용 양산</div>
          </div>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-3"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              className={`p-4 rounded-xl border ${
                program.status === '합격'
                  ? 'bg-green-500/10 border-green-500/30'
                  : 'bg-red-500/10 border-red-500/30'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  program.status === '합격'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {program.status}
                </span>
                <span className="text-xs text-gray-500">{program.category}</span>
              </div>
              <div className="text-white font-semibold text-sm mb-1 leading-tight">
                {program.name}
              </div>
              {program.status === '합격' && (
                <div className="text-primary text-xs">{program.amount}</div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
            <p className="text-gray-300">
              💡 <span className="text-green-400 font-semibold">핵심 인사이트:</span>
              <span className="text-white ml-2">단순히 많이 붙은 게 아니라, AI의 가능성을 검증한 해</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
