'use client';

import { motion } from 'framer-motion';

export default function Q2RoadmapSlide() {
  const tracks = [
    {
      title: '지원사업',
      color: 'violet',
      items: [
        { label: '서울혁신챌린지 발표평가 통과', tag: '4월' },
        { label: '하반기 공고 라인업 정리', tag: '4~5월' },
        { label: '재도전·신규 트랙 제안서 작성', tag: '5~6월' },
      ],
    },
    {
      title: '외주 영업',
      color: 'cyan',
      items: [
        { label: '영업·개발 합동 응대 체계 셋업', tag: '4월' },
        { label: '레퍼런스 자료 패키징', tag: '4월' },
        { label: '아웃바운드 제안 본격화', tag: '5~6월' },
      ],
    },
    {
      title: '뿌덕 시즌 4',
      color: 'rose',
      items: [
        { label: '기획 킥오프 + 개발팀 합류', tag: '4월' },
        { label: '컨셉·범위·일정 정렬', tag: '4~5월' },
        { label: '프로토타입 빌드', tag: '5~6월' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Section 07</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-3">
              2분기 로드맵
            </h2>
            <p className="text-slate-400 text-base">3개 트랙 동시 진행</p>
            <div className="h-1 w-24 bg-gradient-to-r from-slate-500 to-slate-700 mx-auto mt-3"></div>
          </div>

          {/* Tracks */}
          <div className="grid md:grid-cols-3 gap-5">
            {tracks.map((track, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.15 }}
                className={`bg-slate-900/60 rounded-2xl p-6 border border-${track.color}-900/40`}
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold text-slate-200">{track.title}</h3>
                  <span className={`text-${track.color}-400/70 text-xs`}>● Track {idx + 1}</span>
                </div>

                <div className="space-y-4">
                  {track.items.map((item, i) => (
                    <div key={i} className="relative pl-6">
                      <div
                        className={`absolute left-0 top-1.5 w-2 h-2 rounded-full bg-${track.color}-500/70`}
                      ></div>
                      {i < track.items.length - 1 && (
                        <div
                          className={`absolute left-[3px] top-3.5 w-px h-8 bg-${track.color}-900/40`}
                        ></div>
                      )}
                      <div className="text-slate-300 text-sm font-medium">{item.label}</div>
                      <div className={`text-${track.color}-400/60 text-xs mt-0.5`}>{item.tag}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom milestone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 grid grid-cols-3 gap-4"
          >
            <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-800/60 text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wider">4월</div>
              <div className="text-slate-300 text-sm font-semibold mt-1">발표평가 + 킥오프</div>
            </div>
            <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-800/60 text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wider">5월</div>
              <div className="text-slate-300 text-sm font-semibold mt-1">영업 본격화</div>
            </div>
            <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-800/60 text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wider">6월</div>
              <div className="text-slate-300 text-sm font-semibold mt-1">중간 점검 / S4 프로토</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
