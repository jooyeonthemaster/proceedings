'use client';

export default function KimAIClassIntroSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-purple-900 to-dark p-4">
      <div className="max-w-6xl w-full space-y-4 fade-in">
        {/* Header */}
        <div className="text-center mb-3">
          <h2 className="text-4xl font-bold text-white mb-3">
            김주연의 AI 교실
          </h2>
          <div className="h-1 w-32 bg-primary mx-auto mb-3"></div>
          <p className="text-xl text-primary font-semibold">
            지금 우리가 AI에 대해 알아야 할 것들
          </p>
        </div>

        {/* Core Message */}
        <div className="bg-gradient-to-r from-red-900 to-orange-900 bg-opacity-40 border-4 border-red-500 rounded-2xl p-4 mb-3">
          <div className="text-center space-y-3">
            <div className="text-4xl mb-2">⚠️</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              핵심 메시지
            </h3>
            <div className="bg-dark bg-opacity-60 rounded-xl p-4">
              <p className="text-lg text-white leading-relaxed">
                지금 시점에 우리가 어떤 것을 배우든,
                <br />
                <span className="text-red-400 font-bold text-xl">
                  그 영역의 러닝 커브 속도
                </span>
                와
                <br />
                <span className="text-primary font-bold text-xl">
                  AI가 발전하는 속도
                </span>
                는
                <br />
                <span className="text-3xl font-bold text-red-500 mt-2 inline-block">
                  비교할 수가 없습니다
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Visual */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-900 bg-opacity-30 border-2 border-blue-500 rounded-xl p-3 text-center">
            <div className="text-3xl mb-2">🐌</div>
            <h4 className="text-xl font-bold text-blue-400 mb-2">전통적 학습</h4>
            <p className="text-gray-300 text-sm">
              몇 년의 시간
              <br />
              체계적인 교육
              <br />
              느린 성장 곡선
            </p>
            <div className="mt-3 h-2 bg-blue-500 rounded-full" style={{width: '30%'}}></div>
          </div>

          <div className="bg-primary bg-opacity-30 border-2 border-primary rounded-xl p-3 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="text-xl font-bold text-primary mb-2">AI 발전 속도</h4>
              <p className="text-gray-300 text-sm">
                3개월 단위로 혁신
                <br />
                상상을 초월하는 속도
                <br />
                <span className="text-primary font-bold">기하급수적 성장</span>
              </p>
              <div className="mt-3 h-2 bg-primary rounded-full animate-pulse" style={{width: '100%'}}></div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <p className="text-lg text-gray-300">
            그렇다면... <span className="text-primary font-bold">우리는 어떻게 대응해야 할까요?</span>
          </p>
        </div>
      </div>
    </div>
  );
}
