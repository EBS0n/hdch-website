type PageTitleProps = {
  /** 메인 제목 위의 작은 라벨 (예: "CEO 인사말", "SINCE 1987") */
  eyebrow?: React.ReactNode;
  /** 메인 제목 */
  children: React.ReactNode;
  /** 제목 아래의 부제목 */
  subtitle?: React.ReactNode;
  /** 가운데 정렬 (기본) 또는 왼쪽 정렬 */
  align?: "center" | "left";
  /** 크기 — Figma의 페이지 제목은 대부분 lg 사이즈. xl은 임팩트 강한 페이지용. */
  size?: "md" | "lg" | "xl";
};

const sizeClass = {
  md: "text-2xl sm:text-3xl",
  lg: "text-3xl sm:text-4xl",
  xl: "text-4xl sm:text-5xl",
};

export default function PageTitle({
  eyebrow,
  children,
  subtitle,
  align = "center",
  size = "lg",
}: PageTitleProps) {
  return (
    <header className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p className="text-[13px] sm:text-[14px] text-navy-600 tracking-[0.2em] mb-3 font-medium">
          {eyebrow}
        </p>
      )}
      <h1
        className={`${sizeClass[size]} font-bold text-navy-900 tracking-tight leading-tight`}
      >
        {children}
      </h1>
      {subtitle && (
        <p className="mt-4 text-[14px] sm:text-[15px] text-ink-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
}
