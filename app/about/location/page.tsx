import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ImageSlot from "@/components/ui/ImageSlot";
import { company } from "@/lib/site";
import PageBanner from "@/components/shared/PageBanner";

export default function LocationPage() {
  return (
    <>
      <Header variant="light" />
      <PageBanner section="about" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32">
        <Container>
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-16 sm:mb-20">
            오시는 길
          </h1>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-800 mb-6">
              본사 및 공장
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <ul className="text-[14px] sm:text-[15px] text-ink-700 space-y-3 self-center">
                <li className="flex gap-3">
                  <span className="font-bold text-navy-700 min-w-[56px]">ADD</span>
                  <span>{company.address}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-navy-700 min-w-[56px]">TEL</span>
                  <span className="tabular-nums">{company.tel}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-navy-700 min-w-[56px]">FAX</span>
                  <span className="tabular-nums">{company.fax}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-navy-700 min-w-[56px]">E-mail</span>
                  <span>{company.email}</span>
                </li>
              </ul>
              <ImageSlot id="location-building" rounded="md" />
            </div>
          </section>

          <section>
            <div className="w-full aspect-[1280/500] overflow-hidden rounded-md border border-line">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.1249093690844!2d128.98230017668072!3d35.1784391727538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568c02bd48d29ad%3A0x99409063db9f9565!2z67aA7IKw6rSR7Jet7IucIOyCrOyDgeq1rCDsgqzsg4HroZwzNzXrsojquLggNA!5e0!3m2!1sko!2skr!4v1780375765849!5m2!1sko!2skr"
                title="현대화학 본사 및 공장 약도"
                className="w-full h-full block border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
