'use client';

import { motion } from 'framer-motion';

export default function DongseouldBidSlide() {
  const rolesLinkd = [
    { title: '1. 입찰 주관 및 행정', desc: '나라장터(KONEPS) 입찰 투찰 지원' },
    { title: '2. 현장 행사 총괄 (대장)', desc: '시상식 등 주요 오프라인 행사 대표 지휘' },
    { title: '3. 운영 자문 및 강사 풀', desc: '프로그램 방향성 조언 및 핵심 강사진 제공' },
  ];

  const rolesNeander = [
    { title: '1. 기획 및 행사 운영 총괄', desc: '제안서/강의안 제작, 현장 보조 등 행사 실무 일체' },
    { title: '2. 제작물 및 콘텐츠 기획', desc: '학생 인쇄물 제작 및 AI 가이드 영상(30분) 제작' },
    { title: '3. 인력 모집 및 스케줄링 관리', desc: '과목별 전문 강사 섭외 및 268차시 스케줄링' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-1 mb-4">
            <span className="text-blue-400 text-sm">EDUCATION BID</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-2">
            동서울대 AI진로설계 프로그램 입찰
          </h2>
          <p className="text-gray-400 mb-6">예산 7,000만원 | 총 67개 반 / 268차시 | 나라장터 사업</p>

          {/* Strategy Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-light/60 rounded-xl p-5 border border-emerald-500/30 mb-6"
          >
            <h3 className="text-lg font-semibold text-emerald-400 mb-3">선정 전략</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">&#10003;</span>
                <span>김기홍 교수 — 동서울대 산학협력단 인맥을 통한 지원</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">&#10003;</span>
                <span>입찰 업체: <span className="text-white font-semibold">&quot;스타트런&quot;</span> (대학 저학년 대상 1천만원+ 교육 실적 보유)</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">&#10003;</span>
                <span>우리 측 인력 최대 배치 계획 — 강의 경력 = 커리어 발전에 도움</span>
              </li>
            </ul>
          </motion.div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-light/60 rounded-xl p-5 border border-cyan-500/30"
            >
              <h4 className="text-cyan-400 font-semibold mb-4">김기홍 교수 / 링크드코리아</h4>
              <div className="space-y-3">
                {rolesLinkd.map((role, i) => (
                  <div key={i}>
                    <p className="text-white text-sm font-semibold">{role.title}</p>
                    <p className="text-gray-400 text-xs">{role.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-light/60 rounded-xl p-5 border border-violet-500/30"
            >
              <h4 className="text-violet-400 font-semibold mb-4">(주)네안데르</h4>
              <div className="space-y-3">
                {rolesNeander.map((role, i) => (
                  <div key={i}>
                    <p className="text-white text-sm font-semibold">{role.title}</p>
                    <p className="text-gray-400 text-xs">{role.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-dark-light/40 rounded-xl p-5 border border-gray-700"
          >
            <h4 className="text-white font-semibold mb-4">핵심 일정</h4>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="flex items-center bg-amber-500/10 rounded-lg px-4 py-3 border border-amber-500/30 flex-1">
                <span className="text-xl mr-3">&#9200;</span>
                <div>
                  <p className="text-amber-400 text-sm font-bold">3/3 (월) 내일</p>
                  <p className="text-gray-300 text-xs">진행 확정 여부 확인</p>
                </div>
              </div>
              <div className="flex items-center bg-red-500/10 rounded-lg px-4 py-3 border border-red-500/30 flex-1">
                <span className="text-xl mr-3">&#128205;</span>
                <div>
                  <p className="text-red-400 text-sm font-bold">3/5 (수) 11:00</p>
                  <p className="text-gray-300 text-xs">입찰 과업설명회 [필수 참석]</p>
                </div>
              </div>
              <div className="flex items-center bg-rose-500/10 rounded-lg px-4 py-3 border border-rose-500/30 flex-1">
                <span className="text-xl mr-3">&#128198;</span>
                <div>
                  <p className="text-rose-400 text-sm font-bold">3/12 (목) 11:00</p>
                  <p className="text-gray-300 text-xs">입찰 마감</p>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-3">* 유선화, 김주연 3/5 오프 변경 요청 또는 다음주 오프 추가 요청 (여행 일정 조정)</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
