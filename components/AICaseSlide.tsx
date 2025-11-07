'use client';

export default function AICaseSlide() {
  const cases = [
    {
      title: "재무 회계 프로그램",
      description: "Claude AI를 활용한 자동화된 회계 처리 시스템",
      features: [
        "엑셀 기반 재무제표 자동 생성",
        "세금 계산 및 신고 자동화",
        "실시간 재무 현황 대시보드"
      ],
      icon: "💰",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "견적서 작성 프로그램",
      description: "AI 기반 스마트 견적서 생성 도구",
      features: [
        "과거 데이터 기반 자동 견적",
        "다양한 템플릿 지원",
        "PDF 자동 변환 및 발송"
      ],
      icon: "📋",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "워드 작성 프로그램",
      description: "Claude AI 기반 문서 작성 자동화",
      features: [
        "템플릿 기반 문서 자동 생성",
        "맞춤법 및 문법 자동 교정",
        "다국어 번역 지원"
      ],
      icon: "📄",
      color: "from-green-500 to-green-700"
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col bg-dark p-12">
      <div className="fade-in-up">
        <h2 className="text-5xl font-bold text-white mb-2">
          AI 활용 사례
        </h2>
        <div className="h-1 w-24 bg-primary mb-4"></div>
        <p className="text-xl text-gray-400 mb-8">
          개발팀에서 제작한 AI 프로그램 샘플
        </p>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-6">
        {cases.map((item, index) => (
          <div
            key={index}
            className="flex flex-col fade-in"
            style={{ animationDelay: `${0.2 + index * 0.15}s` }}
          >
            <div className={`bg-gradient-to-br ${item.color} p-6 rounded-t-xl`}>
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white text-opacity-90">
                {item.description}
              </p>
            </div>

            <div className="bg-dark-light p-6 rounded-b-xl flex-1 border-2 border-gray-600">
              <h4 className="text-lg font-semibold text-primary mb-4">
                주요 기능
              </h4>
              <ul className="space-y-3">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-600">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">개발 완료</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-primary bg-opacity-10 border-l-4 border-primary p-4 rounded fade-in" style={{ animationDelay: '0.7s' }}>
        <p className="text-gray-300 text-center">
          <span className="text-primary font-bold">더 많은 AI 활용 사례</span>를 개발하고 있습니다.
          필요한 프로그램이 있다면 개발팀에 문의해주세요! 🚀
        </p>
      </div>
    </div>
  );
}
