import { getAccessToken } from './kis-auth'

const KIS_BASE_URL = 'https://openapi.koreainvestment.com:9443'

/**
 * Authorization 헤더가 자동으로 추가되는 KIS API 기본 fetch 래퍼.
 * 모든 KIS API 호출은 이 함수를 통해 수행.
 * 서버 전용 — 클라이언트 컴포넌트에서 import 금지.
 */
export async function kisFetch<T>(
  path: string,
  options: Omit<RequestInit, 'headers'> & {
    headers?: Record<string, string>
  } = {}
): Promise<T> {
  const token = await getAccessToken()
  const { headers: extraHeaders, ...restOptions } = options

  const response = await fetch(`${KIS_BASE_URL}${path}`, {
    ...restOptions,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...extraHeaders, // 호출부에서 추가 헤더 주입 허용 (tr_id 등)
    },
  })

  if (!response.ok) {
    throw new Error(`KIS API 요청 실패: ${path} — ${response.status} ${response.statusText}`)
  }

  try {
    return (await response.json()) as T
  } catch {
    throw new Error(`KIS API 응답 파싱 실패: ${path}`)
  }
}
