"use client";

import Link from "next/link";
import { useState } from "react";
import { productTree, type ProductNode } from "@/lib/site";
import ContactBlock from "@/components/shared/ContactBlock";
import FollowOnScroll from "@/components/shared/FollowOnScroll";

type ProductSidebarProps = {
  /** 현재 활성화된 경로 (예: "outer/pvc/tip") */
  active?: string;
};

export default function ProductSidebar({ active }: ProductSidebarProps) {
  const activeParts = active?.split("/") ?? [];

  // 활성 경로의 모든 상위 노드는 펼친 상태로 시작
  const initialOpen = new Set<string>();
  for (let i = 1; i <= activeParts.length; i++) {
    initialOpen.add(activeParts.slice(0, i).join("/"));
  }
  const [openSet, setOpenSet] = useState<Set<string>>(initialOpen);

  const toggle = (key: string) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    // self-stretch (default) → aside가 grid row 높이 → sticky 동작 가능
    <aside>
      {/* 사이드바 트리 — 일반 flow, 스크롤 시 위로 흘러감 */}
      <div className="relative pl-7">
        <span
          aria-hidden
          className="absolute left-0 top-0 bottom-0 w-[5px] bg-navy-700 rounded-full"
        />
        <ul className="space-y-1">
          {productTree.map((node) => (
            <TreeItem
              key={node.slug}
              node={node}
              path={[node.slug]}
              active={active}
              openSet={openSet}
              toggle={toggle}
              depth={0}
            />
          ))}
        </ul>
      </div>

      {/* 문의 및 상담 박스 — 사이드바가 컬럼이 되는 lg 이상에서만 표시.
          좁은 화면에서는 사이드바가 가로 전체라 위치/크기가 어색해지므로 숨김. */}
      <div className="hidden lg:block mt-10">
        <FollowOnScroll ease={0.08} targetRatio={0.5}>
          <ContactBlock />
        </FollowOnScroll>
      </div>
    </aside>
  );
}

function TreeItem({
  node,
  path,
  active,
  openSet,
  toggle,
  depth,
}: {
  node: ProductNode;
  path: string[];
  active?: string;
  openSet: Set<string>;
  toggle: (key: string) => void;
  depth: number;
}) {
  const key = path.join("/");
  const isOpen = openSet.has(key);
  const isActive = active === key;
  const hasChildren = (node.children?.length ?? 0) > 0;

  // 깊이별 스타일
  const sizeClass = ["text-[18px]", "text-[18px]", "text-[12px]", "text-[12px]"][
    Math.min(depth, 3)
  ];
  const weightClass = depth === 0 ? "font-semibold" : "font-normal";

  return (
    <li>
      <div className="flex items-center justify-between">
        <Link
          href={`/products/${key}`}
          className={`flex-1 py-2 hover:text-navy-700 ${sizeClass} ${weightClass} ${
            isActive
              ? "text-navy-800 font-bold"
              : depth === 0
                ? "text-ink-900"
                : "text-ink-700"
          }`}
        >
          {depth > 0 && <span className="opacity-50 mr-1">·</span>}
          {node.name}
        </Link>
        {hasChildren && (
          <button
            type="button"
            onClick={() => toggle(key)}
            aria-label={`${node.name} 펼치기`}
            className="p-1 text-navy-400 hover:text-navy-700"
          >
            <span
              className={`inline-block text-xs transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
            >
              ›
            </span>
          </button>
        )}
      </div>
      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-200 ${
            isOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <ul className="pl-3 mt-0.5">
            {node.children!.map((c) => (
              <TreeItem
                key={c.slug}
                node={c}
                path={[...path, c.slug]}
                active={active}
                openSet={openSet}
                toggle={toggle}
                depth={depth + 1}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
