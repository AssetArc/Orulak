# src/components — UI 컴포넌트

재사용 가능한 React 컴포넌트. 대부분 `"use client"` 클라이언트 컴포넌트.

## 주요 컴포넌트 (예정)
- **AssetSearch** — 자산 검색/선택 (카테고리별 탭 + 통합 검색)
- **SelectedAssets** — 선택된 항목 태그/칩 표시
- **PeriodSelector** — 기간 선택 (프리셋 버튼 + 커스텀 Date Picker)
- **ComparisonChart** — 변동률(%) 비교 라인 차트 (Recharts)
- **SummaryTable** — 요약 테이블 (시작가, 현재가, 변동률, 최고/최저)
- **ShareButton** — URL 복사/공유

## 규칙
- 컴포넌트 파일명: PascalCase (예: `ComparisonChart.tsx`)
- Props는 같은 파일 내 interface로 정의
- 스타일링: Tailwind CSS 유틸리티 클래스 사용
