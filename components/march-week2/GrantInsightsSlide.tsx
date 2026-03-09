'use client';

import { motion } from 'framer-motion';

export default function GrantInsightsSlide() {
  const waiting = [
    { name: '초창패', entity: '일해라컴퍼니' },
    { name: '초창패', entity: '와작홈즈' },
    { name: '관광벤처 예비', entity: '김제연' },
    { name: '관광벤처 초기', entity: '일해라컴퍼니' },
    { name: '관광벤처 초기', entity: '와작홈즈' },
    { name: '관광벤처 성장', entity: '네안데르' },
    { name: '예술경영 초기', entity: '일해라컴퍼니' },
    { name: '예술경영 초기', entity: '와작홈즈' },
    { name: '예술경영 초기', entity: '네안데르' },
  ];

  const upcoming = [
    { name: '창중대 초기', entity: '일해라컴퍼니' },
    { name: '창중대 초기', entity: '와작홈즈' },
    { name: '창중대 초기', entity: '네안데르' },
    { name: '서울형 R&D 혁신 챌린지', entity: '-' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-violet-500/20 border border-violet-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-violet-400 text-sm">GRANT INSIGHTS</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">지원사업 인사이트 & 파이프라인</h2>
          <p className="text-gray-400 mb-6">이번 주면 서류 작업 거의 마무리 &mdash; 이번주까지만 화이팅!</p>

          {/* 핵심 인사이트 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-violet-500/10 rounded-xl p-5 border border-violet-500/40 mb-6"
          >
            <h3 className="text-lg font-semibold text-violet-400 mb-3">합격/불합격 패턴 분석</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-dark-light/50 rounded-lg p-3">
                <div className="text-white text-sm font-semibold mb-1">업력 &middot; 매출 규모</div>
                <p className="text-gray-400 text-xs">예비 단계가 아닌 이상 업력과 매출 규모가 꽤 중요한 지표. 동일 아이템이라도 (주)네안데르는 합격, 일컴/와작홈즈는 광탈</p>
              </div>
              <div className="bg-dark-light/50 rounded-lg p-3">
                <div className="text-white text-sm font-semibold mb-1">법인 vs 개인사업자</div>
                <p className="text-gray-400 text-xs">법인사업자가 개인사업자 대비 서류 통과율이 높음. 심사 시 사업 안정성 지표로 작용하는 것으로 추정</p>
              </div>
              <div className="bg-dark-light/50 rounded-lg p-3">
                <div className="text-white text-sm font-semibold mb-1">사업계획서 차이 &lt; 기업 스펙</div>
                <p className="text-gray-400 text-xs">사업 아이템이나 계획서 퀄리티의 차이보다 기업 자체의 스펙(업력, 매출, 형태)이 결정적</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 결과 대기 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-2xl p-5 border border-amber-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-amber-400">&#9203;</span>
                </div>
                <h3 className="text-lg font-bold text-amber-400">결과 대기 중 ({waiting.length}건)</h3>
              </div>
              <div className="space-y-2">
                {waiting.map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-amber-500/5 rounded-lg px-3 py-2">
                    <span className="text-white text-sm">{item.name}</span>
                    <span className="text-amber-400 text-xs">{item.entity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 미지원 예정 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/60 rounded-2xl p-5 border border-blue-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-400">&#128221;</span>
                </div>
                <h3 className="text-lg font-bold text-blue-400">지원 예정 ({upcoming.length}건)</h3>
              </div>
              <div className="space-y-2">
                {upcoming.map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-blue-500/5 rounded-lg px-3 py-2">
                    <span className="text-white text-sm">{item.name}</span>
                    <span className="text-blue-400 text-xs">{item.entity}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-blue-500/10 rounded-lg p-3">
                <p className="text-gray-400 text-xs">
                  사실상 거의 다 마쳤고, 이번주면 사업계획서 서류 작업은 거의 마무리 될 예정
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
