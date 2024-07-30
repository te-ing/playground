export default function getQueryString(url: string) {
  const { searchParams } = new URL(url);
  const queryParams: Record<string, string> = {};

  // 쿼리 스트링의 각 키-값 쌍을 객체로 변환
  searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });

  return queryParams;
}
