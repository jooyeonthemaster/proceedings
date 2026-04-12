# April Week 2 Slide 스타일 가이드

## 기술 스택
- Next.js 14 (App Router) + TypeScript
- Framer Motion (애니메이션)
- Tailwind CSS (스타일)

## 파일 규칙
- 모든 컴포넌트는 `c:/Users/jooye/Desktop/2025meeting/components/april-week2/` 에 생성
- 파일명: `{SlideName}Slide.tsx` (PascalCase)
- 각 파일 최상단: `'use client';`
- `import { motion } from 'framer-motion';`
- `export default function {SlideName}Slide() { ... }`

## 디자인 원칙
- **다크 테마 고정**: `bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950` 또는 섹션별 변주
- **레이아웃**: `min-h-screen flex items-center justify-center p-8 relative overflow-hidden`
- **최대 폭**: `max-w-5xl w-full` (밀도 높은 슬라이드는 `max-w-6xl`)
- **텍스트 색상**: slate-200 (제목), slate-400 (본문), slate-500 (보조)
- **카드**: `bg-slate-900/60 rounded-2xl p-6 border border-slate-800/50`
- **중요 카드는 border 색상으로 강조** (red-800/50, amber-700/50, emerald-700/50, indigo-700/50, violet-700/50 등)

## 섹션별 컬러 컨벤션 (섹션 컬러 = 그라데이션 액센트)
- **오프닝/타이틀**: indigo-950 → slate-900 → gray-950, 액센트 indigo
- **회사현황**: slate-900 → gray-900, 액센트 slate/blue
- **재무/위기**: red-950 → slate-900, 액센트 red/amber
- **학원 AI**: emerald-900 → slate-900, 액센트 emerald/cyan
- **포토부스**: violet-900 → slate-900, 액센트 violet/fuchsia
- **외주/악센트**: amber-900 → slate-900, 액센트 amber
- **마케팅 리소스**: blue-900 → slate-900, 액센트 blue/sky
- **시나리오**: slate-900 → gray-950, 시나리오별 고유 색상
  - A 밸런스: indigo
  - B 올인: red
  - C 캐시우선: amber
  - D 하이브리드(추천): emerald
- **인력배치**: slate-900 → zinc-900, 액센트 zinc/slate
- **회의전략**: rose-950 → slate-900, 액센트 rose/pink
- **로드맵**: cyan-950 → slate-900, 액센트 cyan
- **최종 요약**: indigo-950 → slate-900, 액센트 indigo

## Framer Motion 패턴

기본 fade-in 카드:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
>
```

제목:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center mb-10"
>
  <div className="inline-flex items-center bg-{color}-900/40 border border-{color}-700/40 rounded-full px-5 py-1.5 mb-6">
    <span className="text-{color}-400 text-sm font-medium tracking-wider">SECTION LABEL</span>
  </div>
  <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">슬라이드 제목</h2>
  <p className="text-slate-500">SUBTITLE</p>
</motion.div>
```

## 테이블 스타일
숫자 테이블은 항상 다음 패턴:
```tsx
<div className="overflow-x-auto rounded-xl border border-slate-800/60">
  <table className="w-full text-sm">
    <thead className="bg-slate-900/80 text-slate-400">
      <tr>
        <th className="px-3 py-2 text-left font-medium">...</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-t border-slate-800/40">
        <td className="px-3 py-2 text-slate-300">...</td>
      </tr>
    </tbody>
  </table>
</div>
```

숫자 강조: `font-mono tabular-nums text-slate-200`
양수: `text-emerald-400`
음수: `text-red-400`

## 절대 금지 사항
- 이모지 남용 금지 (제목에 아이콘 하나 정도만 허용, 그것도 SVG 선호)
- 밝은 배경 금지 (무조건 dark)
- `Inter`, `Roboto` 등 제네릭 폰트 지정 금지 (Tailwind 기본값 사용)
- 흰 배경에 보라 그라데이션 금지
- 불필요한 단순화 금지 — 소스 원문의 **모든 수치/이름/맥락을 그대로 전달**

## 필수 품질 기준
- **정보 밀도 최대화**: 한 슬라이드에 소스 원문의 해당 섹션 내용이 전부 들어가야 함
- **수치 단 하나도 빠뜨리지 않기** (만원, %, 월수, 개수 전부)
- **인명 전부 정확히**: 유재영/유선화/이동주/김주연/김정연/김주희/김제연/류다혜/조수빈
- **회사명 전부**: 네안데르, 악센트 아이디, AC'SCENT ID, 악센트 와우, AI 포토부스, 학원 AI
- **한 슬라이드 = 한 스크롤 내에서 모두 볼 수 있는 구성** (min-h-screen, 내용이 많으면 2열 그리드 활용)

## TypeScript 규칙
- 슬라이드 내부에 const 배열/객체로 데이터 정의 (hardcoded, 타입 자동 추론)
- 외부 props 없음
- no `any`, no unused imports
