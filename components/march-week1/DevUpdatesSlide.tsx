'use client';

import { motion } from 'framer-motion';

export default function DevUpdatesSlide() {
  const items = [
    {
      icon: '📚',
      title: '나라텐 (지역별 학원용 내신 도우미)',
      url: 'https://nara-ten.vercel.app/',
      description: '고등학교 때 영어학원 선생님께 시연 — 엄청 마음에 들어하셨음!',
      status: '내신 끝나고 미팅 예정',
      statusColor: 'emerald',
      color: 'emerald',
      note: '지난주 회의록에서 언급된 지역별 학원용 맞춤 내신 도움 프로그램',
    },
    {
      icon: '📸',
      title: '포토부스 프로그램',
      url: null,
      description: '나노바나나 2 모델 출시 — 프로급 성능에 속도 빠르고 가격 훨씬 저렴 (장당 100원 미만)',
      status: '마무리 필요',
      statusColor: 'orange',
      color: 'orange',
      note: '모두가 알아야 함! 힉스필드에서도 사용 가능',
    },
    {
      icon: '💰',
      title: '뿌덕 프로그램 PG 심사',
      url: null,
      description: 'PG 심사 진행 중 — 지원사업 이슈로 딜레이 불가피',
      status: '딜레이 / 위임 검토',
      statusColor: 'yellow',
      color: 'yellow',
      note: '제연이형에게 맡겨보는 방법도 고려 중',
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400' },
    orange: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-400' },
    yellow: { bg: 'bg-yellow-500/20', border: 'border-yellow-500/30', text: 'text-yellow-400' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-emerald-400 text-sm">DEV & PRODUCT</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">개발 현황 및 제품 업데이트</h2>
          <p className="text-gray-400 mb-8">나라텐 호평 + 나노바나나 2 출시 + PG 심사 현황</p>

          {/* Nanobanana Alert */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl p-5 border border-orange-500/40 mb-6"
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">🍌</span>
              <h3 className="text-lg font-semibold text-orange-400">나노바나나 2 출시 — 모두 필독!</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-dark-light/50 rounded-lg p-3 text-center">
                <p className="text-orange-400 text-2xl font-bold">≈ Pro</p>
                <p className="text-gray-400 text-xs">성능 거의 동일</p>
              </div>
              <div className="bg-dark-light/50 rounded-lg p-3 text-center">
                <p className="text-emerald-400 text-2xl font-bold">&lt; 100원</p>
                <p className="text-gray-400 text-xs">장당 가격</p>
              </div>
              <div className="bg-dark-light/50 rounded-lg p-3 text-center">
                <p className="text-cyan-400 text-2xl font-bold">⚡ Fast</p>
                <p className="text-gray-400 text-xs">생성 속도 훨씬 빠름</p>
              </div>
            </div>
          </motion.div>

          {/* Dev Items */}
          <div className="space-y-4">
            {items.map((item, index) => (
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
                    <p className="text-gray-400 mb-2">{item.description}</p>
                    {item.url && (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-sm hover:underline">
                        {item.url}
                      </a>
                    )}
                    <div className="flex items-center mt-2">
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
