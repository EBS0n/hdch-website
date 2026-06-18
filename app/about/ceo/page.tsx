import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ImageSlot from "@/components/ui/ImageSlot";
import PageBanner from "@/components/shared/PageBanner";

export default function CEOPage() {
  return (
    <>
      <Header variant="light" />
      <PageBanner section="about" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32">
        <Container>
          <p className="text-center text-[14px] text-navy-600 tracking-[0.2em] mb-3 font-medium">
            CEO 인사말
          </p>
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 leading-snug tracking-tight">
            오직 품질로 고객과 소통하는 기업
          </h1>
          <p className="text-center mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-700 tracking-tight">
            현대화학
          </p>

          <div className="mt-20 sm:mt-24 grid grid-cols-1 md:grid-cols-[1fr_360px] gap-12 md:gap-16 items-start">
            <article className="text-ink-700 leading-loose space-y-5 text-[14px] sm:text-[15px]">
              <h2 className="text-[15px] sm:text-base font-bold text-navy-700 mb-2">
                CEO 한마디
              </h2>
              <p>
                안녕하십니까. 현대화학 홈페이지를 방문해 주신 모든 분께 감사의 말씀을 드립니다.
              </p>
              <p>
                저희 현대화학은 1987년 설립 이래 사출 성형과 캡 제작 외길을 걸어왔습니다.
                플라스틱 캡이라는 작은 부품 하나하나가 고객사 완제품의 신뢰성을 좌우한다는 믿음 아래,
                자동화된 사출 설비와 정밀한 측정 장비를 꾸준히 확충해 왔습니다.
              </p>
              <p>
                2005년 ISO9001 인증과 CLEAN 사업장 인증을 받은 이후로도
                품질 관리 공정을 끊임없이 개선해 왔으며,
                2017년 ㈜현대화학으로의 법인 전환과 2021년 신사옥 이전을 거치며
                생산 능력과 품질을 한 단계 더 끌어올렸습니다.
              </p>
              <p>
                저희는 외경 CAP, 내경 CAP, PVC, PE, Frange, 육각, UT, 디핑캡에 이르기까지
                다양한 캡 제품군을 자체 설계와 제작 사례를 바탕으로 빠르게 공급합니다.
                소량 시제품부터 대량 양산까지 유연하게 대응하며,
                고객의 요구사항을 단순히 듣는 것을 넘어 함께 더 나은 사양을 만들어 가고자 합니다.
              </p>
              <p>
                앞으로도 작지만 단단한 제조 기업으로서, 정직한 품질과 빠른 응대로
                고객 여러분께 신뢰받는 파트너가 되겠습니다.
              </p>
              <p className="text-right pt-4 font-medium text-navy-800 text-[14px]">
                현대화학 대표{" "}
                <span className="ml-2 text-lg font-bold tracking-wide">손지훈</span>
              </p>
            </article>

            <aside>
              <ImageSlot id="ceo-portrait" rounded="md" />
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
