"use client";

import { useEffect, useState } from "react";
import ImageSlot from "@/components/ui/ImageSlot";
import type { ImageSlotId } from "@/lib/imageManifest";

/**
 * 홈 풀스크린 슬라이드쇼.
 * - 6장의 사진을 2초 간격으로 자동 전환 (fade)
 * - 사진은 `public/images/home-hero-1.jpg` ~ `home-hero-6.jpg`
 * - 사진이 없으면 ImageSlot 플레이스홀더가 자리에 표시됨
 */

const SLIDES: ImageSlotId[] = [
  "home-hero-1",
  "home-hero-2",
  "home-hero-3",
  "home-hero-4",
  "home-hero-5",
  "home-hero-6",
];

const INTERVAL_MS = 4000;

export default function HomeMedia() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {SLIDES.map((slot, idx) => (
        <div
          key={slot}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={idx !== current}
        >
          <ImageSlot
            id={slot}
            fixedAspect={false}
            className="w-full h-full"
            caption={`홈 슬라이드 ${idx + 1} / ${SLIDES.length}`}
          />
        </div>
      ))}
    </div>
  );
}
