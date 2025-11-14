'use client';

export default function KPISlideWeek3() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark p-5">
      <div className="max-w-7xl w-full space-y-3 fade-in">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold text-white mb-2">
            개발팀 KPI 달성 현황 업데이트
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-2"></div>
          <p className="text-lg text-primary">11월 3주차 진행 상황</p>
        </div>

        {/* Progress Summary */}
        <div className="grid grid-cols-3 gap-4 mb-2">
          <div className="bg-green-900 bg-opacity-30 border-2 border-green-500 rounded-xl p-3 text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">522만원</div>
            <div className="text-green-300 text-xs">정산 완료 ✅</div>
          </div>
          <div className="bg-blue-900 bg-opacity-30 border-2 border-blue-500 rounded-xl p-3 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">652만원</div>
            <div className="text-blue-300 text-xs">완료 대기중 🕐</div>
          </div>
          <div className="bg-yellow-900 bg-opacity-30 border-2 border-yellow-500 rounded-xl p-3 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-1">850만원+</div>
            <div className="text-yellow-300 text-xs">남은 2주 목표 🎯</div>
          </div>
        </div>

        {/* Detailed Status */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column - Completed */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-green-400 mb-2 flex items-center">
              <span className="mr-3">✅</span> 정산 완료
            </h3>

            <div className="bg-dark-light border-l-4 border-green-500 rounded-lg p-2">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-semibold text-white">크래커스 스튜디오</h4>
                <span className="text-green-400 font-bold text-sm">350만원</span>
              </div>
              <p className="text-xs text-gray-400">네안데르 프로젝트</p>
              <p className="text-xs text-green-300 mt-1">지난주 대비: 정산 완료 ✓</p>
            </div>

            <div className="bg-dark-light border-l-4 border-green-500 rounded-lg p-2">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-semibold text-white">변기</h4>
                <span className="text-green-400 font-bold text-sm">172만원</span>
              </div>
              <p className="text-xs text-gray-400">일해라컴퍼니 프로젝트</p>
              <p className="text-xs text-green-300 mt-1">지난주 대비: 정산 완료 ✓</p>
            </div>
          </div>

          {/* Right Column - In Progress & Target */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-blue-400 mb-2 flex items-center">
              <span className="mr-2">🕐</span> 완료 대기
            </h3>

            <div className="bg-dark-light border-l-4 border-blue-500 rounded-lg p-2">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-semibold text-white">안산 지도 앱</h4>
                <span className="text-blue-400 font-bold text-sm">300만원</span>
              </div>
              <p className="text-xs text-gray-400">네안데르 프로젝트</p>
              <p className="text-xs text-blue-300 mt-1">개발 완료, 정산만 대기중</p>
            </div>

            <div className="bg-dark-light border-l-4 border-blue-500 rounded-lg p-2">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-semibold text-white">안산 포토부스</h4>
                <span className="text-blue-400 font-bold text-sm">352만원</span>
              </div>
              <p className="text-xs text-gray-400">일해라컴퍼니 프로젝트</p>
              <p className="text-xs text-blue-300 mt-1">개발 완료, 정산만 대기중</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Remaining Goals */}
        <div className="bg-gradient-to-r from-yellow-900 to-orange-900 bg-opacity-30 border-2 border-yellow-500 rounded-xl p-3">
          <h3 className="text-lg font-bold text-yellow-400 mb-2 flex items-center">
            <span className="mr-2">🎯</span> 남은 2주간 최우선 목표
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-dark bg-opacity-50 rounded-lg p-2">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-semibold text-white">마케팅 앱</h4>
                <span className="text-yellow-400 font-bold text-sm">500만원+</span>
              </div>
              <p className="text-xs text-gray-400">일해라컴퍼니 프로젝트</p>
              <p className="text-xs text-yellow-300 mt-1">11월 중 개발 완료 및 정산 목표</p>
            </div>
            <div className="bg-dark bg-opacity-50 rounded-lg p-2">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-semibold text-white">외국인 매칭 플랫폼</h4>
                <span className="text-yellow-400 font-bold text-sm">350만원</span>
              </div>
              <p className="text-xs text-gray-400">네안데르 프로젝트</p>
              <p className="text-xs text-yellow-300 mt-1">잔금 처리 필수 (최우선)</p>
            </div>
          </div>
          <div className="mt-2 text-center">
            <p className="text-white font-semibold text-sm">
              💪 남은 2주간 최선을 다해 <span className="text-primary">반드시 정산 완료</span>하도록 기대합니다!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
