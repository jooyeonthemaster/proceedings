'use client';

import { motion } from 'framer-motion';

export default function ConclusionSlide() {
  const summaryItems = [
    { label: '지원사업', value: '1분기 KPI 2억 중 1,000만원 달성 (5%). 분량 이슈가 핵심 원인. 목표 2억 유지, 계속 도전', color: 'red' },
    { label: '개발팀', value: '뿌덕 S3 완성, 외주 880만원 정산. 내부 협업 KPI 미달성. KPI 설정 후 폐지되는 구조적 문제', color: 'blue' },
    { label: '전문성', value: '각자 역할에서 현업 전문가 수준의 AI 활용 능력 필요. 체계화 & 내재화', color: 'purple' },
    { label: '조직 방향', value: '컨트롤 타워 4개 문제. 동일한 목표 + 동일한 열정 필요', color: 'amber' },
  ];

  const actionItems = [
    '지원사업 분량 관리 철저 (15페이지 이내 엄수)',
    '콘텐츠 스타트업(4/8), 아트코리아랩(4/15) 마감 대응',
    '서울혁신첼린지 발표 준비 (1억원 규모)',
    '뿌덕 사이트 PG 결제 심사 완료 (4월 첫째주)',
    '영어학원 AI 프로그램 솔루션 기획 (5월 착수)',
    '조직 공통 목표 수립 및 컨트롤 타워 일원화 논의',
    '각자 역할별 전문성 체계화 로드맵 수립',
  ];

  const colorClasses: Record<string, { bg: string; text: string }> = {
    red: { bg: 'bg-red-900/20', text: 'text-red-400/70' },
    blue: { bg: 'bg-blue-900/20', text: 'text-blue-400/70' },
    purple: { bg: 'bg-purple-900/20', text: 'text-purple-400/70' },
    amber: { bg: 'bg-amber-900/20', text: 'text-amber-400/70' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Subtle rain */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-slate-400/30 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${60 + Math.random() * 80}px`,
              top: `-${Math.random() * 100}px`,
            }}
            animate={{
              y: [0, 800],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 1,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-slate-200 mb-4">Summary</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-slate-600 to-red-900/40 mx-auto mb-10"></div>

          <div className="space-y-3 max-w-3xl mx-auto mb-8">
            {summaryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-slate-900/60 rounded-xl p-4 flex items-center text-left border border-slate-800/40"
              >
                <div className={`${colorClasses[item.color].bg} rounded-lg px-3 py-1 mr-4 flex-shrink-0`}>
                  <span className={`${colorClasses[item.color].text} text-sm font-bold`}>{item.label}</span>
                </div>
                <p className="text-slate-400 text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Action Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-slate-900/40 rounded-xl p-6 border border-slate-700/30 max-w-3xl mx-auto mb-8"
          >
            <h3 className="text-slate-400 font-bold text-lg mb-4">Action Items</h3>
            <div className="space-y-2">
              {actionItems.map((item, i) => (
                <div key={i} className="flex items-start text-left">
                  <span className="text-slate-600 mr-3 mt-0.5 text-sm">{i + 1}.</span>
                  <span className="text-slate-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="inline-flex items-center bg-slate-800/40 border border-slate-700/30 rounded-full px-8 py-4">
              <span className="text-slate-400 text-xl font-bold">1분기는 혹독했다. 하지만 방향을 잡았다.</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.2 }}
            className="text-slate-600 text-sm mt-8"
          >
            2026년 4월 1주차 임원진 회의록 | 네안데르
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
