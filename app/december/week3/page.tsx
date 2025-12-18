'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TitleSlide from '@/components/december-week3/TitleSlide';
import GovSupportSlide from '@/components/december-week3/GovSupportSlide';
import AIRevolutionSlide from '@/components/december-week3/AIRevolutionSlide';
import DevExplosionSlide from '@/components/december-week3/DevExplosionSlide';
import VerificationYearSlide from '@/components/december-week3/VerificationYearSlide';
import FruitfulYearSlide from '@/components/december-week3/FruitfulYearSlide';
import AIEraContentSlide from '@/components/december-week3/AIEraContentSlide';
import NeanderLabSlide from '@/components/december-week3/NeanderLabSlide';
import VSAIContentSlide from '@/components/december-week3/VSAIContentSlide';
import KpopAIContentSlide from '@/components/december-week3/KpopAIContentSlide';
import YouTuberAISlide from '@/components/december-week3/YouTuberAISlide';
import PersonalGoalsSlide from '@/components/december-week3/PersonalGoalsSlide';
import ClosingSlide from '@/components/december-week3/ClosingSlide';

export default function DecemberWeek3Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 13;

  const slides = [
    <TitleSlide key={0} />,
    <GovSupportSlide key={1} />,
    <AIRevolutionSlide key={2} />,
    <DevExplosionSlide key={3} />,
    <VerificationYearSlide key={4} />,
    <FruitfulYearSlide key={5} />,
    <AIEraContentSlide key={6} />,
    <NeanderLabSlide key={7} />,
    <VSAIContentSlide key={8} />,
    <KpopAIContentSlide key={9} />,
    <YouTuberAISlide key={10} />,
    <PersonalGoalsSlide key={11} />,
    <ClosingSlide key={12} />
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
        window.location.href = '/december';
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

  return (
    <div className="relative w-full h-screen overflow-hidden bg-dark">
      {/* Back Button */}
      <Link
        href="/december"
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

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 z-50 bg-dark-light bg-opacity-80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-600">
        <span className="text-gray-400 text-sm font-mono">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>

      {/* Section Indicator */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-dark-light bg-opacity-80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-600">
        <span className={`text-sm font-semibold ${
          currentSlide <= 4 ? 'text-amber-400' : 'text-primary'
        }`}>
          {currentSlide <= 4 ? '📅 2025 회고' : '🚀 2026 비전'}
        </span>
      </div>

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

      {/* Navigation Dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? index <= 4 ? 'bg-amber-400 scale-125' : 'bg-primary scale-125'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-dark-light bg-opacity-50 rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:bg-opacity-80 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-dark-light bg-opacity-50 rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:bg-opacity-80 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
