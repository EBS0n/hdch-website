import type { NextConfig } from "next";

// GitHub Pages처럼 하위 경로로 배포할 때만 값이 들어옴(예: "/hdch-website").
// 로컬 dev / 정보넷 루트 배포에서는 비어 있어 영향 없음.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // 정적 호스팅(PHP 웹호스팅 등)에 업로드할 수 있도록 정적 export로 빌드
  output: "export",
  // 폴더/index.html 형태로 생성 → Apache 등 일반 웹호스팅에서 경로가 자연스럽게 열림
  trailingSlash: true,
  // 하위 경로 배포 시 라우팅/자산 경로 보정
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
