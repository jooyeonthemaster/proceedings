'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import TitleSlide from '@/components/march-week4-exec/TitleSlide';
import GrantFailSlide from '@/components/march-week4-exec/GrantFailSlide';
import ComparisonSlide from '@/components/march-week4-exec/ComparisonSlide';
import PlanSlide from '@/components/march-week4-exec/PlanSlide';
import DevUpdateSlide from '@/components/march-week4-exec/DevUpdateSlide';
import ConclusionSlide from '@/components/march-week4-exec/ConclusionSlide';

const slides = [
  TitleSlide,
  GrantFailSlide,
  ComparisonSlide,
  PlanSlide,
  DevUpdateSlide,
  ConclusionSlide,
];

const sections = [
  { name: '개요', startIndex: 0, endIndex: 0, color: 'from-slate-600 to-slate-700' },
  { name: '탈락 현황', startIndex: 1, endIndex: 1, color: 'from-red-800 to-red-900' },
  { name: '연도 비교', startIndex: 2, endIndex: 2, color: 'from-slate-600 to-red-900' },
  { name: '앞으로', startIndex: 3, endIndex: 3, color: 'from-amber-800 to-amber-900' },
  { name: '개발', startIndex: 4, endIndex: 4, color: 'from-blue-800 to-blue-900' },
  { name: '결론', startIndex: 5, endIndex: 5, color: 'from-slate-600 to-slate-700' },
];

export default function MarchWeek4ExecPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const getCurrentSection = () => {
    return sections.find(
      (section) =>
        currentSlide >= section.startIndex && currentSlide <= section.endIndex
    );
  };

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];
  const currentSection = getCurrentSection();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-gray-950 overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/march"
            className="flex items-center text-slate-500 hover:text-slate-300 transition-colors"
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
            3월 목록
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-slate-600 text-sm">3월 4주차</span>
            {currentSection && (
              <div
                className={`px-3 py-1 rounded-full bg-gradient-to-r ${currentSection.color} text-slate-300 text-sm font-medium`}
              >
                {currentSection.name}
              </div>
            )}
            <span className="text-slate-600">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
        </div>
      </header>

      {/* Main Slide Area */}
      <main className="pt-16 pb-24 min-h-screen flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Section indicators */}
          <div className="flex justify-center mb-3 space-x-2 flex-wrap gap-y-2">
            {sections.map((section, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(section.startIndex)}
                className={`px-2 py-1 rounded text-xs transition-all ${
                  currentSlide >= section.startIndex &&
                  currentSlide <= section.endIndex
                    ? `bg-gradient-to-r ${section.color} text-slate-200`
                    : 'bg-slate-800/50 text-slate-600 hover:bg-slate-800'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Slide dots */}
          <div className="flex justify-center items-center space-x-1 mb-3 max-w-4xl mx-auto overflow-x-auto py-1">
            {slides.map((_, index) => {
              const section = sections.find(
                (s) => index >= s.startIndex && index <= s.endIndex
              );
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all flex-shrink-0 ${
                    index === currentSlide
                      ? `w-6 bg-gradient-to-r ${section?.color || 'from-slate-600 to-slate-600'}`
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                />
              );
            })}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={goToPrevSlide}
              disabled={currentSlide === 0}
              className="px-6 py-2 bg-slate-800/60 rounded-lg text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors flex items-center"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              이전
            </button>

            <button
              onClick={goToNextSlide}
              disabled={currentSlide === slides.length - 1}
              className="px-6 py-2 bg-slate-700/60 rounded-lg text-slate-300 font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors flex items-center"
            >
              다음
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
