import type { Asset } from './asset'

// 정규화된 시계열 가격 데이터 단위
export interface PriceData {
  date: string // ISO 8601 날짜 문자열 (예: "2024-01-15")
  value: number // 원시 가격 또는 변동률(%)
}

// 기간 프리셋 (UI 버튼에 대응)
export type PeriodPreset = '1M' | '3M' | '6M' | '1Y' | '3Y' | '5Y' | '10Y'

// 기간 설정 — 프리셋 또는 커스텀 날짜 범위
export type Period =
  | { kind: 'preset'; preset: PeriodPreset }
  | { kind: 'custom'; startDate: string; endDate: string }

// 단일 자산의 비교 결과 (변동률 계산 완료 상태)
export interface ComparisonResult {
  asset: Asset
  data: PriceData[] // 변동률(%) 기준으로 정규화된 시계열
  startValue: number // 기간 시작 시점 원시 가격
  currentValue: number // 기간 종료 시점 원시 가격
  changePercent: number // 전체 변동률 (%)
  highPercent: number // 기간 내 최고 변동률 (%)
  lowPercent: number // 기간 내 최저 변동률 (%)
  error?: string // 데이터 조회 실패 시 오류 메시지
}
