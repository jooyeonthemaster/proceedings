'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Part 1: 도입 (3 slides)
import AIArtPhilosophyTitleSlide from '@/components/january-week1/AIArtPhilosophyTitleSlide';
import WhyAIQuestionSlide from '@/components/january-week1/WhyAIQuestionSlide';
import TeamBrandingNeedSlide from '@/components/january-week1/TeamBrandingNeedSlide';

// Part 2: 팀랩, 디스트릭트, 이이남 철학 (5 slides)
import TeamLabPhilosophySlide from '@/components/january-week1/TeamLabPhilosophySlide';
import DstrictPhilosophySlide from '@/components/january-week1/DstrictPhilosophySlide';
import LeeLenamPhilosophySlide from '@/components/january-week1/LeeLenamPhilosophySlide';
import ThreeCommonPointsSlide from '@/components/january-week1/ThreeCommonPointsSlide';
import AINotDigitalArtSlide from '@/components/january-week1/AINotDigitalArtSlide';

// Part 3: AI 고유 특성 (5 slides)
import AIFeature1Slide from '@/components/january-week1/AIFeature1Slide';
import AIFeature2Slide from '@/components/january-week1/AIFeature2Slide';
import AIFeature3Slide from '@/components/january-week1/AIFeature3Slide';
import AIFeature4Slide from '@/components/january-week1/AIFeature4Slide';
import AIFeature5Slide from '@/components/january-week1/AIFeature5Slide';

// Part 4: 탐험가 정신과 영감 (7 slides)
import TooPhilosophicalSlide from '@/components/january-week1/TooPhilosophicalSlide';
import ExplorerAttitudeSlide from '@/components/january-week1/ExplorerAttitudeSlide';
import TarantinoStyleSlide from '@/components/january-week1/TarantinoStyleSlide';
import TarantinoManifestoSlide from '@/components/january-week1/TarantinoManifestoSlide';
import BaseSkillQuestionSlide from '@/components/january-week1/BaseSkillQuestionSlide';
import DuchampBanksySlide from '@/components/january-week1/DuchampBanksySlide';
import CrazyFirstInsightSlide from '@/components/january-week1/CrazyFirstInsightSlide';

// Part 5: 미친 아이디어 도출 (2 slides)
import CrazyIdeasSlide from '@/components/january-week1/CrazyIdeasSlide';
import AuthoritySwapSlide from '@/components/january-week1/AuthoritySwapSlide';

// Part 6: 예스맨 사례와 법적 검토 (4 slides)
import YesMenIntroSlide from '@/components/january-week1/YesMenIntroSlide';
import YesMenCasesSlide from '@/components/january-week1/YesMenCasesSlide';
import YesMenLegalSlide from '@/components/january-week1/YesMenLegalSlide';
import ArtImpact5WaysSlide from '@/components/january-week1/ArtImpact5WaysSlide';

// Part 7: AI교 컨셉 (9 slides)
import AIReligionConceptSlide from '@/components/january-week1/AIReligionConceptSlide';
import WhyThisTopicSlide from '@/components/january-week1/WhyThisTopicSlide';
import TruckFormSlide from '@/components/january-week1/TruckFormSlide';
import TermConversionSlide from '@/components/january-week1/TermConversionSlide';
import SecretNumbersSlide from '@/components/january-week1/SecretNumbersSlide';
import Experience90sec1Slide from '@/components/january-week1/Experience90sec1Slide';
import Experience90sec2Slide from '@/components/january-week1/Experience90sec2Slide';
import AIReligionLegalSlide from '@/components/january-week1/AIReligionLegalSlide';
import ArtisticManifestoSlide from '@/components/january-week1/ArtisticManifestoSlide';

// Part 8: 결론 (4 slides)
import ThinkingJourneySlide from '@/components/january-week1/ThinkingJourneySlide';
import KeyInsightsSlide from '@/components/january-week1/KeyInsightsSlide';
import AIArtRoadmapSlide from '@/components/january-week1/AIArtRoadmapSlide';
import OurIdentitySlide from '@/components/january-week1/OurIdentitySlide';

const slides = [
  // Part 1: 도입 (3)
  AIArtPhilosophyTitleSlide,
  WhyAIQuestionSlide,
  TeamBrandingNeedSlide,

  // Part 2: 팀랩, 디스트릭트, 이이남 철학 (5)
  TeamLabPhilosophySlide,
  DstrictPhilosophySlide,
  LeeLenamPhilosophySlide,
  ThreeCommonPointsSlide,
  AINotDigitalArtSlide,

  // Part 3: AI 고유 특성 (5)
  AIFeature1Slide,
  AIFeature2Slide,
  AIFeature3Slide,
  AIFeature4Slide,
  AIFeature5Slide,

  // Part 4: 탐험가 정신과 영감 (7)
  TooPhilosophicalSlide,
  ExplorerAttitudeSlide,
  TarantinoStyleSlide,
  TarantinoManifestoSlide,
  BaseSkillQuestionSlide,
  DuchampBanksySlide,
  CrazyFirstInsightSlide,

  // Part 5: 미친 아이디어 도출 (2)
  CrazyIdeasSlide,
  AuthoritySwapSlide,

  // Part 6: 예스맨 사례와 법적 검토 (4)
  YesMenIntroSlide,
  YesMenCasesSlide,
  YesMenLegalSlide,
  ArtImpact5WaysSlide,

  // Part 7: AI교 컨셉 (9)
  AIReligionConceptSlide,
  WhyThisTopicSlide,
  TruckFormSlide,
  TermConversionSlide,
  SecretNumbersSlide,
  Experience90sec1Slide,
  Experience90sec2Slide,
  AIReligionLegalSlide,
  ArtisticManifestoSlide,

  // Part 8: 결론 (4)
  ThinkingJourneySlide,
  KeyInsightsSlide,
  AIArtRoadmapSlide,
  OurIdentitySlide,
];

// Section definitions for navigation
const sections = [
  { name: '도입', startIndex: 0, endIndex: 2, color: 'from-cyan-500 to-blue-600' },
  { name: '철학 분석', startIndex: 3, endIndex: 7, color: 'from-purple-500 to-indigo-600' },
  { name: 'AI 특성', startIndex: 8, endIndex: 12, color: 'from-emerald-500 to-teal-600' },
  { name: '탐험가 정신', startIndex: 13, endIndex: 19, color: 'from-orange-500 to-red-600' },
  { name: '미친 아이디어', startIndex: 20, endIndex: 21, color: 'from-pink-500 to-rose-600' },
  { name: '예스맨 사례', startIndex: 22, endIndex: 25, color: 'from-amber-500 to-yellow-600' },
  { name: 'AI교 컨셉', startIndex: 26, endIndex: 34, color: 'from-violet-500 to-purple-600' },
  { name: '결론', startIndex: 35, endIndex: 38, color: 'from-blue-500 to-cyan-600' },
];

export default function JanuaryWeek1Page() {
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
            href="/january/week1"
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
            1월 1주차
          </Link>

          <div className="flex items-center space-x-4">
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
          <div className="flex justify-center mb-3 space-x-2">
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
