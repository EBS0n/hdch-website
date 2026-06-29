"use client";

import { useEffect, useState } from "react";
import { fetchNotices, type Notice } from "@/lib/notices-source";

/**
 * 공지 목록 (구글 시트 연동).
 * - 마운트 시 구글 시트(또는 기본 공지)에서 목록을 불러온다.
 * - 제목을 클릭하면 해당 공지 내용이 아래로 펼쳐진다.
 * - 표 디자인은 기존과 동일.
 */
export default function NoticeList() {
  const [list, setList] = useState<Notice[] | null>(null);
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    fetchNotices().then((data) => {
      if (alive) setList(data);
    });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <table className="w-full text-[14px] sm:text-[15px]">
      <thead>
        <tr className="border-y-2 border-navy-700 text-navy-700">
          <th className="py-4 text-center w-[70%] font-semibold">제목</th>
          <th className="py-4 text-center font-semibold">등록일</th>
        </tr>
      </thead>
      <tbody>
        {list === null && (
          <tr className="border-b border-line">
            <td colSpan={2} className="py-8 text-center text-ink-400">
              불러오는 중…
            </td>
          </tr>
        )}

        {list?.map((n) => {
          const isOpen = openId === n.id;
          return (
            <tr
              key={n.id}
              className="border-b border-line align-top"
            >
              <td colSpan={2} className="p-0">
                {/* 제목 + 등록일 줄 */}
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : n.id)}
                  className="w-full flex items-center hover:bg-soft transition-colors text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 py-4 px-4 text-navy-700">
                    {n.title}
                  </span>
                  <span className="w-[140px] py-4 px-4 text-center text-ink-500 tabular-nums">
                    {n.date}
                  </span>
                </button>

                {/* 펼쳐지는 내용 — 높이/투명도 부드럽게 (FAQ와 동일 방식) */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="bg-soft px-6 py-6 border-t border-line">
                      <article className="max-w-none text-ink-700 leading-loose whitespace-pre-line text-[14px] sm:text-[15px]">
                        {n.body || "(내용 없음)"}
                      </article>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}

        {list?.length === 0 && (
          <tr className="border-b border-line">
            <td colSpan={2} className="py-8 text-center text-ink-400">
              등록된 공지가 없습니다.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
