# Orulak TODO

> 진행 방식: 각 그룹 개발 직전에 GitHub 이슈 생성 → 브랜치 생성 → 개발 → PR 머지

---

## Phase 1: 기반 구축

### [1] Next.js 프로젝트 초기화 및 개발 도구 설정
브랜치: `chore/project-init`
- [ ] Next.js 15 프로젝트 초기화 (App Router, TypeScript, Tailwind CSS)
- [ ] 패키지 설치 (Recharts, @supabase/supabase-js 등)
- [ ] `.env.example` 파일 정리
- [ ] ESLint + Prettier 설정
- [ ] Husky + lint-staged 설정 (pre-commit hook)

### [2] Supabase 연동 + 기본 레이아웃 구현
브랜치: `feat/base-layout`
- [ ] Supabase 클라이언트 연동 설정
- [ ] 기본 레이아웃 구현 (헤더, 메인 컨테이너)

---

## Phase 2: 데이터 레이어

### [3] 공통 타입 정의 + 한국투자증권 API 인증 모듈
브랜치: `feat/kis-auth`
- [ ] 공통 타입 정의 (Asset, PriceData, Period 등)
- [ ] 한국투자증권 API 인증 모듈 (토큰 발급/갱신)

### [4] 국내 주식 API Route + 데이터 정규화 + Supabase 캐싱
브랜치: `feat/domestic-stock-api`
- [ ] 국내 주식 시세 조회 API Route
- [ ] 데이터 정규화 유틸리티 (통일된 응답 형식 변환)
- [ ] Supabase API 응답 캐싱 레이어

---

## Phase 3: 핵심 UI

### [5] 자산 선택 UI
브랜치: `feat/asset-selector`
- [ ] 자산 카테고리 탭 UI
- [ ] 자산 검색 입력 컴포넌트
- [ ] 선택된 자산 태그/칩 표시 컴포넌트
- [ ] 최대 비교 항목 수 제한 UI (초과 시 경고)

### [6] 기간 선택 UI
브랜치: `feat/period-selector`
- [ ] 기간 프리셋 버튼 (1M, 3M, 6M, 1Y, 3Y, 5Y, 10Y)
- [ ] 커스텀 기간 Date Picker

### [7] 변동률 비교 차트 구현
브랜치: `feat/comparison-chart`
- [ ] 변동률 비교 라인 차트 (기본 렌더링)
- [ ] 차트 인터랙션 (호버 툴팁, 범례)
- [ ] 차트 줌 인/아웃 (드래그 구간 확대)
- [ ] 차트 라인 하이라이트/숨기기
- [ ] 범례에 현재 변동률(%) 표시

---

## Phase 4: 추가 데이터 소스

### [8] 해외 주식 + 원자재 + 환율 API Route
브랜치: `feat/overseas-assets-api`
- [ ] 해외 주식 시세 조회 API Route
- [ ] 원자재(금/은/원유) 시세 조회 API Route (해외선물)
- [ ] 환율 시세 조회 API Route

### [9] 아파트 실거래가 API Route + 자산 메타데이터 관리
브랜치: `feat/apartment-api`
- [ ] 아파트 실거래가 API Route (공공데이터포털)
- [ ] 자산 메타데이터 관리 (종목코드 매핑, 아파트 단지 목록)

---

## Phase 5: 마무리

### [10] 요약 데이터 테이블 + URL 공유 기능
브랜치: `feat/data-table-share`
- [ ] 요약 데이터 테이블 (항목명 | 시작가 | 현재가 | 변동률 | 최고점 | 최저점)
- [ ] URL 공유 기능 (쿼리 파라미터 인코딩/디코딩)

### [11] 에러 처리 UI + 반응형 디자인
브랜치: `feat/polish`
- [ ] 에러 처리 UI (항목별 "데이터 없음" 인라인 표시, 전체 실패 시 차트 에러 메시지)
- [ ] 반응형 디자인

### [12] Vercel 배포 설정
브랜치: `chore/vercel-deploy`
- [ ] Vercel 배포 설정
