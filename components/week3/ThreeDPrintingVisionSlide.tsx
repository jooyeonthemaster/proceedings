'use client';

export default function ThreeDPrintingVisionSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-purple-900 to-dark p-3">
      <div className="max-w-7xl w-full space-y-2 fade-in">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-2xl font-bold text-white mb-1">
            새로운 사업 아이디어: 3D 프린터 기반 사업
          </h2>
          <div className="h-0.5 w-24 bg-primary mx-auto mb-1"></div>
          <p className="text-base text-primary">포토부스에서 시작된 혁신적 발상</p>
        </div>

        {/* Inspiration */}
        <div className="bg-blue-900 bg-opacity-30 border-2 border-blue-500 rounded-xl p-2 mb-2">
          <div className="flex items-center mb-2">
            <div className="text-2xl mr-2">💡</div>
            <h3 className="text-lg font-bold text-white">발상의 시작</h3>
          </div>
          <div className="bg-dark bg-opacity-60 rounded-lg p-2">
            <p className="text-white text-sm leading-relaxed mb-1">
              지금 형(김제연)이랑 실제로 <span className="text-primary font-bold">포토부스 프레임도 로봇으로 만들고 있는데</span>,
              <br />
              우리가 <span className="text-yellow-400 font-bold">재사용성, 모듈형 전시용 가구, 매대, 가벽</span>을
              <br />
              <span className="text-primary font-bold text-base">PLA로 만들 수 있는 기술력</span>이 있다면 어떨까?
            </p>
            <a
              href="https://www.instagram.com/reel/DNDLEU7TvES/?igsh=d2JyZWUwcG4wZjRo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-xs underline hover:text-blue-300"
            >
              🔗 참고 영상 보기
            </a>
          </div>
        </div>

        {/* PLA Advantages */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-2 text-center">
            <div className="text-2xl mb-1">🌱</div>
            <p className="text-green-400 text-xs font-semibold mb-1">친환경 소재</p>
            <p className="text-white text-xs">ESG 어필 가능</p>
          </div>
          <div className="bg-primary bg-opacity-30 border border-primary rounded-lg p-2 text-center">
            <div className="text-2xl mb-1">🧩</div>
            <p className="text-primary text-xs font-semibold mb-1">모듈형 설계</p>
            <p className="text-white text-xs">재조립 가능</p>
          </div>
          <div className="bg-yellow-900 bg-opacity-30 border border-yellow-500 rounded-lg p-2 text-center">
            <div className="text-2xl mb-1">⚡</div>
            <p className="text-yellow-400 text-xs font-semibold mb-1">제작 용이성</p>
            <p className="text-white text-xs">목공·아크릴·철제보다 압도적으로 편리</p>
          </div>
        </div>

        {/* Business Evolution */}
        <div className="bg-dark-light border-2 border-primary rounded-xl p-2">
          <h3 className="text-base font-bold text-primary mb-2 text-center">💼 사업 확장 로드맵</h3>
          <div className="space-y-2">
            {/* Phase 1 */}
            <div className="flex items-center">
              <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center mr-2 flex-shrink-0">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div className="bg-dark bg-opacity-50 rounded-lg p-2 flex-1">
                <p className="text-white text-sm font-semibold">3D 프린터로 전시용 가구 제작 + 공간 기획</p>
                <p className="text-gray-400 text-xs">→ 아이덴티티 있고 특색있는 전시 대행사</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex items-center">
              <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center mr-2 flex-shrink-0">
                <span className="text-dark text-sm font-bold">2</span>
              </div>
              <div className="bg-dark bg-opacity-50 rounded-lg p-2 flex-1">
                <p className="text-white text-sm font-semibold mb-1">3D 프린터 기반 라이프스타일 가구 브랜드</p>
                <p className="text-gray-300 text-xs leading-tight">
                  선화 · 동주 → 가구 좋아함
                  <br />
                  재영 → 라이프스타일 소품 좋아함
                  <br />
                  주연 → 3D 프린터 좋아함
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Vision */}
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 bg-opacity-40 border-2 border-purple-500 rounded-xl p-2">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">🎨 3D 프린팅 라이프스타일 브랜드</h3>
              <p className="text-gray-300 text-xs mb-1">디퓨저, 소품, 가구까지 확장</p>
              <div className="space-y-1">
                <a
                  href="https://blog.naver.com/designpress2016/222278592193"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xs underline hover:text-blue-300 block"
                >
                  🔗 참고 블로그
                </a>
                <a
                  href="https://www.instagram.com/foresk_studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xs underline hover:text-blue-300 block"
                >
                  🔗 Foresk Studio
                </a>
                <a
                  href="https://smartstore.naver.com/foresk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xs underline hover:text-blue-300 block"
                >
                  🔗 Foresk 스마트스토어
                </a>
              </div>
            </div>
            <div className="ml-3 bg-dark bg-opacity-60 rounded-lg p-2 text-center">
              <div className="text-3xl mb-1">💎</div>
              <p className="text-yellow-400 text-xs font-bold">고마진</p>
              <p className="text-white text-xs">가구 단가</p>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-primary bg-opacity-20 rounded-lg p-2 text-center">
            <p className="text-primary text-xs font-semibold mb-1">✅ 제작 공정 쉬움</p>
            <p className="text-white text-xs">상대적으로 간단</p>
          </div>
          <div className="bg-primary bg-opacity-20 rounded-lg p-2 text-center">
            <p className="text-primary text-xs font-semibold mb-1">✅ 창고 설비 적음</p>
            <p className="text-white text-xs">공간 효율적</p>
          </div>
          <div className="bg-primary bg-opacity-20 rounded-lg p-2 text-center">
            <p className="text-primary text-xs font-semibold mb-1">✅ 고마진 가능</p>
            <p className="text-white text-xs">가구 단가 높음</p>
          </div>
        </div>
      </div>
    </div>
  );
}
