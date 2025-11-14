'use client';

export default function PhotoboothBusinessSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-green-900 to-dark p-4">
      <div className="max-w-7xl w-full space-y-3 fade-in">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-white mb-2">
            AI 포토부스 사업의 가능성
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-2"></div>
          <p className="text-lg text-primary">완벽한 캐시카우 모델</p>
        </div>

        {/* Main Advantage */}
        <div className="bg-gradient-to-r from-green-900 via-emerald-900 to-green-900 bg-opacity-50 border-4 border-green-500 rounded-2xl p-4 mb-2">
          <div className="text-center space-y-3">
            <div className="text-5xl mb-2">✅</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              AI 포토부스 사업은
              <br />
              <span className="text-green-400 text-3xl">두 가지 요건을 모두 달성</span>
            </h3>
            <div className="bg-dark bg-opacity-70 rounded-xl p-3">
              <p className="text-white text-base leading-relaxed">
                <span className="text-green-400 font-bold">기계 설비, 프로그램만 개발</span>되면,
                <br />
                <span className="text-primary font-bold text-lg">지속적으로 재활용</span>하며
                <br />
                <span className="text-yellow-400 font-bold text-lg">수익성을 확보</span>할 수 있다
              </p>
            </div>
          </div>
        </div>

        {/* Requirements Analysis */}
        <div className="grid grid-cols-2 gap-3 mb-2">
          <div className="bg-primary bg-opacity-20 border-2 border-primary rounded-xl p-3">
            <div className="text-center mb-2">
              <div className="text-4xl mb-2">⚡</div>
              <h4 className="text-xl font-bold text-primary">최소한의 노력</h4>
            </div>
            <div className="bg-dark bg-opacity-60 rounded-lg p-2">
              <ul className="space-y-1 text-sm text-white">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>초기 개발 후 재활용</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>자동화된 시스템 운영</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>최소 인력으로 관리 가능</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary bg-opacity-20 border-2 border-primary rounded-xl p-3">
            <div className="text-center mb-2">
              <div className="text-4xl mb-2">🔄</div>
              <h4 className="text-xl font-bold text-primary">지속성</h4>
            </div>
            <div className="bg-dark bg-opacity-60 rounded-lg p-2">
              <ul className="space-y-1 text-sm text-white">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>반복적인 행사 적용 가능</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>지속적인 수익 모델</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>확장 가능한 비즈니스</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-opacity-20 border-4 border-yellow-500 rounded-2xl p-3">
          <div className="text-center space-y-2">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              AI 포토부스 사업을 활성화해야 한다!
            </h3>
            <div className="bg-dark bg-opacity-60 rounded-lg p-3">
              <p className="text-xl text-white font-bold leading-relaxed">
                <span className="text-yellow-400">영업</span> ·
                <span className="text-primary"> 마케팅</span> ·
                <span className="text-green-400"> 제품 개발</span>
                <br />
                <span className="text-2xl">화이팅!</span> 💪
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
