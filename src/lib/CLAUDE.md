# src/lib — API 클라이언트 및 유틸리티

서버/클라이언트 양쪽에서 사용되는 핵심 로직.

## 주요 모듈 (예정)
- **supabase.ts** — Supabase 클라이언트 초기화
- **cache.ts** — Supabase 기반 API 응답 캐싱 로직
- **normalize.ts** — 서로 다른 API 응답을 통일된 형식으로 변환
- **api-clients/** — 외부 API별 클라이언트
  - `kis.ts` — 한국투자증권 OpenAPI (주식, 원자재, 환율 통합)
  - `apartment.ts` — 공공데이터포털 (아파트 실거래가)

## 규칙
- 외부 API 호출은 반드시 이 폴더의 클라이언트를 통해 수행
- 모든 API 클라이언트는 통일된 반환 형식 사용: `{ date: string, value: number }[]`
- 환경변수 접근은 이 폴더에서만 (API 키 등)
