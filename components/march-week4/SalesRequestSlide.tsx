'use client';

import { motion } from 'framer-motion';

export default function SalesRequestSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-orange-400 text-sm">SALES REQUEST</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">영업팀 협업 요청</h2>
          <p className="text-gray-400 mb-8">대학 축제 시즌 &mdash; AI 포토부스 영업 본격 가동</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* 축제 시즌 영업 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-orange-500/30"
            >
              <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">&#x1F389;</span> 축제·행사 시즌 돌입
              </h3>

              <div className="space-y-3">
                <div className="flex items-start bg-orange-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0 animate-pulse"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">대학 축제 시즌 임박</div>
                    <div className="text-gray-400 text-xs">4~6월 대학교 축제 집중 시기</div>
                  </div>
                </div>

                <div className="flex items-start bg-orange-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0 animate-pulse"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">다양한 축제·행사 컨택 요청</div>
                    <div className="text-gray-400 text-xs">최대한 많은 행사에 AI 포토부스 제안</div>
                  </div>
                </div>

                <div className="flex items-start bg-orange-500/10 rounded-lg p-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0 animate-pulse"></div>
                  <div>
                    <div className="text-white text-sm font-semibold">공공기관·지자체 행사도 타겟</div>
                    <div className="text-gray-400 text-xs">문화재단, 구청, 축제 조직위 등</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 실적 & 근거 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-6 border border-amber-500/30"
            >
              <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">&#x2B50;</span> 이미 검증된 실적
              </h3>

              {/* 동대문 문화재단 */}
              <div className="bg-amber-500/10 rounded-xl p-4 mb-4">
                <div className="text-amber-400 text-xs font-bold mb-2">LATEST</div>
                <div className="text-white text-sm font-semibold mb-1">동대문 문화재단 &mdash; 이인경 주임</div>
                <div className="text-gray-400 text-xs mb-3">최근 연락 &rarr; 행사 3건 모두 포토부스 도입 확정</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-dark/60 rounded-lg p-2 text-center">
                    <div className="text-amber-400 text-sm font-bold">4월</div>
                    <div className="text-gray-400 text-xs">행사</div>
                  </div>
                  <div className="bg-dark/60 rounded-lg p-2 text-center">
                    <div className="text-amber-400 text-sm font-bold">6월</div>
                    <div className="text-gray-400 text-xs">행사</div>
                  </div>
                  <div className="bg-dark/60 rounded-lg p-2 text-center">
                    <div className="text-amber-400 text-sm font-bold">9월</div>
                    <div className="text-gray-400 text-xs">행사</div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-500/10 rounded-lg p-3">
                <p className="text-gray-300 text-sm">
                  알게 모르게 <span className="text-emerald-400 font-semibold">정말 많은 행사</span>에 AI 포토부스를 넣고 있음.
                  이제는 <span className="text-emerald-400 font-semibold">압도적인 퀄리티</span>의 포토부스.
                </p>
              </div>
            </motion.div>
          </div>

          {/* 핵심 메시지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-orange-500/10 rounded-xl p-5 border border-orange-500/40"
          >
            <p className="text-gray-300 text-sm text-center leading-relaxed">
              우리 AI 포토부스는 이제 <span className="text-orange-400 font-semibold">매우 압도적인 퀄리티</span>입니다.
              영업팀에서 축제·행사 적극 컨택 + 마케팅팀에서 <span className="text-rose-400 font-semibold">메타 광고 &amp; 활성화 방안</span>을
              함께 밀어주시면 폭발적인 성과를 낼 수 있습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
