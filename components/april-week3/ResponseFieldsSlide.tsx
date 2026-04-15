'use client';

import { motion } from 'framer-motion';

const rows = [
  { field: '학원 위치 (구/동)', type: '텍스트+드롭다운', measure: '어느 지역 수요 집중? (대흥 vs 타지역)', priority: '필수' },
  { field: '규모 (학생 수)', type: '숫자 슬라이더', measure: '어느 규모 학원이 가장 민감한가', priority: '필수' },
  { field: '주요 과목', type: '체크박스 (영/수/국/과/사)', measure: '영어 외 과목 확장 우선순위', priority: '필수' },
  { field: '현재 시험지 제작 방식', type: '라디오 (수기/경쟁사/자체)', measure: '경쟁 제품 / 수기 비중 파악', priority: '필수' },
  { field: '관심 기능 (5개)', type: '체크박스', measure: '기능별 선호도 정량화 → 기능 Top 3', priority: '필수' },
  { field: 'CTA 선택', type: '무료체험 / 사전예약', measure: '가격 저항 지점 탐지', priority: '자동기록' },
  { field: '이름 A/B 분기', type: '노출 후보 5개 중 1', measure: '서비스 이름 확정 근거', priority: '자동기록' },
];

export default function ResponseFieldsSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-cyan-900/40 border border-cyan-700/40 rounded-full px-5 py-1.5 mb-5">
            <span className="text-cyan-300 text-sm font-medium tracking-wider">RESPONSE FIELDS · HYPOTHESIS MAP</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">응답 필드 = 가설 측정 매핑</h2>
          <p className="text-slate-500 text-sm">7개 필드 · 각 필드는 측정하고 싶은 구체 가설에 1:1 대응</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="bg-slate-900/60 rounded-2xl border border-slate-800/60 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-950/80">
                <th className="px-4 py-3 text-left font-medium text-slate-400 border-b border-slate-800/60">필드</th>
                <th className="px-4 py-3 text-left font-medium text-slate-400 border-b border-slate-800/60">입력 타입</th>
                <th className="px-4 py-3 text-left font-medium text-slate-400 border-b border-slate-800/60">측정하고 싶은 것</th>
                <th className="px-4 py-3 text-center font-medium text-slate-400 border-b border-slate-800/60">우선순위</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <motion.tr key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.06 }} className="border-t border-slate-800/40 hover:bg-slate-900/40">
                  <td className="px-4 py-3 text-slate-100 font-medium">{r.field}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{r.type}</td>
                  <td className="px-4 py-3 text-slate-300 text-xs">{r.measure}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${r.priority === '필수' ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-700/50' : 'bg-slate-800/60 text-slate-400 border border-slate-700/50'}`}>{r.priority}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}
