"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  /** 0~1 — 작을수록 더 부드럽게(느리게) 따라옴. 기본 0.08 */
  ease?: number;
  /** viewport 안에서 element top이 도달할 목표 위치 (0~1). 0.5 = 중앙 */
  targetRatio?: number;
};

/**
 * 스크롤 시 자식 요소를 부드럽게 따라오게 만드는 wrapper.
 * - 자식의 원래 위치보다 위로는 절대 안 올라감 (즉 트리 같은 위 요소를 덮지 않음)
 * - 스크롤이 멈추면 부드럽게 viewport 안의 목표 위치(기본 중앙)로 lerp
 */
export default function FollowOnScroll({
  children,
  ease = 0.08,
  targetRatio = 0.5,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    let currentOffset = 0;
    let rafId = 0;

    const tick = () => {
      // wrapper의 viewport 기준 top (현재 transform이 content에 적용되어 있어도 wrapper는 영향 없음)
      const wrapperTop = wrapper.getBoundingClientRect().top;
      const viewportH = window.innerHeight;
      const contentH = content.offsetHeight;

      // viewport 안에서 content top이 위치하길 원하는 좌표
      const targetInViewport = viewportH * targetRatio - contentH * 0.5;

      // wrapper top과의 차이만큼 content를 아래로 밀어줘야 함 (0보다 작으면 안 됨)
      let desiredOffset = Math.max(0, targetInViewport - wrapperTop);

      // 아래쪽 경계: content 박스가 속한 컬럼(aside) 밖으로 내려가
      // 페이지 하단 푸터를 침범하지 못하도록 최대 offset을 제한한다.
      const boundary = wrapper.closest("aside");
      if (boundary) {
        const boundaryBottom = boundary.getBoundingClientRect().bottom;
        const maxOffset = boundaryBottom - wrapperTop - contentH;
        desiredOffset = Math.min(desiredOffset, Math.max(0, maxOffset));
      }

      // lerp
      currentOffset += (desiredOffset - currentOffset) * ease;
      if (Math.abs(desiredOffset - currentOffset) < 0.1) {
        currentOffset = desiredOffset;
      }
      content.style.transform = `translateY(${currentOffset}px)`;

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [ease, targetRatio]);

  return (
    <div ref={wrapperRef}>
      <div ref={contentRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
