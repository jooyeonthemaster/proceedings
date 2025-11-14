'use client';

export default function DevJourney1Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark p-8">
      <div className="max-w-7xl w-full space-y-8 fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            김주연의 개발 여정 (1/3)
          </h2>
          <div className="h-1 w-32 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-primary">아임웹 시절부터 클로드 아티팩트까지</p>
        </div>

        {/* Timeline - 2 Columns */}
        <div className="grid grid-cols-2 gap-12">
          {/* 아임웹 시절 */}
          <div className="relative">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center border-4 border-dark shadow-lg">
                <span className="text-4xl">🌱</span>
              </div>
            </div>
            <div className="bg-dark-light border-2 border-gray-600 rounded-xl p-6 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-primary mb-3 text-center">아임웹 시절</h3>
              <p className="text-base text-gray-300 mb-4 text-center">AI 없던 시대</p>
              <div className="space-y-4 text-gray-300 flex-1">
                <p className="text-base leading-relaxed">
                  <span className="text-white font-semibold">아임웹의 코드 위젯</span>을 통해서
                  <span className="text-primary font-bold"> 직접 서비스를 구축</span>했습니다.
                </p>
                <p className="text-base leading-relaxed">
                  코드를 <span className="text-primary font-bold">하나 하나 붙여넣으면서</span>
                  <span className="text-white font-semibold"> 정말 조잡한 순간부터</span> 직접 서비스를 구현했습니다.
                </p>
                <div className="bg-dark bg-opacity-50 rounded-lg p-4 mt-4">
                  <p className="text-yellow-400 italic text-sm text-center">
                    "클로드 코드도, 커서도 없던 시절..."
                    <br />
                    "그저 순수한 노력과 시행착오만이 있었습니다."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 클로드 아티팩트 시대 */}
          <div className="relative">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center border-4 border-dark shadow-lg">
                <span className="text-4xl">🔧</span>
              </div>
            </div>
            <div className="bg-dark-light border-2 border-primary rounded-xl p-6 h-full flex flex-col shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-3 text-center">클로드 아티팩트 시대</h3>
              <p className="text-base text-gray-300 mb-4 text-center">MVP 구축 시작</p>
              <div className="space-y-4 text-gray-300 flex-1">
                <p className="text-base leading-relaxed">
                  클로드에서 <span className="text-primary font-bold">아티팩트를 하나하나 붙여가면서</span>
                  <span className="text-white font-semibold"> MVP 서비스를 구축</span>하는 시도를 해봤습니다.
                </p>
                <div className="bg-red-900 bg-opacity-30 border-l-4 border-red-500 rounded-lg p-4 mt-4">
                  <p className="text-white font-bold text-base mb-2">⚠️ 중요한 사실</p>
                  <p className="text-sm leading-relaxed">
                    이런 것들은 <span className="text-red-400 font-bold">어떤 개발 유튜브에서도 언급되지 않았습니다.</span>
                    <br />
                    <span className="text-primary font-bold">그냥 말 그대로 내가 AI랑 새벽까지 시도하면서 습득한 것</span>입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
