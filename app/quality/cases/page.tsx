import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ImageSlot from "@/components/ui/ImageSlot";
import type { ImageSlotId } from "@/lib/imageManifest";
import PageBanner from "@/components/shared/PageBanner";

const cases: ImageSlotId[] = [
  "case-1", "case-2", "case-3",
  "case-4", "case-5", "case-6",
  "case-7", "case-8", "case-9",
];

export default function CasesPage() {
  return (
    <>
      <Header variant="light" />
      <PageBanner section="quality" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32">
        <Container>
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-16 sm:mb-20">
            제작 사례
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {cases.map((id) => (
              <ImageSlot key={id} id={id} rounded="md" />
            ))}
          </div>

          <div className="mt-12">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              src="/images/case-featured.mp4"
              className="w-full rounded-md"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
