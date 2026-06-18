import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeMedia from "@/components/home/HomeMedia";

export default function Home() {
  return (
    <>
      <Header variant="dark" />
      <main className="relative z-0 pointer-events-none overflow-hidden h-[calc((100vh_-_80px)*2/3)] sm:h-[calc((100vh_-_96px)*2/3)]">
        <HomeMedia />
        <div className="absolute top-10 right-8 sm:right-12 lg:right-16 z-10 flex flex-col items-start text-navy-800 font-bold text-[40pt] leading-tight whitespace-nowrap">
          {/* 오른쪽 아래(미래 산업으로)가 가장 오른쪽. 위 두 줄은 왼쪽으로 당기되
              둘째 줄 끝이 아랫줄 "미래 산"을 넘지 않도록 함 */}
          <span className="ml-[0em] text-[35pt]">신발에서부터</span>
          <span className="ml-[3em]">자동차, 중장비를 넘어</span>
          <span className="ml-[8em] text-[45pt] font-extrabold">미래 산업으로</span>
        </div>
      </main>
      <Footer variant="light" />
    </>
  );
}
