# 품질 검증 리포트 — presentation.html (5,430 lines, 118 slides)

> 검증 대상: `c:/Users/jooye/Desktop/2025meeting/20260412_presentation/presentation.html`
> 원본 참조: `c:/Users/jooye/Desktop/2025meeting/20260412.md` (827 lines)
> 검증자: 품질 비평가 (Claude)

---

## 총평

- 총 슬라이드 수: **118**
- 품질 이슈 발견: **약 260건** (대부분 Medium — 디자인 시스템 미정의 클래스)
- Critical: **3건**
- High: **5건**
- Medium: **8건** (+ 대량의 CSS 미정의 이슈 1건에 통합)
- Low: **4건**

**한 줄 결론:** 내용(텍스트·숫자·표 셀·인력 %)은 거의 빠짐없이 원본에 충실하게 반영되어 있어 데이터 무결성 측면은 매우 우수(A급)이다. 그러나 슬라이드 66번 이후(Builder 2~6)에서 도입된 **247개의 ad-hoc CSS 클래스 중 대부분이 `<style>` 블록에 정의되어 있지 않아**, 해당 슬라이드의 시각적 레이아웃이 대거 무너질 가능성이 높다 — 이것이 가장 치명적인 단일 이슈다.

---

## 이슈 목록

### Critical (반드시 수정)

#### 1. 디자인 시스템 247개 클래스 미정의 — 슬라이드 66~118 전반의 렌더링 붕괴 위험
- **위치:** `presentation.html` 전역 (특히 L3011~5259, 슬라이드 66~118)
- **문제:** `<style>` 블록(L9~921)에서 정의된 CSS 클래스는 97개인데, HTML에서 실제로 사용된 클래스는 355개. **258개 클래스가 정의 없이 사용**되고 있음. 주요 미정의 클래스:
  - 레이아웃: `slide-title`, `slide-lead`, `slide-subtitle`, `layout-scenario`, `layout-process`, `layout-timeline`, `layout-person`, `layout-table`, `split-grid`, `split-col`, `split-left`, `split-right`, `split-2col`, `two-cols`, `four-cols`
  - 카드/블록: `callout-block`, `callout-primary`, `callout-accent`, `callout-warn`, `callout-warning`, `callout-emph`, `callout-muted`, `callout-total`, `callout-side`, `callout-note`, `callout-result`, `callout-row`, `callout-stack`, `callout-list-vertical`
  - KPI/스탯: `kpi-card`, `kpi-grid`, `kpi-label`, `kpi-value`, `kpi-sub`, `stat-card-primary`, `stat-card-warning`, `stat-card-negative`, `stat-card-positive`, `stat-card-alert`, `stat-card-xl`, `stat-card-wide`, `stat-card-current`, `stat-card-target`, `stat-grid-single`, `stat-grid-vertical`
  - 시나리오: `scenario-badge`, `scenario-badge-a`, `scenario-badge-b`, `scenario-c`, `scenario-d`, `scenario-c-table`, `scenario-d-table`, `monthly-sim`, `recommended`, `badge-letter`, `badge-tag`, `badge-glow`
  - 경로/다이어그램: `path-diagram`, `path-root`, `path-branches`, `path-branch`, `branch-head`, `branch-tag`, `branch-cond`, `branch-body`, `branch-diagram`, `branch-arms`, `branch-arm`, `branch-root`, `arm-label`, `arm-action`
  - 인력/재배치: `people-table`, `people-reallocate-table`, `person-card-list`, `person-head`, `person-avatar`, `person-meta`, `weekly-table`, `phase2-table`, `phase2-note`
  - 비교/결정: `compare-strip`, `compare-item`, `compare-label`, `compare-value`, `compare-vs`, `compare-delta`, `judgment-grid`, `judgment-card`, `judgment-header`, `judgment-label`, `judgment-verdict`, `judgment-text`, `judgment-reject`, `judgment-minimal`, `decision-list`, `decision-item`, `decision-head`, `decision-num`, `decision-title`, `decision-body`, `decision-criteria-table`, `decision-rule`
  - 그 외: `gauge-row`, `gauge-card`, `gauge-bar`, `gauge-fill`, `gauge-label`, `gauge-value`, `space-diagram`, `space-total`, `space-split`, `space-half`, `space-note`, `date-highlight`, `date-big`, `date-year`, `date-note`, `reason-stack`, `reason-card`, `reason-index`, `reason-body`, `reason-title`, `reason-text`, `reason-tag`, `timeline-bar`, `timeline-horizontal`, `flow-node`, `flow-arrow`, `flow-node-split`, `flow-node-end`, `crosssell-flow`의 하위 요소, `advantage-card`(vs 정의된 `.advantage-item`), `advantage-index`, `advantage-text`, `advantage-sub`, `checklist`, `check-mark`, `check-body`, `checkpoint-card`, `checkpoint-grid`, `checkpoint-label`, `checkpoint-target`, `checkpoint-trigger`, `frame-card`, `frame-grid`, `frame-num`, `frame-text`, `mission-why`… 등 (총 247개)
- **원본 참조:** — (이것은 빌더 간 디자인 시스템 불일치 문제)
- **수정 권고:**
  1. 가장 중요한 **즉시 fix**: 빌더 2~6이 사용한 클래스들을 한꺼번에 스타일링하는 섹션을 `<style>` 블록에 추가하거나,
  2. 빌더별 HTML을 리팩터해서 빌더 1이 정의한 기존 클래스(`callout`, `stat-card`, `data-table`, `priority-stack`, `priority-item`, `bullet-block`, `comparison-item`, `person-card`, `timeline`, `timeline-step`, `step-number` 등)만 사용하도록 변경.
  3. 특히 `.advantage-card`는 `.advantage-item`으로 단순 rename, `.slide-title`/`.slide-lead`는 `h1.headline`/`p.subheadline`로 rename하면 상당수가 자동 복구됨.

#### 2. 슬라이드 20, 21, 23, 26, 29 — `stat-grid-2`에 카드가 1개뿐, 레이아웃 비대칭
- **위치:** L1590, L1621, L1706, L1745, L1826, L1907, L2056
- **문제:** `.stat-grid-2`는 2컬럼 그리드인데 자식이 1개뿐이다. 카드가 왼쪽 절반에만 덩그러니 배치되어 오른쪽이 비어있는 시각적 허전함이 발생.
- **원본 참조:** 원본은 해당 사업마다 단일 매출 수치만 있으므로(L52~56, L58 등), 레이아웃 선택 문제.
- **수정 권고:** `stat-grid-1`로 변경하거나, 해당 슬라이드에 두 번째 지표(예: 오프라인 슬라이드 20에 "고정비 기여도" 또는 "운영 개월 수" 등)를 추가해서 카드 2개로 채운다.

#### 3. 슬라이드 46 — 내용 과소 (공허한 슬라이드)
- **위치:** L2503~2520 (slide-46)
- **문제:** 슬라이드 본문이 sub-headline 1줄 + callout 1개(라벨 "표시", 텍스트 "빨간 텍스트로 개발팀 팩트체크 필요 항목들이 표시되어 있음")로만 구성. 별도 슬라이드로 할애할 만큼 내용이 없어 "공허한 슬라이드"의 전형.
- **원본 참조:** L172 — "빨간 텍스트로 개발팀 팩트체크 필요 항목들이 표시되어 있음"
- **수정 권고:** (a) 슬라이드 41(p1 AI 포토부스 개요)에 merge하거나, (b) 이 슬라이드를 확장해서 **실제 팩트체크 필요 항목 리스트**(p4 처리속도·p6 스타일 변환·p8 배경합성·p13 프로세스 등)를 나열. 현재는 독립 슬라이드로 존재할 이유가 없음.

---

### High

#### H1. 슬라이드 92·97 — `stat-note`에 "약"이라는 단어만 있음
- **위치:** L4002 (slide-92), L4190 (slide-97)
- **문제:** 연말 현금 카드의 `stat-note`에 "약" 한 글자만 덩그러니 있음. 원래는 "약 11,050만원" 같은 부사가 숫자 앞에 붙어야 하는 걸 분리하면서 "약"만 note로 빠진 실수로 보임.
- **원본 참조:** L481 "연말 현금: 약 11,050만원", L520 "연말 현금: 약 6,050만원"
- **수정 권고:** stat-note를 "보수적 추정" 또는 "학원 AI 보수안 기준" 같이 의미 있는 서브 텍스트로 교체하거나, `stat-number`에 "약" 접두사를 포함시키고 note를 삭제.

#### H2. 슬라이드 7 — 임원진 4명의 개별 설명이 모두 직책 한 줄뿐
- **위치:** L1142~1180 (slide-7)
- **문제:** 4개 `comparison-item` 카드 각각에 이름(h3)과 1개 li(직책)만 있음. "핵심 결정권자"를 소개하는 슬라이드인데 각 인물의 담당 영역이 전혀 드러나지 않음. 이후 슬라이드 8~11에서 개별로 다룬다지만, 이 overview 슬라이드 자체가 정보량 제로.
- **원본 참조:** L21~24 각 임원별 3~4줄 설명 존재
- **수정 권고:** 각 comparison-item li에 핵심 담당 1줄씩 더 추가 (예: 유재영 — "B2B 영업 + 인맥 네트워크", 유선화 — "악센트 마케팅 전담", 이동주 — "재무 + 상품·패키지", 김주연 — "악센트 유지보수 + 학원 AI 설계").

#### H3. 슬라이드 13, 16, 17 — 직원 소개 슬라이드 내용이 1줄
- **위치:** L1369~1393 (김정연), L1463~1487 (류다혜), L1489~1513 (조수빈)
- **문제:** `person-card` + 1개 callout으로만 구성. 김주희(L1395~1427)·김제연(L1429~1461)은 bullet-block으로 풍부하게 작성됐는데 다른 3명은 빈약. 구조적 불균형.
- **원본 참조:** L28, L31, L32 각 인물 설명. 특히 류다혜는 L31에서 "이벤트 진행 전반을 관리하며 디자이너 조수빈을 핸들링" — 이건 단일 callout에 들어가 있긴 함.
- **수정 권고:** 최소한 각 인물의 "담당 영역" bullet-block을 추가하고, 그 인물의 현재 업무 리스트(김정연: 릴스 기획·악센트 계정 운영·크리에이티브 제작 / 류다혜: 이벤트 기획·조수빈 핸들링·와우 운영 전반 / 조수빈: 포스터 디자인·이벤트 굿즈)를 나열.

#### H4. 학원 AI 영업 전략 (slide 39) — 원본의 "월 2~3건 콘텐츠·이벤트" 수준의 구체 액션이 축약됨
- **위치:** L2253~2279 (slide-39)
- **문제:** 원본 L152~158은 초기/중기/하반기 각각에 구체 행동(예: "재영이가 주 3일 이상 학원 방문", "케이스스터디 제작", "구별 3자리만 남았습니다") 언급. 슬라이드는 표 1개로 압축돼 있는데, 각 단계를 한 줄로 요약하다 보니 "7~9월 국어 → 수학 업셀" 같은 중요한 업셀 전략이 한 줄로 뭉개져 보임. 여기까진 OK이나, **"재영이가 주 3일 이상"**이 셀 안에 포함돼 있는데 원본 L154와 달리 FOMO 전략의 사탐·과탐 타이밍이 딱 하반기 셀에 압축됨. 정보 밀도는 유지됨.
- **원본 참조:** L152~158
- **수정 권고:** 표는 유지하되 sub-bullet을 표 아래 추가해 (a) 초기 단계의 "첫 10개 학원 레퍼런스 확보" 목표, (b) 중기의 "국어→수학→영어 업셀 순서"를 명시. 현 상태도 허용 가능하지만 더 풍부하게 만들 여지 있음.

#### H5. 스케일업 로드맵 (slide 37) — 낙관 시나리오 표가 누락됨
- **위치:** L2175~2212 (slide-37)
- **문제:** 원본 L135에서 "낙관적 시나리오에서는 12월 75개 학원, MRR 3,750만원, 누적 1.485억원까지 가능"이라고 언급. 슬라이드에는 보수적 표 + callout 1개로 "낙관 시나리오 비교"를 문장으로만 처리. 보수적 8행 표에 필적하는 **낙관 8행 표가 빠져 있음**. 원본도 낙관 시나리오의 월별 수치는 명시하지 않았으므로 엄밀히 원본 충실성 이슈는 아니지만, "숫자 비교"라는 관점에서 시각화가 부족.
- **원본 참조:** L135
- **수정 권고:** 보수/낙관 2컬럼 stat-card를 보충하거나(예: 낙관 12월 학원 75개·MRR 3,750만·누적 1.485억), 12월 값만 대조하는 mini stat-grid 추가.

---

### Medium

#### M1. 슬라이드 9 (유선화) — bullet-block "담당 영역"이 없음
- **위치:** L1222~1250 (slide-9)
- **문제:** 다른 CMO급 인물 페이지(김주연 slide 11)에는 `bullet-block` 담당 영역이 있는데 유선화는 callout 2개만 있어 정보가 얕음.
- **원본 참조:** L22
- **수정 권고:** "담당 영역" bullet-block 추가 (악센트 와우 마케팅 · 악센트 아이디 오프라인 마케팅 · 악센트 온라인 마케팅 · SNS 광고 운영).

#### M2. 슬라이드 20 (오프라인) — 수익 구조를 증명할 지표 부족
- **위치:** L1582~1611
- **문제:** 월 매출 1,500만원만 강조. 캐시카우인데 중요 지표(예상 마진, 일평균 고객수)가 없어 "왜 이것이 메인 캐시카우인가"가 설명되지 않음.
- **원본 참조:** L52~53
- **수정 권고:** 슬라이드 21(와우)처럼 "수익성 검토" 블록을 추가하고, 알바비·월세·소모품 대비 마진 추정.

#### M3. 슬라이드 42 — 서비스 소개 5가지 표에서 "처리시간"이 3개 행에서 "—"
- **위치:** L2355~2365 (slide-42)
- **문제:** 표 헤더는 "기능 / 기술 / 처리시간 / 설명"인데 레이아웃·프레임·외관 3개 행이 "—"로 비어 있음. 원본 L168은 실제로 이 3개에 대해 처리시간 정보를 주지 않고 있어 정확하지만, 표 구조상 빈 칸이 과다해 보임.
- **원본 참조:** L168
- **수정 권고:** 헤더를 "기능 / 설명" 2컬럼으로 단순화하거나, "처리시간" 컬럼을 "비고/특징"으로 바꾸고 해당 행에 "소프트웨어 처리 없음 · 물리 디자인" 등을 채워 넣기.

#### M4. 슬라이드 75 — 외주개발 capacity stat-grid-2가 비대칭 (이미 2카드 있음, OK)
- 실제로는 카드 2개 모두 있어 OK. 이슈 아님.

#### M5. 슬라이드 64 — "(개발팀이랑 이야기 해야되나?)" 원본 문체 그대로 노출
- **위치:** L2956 (slide-64)
- **문제:** 원본 L305의 메모체 표현 "(개발팀이랑 이야기 해야되나?)"가 발표 슬라이드에 그대로 들어가 있음. 프레젠테이션 품격 저하.
- **원본 참조:** L305
- **수정 권고:** "→ 개발팀 선행 논의 필요" 같이 격식화하거나 삭제.

#### M6. 슬라이드 118 (mega) — 내용이 극단적으로 많음 (13개 섹션 A~M)
- **위치:** L4923~5259
- **문제:** 단일 슬라이드에 Phase 1 잔여인력 / Phase 2-A / Phase 2-B / 회의전략 / 즉시결정 / 체크포인트 / 7월결정 / 비상플랜 / 로드맵 / 한줄결론 / 각자미션 / 핵심메시지 / END를 모두 담고 있음. `slide-body`에 `overflow-y: auto`가 있어 스크롤 가능하지만, 프레젠테이션 모드에서 한 화면에 볼 수 없고 슬라이드 카운트(118/118)에서 양이 이상하게 많음.
- **수정 권고:** 슬라이드 118을 Phase 2-A / Phase 2-B / 화요일 회의 / 로드맵 / 최종 요약 5개 이상으로 분할 — 원래 목차상 S13·S14·S15가 각각 별도 섹션이므로 개별 슬라이드로 쪼개는 것이 맞음. 현재 카운터는 118이지만, 사실상 "슬라이드 수"의 overflow 처리.

#### M7. 슬라이드 118 내 "이동주" 미션 카드 — 원본에 없는 문구 "전체 숫자 게이트키퍼"
- **위치:** L5227 (slide-118, mission-card 이동주)
- **문제:** 원본 L824는 "재무 관리 + 포토부스 현장 지원 + 원가 분석"뿐, "전체 숫자 게이트키퍼"라는 표현은 없음. 슬라이드가 원본에 없는 해석을 추가.
- **원본 참조:** L824
- **수정 권고:** 원본에 없는 표현이므로 제거하거나, 원본 언어인 "재무 관리 + 현장 지원" 정도로 유지.

#### M8. 슬라이드 105 vs 118-섹션 G — 7월 판단 기준이 중복 등장
- **위치:** L4441~4471 (slide-105), L5094~5111 (slide-118 섹션 G)
- **문제:** 동일한 3가지 기준·2/3 룰이 두 슬라이드에 반복. slide 118에는 "rule-row"에 긴 문장이 합쳐져서 레이아웃이 어색.
- **수정 권고:** 슬라이드 118 섹션 G는 slide 105 참조로 대체하거나, 슬라이드 118이 분할되면 자연스레 해결.

---

### Low

#### L1. 슬라이드 1 커버 — CTO 크레딧이 "CTO 김주연 → CEO 유재영 + 전사"로 표기
- **위치:** L953~954
- **문제:** 원본 L5는 "CEO 유재영 → CTO 김주연에게 AI 포토부스 제안서 기반 회의 요청"이지만, 슬라이드 커버에는 "작성: CTO 김주연 → CEO 유재영 + 전사"라는 상반된 방향 표기. 엄밀히 원본은 "작성자"가 아니라 "요청 방향"을 말한 것이므로 슬라이드 해석이 맞을 수 있음. 그래도 원본이 "작성 배경"으로 이미 명시한 내용을 표기가 헷갈릴 수 있음.
- **수정 권고:** "작성" 라벨을 "요청 방향" 또는 "작성자: CTO 김주연"으로 구분.

#### L2. 슬라이드 3 아젠다 — 섹션 번호가 0~15 (16개)
- **위치:** L1014~1030
- **문제:** 원본은 9개 섹션 구조(회사 현황 / 사업별 분석 / 마케팅팀 / 시나리오 / 비교 / 인력 / 회의 / 로드맵 / 요약)인데 슬라이드에서 재분류하여 16개로 늘어남. 슬라이드 데이터 속성은 S0~S13-S15까지 사용하지만 사이드바에도 `S09`·`S9` 중복 키 존재 (L5369~5371에서 두 키 모두 정의).
- **수정 권고:** `data-section` 값을 S9로 통일 (슬라이드 98만 S09로 표기 — L4215). `<section>` 태그 수정.

#### L3. 부가 기능 6행 — 슬라이드 58은 정확히 6행
- 이슈 없음. 제안서 p16 내용 일치 ✓.

#### L4. 스페이스 다이어그램·gauge·kpi-grid — 정의 없는 시각 요소 (Critical과 중복, Low로도 기록)
- Critical #1에서 설명됨.

---

## 디자인 시스템 누락 클래스 (요약)

빌더들이 사용한 ad-hoc 클래스 중 CSS 스타일 정의가 **없는** 것 (Critical #1 참고, 대표 그룹만):

| 그룹 | 정의된 대체 클래스 (있음) | 미정의 (쓰고 있음) |
|---|---|---|
| 슬라이드 제목 | `.headline`, `.subheadline` | `.slide-title`, `.slide-lead`, `.slide-subtitle` |
| Advantage 카드 | `.advantage-grid`, `.advantage-item` | `.advantage-card`, `.advantage-index`, `.advantage-text`, `.advantage-sub` |
| KPI 카드 | `.stat-card` | `.kpi-card`, `.kpi-grid`, `.kpi-label`, `.kpi-value`, `.kpi-sub` |
| 콜아웃 변형 | `.callout`, `.callout-label`, `.callout-text` | `.callout-block`, `.callout-primary`, `.callout-accent`, `.callout-warn`, `.callout-warning`, `.callout-emph`, `.callout-muted`, `.callout-total`, `.callout-side`, `.callout-note`, `.callout-result`, `.callout-row`, `.callout-stack`, `.callout-list-vertical` |
| 시나리오 배지 | (없음) | `.scenario-badge`, `.scenario-badge-a`, `.scenario-badge-b`, `.scenario-c`, `.scenario-d`, `.recommended`, `.badge-letter`, `.badge-tag`, `.badge-glow` |
| 경로/분기 | (없음) | `.path-diagram`, `.path-root`, `.path-branches`, `.path-branch`, `.branch-*` |
| 월별 테이블 | `.scenario-table`, `.data-table` | `.monthly-sim`, `.scenario-c-table`, `.scenario-d-table`, `.pivot-row`, `.low-point-row`, `.judgement-row`, `.eoy-row`, `.row-transition`(있음) |
| Phase2 테이블 | `.data-table` | `.phase2-table`, `.weekly-table`, `.people-table`, `.people-reallocate-table`, `.july-decision-table`, `.decision-criteria-table`, `.renew-table` |
| 게이지 바 | (없음) | `.gauge-row`, `.gauge-card`, `.gauge-bar`, `.gauge-fill`, `.gauge-label`, `.gauge-value` |
| 공간 다이어그램 | (없음) | `.space-diagram`, `.space-total`, `.space-split`, `.space-half`, `.space-note` |
| 날짜 강조 | (없음) | `.date-highlight`, `.date-big`, `.date-year`, `.date-note` |
| 비교 스트립 | (없음) | `.compare-strip`, `.compare-item`, `.compare-label`, `.compare-value`, `.compare-vs`, `.compare-delta` |
| 판단 카드 | (없음) | `.judgment-grid`, `.judgment-card`, `.judgment-header`, `.judgment-label`, `.judgment-verdict`, `.judgment-text` |
| 결정 리스트 | (없음) | `.decision-list`, `.decision-item`, `.decision-head`, `.decision-num`, `.decision-title`, `.decision-body` |
| 체크포인트 | (없음) | `.checkpoint-grid`, `.checkpoint-card`, `.checkpoint-label`, `.checkpoint-target`, `.checkpoint-trigger` |
| 비상 리스트 | (없음) | `.emergency-list`, `.emergency-item`, `.emergency-num`, `.emergency-text` |
| Frame 카드 | (없음) | `.frame-grid`, `.frame-card`, `.frame-num`, `.frame-text`, `.four-frames` |
| 이유 스택 | (없음) | `.reason-stack`, `.reason-card`, `.reason-index`, `.reason-body`, `.reason-title`, `.reason-text`, `.reason-tag` |
| Mega 슬라이드 | `.slide-mega` | `.mega-body`, `.mega-section`, `.mega-section-head`, `.mega-section-title`, `.mega-sub`, `.mega-title`, `.sub-index`, `.climactic`, `.end-block`, `.end-wrap`, `.end-mark`, `.end-deck`, `.end-author`, `.end-date` |
| 셀 컬러 | `.row-lowcash`, `.row-breakeven`(있음) | `.cell-neg`, `.cell-pos`, `.cell-sum`, `.cell-month`, `.cell-person`, `.cell-num`, `.neg`, `.pos`, `.col-glow`, `.col-highlight` |

총 247개 중 상당수는 **시각 강조(색상·강조)**에 해당하므로 스타일이 없으면 기본 텍스트로만 표시되지만, 일부(`.kpi-card`, `.gauge-bar`, `.path-diagram`, `.space-diagram`, `.reason-card`, `.judgment-card`, `.compare-strip`, `.frame-card`, `.checkpoint-card`, `.phase-bar`, `.branch-diagram`)는 **레이아웃 자체가 깨진다**.

---

## 종합 판단

- **품질 등급: B+** (데이터 무결성 A, 시각 일관성 C)
- **긴급 수정 필요 여부:** **Yes** (Critical #1 렌더링 이슈 때문)

### 우선 수정 항목 TOP 5

1. **[Critical #1]** `<style>` 블록 하단에 빌더 2~6의 미정의 클래스 247개에 대한 **공통 스타일 추가** — 특히 `.kpi-card`/`.kpi-grid`, `.callout-block`/변형, `.slide-title`/`.slide-lead`, `.phase2-table`, `.weekly-table`, `.people-table`, `.monthly-sim`, `.gauge-*`, `.scenario-badge`, `.reason-card`, `.judgment-card`, `.compare-strip`, `.checkpoint-card`, `.branch-diagram`, `.path-diagram`, `.mega-section`, `.cell-neg`/`.cell-pos`/`.cell-sum` 최소 **레이아웃 보존 수준**의 스타일을 정의.
2. **[Critical #3 + M6]** 슬라이드 46(빈 슬라이드)을 삭제하거나 팩트체크 항목 리스트로 확장; 슬라이드 118(메가)은 5~6개 슬라이드로 분할해 총 슬라이드 수 재조정.
3. **[High #1]** 슬라이드 92·97의 `stat-note`에 "약" 한 글자만 있는 오류 수정.
4. **[High #2, #3]** 슬라이드 7(임원 overview), 13·16·17(직원 미니 소개)에 담당 영역·업무 리스트 보강.
5. **[Critical #2]** 슬라이드 20·21·23·26·29의 `stat-grid-2`(1카드) 비대칭을 `stat-grid-1`로 바꾸거나 두 번째 지표를 추가.
