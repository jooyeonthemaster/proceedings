'use client';

import { motion } from 'framer-motion';

export default function ConclusionSlide() {
  const summaryItems = [
    { label: '개발팀', value: '지원사업 시즌 마무리 → 개발 중심 풀가동 체제 돌입', color: 'emerald' },
    { label: '소프트웨어', value: '다양한 SW 개발 → 적극적 영업. 마케팅·영업 협업 여력 충분', color: 'cyan' },
    { label: '뿌덕', value: '사이트 개선 지속 중. 수정 요청은 노션 페이지로 통일', color: 'amber' },
    { label: '마케팅', value: 'AI 포토부스 광고 캠페인 + 웹 개발 외주 마케팅 기획 요청', color: 'rose' },
    { label: '영업', value: '대학 축제·행사 시즌 — AI 포토부스 적극 컨택 요청', color: 'orange' },
    { label: '실적', value: '동대문 문화재단 4·6·9월 행사 3건 포토부스 도입 확정', color: 'violet' },
  ];

  const actionItems = [
    '개발팀 풀가동 — 다양한 소프트웨어 개발 착수',
    '뿌덕 사이트 수정 요청은 노션 페이지로 통일',
    '마케팅팀: AI 포토부스 판매·렌탈 광고 캠페인 기획',
    '마케팅팀: 웹 개발 외주 마케팅 — 자체 사이트 + 단가 체계 수립',
    '영업팀: 대학 축제·행사 AI 포토부스 적극 영업',
    '영업+마케팅: 메타 광고 & 활성화 방안 협조',
  ];

  const colorClasses: Record<string, { bg: string; text: string }> = {
    emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
    cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
    amber: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
    rose: { bg: 'bg-rose-500/20', text: 'text-rose-400' },
    orange: { bg: 'bg-orange-500/20', text: 'text-orange-400' },
    violet: { bg: 'bg-violet-500/20', text: 'text-violet-400' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">Summary</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-10"></div>

          <div className="space-y-3 max-w-3xl mx-auto mb-8">
            {summaryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-dark-light/60 rounded-xl p-4 flex items-center text-left"
              >
                <div className={`${colorClasses[item.color].bg} rounded-lg px-3 py-1 mr-4 flex-shrink-0`}>
                  <span className={`${colorClasses[item.color].text} text-sm font-bold`}>{item.label}</span>
                </div>
                <p className="text-gray-300 text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Action Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-dark-light/40 rounded-xl p-6 border border-emerald-500/30 max-w-3xl mx-auto mb-8"
          >
            <h3 className="text-emerald-400 font-bold text-lg mb-4">Action Items</h3>
            <div className="space-y-2">
              {actionItems.map((item, i) => (
                <div key={i} className="flex items-start text-left">
                  <span className="text-emerald-400 mr-3 mt-0.5 text-sm">{i + 1}.</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-8 py-4">
              <span className="text-emerald-400 text-xl font-bold">개발로 승부하자!</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-gray-500 text-sm mt-8"
          >
            2026년 3월 4주차 전체 회의록 | 네안데르
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
