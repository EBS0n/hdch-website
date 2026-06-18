import Link from "next/link";
import { company } from "@/lib/site";

const NAVY = "#1A2670";
const DIVIDER = "#00AEEF";

/**
 * 사이드바 등에 배치하는 "문의 및 상담" 안내 박스.
 * 클릭 시 /products 로 이동하는 "제품 보러가기" 버튼 포함.
 *
 * 아이콘은 추후 이미지로 교체 예정 — 현재는 placeholder 블럭.
 */
export default function ContactBlock() {
  const items = [
    { id: "address", icon: "지도", text: "부산 사상구 사상로375번길 4, 현대화학" },
    { id: "tel", icon: "전화", text: company.tel },
    { id: "mail", icon: "메일", text: company.email },
  ];

  return (
    <div
      className="rounded-xl p-5 bg-white border-[2.5px]"
      style={{ borderColor: NAVY }}
    >
      <h3
        className="font-bold text-[19px] mb-3"
        style={{ color: NAVY }}
      >
        문의 및 상담
      </h3>
      <div className="border-t border-line" />

      <ul className="mt-4 space-y-3 w-fit mx-auto">
        {items.map((it) => (
          <li key={it.id} className="flex items-start gap-3">
            {/* 아이콘 (지도/전화/메일) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/${encodeURIComponent(`문의및상담 아이콘 ${it.icon}.png`)}`}
              alt=""
              aria-hidden
              className="w-5 h-5 flex-shrink-0 object-contain"
            />
            {/* 아이콘과 텍스트 사이 세로 구분선 (첫 줄에 align) */}
            <div
              className="w-px h-5 flex-shrink-0"
              style={{ backgroundColor: DIVIDER }}
              aria-hidden
            />
            {/* 텍스트 — 최대한 줄바꿈 없게, 필요 시 자연스럽게 흐름 */}
            <span className="text-[14px] font-normal text-ink-700 leading-snug">
              {it.text}
            </span>
          </li>
        ))}
      </ul>

      <div className="border-t border-line mt-5" />

      <p className="text-center text-[12px] text-ink-600 mt-4 mb-3">
        찾으시는 제품이 있으신가요?
      </p>
      <Link
        href="/products"
        className="block text-center text-white text-[15px] font-medium rounded-full py-2.5 hover:opacity-90 transition-opacity leading-none"
        style={{ backgroundColor: NAVY }}
      >
        제품 보러가기
      </Link>
    </div>
  );
}
