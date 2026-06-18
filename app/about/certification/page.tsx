import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ImageSlot from "@/components/ui/ImageSlot";
import type { ImageSlotId } from "@/lib/imageManifest";
import PageBanner from "@/components/shared/PageBanner";

const partnerIds: ImageSlotId[] = [
  "partner-logo-1", "partner-logo-2", "partner-logo-3",
  "partner-logo-4", "partner-logo-5", "partner-logo-6",
  "partner-logo-7", "partner-logo-8", "partner-logo-9",
  "partner-logo-10", "partner-logo-11", "partner-logo-12",
];

export default function CertificationPage() {
  return (
    <>
      <Header variant="light" />
      <PageBanner section="about" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32">
        <Container>
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-16 sm:mb-20">
            인증 및 특허
          </h1>

          <section className="mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-navy-800 mb-8">
              인증서
            </h2>
            <div className="bg-navy-50 rounded-2xl p-6 sm:p-10 flex flex-col items-center">
              <div className="w-full max-w-[360px]">
                <ImageSlot id="cert-iso9001" rounded="md" />
              </div>
              <ul className="mt-8 text-[13px] sm:text-[14px] text-ink-700 space-y-2 self-start sm:self-center">
                <li>· 인증규격 : ISO 9001 : 2015</li>
                <li>· 인증등록일 : 2022. 04. 05</li>
                <li>
                  · 인증범위 : 플라스틱 사출 및 조립, 금형에 대한 개발 및 제작
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-16 sm:mb-20">
              함께하는 회사
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {partnerIds.map((id) => (
                <div
                  key={id}
                  className="aspect-[3/2] border border-line rounded-md bg-white flex items-center justify-center p-4"
                >
                  <ImageSlot id={id} fixedAspect={false} fit="contain" className="w-full h-full" />
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
