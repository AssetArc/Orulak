import { createClient } from '@supabase/supabase-js'

// 환경변수 누락 시 모듈 로드 시점에 즉시 실패 (빠른 오류 감지)
function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing environment variable: ${name}`)
  return value
}

const supabaseUrl = requireEnv('NEXT_PUBLIC_SUPABASE_URL')
const supabaseAnonKey = requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY')

/**
 * 서버 컴포넌트 / Route Handler용 Supabase 클라이언트
 * 요청 격리를 위해 호출마다 새 인스턴스 생성
 */
export function createServerClient() {
  return createClient(supabaseUrl, supabaseAnonKey)
}

/**
 * 클라이언트 컴포넌트용 Supabase 클라이언트
 */
export function createBrowserClient() {
  return createClient(supabaseUrl, supabaseAnonKey)
}
