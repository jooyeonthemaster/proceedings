'use client';

import { motion } from 'framer-motion';

export default function TeamMembersSlide() {
  const members = [
    {
      name: '김정연',
      role: '영상 기획/촬영/편집',
      skills: ['영상 기획', '촬영', '편집'],
      highlight: '매우 유쾌, 드립 역량 탁월, 개그 트렌드 상당',
      color: 'cyan',
      emoji: '🎥',
      status: '정규',
    },
    {
      name: '류다혜',
      role: '미디어아트, 영상 편집',
      skills: ['미디어아트', '영상 편집'],
      highlight: '2026년부터 악센트 WOW 전담 예정',
      color: 'primary',
      emoji: '🎨',
      status: '정규',
    },
    {
      name: '김주희',
      role: '영상 촬영, 기타 정리 업무',
      skills: ['영상 촬영', '정리 업무'],
      highlight: '자잘한 업무 지원',
      color: 'purple',
      emoji: '📹',
      status: '정규',
    },
    {
      name: '김제연',
      role: '하드웨어 설계, 코딩, 3D 모델링',
      skills: ['하드웨어 설계', '코딩', '3D 모델링'],
      highlight: '김주연 친형, 기계공학 전공',
      color: 'amber',
      emoji: '🔧',
      status: '영입 예정',
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden p-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 text-sm mb-4">
            팀 소개
          </span>
          <h2 className="text-5xl font-bold text-white mb-3">
            네안데르 <span className="text-purple-400">팀원 4인</span>
          </h2>
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`rounded-xl p-5 border ${
                member.color === 'cyan' ? 'bg-cyan-500/10 border-cyan-500/30' :
                member.color === 'primary' ? 'bg-primary/10 border-primary/30' :
                member.color === 'purple' ? 'bg-purple-500/10 border-purple-500/30' :
                'bg-amber-500/10 border-amber-500/30'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Emoji Avatar */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl shrink-0 ${
                  member.color === 'cyan' ? 'bg-cyan-500/20' :
                  member.color === 'primary' ? 'bg-primary/20' :
                  member.color === 'purple' ? 'bg-purple-500/20' :
                  'bg-amber-500/20'
                }`}>
                  {member.emoji}
                </div>

                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      member.status === '정규'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}>
                      {member.status}
                    </span>
                  </div>

                  {/* Role */}
                  <p className={`text-sm mb-2 ${
                    member.color === 'cyan' ? 'text-cyan-400' :
                    member.color === 'primary' ? 'text-primary' :
                    member.color === 'purple' ? 'text-purple-400' :
                    'text-amber-400'
                  }`}>{member.role}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-0.5 bg-dark rounded text-xs text-gray-400 border border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Highlight */}
                  <p className="text-gray-300 text-sm">💡 {member.highlight}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 김제연 상세 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30"
        >
          <div className="flex items-start gap-4">
            <span className="text-2xl">📋</span>
            <div>
              <h4 className="text-amber-400 font-semibold mb-2">김제연 상세 정보</h4>
              <ul className="text-gray-300 text-sm space-y-1 grid grid-cols-2 gap-x-8">
                <li>• 기계공학 전공</li>
                <li>• 간단한 수준의 하드웨어 설계/코딩 역량</li>
                <li>• 3D 모델링 가능</li>
                <li>• 현재 미취업, 취준 준비 중</li>
                <li>• 현재 네안데르를 위해 잡다한 3D 모델링 등 도움 중</li>
                <li>• 이렇다 할 성과는 아직 없음</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
