'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function TeamLabPage() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const founders = [
    { name: '猪子寿之 (Toshiyuki Inoko)', role: 'Founder & Representative Director', desc: '도쿄대학교 수리공학과 졸업, 창의적 비전의 핵심', image: '🎨' },
    { name: '工藤岳 (Takashi Kudo)', role: 'CTO / Technical Director', desc: '기술 총괄, 인터랙티브 시스템 설계', image: '💻' },
    { name: '安藤祐輝 (Yuki Ando)', role: 'Director', desc: '프로젝트 디렉션 및 전략', image: '📊' },
    { name: '永崎正平 (Shohei Nagasaki)', role: 'Director', desc: '크리에이티브 디렉션', image: '🎭' },
    { name: '堺大輔 (Daisuke Sakai)', role: 'Director', desc: '비즈니스 개발', image: '🚀' },
  ];

  const timeline = [
    { year: '2001', event: '도쿄대학교 동문 5인이 teamLab 설립', type: 'founding', detail: 'B2B 디지털 솔루션 회사로 시작' },
    { year: '2004', event: '인터랙티브 아트 실험 시작', type: 'pivot', detail: '상업 프로젝트와 병행하며 예술적 비전 개발' },
    { year: '2011', event: 'Kaikai Kiki 갤러리 첫 전시', type: 'milestone', detail: '무라카미 다카시 갤러리에서 데뷔' },
    { year: '2014', event: 'Pace Gallery 뉴욕 전시', type: 'global', detail: '"Ultra Subjective Space" 국제적 인지도 획득' },
    { year: '2016', event: 'Crystal Universe 세계 순회', type: 'artwork', detail: '글로벌 순회 전시 본격화' },
    { year: '2018', event: 'teamLab Borderless 오픈', type: 'flagship', detail: '오다이바, 연간 230만 방문객 기록' },
    { year: '2018', event: 'teamLab Planets 오픈', type: 'flagship', detail: '도요스, "Body Immersive" 콘셉트' },
    { year: '2019', event: '기네스 세계 기록', type: 'achievement', detail: '세계에서 가장 많이 방문한 단일 아티스트 뮤지엄' },
    { year: '2021', event: '상하이 & 베이징 확장', type: 'global', detail: '중국 시장 본격 진출' },
    { year: '2022', event: '제다 (사우디) 오픈', type: 'global', detail: '중동 시장 진출' },
    { year: '2024', event: 'Borderless 아자부다이힐스 재오픈', type: 'flagship', detail: '도쿄 신규 플래그십, 10,000sqm' },
  ];

  const exhibitions = [
    { name: 'teamLab Borderless', location: '아자부다이힐스, 도쿄', status: 'open', visitors: '연간 230만+', color: 'from-purple-500 to-pink-500' },
    { name: 'teamLab Planets', location: '도요스, 도쿄', status: 'open', visitors: '2027년까지 연장', color: 'from-blue-500 to-cyan-500' },
    { name: 'teamLab Borderless', location: '상하이, 중국', status: 'open', visitors: '아시아 최대 규모', color: 'from-pink-500 to-red-500' },
    { name: 'teamLab Borderless', location: '베이징, 중국', status: 'open', visitors: '2023 오픈', color: 'from-amber-500 to-orange-500' },
    { name: 'teamLab Borderless', location: '제다, 사우디', status: 'open', visitors: '중동 최초', color: 'from-emerald-500 to-teal-500' },
    { name: 'teamLab: Continuity', location: '함부르크, 독일', status: 'open', visitors: '유럽 진출', color: 'from-indigo-500 to-purple-500' },
  ];

  const philosophies = [
    { title: 'Borderless', desc: '작품과 작품, 관람객과 작품 사이의 경계를 허문다', icon: '🌊' },
    { title: 'Ultra Subjective Space', desc: '고정된 시점 없이, 관람객이 작품의 일부가 된다', icon: '👁️' },
    { title: 'Body Immersion', desc: '눈이 아닌 온 몸으로 경험하는 예술', icon: '🧘' },
    { title: 'Co-Creation', desc: '자연, 기술, 전통이 함께 만드는 새로운 인지', icon: '🌸' },
  ];

  const stats = [
    { label: '설립', value: '2001', suffix: '년' },
    { label: '직원 수', value: '700', suffix: '+' },
    { label: '글로벌 전시장', value: '10', suffix: '+' },
    { label: '누적 방문객', value: '1,000', suffix: '만+' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/december/week4" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm">4주차로 돌아가기</span>
          </Link>
          <div className="text-2xl font-light tracking-[0.3em] text-white">
            team<span className="font-bold">Lab</span>
          </div>
          <div className="w-24" />
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />

          {/* Floating Orbs */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-screen"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  ['rgba(168,85,247,0.4)', 'rgba(236,72,153,0.4)', 'rgba(59,130,246,0.4)', 'rgba(6,182,212,0.4)'][i % 4]
                } 0%, transparent 70%)`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
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
            <h1 className="text-8xl md:text-[12rem] font-extralight tracking-[0.2em] mb-6">
              team<span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Lab</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/60 font-light tracking-wide mb-8">
              チームラボ
            </p>
            <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
              "경계 없는 세계에서, 당신은 작품의 일부가 된다"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16"
          >
            <div className="flex items-center justify-center gap-2 text-white/30 animate-bounce">
              <span className="text-sm tracking-widest">SCROLL TO EXPLORE</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10 bg-gradient-to-r from-purple-900/10 via-black to-pink-900/10">
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
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-purple-400 text-sm tracking-[0.3em] uppercase">Origin Story</span>
            <h2 className="text-5xl md:text-7xl font-light mt-4">창립 이야기</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-6">🎓</div>
              <h3 className="text-3xl font-light mb-6">2001년 3월, 도쿄대학교</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                도쿄대학교 수리공학과 동문 5명이 모여 시작했습니다.
                그들은 단순한 개발 회사가 아닌, <span className="text-purple-400">기술과 예술의 경계를 허무는</span>
                새로운 형태의 창작 집단을 꿈꿨습니다.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                초기에는 웹사이트 개발, 시스템 통합 등 <span className="text-cyan-400">B2B 디지털 솔루션</span>으로
                시작했지만, 항상 예술적 실험을 병행했습니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-white/10"
            >
              <blockquote className="text-2xl font-light italic text-white/80 leading-relaxed">
                "디지털 영역은 우리가 예술의 개념을 확장할 수 있게 해줍니다.
                디지털 세계에서 예술은 공간의 경계에서 자유로워질 수 있습니다."
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xl">
                  🎨
                </div>
                <div>
                  <div className="font-semibold">猪子寿之 (이노코 토시유키)</div>
                  <div className="text-white/40 text-sm">Founder & Representative Director</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {founders.map((founder, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:bg-white/10 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{founder.image}</div>
                <h4 className="font-semibold text-sm mb-1">{founder.name}</h4>
                <p className="text-purple-400 text-xs mb-2">{founder.role}</p>
                <p className="text-white/40 text-xs">{founder.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-black to-pink-900/10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-pink-400 text-sm tracking-[0.3em] uppercase">Growth Journey</span>
            <h2 className="text-5xl md:text-7xl font-light mt-4">성장의 여정</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mt-8" />
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500" />

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
                    item.type === 'founding' ? 'bg-purple-500/20 text-purple-300' :
                    item.type === 'flagship' ? 'bg-pink-500/20 text-pink-300' :
                    item.type === 'global' ? 'bg-cyan-500/20 text-cyan-300' :
                    item.type === 'achievement' ? 'bg-amber-500/20 text-amber-300' :
                    'bg-white/10 text-white/60'
                  }`}>
                    {item.type.toUpperCase()}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{item.event}</h4>
                  <p className="text-white/40 text-sm">{item.detail}</p>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold shadow-lg shadow-purple-500/30">
                    {item.year}
                  </div>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 rounded-3xl p-10 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="text-5xl mb-6">{phil.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {phil.title}
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed">{phil.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl p-12 border border-white/10">
              <div className="text-6xl mb-6">💭</div>
              <blockquote className="text-2xl md:text-3xl font-light italic text-white/80 leading-relaxed">
                "관람객과 작품 사이의 경계는 존재해서는 안 됩니다.
                teamLab Borderless를 통해 우리는 경계 없는 세계를 만들고자 합니다.
                하나의 연속된 세계."
              </blockquote>
              <div className="mt-8 text-white/40">— 猪子寿之, Founder</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Exhibitions */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-900/10 to-black" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-purple-400 text-sm tracking-[0.3em] uppercase">Global Presence</span>
            <h2 className="text-5xl md:text-7xl font-light mt-4">전 세계 전시장</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exhibitions.map((exhibit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${exhibit.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="relative bg-black/60 backdrop-blur-sm p-8 border border-white/10 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs uppercase tracking-wider">{exhibit.status}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{exhibit.name}</h3>
                  <p className="text-white/40 mb-4">{exhibit.location}</p>
                  <p className="text-white/60 text-sm">{exhibit.visitors}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Evolution */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-black to-pink-900/10" />
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
              <h3 className="text-xl font-semibold mb-2 text-white/80">2001-2010</h3>
              <h4 className="text-lg text-purple-400 mb-4">B2B 디지털 솔루션</h4>
              <ul className="text-white/40 space-y-2 text-sm">
                <li>• 웹사이트 개발</li>
                <li>• 시스템 통합</li>
                <li>• 기업용 인터랙티브 콘텐츠</li>
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
              <h3 className="text-xl font-semibold mb-2 text-white/80">2010-2017</h3>
              <h4 className="text-lg text-pink-400 mb-4">갤러리 & 순회 전시</h4>
              <ul className="text-white/40 space-y-2 text-sm">
                <li>• 갤러리 전시 시작</li>
                <li>• 글로벌 순회 전시</li>
                <li>• 예술계 명성 구축</li>
                <li>• 라이선싱 수익</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30"
            >
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold mb-2 text-white/80">2018-현재</h3>
              <h4 className="text-lg text-cyan-400 mb-4">상설 뮤지엄</h4>
              <ul className="text-white/40 space-y-2 text-sm">
                <li>• 티켓 판매 (3,800엔~)</li>
                <li>• 머천다이즈</li>
                <li>• 기업 이벤트</li>
                <li>• 브랜드 콜라보</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Artworks */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-pink-400 text-sm tracking-[0.3em] uppercase">Signature Works</span>
            <h2 className="text-5xl md:text-7xl font-light mt-4">대표 작품</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Crystal Universe', icon: '✨' },
              { name: 'Forest of Resonating Lamps', icon: '💡' },
              { name: 'Bubble Universe', icon: '🫧' },
              { name: 'Infinity Mirror', icon: '🪞' },
              { name: 'The Way of the Sea', icon: '🐟' },
              { name: 'Flowers and People', icon: '🌸' },
              { name: 'Athletics Forest', icon: '🎪' },
              { name: 'Future Park', icon: '🎨' },
            ].map((work, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 hover:border-purple-500/50 transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{work.icon}</div>
                <p className="text-sm text-center text-white/60 group-hover:text-white transition-colors">{work.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-4xl font-light tracking-[0.3em] mb-6">
            team<span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Lab</span>
          </div>
          <p className="text-white/40 mb-8">Art Collective Since 2001</p>
          <Link
            href="/december/week4"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            4주차 발표로 돌아가기
          </Link>
          <p className="text-white/20 text-sm mt-12">
            © 2024 Neander Meeting Materials. teamLab® is a registered trademark.
          </p>
        </div>
      </footer>
    </div>
  );
}
