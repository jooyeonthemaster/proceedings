'use client';

import { motion } from 'framer-motion';

export default function PpudeokUpdateSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-cyan-400 text-sm">PPUDEOK SITE</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">뿌덕 사이트 개선 현황</h2>
          <p className="text-gray-400 mb-8">피드백 순차 반영 &amp; 빠른 배포 진행 중</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* 진행 현황 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-cyan-500/30"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4">개선 작업 진행 중</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">사이트 개선 작업 지속</div>
                    <div className="text-gray-400 text-xs mt-1">뿌덕 사이트 관련 개선 작업은 계속 진행 중</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">피드백 순차 반영</div>
                    <div className="text-gray-400 text-xs mt-1">받은 피드백을 순서대로 개발에 반영</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">최대한 빠르게 배포</div>
                    <div className="text-gray-400 text-xs mt-1">반영 완료된 건은 즉시 배포</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 피드백 요청 프로세스 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-amber-500/30"
            >
              <h3 className="text-xl font-bold text-amber-400 mb-4">수정 요청 프로세스 통일</h3>

              <div className="bg-amber-500/10 rounded-xl p-4 mb-4">
                <p className="text-gray-300 text-sm mb-3">
                  사이트 수정 관련 연락이 <span className="text-amber-400 font-semibold">여러 곳에서</span> 오고 있어서,
                  아래 노션 페이지에 <span className="text-amber-400 font-semibold">통일해서</span> 올려주세요.
                </p>
                <div className="bg-dark/60 rounded-lg p-3 border border-amber-500/20">
                  <div className="text-amber-400 text-xs font-bold mb-1">Notion Link</div>
                  <div className="text-gray-300 text-xs break-all">
                    notion.so/neander/2fb9d069...
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <span className="text-emerald-400 mr-2">&#x2714;</span>
                  <span className="text-gray-300">노션에 수정 요청 업로드</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-emerald-400 mr-2">&#x2714;</span>
                  <span className="text-gray-300">개발팀에서 반영 후 답글로 완료 알림</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-emerald-400 mr-2">&#x2714;</span>
                  <span className="text-gray-300">여러 채널 대신 한 곳에서 관리</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 핵심 메시지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-cyan-500/10 rounded-xl p-5 border border-cyan-500/40"
          >
            <p className="text-gray-300 text-sm text-center leading-relaxed">
              수정 요청은 <span className="text-cyan-400 font-semibold">노션 페이지 하나로 통일</span>해주시면,
              반영 후 답글로 알려드리겠습니다. 빠르고 정확한 대응을 위해 협조 부탁드립니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
