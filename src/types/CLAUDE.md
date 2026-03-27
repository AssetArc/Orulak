# src/types — TypeScript 타입 정의

프로젝트 전역에서 공유되는 타입/인터페이스.

## 주요 타입 (예정)
- **Asset** — 자산 항목 (카테고리, 이름, 코드, 메타데이터)
- **PriceData** — 시계열 가격 데이터 `{ date: string, value: number }`
- **ComparisonResult** — 변동률 계산 결과
- **Period** — 기간 설정 (프리셋 또는 커스텀)
- **AssetCategory** — 카테고리 enum (주식, 아파트, 원자재, 환율, 금리)

## 규칙
- 파일명: camelCase (예: `asset.ts`, `priceData.ts`)
- `interface` 우선 사용, 유니온/유틸리티 타입은 `type` 사용
- API 응답 타입과 프론트엔드 타입 분리
