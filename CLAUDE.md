# Orulak - 자산 가격 비교 시각화 플랫폼

## 프로젝트 개요
다양한 자산(아파트, 주식, 금/은/원유, 환율)의 가격 등락을 하나의 차트에서 변동률(%)로 비교하는 웹 서비스.
인증 없이 누구나 사용 가능. 상세 기획은 PLAN.md 참조.

## 기술 스택
- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Chart**: Recharts
- **DB**: Supabase (API 캐싱, 자산 메타데이터)
- **Deploy**: Vercel
- **Auth**: 없음

## 데이터 소스
| 카테고리 | API |
|---------|-----|
| 국내/해외 주식 | 한국투자증권 OpenAPI |
| 아파트 실거래가 | 공공데이터포털 (국토교통부) |
| 원자재 (금/은/원유) | 한국투자증권 OpenAPI (해외선물) |
| 환율 | 한국투자증권 OpenAPI |

## 폴더 구조
```
src/
├── app/           # Next.js App Router (페이지 + API Route)
│   └── api/       # 백엔드 API 엔드포인트
├── components/    # UI 컴포넌트
├── lib/           # API 클라이언트, 유틸리티, Supabase
├── hooks/         # 커스텀 React 훅
└── types/         # TypeScript 타입 정의
```

## 코딩 컨벤션
- 2-space indent
- camelCase (변수/함수), PascalCase (컴포넌트/타입)
- 절대 경로 import: `@/components/...`, `@/lib/...`
- 서버 컴포넌트 기본, 클라이언트 필요 시 `"use client"` 명시

## 커밋 메시지 (Conventional Commits)
```
feat: 새로운 기능 추가
fix: 버그 수정
chore: 설정, 의존성, 빌드 등 비기능 변경
refactor: 기능 변경 없는 코드 구조 개선
style: UI/스타일 변경
docs: 문서 변경
```

## Git 워크플로우
- 브랜치: `feat/xxx`, `fix/xxx`, `chore/xxx` → main으로 PR 머지
- 이슈 1개 = PR 1개 = 독립적으로 동작 확인 가능한 최소 단위

## 환경변수
- `.env.local`에 API 키 관리 (`.env.example` 참조)
- `NEXT_PUBLIC_` 접두사: 클라이언트 노출 필요 시만 사용
- 서버 전용 키는 접두사 없이 사용
- 발급 완료: 한국투자증권, 공공데이터포털 (모든 데이터 소스 커버)

## 에러 처리
- API 실패 시 해당 항목만 "데이터 없음" 인라인 표시, 나머지 정상 렌더링
- 전체 실패 시 차트 영역에 에러 메시지

## 기타 규칙
- UI 텍스트: 한국어 전용 (다국어 미지원)
- 코드 내 변수명/함수명: 영어
- 코드 내 주석: 한국어
- 패키지 매니저: npm
- 테스트: 초기 단계 생략, 핵심 로직 안정화 후 추가

## 명령어
- `npm run dev` — 개발 서버
- `npm run build` — 프로덕션 빌드
- `npm run lint` — ESLint 실행
