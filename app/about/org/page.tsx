import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { orgChart, orgContacts } from "@/lib/site";
import PageBanner from "@/components/shared/PageBanner";

const LINE = "#909090";
const DOT = "#00AEEF";
const BRANCH_NAME = "#32409A";
const BOX_BG = "#F5FAFF";

export default function OrgPage() {
  return (
    <>
      <Header variant="light" />
      <PageBanner section="about" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32">
        <Container size="narrow">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-16 sm:mb-20">
            조직도
          </h1>

          {/* 조직도 박스 */}
          <section
            className="rounded-2xl py-12 sm:py-14 px-6 sm:px-10"
            style={{ backgroundColor: BOX_BG }}
          >
            {/* 대표이사 */}
            <p className="text-center text-xl sm:text-2xl font-bold text-black mb-3">
              대표이사
            </p>

            {/* 대표이사 → 가로선까지 이어지는 단일 세로선 + 끝의 dot */}
            <div className="flex flex-col items-center">
              <span
                className="block w-px h-8"
                style={{ backgroundColor: LINE }}
              />
              <span
                className="block w-2 h-2 rounded-full -mt-1"
                style={{ backgroundColor: DOT }}
              />
            </div>

            {/* 4개 부서 영역 */}
            <div className="relative grid grid-cols-4 gap-3 sm:gap-5">
              {/* 부서들을 잇는 가로선 (첫 부서 dot ~ 마지막 부서 dot) */}
              <div
                className="absolute h-px"
                style={{
                  backgroundColor: LINE,
                  top: "0",
                  left: "12.5%",
                  right: "12.5%",
                }}
              />

              {orgChart.branches.map((b) => (
                <div key={b.title} className="flex flex-col items-center">
                  {/* dot (가로선 위에 위치) — 부서 아래로 뻗는 가지 없음 */}
                  <span
                    className="block w-2 h-2 rounded-full -mt-[3px]"
                    style={{ backgroundColor: DOT }}
                  />
                  {/* 부서명 */}
                  <p
                    className="text-base sm:text-lg font-medium mt-4 mb-4"
                    style={{ color: BRANCH_NAME }}
                  >
                    {b.title}
                  </p>
                  {/* 팀 박스들 */}
                  <div className="space-y-2 w-full">
                    {b.teams.map((t) => (
                      <div
                        key={t.title}
                        className="bg-white border border-line rounded-full px-3 py-1.5 text-center text-[12px] sm:text-[13px] text-black"
                      >
                        {t.title}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 연락망 — 가로 영역은 조직도 박스와 동일 */}
          <section className="mt-20 sm:mt-24">
            <div className="border-t border-line pt-20">
              <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-16 sm:mb-20">
                연락망
              </h2>
              <div
                className="rounded-2xl py-7 px-6 sm:px-10 grid grid-cols-2 items-center"
                style={{ backgroundColor: BOX_BG }}
              >
                {/* 좌측 — 컬럼 중앙에 위치 + 텍스트 좌측 정렬 */}
                <div className="flex justify-center">
                  <ul className="text-[13px] sm:text-[14px] text-black space-y-2 text-left">
                    {orgContacts.parts.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>

                {/* 우측 — 중앙선 (black) + 컬럼 중앙에 위치 */}
                <div className="flex justify-center border-l border-black pl-6 sm:pl-10">
                  <div>
                    <p className="text-[12px] sm:text-[13px] text-black mb-3">
                      대표번호
                    </p>
                    <p
                      className="text-lg sm:text-xl font-bold flex items-center gap-2"
                      style={{ color: BRANCH_NAME }}
                    >
                      <span aria-hidden>📞</span>
                      {orgContacts.mainPhone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
