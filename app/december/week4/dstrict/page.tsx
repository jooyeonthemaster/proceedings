'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DstrictPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timeline = [
    { year: '2004', event: '디스트릭트 설립', type: 'founding', detail: '이성호 대표, 디지털 미디어 콘텐츠 회사로 시작' },
    { year: '2006', event: '첫 대형 프로젝트', type: 'milestone', detail: '기업 디지털 사이니지 및 인터랙티브 콘텐츠 제작' },
    { year: '2010', event: '미디어 아트 진출', type: 'pivot', detail: '상업 콘텐츠에서 예술적 미디어 아트로 영역 확장' },
    { year: '2015', event: '글로벌 프로젝트 시작', type: 'global', detail: '해외 랜드마크 미디어 파사드 프로젝트' },
    { year: '2018', event: '아르떼뮤지엄 여수 오픈', type: 'flagship', detail: '첫 상설 미디어 아트 전시관' },
    { year: '2020', event: 'WAVE 공개', type: 'achievement', detail: 'COEX 아나몰픽 일루전, 전 세계 바이럴' },
    { year: '2020', event: '아르떼뮤지엄 제주 오픈', type: 'flagship', detail: '제주도 상설 전시관' },
    { year: '2021', event: '아르떼뮤지엄 강릉 오픈', type: 'flagship', detail: '강릉 상설 전시관' },
    { year: '2022', event: 'Las Vegas Sphere 참여', type: 'global', detail: '세계 최대 구형 미디어 건축물 콘텐츠' },
    { year: '2023', event: '글로벌 확장 가속화', type: 'global', detail: '사우디, UAE, 미국 등 해외 프로젝트 다수' },
    { year: '2024', event: 'K-콘텐츠 콜라보', type: 'achievement', detail: 'SM, HYBE 등 K-pop 아티스트 협업' },
  ];

  const artworks = [
    {
      name: 'WAVE',
      location: 'COEX K-Pop Square, 서울',
      year: '2020',
      desc: '20m 높이의 대형 LED 스크린에 구현된 아나몰픽 일루전. 실제로 파도가 치는 듯한 초현실적 착시 효과로 전 세계 SNS를 휩쓸었다.',
      stats: ['SNS 조회수 10억+', '전 세계 50개국+ 보도', '칸 광고제 수상'],
      color: 'from-cyan-500 to-blue-600',
      icon: '🌊',
    },
    {
      name: 'Arte Museum',
      location: '여수, 제주, 강릉, 라스베이거스',
      year: '2018~',
      desc: '빛과 디지털 기술로 만들어낸 몰입형 미디어 아트 전시관. 자연, 정원, 바다 등 다양한 테마로 구성된 대규모 체험 공간.',
      stats: ['누적 방문객 500만+', '4개 지점 운영', 'MZ세대 핫플'],
      color: 'from-purple-500 to-pink-600',
      icon: '🎨',
    },
    {
      name: 'Public Media Art',
      location: '전 세계 랜드마크',
      year: '2015~',
      desc: '건물 외벽, 공공 공간에 설치되는 대형 미디어 아트. 도시 경관을 예술 작품으로 변모시키는 퍼블릭 아트 프로젝트.',
      stats: ['20개국+ 설치', '주요 도시 랜드마크', '건축+아트 융합'],
      color: 'from-amber-500 to-orange-600',
      icon: '🏙️',
    },
  ];

  const arteMuseums = [
    { location: '여수', opened: '2018', size: '6,200평', highlight: '최초 상설관', color: 'from-blue-400 to-cyan-500' },
    { location: '제주', opened: '2020', size: '4,600평', highlight: '제주 자연 테마', color: 'from-emerald-400 to-teal-500' },
    { location: '강릉', opened: '2021', size: '4,000평', highlight: '동해 바다 테마', color: 'from-sky-400 to-blue-500' },
    { location: 'Las Vegas', opened: '2023', size: 'TBD', highlight: '미국 첫 진출', color: 'from-amber-400 to-orange-500' },
  ];

  const philosophies = [
    { title: 'Public Media Art', desc: '미디어 아트를 갤러리 밖으로, 모든 시민이 일상에서 예술을 만나도록', icon: '🌐' },
    { title: 'Anamorphic Illusion', desc: '시점에 따라 달라지는 착시 예술, 2D 스크린에서 3D 경험 창출', icon: '👁️' },
    { title: 'Immersive Experience', desc: '관람이 아닌 몰입, 관객이 작품 속으로 들어가는 체험', icon: '🚀' },
    { title: 'Tech + Art Fusion', desc: '최첨단 기술과 예술적 감성의 완벽한 융합', icon: '⚡' },
  ];

  const stats = [
    { label: '설립', value: '2004', suffix: '년' },
    { label: '직원 수', value: '200', suffix: '+' },
    { label: '글로벌 프로젝트', value: '100', suffix: '+' },
    { label: 'WAVE 조회수', value: '10', suffix: '억+' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-cyan-500/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/december/week4" className="flex items-center gap-3 text-white/60 hover:text-cyan-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm">4주차로 돌아가기</span>
          </Link>
          <div className="text-2xl font-bold tracking-wider">
            d'<span className="text-cyan-400">strict</span>
          </div>
          <div className="w-24" />
        </div>
      </motion.nav>

      {/* Hero Section - WAVE Inspired */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Wave Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-[#0a0a0f] to-[#0a0a0f]" />

          {/* Wave Animation */}
          <svg className="absolute bottom-0 w-full h-64 opacity-30" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <motion.path
              d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="url(#wave-gradient)"
              animate={{
                d: [
                  "M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,149.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-8xl mb-8">🌊</div>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tight mb-6">
              d'<span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">strict</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide mb-8">
              디스트릭트 | Digital Art & Experience Company
            </p>
            <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
              "예술을 갤러리 밖으로, 모든 사람들의 일상 속으로"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16"
          >
            <div className="flex items-center justify-center gap-2 text-cyan-400/50 animate-bounce">
              <span className="text-sm tracking-widest">SCROLL TO EXPLORE</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-cyan-500/20 bg-gradient-to-r from-cyan-900/10 via-[#0a0a0f] to-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}<span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-white/40 mt-2 text-sm tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-cyan-900/5 to-[#0a0a0f]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase">Origin Story</span>
            <h2 className="text-5xl md:text-7xl font-light mt-4">창립 이야기</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-6">🇰🇷</div>
              <h3 className="text-3xl font-light mb-6">2004년, 서울</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                <span className="text-cyan-400 font-semibold">이성호 대표</span>가 설립한 디스트릭트는
                처음에는 기업용 디지털 사이니지와 미디어 콘텐츠를 제작하는 B2B 회사로 시작했습니다.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                하지만 단순한 광고 콘텐츠를 넘어, <span className="text-blue-400">"예술로서의 미디어"</span>를
                추구하며 독자적인 길을 걸어왔습니다.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                2020년 COEX에서 공개된 <span className="text-cyan-400 font-semibold">'WAVE'</span>는
                전 세계를 충격에 빠뜨리며, 디스트릭트를 글로벌 미디어 아트 기업으로 단숨에 끌어올렸습니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-8 border border-cyan-500/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-3xl">
                  👨‍💼
                </div>
                <div>
                  <h4 className="text-2xl font-bold">이성호 (Lee Sung-ho)</h4>
                  <p className="text-cyan-400">Founder & CEO</p>
                </div>
              </div>
              <blockquote className="text-xl font-light italic text-white/80 leading-relaxed mb-6">
                "우리는 미디어 아트를 갤러리 안에 가두지 않습니다.
                거리에서, 건물에서, 모든 사람들이 일상 속에서 예술을 만날 수 있어야 합니다.
                그것이 진정한 Public Media Art입니다."
              </blockquote>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-xs text-cyan-300">미디어 아트 선구자</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">아나몰픽 일루전 개척</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">Public Media Art</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WAVE - Flagship Work */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-[#0a0a0f] to-blue-900/20" />

        {/* Animated Wave Lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{ top: `${20 + i * 15}%` }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 8 + i, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase">Iconic Work</span>
            <h2 className="text-6xl md:text-8xl font-black mt-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              WAVE
            </h2>
            <p className="text-white/40 mt-4 text-xl">2020 | COEX K-Pop Square, Seoul</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl p-8 md:p-12 border border-cyan-500/30 mb-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6">🌊</div>
                <h3 className="text-3xl font-bold mb-4">세상을 놀라게 한 파도</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  20m 높이, 80m 길이의 세계 최대 규모 아나몰픽 디스플레이에 구현된 파도.
                  마치 실제 거대한 수조 안에 파도가 치는 듯한 초현실적 착시 효과로
                  공개 직후 전 세계 SNS를 휩쓸었습니다.
                </p>
                <p className="text-white/60 text-lg leading-relaxed">
                  단순한 미디어 파사드를 넘어, <span className="text-cyan-400">도시 공간 자체를 예술 작품</span>으로
                  변모시킨 혁명적 작품입니다.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '📱', label: 'SNS 조회수', value: '10억+ Views' },
                  { icon: '🌍', label: '글로벌 미디어', value: '50개국+ 보도' },
                  { icon: '🏆', label: '수상', value: '칸 광고제 외 다수' },
                  { icon: '📐', label: '규모', value: '20m x 80m LED' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-white/5 rounded-xl p-4"
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <div className="text-white/40 text-sm">{item.label}</div>
                      <div className="text-cyan-400 font-bold">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-blue-900/5 to-[#0a0a0f]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-blue-400 text-sm tracking-[0.3em] uppercase">Growth Journey</span>
            <h2 className="text-5xl md:text-7xl font-light mt-4">성장의 여정</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-8" />
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block px-4 py-1 rounded-full text-xs mb-2 ${
                    item.type === 'founding' ? 'bg-cyan-500/20 text-cyan-300' :
                    item.type === 'flagship' ? 'bg-blue-500/20 text-blue-300' :
                    item.type === 'global' ? 'bg-purple-500/20 text-purple-300' :
                    item.type === 'achievement' ? 'bg-amber-500/20 text-amber-300' :
                    'bg-white/10 text-white/60'
                  }`}>
                    {item.type.toUpperCase()}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{item.event}</h4>
                  <p className="text-white/40 text-sm">{item.detail}</p>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-cyan-500/30">
                    {item.year}
                  </div>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Arte Museum */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-[#0a0a0f] to-pink-900/10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-purple-400 text-sm tracking-[0.3em] uppercase">Immersive Experiences</span>
            <h2 className="text-5xl md:text-7xl font-light mt-4">아르떼뮤지엄</h2>
            <p className="text-white/40 mt-4 text-lg">빛과 디지털 기술로 만드는 몰입형 미디어 아트</p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {arteMuseums.map((museum, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${museum.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="relative bg-black/60 backdrop-blur-sm p-8 border border-white/10 h-full hover:border-purple-500/50 transition-all">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-2xl font-bold mb-2">아르떼뮤지엄</h3>
                  <p className="text-purple-400 font-semibold mb-4">{museum.location}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/40">오픈</span>
                      <span className="text-white/80">{museum.opened}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">규모</span>
                      <span className="text-white/80">{museum.size}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs px-3 py-1 bg-white/10 rounded-full">{museum.highlight}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-cyan-900/5 to-[#0a0a0f]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase">Core Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-light mt-4">철학과 비전</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {philosophies.map((phil, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 rounded-3xl p-10 border border-white/10 hover:border-cyan-500/50 transition-all">
                  <div className="text-5xl mb-6">{phil.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {phil.title}
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed">{phil.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-[#0a0a0f] to-blue-900/10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-amber-400 text-sm tracking-[0.3em] uppercase">Business Evolution</span>
            <h2 className="text-5xl md:text-7xl font-light mt-4">비즈니스 모델의 진화</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-3xl p-8 border border-white/10"
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-2 text-white/80">2004-2015</h3>
              <h4 className="text-lg text-cyan-400 mb-4">B2B 미디어 콘텐츠</h4>
              <ul className="text-white/40 space-y-2 text-sm">
                <li>• 디지털 사이니지 제작</li>
                <li>• 기업 미디어 파사드</li>
                <li>• 인터랙티브 콘텐츠</li>
                <li>• 프로젝트 기반 수익</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 rounded-3xl p-8 border border-white/10"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2 text-white/80">2015-2020</h3>
              <h4 className="text-lg text-blue-400 mb-4">미디어 아트 + 상설관</h4>
              <ul className="text-white/40 space-y-2 text-sm">
                <li>• 아르떼뮤지엄 오픈</li>
                <li>• Public Media Art 개념</li>
                <li>• 티켓 판매 수익</li>
                <li>• 글로벌 프로젝트 시작</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl p-8 border border-cyan-500/30"
            >
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2 text-white/80">2020-현재</h3>
              <h4 className="text-lg text-purple-400 mb-4">글로벌 미디어 아트 기업</h4>
              <ul className="text-white/40 space-y-2 text-sm">
                <li>• WAVE로 글로벌 인지도</li>
                <li>• 해외 랜드마크 프로젝트</li>
                <li>• K-콘텐츠 콜라보</li>
                <li>• 다각화된 수익 구조</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-amber-900/5 to-[#0a0a0f]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-sm tracking-[0.3em] uppercase">Awards</span>
            <h2 className="text-5xl md:text-7xl font-light mt-4">수상 & 인정</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { award: 'Cannes Lions', year: '2021', category: 'Design', icon: '🏆' },
              { award: 'Red Dot Design', year: '2021', category: 'Best of the Best', icon: '🔴' },
              { award: 'iF Design Award', year: '2020', category: 'Communication', icon: '🏅' },
              { award: 'D&AD', year: '2021', category: 'Yellow Pencil', icon: '✏️' },
              { award: 'Webby Awards', year: '2021', category: 'Art & Design', icon: '🌐' },
              { award: 'ADC Awards', year: '2021', category: 'Gold', icon: '🥇' },
              { award: 'SXSW', year: '2022', category: 'Innovation Award', icon: '🎪' },
              { award: 'One Show', year: '2021', category: 'Gold', icon: '⭐' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 text-center hover:border-amber-500/50 transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-semibold text-white/80 mb-1">{item.award}</h4>
                <p className="text-amber-400 text-sm">{item.category}</p>
                <p className="text-white/40 text-xs mt-1">{item.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-4xl font-bold tracking-wider mb-6">
            d'<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">strict</span>
          </div>
          <p className="text-white/40 mb-8">Digital Art & Experience Company Since 2004</p>
          <Link
            href="/december/week4"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            4주차 발표로 돌아가기
          </Link>
          <p className="text-white/20 text-sm mt-12">
            © 2024 Neander Meeting Materials. d'strict® is a registered trademark.
          </p>
        </div>
      </footer>
    </div>
  );
}
