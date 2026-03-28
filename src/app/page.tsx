// 서버 컴포넌트 — 인터랙티브 섹션은 향후 클라이언트 컴포넌트로 교체 예정

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl flex flex-col gap-6 px-4 py-8">
      {/* 섹션 1: 비교 항목 선택 */}
      <section className="rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
          비교 항목 선택
        </h2>
        <div className="h-10 rounded-md bg-gray-100 animate-pulse" />
        <div className="mt-3 flex gap-2">
          {['삼성전자', '잠실엘스', '금'].map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* 섹션 2: 기간 선택 */}
      <section className="rounded-lg border border-gray-200 bg-white p-4">
        <div className="flex flex-wrap gap-2">
          {['1M', '3M', '6M', '1Y', '3Y', '5Y', '10Y', '직접 입력'].map((label) => (
            <button
              key={label}
              disabled
              className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-600"
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* 섹션 3: 변동률 비교 차트 */}
      <section className="rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
          변동률 비교 차트
        </h2>
        <div className="flex h-80 items-center justify-center rounded-md bg-gray-50 text-sm text-gray-400">
          항목과 기간을 선택하면 차트가 표시됩니다
        </div>
      </section>

      {/* 섹션 4: 요약 정보 */}
      <section className="rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
          요약 정보
        </h2>
        <div className="h-24 rounded-md bg-gray-50 animate-pulse" />
      </section>

      {/* 섹션 5: 공유 */}
      <section className="flex justify-end gap-3">
        <button
          disabled
          className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-600"
        >
          URL 복사
        </button>
        <button disabled className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white">
          공유
        </button>
      </section>
    </div>
  )
}
