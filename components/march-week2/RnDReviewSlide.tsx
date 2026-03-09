'use client';

import { motion } from 'framer-motion';

export default function RnDReviewSlide() {
  const questions = [
    {
      q: 'K-평균 클러스터링에서 K값 선정 방식은?',
      summary: 'Elbow Method + 실루엣 계수 + 조향사 블라인드 검증 3단계로 K=16 도출',
      verdict: '자체 정의 수준이라는 지적',
      color: 'amber',
    },
    {
      q: '산업적 표준성이나 근거가 있는가?',
      summary: '향 인지 유형 분류의 산업 표준 자체가 세계적으로 부재. ISO 11035, ASTM E544는 향 측정 기준이지 인지 반응 유형화 기준 아님',
      verdict: '논문 게재 + 특허 출원으로 외부 검증 계획',
      color: 'blue',
    },
    {
      q: '데이터 신뢰성의 과학적 근거는?',
      summary: '검사-재검사 신뢰도(85% 목표) + 평가자 간 일치도(코헨의 카파 0.6 이상) + 조향사 교차 검증',
      verdict: 'R&D 1차년도 Step 1 핵심 과제로 편입',
      color: 'emerald',
    },
    {
      q: '성능지표 공인인증 평가기관 예산이 없는데?',
      summary: '전문가 자문 0.12억 + 학술/수당 0.1억으로 커버. 논문 peer review, KISTI 협력, 산학 연계 경로 활용',
      verdict: '별도 공인 평가 예산 보완 필요 인정',
      color: 'violet',
    },
    {
      q: '향 인지 유형과 구매 의도의 연관성은?',
      summary: 'RAG 기반으로 유형별 향수 설명을 다르게 생성. 인지 유형 ≠ 선호 유형 구분 필요',
      verdict: '핵심 비즈니스 모델 설명 완료',
      color: 'cyan',
    },
    {
      q: '위탁 비용 계상 오류 & 사업계획서 완성도',
      summary: '데이터 라벨링 외주, AI API 비용, 성능 검증 비용이 위탁용역비로 미분류',
      verdict: '예산 세목 전면 재검토 필요 (수정 가능)',
      color: 'rose',
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    amber: { bg: 'bg-amber-500/20', border: 'border-amber-500/30', text: 'text-amber-400' },
    blue: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-400' },
    emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400' },
    violet: { bg: 'bg-violet-500/20', border: 'border-violet-500/30', text: 'text-violet-400' },
    cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    rose: { bg: 'bg-rose-500/20', border: 'border-rose-500/30', text: 'text-rose-400' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-amber-400 text-sm">R&D PRESENTATION REVIEW</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">R&D 발표평가 후기</h2>
          <p className="text-gray-400 mb-6">3월 9일 발표 완료 &mdash; 진입장벽이 높음을 체감</p>

          {/* Key Insight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/40 mb-6"
          >
            <h3 className="text-lg font-semibold text-amber-400 mb-2">핵심 교훈</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              R&D는 확실히 진입장벽이 높다. 매우 기술적으로 접근하며, <span className="text-amber-400 font-semibold">연구 방법론</span>을 위주로 질문한다.
              사업성보다 과학적 타당성과 방법론의 엄밀함이 평가의 핵심이었다.
            </p>
          </motion.div>

          {/* Questions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {questions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`bg-dark-light/60 rounded-xl p-4 border ${colorClasses[item.color].border}`}
              >
                <h4 className={`text-sm font-semibold ${colorClasses[item.color].text} mb-2`}>
                  Q. {item.q}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed mb-2">{item.summary}</p>
                <div className={`${colorClasses[item.color].bg} rounded-lg px-3 py-1 inline-block`}>
                  <span className={`${colorClasses[item.color].text} text-xs font-medium`}>
                    &rarr; {item.verdict}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
