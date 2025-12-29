'use client';

import { motion } from 'framer-motion';

export default function AccentIDSolutionsSlide() {
  const solutions = [
    {
      number: 1,
      title: '디퓨저 서비스 중단',
      subtitle: '피규어 디퓨저 라인업 폐지',
      icon: '🛑',
      color: 'red',
      pros: [
        '추가 리스크 방지',
        '리소스를 다른 사업에 집중',
        '빠른 의사결정',
      ],
      cons: [
        '기존 투자 손실',
        '해당 고객층 이탈 가능',
      ],
      recommendation: false,
    },
    {
      number: 2,
      title: '외주 전문 업체 활용',
      subtitle: '전문 피규어 제작사와 협업',
      icon: '🤝',
      color: 'amber',
      pros: [
        '품질 향상 기대',
        '전문 노하우 활용',
        '내부 리소스 절감',
      ],
      cons: [
        '비용 증가',
        '마진율 감소',
        '일정 통제 어려움',
      ],
      recommendation: false,
    },
    {
      number: 3,
      title: '김제연 영입 + 내재화',
      subtitle: '기계공학 전공자 합류로 기술력 확보',
      icon: '⭐',
      color: 'primary',
      pros: [
        '장기적 기술력 내재화',
        '3D 모델링 전문가 확보',
        '악센트 WOW에도 시너지',
      ],
      cons: [
        '즉각적 해결 어려움',
        '초기 학습 곡선 존재',
      ],
      recommendation: true,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-4">
            해결 방안
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            💡 3가지 해결 방안
          </h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-3 gap-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className={`rounded-xl p-5 border relative ${
                solution.color === 'red' ? 'bg-red-500/10 border-red-500/30' :
                solution.color === 'amber' ? 'bg-amber-500/10 border-amber-500/30' :
                'bg-primary/10 border-primary/30'
              } ${solution.recommendation ? 'ring-2 ring-primary' : ''}`}
            >
              {solution.recommendation && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-dark px-3 py-1 rounded-full text-xs font-bold">
                  ✨ 추천
                </div>
              )}

              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{solution.icon}</div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${
                  solution.color === 'red' ? 'bg-red-500/20 text-red-400' :
                  solution.color === 'amber' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-primary/20 text-primary'
                }`}>
                  방안 {solution.number}
                </div>
                <h4 className="text-white font-bold text-lg">{solution.title}</h4>
                <p className="text-gray-400 text-sm">{solution.subtitle}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-primary text-xs font-semibold mb-1">✅ 장점</p>
                  <ul className="text-gray-300 text-xs space-y-1">
                    {solution.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <span className="text-primary">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-red-400 text-xs font-semibold mb-1">⚠️ 단점</p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    {solution.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <span className="text-red-400">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recommendation Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-xl p-5 border border-primary/30"
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl">⭐</div>
            <div className="flex-1">
              <h4 className="text-primary font-bold text-lg mb-1">권장 방안: 3번 - 김제연 영입</h4>
              <p className="text-gray-300 text-sm">
                <span className="text-primary font-semibold">김제연</span>의 기계공학 전공 + 3D 모델링 역량을 활용하여<br />
                피규어 디퓨저뿐 아니라 <span className="text-cyan-400 font-semibold">악센트 WOW의 3D 피규어</span>까지 함께 해결
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
