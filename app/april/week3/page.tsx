'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import TitleSlide from '@/components/april-week3/TitleSlide';
import MeetingContextSlide from '@/components/april-week3/MeetingContextSlide';
import DiffFrom413Slide from '@/components/april-week3/DiffFrom413Slide';
import CoreQuestionSlide from '@/components/april-week3/CoreQuestionSlide';
import AprilFiveDeliverablesSlide from '@/components/april-week3/AprilFiveDeliverablesSlide';
import AprilToMayBridgeSlide from '@/components/april-week3/AprilToMayBridgeSlide';
import FailureScenarioSlide from '@/components/april-week3/FailureScenarioSlide';
import CollaborationPrinciplesSlide from '@/components/april-week3/CollaborationPrinciplesSlide';
import NeedsMeasurementSlide from '@/components/april-week3/NeedsMeasurementSlide';
import ServiceNameABSlide from '@/components/april-week3/ServiceNameABSlide';
import PricingMatrixSlide from '@/components/april-week3/PricingMatrixSlide';
import FeatureFunnelSlide from '@/components/april-week3/FeatureFunnelSlide';
import UserFlow7ClicksSlide from '@/components/april-week3/UserFlow7ClicksSlide';
import CTOPersonCardSlide from '@/components/april-week3/CTOPersonCardSlide';
import LandingStructureSlide from '@/components/april-week3/LandingStructureSlide';
import ResponseFieldsSlide from '@/components/april-week3/ResponseFieldsSlide';
import TechStackSlide from '@/components/april-week3/TechStackSlide';
import CTOTodoApril15Slide from '@/components/april-week3/CTOTodoApril15Slide';
import ItalyRemoteRoutineSlide from '@/components/april-week3/ItalyRemoteRoutineSlide';
import CMOPersonCardSlide from '@/components/april-week3/CMOPersonCardSlide';
import ParallelGanttSlide from '@/components/april-week3/ParallelGanttSlide';
import Content1MarketResearchSlide from '@/components/april-week3/Content1MarketResearchSlide';
import Content2PreorderSlide from '@/components/april-week3/Content2PreorderSlide';
import AdFunnelSlide from '@/components/april-week3/AdFunnelSlide';
import CEOPersonCardSlide from '@/components/april-week3/CEOPersonCardSlide';
import SalesLoopSlide from '@/components/april-week3/SalesLoopSlide';
import DongjuEndlessQASlide from '@/components/april-week3/DongjuEndlessQASlide';
import DailyQACycleSlide from '@/components/april-week3/DailyQACycleSlide';
import CriticalEscalationSlide from '@/components/april-week3/CriticalEscalationSlide';
import QADashboardSlide from '@/components/april-week3/QADashboardSlide';
import MayLaunchSlide from '@/components/april-week3/MayLaunchSlide';
import MayWeeklyPlanSlide from '@/components/april-week3/MayWeeklyPlanSlide';
import MayRisksSlide from '@/components/april-week3/MayRisksSlide';
import DataFlowSlide from '@/components/april-week3/DataFlowSlide';
import WeeklyRhythmSlide from '@/components/april-week3/WeeklyRhythmSlide';
import Decisions6Slide from '@/components/april-week3/Decisions6Slide';
import ChecklistD1Slide from '@/components/april-week3/ChecklistD1Slide';
import FinalTimelineSlide from '@/components/april-week3/FinalTimelineSlide';
import NextStepsSlide from '@/components/april-week3/NextStepsSlide';
import FinalSummarySlide from '@/components/april-week3/FinalSummarySlide';

const slides = [
  TitleSlide,                      // 0
  MeetingContextSlide,             // 1
  DiffFrom413Slide,                // 2
  CoreQuestionSlide,               // 3
  AprilFiveDeliverablesSlide,      // 4
  AprilToMayBridgeSlide,           // 5
  FailureScenarioSlide,            // 6
  CollaborationPrinciplesSlide,    // 7
  NeedsMeasurementSlide,           // 8
  ServiceNameABSlide,              // 9
  PricingMatrixSlide,              // 10
  FeatureFunnelSlide,              // 11
  UserFlow7ClicksSlide,            // 12
  CTOPersonCardSlide,              // 13
  LandingStructureSlide,           // 14
  ResponseFieldsSlide,             // 15
  TechStackSlide,                  // 16
  CTOTodoApril15Slide,             // 17
  ItalyRemoteRoutineSlide,         // 18
  CMOPersonCardSlide,              // 19
  ParallelGanttSlide,              // 20
  Content1MarketResearchSlide,     // 21
  Content2PreorderSlide,           // 22
  AdFunnelSlide,                   // 23
  CEOPersonCardSlide,              // 24
  SalesLoopSlide,                  // 25
  DongjuEndlessQASlide,            // 26
  DailyQACycleSlide,               // 27
  CriticalEscalationSlide,         // 28
  QADashboardSlide,                // 29
  MayLaunchSlide,                  // 30
  MayWeeklyPlanSlide,              // 31
  MayRisksSlide,                   // 32
  DataFlowSlide,                   // 33
  WeeklyRhythmSlide,               // 34
  Decisions6Slide,                 // 35
  ChecklistD1Slide,                // 36
  FinalTimelineSlide,              // 37
  NextStepsSlide,                  // 38
  FinalSummarySlide,               // 39
];

const sections = [
  { name: '오프닝', startIndex: 0, endIndex: 2, color: 'from-indigo-700 to-slate-800' },
  { name: 'WHY', startIndex: 3, endIndex: 7, color: 'from-rose-700 to-slate-800' },
  { name: '4월 5대 확정물', startIndex: 8, endIndex: 12, color: 'from-amber-700 to-rose-900' },
  { name: '김주연 CTO', startIndex: 13, endIndex: 18, color: 'from-cyan-700 to-indigo-900' },
  { name: '유선화 CMO', startIndex: 19, endIndex: 23, color: 'from-fuchsia-700 to-violet-900' },
  { name: '유재영 CEO', startIndex: 24, endIndex: 25, color: 'from-emerald-700 to-cyan-900' },
  { name: '이동주 엔드리스 QA', startIndex: 26, endIndex: 29, color: 'from-blue-700 to-indigo-900' },
  { name: '5월 스케일업', startIndex: 30, endIndex: 32, color: 'from-amber-700 to-rose-900' },
  { name: '협업 리듬', startIndex: 33, endIndex: 34, color: 'from-slate-700 to-slate-900' },
  { name: '결정 & 체크', startIndex: 35, endIndex: 39, color: 'from-indigo-700 to-slate-800' },
];

export default function AprilWeek3Page() {
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
            <span className="text-slate-600 text-sm">4월 3주차 · 긴급 업데이트 회의</span>
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
