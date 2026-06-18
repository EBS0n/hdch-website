import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import NoticeList from "@/components/contact/NoticeList";
import PageBanner from "@/components/shared/PageBanner";

export default function NoticePage() {
  return (
    <>
      <Header variant="light" />
      <PageBanner section="contact" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32">
        <Container>
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-16 sm:mb-20">
            공지사항
          </h1>

          <NoticeList />
        </Container>
      </main>
      <Footer />
    </>
  );
}
