'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TitleSlide from '@/components/TitleSlide';
import KPISlide from '@/components/KPISlide';
import AIClassroomSlide from '@/components/AIClassroomSlide';
import AICaseSlide from '@/components/AICaseSlide';
import PhotoboothSlide from '@/components/PhotoboothSlide';
import DesignDiscussionSlide from '@/components/DesignDiscussionSlide';

export default function Week2Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  const slides = [
    <TitleSlide key={0} />,
    <KPISlide key={1} />,
    <AIClassroomSlide key={2} />,
    <AICaseSlide key={3} />,
    <PhotoboothSlide key={4} />,
    <DesignDiscussionSlide key={5} />
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
