'use client';

import { motion } from 'framer-motion';

export default function DevPlanSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-emerald-400 text-sm">DEV TEAM PLAN</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">개발팀 활동 계획</h2>
          <p className="text-gray-400 mb-8">지원사업 끝물 &rarr; 개발 중심으로 전환</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* 현재 상황 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-gray-600/50"
            >
              <h3 className="text-xl font-bold text-gray-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">&#x23F3;</span> 지금까지
              </h3>
              <div className="space-y-3">
                <div className="flex items-center bg-gray-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  <div className="text-gray-400 text-sm">지원사업 서류 작업 중심</div>
                </div>
                <div className="flex items-center bg-gray-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  <div className="text-gray-400 text-sm">개발 리소스 분산</div>
                </div>
                <div className="flex items-center bg-gray-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  <div className="text-gray-400 text-sm">서류 시즌 마무리 단계</div>
                </div>
              </div>
            </motion.div>

            {/* 앞으로 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-emerald-500/30"
            >
              <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">&#x1F680;</span> 앞으로
              </h3>
              <div className="space-y-3">
                <div className="flex items-center bg-emerald-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">미친듯이 개발</div>
                    <div className="text-gray-400 text-xs">다양한 소프트웨어 제품 개발 가속</div>
                  </div>
                </div>
                <div className="flex items-center bg-emerald-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">다양한 영업 채널 확보</div>
                    <div className="text-gray-400 text-xs">개발한 제품으로 적극적 영업 진행</div>
                  </div>
                </div>
                <div className="flex items-center bg-emerald-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">개발 중심 체제 전환</div>
                    <div className="text-gray-400 text-xs">서류에서 실행으로, 속도감 있게</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 핵심 메시지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/40"
          >
            <p className="text-gray-300 text-sm text-center leading-relaxed">
              지원사업 시즌이 거의 끝나가고 있습니다. 이제부터는 <span className="text-emerald-400 font-semibold">개발에 올인</span>해서
              다양한 소프트웨어를 만들고, 적극적으로 영업하겠습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
