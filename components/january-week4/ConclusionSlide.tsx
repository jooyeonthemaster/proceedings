'use client';

import { motion } from 'framer-motion';

export default function ConclusionSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center bg-primary/20 border border-primary/50 rounded-full px-6 py-2 mb-8">
            <span className="text-primary font-medium">CONCLUSION</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl font-bold text-white mb-8">
            1월 4주차 회의 결론
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-primary to-emerald-500 mx-auto mb-12"></div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-6"
            >
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-white mb-2">사업계획서</h3>
              <p className="text-gray-400 text-sm mb-3">18건 남음 / 34일</p>
              <div className="text-orange-400 font-bold">2월 뒤지게 바쁨</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6"
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-2">개발</h3>
              <p className="text-gray-400 text-sm mb-3">V2 금일 완료 / V3 기획</p>
              <div className="text-cyan-400 font-bold">딜레이 절대 없음</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6"
            >
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-xl font-bold text-white mb-2">김제연</h3>
              <p className="text-gray-400 text-sm mb-3">예상 뛰어넘는 성장</p>
              <div className="text-purple-400 font-bold">배울 점 多</div>
            </motion.div>
          </div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-primary/10 via-emerald-500/10 to-primary/10 border-2 border-primary/50 rounded-2xl p-8"
          >
            <div className="text-4xl font-bold text-white mb-4">
              아무리 바빠도
              <span className="text-primary"> 개발은 계속된다</span>
            </div>
            <p className="text-gray-300 text-lg">
              지원사업과 개발, 두 마리 토끼를 모두 잡는다.
              <br />
              우리는 네안데르니까.
            </p>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <div className="text-gray-500 text-sm">
              2026년 1월 26일 | 네안데르 개발팀
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
