'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Part 1: COO 역할 - 사업계획서 현황 (7 slides)
import Week4TitleSlide from '@/components/january-week4/Week4TitleSlide';
import BusinessPlanSubmittedSlide from '@/components/january-week4/BusinessPlanSubmittedSlide';
import BusinessPlanPendingSlide from '@/components/january-week4/BusinessPlanPendingSlide';
import BusinessPlanRemainingSlide from '@/components/january-week4/BusinessPlanRemainingSlide';
import BusinessPlanTableSlide from '@/components/january-week4/BusinessPlanTableSlide';
import BusinessPlanCalculationSlide from '@/components/january-week4/BusinessPlanCalculationSlide';
import FebruaryBusySlide from '@/components/january-week4/FebruaryBusySlide';

// Part 2: CTO 역할 - 개발 현황 (4 slides)
import CTOTitleSlide from '@/components/january-week4/CTOTitleSlide';
import PpudiV2StatusSlide from '@/components/january-week4/PpudiV2StatusSlide';
import PpudiV3PlanSlide from '@/components/january-week4/PpudiV3PlanSlide';
import PGPlanSlide from '@/components/january-week4/PGPlanSlide';

// Part 3: 김제연 프리랜서 성장 보고 (5 slides)
import JeyeonTitleSlide from '@/components/january-week4/JeyeonTitleSlide';
import JeyeonConcernsSlide from '@/components/january-week4/JeyeonConcernsSlide';
import JeyeonRealitySlide from '@/components/january-week4/JeyeonRealitySlide';
import JeyeonLearningSlide from '@/components/january-week4/JeyeonLearningSlide';
import ConclusionSlide from '@/components/january-week4/ConclusionSlide';

const slides = [
  // Part 1: COO 역할 - 사업계획서 현황 (7)
  Week4TitleSlide,
  BusinessPlanSubmittedSlide,
  BusinessPlanPendingSlide,
  BusinessPlanRemainingSlide,
  BusinessPlanTableSlide,
  BusinessPlanCalculationSlide,
  FebruaryBusySlide,

  // Part 2: CTO 역할 - 개발 현황 (4)
  CTOTitleSlide,
  PpudiV2StatusSlide,
  PpudiV3PlanSlide,
  PGPlanSlide,

  // Part 3: 김제연 프리랜서 성장 보고 (5)
  JeyeonTitleSlide,
  JeyeonConcernsSlide,
  JeyeonRealitySlide,
  JeyeonLearningSlide,
  ConclusionSlide,
];

const sections = [
  { name: '개요', startIndex: 0, endIndex: 0, color: 'from-blue-500 to-purple-600' },
  { name: '제출 현황', startIndex: 1, endIndex: 2, color: 'from-emerald-500 to-teal-600' },
  { name: '남은 사업', startIndex: 3, endIndex: 5, color: 'from-orange-500 to-red-600' },
  { name: '2월 일정', startIndex: 6, endIndex: 6, color: 'from-red-500 to-pink-600' },
  { name: 'CTO 개발', startIndex: 7, endIndex: 10, color: 'from-cyan-500 to-blue-600' },
  { name: '김제연', startIndex: 11, endIndex: 14, color: 'from-purple-500 to-pink-600' },
  { name: '결론', startIndex: 15, endIndex: 15, color: 'from-primary to-emerald-500' },
];

export default function JanuaryWeek4Page() {
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
    <div className="min-h-screen bg-dark overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/january"
            className="flex items-center text-primary hover:text-white transition-colors"
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
            1월 목록
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-gray-500 text-sm">1월 4주차</span>
            {currentSection && (
              <div
                className={`px-3 py-1 rounded-full bg-gradient-to-r ${currentSection.color} text-white text-sm font-medium`}
              >
                {currentSection.name}
              </div>
            )}
            <span className="text-gray-400">
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
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-t border-gray-800">
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
                    ? `bg-gradient-to-r ${section.color} text-white`
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
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
                      ? `w-6 bg-gradient-to-r ${section?.color || 'from-primary to-primary'}`
                      : 'bg-gray-600 hover:bg-gray-500'
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
              className="px-6 py-2 bg-gray-800 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors flex items-center"
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
              className="px-6 py-2 bg-primary rounded-lg text-dark font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/80 transition-colors flex items-center"
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
