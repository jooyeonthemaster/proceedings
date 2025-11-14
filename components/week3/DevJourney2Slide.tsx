'use client';

export default function DevJourney2Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark p-4">
      <div className="max-w-7xl w-full space-y-3 fade-in">
        {/* Header */}
        <div className="text-center mb-3">
          <h2 className="text-3xl font-bold text-white mb-2">
            김주연의 개발 여정 (2/3)
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-2"></div>
          <p className="text-lg text-primary">성과와 실적</p>
        </div>

        {/* Main Content */}
        <div className="space-y-3">
          {/* 코딩 배경 */}
          <div className="bg-dark-light border-2 border-gray-600 rounded-xl p-3">
            <div className="flex items-center mb-3">
              <div className="bg-red-500 bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                <span className="text-2xl">❌</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">코딩 배경</h3>
                <p className="text-gray-400 text-sm">시작점</p>
              </div>
            </div>
            <div className="bg-dark bg-opacity-50 rounded-lg p-3">
              <p className="text-lg text-white text-center font-bold">
                코딩에 대해서 <span className="text-red-400">아무것도 모르지만</span>...
              </p>
            </div>
          </div>

          {/* 6개월 성과 */}
          <div className="bg-gradient-to-r from-green-900 to-emerald-900 bg-opacity-40 border-4 border-green-500 rounded-xl p-3">
            <div className="flex items-center mb-3">
              <div className="bg-green-500 rounded-full w-14 h-14 flex items-center justify-center mr-3">
                <span className="text-3xl">🎯</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">6개월 만에</h3>
                <p className="text-green-300 text-base">AI와 함께한 결과</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-dark bg-opacity-60 rounded-xl p-3 text-center">
                <div className="text-4xl mb-2">💰</div>
                <p className="text-white text-base mb-1">외주 개발 수주액</p>
                <p className="text-green-400 text-3xl font-bold">연봉 이상</p>
                <p className="text-green-300 text-xs mt-1">훨씬 넘는 금액 달성</p>
              </div>
              <div className="bg-dark bg-opacity-60 rounded-xl p-3 text-center">
                <div className="text-4xl mb-2">⏱️</div>
                <p className="text-white text-base mb-1">소요 시간</p>
                <p className="text-primary text-3xl font-bold">단 6개월</p>
                <p className="text-gray-300 text-xs mt-1">AI 활용 집중 학습</p>
              </div>
            </div>
          </div>

          {/* 핵심 포인트 */}
          <div className="bg-purple-900 bg-opacity-30 border-2 border-purple-500 rounded-xl p-3">
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              💡 이것이 가능했던 이유
            </h3>
            <div className="space-y-2">
              <div className="flex items-start bg-dark bg-opacity-50 rounded-lg p-2">
                <span className="text-primary text-lg mr-2">1.</span>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">
                    유튜브에 없는, AI와의 새벽까지 시도
                  </p>
                  <p className="text-gray-400 text-xs">
                    누군가 가르쳐준 것이 아닌, 직접 부딪히며 습득
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-dark bg-opacity-50 rounded-lg p-2">
                <span className="text-primary text-lg mr-2">2.</span>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">
                    독자적 방법론 개발
                  </p>
                  <p className="text-gray-400 text-xs">
                    커서 + 클로드 코드 무제한 맥락 활용법 창작
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-dark bg-opacity-50 rounded-lg p-2">
                <span className="text-primary text-lg mr-2">3.</span>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">
                    조잡한 순간부터 직접 구현
                  </p>
                  <p className="text-gray-400 text-xs">
                    완벽함을 기다리지 않고, 실행하며 배움
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
