'use client';

import { motion } from 'framer-motion';

export default function DevExplosionSlide() {
  const projects = [
    // 주요 프로젝트
    { name: 'linkbridgeworld.com', category: '메인', status: '운영중' },
    { name: 'ssmhr.co.kr', category: '메인', status: '운영중' },
    { name: 'flower-signage.com', category: '메인', status: '운영중' },
    { name: 're-usable.co.kr', category: '메인', status: '운영중' },
    { name: 'yapansa.com', category: '메인', status: '운영중' },
    { name: 'ecosa4u.com', category: '메인', status: '운영중' },
    { name: 'xn--hz2b2zg5y.com', category: '메인', status: '운영중' },
    // 악센트 관련
    { name: 'acscent-identity', category: '악센트', status: '개발중' },
    { name: 'acscentid-new', category: '악센트', status: '완료' },
    { name: 'ac-scent-wow-2', category: '악센트', status: '완료' },
    { name: 'gdragon-scent', category: '악센트', status: '실험' },
    { name: 'musicscent', category: '악센트', status: '실험' },
    { name: 'scentnote', category: '악센트', status: '실험' },
    { name: 'scent-destination', category: '악센트', status: '실험' },
    // AI/콘텐츠
    { name: 'idforidol', category: 'AI콘텐츠', status: '운영중' },
    { name: 'facebattle', category: 'AI콘텐츠', status: '실험' },
    { name: 'animal-companion', category: 'AI콘텐츠', status: '실험' },
    { name: 'taro', category: 'AI콘텐츠', status: '실험' },
    // 행사/프레젠테이션
    { name: 'indrascope', category: '행사', status: '완료' },
    { name: '2025meeting', category: '행사', status: '진행중' },
    { name: 'koreagrandsale', category: '행사', status: '완료' },
    { name: 'jimff', category: '행사', status: '완료' },
    { name: 'bookfestival', category: '행사', status: '완료' },
    // 기타
    { name: 'duckmate', category: '덕메이트', status: '완료' },
    { name: 'ansanmap', category: '지도', status: '완료' },
    { name: 'jobmatch', category: '잡매칭', status: '개발중' },
    { name: 'erp', category: 'ERP', status: '실험' },
  ];

  const categoryColors: Record<string, string> = {
    '메인': 'bg-green-500/20 text-green-400 border-green-500/30',
    '악센트': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'AI콘텐츠': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    '행사': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    '덕메이트': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    '지도': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    '잡매칭': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'ERP': 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  const timeline = [
    { month: '2024 하반기', event: '용주님과 픽센트 1.0 공동 개발', icon: '🤝' },
    { month: '2025년 초', event: '자체 개발 시작 결심', icon: '💡' },
    { month: '2025년 5월', event: '혼자 프로그램 개발 시작!', icon: '🚀' },
    { month: '2025년 12월', event: '60+ 프로젝트 배포 완료', icon: '🎯' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500 bg-opacity-20 text-amber-400 text-sm mb-4">
            2025 회고 - Part 3
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            💻 개발 역량 <span className="text-cyan-400">폭발적 성장</span>
          </h2>
          <p className="text-xl text-gray-400">
            5월에 개발 시작 → 7개월 만에 60+ 프로젝트 배포
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">📅</span> 개발 여정
            </h3>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-dark-light rounded-lg border border-gray-700"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-primary text-sm font-semibold">{item.month}</div>
                    <div className="text-white text-sm">{item.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Stats */}
            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/30">
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">60+</div>
                <div className="text-gray-400 text-sm">Vercel 배포 프로젝트</div>
                <div className="text-cyan-400 text-xs mt-1">실제 개발 & 배포 완료</div>
              </div>
            </div>

            {/* Mindset */}
            <div className="mt-4 p-3 bg-dark-light rounded-xl border border-gray-700">
              <p className="text-gray-300 text-sm">
                💭 <span className="text-white">"탐구하는 과정을 즐겼고,<br/>능력 자체가 비약적으로 상승했다"</span>
              </p>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-2"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🚀</span> 실제 배포한 프로젝트들 (일부)
            </h3>
            <div className="grid grid-cols-4 gap-2 max-h-[420px] overflow-y-auto pr-2">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                  className={`p-2 rounded-lg border ${categoryColors[project.category]} text-xs`}
                >
                  <div className="font-medium truncate text-white">{project.name}</div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="opacity-70">{project.category}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                      project.status === '운영중' ? 'bg-green-500/30 text-green-300' :
                      project.status === '개발중' ? 'bg-blue-500/30 text-blue-300' :
                      project.status === '완료' ? 'bg-gray-500/30 text-gray-300' :
                      'bg-purple-500/30 text-purple-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-4 text-center text-gray-500 text-sm">
              * 위 목록은 Vercel에 배포된 프로젝트 일부입니다. 실험/학습 목적 프로젝트 포함
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
