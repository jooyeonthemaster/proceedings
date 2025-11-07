'use client';

export default function TitleSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark">
      <div className="text-center space-y-8 fade-in">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-white">
            개발팀 회의록
          </h1>
          <div className="h-1 w-32 bg-primary mx-auto"></div>
        </div>
        <p className="text-3xl text-gray-300">2025년 11월 8일</p>
        <div className="pt-8">
          <p className="text-xl text-primary font-semibold">
            주식회사 네안데르
          </p>
          <p className="text-lg text-gray-400 mt-2">
            김주연 개발 전무이사
          </p>
        </div>
      </div>
    </div>
  );
}
