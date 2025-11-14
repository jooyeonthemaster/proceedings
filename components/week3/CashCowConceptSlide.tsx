'use client';

export default function CashCowConceptSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-purple-900 to-dark p-4">
      <div className="max-w-7xl w-full space-y-3 fade-in">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-white mb-2">
            현재 미비한 부분과 핵심 과제
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-2"></div>
          <p className="text-lg text-primary">우리의 생존 전략</p>
        </div>

        {/* Current Issue */}
        <div className="bg-gradient-to-r from-red-900 to-orange-900 bg-opacity-50 border-2 border-red-500 rounded-xl p-3 mb-2">
          <div className="flex items-center mb-2">
            <div className="text-3xl mr-3">⚠️</div>
            <div>
              <h3 className="text-xl font-bold text-white">현재 미비한 부분</h3>
              <p className="text-red-300 text-sm">포토부스 마케팅 관련 많이 미비</p>
            </div>
          </div>
        </div>

        {/* Core Mission */}
        <div className="bg-gradient-to-r from-yellow-900 to-orange-900 bg-opacity-40 border-4 border-yellow-500 rounded-xl p-3 mb-2">
          <div className="text-center space-y-2">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              우리가 정말 중요하게 생각해야 할 핵심 과제
            </h3>
            <div className="bg-dark bg-opacity-70 rounded-lg p-3">
              <p className="text-white text-base leading-relaxed">
                당장의 생존도 생존이지만,
                <br />
                최대한 빠른 시일 내에 <span className="text-yellow-400 font-bold text-xl">"캐시카우"</span>를 만들어야 한다
              </p>
            </div>
          </div>
        </div>

        {/* Cash Cow Definition */}
        <div className="bg-dark-light border-2 border-primary rounded-xl p-3">
          <h3 className="text-xl font-bold text-primary mb-3 text-center">
            💰 "캐시카우"란 무엇인가?
          </h3>
          <div className="bg-dark bg-opacity-60 rounded-lg p-3 mb-3">
            <p className="text-white text-base text-center leading-relaxed mb-2">
              <span className="text-primary font-bold">최소한의 노력</span>을 투입하면서
              <br />
              <span className="text-primary font-bold">지속적으로 수익을 창출</span>하는 것
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-primary bg-opacity-20 border-2 border-primary rounded-xl p-3 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="text-lg font-bold text-primary mb-1">요건 1</h4>
              <p className="text-white text-sm">최소한의 노력</p>
            </div>
            <div className="bg-primary bg-opacity-20 border-2 border-primary rounded-xl p-3 text-center">
              <div className="text-3xl mb-2">🔄</div>
              <h4 className="text-lg font-bold text-primary mb-1">요건 2</h4>
              <p className="text-white text-sm">지속성</p>
            </div>
          </div>

          <div className="mt-3 bg-red-900 bg-opacity-30 border-l-4 border-red-500 rounded-lg p-2">
            <p className="text-red-300 text-sm font-semibold text-center">
              ⚠️ 두 개 중 하나만 없어도 결격
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
