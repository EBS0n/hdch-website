"use client";

import { useEffect } from "react";

/**
 * 홈 페이지에서만 body 스크롤을 비활성화.
 * 다른 페이지로 이동하면 자동 복원.
 */
export default function HomeBodyLock() {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);
  return null;
}
