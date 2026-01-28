'use client';

import { motion } from 'framer-motion';

export default function JeyeonTraitsSlide() {
  const traits = [
    {
      number: '01',
      title: '긍정적인 사고',
      subtitle: '일이 들어왔을 때 긍정적이다',
      description: '어떤 일이든 긍정적으로 사고합니다. 일이 생기면 바로 "어떻게 해결하지?"라고 생각합니다.',
      highlight: '완전 기업가 정신을 보유하고 있습니다.',
      icon: '💡',
      color: 'emerald',
    },
    {
      number: '02',
      title: '방법을 탐구',
      subtitle: '스스로 답을 찾아간다',
      description: '개발 관련해서 조금 알려주면, 이디오그램, 웹사이트 레퍼런스 사이트 등 정말 다양한 리소스로 찾아서 방법을 찾아갑니다.',
      highlight: '자기 주도적 학습 능력',
      icon: '🔍',
      color: 'cyan',
    },
    {
      number: '03',
      title: '타인의 반대에 신경쓰지 않음',
      subtitle: '비판을 성장의 기회로',
      description: '밤 새서 한 결과물에 대해서 "별로"라고 해도 상처받거나 기분이 상하지 않습니다.',
      highlight: '"그냥 별로구나, 어떻게 하면 더 잘 해보지?" 라는 태도로 다시 작업합니다.',
      icon: '🛡️',
      color: 'purple',
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
              Key Characteristics
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              김제연 수석의 <span className="text-purple-400">3가지 특징</span>
            </h2>
            <p className="text-gray-400 mt-2">우리가 배워야 할 점들</p>
          </div>

          {/* Traits */}
          <div className="space-y-5">
            {traits.map((trait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className={`bg-gradient-to-r from-${trait.color}-500/10 to-transparent border border-${trait.color}-500/30 rounded-xl p-6`}
              >
                <div className="flex items-start gap-5">
                  {/* Number */}
                  <div className={`w-14 h-14 bg-${trait.color}-500/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-3xl">{trait.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-${trait.color}-400 text-sm font-bold`}>{trait.number}</span>
                      <h3 className="text-xl font-bold text-white">{trait.title}</h3>
                    </div>
                    <p className={`text-${trait.color}-400 text-sm mb-2`}>{trait.subtitle}</p>
                    <p className="text-gray-400 text-sm mb-2">{trait.description}</p>
                    <div className={`inline-block px-3 py-1 bg-${trait.color}-500/20 rounded-lg`}>
                      <span className={`text-${trait.color}-300 text-sm font-medium`}>{trait.highlight}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
