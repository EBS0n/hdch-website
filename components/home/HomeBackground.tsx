"use client";

import { useEffect } from "react";

/**
 * 홈 페이지에서만 body/html 배경을 흰색(#ffffff)으로 강제한다.
 * - 전역 CSS의 #f8fafb 배경을 인라인 스타일로 덮어쓰므로 확실히 적용됨.
 * - 다른 페이지로 이동(언마운트)하면 원래 값으로 복원 → 전역 #f8fafb 유지.
 */
export default function HomeBackground() {
  useEffect(() => {
    const prevBody = document.body.style.background;
    const prevHtml = document.documentElement.style.background;
    document.body.style.background = "#ffffff";
    document.documentElement.style.background = "#ffffff";
    return () => {
      document.body.style.background = prevBody;
      document.documentElement.style.background = prevHtml;
    };
  }, []);
  return null;
}
