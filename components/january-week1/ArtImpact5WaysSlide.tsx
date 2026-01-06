'use client';

import { motion } from 'framer-motion';

export default function ArtImpact5WaysSlide() {
  const ways = [
    { method: '사회/정치 비판', example: 'The Yes Men, 뱅크시', message: '"이것은 잘못되었다"', color: 'red' },
    { method: '미학적 충격', example: '팀랩, 제임스 터렐', message: '"이런 아름다움이 존재했는가?"', color: 'pink' },
    { method: '감각의 확장', example: '빌 비올라, 사카모토 류이치', message: '"이렇게 느껴본 적이 없다"', color: 'purple' },
    { method: '개념적 질문', example: '뒤샹, 존 케이지', message: '"예술이란 무엇인가?"', color: 'cyan' },
    { method: '순수한 경이', example: '허블 우주 사진, 심해 영상', message: '"이런 게 존재하는구나"', color: 'amber' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-4">
            예술의 파장
          </span>
          <h2 className="text-4xl font-bold text-white mb-2">
            <span className="text-purple-400">Q.</span> 예술이 파장을 일으키려면<br/>
            반드시 <span className="text-pink-400">사회 비판적</span>이어야 하나?
          </h2>
        </motion.div>

        {/* Answer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-6"
        >
          <p className="text-xl text-primary font-bold">아니다. 예술이 파장을 일으키는 방식은 여러 가지다.</p>
        </motion.div>

        {/* 5 Ways Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-dark-light/50 rounded-2xl p-4 border border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left text-gray-400 py-2 px-3 text-sm">방식</th>
                  <th className="text-left text-gray-400 py-2 px-3 text-sm">사례</th>
                  <th className="text-left text-gray-400 py-2 px-3 text-sm">메시지</th>
                </tr>
              </thead>
              <tbody>
                {ways.map((way, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    className="border-b border-gray-800"
                  >
                    <td className="py-3 px-3">
                      <span className={`font-bold ${
                        way.color === 'red' ? 'text-red-400' :
                        way.color === 'pink' ? 'text-pink-400' :
                        way.color === 'purple' ? 'text-purple-400' :
                        way.color === 'cyan' ? 'text-cyan-400' :
                        'text-amber-400'
                      }`}>{way.method}</span>
                    </td>
                    <td className="py-3 px-3 text-gray-400 text-sm">{way.example}</td>
                    <td className="py-3 px-3 text-white text-sm">{way.message}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Our Position */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl p-5 border border-purple-500/30 text-center">
            <p className="text-gray-300 mb-2">우리의 위치:</p>
            <p className="text-xl text-white font-bold">
              <span className="text-red-400">사회 비판</span> + <span className="text-purple-400">AI라는 심연</span> = <span className="text-cyan-400">결합 가능</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
