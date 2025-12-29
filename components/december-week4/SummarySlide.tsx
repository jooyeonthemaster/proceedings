'use client';

import { motion } from 'framer-motion';

export default function SummarySlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-20 text-primary text-sm mb-3">
            정리
          </span>
          <h2 className="text-4xl font-bold text-white">
            📊 2026년 네안데르 사업 체계 총정리
          </h2>
        </motion.div>

        {/* 장기 비전 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-4 border border-cyan-500/30 mb-4"
        >
          <h3 className="text-cyan-400 font-bold mb-3 text-center">🌟 장기 비전</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark/50 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span>🤖</span> 네안데르랩
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• 체험형 AI 창작집단</li>
                <li>• 유튜브 VS AI</li>
                <li>• 팀랩/디스트릭트형</li>
              </ul>
            </div>
            <div className="bg-dark/50 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span>🌿</span> 스팟
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• 공간 향기 디퓨저 브랜드</li>
                <li>• 핫플 콜라보</li>
                <li>• 온라인 판매</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 캐시카우 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/30 mb-4"
        >
          <h3 className="text-purple-400 font-bold mb-3 text-center">💰 캐시카우</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark/50 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span>🎨</span> 악센트 ID
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• AI 향수공방</li>
                <li>• 월 1,500만 목표</li>
                <li>• <span className="text-red-400">피규어 디퓨저 위기 대응 필요</span></li>
              </ul>
            </div>
            <div className="bg-dark/50 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span>🎂</span> 악센트 WOW
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• 생일 이벤트 향수공방</li>
                <li>• 월 1,500만 목표</li>
                <li>• 류다혜 전담 (2026~)</li>
                <li>• <span className="text-amber-400">가격 이탈 데이터 수집</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 신규 캐시카우 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-amber-500/10 to-primary/10 rounded-xl p-4 border border-amber-500/30"
        >
          <h3 className="text-amber-400 font-bold mb-3 text-center">🆕 신규 캐시카우</h3>
          <div className="bg-dark/50 rounded-lg p-4">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <span>🎁</span> 뿌덕 온라인
            </h4>
            <div className="grid grid-cols-4 gap-3 text-sm">
              <div className="bg-amber-500/10 rounded p-2 text-center">
                <p className="text-gray-400 text-xs mb-1">콘텐츠</p>
                <p className="text-amber-400 font-bold">악센트 ID 온라인</p>
              </div>
              <div className="bg-amber-500/10 rounded p-2 text-center">
                <p className="text-gray-400 text-xs mb-1">서비스</p>
                <p className="text-amber-400 font-bold">배송 서비스</p>
              </div>
              <div className="bg-amber-500/10 rounded p-2 text-center">
                <p className="text-gray-400 text-xs mb-1">결제</p>
                <p className="text-amber-400 font-bold">계좌이체 → PG</p>
              </div>
              <div className="bg-amber-500/10 rounded p-2 text-center">
                <p className="text-gray-400 text-xs mb-1">역할</p>
                <p className="text-primary font-bold">캐시카우 보강</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
