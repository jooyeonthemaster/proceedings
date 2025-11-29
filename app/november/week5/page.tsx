'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TitleSlideWeek5 from '@/components/week5/TitleSlideWeek5';
import AIComparisonSlide from '@/components/week5/AIComparisonSlide';
import HiggsfieldSlide from '@/components/week5/HiggsfieldSlide';
import AIMindsetSlide from '@/components/week5/AIMindsetSlide';
import NovKPIStatusSlide from '@/components/week5/NovKPIStatusSlide';
import ProjectStatusDetailSlide from '@/components/week5/ProjectStatusDetailSlide';
import PhotoBoothCrisisSlide from '@/components/week5/PhotoBoothCrisisSlide';

export default function Week5Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;

  const slides = [
    <TitleSlideWeek5 key={0} />,
    <AIComparisonSlide key={1} />,
    <HiggsfieldSlide key={2} />,
    <AIMindsetSlide key={3} />,
    <NovKPIStatusSlide key={4} />,
    <ProjectStatusDetailSlide key={5} />,
    <PhotoBoothCrisisSlide key={6} />
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
    </div>
  );
}

