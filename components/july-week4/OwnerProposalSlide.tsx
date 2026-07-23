'use client';

import { motion } from 'framer-motion';

const roles = [
  { title: '보드 운영', desc: '우선순위 보드를 매일 갱신 — 진행/막힘/완료를 실시간 반영' },
  { title: '주간 목표', desc: '매주 월요일 이번 주 실행 3건 확정 — 금요일에 결과 공유' },
  { title: '마감 관리', desc: '담당자 마감 임박·초과 시 직접 챙긴다 — 미루면 오너가 묻는다' },
  { title: '주간 리포트', desc: '매주 금요일 실행·성과(유입/신청/전환) 요약 공유' },
];

const powers = [
  '스모트 관련 업무의 우선순위 조정 요청권 — 다른 업무와 충돌 시 회의에서 조정',
  '팀원 리소스 요청권 — 콘텐츠 제작·개발 지원을 보드 기준으로 요청',
  '실행안 드랍 권한 — 안 되는 건 빨리 접고 되는 것에 집중',
];

export default function OwnerProposalSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-gray-950 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-7">
          <div className="inline-flex items-center bg-cyan-900/40 border border-cyan-700/40 rounded-full px-5 py-1.5 mb-4">
            <span className="text-cyan-300 text-sm font-medium tracking-wider">제안 ① · 오너십</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2">스모트 마케팅 전담 오너를 정하자</h2>
          <p className="text-slate-500">&ldquo;다 같이 하자&rdquo;는 지난 2주간 &ldquo;아무도 안 한다&rdquo;였다 — 책임을 한 사람에게 모은다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} className="bg-slate-900/60 rounded-2xl p-6 border border-cyan-700/50">
            <h3 className="text-lg font-bold text-cyan-300 mb-4">📋 오너의 역할 4가지</h3>
            <div className="space-y-3">
              {roles.map((r, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 shrink-0 rounded-md bg-cyan-900/50 border border-cyan-700/50 flex items-center justify-center text-[10px] font-mono font-bold text-cyan-300">{i + 1}</div>
                  <div>
                    <div className="text-sm font-semibold text-slate-100">{r.title}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-slate-900/60 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-bold text-slate-200 mb-4">🔑 오너에게 주는 권한</h3>
            <ul className="space-y-3 mb-5">
              {powers.map((p, i) => (
                <li key={i} className="text-sm text-slate-300 leading-relaxed flex gap-2">
                  <span className="text-cyan-500 shrink-0">→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="bg-cyan-950/40 rounded-xl p-4 border border-cyan-700/40">
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="text-cyan-300 font-semibold">전제:</span> 오너가 정해지면 나머지는 오너의 요청에 우선 협조한다.
                오너 혼자 다 하라는 게 아니라, <span className="text-slate-200">끌고 가는 사람을 명확히 하자</span>는 것.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-cyan-950/40 rounded-2xl p-5 border border-cyan-600/40 text-center">
          <p className="text-slate-200 leading-relaxed">
            <span className="text-cyan-300 font-bold">오늘 이 자리에서 오너를 확정한다.</span> 후보·겸직 범위·본업 조정까지 포함해 결론 낸다 — 미루면 이 회의도 지난 회의와 같아진다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
