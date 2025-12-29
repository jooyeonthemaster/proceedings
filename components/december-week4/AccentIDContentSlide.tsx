'use client';

import { motion } from 'framer-motion';

export default function AccentIDContentSlide() {
  const contents = [
    {
      title: '향BTI',
      desc: 'MBTI 스타일 향 성향 테스트',
      icon: '🧠',
      type: '콘텐츠',
      status: 'active',
    },
    {
      title: '향수 테이블',
      desc: '체험형 향수 조향 워크숍',
      icon: '🍽️',
      type: '이벤트',
      status: 'active',
    },
    {
      title: 'B2B 납품',
      desc: '기업 맞춤형 향수 제작',
      icon: '🏢',
      type: '서비스',
      status: 'active',
    },
    {
      title: '피규어 디퓨저',
      desc: '3D 스캔 기반 나만의 디퓨저',
      icon: '🧴',
      type: '상품',
      status: 'issue',
    },
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
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-4">
            악센트 ID
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            📊 콘텐츠 확장 현황
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {contents.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className={`rounded-xl p-5 border ${
                content.status === 'issue'
                  ? 'bg-red-500/10 border-red-500/30'
                  : 'bg-dark-light/50 border-gray-700'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{content.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className={`text-xl font-bold ${
                      content.status === 'issue' ? 'text-red-400' : 'text-white'
                    }`}>{content.title}</h4>
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      content.type === '콘텐츠' ? 'bg-cyan-500/20 text-cyan-400' :
                      content.type === '이벤트' ? 'bg-purple-500/20 text-purple-400' :
                      content.type === '서비스' ? 'bg-primary/20 text-primary' :
                      'bg-pink-500/20 text-pink-400'
                    }`}>
                      {content.type}
                    </span>
                  </div>
                  <p className="text-gray-400">{content.desc}</p>
                  {content.status === 'issue' && (
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-red-400 text-sm">⚠️ 고객 불만 발생</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-primary/10 rounded-xl p-5 border border-primary/30">
            <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
              <span>✅</span> 성공적인 확장
            </h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>향BTI: 바이럴 콘텐츠로 인지도 상승</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>향수 테이블: 체험형 이벤트 인기</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>B2B: 기업 납품 계약 진행 중</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/30">
            <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
              <span>⚠️</span> 해결 필요
            </h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-red-400">•</span>
                <span>피규어 디퓨저: <span className="text-red-400 font-semibold">악성 리뷰 발생</span></span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400">•</span>
                <span>원인 분석 및 대응 전략 필요</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400">•</span>
                <span>→ 다음 슬라이드에서 상세 분석</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
