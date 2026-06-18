import { type HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "narrow" | "default" | "wide";
};

const widths = {
  narrow: "max-w-[960px]",
  default: "max-w-[1280px]",
  wide: "max-w-[1440px]",
};

export default function Container({
  size = "default",
  className = "",
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={`${widths[size]} mx-auto w-full px-5 sm:px-8 lg:px-12 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
