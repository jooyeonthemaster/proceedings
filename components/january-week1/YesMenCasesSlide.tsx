'use client';

import { motion } from 'framer-motion';

export default function YesMenCasesSlide() {
  const cases = [
    {
      year: '1999',
      title: 'WTO 위장',
      desc: 'WTO 공식 대변인으로 위장해서 국제 컨퍼런스에서 발표. "제3세계 노동자들을 더 효율적으로 착취하는 방법"을 진지하게 제안. 청중이 진짜라고 믿음.',
      icon: '🏛️',
    },
    {
      year: '2004',
      title: '다우케미컬 BBC 출연',
      desc: '다우케미컬 대변인으로 위장하여 BBC 생방송 출연. 보팔 참사 피해자들에게 120억 달러 배상하겠다고 발표. 다우케미컬 주가 40억 달러 폭락.',
      icon: '📺',
      highlight: true,
    },
    {
      year: '2008',
      title: '가짜 뉴욕타임스',
      desc: '"이라크 전쟁 종전"을 1면 헤드라인으로 한 가짜 뉴욕타임스 제작. 8만 부 인쇄해서 뉴욕 거리에서 배포.',
      icon: '📰',
    },
    {
      year: '2009',
      title: '미국 상공회의소 위장',
      desc: '미국 상공회의소로 위장하여 기자회견 개최. "기후변화 대응 정책을 지지한다"고 발표. 진짜 상공회의소 직원이 난입해서 "가짜입니다!" 외침.',
      icon: '🏢',
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500 bg-opacity-20 text-yellow-400 text-sm mb-4">
            The Yes Men의 미친 짓들
          </span>
          <h2 className="text-4xl font-bold text-white">
            <span className="text-yellow-400">실제로 일어난 일들</span>
          </h2>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-2 gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className={`rounded-xl p-5 border ${
                c.highlight
                  ? 'bg-yellow-500/10 border-yellow-500/30'
                  : 'bg-dark-light/50 border-gray-700'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{c.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      c.highlight ? 'bg-yellow-500/30 text-yellow-300' : 'bg-gray-700 text-gray-400'
                    }`}>
                      {c.year}
                    </span>
                    <h3 className={`font-bold ${c.highlight ? 'text-yellow-400' : 'text-white'}`}>
                      {c.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">{c.desc}</p>
                  {c.highlight && (
                    <p className="text-yellow-400 text-sm font-semibold mt-2">
                      → 2시간 후 가짜임이 밝혀짐
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
