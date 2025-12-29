'use client';

import { motion } from 'framer-motion';

export default function PpudeokPlanSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500 bg-opacity-20 text-amber-400 text-sm mb-3">
            뿌덕 온라인
          </span>
          <h2 className="text-4xl font-bold text-white">
            📋 <span className="text-amber-400">구현 로드맵</span>
          </h2>
        </motion.div>

        {/* Phases Grid */}
        <div className="grid grid-cols-2 gap-5 mb-5">
          {/* Phase 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-bold">
                Phase 1
              </span>
              <span className="text-gray-400 text-sm">즉시</span>
            </div>
            <div className="space-y-3">
              <div className="bg-dark/50 rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-400 text-sm">결제 방식</span>
                </div>
                <p className="text-amber-400 font-bold">계좌이체</p>
              </div>
              <div className="bg-dark/50 rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-400 text-sm">프로세스</span>
                </div>
                <p className="text-gray-300 text-sm">계좌이체 확인 → 관리자 승인 → 배송</p>
              </div>
              <div className="bg-dark/50 rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-400 text-sm">목표</span>
                </div>
                <p className="text-white font-bold">빠른 서비스 검증</p>
              </div>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-primary/10 rounded-xl p-5 border border-primary/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">
                Phase 2
              </span>
              <span className="text-gray-400 text-sm">1개월 이내</span>
            </div>
            <div className="space-y-3">
              <div className="bg-dark/50 rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-400 text-sm">결제 방식</span>
                </div>
                <p className="text-primary font-bold">피지(PG) 연동</p>
              </div>
              <div className="bg-dark/50 rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-400 text-sm">기능</span>
                </div>
                <p className="text-gray-300 text-sm">간편 결제 포함 결제 모듈 구축</p>
              </div>
              <div className="bg-dark/50 rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-400 text-sm">목표</span>
                </div>
                <p className="text-white font-bold">사용자 편의성 향상</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 확장 계획 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-dark-light/50 rounded-xl p-5 border border-gray-700 mb-5"
        >
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">🚀</span> 확장 계획
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-400">•</span>
              <span>기존 악센트 ID 콘텐츠 <span className="text-amber-400 font-bold">온라인 사업화</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400">•</span>
              <span><span className="text-amber-400 font-bold">최애 사주 향수 추천</span> 등 모든 콘텐츠</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400">•</span>
              <span>온라인 체험 → 향수 배송 구조</span>
            </li>
          </ul>
        </motion.div>

        {/* 2026년 목표 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-amber-500/10 to-primary/10 rounded-xl p-5 border border-amber-500/30"
        >
          <h3 className="text-primary font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">🎯</span> 2026년 목표
          </h3>
          <div className="bg-dark/50 rounded-lg p-4 text-center">
            <p className="text-xl text-gray-300">
              뿌덕 온라인을 <span className="text-primary font-bold">적극적으로 추진</span>하여<br />
              <span className="text-amber-400 font-bold">캐시카우 보강</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
