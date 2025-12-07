'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TitleSlide from '@/components/december-week1/TitleSlide';
import KPIUpdateSlide from '@/components/december-week1/KPIUpdateSlide';
import DevStatusSlide from '@/components/december-week1/DevStatusSlide';
import DecemberPlanSlide from '@/components/december-week1/DecemberPlanSlide';
import NewProjectsSlide from '@/components/december-week1/NewProjectsSlide';
import AIInvestmentSlide from '@/components/december-week1/AIInvestmentSlide';

export default function DecemberWeek1Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  const slides = [
    <TitleSlide key={0} />,
    <KPIUpdateSlide key={1} />,
    <DevStatusSlide key={2} />,
    <DecemberPlanSlide key={3} />,
    <NewProjectsSlide key={4} />,
    <AIInvestmentSlide key={5} />
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
                ? 'bg-primary scale-125'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
