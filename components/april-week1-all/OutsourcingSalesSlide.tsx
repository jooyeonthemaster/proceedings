'use client';

import { motion } from 'framer-motion';

export default function OutsourcingSalesSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950/20 to-gray-950 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/70 mb-2">Section 05</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-3">
              외주 개발 영업, 본격 가동
            </h2>
            <p className="text-slate-400 text-base">
              지원사업 외 매출 채널을 적극 확장합니다
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-3"></div>
          </div>

          {/* Two columns */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/60 rounded-2xl p-7 border border-cyan-900/40"
            >
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 bg-cyan-900/40 border border-cyan-700/50 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-cyan-300 text-lg">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-slate-200">접근 방식</h3>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-cyan-700/50 pl-4">
                  <div className="text-slate-300 font-semibold text-sm mb-1">적극적 영업 전환</div>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    인바운드 대기 → 아웃바운드 제안 모드로 전환
                  </p>
                </div>
                <div className="border-l-2 border-cyan-700/50 pl-4">
                  <div className="text-slate-300 font-semibold text-sm mb-1">전사 협업 구조</div>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    영업·기획·개발 합동으로 견적·제안 응대 속도 단축
                  </p>
                </div>
                <div className="border-l-2 border-cyan-700/50 pl-4">
                  <div className="text-slate-300 font-semibold text-sm mb-1">레퍼런스 자산화</div>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Quiver AI · 뿌덕 · Q1 외주 정산 건을 영업 자료로 정리
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Q2 Dev KPI */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-950/30 to-slate-900/80 rounded-2xl p-7 border border-blue-700/40"
            >
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 bg-blue-900/40 border border-blue-700/50 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-300 text-lg">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-slate-200">2분기 개발팀 KPI</h3>
              </div>

              <div className="bg-slate-900/60 rounded-xl p-4 mb-4 border border-slate-800/60">
                <div className="text-xs text-blue-400/80 uppercase tracking-wider mb-2">신규 KPI</div>
                <div className="text-slate-200 font-semibold text-base mb-2">
                  외주 개발 영업 직접 참여
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  개발팀이 영업 미팅·기술 상담·견적 작성에 함께 들어가 적극적 사업 수주에 기여
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <span className="text-blue-400/80 mr-2">▸</span>
                  <span className="text-slate-400">기술 상담 응대 가능 인력 운영</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-blue-400/80 mr-2">▸</span>
                  <span className="text-slate-400">견적·범위 산정 직접 참여</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-blue-400/80 mr-2">▸</span>
                  <span className="text-slate-400">데모/PoC 즉시 대응 체계</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 bg-slate-900/40 rounded-xl p-5 border border-slate-800/50 text-center"
          >
            <p className="text-slate-300 text-sm">
              <span className="text-cyan-300 font-semibold">방향:</span>{' '}
              지원사업 의존도를 낮추고, 외주 매출을 안정적인 두 번째 축으로 키웁니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
