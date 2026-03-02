'use client';

import { motion } from 'framer-motion';

export default function LowPriceReportSlide() {
  const products = [
    { name: '미니향수 5ml', price: '12,000원', margin: '87.8%', bep: '10.0%' },
    { name: '미니사쉐 세트', price: '8,000원', margin: '92.8%', bep: '5.9%' },
    { name: '엽서+스티커 세트', price: '5,000원', margin: '87.8%', bep: '3.0%' },
  ];

  const alternatives = [
    { no: 1, name: '대규모 이벤트 한정 시범', desc: '미구매율 높은 이벤트에서만 테스트' },
    { no: 2, name: '이질적 카테고리 상품 테스트', desc: '엽서+스티커 등 비향수 상품으로 이탈 ≈ 0%' },
    { no: 3, name: 'Add-on 형태 설계', desc: '고가 구매자에게만 저가 옵션 → 카니발 차단' },
    { no: 4, name: '미구매자 현장 설문', desc: '가격 vs 관심도 문제 직접 확인' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-rose-500/20 border border-rose-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-rose-400 text-sm">PRICING ANALYSIS</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">저가 이벤트 상품 출시 검토</h2>
          <p className="text-gray-400 mb-6">CFO 이동주 | 현재 조건에서 저가 상품 단독 출시 = 권장하지 않음</p>

          {/* Current Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-light/60 rounded-xl p-5 border border-gray-700 mb-6"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-white">585명</p>
                <p className="text-gray-400 text-sm">전체 방문자</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-400">67.2%</p>
                <p className="text-gray-400 text-sm">구매 전환율</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-rose-400">192명</p>
                <p className="text-gray-400 text-sm">미구매자 (32.8%)</p>
              </div>
            </div>
          </motion.div>

          {/* Key Finding - Red Alert */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-red-500/10 rounded-xl p-5 border border-red-500/40 mb-6"
          >
            <h3 className="text-lg font-semibold text-red-400 mb-2">카니발라이제이션 분석 결과</h3>
            <p className="text-gray-300 text-sm mb-3">
              저가 상품 도입 시 미구매자 전환(+)보다 기존 구매자 이탈(-)이 구조적으로 초과
            </p>
            <div className="bg-dark-light/50 rounded-lg p-3">
              <p className="text-gray-400 text-sm">
                <span className="text-emerald-400">(+) 미구매자 전환:</span> 19명 x 25% = 5명 = <span className="text-emerald-400">+52,680원</span>
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-red-400">(-) 고가 이탈 손실:</span> 40명 x 15% = 6명 = <span className="text-red-400">-94,992원</span>
              </p>
              <div className="border-t border-gray-600 mt-2 pt-2">
                <p className="text-white font-bold">회당 순 추가: <span className="text-red-400">-42,312원 (적자)</span></p>
              </div>
            </div>
          </motion.div>

          {/* Products Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-light/40 rounded-xl p-5 border border-gray-700 mb-6"
          >
            <h3 className="text-white font-semibold mb-3">검토 상품 3안 (손익분기 이탈률)</h3>
            <div className="space-y-2">
              {products.map((p, i) => (
                <div key={i} className="flex items-center justify-between bg-dark-light/40 rounded-lg p-3">
                  <div>
                    <span className="text-white text-sm font-medium">{p.name}</span>
                    <span className="text-gray-500 text-xs ml-2">{p.price}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-emerald-400 text-sm">공헌이익 {p.margin}</span>
                    <span className="text-red-400 text-sm">BEP 이탈 {p.bep}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-red-400/80 text-xs mt-3">* 세 상품 모두 극소수 이탈(3~10%)만으로 즉시 적자 — 현실적 통제 불가능</p>
          </motion.div>

          {/* Alternatives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-white font-semibold mb-3">권장 대안 4가지</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {alternatives.map((a) => (
                <div key={a.no} className="bg-dark-light/40 rounded-lg p-4 border border-emerald-500/20">
                  <div className="flex items-center mb-1">
                    <span className="bg-emerald-500/20 text-emerald-400 w-6 h-6 rounded-full text-sm flex items-center justify-center mr-2">{a.no}</span>
                    <p className="text-white text-sm font-semibold">{a.name}</p>
                  </div>
                  <p className="text-gray-400 text-xs ml-8">{a.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
