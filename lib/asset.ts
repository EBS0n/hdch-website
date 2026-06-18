/**
 * 자산(public 폴더) 절대경로 헬퍼.
 *
 * GitHub Pages처럼 하위 경로(`/hdch-website/`)로 배포할 때는
 * 빌드 시 `NEXT_PUBLIC_BASE_PATH=/hdch-website` 를 주면 자산 경로 앞에 붙는다.
 * - 로컬 dev / 정보넷 루트 배포 등 basePath가 없을 땐 그대로 반환(영향 없음).
 *
 * ※ next/link, next/image, _next 자산은 Next가 자동으로 basePath를 처리하므로
 *   여기서는 raw <img src> / <video src> / 다운로드 <a href> 같은 경우에만 사용.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
