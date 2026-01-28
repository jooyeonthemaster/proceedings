'use client';

import { motion } from 'framer-motion';

export default function JeyeonProjectsSlide() {
  const projects = [
    {
      icon: '🌸',
      title: '디지털 화환',
      status: '개발 진행 중',
      description: '화환 디지털 사이니지 프로젝트 안정적 개발 중',
      color: 'pink',
    },
    {
      icon: '🦆',
      title: '오리 향수 케이스',
      status: '밤새 개발',
      description: '집에서 밤 새어가며 열정적으로 디벨롭 중',
      color: 'orange',
      highlight: true,
    },
    {
      icon: '☕',
      title: '브릭스 커피 머신 부품',
      status: '당일 완료',
      description: '사장님 요청 당일에 완벽한 퀄리티로 해결',
      color: 'cyan',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Recent Works
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              김제연 수석의 <span className="text-purple-400">최근 성과</span>
            </h2>
          </div>

          {/* Project Cards */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className={`bg-gradient-to-r ${
                  project.highlight
                    ? 'from-orange-500/20 to-pink-500/10 border-orange-500/50'
                    : `from-${project.color}-500/10 to-transparent border-${project.color}-500/30`
                } border rounded-xl p-6 ${project.highlight ? 'border-2' : ''}`}
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`w-16 h-16 bg-${project.color}-500/20 rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-4xl">{project.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <span
                        className={`px-3 py-1 ${
                          project.highlight
                            ? 'bg-orange-500/20 text-orange-400'
                            : `bg-${project.color}-500/20 text-${project.color}-400`
                        } text-sm rounded-full`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  {project.highlight && (
                    <div className="text-3xl">🔥</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/50 rounded-xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">⚡</div>
              <div>
                <div className="text-white font-bold text-lg">브릭스 커피 머신 부품 제작</div>
                <div className="text-gray-300">
                  사장님 요청 당일에 <span className="text-cyan-400 font-medium">완벽한 퀄리티</span>로 해결
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
