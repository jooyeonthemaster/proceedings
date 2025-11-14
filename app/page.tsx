'use client';

import Link from 'next/link';

export default function Home() {
  const months = [
    {
      name: '11월',
      path: '/november',
      year: '2025',
      color: 'from-lime-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-6xl font-bold text-white mb-4">
            개발팀 회의록 아카이브
          </h1>
          <div className="h-1 w-48 bg-primary mx-auto mb-6"></div>
          <p className="text-2xl text-gray-300">
            주식회사 네안데르
          </p>
          <p className="text-lg text-gray-400 mt-2">
            월별 회의록을 선택하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {months.map((month, index) => (
            <Link
              key={index}
              href={month.path}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-dark-light border-2 border-gray-600 hover:border-primary transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                {/* Folder Icon */}
                <div className="p-12 flex flex-col items-center justify-center space-y-6">
                  {/* SVG Folder Icon */}
                  <div className={`relative w-32 h-32 bg-gradient-to-br ${month.color} rounded-lg transform transition-transform group-hover:rotate-3`}>
                    <div className="absolute -top-3 left-4 w-16 h-6 bg-gradient-to-r from-lime-400 to-green-500 rounded-t-lg"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-white opacity-60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Month Name */}
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
                      {month.name}
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">{month.year}</p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center text-primary">
                      <span className="text-sm mr-2">열기</span>
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

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            키보드 화살표 또는 클릭으로 이동 가능합니다
          </p>
        </div>
      </div>
    </div>
  );
}
