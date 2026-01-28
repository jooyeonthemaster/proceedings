'use client';

import { motion } from 'framer-motion';

export default function PpudukStatusSlide() {
  const features = [
    {
      icon: '✅',
      title: '기능 구현 완료',
      description: '모든 핵심 기능 구현 완료',
      status: 'done',
    },
    {
      icon: '🎨',
      title: '디테일 작업 중',
      description: 'UI/UX 세부 조정 진행 중',
      status: 'progress',
    },
    {
      icon: '🗄️',
      title: 'DB 구현 완료',
      description: '데이터베이스 설계 및 구현 완료',
      status: 'done',
    },
    {
      icon: '🔧',
      title: '인프라 준비 완료',
      description: '서버 및 배포 환경 세팅 완료',
      status: 'done',
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
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
              Development Status
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              뿌덕 온라인 사이트 <span className="text-cyan-400">개발 현황</span>
            </h2>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`bg-gradient-to-br ${
                  feature.status === 'done'
                    ? 'from-emerald-500/10 to-transparent border-emerald-500/30'
                    : 'from-orange-500/10 to-transparent border-orange-500/30'
                } border rounded-xl p-6`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${
                      feature.status === 'done' ? 'bg-emerald-500/20' : 'bg-orange-500/20'
                    } rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                      {feature.status === 'done' && (
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                          완료
                        </span>
                      )}
                      {feature.status === 'progress' && (
                        <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs rounded-full">
                          진행중
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Launch Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border-2 border-cyan-500/50 rounded-2xl p-8 text-center"
          >
            <div className="text-lg text-gray-300 mb-2">출시 예정일</div>
            <div className="text-5xl font-bold text-white mb-4">
              <span className="text-cyan-400">2월 1일</span> 출시
            </div>
            <div className="flex items-center justify-center gap-2 text-emerald-400">
              <span className="text-2xl">✅</span>
              <span className="text-xl font-medium">문제없이 진행 중</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
