'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import TitleSlide from '@/components/april-week4/TitleSlide';
import AgendaSlide from '@/components/april-week4/AgendaSlide';
import ProgressCheckIntroSlide from '@/components/april-week4/ProgressCheckIntroSlide';
import CEOProgressCheckSlide from '@/components/april-week4/CEOProgressCheckSlide';
import CMOProgressCheckSlide from '@/components/april-week4/CMOProgressCheckSlide';
import DongjuProgressCheckSlide from '@/components/april-week4/DongjuProgressCheckSlide';
import CTOProgressCheckSlide from '@/components/april-week4/CTOProgressCheckSlide';
import DevTeamItalySlide from '@/components/april-week4/DevTeamItalySlide';
import ExtractFlowSlide from '@/components/april-week4/ExtractFlowSlide';
import DevFeedbackRequestSlide from '@/components/april-week4/DevFeedbackRequestSlide';
import GrantSelectedSlide from '@/components/april-week4/GrantSelectedSlide';
import GrantPresentationSlide from '@/components/april-week4/GrantPresentationSlide';
import GrantSolutionConceptSlide from '@/components/april-week4/GrantSolutionConceptSlide';
import GrantTeamStrategySlide from '@/components/april-week4/GrantTeamStrategySlide';
import KimKihongNegotiationSlide from '@/components/april-week4/KimKihongNegotiationSlide';
import MarketerCourseFinanceSlide from '@/components/april-week4/MarketerCourseFinanceSlide';
import MarketerCourseTimelineSlide from '@/components/april-week4/MarketerCourseTimelineSlide';
import DecisionsSlide from '@/components/april-week4/DecisionsSlide';
import NextActionsSlide from '@/components/april-week4/NextActionsSlide';
import FinalSummarySlide from '@/components/april-week4/FinalSummarySlide';

const slides = [
  TitleSlide,                      // 0
  AgendaSlide,                     // 1
  ProgressCheckIntroSlide,         // 2
  CEOProgressCheckSlide,           // 3
  CMOProgressCheckSlide,           // 4
  DongjuProgressCheckSlide,        // 5
  CTOProgressCheckSlide,           // 6
  DevTeamItalySlide,               // 7
  ExtractFlowSlide,                // 8
  DevFeedbackRequestSlide,         // 9
  GrantSelectedSlide,              // 10
  GrantPresentationSlide,          // 11
  GrantSolutionConceptSlide,       // 12
  GrantTeamStrategySlide,          // 13
  KimKihongNegotiationSlide,       // 14
  MarketerCourseFinanceSlide,      // 15
  MarketerCourseTimelineSlide,     // 16
  DecisionsSlide,                  // 17
  NextActionsSlide,                // 18
  FinalSummarySlide,               // 19
];

const sections = [
  { name: '오프닝', startIndex: 0, endIndex: 1, color: 'from-violet-700 to-slate-800' },
  { name: '진행상황 점검', startIndex: 2, endIndex: 6, color: 'from-amber-700 to-rose-900' },
  { name: '개발 데모', startIndex: 7, endIndex: 9, color: 'from-cyan-700 to-indigo-900' },
  { name: '언론재단 지원사업', startIndex: 10, endIndex: 13, color: 'from-emerald-700 to-teal-900' },
  { name: '김기홍 강의', startIndex: 14, endIndex: 16, color: 'from-fuchsia-700 to-violet-900' },
  { name: '결정 & 마무리', startIndex: 17, endIndex: 19, color: 'from-violet-700 to-slate-800' },
];

export default function AprilWeek4Page() {
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/april"
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
            4월 목록
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-slate-600 text-sm">4월 4주차 · 4/20 임원진 회의</span>
            {currentSection && (
              <div
                className={`px-3 py-1 rounded-full bg-gradient-to-r ${currentSection.color} text-slate-100 text-sm font-medium`}
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

      <main className="pt-16 pb-28 min-h-screen flex items-center justify-center">
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

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-center mb-2 space-x-2 flex-wrap gap-y-1">
            {sections.map((section, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(section.startIndex)}
                className={`px-2.5 py-1 rounded text-xs transition-all ${
                  currentSlide >= section.startIndex &&
                  currentSlide <= section.endIndex
                    ? `bg-gradient-to-r ${section.color} text-slate-100 font-medium`
                    : 'bg-slate-800/50 text-slate-500 hover:bg-slate-800'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-1 mb-2 max-w-5xl mx-auto overflow-x-auto py-1">
            {slides.map((_, index) => {
              const section = sections.find(
                (s) => index >= s.startIndex && index <= s.endIndex
              );
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all flex-shrink-0 ${
                    index === currentSlide
                      ? `w-6 bg-gradient-to-r ${section?.color || 'from-slate-500 to-slate-500'}`
                      : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                />
              );
            })}
          </div>

          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={goToPrevSlide}
              disabled={currentSlide === 0}
              className="px-5 py-1.5 bg-slate-800/60 rounded-lg text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors flex items-center text-sm"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              이전
            </button>

            <button
              onClick={goToNextSlide}
              disabled={currentSlide === slides.length - 1}
              className="px-5 py-1.5 bg-slate-700/60 rounded-lg text-slate-200 font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors flex items-center text-sm"
            >
              다음
              <svg
                className="w-4 h-4 ml-2"
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
