'use client';

import { motion } from 'framer-motion';

export default function QuiverAISlide() {
  const features = [
    {
      icon: '&#9997;&#65039;',
      title: 'Text-to-SVG',
      description: '텍스트 프롬프트만으로 편집 가능한 벡터 그래픽 생성',
    },
    {
      icon: '&#128248;',
      title: 'Image-to-SVG',
      description: 'PNG, JPEG 등 이미지를 SVG 벡터로 변환',
    },
    {
      icon: '&#127912;',
      title: '로고 & 일러스트',
      description: '클린한 로고, UI/마케팅용 일러스트 즉시 제작',
    },
    {
      icon: '&#127916;',
      title: '애니메이션 (Coming Soon)',
      description: 'SVG에 CSS 애니메이션 자동 적용',
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
          <div className="inline-flex items-center bg-indigo-500/20 border border-indigo-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-indigo-400 text-sm">TOOL RECOMMENDATION</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">Quiver AI</h2>
          <p className="text-gray-400 mb-8">AI 기반 벡터(SVG) 디자인 플랫폼 &#8212; a16z 투자, 현재 무료!</p>

          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-2xl p-6 border border-indigo-500/30 mb-6 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-3xl">&#9670;&#65039;</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI로 SVG를 만들고, 편집하고, 애니메이션까지</h3>
                  <p className="text-gray-400 text-sm">벡터 그래픽의 생성 &#183; 편집 &#183; 애니메이션을 AI가 처리</p>
                </div>
              </div>
              <a
                href="https://app.quiver.ai/creations"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                직접 써보기 &#8594;
              </a>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">무료 (Public Beta)</span>
              <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-medium">a16z $8.3M 투자</span>
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">API 제공</span>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-dark-light/60 rounded-xl p-5 border border-gray-700"
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-indigo-500/15 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-lg" dangerouslySetInnerHTML={{ __html: feature.icon }} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-6"
          >
            <p className="text-gray-500 text-sm">
              로고, 일러스트, 아이콘 등 벡터 디자인이 필요할 때 활용해보세요
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
