import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { notices } from "@/lib/site";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/shared/PageBanner";

export function generateStaticParams() {
  return notices.map((n) => ({ id: String(n.id) }));
}

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const n = notices.find((x) => String(x.id) === id);
  if (!n) notFound();

  return (
    <>
      <Header variant="light" />
      <PageBanner section="contact" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32">
        <Container size="narrow">
          <header className="border-b-2 border-navy-700 pb-6 mb-6">
            <p className="text-sm text-navy-500 tracking-widest mb-2">
              공지사항
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-navy-800">
              {n.title}
            </h1>
            <p className="mt-3 text-sm text-ink-400 tabular-nums">
              등록일 · {n.date}
            </p>
          </header>

          <article className="prose max-w-none text-ink-700 leading-loose whitespace-pre-line">
            {n.body}
          </article>

          <div className="mt-10 text-center">
            <Link
              href="/contact/notice"
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
