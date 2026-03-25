'use client';

import { motion } from 'framer-motion';

export default function MarketingRequestSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-rose-500/20 border border-rose-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-rose-400 text-sm">MARKETING REQUEST</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">마케팅팀 협업 요청</h2>
          <p className="text-gray-400 mb-8">AI 포토부스 광고 + 웹 개발 외주 마케팅</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* AI 포토부스 광고 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-rose-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-rose-500/20 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-xl">&#x1F4F8;</span>
                </div>
                <h3 className="text-xl font-bold text-rose-400">AI 포토부스 광고 캠페인</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start bg-rose-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">AI 포토부스 로봇 판매 &amp; 렌탈</div>
                    <div className="text-gray-400 text-xs">광고 캠페인 기획 요청</div>
                  </div>
                </div>

                <div className="flex items-start bg-rose-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">메타(Meta) 광고 등 다양한 채널</div>
                    <div className="text-gray-400 text-xs">SNS 광고 + 활성화 방안 기획</div>
                  </div>
                </div>

                <div className="flex items-start bg-emerald-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">자체 사이트 &amp; 접수 폼 개발 가능</div>
                    <div className="text-gray-400 text-xs">필요시 개발팀에서 바로 제작</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 웹 개발 외주 마케팅 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-blue-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-xl">&#x1F310;</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400">웹사이트 개발 외주 마케팅</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start bg-blue-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">크몽 대신 자체 사이트로 전환</div>
                    <div className="text-gray-400 text-xs">견적 접수 &rarr; 상담 &rarr; 계약 플로우</div>
                  </div>
                </div>

                <div className="flex items-start bg-blue-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">개발 단가 명확하게 설정</div>
                    <div className="text-gray-400 text-xs">투명한 가격 체계 수립 필요</div>
                  </div>
                </div>

                <div className="flex items-start bg-blue-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">컨셉 하나 잡아서 접근</div>
                    <div className="text-gray-400 text-xs">차별화된 브랜딩 + 마케팅 전략</div>
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
            className="bg-rose-500/10 rounded-xl p-5 border border-rose-500/40"
          >
            <p className="text-gray-300 text-sm text-center leading-relaxed">
              마케팅팀에서 <span className="text-rose-400 font-semibold">AI 포토부스 광고 캠페인</span>과
              <span className="text-blue-400 font-semibold"> 웹 개발 외주 마케팅</span> 기획을 진행해주시면,
              개발팀에서 필요한 사이트와 접수 폼을 바로 만들 수 있습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
