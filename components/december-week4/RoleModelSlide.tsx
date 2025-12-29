'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RoleModelSlide() {
  const companies = [
    {
      name: '팀랩 (teamLab)',
      start: 'B2B 미디어 콘텐츠 개발 외주, 스마트폰 앱 개발, 웹사이트 개발',
      now: '오프라인 콘텐츠 기반 체험 프로그램 창작 집단',
      color: 'purple',
      link: '/december/week4/teamlab',
    },
    {
      name: '디스트릭트 (d\'strict)',
      start: '미디어 콘텐츠 개발',
      now: '"파도" 등 작품으로 세계적 인지도',
      color: 'cyan',
      link: '/december/week4/dstrict',
    },
    {
      name: '네안데르',
      start: '개발 외주, 전시 대행',
      now: '체험형 AI 콘텐츠 창작 집단',
      color: 'primary',
      isUs: true,
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return {
          bg: 'bg-purple-500/10',
          border: 'border-purple-500/30',
          hoverBorder: 'hover:border-purple-400',
          hoverBg: 'hover:bg-purple-500/20',
          accent: 'bg-purple-500',
          text: 'text-purple-400',
          textLight: 'text-purple-300',
        };
      case 'cyan':
        return {
          bg: 'bg-cyan-500/10',
          border: 'border-cyan-500/30',
          hoverBorder: 'hover:border-cyan-400',
          hoverBg: 'hover:bg-cyan-500/20',
          accent: 'bg-cyan-500',
          text: 'text-cyan-400',
          textLight: 'text-cyan-300',
        };
      default:
        return {
          bg: 'bg-primary/10',
          border: 'border-primary/30',
          hoverBorder: 'hover:border-primary',
          hoverBg: 'hover:bg-primary/20',
          accent: 'bg-primary',
          text: 'text-primary',
          textLight: 'text-primary',
        };
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-4">
            롤모델 분석
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            우리의 롤모델: <span className="text-purple-400">팀랩</span> & <span className="text-cyan-400">디스트릭트</span>
          </h2>
          <p className="text-gray-500 text-sm">카드를 클릭하면 상세 정보를 볼 수 있습니다</p>
        </motion.div>

        {/* Companies Comparison */}
        <div className="space-y-4 mb-8">
          {companies.map((company, index) => {
            const colors = getColorClasses(company.color);

            const CardContent = (
              <div className="flex items-stretch overflow-hidden rounded-xl">
                {/* Left Accent Bar */}
                <div className={`w-1.5 ${colors.accent} shrink-0`}></div>

                {/* Main Content */}
                <div className={`flex-1 p-5 ${colors.bg} flex items-center justify-between gap-6`}>
                  {/* Company Name */}
                  <div className="w-44 shrink-0">
                    <h3 className={`text-lg font-bold ${colors.text}`}>
                      {company.isUs && '🎯 '}{company.name}
                    </h3>
                  </div>

                  {/* Timeline */}
                  <div className="flex-1 flex items-center gap-6">
                    <div className="flex-1">
                      <span className="text-xs text-gray-500 block mb-1">시작</span>
                      <p className="text-gray-400 text-sm leading-relaxed">{company.start}</p>
                    </div>
                    <div className="text-2xl text-gray-600 shrink-0">→</div>
                    <div className="flex-1">
                      <span className="text-xs text-gray-500 block mb-1">현재</span>
                      <p className={`text-sm font-semibold leading-relaxed ${colors.textLight}`}>{company.now}</p>
                    </div>
                  </div>

                  {/* Click Indicator */}
                  {company.link && (
                    <div className="flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors shrink-0">
                      <span className="text-xs">상세보기</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );

            const wrapperClasses = `block rounded-xl border ${colors.border} ${company.link ? `${colors.hoverBorder} ${colors.hoverBg} cursor-pointer group transition-all duration-300` : ''} ${company.isUs ? 'ring-2 ring-primary/50' : ''} overflow-hidden`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              >
                {company.link ? (
                  <Link href={company.link} target="_blank" rel="noopener noreferrer" className={wrapperClasses}>
                    {CardContent}
                  </Link>
                ) : (
                  <div className={wrapperClasses}>
                    {CardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-r from-purple-500/10 via-dark-light to-cyan-500/10 rounded-xl p-6 border border-gray-700"
        >
          <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <span>💡</span> 핵심 인사이트
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>팀랩, 디스트릭트 모두 <span className="text-cyan-400 font-semibold">초기에는 B2B 외주</span>로 시작</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span><span className="text-purple-400 font-semibold">오프라인 체험 콘텐츠</span>가 메인이 되면서 <span className="text-primary font-semibold">창작 집단</span>으로 진화</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>우리도 같은 경로: <span className="text-amber-400 font-semibold">B2B 영업은 부차적, 콘텐츠 창작이 메인</span></span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
