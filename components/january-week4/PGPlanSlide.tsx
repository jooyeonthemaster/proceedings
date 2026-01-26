'use client';

import { motion } from 'framer-motion';

export default function PGPlanSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              Payment Gateway
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              PG 신청 계획
            </h2>
          </div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-5xl">💳</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">PG 연동 신청</h3>
                <p className="text-amber-400 mt-1">결제 시스템 구축</p>
              </div>
            </div>

            {/* Timeline Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark/50 rounded-xl p-5 border border-amber-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-amber-400 font-bold text-lg">PLAN A</span>
                  <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full">
                    기본 계획
                  </span>
                </div>
                <div className="text-white font-medium mb-2">3월부터 진행</div>
                <p className="text-gray-400 text-sm">
                  지원사업 마무리 후 본격적으로 PG 신청 절차 진행
                </p>
              </div>

              <div className="bg-dark/50 rounded-xl p-5 border border-cyan-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-cyan-400 font-bold text-lg">PLAN B</span>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    대안
                  </span>
                </div>
                <div className="text-white font-medium mb-2">조기 진행 가능</div>
                <p className="text-gray-400 text-sm">
                  기능 구현이 시급하다고 판단되면 일정 앞당길 수 있음
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Point */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-lg">핵심 메시지</div>
                <div className="text-gray-300">
                  결국 <span className="text-emerald-400 font-bold">개발이 딜레이되는 일은 절대 없을 것</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Schedule Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-center"
          >
            <span className="text-gray-500 text-sm">
              상황에 따라 유연하게 일정 조정 가능
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
