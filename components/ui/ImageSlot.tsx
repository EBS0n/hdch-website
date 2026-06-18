"use client";

import { useEffect, useState } from "react";
import { getSlotMeta, isSlotId, type ImageSlotId } from "@/lib/imageManifest";
import { asset } from "@/lib/asset";

type ImageSlotProps = {
  id: ImageSlotId | string;
  className?: string;
  /** 컨테이너에 비율을 강제할지 (true면 width/height로 aspect-ratio 적용) */
  fixedAspect?: boolean;
  rounded?: "none" | "md" | "lg" | "full";
  /** 플레이스홀더에 표시할 추가 라벨 */
  caption?: string;
  /** 작은 영역에 들어갈 때 — placeholder를 한 줄짜리로 압축 */
  compact?: boolean;
  /** 이미지 채움 방식. "cover"=칸을 채우고 넘침은 잘림(기본), "contain"=잘림 없이 전체 맞춤(로고 등) */
  fit?: "cover" | "contain";
};

const radiusClass: Record<NonNullable<ImageSlotProps["rounded"]>, string> = {
  none: "",
  md: "rounded-md",
  lg: "rounded-xl",
  full: "rounded-full",
};

/**
 * 이미지 슬롯 컴포넌트.
 *
 * - 클라이언트 마운트 시 `/images/<id>.<ext>` 파일 존재 여부를 HEAD 요청으로 확인
 * - 파일 있음 → 실제 이미지 표시
 * - 파일 없음 / 확인 전 → 플레이스홀더 박스 (회색 배경 + 슬롯 ID + 크기 설명)
 * - 자세한 매뉴얼은 `public/images/MANIFEST.md` 참고
 */
export default function ImageSlot({
  id,
  className = "",
  fixedAspect = true,
  rounded = "none",
  caption,
  compact = false,
  fit = "cover",
}: ImageSlotProps) {
  const meta = isSlotId(id) ? getSlotMeta(id) : undefined;
  const [exists, setExists] = useState<boolean | null>(null);

  const src = meta ? asset(`/images/${id}.${meta.ext ?? "jpg"}`) : null;

  useEffect(() => {
    if (!src) return;
    let cancelled = false;
    fetch(src, { method: "HEAD" })
      .then((r) => {
        if (!cancelled) setExists(r.ok);
      })
      .catch(() => {
        if (!cancelled) setExists(false);
      });
    return () => {
      cancelled = true;
    };
  }, [src]);

  if (!meta) {
    return (
      <div className="bg-soft border-2 border-dashed border-red-300 p-4 text-xs text-red-600 rounded">
        ⚠️ 정의되지 않은 이미지 슬롯: <code>{id}</code>
      </div>
    );
  }

  const aspectStyle = fixedAspect
    ? { aspectRatio: `${meta.width} / ${meta.height}` }
    : undefined;
  const radius = radiusClass[rounded];

  // 파일이 없거나 아직 확인 전 → 플레이스홀더
  if (exists !== true) {
    if (compact) {
      return (
        <div
          style={aspectStyle}
          className={`image-slot-empty bg-[color:var(--color-soft)] border-2 border-dashed border-navy-300 ${radius} flex items-center justify-center text-center px-2 overflow-hidden ${className}`}
        >
          <code className="text-[9px] sm:text-[10px] text-ink-500 break-all">
            📷 {id}.{meta.ext ?? "jpg"}
          </code>
        </div>
      );
    }
    return (
      <div
        style={aspectStyle}
        className={`image-slot-empty bg-[color:var(--color-soft)] border-2 border-dashed border-navy-300 ${radius} flex flex-col items-center justify-center text-center p-4 text-xs sm:text-sm text-ink-600 ${className}`}
      >
        <div className="text-navy-700 text-base sm:text-lg font-semibold">
          📷 이미지 슬롯
        </div>
        <code className="mt-2 px-2 py-1 bg-white/80 rounded text-[10px] sm:text-xs break-all">
          /images/{id}.{meta.ext ?? "jpg"}
        </code>
        <p className="mt-2 max-w-[80%] leading-snug">
          {caption ?? meta.description}
        </p>
        <p className="mt-1 text-[10px] sm:text-xs text-ink-400">
          권장 크기: {meta.width} × {meta.height}px
          {meta.aspectLabel ? ` (${meta.aspectLabel})` : ""}
        </p>
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src!}
      alt={meta.alt}
      width={meta.width}
      height={meta.height}
      style={aspectStyle}
      className={`${fit === "contain" ? "object-contain" : "object-cover"} w-full ${fixedAspect ? "h-auto" : "h-full"} ${radius} ${className}`}
    />
  );
}
