'use client';

export default function DevJourney1_2Slide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-purple-900 to-dark p-8">
      <div className="max-w-6xl w-full space-y-8 fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            김주연의 개발 여정 (1/3 - 계속)
          </h2>
          <div className="h-1 w-32 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-primary">현재 - 독자 개발 방법론</p>
        </div>

        {/* 현재 - 커서 + 클로드 코드 */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center border-4 border-dark shadow-2xl">
              <span className="text-5xl">🚀</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900 to-blue-900 border-4 border-primary rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-primary mb-4 text-center">현재</h3>
            <p className="text-xl text-gray-300 mb-6 text-center">독자 개발 방법론</p>

            <div className="space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed text-center">
                <span className="text-primary font-bold text-2xl">커서</span>에다가
                <span className="text-primary font-bold text-2xl"> 클로드 코드</span>를 넣어서,
              </p>

              <div className="bg-dark bg-opacity-70 rounded-xl p-6 border-2 border-primary">
                <p className="text-white text-xl font-bold mb-4 text-center">
                  ✨ 혁신적 활용법
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-2xl mt-1">▸</span>
                    <span className="text-white"><span className="text-primary font-bold">무제한의</span> 개발 환경</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-2xl mt-1">▸</span>
                    <span className="text-white"><span className="text-primary font-bold">맥락을 끊임없이 이어서</span> 쓸 수 있는 환경</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-900 bg-opacity-30 border-l-4 border-yellow-500 rounded-xl p-6 mt-6">
                <p className="text-yellow-300 font-bold text-lg text-center">
                  💡 이 활용법 역시 <span className="text-white">유튜브 어디에도 없이</span>
                  <br />
                  <span className="text-primary text-2xl">내가 "창작한" 방법론</span>입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
