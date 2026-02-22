'use client';

import { motion } from 'framer-motion';

export default function BusinessPipelineSlide() {
  const pipelines = [
    {
      icon: '🔐',
      title: '방탈출 카페 AI NPC',
      description: 'AI NPC가 힌트를 주고 대화하는 기능. 방탈출 경험을 한 단계 업그레이드.',
      status: '기획 중',
      statusColor: 'orange',
      note: '고등학교 동창이 방탈출 기획 프리랜서 → 사장님 연결 가능',
      color: 'orange',
    },
    {
      icon: '📚',
      title: '학원용 AI 솔루션',
      description: '학원 맞춤형 AI 학습 도우미. 학생별 맞춤 피드백과 학습 관리.',
      status: '기획 중',
      statusColor: 'cyan',
      note: '친한 학원 선생님에게 제안 가능',
      color: 'cyan',
    },
    {
      icon: '📖',
      title: '서점 / 도서관 AI 추천',
      description: '실제 보유 도서 데이터 기반 AI 책 추천 서비스. 만화카페 만화 추천도 가능.',
      status: '아이디어',
      statusColor: 'emerald',
      note: '실제 도서 데이터 기반이라는 점에서 차별화',
      color: 'emerald',
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    orange: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-400' },
    cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-cyan-400 text-sm">B2B PIPELINE</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">B2B 비즈니스 파이프라인</h2>
          <p className="text-gray-400 mb-8">세부 타겟 고객 → 바로 만들어서 판매하는 AI 솔루션</p>

          {/* Strategy Insight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-light/60 rounded-xl p-5 border border-yellow-500/30 mb-8"
          >
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">핵심 전략</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              고객을 매우 세부적으로 타겟 → 실제 팔릴 수 있는 서비스를 바로 구축 → 구축 후 <span className="text-white font-semibold">월 사용료 기반 수익 모델</span>.
              콘텐츠 제작이 아닌, 지속적인 수익을 만드는 SaaS 형태.
            </p>
          </motion.div>

          {/* Pipeline Items */}
          <div className="space-y-4">
            {pipelines.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.15 }}
                className={`bg-dark-light/60 rounded-xl p-6 border ${colorClasses[item.color].border}`}
              >
                <div className="flex items-start">
                  <div className={`w-14 h-14 ${colorClasses[item.color].bg} rounded-xl flex items-center justify-center mr-5 flex-shrink-0`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2 flex-wrap gap-2">
                      <h4 className="text-xl font-semibold text-white mr-3">{item.title}</h4>
                      <span className={`${colorClasses[item.statusColor].bg} ${colorClasses[item.statusColor].text} px-3 py-1 rounded-full text-sm`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-3">{item.description}</p>
                    <div className="flex items-center">
                      <span className="text-gray-500 text-sm mr-2">💡</span>
                      <span className="text-gray-500 text-sm">{item.note}</span>
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
