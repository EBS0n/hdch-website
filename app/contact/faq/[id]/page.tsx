import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { faqs } from "@/lib/site";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/shared/PageBanner";

export function generateStaticParams() {
  return faqs.map((f) => ({ id: String(f.id) }));
}

export default async function FAQDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const f = faqs.find((x) => String(x.id) === id);
  if (!f) notFound();

  return (
    <>
      <Header variant="light" />
      <PageBanner section="contact" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32">
        <Container size="narrow">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-12 sm:mb-16">
            자주 묻는 질문
          </h1>

          <div className="border-b-2 border-navy-700 mb-10" />

          <article className="space-y-6">
            <div className="bg-navy-50 rounded-2xl px-6 py-5">
              <p className="text-navy-700">
                <span className="font-bold mr-2">Q.</span>
                <span className="font-medium text-navy-800">{f.q}</span>
              </p>
            </div>
            <div className="px-6 py-5 border border-line rounded-2xl">
              <p className="text-ink-700">
                <span className="font-bold text-navy-700 mr-2">A.</span>
                {f.a}
              </p>
            </div>
          </article>

          <div className="mt-10 text-center">
            <Link
              href="/contact/faq"
              className="inline-block px-6 py-3 border border-navy-300 text-navy-700 rounded-full hover:bg-navy-50"
            >
              ← 목록으로 돌아가기
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
