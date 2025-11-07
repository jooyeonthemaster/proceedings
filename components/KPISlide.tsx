'use client';

export default function KPISlide() {
  const projects = [
    {
      name: "크래커스 스튜디오",
      total: "660만원 입금",
      actual: "350만원",
      note: "310만원 반환 필요",
      company: "네안데르",
      urgent: false
    },
    {
      name: "안산 지도 앱",
      total: "300만원",
      actual: "300만원",
      note: "다음주 중 정산 예정",
      company: "네안데르",
      urgent: false
    },
    {
      name: "안산 포토부스",
      total: "352만원",
      actual: "352만원",
      note: "다음주 중 정산 예정",
      company: "일해라컴퍼니",
      urgent: false
    },
    {
      name: "변기",
      total: "172만원",
      actual: "172만원",
      note: "다음주 중 정산 예정",
      company: "일해라컴퍼니",
      urgent: false
    },
    {
      name: "마케팅 앱",
      total: "500만원 이상",
      actual: "500만원+",
      note: "11월 중 개발 완료 목표",
      company: "일해라컴퍼니",
      urgent: false
    },
    {
      name: "채민 아이크래프트",
      total: "300만원 목표",
      actual: "300만원",
      note: "AI로 AI 만들기 (수수료 포함)",
      company: "개인",
      urgent: false
    },
    {
      name: "외국인 매칭 플랫폼",
      total: "350만원",
      actual: "350만원",
      note: "잔금 처리 필요",
      company: "네안데르",
      urgent: true
    }
  ];

  const totalGoal = 1974 + 350;

  return (
    <div className="w-full h-screen flex flex-col bg-dark p-12">
      <div className="fade-in-up">
        <h2 className="text-5xl font-bold text-white mb-2">
          개발팀 KPI 달성 현황
        </h2>
        <div className="h-1 w-24 bg-primary mb-8"></div>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6 mt-4">
        <div className="space-y-4 fade-in" style={{ animationDelay: '0.2s' }}>
          {projects.slice(0, 4).map((project, index) => (
            <div
              key={index}
              className={`bg-dark-light p-5 rounded-lg border-l-4 ${
                project.urgent ? 'border-red-500' : 'border-primary'
              } hover:bg-opacity-80 transition-all duration-300`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                  {project.company}
                </span>
              </div>
              <p className="text-2xl font-bold text-primary mb-1">
                {project.actual}
              </p>
              <p className="text-sm text-gray-400">{project.note}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 fade-in" style={{ animationDelay: '0.4s' }}>
          {projects.slice(4).map((project, index) => (
            <div
              key={index}
              className={`bg-dark-light p-5 rounded-lg border-l-4 ${
                project.urgent ? 'border-red-500' : 'border-primary'
              } hover:bg-opacity-80 transition-all duration-300`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                  {project.company}
                </span>
              </div>
              <p className="text-2xl font-bold text-primary mb-1">
                {project.actual}
              </p>
              <p className="text-sm text-gray-400">{project.note}</p>
              {project.urgent && (
                <span className="inline-block mt-2 text-xs text-red-400 bg-red-900 bg-opacity-30 px-2 py-1 rounded">
                  ⚠️ 급함
                </span>
              )}
            </div>
          ))}

          <div className="bg-gradient-to-r from-primary to-green-400 p-6 rounded-lg mt-6 fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-dark text-sm font-semibold mb-1">
              11월 총 정산 목표액
            </p>
            <p className="text-5xl font-bold text-dark">
              {totalGoal.toLocaleString()}만원
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
