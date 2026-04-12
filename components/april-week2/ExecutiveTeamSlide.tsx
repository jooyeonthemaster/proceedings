'use client';

import { motion } from 'framer-motion';

const executives = [
  {
    name: '유재영',
    title: 'CEO · 영업팀',
    role: '회사 대표 / 영업 총괄',
    accent: 'border-indigo-700/50',
    label: 'text-indigo-300',
    duties: [
      'B2B 행사 영업',
      '기존 네트워크 기반 외주개발 영업',
      '신규 사업 영업',
    ],
    strength:
      '기존 네트워크가 넓어 인맥 기반 영업에 강점. 외주개발·B2B 행사 모두 인맥 채널이 첫 진입점.',
  },
  {
    name: '유선화',
    title: 'CMO · 마케팅팀',
    role: '악센트 마케팅 총괄',
    accent: 'border-rose-700/50',
    label: 'text-rose-300',
    duties: [
      '악센트 와우(생일 이벤트) 마케팅',
      '악센트 오프라인 마케팅',
      '악센트 온라인 마케팅',
    ],
    strength:
      '사실상 마케팅팀 리소스 대부분이 악센트 관련 업무에 투입되고 있는 상황 — 신사업으로 리소스 재배치 시 최대 변수.',
  },
  {
    name: '이동주',
    title: '재무 / 운영',
    role: '재무회계 + 상품 개발 + 매장 운영',
    accent: 'border-amber-700/50',
    label: 'text-amber-300',
    duties: [
      '재무회계 담당',
      '다양한 상품 개발',
      '상품 패키지 디자인',
      '매장 운영 관리',
    ],
    strength:
      'QA 역할 / B2B 행사 운영 총괄(포토부스 설치, 현장 운영 등)로도 활용 가능한 멀티 플레이어.',
  },
  {
    name: '김주연',
    title: 'CTO · 개발팀 / 신사업 기획',
    role: '기술 총괄 + 신사업 기획',
    accent: 'border-emerald-700/50',
    label: 'text-emerald-300',
    duties: [
      '악센트 서비스 개발 유지보수',
      '학원 AI 솔루션 설계 및 핵심 로직 개발',
      '전반적인 기술 방향 설정',
    ],
    strength:
      '기술 총괄과 신사업 기획을 동시에 담당. 학원 AI는 3월부터 김주연이 별도로 기획한 신사업.',
  },
];

export default function ExecutiveTeamSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center bg-slate-800/60 border border-slate-700/60 rounded-full px-5 py-1.5 mb-5">
            <span className="text-slate-300 text-sm font-medium tracking-wider">
              EXECUTIVES · 1-2 (a)
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">
            임원진 <span className="text-slate-500 font-mono">(4명)</span>
          </h2>
          <p className="text-slate-500">
            CEO 영업 · CMO 마케팅 · 재무/운영 · CTO 개발/신사업
          </p>
        </motion.div>

        {/* Executive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {executives.map((exec, i) => (
            <motion.div
              key={exec.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
              className={`bg-slate-900/60 rounded-2xl p-5 border ${exec.accent}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4 pb-3 border-b border-slate-800/60">
                <div>
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-2xl font-bold text-slate-200">{exec.name}</h3>
                    <span className={`text-xs ${exec.label} font-medium`}>{exec.title}</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{exec.role}</div>
                </div>
              </div>

              {/* Duties */}
              <div className="mb-3">
                <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-2">
                  담당 업무
                </div>
                <ul className="space-y-1.5">
                  {exec.duties.map((d, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="text-slate-600 mt-1 shrink-0">▸</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strength */}
              <div className="bg-slate-950/60 rounded-lg p-3 border border-slate-800/40">
                <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">
                  강점 / 활용 포인트
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">{exec.strength}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-5 text-center text-xs text-slate-600"
        >
          전체 인력 9명 中 임원진 4명 · 다음 슬라이드에서 직원/프리랜서 5명 + 팀 구조 확인
        </motion.div>
      </div>
    </div>
  );
}
