'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import TitleSlide from '@/components/april-week2/TitleSlide';
import MeetingContextSlide from '@/components/april-week2/MeetingContextSlide';
import CompanyOverviewSlide from '@/components/april-week2/CompanyOverviewSlide';
import ExecutiveTeamSlide from '@/components/april-week2/ExecutiveTeamSlide';
import StaffTeamSlide from '@/components/april-week2/StaffTeamSlide';
import FinancialStatusSlide from '@/components/april-week2/FinancialStatusSlide';
import RevenueStructureSlide from '@/components/april-week2/RevenueStructureSlide';
import ClassroomProductSlide from '@/components/april-week2/ClassroomProductSlide';
import ClassroomMarketSlide from '@/components/april-week2/ClassroomMarketSlide';
import ClassroomExpansionSlide from '@/components/april-week2/ClassroomExpansionSlide';
import ClassroomRiskSlide from '@/components/april-week2/ClassroomRiskSlide';
import ClassroomSalesSlide from '@/components/april-week2/ClassroomSalesSlide';
import RevenueQualitySlide from '@/components/april-week2/RevenueQualitySlide';
import PhotoboothOverviewSlide from '@/components/april-week2/PhotoboothOverviewSlide';
import PhotoboothMeetingPrepSlide from '@/components/april-week2/PhotoboothMeetingPrepSlide';
import PhotoboothDevQuestionsSlide from '@/components/april-week2/PhotoboothDevQuestionsSlide';
import PhotoboothMktOpsSlide from '@/components/april-week2/PhotoboothMktOpsSlide';
import PhotoboothSalesStrategySlide from '@/components/april-week2/PhotoboothSalesStrategySlide';
import OutsourcingSlide from '@/components/april-week2/OutsourcingSlide';
import AccentSlide from '@/components/april-week2/AccentSlide';
import MarketingResourceSlide from '@/components/april-week2/MarketingResourceSlide';
import ScenarioASlide from '@/components/april-week2/ScenarioASlide';
import ScenarioBSlide from '@/components/april-week2/ScenarioBSlide';
import ScenarioCSlide from '@/components/april-week2/ScenarioCSlide';
import ScenarioDSlide from '@/components/april-week2/ScenarioDSlide';
import ScenarioCompareSlide from '@/components/april-week2/ScenarioCompareSlide';
import ScenarioCalculatorSlide from '@/components/april-week2/ScenarioCalculatorSlide';
import Phase1AllocSlide from '@/components/april-week2/Phase1AllocSlide';
import Phase2AAllocSlide from '@/components/april-week2/Phase2AAllocSlide';
import Phase2BAllocSlide from '@/components/april-week2/Phase2BAllocSlide';
import TuesdayMeetingSlide from '@/components/april-week2/TuesdayMeetingSlide';
import RoadmapSlide from '@/components/april-week2/RoadmapSlide';
import FinalSummarySlide from '@/components/april-week2/FinalSummarySlide';

const slides = [
  TitleSlide,                    // 0
  MeetingContextSlide,           // 1
  CompanyOverviewSlide,          // 2
  ExecutiveTeamSlide,            // 3
  StaffTeamSlide,                // 4
  FinancialStatusSlide,          // 5
  RevenueStructureSlide,         // 6
  ClassroomProductSlide,         // 7
  ClassroomMarketSlide,          // 8
  ClassroomExpansionSlide,       // 9
  ClassroomRiskSlide,            // 10
  RevenueQualitySlide,           // 11
  ClassroomSalesSlide,           // 12
  PhotoboothOverviewSlide,       // 13
  PhotoboothMeetingPrepSlide,    // 14
  PhotoboothDevQuestionsSlide,   // 15
  PhotoboothMktOpsSlide,         // 16
  PhotoboothSalesStrategySlide,  // 17
  OutsourcingSlide,              // 18
  AccentSlide,                   // 19
  MarketingResourceSlide,        // 20
  ScenarioASlide,                // 21
  ScenarioBSlide,                // 22
  ScenarioCSlide,                // 23
  ScenarioDSlide,                // 24
  ScenarioCompareSlide,          // 25
  ScenarioCalculatorSlide,       // 26
  Phase1AllocSlide,              // 27
  Phase2AAllocSlide,             // 28
  Phase2BAllocSlide,             // 29
  TuesdayMeetingSlide,           // 30
  RoadmapSlide,                  // 31
  FinalSummarySlide,             // 32
];

const sections = [
  { name: '오프닝', startIndex: 0, endIndex: 1, color: 'from-indigo-700 to-slate-800' },
  { name: '회사 현황', startIndex: 2, endIndex: 6, color: 'from-slate-700 to-blue-900' },
  { name: '학원 AI', startIndex: 7, endIndex: 12, color: 'from-emerald-700 to-cyan-900' },
  { name: '포토부스', startIndex: 13, endIndex: 17, color: 'from-violet-700 to-fuchsia-900' },
  { name: '외주·악센트·마케팅', startIndex: 18, endIndex: 20, color: 'from-amber-700 to-rose-900' },
  { name: '시나리오 A-D', startIndex: 21, endIndex: 26, color: 'from-slate-600 to-slate-800' },
  { name: '인력 배치', startIndex: 27, endIndex: 29, color: 'from-zinc-700 to-slate-800' },
  { name: '회의전략·로드맵', startIndex: 30, endIndex: 31, color: 'from-rose-700 to-cyan-900' },
  { name: '최종 요약', startIndex: 32, endIndex: 32, color: 'from-indigo-700 to-slate-800' },
];

export default function AprilWeek2Page() {
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
            <span className="text-slate-600 text-sm">4월 2주차 · 전략회의</span>
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

      {/* Main Slide Area */}
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

      {/* Navigation Controls */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Section indicators */}
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

          {/* Slide dots */}
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

          {/* Navigation buttons */}
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
