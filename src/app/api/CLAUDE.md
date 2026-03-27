# src/app/api — 백엔드 API 엔드포인트

Next.js API Route로 구현되는 서버 사이드 엔드포인트. 각 route.ts는 서버리스 함수로 배포된다.

## 엔드포인트 구조 (예정)
- `/api/stocks` — 국내/해외 주식 시세 (한국투자증권 OpenAPI)
- `/api/apartments` — 아파트 실거래가 (공공데이터포털)
- `/api/commodities` — 원자재 가격 - 금/은/원유 (한국투자증권 OpenAPI 해외선물)
- `/api/exchange-rates` — 환율 (한국투자증권 OpenAPI)

## 규칙
- 각 엔드포인트는 `route.ts` 파일에 GET/POST 핸들러로 구현
- 외부 API 호출 시 lib/의 클라이언트 함수 사용
- 응답은 통일된 형식으로 정규화: `{ date, value }[]`
- Supabase 캐싱 레이어를 통해 동일 요청 반복 방지
- API 키는 환경변수로 관리 (.env.local)
