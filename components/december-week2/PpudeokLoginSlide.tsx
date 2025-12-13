'use client';

import { motion } from 'framer-motion';

export default function PpudeokLoginSlide() {
  const loginFeatures = [
    {
      title: "회원가입 시스템",
      items: ["이메일 기반 가입", "소셜 로그인 연동", "간편 인증 프로세스"],
      icon: "📝",
      color: "blue"
    },
    {
      title: "사용자 프로필",
      items: ["개인 정보 관리", "프로필 이미지 설정", "활동 내역 확인"],
      icon: "👤",
      color: "purple"
    },
    {
      title: "데이터 동기화",
      items: ["작업물 자동 저장", "멀티 디바이스 지원", "클라우드 백업"],
      icon: "☁️",
      color: "cyan"
    },
    {
      title: "보안 기능",
      items: ["안전한 인증 토큰", "세션 관리", "비밀번호 암호화"],
      icon: "🔒",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
      blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", dot: "bg-blue-400" },
      purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", dot: "bg-purple-400" },
      cyan: { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-700", dot: "bg-cyan-400" },
      green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-700", dot: "bg-green-400" }
    };
    return colors[color];
  };

  return (
    <div className="w-full h-screen bg-white p-16 flex flex-col justify-center relative overflow-hidden font-sans">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-blue-500 pl-8 mb-10"
      >
        <div className="flex items-center mb-2">
          <span className="text-4xl mr-4">🔐</span>
          <h2 className="text-5xl font-bold text-gray-900">로그인 시스템 구현</h2>
        </div>
        <p className="text-xl text-gray-500">사용자 인증 및 계정 관리 기능</p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-6">
        {loginFeatures.map((feature, index) => {
          const colorClasses = getColorClasses(feature.color);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`${colorClasses.bg} rounded-2xl p-6 border ${colorClasses.border}`}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{feature.icon}</span>
                <h3 className={`text-2xl font-bold ${colorClasses.text}`}>{feature.title}</h3>
              </div>
              <ul className="space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-700">
                    <span className={`w-2 h-2 ${colorClasses.dot} rounded-full mr-3`}></span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Login Flow Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100"
      >
        <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">로그인 플로우</h4>
        <div className="flex items-center justify-center gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <span className="text-2xl block mb-2">📧</span>
            <span className="text-sm text-gray-600">이메일 입력</span>
          </div>
          <span className="text-2xl text-blue-400">→</span>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <span className="text-2xl block mb-2">🔑</span>
            <span className="text-sm text-gray-600">비밀번호 입력</span>
          </div>
          <span className="text-2xl text-blue-400">→</span>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <span className="text-2xl block mb-2">✅</span>
            <span className="text-sm text-gray-600">인증 완료</span>
          </div>
          <span className="text-2xl text-blue-400">→</span>
          <div className="bg-blue-500 rounded-xl p-4 shadow-sm text-center">
            <span className="text-2xl block mb-2">🎨</span>
            <span className="text-sm text-white font-bold">서비스 이용</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
