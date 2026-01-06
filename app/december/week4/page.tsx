'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TitleSlide from '@/components/december-week4/TitleSlide';
import DirectionSlide from '@/components/december-week4/DirectionSlide';
import TeamFoundersSlide from '@/components/december-week4/TeamFoundersSlide';
import TeamMembersSlide from '@/components/december-week4/TeamMembersSlide';
import BusinessOverviewSlide from '@/components/december-week4/BusinessOverviewSlide';
import NeanderLabIntroSlide from '@/components/december-week4/NeanderLabIntroSlide';
import RoleModelSlide from '@/components/december-week4/RoleModelSlide';
import CreativeGroupSlide from '@/components/december-week4/CreativeGroupSlide';
import YouTubeStrategySlide from '@/components/december-week4/YouTubeStrategySlide';
import StreetConceptSlide from '@/components/december-week4/StreetConceptSlide';
import MysteryStrategySlide from '@/components/december-week4/MysteryStrategySlide';
import JournalistIdeaSlide from '@/components/december-week4/JournalistIdeaSlide';
import VSAIIntroSlide from '@/components/december-week4/VSAIIntroSlide';
import VSAICharactersSlide from '@/components/december-week4/VSAICharactersSlide';
import VSAICueSheet1Slide from '@/components/december-week4/VSAICueSheet1Slide';
import VSAICueSheet2Slide from '@/components/december-week4/VSAICueSheet2Slide';
import VSAICueSheet3Slide from '@/components/december-week4/VSAICueSheet3Slide';
import VSAICueSheet4Slide from '@/components/december-week4/VSAICueSheet4Slide';
import VSAIProductionGuideSlide from '@/components/december-week4/VSAIProductionGuideSlide';
import AccentIDIntroSlide from '@/components/december-week4/AccentIDIntroSlide';
import AccentIDContentSlide from '@/components/december-week4/AccentIDContentSlide';
import AccentIDFigureDetailSlide from '@/components/december-week4/AccentIDFigureDetailSlide';
import AccentIDCrisisSlide from '@/components/december-week4/AccentIDCrisisSlide';
import AccentIDProblemSlide from '@/components/december-week4/AccentIDProblemSlide';
import AccentIDSolution1Slide from '@/components/december-week4/AccentIDSolution1Slide';
import AccentIDSolution2Slide from '@/components/december-week4/AccentIDSolution2Slide';
import AccentIDSolution3Slide from '@/components/december-week4/AccentIDSolution3Slide';
import AccentWOWIntroSlide from '@/components/december-week4/AccentWOWIntroSlide';
import AccentWOWPriceSlide from '@/components/december-week4/AccentWOWPriceSlide';
import AccentWOWDataSlide from '@/components/december-week4/AccentWOWDataSlide';
import AccentWOWFigureSlide from '@/components/december-week4/AccentWOWFigureSlide';
import SPOTIntroSlide from '@/components/december-week4/SPOTIntroSlide';
import PpudeokNeedSlide from '@/components/december-week4/PpudeokNeedSlide';
import PpudeokPlanSlide from '@/components/december-week4/PpudeokPlanSlide';
import SummarySlide from '@/components/december-week4/SummarySlide';
import ActionItemsSlide from '@/components/december-week4/ActionItemsSlide';
import ClosingSlide from '@/components/december-week4/ClosingSlide';

export default function DecemberWeek4Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 37;

  const slides = [
    // 오프닝 (1-2)
    <TitleSlide key={0} />,
    <DirectionSlide key={1} />,
    // 팀 소개 (3-4)
    <TeamFoundersSlide key={2} />,
    <TeamMembersSlide key={3} />,
    // 빅 픽처 및 네안데르랩 (5-9)
    <BusinessOverviewSlide key={4} />,
    <NeanderLabIntroSlide key={5} />,
    <RoleModelSlide key={6} />,
    <CreativeGroupSlide key={7} />,
    <YouTubeStrategySlide key={8} />,
    // VS AI 전략 (10-12)
    <StreetConceptSlide key={9} />,
    <MysteryStrategySlide key={10} />,
    <JournalistIdeaSlide key={11} />,
    // VS AI 상세 기획안 (13-19)
    <VSAIIntroSlide key={12} />,
    <VSAICharactersSlide key={13} />,
    <VSAICueSheet1Slide key={14} />,
    <VSAICueSheet2Slide key={15} />,
    <VSAICueSheet3Slide key={16} />,
    <VSAICueSheet4Slide key={17} />,
    <VSAIProductionGuideSlide key={18} />,
    // 악센트 ID (20-27)
    <AccentIDIntroSlide key={19} />,
    <AccentIDContentSlide key={20} />,
    <AccentIDFigureDetailSlide key={21} />,
    <AccentIDCrisisSlide key={22} />,
    <AccentIDProblemSlide key={23} />,
    <AccentIDSolution1Slide key={24} />,
    <AccentIDSolution2Slide key={25} />,
    <AccentIDSolution3Slide key={26} />,
    // 악센트 WOW (28-31)
    <AccentWOWIntroSlide key={27} />,
    <AccentWOWPriceSlide key={28} />,
    <AccentWOWDataSlide key={29} />,
    <AccentWOWFigureSlide key={30} />,
    // 스팟 (32)
    <SPOTIntroSlide key={31} />,
    // 뿌덕 (33-34)
    <PpudeokNeedSlide key={32} />,
    <PpudeokPlanSlide key={33} />,
    // 정리 (35-37)
    <SummarySlide key={34} />,
    <ActionItemsSlide key={35} />,
    <ClosingSlide key={36} />,
  ];

  const getSectionInfo = () => {
    if (currentSlide <= 1) return { label: '🎯 방향성', color: 'text-primary' };
    if (currentSlide <= 3) return { label: '👥 팀 소개', color: 'text-cyan-400' };
    if (currentSlide <= 8) return { label: '🏢 네안데르랩', color: 'text-purple-400' };
    if (currentSlide <= 11) return { label: '📺 VS AI 전략', color: 'text-orange-400' };
    if (currentSlide <= 18) return { label: '📸 VS AI 기획안', color: 'text-pink-400' };
    if (currentSlide <= 26) return { label: '🎨 악센트 ID', color: 'text-purple-400' };
    if (currentSlide <= 30) return { label: '🎂 악센트 WOW', color: 'text-pink-400' };
    if (currentSlide <= 31) return { label: '🌿 스팟', color: 'text-emerald-400' };
    if (currentSlide <= 33) return { label: '🎁 뿌덕 온라인', color: 'text-amber-400' };
    return { label: '📋 정리', color: 'text-primary' };
  };

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

  const sectionInfo = getSectionInfo();

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
        <span className={`text-sm font-semibold ${sectionInfo.color}`}>
          {sectionInfo.label}
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
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-1 items-center">
        {Array.from({ length: totalSlides }).map((_, index) => {
          const sectionBoundaries = [
            { start: 0, end: 1 },     // 방향성
            { start: 2, end: 3 },     // 팀 소개
            { start: 4, end: 8 },     // 네안데르랩
            { start: 9, end: 11 },    // VS AI 전략
            { start: 12, end: 18 },   // VS AI 기획안
            { start: 19, end: 26 },   // 악센트 ID
            { start: 27, end: 30 },   // 악센트 WOW
            { start: 31, end: 31 },   // 스팟
            { start: 32, end: 33 },   // 뿌덕
            { start: 34, end: 36 },   // 정리
          ];

          const isCurrentSection = sectionBoundaries.some(
            (section) =>
              index >= section.start &&
              index <= section.end &&
              currentSlide >= section.start &&
              currentSlide <= section.end
          );

          return (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index
                  ? 'bg-primary scale-150'
                  : isCurrentSection
                  ? 'bg-gray-500 hover:bg-gray-400'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            />
          );
        })}
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
