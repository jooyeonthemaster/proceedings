'use client';

export default function FutureVisionSlide2() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-purple-900 to-dark p-8">
      <div className="max-w-7xl w-full space-y-8 fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            미래 전망과 우리의 방향 (2/2)
          </h2>
          <div className="h-1 w-32 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-primary">그렇다면 우리가 해야 할 것은?</p>
        </div>

        {/* The Path Forward */}
        <div className="bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 bg-opacity-50 border-4 border-primary rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-3xl font-bold text-white mb-6">
              우리가 해야 할 것은?
            </h3>
          </div>

          <div className="space-y-6">
            <div className="bg-dark bg-opacity-70 rounded-xl p-6 border-2 border-primary">
              <p className="text-white text-xl leading-relaxed text-center">
                우리들이 <span className="text-red-400 font-bold line-through">어떤 역량을 키우는 것</span>보다
                <br />
                <span className="text-primary font-bold text-2xl">
                  지금 각자의 역량 내에서
                  <br />
                  AI를 얼마나 잘 다루는지 파악하는 것
                </span>
                <br />
                이 <span className="text-yellow-400 font-bold text-2xl">너무 중요합니다</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-900 bg-opacity-30 border-2 border-red-500 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">😔</div>
                <p className="text-white text-lg leading-relaxed">
                  <span className="text-red-400">지금 당장</span>
                  <br />
                  각 분야에서
                  <br />
                  <span className="line-through">최고가 되지 못하더라도</span>
                </p>
              </div>
              <div className="bg-primary bg-opacity-30 border-2 border-primary rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <p className="text-white text-lg leading-relaxed">
                  <span className="text-primary font-bold text-xl">각 분야의 AI</span>에서는
                  <br />
                  <span className="text-primary font-bold text-2xl">우리가 최고</span>가
                  <br />
                  될 수 있습니다
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-primary bg-opacity-20 border-4 border-yellow-500 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">👑</div>
              <p className="text-white text-2xl font-bold leading-relaxed">
                그러면 <span className="text-primary text-3xl">10년 뒤</span>에는
                <br />
                우리가 <span className="text-yellow-400 text-3xl">자연스럽게</span>
                <br />
                <span className="text-primary text-4xl">각 분야에서 최고</span>가
                <br />
                되어 있을 것이라고
                <br />
                <span className="text-white text-4xl">100% 확신</span>합니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
