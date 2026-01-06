'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function JanuaryWeek1Page() {
  const topics = [
    {
      title: 'AI 예술 브랜딩 전략',
      subtitle: '사고의 여정',
      description: '팀랩, 디스트릭트, 이이남 철학 분석부터 AI교 컨셉까지',
      path: '/january/week1/ai-art',
      icon: '🎨',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-500/10 to-indigo-500/10',
      borderColor: 'border-purple-500/30',
      slides: 39,
      tags: ['철학', 'AI교', '예술', '브랜딩']
    },
    {
      title: '개발팀 진행상황',
      subtitle: '프로젝트 & 정산',
      description: '잡플래닛, 안산 프로젝트 정산 및 뿌덕 V2 개발 현황',
      path: '/january/week1/dev-progress',
      icon: '💻',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'border-emerald-500/30',
      slides: 6,
      tags: ['정산', '디지털화환', '뿌덕V2', '인력']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link
            href="/january"
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
            1월 회의록
          </Link>

          <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-500/50 rounded-full px-6 py-2 mb-6">
            <span className="text-cyan-400 font-medium">2026년 1월 4일</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-4">
            1월 1주차 회의록
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400">
            발표 주제를 선택하세요
          </p>
        </motion.div>

        {/* Topic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link href={topic.path} className="block group">
                <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${topic.bgColor} border-2 ${topic.borderColor} hover:border-primary transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10`}>
                  {/* Slide Count Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`bg-gradient-to-r ${topic.color} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                      {topic.slides} slides
                    </span>
                  </div>

                  <div className="p-8">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`w-24 h-24 bg-gradient-to-br ${topic.color} rounded-2xl flex items-center justify-center transform transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                        <span className="text-5xl">{topic.icon}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-3">
                      <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {topic.title}
                      </h2>
                      <p className={`text-sm font-medium bg-gradient-to-r ${topic.color} bg-clip-text text-transparent`}>
                        {topic.subtitle}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {topic.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap justify-center gap-2 pt-2">
                        {topic.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-dark/50 text-gray-400 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow Button */}
                    <div className="mt-6 flex justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2">
                        <div className="flex items-center text-primary">
                          <span className="text-sm mr-2 font-semibold">시작하기</span>
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
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            키보드 화살표 또는 클릭으로 슬라이드 이동 가능
          </p>
        </motion.div>
      </div>
    </div>
  );
}
