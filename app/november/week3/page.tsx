'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TitleSlideWeek3 from '@/components/week3/TitleSlideWeek3';
import KPISlideWeek3 from '@/components/week3/KPISlideWeek3';
import AIClassroomSeason2Slide from '@/components/week3/AIClassroomSeason2Slide';
import KimAIClassIntroSlide from '@/components/week3/KimAIClassIntroSlide';
import DevJourney1Slide from '@/components/week3/DevJourney1Slide';
import DevJourney2Slide from '@/components/week3/DevJourney2Slide';
import SupportBusinessSlide from '@/components/week3/SupportBusinessSlide';
import DevJourney3Slide from '@/components/week3/DevJourney3Slide';
import AIImageComparisonSlide from '@/components/week3/AIImageComparisonSlide';
import AIMarketEvolutionSlide from '@/components/week3/AIMarketEvolutionSlide';
import FutureVisionSlide from '@/components/week3/FutureVisionSlide';
import CashCowConceptSlide from '@/components/week3/CashCowConceptSlide';
import CurrentBusinessAnalysisSlide from '@/components/week3/CurrentBusinessAnalysisSlide';
import PhotoboothBusinessSlide from '@/components/week3/PhotoboothBusinessSlide';
import ThreeDPrintingVisionSlide from '@/components/week3/ThreeDPrintingVisionSlide';

export default function Week3Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 15;

  const slides = [
    <TitleSlideWeek3 key={0} />,
    <KPISlideWeek3 key={1} />,
    <AIClassroomSeason2Slide key={2} />,
    <KimAIClassIntroSlide key={3} />,
    <DevJourney1Slide key={4} />,
    <DevJourney2Slide key={5} />,
    <SupportBusinessSlide key={6} />,
    <DevJourney3Slide key={7} />,
    <AIImageComparisonSlide key={8} />,
    <AIMarketEvolutionSlide key={9} />,
    <FutureVisionSlide key={10} />,
    <CashCowConceptSlide key={11} />,
    <CurrentBusinessAnalysisSlide key={12} />,
    <PhotoboothBusinessSlide key={13} />,
    <ThreeDPrintingVisionSlide key={14} />
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        // ESC 키로 뒤로 가기
        window.location.href = '/november';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-dark">
      {/* Back Button */}
      <Link
        href="/november"
        className="fixed top-8 left-8 z-50 bg-dark-light bg-opacity-80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-600 hover:border-primary transition-colors group"
      >
        <div className="flex items-center text-gray-400 group-hover:text-primary">
          <svg
            className="w-4 h-4 mr-2"
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
          <span className="text-sm">뒤로</span>
        </div>
      </Link>

      {/* Slides */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full">
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-dark-light bg-opacity-80 backdrop-blur-sm px-6 py-3 rounded-full flex items-center space-x-4 border border-gray-600">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`text-2xl ${
              currentSlide === 0
                ? 'text-gray-600 cursor-not-allowed'
                : 'text-primary hover:text-white transition-colors'
            }`}
            aria-label="Previous slide"
          >
            ←
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-primary w-8'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`text-2xl ${
              currentSlide === totalSlides - 1
                ? 'text-gray-600 cursor-not-allowed'
                : 'text-primary hover:text-white transition-colors'
            }`}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 z-50">
        <div className="bg-dark-light bg-opacity-80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-600">
          <span className="text-primary font-bold">{currentSlide + 1}</span>
          <span className="text-gray-400"> / {totalSlides}</span>
        </div>
      </div>

      {/* Instructions */}
      <div className="fixed bottom-8 left-8 z-50">
        <div className="bg-dark-light bg-opacity-80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-600">
          <p className="text-xs text-gray-400">
            방향키/스페이스바: 이동 | ESC: 뒤로가기
          </p>
        </div>
      </div>
    </div>
  );
}
