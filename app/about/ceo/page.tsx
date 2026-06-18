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
                안녕하십니까? 현대화학 홈페이지를 방문하신 모든 분께 감사드립니다.
              </p>
              <p>
                현대화학은 1987년 설립되어 신발 부품으로 시작하였습니다.
                이후 90년대에는 자동차 에어컨, 브레이크, 스티어링 부품의 청정도 유지 및
                충격 방지용 캡을 시작으로, 90년대 후반 DIPPING CAP 설비를 추가하여
                각종 유압 설비 및 건설 중장비의 유압 부품 품질 관리용 마개류를
                전문으로 하는 기업으로 성장해 왔습니다.
              </p>
              <p>
                플라스틱 캡이라는 작은 부품 하나하나가 고객사 제품의 품질과 신뢰성을
                좌우한다는 신념으로, 자동화된 사출 설비와 DIPPING 설비 및
                정밀 측정 품질 장비를 꾸준히 확충하였습니다.
              </p>
              <p>
                2005년 ISO9001과 CLEAN 사업장 인증 이후로도 지속적으로 품질 및
                생산 공정을 개선하였으며, 2017년 초대 대표에 이어 현 대표가 취임한 후
                2021년 지금의 위치로 이전하며 품질과 생산 능력을 지속적으로 개선하였습니다.
              </p>
              <p>
                당사는 자동차, 조선, 건설 장비, 유압 설비 등에 적용할 수 있는
                각종 나사, 육각, Frange, Dipping 등 다양한 캡 제품군을
                자체 제작 및 위탁 생산을 통해 적시에 공급합니다.
                각종 시제품부터 대량 양산에 이르기까지 유연하게 대응하며,
                고객의 요구사항을 적극 반영하여 더 나은 제품을 만들어 가고자 노력하고 있습니다.
              </p>
              <p>
                앞으로도 작지만 단단한 제조 기업으로서, 정직한 품질, 신속한 납품,
                저렴한 가격과 빠르고 정확한 응대로 고객 여러분의 신뢰받는 파트너로 함께하겠습니다.
              </p>
              <p>
                다시 한번, 당사를 찾아주신 고객 여러분께 감사드립니다.
              </p>
              <p className="text-right pt-4 font-medium text-navy-800 text-[14px]">
                현대화학 대표{" "}
                <span className="mx-2 text-lg font-bold tracking-wide">손지훈</span>
                배상
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
