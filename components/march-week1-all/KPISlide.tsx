'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function AnimatedProgress({ target, delay }: { target: number; delay: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= target) {
            clearInterval(interval);
            return target;
          }
          return prev + 1;
        });
      }, 20);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [target, delay]);

  return (
    <div className="relative w-full">
      <div className="w-full h-6 bg-dark/60 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.05 }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-sm font-bold">{progress}%</span>
      </div>
    </div>
  );
}

export default function KPISlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-teal-500/20 border border-teal-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-teal-400 text-sm">KPI TRACKER</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">지원사업팀 KPI</h2>
          <p className="text-gray-400 mb-10">총 지원금 2억원 달성 목표</p>

          <div className="max-w-3xl mx-auto">
            {/* Main KPI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-light/60 rounded-2xl p-8 border border-teal-500/30 mb-8"
            >
              <div className="text-center mb-6">
                <h3 className="text-lg text-gray-400 mb-2">지원금 목표 달성률</h3>
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
                  50%
                </div>
                <p className="text-gray-500 text-sm">목표 2억원 중 2억원짜리 R&D 1차 합격</p>
              </div>

              <AnimatedProgress target={50} delay={0.5} />

              <div className="flex justify-between mt-3 text-xs text-gray-500">
                <span>0원</span>
                <span>1억원</span>
                <span>2억원 (목표)</span>
              </div>
            </motion.div>

            {/* Logic Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/20 text-center"
            >
              <p className="text-emerald-400 text-sm font-medium mb-1">
                &#128161; 2억원짜리 하나 최종 합격하면 바로 100% 달성!
              </p>
              <p className="text-gray-500 text-sm">
                1차 서류 합격 = 50% | 발표 평가 최종 합격 = 100% 달성
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
