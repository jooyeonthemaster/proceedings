'use client';

import { motion } from 'framer-motion';

export default function DevStatusSlide() {
  const projects = [
    { name: "잡매칭 플랫폼", status: "개발 완료", progress: 100, next: "PG 심사 진행" },
    { name: "디지털 화환 앱", status: "개발 완료", progress: 100, next: "PG 심사 진행" },
    { name: "안산 포토부스", status: "개발 완료", progress: 100, next: "정산 대기" },
    { name: "안산 지도 앱", status: "개발 완료", progress: 100, next: "정산 대기" },
    { name: "마케팅 앱", status: "개발 완료", progress: 100, next: "정산 대기" }
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 flex flex-col relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-green-400 pl-6 mb-8"
      >
        <h2 className="text-4xl font-bold text-white mb-2">개발 현황</h2>
        <p className="text-gray-400">12월 개발 건 90% 이상 처리 완료</p>
      </motion.div>

      <div className="flex-1 flex gap-8 items-center">
        {/* Left: Big Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-1/3 bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-10 text-center shadow-2xl flex flex-col justify-center h-80"
        >
          <h3 className="text-green-100 font-semibold mb-4">개발 완료율</h3>
          <div className="text-[8rem] font-black text-white leading-none tracking-tighter mb-4">
            90<span className="text-4xl">%+</span>
          </div>
          <p className="text-green-100 font-medium text-lg">
            모든 수주 개발건 처리 완료
          </p>
        </motion.div>

        {/* Right: Project List */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-gray-800 rounded-xl p-4 border border-gray-700"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{project.name}</span>
                  <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                    {project.status}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <span className="text-gray-400 text-sm">다음 단계: {project.next}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 bg-green-900 bg-opacity-30 border border-green-500 rounded-xl p-6"
      >
        <p className="text-green-300 text-center text-lg">
          <span className="font-bold">핵심 메시지:</span> 개발팀은 할 일을 다 했습니다.
          이제 <span className="text-white font-bold">정산</span>과 <span className="text-white font-bold">영업</span>에 집중할 시간입니다.
        </p>
      </motion.div>
    </div>
  );
}
