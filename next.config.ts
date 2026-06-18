import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 호스팅(PHP 웹호스팅 등)에 업로드할 수 있도록 정적 export로 빌드
  output: "export",
  // 폴더/index.html 형태로 생성 → Apache 등 일반 웹호스팅에서 경로가 자연스럽게 열림
  trailingSlash: true,
};

export default nextConfig;
