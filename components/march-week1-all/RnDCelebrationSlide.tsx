'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Confetti() {
  const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#FF69B4'];
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: 4 + Math.random() * 8,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ y: -20, x: `${piece.x}vw`, opacity: 1, rotate: 0 }}
          animate={{
            y: '110vh',
            rotate: piece.rotation + 720,
            opacity: [1, 1, 0.8, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute"
          style={{
            width: piece.size,
            height: piece.size * 0.6,
            backgroundColor: piece.color,
            borderRadius: '2px',
          }}
        />
      ))}
    </div>
  );
}

function FireworkBurst({ x, y, delay }: { x: number; y: number; delay: number }) {
  const particles = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    return {
      id: i,
      targetX: Math.cos(angle) * 80,
      targetY: Math.sin(angle) * 80,
    };
  });

  const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#FF69B4'];

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: 6,
            height: 6,
            backgroundColor: colors[p.id % colors.length],
          }}
          initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.5, 0],
            x: [0, p.targetX],
            y: [0, p.targetY],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.2,
            delay: delay,
            repeat: Infinity,
            repeatDelay: 4,
            ease: 'easeOut',
          }}
        />
      ))}
    </>
  );
}

export default function RnDCelebrationSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8 relative overflow-hidden">
      <Confetti />

      <div className="absolute inset-0 pointer-events-none">
        <FireworkBurst x={15} y={20} delay={0} />
        <FireworkBurst x={85} y={25} delay={1.5} />
        <FireworkBurst x={50} y={15} delay={3} />
        <FireworkBurst x={25} y={70} delay={2} />
        <FireworkBurst x={75} y={65} delay={0.8} />
      </div>

      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1) 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="max-w-5xl w-full text-center relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-yellow-500/50">
              <span className="text-6xl">&#127942;</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/50 rounded-full px-6 py-2 mb-6">
            <span className="text-emerald-400 font-medium">2026 R&D 연구개발 사업 | 최대 2억원</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 mb-6">
            1차 서류 합격!
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-2xl text-gray-300 mb-8"
          >
            최대 2억원 규모 R&D 사업에 서류 합격했습니다
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          <div className="bg-dark-light/70 rounded-xl p-6 border border-amber-500/30 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-amber-400 mb-2">다음 단계</h3>
            <p className="text-white text-lg font-semibold">발표 평가 준비</p>
            <p className="text-gray-400 text-sm mt-1">최종 합격까지 한 걸음 더!</p>
          </div>
          <div className="bg-dark-light/70 rounded-xl p-6 border border-emerald-500/30 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-emerald-400 mb-2">KPI 달성</h3>
            <p className="text-white text-lg font-semibold">지원금 목표 50% 달성</p>
            <p className="text-gray-400 text-sm mt-1">2억 목표 중 2억짜리 1차 통과</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.7, 1] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          className="text-yellow-400/80 text-sm mt-8"
        >
          &#9734; 모두의 노력 덕분입니다! 축하합니다! &#9734;
        </motion.p>
      </div>
    </div>
  );
}
