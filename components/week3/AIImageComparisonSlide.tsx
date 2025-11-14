'use client';

import Image from 'next/image';

export default function AIImageComparisonSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark p-4">
      <div className="max-w-7xl w-full space-y-3 fade-in">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-white mb-2">
            AI 이미지 생성 기술의 진화
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-2"></div>
          <p className="text-lg text-red-400 font-semibold">
            불과 1년 사이의 차이
          </p>
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* 2024 Model */}
          <div className="bg-dark-light border-2 border-red-500 rounded-xl overflow-hidden">
            <div className="bg-red-900 bg-opacity-50 p-2 text-center">
              <h3 className="text-lg font-bold text-white">2024년 출시 모델</h3>
              <p className="text-red-300 text-xs mt-1">과거 기술</p>
            </div>
            <div className="p-2">
              <div className="relative w-full h-64 bg-dark rounded-lg overflow-hidden">
                <Image
                  src="/11-3/imageexample.png"
                  alt="2024년 AI 이미지 생성 예시"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* 2025 Model */}
          <div className="bg-dark-light border-2 border-primary rounded-xl overflow-hidden">
            <div className="bg-primary bg-opacity-30 p-2 text-center">
              <h3 className="text-lg font-bold text-white">2025년 출시 모델</h3>
              <p className="text-primary text-xs mt-1">현재 기술</p>
            </div>
            <div className="p-2">
              <div className="relative w-full h-64 bg-dark rounded-lg overflow-hidden">
                <Image
                  src="/11-3/nanobanana.png"
                  alt="2025년 AI 이미지 생성 예시 - 나노바나나"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Message */}
        <div className="bg-gradient-to-r from-orange-900 to-red-900 bg-opacity-50 border-4 border-yellow-500 rounded-xl p-3">
          <div className="flex items-start space-x-2">
            <div className="text-3xl">⚠️</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">
                여기서 핵심은 이게 아닙니다
              </h3>
              <div className="space-y-2">
                <div className="bg-dark bg-opacity-60 rounded-lg p-2">
                  <p className="text-white text-sm leading-relaxed">
                    <span className="text-red-400 font-bold">❌ "지금 AI가 얼마나 대단하냐"</span>를 말하고 싶은게 아닙니다
                  </p>
                </div>
                <div className="bg-dark bg-opacity-60 rounded-lg p-2 border-2 border-primary">
                  <p className="text-white text-sm leading-relaxed">
                    <span className="text-primary font-bold text-base">✅ 진짜 문제</span>
                    <br />
                    <span className="text-yellow-400 font-semibold">
                      AI에 대해서 모르는 사람들은,
                      <br />
                      현 시점에서 AI를 통해서 정확히 <span className="text-white font-bold">어느 수준까지를 할 수 있는지</span>를 모른다는게 문제입니다
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-dark-light border border-primary rounded-lg p-2 text-center">
            <div className="text-2xl font-bold text-primary mb-1">1년</div>
            <div className="text-gray-400 text-xs">이 정도 차이가 나는 기간</div>
          </div>
          <div className="bg-dark-light border border-primary rounded-lg p-2 text-center">
            <div className="text-2xl font-bold text-primary mb-1">3개월</div>
            <div className="text-gray-400 text-xs">AI 혁신 주기</div>
          </div>
          <div className="bg-dark-light border border-primary rounded-lg p-2 text-center">
            <div className="text-2xl font-bold text-primary mb-1">∞</div>
            <div className="text-gray-400 text-xs">앞으로의 발전 가능성</div>
          </div>
        </div>
      </div>
    </div>
  );
}
