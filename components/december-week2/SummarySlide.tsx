'use client';

import { motion } from 'framer-motion';

export default function SummarySlide() {
  const summaryItems = [
    {
      category: "정산 현황",
      icon: "💰",
      status: "주의",
      statusColor: "red",
      items: [
        "실제 정산: 0원 (변동 없음)",
        "12월 예정: 2,052만원",
        "정산 정상화 지속 모니터링"
      ]
    },
    {
      category: "추가 계약",
      icon: "📝",
      status: "완료",
      statusColor: "green",
      items: [
        "화한 앱 추가 개발 합의",
        "부가세 포함 330만원",
        "총 계약 880만원으로 확대"
      ]
    },
    {
      category: "뿌덕 V2",
      icon: "🚀",
      status: "진행중",
      statusColor: "blue",
      items: [
        "전면 UI/UX 개선",
        "AI 기능 업데이트",
        "로그인 & 공유 기능 구현"
      ]
    }
  ];

  const getStatusBgColor = (color: string) => {
    const colors: Record<string, string> = {
      red: "bg-red-500",
      green: "bg-green-500",
      blue: "bg-blue-500"
    };
    return colors[color];
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-dark via-dark-light to-dark p-16 flex flex-col justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-5xl font-bold text-white mb-4">12월 2주차 요약</h2>
        <div className="h-1 w-32 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-8 relative z-10 mb-10">
        {summaryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-dark-light/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 hover:border-primary/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-3xl mr-3">{item.icon}</span>
                <h3 className="text-xl font-bold text-white">{item.category}</h3>
              </div>
              <span className={`${getStatusBgColor(item.statusColor)} px-3 py-1 rounded-full text-xs font-bold text-white`}>
                {item.status}
              </span>
            </div>
            <ul className="space-y-2">
              {item.items.map((text, textIndex) => (
                <li key={textIndex} className="flex items-start text-gray-300">
                  <span className="text-primary mr-2">•</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Next Week Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-2xl p-8 border border-primary/30"
      >
        <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
          <span className="mr-2">📅</span>
          다음 주 목표
        </h4>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <span className="text-3xl block mb-2">💸</span>
            <p className="text-white font-semibold">정산 현황 추적</p>
            <p className="text-gray-400 text-sm">2주차 정산 확인</p>
          </div>
          <div>
            <span className="text-3xl block mb-2">🎯</span>
            <p className="text-white font-semibold">뿌덕 V2 완성도 향상</p>
            <p className="text-gray-400 text-sm">핵심 기능 완료 목표</p>
          </div>
          <div>
            <span className="text-3xl block mb-2">📊</span>
            <p className="text-white font-semibold">프로젝트 점검</p>
            <p className="text-gray-400 text-sm">진행 상황 리뷰</p>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center relative z-10"
      >
        <p className="text-gray-500">감사합니다 🙏</p>
      </motion.div>
    </div>
  );
}
