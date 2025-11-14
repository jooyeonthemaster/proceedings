'use client';

export default function SupportBusinessSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark p-4">
      <div className="max-w-7xl w-full space-y-3 fade-in">
        {/* Header */}
        <div className="text-center mb-3">
          <h2 className="text-3xl font-bold text-white mb-2">
            지원사업 성과 & 독자 방법론
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-2"></div>
          <p className="text-lg text-primary">AI로 만들어낸 압도적 차이</p>
        </div>

        {/* 2025년 지원사업 성과 */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 bg-opacity-40 border-4 border-blue-500 rounded-xl p-4 mb-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center mr-3">
                <span className="text-3xl">🏆</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">2025년 지원사업 실적</h3>
                <p className="text-blue-300 text-base">AI 100% 활용</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">10개</div>
              <div className="text-white text-base">합격</div>
            </div>
          </div>
          <div className="bg-dark bg-opacity-60 rounded-lg p-3">
            <p className="text-white text-base text-center leading-relaxed">
              <span className="text-primary font-bold">모든 과정</span>에서 AI를
              <span className="text-primary font-bold text-lg"> 100% 활용</span>했습니다
            </p>
          </div>
        </div>

        {/* 독자 방법론 */}
        <div className="grid grid-cols-2 gap-3">
          {/* 방법론 1: 사업계획서 */}
          <div className="bg-dark-light border-2 border-primary rounded-xl p-3">
            <div className="bg-primary bg-opacity-20 rounded-lg p-2 mb-2">
              <h4 className="text-lg font-bold text-primary mb-1">📊 독자 방법론 #1</h4>
              <p className="text-white text-base font-semibold">AI 사업계획서 도식화</p>
            </div>
            <div className="space-y-2">
              <div className="bg-dark bg-opacity-50 rounded-lg p-2">
                <p className="text-gray-400 text-xs mb-1">일반적인 방법</p>
                <p className="text-white text-sm">
                  AI로 사업계획서를 <span className="text-blue-400">작성</span>하는 방법
                </p>
                <p className="text-gray-500 text-xs mt-1">→ 많은 자료에 나와있음</p>
              </div>
              <div className="text-2xl text-center my-1">⬇️</div>
              <div className="bg-primary bg-opacity-20 rounded-lg p-2 border-2 border-primary">
                <p className="text-gray-400 text-xs mb-1">김주연의 독자 방법론</p>
                <p className="text-white font-bold text-sm">
                  AI로 사업계획서를 <span className="text-primary">도식화</span> →
                  <br />
                  <span className="text-primary text-base">시각적 사업계획서</span>로 변환
                </p>
                <p className="text-yellow-400 text-xs mt-1 font-semibold">
                  ✨ 어디에도 없는 방법론!
                </p>
              </div>
            </div>
          </div>

          {/* 방법론 2: 개발 */}
          <div className="bg-dark-light border-2 border-primary rounded-xl p-3">
            <div className="bg-primary bg-opacity-20 rounded-lg p-2 mb-2">
              <h4 className="text-lg font-bold text-primary mb-1">💻 독자 방법론 #2</h4>
              <p className="text-white text-base font-semibold">커서 + 클로드 코드 통합</p>
            </div>
            <div className="space-y-2">
              <div className="bg-dark bg-opacity-50 rounded-lg p-2">
                <p className="text-gray-400 text-xs mb-1">일반적인 방법</p>
                <p className="text-white text-sm">
                  커서 <span className="text-blue-400">또는</span> 클로드 코드를 사용
                </p>
                <p className="text-gray-500 text-xs mt-1">→ 분리된 사용</p>
              </div>
              <div className="text-2xl text-center my-1">⬇️</div>
              <div className="bg-primary bg-opacity-20 rounded-lg p-2 border-2 border-primary">
                <p className="text-gray-400 text-xs mb-1">김주연의 독자 방법론</p>
                <p className="text-white font-bold text-sm mb-2">
                  커서 <span className="text-primary">+</span> 클로드 코드
                </p>
                <ul className="space-y-1 text-xs">
                  <li className="flex items-start">
                    <span className="text-primary mr-1">▸</span>
                    <span className="text-white">무제한의 개발 환경</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-1">▸</span>
                    <span className="text-white">끊임없이 이어지는 맥락</span>
                  </li>
                </ul>
                <p className="text-yellow-400 text-xs mt-1 font-semibold">
                  ✨ 유튜브 어디에도 없음!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="bg-gradient-to-r from-yellow-900 to-orange-900 bg-opacity-40 border-2 border-yellow-500 rounded-xl p-3">
          <p className="text-white text-base text-center leading-relaxed">
            <span className="text-yellow-400 font-bold text-lg">말 그대로</span>
            <br />
            <span className="text-primary font-bold text-xl">나만의 노하우이자, 기술력</span>
            <br />
            <span className="text-gray-300 text-sm">아직까지도 아무도 모르는, 내가 개발한 방법론입니다</span>
          </p>
        </div>
      </div>
    </div>
  );
}
