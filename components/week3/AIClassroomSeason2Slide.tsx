'use client';

export default function AIClassroomSeason2Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark p-4">
      <div className="max-w-7xl w-full space-y-3 fade-in">
        {/* Header */}
        <div className="text-center mb-3">
          <h2 className="text-3xl font-bold text-white mb-2">
            김박사님의 AI 교실 🎓
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-2"></div>
          <p className="text-xl text-primary font-semibold">시즌 2</p>
          <p className="text-base text-gray-400 mt-1">이번주 학습 현황</p>
        </div>

        {/* Students Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* 우수 학생 */}
          <div className="relative">
            <div className="absolute -top-3 -right-3 z-10">
              <div className="bg-yellow-500 text-dark px-3 py-2 rounded-full shadow-lg transform rotate-12">
                <span className="text-base font-bold">⭐ 우수</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900 to-emerald-900 bg-opacity-40 border-2 border-green-500 rounded-2xl p-4 h-full">
              <div className="text-center mb-3">
                <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-3xl">👩‍💼</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">유선화</h3>
                <p className="text-green-300 text-xs">마케팅팀</p>
              </div>

              <div className="space-y-2">
                <div className="bg-dark bg-opacity-50 rounded-lg p-2">
                  <h4 className="text-green-400 font-semibold mb-1 flex items-center text-sm">
                    <span className="mr-1">💰</span> AI 도구 투자
                  </h4>
                  <p className="text-white text-sm">
                    <span className="text-primary font-bold">힉스필드 AI</span> 결제
                  </p>
                  <p className="text-green-300 text-xs mt-1">
                    거금 <span className="font-bold text-base">40만원</span> 투자!
                  </p>
                </div>

                <div className="bg-dark bg-opacity-50 rounded-lg p-2">
                  <h4 className="text-green-400 font-semibold mb-1 flex items-center text-sm">
                    <span className="mr-1">🎨</span> 활용 분야
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-white flex items-center text-sm">
                      <span className="text-primary mr-1">▸</span>
                      AI 영상 생성 시도중
                    </li>
                    <li className="text-white flex items-center text-sm">
                      <span className="text-primary mr-1">▸</span>
                      AI 이미지 생성 활용
                    </li>
                  </ul>
                </div>

                <div className="bg-green-500 bg-opacity-20 rounded-lg p-2 mt-2">
                  <p className="text-green-300 text-xs text-center font-semibold">
                    ✨ 적극적인 AI 활용과 투자 마인드가 돋보입니다!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 불량 학생 */}
          <div className="relative">
            <div className="absolute -top-3 -right-3 z-10">
              <div className="bg-red-500 text-white px-3 py-2 rounded-full shadow-lg transform -rotate-12">
                <span className="text-base font-bold">⚠️ 불량</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900 to-orange-900 bg-opacity-40 border-2 border-red-500 rounded-2xl p-4 h-full">
              <div className="text-center mb-3">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-3xl">😰</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">이동주</h3>
                <p className="text-red-300 text-xs">회계팀</p>
              </div>

              <div className="space-y-2">
                <div className="bg-dark bg-opacity-50 rounded-lg p-2">
                  <h4 className="text-red-400 font-semibold mb-1 flex items-center text-sm">
                    <span className="mr-1">📊</span> 지난주 목표
                  </h4>
                  <p className="text-gray-300 text-xs line-through">
                    재무 프로그램 설계
                  </p>
                  <p className="text-gray-300 text-xs line-through">
                    Claude AI 엑셀 활용
                  </p>
                </div>

                <div className="bg-dark bg-opacity-50 rounded-lg p-3 text-center">
                  <p className="text-4xl mb-2">🤔</p>
                  <p className="text-red-300 text-sm">
                    이번주 AI 활용 실적...?
                  </p>
                </div>

                <div className="bg-red-500 bg-opacity-20 rounded-lg p-2 mt-2">
                  <p className="text-red-300 text-xs text-center font-semibold">
                    ⚡ 다음주는 더 적극적인 참여를 기대합니다!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="bg-primary bg-opacity-10 border-2 border-primary rounded-xl p-3 text-center">
          <p className="text-white text-base">
            <span className="text-primary font-bold">AI 학습</span>은 선택이 아닌 <span className="text-primary font-bold">필수</span>입니다.
            <br />
            함께 성장하는 네안데르를 만들어갑시다! 💪
          </p>
        </div>
      </div>
    </div>
  );
}
