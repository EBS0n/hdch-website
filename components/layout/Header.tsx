"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import Logo from "@/components/ui/Logo";
import SideDrawer from "./SideDrawer";

type HeaderProps = {
  variant?: "dark" | "light";
};

export default function Header({ variant = "light" }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = variant === "light" || hovered !== null || scrolled;
  const textColor = "text-navy-800"; // 항상 호버 색(네이비)
  // 사진 영역 쪽(아래)으로 그림자가 떨어지는 효과
  const bg = `${isLight ? "bg-white" : "bg-transparent"} shadow-[0_8px_16px_-6px_rgba(0,0,0,0.1)]`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${bg}`}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 h-[80px] sm:h-[96px] flex items-center">
          <Link href="/" className="flex-none w-[160px]">
            <Logo variant="color" size={44} large={variant === "dark"} />
          </Link>

          <nav
            className="flex-1 hidden md:grid h-full"
            style={{
              gridTemplateColumns: `repeat(${nav.length}, minmax(0, 1fr))`,
            }}
          >
            {nav.map((item) => (
              <div
                key={item.label}
                className="relative h-full flex items-center justify-center"
                onMouseEnter={() => setHovered(item.label)}
              >
                <Link
                  href={item.href}
                  className={`text-[20px] lg:text-[22px] font-semibold ${textColor} hover:text-navy-600 transition-colors`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex-none w-[160px] flex justify-end ml-auto">
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="메뉴 열기"
              className={`flex flex-col gap-1.5 p-2 ${textColor}`}
            >
              <span className="block w-7 h-[2px] bg-current" />
              <span className="block w-7 h-[2px] bg-current" />
              <span className="block w-7 h-[2px] bg-current" />
            </button>
          </div>
        </div>

        {/* 메가 드롭다운 — 각 컬럼이 위의 nav 라벨과 정확히 align */}
        {hovered && (
          <div className="hidden md:block absolute top-full left-0 right-0 bg-white border-t border-line shadow-md">
            <div className="mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 py-8 flex items-start">
              <div className="flex-none w-[160px]" aria-hidden />
              <div
                className="flex-1 grid"
                style={{
                  gridTemplateColumns: `repeat(${nav.length}, minmax(0, 1fr))`,
                }}
              >
                {nav.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center text-center px-2"
                  >
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-[14px] text-ink-700 hover:text-navy-700 hover:font-semibold transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex-none w-[160px]" aria-hidden />
            </div>
          </div>
        )}
      </header>

      <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

