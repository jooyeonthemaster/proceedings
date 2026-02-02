'use client';

import { motion } from 'framer-motion';

export default function MemeProductShowcaseSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center bg-pink-500/20 border border-pink-500/50 rounded-full px-4 py-1 mb-6">
            <span className="text-pink-400 text-sm">시그니처 상품 예시</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-8">두쫀쿠 디퓨저</h2>

          {/* 큰 이미지 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-[4/3] max-w-3xl mx-auto rounded-2xl overflow-hidden border border-pink-500/30 shadow-2xl shadow-pink-500/10"
          >
            <img
              src="/hf_20260201_180205_bdac1999-4fb0-4b9f-95ad-f419fa0ab77b.avif"
              alt="두쫀쿠 디퓨저 상세"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mt-6"
          >
            밈의 순간을 향으로 기억하다
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
