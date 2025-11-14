'use client';

export default function CurrentBusinessAnalysisSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark p-4">
      <div className="max-w-7xl w-full space-y-3 fade-in">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-white mb-2">
            현재 사업들의 캐시카우 분석
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-2"></div>
          <p className="text-lg text-primary">최소 노력 × 지속성 평가</p>
        </div>

        {/* Business Analysis Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* 생일이벤트 */}
          <div className="bg-yellow-900 bg-opacity-30 border-2 border-yellow-500 rounded-xl p-3">
            <div className="flex items-center mb-2">
              <div className="text-3xl mr-2">🎂</div>
              <h3 className="text-xl font-bold text-white">생일이벤트</h3>
            </div>
            <div className="space-y-2">
              <div className="bg-dark bg-opacity-50 rounded-lg p-2">
                <p className="text-green-400 text-xs mb-1">✅ 지속성</p>
                <p className="text-white text-sm">지속적인 수익 확보</p>
              </div>
              <div className="bg-dark bg-opacity-50 rounded-lg p-2">
                <p className="text-red-400 text-xs mb-1">❌ 최소 노력</p>
                <p className="text-white text-sm mb-1">
                  유선화, 이동주의 시간과 노력이
                  <br />
                  <span className="text-red-400 font-bold text-base">거의 80%까지 요함</span>
                </p>
                <p className="text-gray-400 text-xs">→ 극단적으로 낮은 축</p>
              </div>
            </div>
          </div>

          {/* 단순 행사 기획 */}
          <div className="bg-blue-900 bg-opacity-30 border-2 border-blue-500 rounded-xl p-3">
            <div className="flex items-center mb-2">
              <div className="text-3xl mr-2">🎪</div>
              <h3 className="text-xl font-bold text-white">단순 행사 기획</h3>
            </div>
            <div className="space-y-2">
              <div className="bg-dark bg-opacity-50 rounded-lg p-2">
                <p className="text-gray-400 text-xs mb-1">예시</p>
                <p className="text-white text-sm">휴리즈, 캠퍼스타운 행사</p>
              </div>
              <div className="bg-dark bg-opacity-50 rounded-lg p-2">
                <p className="text-red-400 text-xs mb-1">❌ 지속성</p>
                <p className="text-white text-sm mb-1">
                  우리의 성격이 존재하지 않는
                  <br />
                  <span className="text-red-400 font-bold text-base">지속적이지 못함</span>
                </p>
                <p className="text-gray-400 text-xs">→ 매우 낮은 점수</p>
              </div>
            </div>
          </div>
        </div>

        {/* 외주 개발 */}
        <div className="bg-gradient-to-r from-red-900 to-orange-900 bg-opacity-50 border-4 border-red-500 rounded-xl p-3">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center mb-2">
              <div className="text-4xl mr-3">💻</div>
              <h3 className="text-2xl font-bold text-white">외주 개발</h3>
            </div>
            <div className="bg-dark bg-opacity-70 rounded-lg p-3">
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div className="text-center">
                  <p className="text-red-400 text-sm mb-1">❌ 최소 노력</p>
                  <p className="text-white text-xs">개발팀에서 매우 힘듦</p>
                </div>
                <div className="text-center">
                  <p className="text-red-400 text-sm mb-1">❌ 지속성</p>
                  <p className="text-white text-xs">프로젝트 단위</p>
                </div>
              </div>
              <div className="border-t-2 border-red-500 pt-2">
                <p className="text-red-300 text-base font-bold">
                  두 요건 모두 충족하지 못함
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-primary bg-opacity-10 border-2 border-primary rounded-xl p-2 text-center">
          <p className="text-white text-sm">
            <span className="text-primary font-bold">현재 사업들</span>은 캐시카우 요건을 완벽히 충족하지 못함
            <br />
            <span className="text-yellow-400 font-semibold">새로운 사업 모델이 필요</span>
          </p>
        </div>
      </div>
    </div>
  );
}
