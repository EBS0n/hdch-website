import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import PageBanner from "@/components/shared/PageBanner";

export default function QuotePage() {
  return (
    <>
      <Header variant="light" />
      <PageBanner section="contact" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32">
        <Container size="narrow">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-16 sm:mb-20">
            견적 문의
          </h1>

          <div className="flex flex-col items-center text-center">
            <Logo variant="color" size={140} withText={false} />
            <p className="mt-8 text-[15px] sm:text-base text-ink-700">
              편하게 문의주시면 빠른시간 내에 연락드리겠습니다.
            </p>
            <div className="w-full max-w-md border-t border-ink-900 mt-6 mb-12" />

            <h2 className="text-xl sm:text-2xl font-bold text-navy-700 mb-10">
              빠른 문의
            </h2>

            <div className="space-y-6 w-full max-w-sm">
              <div className="flex items-center justify-center gap-5">
                <span
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-navy-50"
                  aria-hidden
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/${encodeURIComponent("문의및상담 아이콘 전화.png")}`}
                    alt=""
                    className="w-6 h-6 object-contain"
                  />
                </span>
                <a
                  href="tel:01000000000"
                  className="text-lg sm:text-xl text-ink-900 hover:text-navy-700 tabular-nums"
                >
                  010-0000-0000
                </a>
              </div>
              <div className="flex items-center justify-center gap-5">
                <span
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-navy-50"
                  aria-hidden
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/${encodeURIComponent("문의및상담 아이콘 메일.png")}`}
                    alt=""
                    className="w-6 h-6 object-contain"
                  />
                </span>
                <a
                  href="mailto:hdch87@hdch87.com"
                  className="text-lg sm:text-xl text-ink-900 hover:text-navy-700"
                >
                  hdch87@hdch87.com
                </a>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
