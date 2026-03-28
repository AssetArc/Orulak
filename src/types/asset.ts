// 자산 카테고리 상수 (런타임 반복 + 타입 추론에 모두 활용)
export const ASSET_CATEGORIES = {
  DOMESTIC_STOCK: 'domestic_stock',
  OVERSEAS_STOCK: 'overseas_stock',
  COMMODITY: 'commodity',
  FOREX: 'forex',
  APARTMENT: 'apartment',
} as const

// 카테고리 유니온 타입
export type AssetCategory = (typeof ASSET_CATEGORIES)[keyof typeof ASSET_CATEGORIES]

// 자산 항목 인터페이스
export interface Asset {
  id: string // 고유 식별자 (예: "KR7005930003")
  name: string // 표시 이름 (예: "삼성전자")
  code: string // API 조회용 코드 (예: "005930")
  category: AssetCategory
  meta?: Record<string, string> // 카테고리별 추가 메타데이터
}
