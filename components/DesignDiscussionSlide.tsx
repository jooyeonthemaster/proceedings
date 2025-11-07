'use client';

export default function DesignDiscussionSlide() {
  return (
    <div className="w-full h-screen flex flex-col bg-dark p-12">
      <div className="fade-in-up">
        <h2 className="text-5xl font-bold text-white mb-2">
          주요 논의사항
        </h2>
        <div className="h-1 w-24 bg-primary mb-8"></div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-red-900 bg-opacity-30 border-l-4 border-red-500 p-6 rounded-lg mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-3xl font-bold text-red-400 mb-3">
            3D 오브제 디퓨저 디자인 변경 건
          </h3>
          <div className="flex items-center space-x-3">
            <span className="text-yellow-400 text-2xl">⚠️</span>
            <p className="text-xl text-gray-300">
              <span className="text-white font-bold">서포터 제거가 너무 어려워</span> 퀄리티 이슈가 발생하고 있습니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 flex-1">
          <div className="bg-dark-light p-6 rounded-xl border-2 border-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-3xl font-bold text-primary">1안</h4>
              <span className="text-xs bg-primary text-dark px-3 py-1 rounded-full font-semibold">
                추천
              </span>
            </div>

            <div className="bg-dark rounded-lg h-64 mb-4 flex items-center justify-center border-2 border-gray-600">
              <div className="text-center">
                <p className="text-gray-500 text-sm mb-2">이미지 홀더</p>
                <p className="text-gray-400 text-xs">design_option_1.jpg</p>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-lg font-semibold text-white mb-2">특징</h5>
              <div className="space-y-1">
                <div className="flex items-start space-x-2">
                  <span className="text-primary text-sm">→</span>
                  <p className="text-gray-300 text-sm">서포터 최소화 설계</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-primary text-sm">→</span>
                  <p className="text-gray-300 text-sm">제거 용이성 향상</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-primary text-sm">→</span>
                  <p className="text-gray-300 text-sm">생산 효율 개선</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-light p-6 rounded-xl border-2 border-gray-600 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-3xl font-bold text-white">2안</h4>
              <span className="text-xs bg-gray-600 text-gray-300 px-3 py-1 rounded-full font-semibold">
                검토중
              </span>
            </div>

            <div className="bg-dark rounded-lg h-64 mb-4 flex items-center justify-center border-2 border-gray-600">
              <div className="text-center">
                <p className="text-gray-500 text-sm mb-2">이미지 홀더</p>
                <p className="text-gray-400 text-xs">design_option_2.jpg</p>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-lg font-semibold text-white mb-2">특징</h5>
              <div className="space-y-1">
                <div className="flex items-start space-x-2">
                  <span className="text-gray-400 text-sm">→</span>
                  <p className="text-gray-300 text-sm">대안 구조 적용</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-gray-400 text-sm">→</span>
                  <p className="text-gray-300 text-sm">안정성 강화</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-gray-400 text-sm">→</span>
                  <p className="text-gray-300 text-sm">비용 효율 고려</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-light p-6 rounded-xl border-2 border-gray-600 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-3xl font-bold text-white">3안</h4>
              <span className="text-xs bg-gray-600 text-gray-300 px-3 py-1 rounded-full font-semibold">
                검토중
              </span>
            </div>

            <div className="bg-dark rounded-lg h-64 mb-4 flex items-center justify-center border-2 border-gray-600">
              <div className="text-center">
                <p className="text-gray-500 text-sm mb-2">이미지 홀더</p>
                <p className="text-gray-400 text-xs">design_option_3.jpg</p>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-lg font-semibold text-white mb-2">특징</h5>
              <div className="space-y-1">
                <div className="flex items-start space-x-2">
                  <span className="text-gray-400 text-sm">→</span>
                  <p className="text-gray-300 text-sm">혁신적 접근</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-gray-400 text-sm">→</span>
                  <p className="text-gray-300 text-sm">완전 새로운 구조</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-gray-400 text-sm">→</span>
                  <p className="text-gray-300 text-sm">장기적 관점</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-primary bg-opacity-10 border-l-4 border-primary p-4 rounded fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-300 text-center">
            <span className="text-primary font-bold">각 안에 대한 상세 논의</span>를 진행하고 최적의 디자인을 선정할 예정입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
