import type { Metadata } from "next";
import "./globals.css";
import FloatingNav from "@/components/shared/FloatingNav";

export const metadata: Metadata = {
  title: "현대화학 | HC Chemical",
  description:
    "플라스틱 캡 전문 제조 - 현대화학. 외경/내경/PVC/PE/Frange/육각/UT/디핑 CAP 등 다양한 캡 제품을 생산합니다.",
  // 검색엔진 색인 차단 — 링크를 받은 사람만 접근하는 비공개 미리보기 용도
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8fafb] text-[color:var(--color-ink-900)]">
        {children}
        <FloatingNav />
      </body>
    </html>
  );
}
