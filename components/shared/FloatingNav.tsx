"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * 우하단 플로팅 버튼 3개 — 맨 위로 / 홈으로 / 맨 아래로.
 * - 홈("/")에서는 표시하지 않음.
 * - 버튼이 푸터(네이비) 영역과 겹치면 흰 배경 + 네이비 아이콘으로 반전.
 */
export default function FloatingNav() {
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [onFooter, setOnFooter] = useState(false);

  useEffect(() => {
    if (pathname === "/") return;

    const update = () => {
      const wrap = wrapRef.current;
      const footer = document.querySelector("footer");
      if (!wrap || !footer) return;
      const w = wrap.getBoundingClientRect();
      const f = footer.getBoundingClientRect();
      // 버튼 묶음과 푸터가 세로로 겹치면 true
      setOnFooter(f.top < w.bottom && f.bottom > w.top);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  if (pathname === "/") return null;

  const scrollTo = (top: number) =>
    window.scrollTo({ top, behavior: "smooth" });

  const btn = `group flex items-center justify-center w-11 h-11 rounded-full shadow-lg transition-colors ${
    onFooter
      ? "bg-white text-navy-700 hover:bg-[#3BACD5] hover:text-white"
      : "bg-navy-700 text-white hover:bg-[#3BACD5]"
  }`;

  return (
    <div
      ref={wrapRef}
      className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col gap-2"
    >
      <button
        type="button"
        onClick={() => scrollTo(0)}
        aria-label="맨 위로"
        className={btn}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-200 group-hover:scale-[1.2]">
          <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <Link href="/" aria-label="홈으로" className={btn}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-200 group-hover:scale-[1.2]">
          <path d="M3 11l9-8 9 8M5 9.5V21h14V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <button
        type="button"
        onClick={() => scrollTo(document.documentElement.scrollHeight)}
        aria-label="맨 아래로"
        className={btn}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-200 group-hover:scale-[1.2]">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
