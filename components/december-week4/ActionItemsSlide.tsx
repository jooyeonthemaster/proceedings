'use client';

import { motion } from 'framer-motion';

export default function ActionItemsSlide() {
  const actionSections = [
    {
      category: '네안데르랩',
      icon: '🤖',
      color: 'cyan',
      label: '메인',
      items: [
        'VS AI 유튜브 채널 런칭',
        '스트릿 포토그래퍼 편 촬영/편집/업로드',
        '추가 VS AI 콘텐츠 기획 (사주, 판사 등)',
        '마스크/신비로움 브랜딩 확립',
        '10개 이상 체험 프로그램 개발',
        '전시 콘텐츠화 준비',
      ],
    },
    {
      category: '악센트 ID',
      icon: '🎨',
      color: 'red',
      label: '위기 대응',
      items: [
        '알바 교육 체계 수립 및 실행',
        '피규어 디퓨저 체험 과정 디벨롭 (색칠 등)',
        'GPA코리아 리뷰 100개 구매',
        '피규어 디퓨저 리뷰 이벤트 상품 기획',
      ],
    },
    {
      category: '악센트 WOW',
      icon: '🎂',
      color: 'pink',
      label: '',
      items: [
        '이탈 고객 데이터 수집 (1개월)',
        '3D 피규어 디퓨저 도입 검토',
        '류다혜 전담 체계 구축',
      ],
    },
    {
      category: '뿌덕 온라인',
      icon: '🎁',
      color: 'amber',
      label: '',
      items: [
        '계좌이체 기반 서비스 런칭',
        '1개월 내 피지 결제 모듈 연동',
        '온라인 콘텐츠 확장 (사주 향수 등)',
      ],
    },
    {
      category: '스팟',
      icon: '🌿',
      color: 'emerald',
      label: '',
      items: [
        '첫 콜라보 공간 섭외',
        '프로토타입 제작',
        '온라인 판매 채널 구축',
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string; badge: string } } = {
      cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', badge: 'bg-cyan-500/20' },
      red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', badge: 'bg-red-500/20' },
      pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', badge: 'bg-pink-500/20' },
      amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', badge: 'bg-amber-500/20' },
      emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', badge: 'bg-emerald-500/20' },
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-3">
            Action Items
          </span>
          <h2 className="text-4xl font-bold text-white">
            ✅ 2026년 핵심 액션 플랜
          </h2>
        </motion.div>

        {/* Action Items Grid - 2 rows */}
        <div className="space-y-3">
          {/* First Row - 2 columns */}
          <div className="grid grid-cols-2 gap-4">
            {actionSections.slice(0, 2).map((section, index) => {
              const colors = getColorClasses(section.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className={`rounded-xl p-4 border ${colors.bg} ${colors.border}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{section.icon}</span>
                    <h4 className={`font-bold ${colors.text}`}>{section.category}</h4>
                    {section.label && (
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${colors.badge} ${colors.text}`}>
                        {section.label}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-1.5">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className={colors.text}>☐</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Second Row - 3 columns */}
          <div className="grid grid-cols-3 gap-4">
            {actionSections.slice(2).map((section, index) => {
              const colors = getColorClasses(section.color);
              return (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className={`rounded-xl p-4 border ${colors.bg} ${colors.border}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{section.icon}</span>
                    <h4 className={`font-bold ${colors.text}`}>{section.category}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className={colors.text}>☐</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
