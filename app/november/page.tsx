'use client';

import Link from 'next/link';

export default function NovemberPage() {
  const weeks = [
    {
      week: 2,
      date: '2025년 11월 8일',
      title: '11월 2주차 회의록',
      description: 'KPI 현황, AI 교실, 포토부스 개발, 디자인 논의',
      path: '/november/week2',
      color: 'from-blue-500 to-cyan-600',
      status: 'completed'
    },
    {
      week: 3,
      date: '2025년 11월 15일',
      title: '11월 3주차 회의록',
      description: 'KPI 업데이트, AI 교실 시즌2, 김주연의 AI 여정',
      path: '/november/week3',
      color: 'from-purple-500 to-pink-600',
      status: 'current'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-white transition-colors mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            뒤로 가기
          </Link>
          <h1 className="text-5xl font-bold text-white mb-4">
            2025년 11월 회의록
          </h1>
          <div className="h-1 w-32 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-400">
            주차별 회의록을 선택하세요
          </p>
        </div>

        {/* Week Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {weeks.map((week, index) => (
            <Link
              key={index}
              href={week.path}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-dark-light border-2 border-gray-600 hover:border-primary transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                {/* Status Badge */}
                {week.status === 'current' && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-primary text-dark px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Week Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-24 h-24 bg-gradient-to-br ${week.color} rounded-2xl flex items-center justify-center transform transition-transform group-hover:rotate-6`}>
                      <span className="text-white text-4xl font-bold">
                        W{week.week}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {week.title}
                    </h2>
                    <p className="text-primary text-sm">{week.date}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {week.description}
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <div className="mt-6 flex justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2">
                      <div className="flex items-center text-primary">
                        <span className="text-sm mr-2 font-semibold">보기</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            클릭하여 해당 주차의 발표 자료를 확인하세요
          </p>
        </div>
      </div>
    </div>
  );
}
