# src/hooks — 커스텀 React 훅

컴포넌트에서 사용하는 상태 관리 및 데이터 패칭 훅.

## 주요 훅 (예정)
- **useAssetSearch** — 자산 검색 및 선택 상태 관리
- **useComparisonData** — 선택된 항목들의 시세 데이터 패칭 및 변동률 계산
- **usePeriod** — 기간 선택 상태 관리
- **useShareUrl** — 현재 비교 설정을 URL 쿼리 파라미터로 인코딩/디코딩

## 규칙
- 파일명: camelCase, `use` 접두사 (예: `useComparisonData.ts`)
- API 호출은 `/api/*` 엔드포인트를 통해 수행 (직접 외부 API 호출 금지)
