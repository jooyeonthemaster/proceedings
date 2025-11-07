'use client';

export default function AIClassroomSlide() {
  const teamMembers = [
    {
      name: "이동주",
      role: "회계팀",
      task: "재무 프로그램 설계",
      ai: "Claude AI 엑셀 활용",
      icon: "📊"
    },
    {
      name: "유선화",
      role: "마케팅팀",
      task: "기획안 초안 생성",
      ai: "Claude 기획서 작성 & 웹 리서치",
      icon: "📝"
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col bg-dark p-12">
      <div className="fade-in-up">
        <h2 className="text-5xl font-bold text-white mb-2">
          김박사님의 AI 교실 🎓
        </h2>
        <div className="h-1 w-24 bg-primary mb-8"></div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-gradient-to-r from-primary to-green-400 p-8 rounded-2xl mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-3xl font-bold text-dark mb-4">
            🚀 Claude SKILLS 출시!
          </h3>
          <p className="text-xl text-dark-light font-medium">
            Claude AI를 통해 워드, 엑셀, PPT 등을 <span className="font-bold text-dark">직접 제어하고 설계</span>할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-dark-light p-8 rounded-xl border-2 border-gray-600 hover:border-primary transition-all duration-300 fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-5xl">{member.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h4 className="text-2xl font-bold text-white">
                      {member.name}
                    </h4>
                    <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-lg text-gray-300 mb-2">
                    <span className="text-primary font-semibold">목표:</span> {member.task}
                  </p>
                  <p className="text-base text-gray-400">
                    <span className="text-primary font-semibold">활용:</span> {member.ai}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-900 bg-opacity-30 border-l-4 border-red-500 p-6 rounded-lg fade-in" style={{ animationDelay: '0.5s' }}>
          <h4 className="text-2xl font-bold text-red-400 mb-3">
            ⚠️ 경각심을 갖고 팔로업하세요!
          </h4>
          <p className="text-lg text-gray-300 mb-2">
            정말 <span className="text-primary font-bold">말도 안 되는 속도</span>로 AI가 발전하고 있습니다.
          </p>
          <p className="text-base text-gray-400">
            각자 바쁘겠지만, <span className="text-white font-semibold">의도적으로 AI를 어떻게 써볼까</span>,
            혹은 <span className="text-white font-semibold">개발팀에게 이런 방법은 가능할까</span>에 대한 고민을 나누면 좋겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
