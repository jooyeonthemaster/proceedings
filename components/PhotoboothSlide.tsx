'use client';

export default function PhotoboothSlide() {
  const hardware = [
    {
      title: "3D 프린터",
      description: "하드웨어 케이스 및 부품 제작",
      icon: "🖨️"
    },
    {
      title: "아두이노",
      description: "하드웨어 동작 제어 시스템",
      icon: "🔌"
    },
    {
      title: "AI 포토부스",
      description: "AI 기반 사진 생성 & 편집",
      icon: "📸"
    },
    {
      title: "향 분사 시스템",
      description: "AI 기반 향 추천 & 자동 분사",
      icon: "🌸"
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col bg-dark p-12">
      <div className="fade-in-up">
        <h2 className="text-5xl font-bold text-white mb-2">
          포토부스 & 하드웨어 개발
        </h2>
        <div className="h-1 w-24 bg-primary mb-8"></div>
      </div>

      <div className="flex-1 flex">
        <div className="w-1/2 pr-6 space-y-6">
          <div className="bg-dark-light p-6 rounded-xl border-2 border-primary fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-primary mb-4">
              🎯 개발 방향
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              포토부스 개발을 통해 <span className="text-white font-bold">하드웨어 개발 역량</span>을 확장하고 있습니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl">→</span>
                <p className="text-gray-300">3D 프린터로 다양한 하드웨어 제작</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl">→</span>
                <p className="text-gray-300">아두이노 기반 동작 제어</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl">→</span>
                <p className="text-gray-300">AI 기술 접목으로 스마트화</p>
              </div>
            </div>
          </div>

          <div className="bg-dark-light p-6 rounded-xl border-2 border-gray-600 fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold text-white mb-4">
              👨‍💻 현재 진행 중
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">김제연</span>과 AI 포토부스 개발 중
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <p className="text-gray-300">
                  안산 축제 에러 원인 파악 중
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-xl fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold text-white mb-3">
              💡 응용 가능 분야
            </h3>
            <p className="text-white text-opacity-90">
              AI 기반 <span className="font-bold">향 추천 및 향 분사 시스템</span> 하드웨어 구축도 가능합니다.
            </p>
          </div>
        </div>

        <div className="w-1/2 pl-6 space-y-6">
          <div className="grid grid-cols-2 gap-4 fade-in" style={{ animationDelay: '0.5s' }}>
            {hardware.map((item, index) => (
              <div
                key={index}
                className="bg-dark-light p-5 rounded-xl border border-gray-600 hover:border-primary transition-all duration-300"
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-primary bg-opacity-10 border-2 border-primary p-6 rounded-xl fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold text-primary mb-4">
              📍 테스트 계획
            </h3>
            <p className="text-gray-300 mb-4">
              완성되는 대로 <span className="text-white font-bold">악센트 아이디</span> 또는
              <span className="text-white font-bold"> 악센트 와우(2호점)</span>에 포토부스를 설치하여 고객 대상 테스트를 진행할 예정입니다.
            </p>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <span className="text-primary">✓</span>
                <span className="text-gray-400 text-sm">에러 원인 파악</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary">✓</span>
                <span className="text-gray-400 text-sm">시장 조사 및 고객 반응 확인</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary">✓</span>
                <span className="text-gray-400 text-sm">실제 환경에서의 안정성 테스트</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
