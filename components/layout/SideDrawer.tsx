"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, type NavItem } from "@/lib/site";

type SideDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function SideDrawer({ open, onClose }: SideDrawerProps) {
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());

  const toggle = (key: string) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden
      />

      <aside
        className={`fixed top-0 right-0 h-full w-[320px] sm:w-[400px] bg-white z-[60] shadow-2xl transition-transform duration-300 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-end px-6 h-[80px] sm:h-[96px] border-b border-line">
          <button
            onClick={onClose}
            aria-label="메뉴 닫기"
            className="text-navy-800 text-3xl leading-none"
          >
            ×
          </button>
        </div>

        <nav className="px-6 py-6">
          {nav.map((item) => (
            <DrawerSection
              key={item.label}
              item={item}
              openSet={openSet}
              toggle={toggle}
              onClose={onClose}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}

function DrawerSection({
  item,
  openSet,
  toggle,
  onClose,
}: {
  item: NavItem;
  openSet: Set<string>;
  toggle: (key: string) => void;
  onClose: () => void;
}) {
  const isOpen = openSet.has(item.label);
  return (
    <div className="border-b border-line last:border-b-0">
      <button
        type="button"
        onClick={() => toggle(item.label)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-lg font-bold text-navy-800">{item.label}</span>
        <span
          className={`text-navy-400 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          ›
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[2000px] opacity-100 pb-3" : "max-h-0 opacity-0"
        }`}
      >
        {item.children?.map((child) => (
          <DrawerNode
            key={child.href}
            node={child}
            depth={1}
            openSet={openSet}
            toggle={toggle}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
}

function DrawerNode({
  node,
  depth,
  openSet,
  toggle,
  onClose,
}: {
  node: NavItem;
  depth: number;
  openSet: Set<string>;
  toggle: (key: string) => void;
  onClose: () => void;
}) {
  const hasChildren = (node.children?.length ?? 0) > 0;
  const isOpen = openSet.has(node.href);
  const sizeClass = depth === 1 ? "text-[14px]" : "text-[12px]";
  const colorClass = depth === 1 ? "text-navy-800 font-medium" : "text-ink-600";

  return (
    <div>
      {hasChildren ? (
        <button
          type="button"
          onClick={() => toggle(node.href)}
          className={`w-full flex items-center justify-between py-2 pl-${depth * 3} text-left ${sizeClass} ${colorClass} hover:text-navy-700`}
          style={{ paddingLeft: depth * 14 }}
        >
          <span>{node.label}</span>
          <span
            className={`text-xs text-navy-300 transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
          >
            ›
          </span>
        </button>
      ) : (
        <Link
          href={node.href}
          onClick={onClose}
          className={`block py-2 ${sizeClass} ${colorClass} hover:text-navy-700`}
          style={{ paddingLeft: depth * 14 }}
        >
          {depth > 1 ? "· " : ""}
          {node.label}
        </Link>
      )}
      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-200 ${
            isOpen ? "max-h-[1500px]" : "max-h-0"
          }`}
        >
          {node.children!.map((c) => (
            <DrawerNode
              key={c.href}
              node={c}
              depth={depth + 1}
              openSet={openSet}
              toggle={toggle}
              onClose={onClose}
            />
          ))}
        </div>
      )}
    </div>
  );
}
