'use client';

export default function AIMarketEvolutionSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark p-4">
      <div className="max-w-7xl w-full space-y-3 fade-in">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-white mb-2">
            AI 시장의 폭발적 진화
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-2"></div>
          <p className="text-lg text-primary font-semibold">
            3개월 단위로 일어나는 혁명
          </p>
        </div>

        {/* Timeline of AI Evolution */}
        <div className="grid grid-cols-3 gap-3 mb-2">
          <div className="bg-gradient-to-br from-blue-900 to-cyan-900 bg-opacity-40 border-2 border-blue-500 rounded-lg p-3">
            <div className="text-center mb-2">
              <div className="text-3xl mb-1">🎤</div>
              <h3 className="text-base font-bold text-white">음성 생성 AI</h3>
            </div>
            <ul className="space-y-1 text-xs text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-1">▸</span>
                <span>자연스러운 음성 합성</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-1">▸</span>
                <span>실시간 음성 변환</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-1">▸</span>
                <span>다국어 동시 지원</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-pink-900 bg-opacity-40 border-2 border-purple-500 rounded-lg p-3">
            <div className="text-center mb-2">
              <div className="text-3xl mb-1">🎬</div>
              <h3 className="text-base font-bold text-white">영상 생성 AI</h3>
            </div>
            <ul className="space-y-1 text-xs text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-1">▸</span>
                <span>텍스트 → 영상 변환</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-1">▸</span>
                <span>실사 수준 품질</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-1">▸</span>
                <span>자동 편집 기능</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900 to-emerald-900 bg-opacity-40 border-2 border-green-500 rounded-lg p-3">
            <div className="text-center mb-2">
              <div className="text-3xl mb-1">🎨</div>
              <h3 className="text-base font-bold text-white">이미지 생성 AI</h3>
            </div>
            <ul className="space-y-1 text-xs text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-1">▸</span>
                <span>포토리얼리스틱 수준</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-1">▸</span>
                <span>스타일 커스터마이징</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-1">▸</span>
                <span>초고속 생성 속도</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-2">
          <div className="bg-gradient-to-br from-orange-900 to-red-900 bg-opacity-40 border-2 border-orange-500 rounded-xl p-3">
            <div className="text-center mb-2">
              <div className="text-3xl mb-1">🧊</div>
              <h3 className="text-base font-bold text-white">3D 생성 AI</h3>
            </div>
            <ul className="space-y-1 text-xs text-gray-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-1">▸</span>
                <span>2D → 3D 자동 변환</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-1">▸</span>
                <span>텍스처 자동 생성</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-1">▸</span>
                <span>게임/메타버스 연동</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-900 to-blue-900 bg-opacity-40 border-2 border-cyan-500 rounded-xl p-3">
            <div className="text-center mb-2">
              <div className="text-3xl mb-1">💻</div>
              <h3 className="text-base font-bold text-white">코드 생성 AI</h3>
            </div>
            <ul className="space-y-1 text-xs text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-1">▸</span>
                <span>풀스택 개발 가능</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-1">▸</span>
                <span>버그 자동 수정</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-1">▸</span>
                <span>리팩토링 자동화</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-900 to-amber-900 bg-opacity-40 border-2 border-yellow-500 rounded-xl p-3">
            <div className="text-center mb-2">
              <div className="text-3xl mb-1">🌐</div>
              <h3 className="text-base font-bold text-white">메타버스 생성 AI</h3>
            </div>
            <ul className="space-y-1 text-xs text-gray-300">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-1">▸</span>
                <span>가상 공간 자동 생성</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-1">▸</span>
                <span>NPC 자동 배치</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-1">▸</span>
                <span>인터랙션 시스템</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Message */}
        <div className="bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 bg-opacity-50 border-4 border-red-500 rounded-xl p-4">
          <div className="text-center space-y-2">
            <div className="text-4xl mb-2">⚠️</div>
            <h3 className="text-2xl font-bold text-white mb-2">핵심 문제</h3>
            <div className="bg-dark bg-opacity-70 rounded-xl p-3">
              <p className="text-white text-lg leading-relaxed">
                <span className="text-red-400 font-bold">애초에 AI를 겉핥기식으로 알고 있으면,</span>
                <br />
                <span className="text-yellow-400 font-bold text-xl">지금 AI 시장이 어느 정도로 발전했는지를 모르기 때문에</span>
                <br />
                <span className="text-primary font-bold text-xl">제대로 활용할 수 없습니다</span>
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Indicator */}
        <div className="flex items-center justify-center space-x-3">
          <div className="text-center">
            <div className="text-primary font-bold text-base">3개월</div>
            <div className="text-gray-400 text-xs">혁신 주기</div>
          </div>
          <div className="text-2xl text-primary">→</div>
          <div className="text-center">
            <div className="text-primary font-bold text-base">새로운 AI</div>
            <div className="text-gray-400 text-xs">지속적 출시</div>
          </div>
          <div className="text-2xl text-primary">→</div>
          <div className="text-center">
            <div className="text-primary font-bold text-base">격차 확대</div>
            <div className="text-gray-400 text-xs">따라잡기 불가능</div>
          </div>
        </div>
      </div>
    </div>
  );
}
