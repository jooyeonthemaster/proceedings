'use client';

export default function FutureVisionSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-purple-900 to-dark p-4">
      <div className="max-w-7xl w-full space-y-4 fade-in">
        {/* Header */}
        <div className="text-center mb-3">
          <h2 className="text-2xl font-bold text-white mb-2">
            미래 전망과 우리의 방향 (1/2)
          </h2>
          <div className="h-0.5 w-24 bg-primary mx-auto mb-2"></div>
          <p className="text-base text-primary">지금 이 순간이 가장 중요합니다</p>
        </div>

        {/* Current Reality */}
        <div className="bg-gradient-to-r from-red-900 to-orange-900 bg-opacity-50 border-2 border-red-500 rounded-xl p-3 mb-3">
          <div className="text-center space-y-2">
            <div className="text-3xl mb-2">🚨</div>
            <h3 className="text-xl font-bold text-white mb-2">
              지금은 절대 과도기가 아닙니다
            </h3>
            <div className="bg-dark bg-opacity-70 rounded-lg p-3">
              <p className="text-white text-sm leading-relaxed">
                지금 정말 <span className="text-primary font-bold text-base">이 시기</span>에 반드시 우리가 <span className="text-yellow-400 font-bold text-base">사회 초년생으로</span> <span className="text-red-400 font-bold text-lg">잘 가닥을 잡아야 합니다</span>
              </p>
            </div>
          </div>
        </div>

        {/* Traditional Skills Obsolescence */}
        <div className="bg-dark-light border-2 border-gray-600 rounded-xl p-3">
          <h3 className="text-lg font-bold text-white mb-3 text-center">
            💭 만약 지금 전통적인 툴을 배운다면?
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="bg-dark bg-opacity-50 rounded-lg p-2 border-l-4 border-gray-500">
                <p className="text-gray-400 text-xs mb-1">재무 회계 프로그램</p>
                <p className="text-white font-semibold text-sm">20년 딥하게 판다면?</p>
              </div>
              <div className="bg-dark bg-opacity-50 rounded-lg p-2 border-l-4 border-gray-500">
                <p className="text-gray-400 text-xs mb-1">3D 공간 기획</p>
                <p className="text-white font-semibold text-sm">20년 딥하게 판다면?</p>
              </div>
              <div className="bg-dark bg-opacity-50 rounded-lg p-2 border-l-4 border-gray-500">
                <p className="text-gray-400 text-xs mb-1">포토샵, 일러스트</p>
                <p className="text-white font-semibold text-sm">20년 딥하게 판다면?</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-red-900 bg-opacity-40 border-2 border-red-500 rounded-xl p-3 text-center">
                <div className="text-3xl mb-2">❌</div>
                <p className="text-lg text-white font-bold mb-2">100% 확신합니다</p>
                <p className="text-xs text-red-400 leading-relaxed">
                  <span className="font-bold text-sm">20년 뒤</span>에는 <span className="text-white font-bold">애초에 그 툴들이 없을 것</span>이고, <span className="font-bold text-sm text-yellow-400">10년 뒤</span>에는 <span className="text-white font-bold">지금 상상도 못할 시대</span>가 되어 있을 것입니다
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3 bg-dark bg-opacity-60 rounded-lg p-2 text-center">
            <p className="text-gray-300 text-sm italic">
              "말 그대로 난 <span className="text-red-400 font-bold">상상이 안 됩니다</span>. 도대체 <span className="text-primary font-bold">무슨 일들이 벌어질 것인지</span>에 대해서."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
