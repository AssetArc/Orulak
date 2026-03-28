// KIS API 토큰 응답 타입 (API 응답 원형 그대로 보존)
interface KisTokenResponse {
  access_token: string
  token_type: 'Bearer'
  expires_in: number // 초 단위 (항상 86400)
  access_token_token_expired: string // 만료 일시 문자열
}

// 인메모리 캐시 엔트리
interface TokenCache {
  accessToken: string
  expiresAt: number // Unix ms 타임스탬프
}

const KIS_BASE_URL = 'https://openapi.koreainvestment.com:9443'
// 만료 5분 전에 미리 갱신하여 요청 도중 만료 방지
const EXPIRY_BUFFER_MS = 5 * 60 * 1000

// 모듈 스코프 캐시 — 프로세스 내 단일 인스턴스 유지
let tokenCache: TokenCache | null = null
// 진행 중인 토큰 발급 Promise — 동시 요청 시 중복 발급 방지
let pendingTokenRequest: Promise<TokenCache> | null = null

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing environment variable: ${name}`)
  return value
}

// 캐시된 토큰이 유효한지 확인
function isCacheValid(cache: TokenCache): boolean {
  return Date.now() < cache.expiresAt - EXPIRY_BUFFER_MS
}

// KIS API에 새 액세스 토큰 발급 요청
async function fetchNewToken(): Promise<TokenCache> {
  const appkey = requireEnv('KIS_APP_KEY')
  const appsecret = requireEnv('KIS_APP_SECRET')

  const response = await fetch(`${KIS_BASE_URL}/oauth2/tokenP`, {
    method: 'POST',
    // 업스트림 응답 지연 시 무한 대기 방지
    signal: AbortSignal.timeout(10_000),
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      appkey,
      appsecret,
    }),
  })

  if (!response.ok) {
    throw new Error(`KIS 토큰 발급 실패: ${response.status} ${response.statusText}`)
  }

  let data: KisTokenResponse
  try {
    data = (await response.json()) as KisTokenResponse
  } catch {
    throw new Error('KIS 토큰 응답 파싱 실패: 응답이 JSON 형식이 아닙니다')
  }

  if (!data.access_token || typeof data.expires_in !== 'number') {
    throw new Error('KIS 토큰 응답 형식이 올바르지 않습니다')
  }

  return {
    accessToken: data.access_token,
    // expires_in은 초 단위, 현재 시각에 더해 ms로 변환
    expiresAt: Date.now() + data.expires_in * 1000,
  }
}

/**
 * 유효한 KIS API Bearer 토큰 반환.
 * 캐시된 토큰이 유효하면 재사용, 만료됐거나 없으면 신규 발급.
 * 서버 전용 — 클라이언트 컴포넌트에서 import 금지.
 */
export async function getAccessToken(): Promise<string> {
  if (tokenCache && isCacheValid(tokenCache)) {
    return tokenCache.accessToken
  }

  // 이미 진행 중인 요청이 있으면 재사용하여 중복 발급 방지
  if (!pendingTokenRequest) {
    pendingTokenRequest = fetchNewToken().finally(() => {
      pendingTokenRequest = null
    })
  }

  tokenCache = await pendingTokenRequest
  return tokenCache.accessToken
}
