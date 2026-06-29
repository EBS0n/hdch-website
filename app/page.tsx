import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeMedia from "@/components/home/HomeMedia";
import HomeBackground from "@/components/home/HomeBackground";

export default function Home() {
  return (
    <>
      {/* 홈 전용 — body 배경을 흰색(#ffffff)으로 강제 (전역 #f8fafb 무효화) */}
      <HomeBackground />
      <Header variant="dark" />
      <main className="relative z-0 pointer-events-none overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-[calc((100vh_-_96px)*2/3)]">
        <HomeMedia />
        {/* 모바일: 우측 정렬(계단 없이 오른쪽 flush) / 데스크탑(sm↑): 기존 계단식 */}
        <div className="absolute top-10 right-4 sm:right-12 lg:right-16 z-10 flex flex-col items-end sm:items-start text-right sm:text-left text-navy-800 font-bold text-[20pt] sm:text-[40pt] leading-tight whitespace-nowrap">
          {/* 오른쪽 아래(미래 산업으로)가 가장 오른쪽. 위 두 줄은 왼쪽으로 당기되
              둘째 줄 끝이 아랫줄 "미래 산"을 넘지 않도록 함 */}
          <span className="ml-0 sm:ml-[0em] text-[17pt] sm:text-[35pt]">신발에서부터</span>
          <span className="ml-0 sm:ml-[3em]">자동차, 중장비를 넘어</span>
          <span className="ml-0 sm:ml-[8em] text-[22pt] sm:text-[45pt] font-extrabold">미래 산업으로</span>
        </div>
      </main>
      <Footer variant="light" />
    </>
  );
}
