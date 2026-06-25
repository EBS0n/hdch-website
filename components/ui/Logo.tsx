import { asset } from "@/lib/asset";

type LogoProps = {
  variant?: "color" | "white";
  size?: number;
  withText?: boolean;
  /** true면 "현대화학" 텍스트를 더 크게 (홈 헤더 전용) */
  large?: boolean;
};

/**
 * 현대화학 로고.
 *
 * 실제 이미지 파일: `public/images/현대화학 로고.jpg`
 * - variant: "color" (서브 페이지 / 라이트 헤더) | "white" (홈 다크 헤더 — 텍스트만 흰색)
 * - withText: 로고 옆에 "현대화학" 텍스트 표시 여부
 */
export default function Logo({
  variant = "color",
  size = 40,
  withText = true,
  large = false,
}: LogoProps) {
  const textColor = variant === "white" ? "#ffffff" : "#1A3C8E";
  const textSize = "text-[25px]";

  return (
    <span className="inline-flex items-stretch gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/images/현대화학 로고.jpg")}
        alt="현대화학 로고"
        width={size}
        height={size}
        style={{ width: size, height: size, objectFit: "contain" }}
        className="block flex-shrink-0"
      />
      {withText && (
        <span className="flex flex-col justify-between leading-none pt-0.5">
          <span
            className={`font-bold ${textSize} tracking-tight`}
            style={{ color: textColor }}
          >
            현대화학
          </span>
          <span
            className="block text-center indent-[1px] origin-bottom scale-y-[1.2] text-[10px] sm:text-[11px] font-medium tracking-[2px]"
            style={{ color: textColor }}
          >
            SINCE 1987
          </span>
        </span>
      )}
    </span>
  );
}
