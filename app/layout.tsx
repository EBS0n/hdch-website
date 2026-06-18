import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "현대화학 | HC Chemical",
  description:
    "플라스틱 캡 전문 제조 - 현대화학. 외경/내경/PVC/PE/Frange/육각/UT/디핑 CAP 등 다양한 캡 제품을 생산합니다.",
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
      <body className="min-h-full flex flex-col bg-white text-[color:var(--color-ink-900)]">
        {children}
      </body>
    </html>
  );
}
