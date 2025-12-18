'use client';

import { motion } from 'framer-motion';

export default function NeanderLabSlide() {
  const labConcept = {
    name: '네안데르 Lab',
    tagline: 'AI 콘텐츠 프로그램 양산소',
    description: '재밌는 AI 콘텐츠 프로그램을 자체적으로 개발하고 양산하는 실험실',
    icon: '🧪'
  };

  const accentIdPlans = [
    {
      title: '다양한 콘텐츠 개발',
      description: '정말 다양하고 재밌는 AI 프로그램 개발',
      status: '핵심',
      icon: '🎨'
    },
    {
      title: '외주 아닌 자체 개발',
      description: '외주가 아닌 악센트 아이디에 직접 채워넣기',
      status: '전략',
      icon: '🔧'
    },
    {
      title: '지속적 업데이트',
      description: '계속 새로운 콘텐츠로 채워넣기',
      status: '운영',
      icon: '🔄'
    },
    {
      title: '팝업 형태 운영',
      description: '악센트 와우에서 자체적으로 팝업 진행',
      status: '실행',
      icon: '🎪'
    }
  ];

  const programExamples = [
    { name: 'AI 향수 추천', status: '운영중', platform: '악센트 아이디' },
    { name: 'AI 얼굴 분석', status: '개발중', platform: '악센트 아이디' },
    { name: 'AI 운세/타로', status: '기획중', platform: '실험' },
    { name: 'AI 음악 매칭', status: '실험', platform: '실험' },
    { name: 'AI 동물 캐릭터', status: '실험', platform: '실험' },
    { name: '+ 무한 확장 가능', status: '예정', platform: 'Lab' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        {/* Lab pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="max-w-7xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            2026 비전 - Part 3
          </span>
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="text-6xl">{labConcept.icon}</span>
            <h2 className="text-5xl font-bold text-white">
              <span className="text-cyan-400">{labConcept.name}</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400">{labConcept.tagline}</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8">
          {/* Left: Lab Concept */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Lab Description */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-cyan-500/30 mb-6">
              <h3 className="text-cyan-400 font-bold text-xl mb-3">🔬 Lab 컨셉</h3>
              <p className="text-white text-lg leading-relaxed">
                {labConcept.description}
              </p>
              <div className="mt-4 flex gap-3">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">실험적</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">양산형</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">자체개발</span>
              </div>
            </div>

            {/* Accent ID Plans */}
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🎯</span> 악센트 아이디 전략
            </h3>
            <div className="space-y-3">
              {accentIdPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 bg-dark-light rounded-xl p-4 border border-gray-700"
                >
                  <span className="text-3xl">{plan.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">{plan.title}</span>
                      <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded">
                        {plan.status}
                      </span>
                    </div>
                    <div className="text-gray-400 text-sm mt-1">{plan.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Programs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🚀</span> 프로그램 라인업
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {programExamples.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                  className={`p-4 rounded-xl border ${
                    program.status === '운영중' ? 'bg-green-500/10 border-green-500/30' :
                    program.status === '개발중' ? 'bg-blue-500/10 border-blue-500/30' :
                    program.status === '기획중' ? 'bg-amber-500/10 border-amber-500/30' :
                    program.status === '예정' ? 'bg-primary/10 border-primary/30' :
                    'bg-purple-500/10 border-purple-500/30'
                  }`}
                >
                  <div className="text-white font-semibold mb-2">{program.name}</div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      program.status === '운영중' ? 'bg-green-500/30 text-green-400' :
                      program.status === '개발중' ? 'bg-blue-500/30 text-blue-400' :
                      program.status === '기획중' ? 'bg-amber-500/30 text-amber-400' :
                      program.status === '예정' ? 'bg-primary/30 text-primary' :
                      'bg-purple-500/30 text-purple-400'
                    }`}>
                      {program.status}
                    </span>
                    <span className="text-gray-500 text-xs">{program.platform}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Popup Operation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-5 border border-purple-500/30"
            >
              <h4 className="text-purple-400 font-bold mb-3 flex items-center">
                <span className="mr-2">🎪</span> 악센트 와우 팝업 운영
              </h4>
              <p className="text-white mb-3">
                K-POP 특화 AI 콘텐츠를 악센트 와우에서 간단한 팝업 형태로 자체적으로 진행
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">AI 최애 사주 분석</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded text-xs">AI 내가 그린 최애 그림</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">K-POP 특화 체험</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6 text-center"
        >
          <div className="inline-block bg-dark-light rounded-xl p-4 border border-gray-700">
            <p className="text-gray-300">
              💡 핵심: <span className="text-cyan-400 font-bold">외주개발이 아니라</span>,
              <span className="text-white ml-1">악센트 아이디에 계속 새로운 콘텐츠로 채워넣는 것</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
