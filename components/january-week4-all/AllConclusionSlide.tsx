'use client';

import { motion } from 'framer-motion';

export default function AllConclusionSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-6 py-2 mb-8">
            <span className="text-emerald-400 font-medium">CONCLUSION</span>
          </div>

          {/* Main Message */}
          <h1 className="text-5xl font-bold text-white mb-8">
            우리가 배워야 할 <span className="text-emerald-400">태도</span>
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-10"></div>

          {/* Key Takeaways */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/50 rounded-xl p-6 border border-emerald-500/30"
            >
              <div className="text-4xl mb-4">💡</div>
              <div className="text-lg font-bold text-white mb-2">긍정적 사고</div>
              <div className="text-gray-400 text-sm">
                문제가 생기면
                <br />
                &ldquo;어떻게 해결하지?&rdquo;
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/50 rounded-xl p-6 border border-cyan-500/30"
            >
              <div className="text-4xl mb-4">🔍</div>
              <div className="text-lg font-bold text-white mb-2">자기 주도 탐구</div>
              <div className="text-gray-400 text-sm">
                다양한 리소스로
                <br />
                방법을 찾아가기
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/50 rounded-xl p-6 border border-purple-500/30"
            >
              <div className="text-4xl mb-4">🛡️</div>
              <div className="text-lg font-bold text-white mb-2">강한 멘탈</div>
              <div className="text-gray-400 text-sm">
                비판에 상처받지 않고
                <br />
                성장의 기회로
              </div>
            </motion.div>
          </div>

          {/* Quote Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20 border-2 border-primary/50 rounded-2xl p-8 mb-8"
          >
            <div className="text-gray-300 text-lg mb-4">
              &ldquo;모두가 이런 마인드일 수는 없겠지만,
              <br />
              우리가 이런 태도를 <span className="text-primary font-bold">배워가면 좋겠습니다.</span>&rdquo;
            </div>
            <div className="text-xl font-bold text-white">
              김제연 수석의 의지는 <span className="text-emerald-400">대단합니다.</span>
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400"
          >
            <div className="text-lg mb-2">
              나도 새로운 시도를 많이 하고, 열정만큼은 누구에게도 뒤지지 않는다고 생각했습니다.
            </div>
            <div className="text-emerald-400 font-medium text-xl">
              그런데 제연이의 열정을 보며 영감을 받은 하루였습니다. 🙏
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
