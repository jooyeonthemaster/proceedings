'use client';

export default function DevJourney3Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-purple-900 to-dark p-4">
      <div className="max-w-7xl w-full space-y-3 fade-in">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-white mb-2">
            김주연의 개발 여정 (3/3)
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-2"></div>
          <p className="text-lg text-primary">결론과 확신</p>
        </div>

        {/* 주요 비교 */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* 전통적 최고 */}
          <div className="bg-blue-900 bg-opacity-30 border-2 border-blue-500 rounded-xl p-3">
            <div className="text-center mb-3">
              <div className="text-3xl mb-2">👨‍💼</div>
              <h3 className="text-lg font-bold text-white mb-1">전통적 전문가</h3>
            </div>
            <div className="space-y-2">
              <div className="bg-dark bg-opacity-50 rounded-lg p-2">
                <p className="text-gray-400 text-xs mb-1">사업계획서</p>
                <p className="text-white font-semibold text-sm">
                  ❌ 대한민국에서 <span className="line-through text-gray-500">가장 잘 쓰는 사람 아님</span>
                </p>
              </div>
              <div className="bg-dark bg-opacity-50 rounded-lg p-2">
                <p className="text-gray-400 text-xs mb-1">개발</p>
                <p className="text-white font-semibold text-sm">
                  ❌ 대한민국에서 <span className="line-through text-gray-500">가장 잘 하는 사람 아님</span>
                </p>
              </div>
            </div>
          </div>

          {/* AI 시대의 최고 */}
          <div className="bg-gradient-to-br from-primary to-green-600 bg-opacity-30 border-4 border-primary rounded-xl p-3">
            <div className="text-center mb-3">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-bold text-primary mb-1">AI 시대의 리더</h3>
            </div>
            <div className="space-y-2">
              <div className="bg-dark bg-opacity-70 rounded-lg p-2 border-2 border-primary">
                <p className="text-primary text-xs mb-1 font-semibold">AI 사업계획서</p>
                <p className="text-white font-bold text-sm">
                  ✅ 대한민국에서 <span className="text-primary">가장 잘 쓰는 사람</span>
                </p>
              </div>
              <div className="bg-dark bg-opacity-70 rounded-lg p-2 border-2 border-primary">
                <p className="text-primary text-xs mb-1 font-semibold">AI 개발</p>
                <p className="text-white font-bold text-sm">
                  ✅ 대한민국에서 <span className="text-primary">가장 잘 하는 사람</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 핵심 선언 */}
        <div className="bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 bg-opacity-50 border-4 border-yellow-500 rounded-2xl p-4">
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold text-white mb-3">
              💯 100% 확신합니다
            </h3>
            <div className="bg-dark bg-opacity-70 rounded-xl p-4">
              <p className="text-lg text-white leading-relaxed mb-3">
                난 <span className="text-blue-400">100% 확신</span>해.
              </p>
              <p className="text-xl text-primary font-bold leading-relaxed">
                이 격차는
                <br />
                정확하게 <span className="text-yellow-400 text-2xl">3년 내로</span>
                <br />
                <span className="text-red-400 text-2xl">기하급수적으로</span>
                <br />
                <span className="text-white text-2xl">매꿀 수 없는 격차</span>로
                <br />
                <span className="text-primary text-3xl">벌어질 것</span>이다
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="bg-dark-light border-2 border-gray-600 rounded-xl p-3">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <div className="text-xl mb-1">📍</div>
              <div className="text-white font-semibold text-sm">현재</div>
              <div className="text-gray-400 text-xs">AI 역량 선점</div>
            </div>
            <div className="flex-1 h-2 bg-gradient-to-r from-primary via-yellow-500 to-red-500 rounded-full mx-2"></div>
            <div className="text-center flex-1">
              <div className="text-xl mb-1">🚀</div>
              <div className="text-primary font-bold text-sm">1년 후</div>
              <div className="text-gray-400 text-xs">격차 확대 시작</div>
            </div>
            <div className="flex-1 h-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 rounded-full mx-2"></div>
            <div className="text-center flex-1">
              <div className="text-xl mb-1">⚡</div>
              <div className="text-red-400 font-bold text-sm">3년 후</div>
              <div className="text-gray-400 text-xs">압도적 차이</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
