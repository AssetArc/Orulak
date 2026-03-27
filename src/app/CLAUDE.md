# src/app — 페이지 및 레이아웃

Next.js App Router 기반. 이 폴더의 파일은 URL 라우팅에 직접 매핑된다.

## 주요 파일
- `layout.tsx` — 전역 레이아웃 (헤더, 폰트, 메타데이터)
- `page.tsx` — 메인 페이지 (항목 선택 → 기간 선택 → 차트 → 테이블)
- `api/` — 백엔드 API Route (별도 CLAUDE.md 참조)

## 규칙
- 페이지 컴포넌트는 기본적으로 서버 컴포넌트
- 인터랙티브 UI는 components/에 클라이언트 컴포넌트로 분리
- 메타데이터는 `export const metadata`로 정의
