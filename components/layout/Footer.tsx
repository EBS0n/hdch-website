import { company } from "@/lib/site";
import Logo from "@/components/ui/Logo";

type FooterProps = {
  /** "light" → 홈 전용: 흰 배경 + 네이비 텍스트 + 조금 더 큰 글자 */
  variant?: "default" | "light";
};

export default function Footer({ variant = "default" }: FooterProps) {
  const isLight = variant === "light";

  const footerBg = isLight ? "bg-white" : "bg-[color:var(--color-footer)]";
  const colText = isLight
    ? "text-[15px] text-navy-700 leading-relaxed space-y-1"
    : "text-sm text-ink-600 leading-relaxed space-y-1";
  const copyText = isLight
    ? "text-center text-sm text-navy-500 mt-8"
    : "text-center text-xs text-ink-400 mt-8";
  const telLabel = isLight ? "전화" : "전화번호";

  return (
    <footer className={`${footerBg} mt-16`}>
      <div className="mx-auto max-w-[1280px] w-full px-5 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* 좌측 */}
          <div className={`${colText} order-2 md:order-1`}>
            <p>주소 : {company.address}</p>
            <p>{telLabel} : {company.tel}</p>
            <p>팩스 : {company.fax}</p>
          </div>

          {/* 가운데 로고 */}
          <div className="flex justify-center order-1 md:order-2">
            <Logo variant="color" size={56} withText={false} />
          </div>

          {/* 우측 */}
          <div className={`${colText} order-3 md:text-right md:order-3`}>
            <p>E-mail : {company.email}</p>
            <p>대표자명 : {company.ceo}</p>
            <p>사업자등록번호 : {company.businessNo}</p>
          </div>
        </div>

        <p className={copyText}>
          {company.copyright}
        </p>
      </div>
    </footer>
  );
}
