import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/shared/PageBanner";
import { history } from "@/lib/site";

export default function HistoryPage() {
  return (
    <>
      <Header variant="light" />
      <PageBanner section="about" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32 bg-[color:var(--color-soft)]">
        <Container size="narrow">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-24 sm:mb-32">
            회사 연혁
          </h1>

          <div className="space-y-14">
            {history.map((decade, idx, arr) => {
              const isLast = idx === arr.length - 1;
              const decadeColor = isLast ? "text-black" : "text-navy-800";
              return (
                <section
                  key={decade.decade}
                  className="grid grid-cols-2 gap-32 lg:gap-80 items-start relative"
                >
                  {/* 세로선 — section 자체의 absolute (section 높이 전체를 기준) */}
                  {!isLast && (
                    <span
                      className="absolute left-1/2 -translate-x-1/2 w-px bg-black"
                      style={{ top: "32px", height: "calc(100% + 32px)" }}
                    />
                  )}

                  {/* 좌측: decade (우측 정렬) + dot */}
                  <div className="flex justify-end relative">
                    <h2 className={`text-3xl sm:text-4xl font-extrabold ${decadeColor} tabular-nums leading-none`}>
                      {decade.decade}
                    </h2>
                    {/* dot — decade 우측, 세로선 가운데와 정렬 (lg는 gap/2 + dot/2 = 165px) */}
                    <span className="absolute -right-[69px] lg:-right-[165px] top-[15px] w-2.5 h-2.5 rounded-full bg-black z-10" />
                  </div>

                  {/* 우측: items (좌측 정렬) */}
                  <ul className="space-y-7 pt-1">
                    {decade.items.map((item, i) => (
                      <li key={`${item.year}-${i}`}>
                        <div className="grid grid-cols-[auto_1fr] gap-x-8 items-baseline">
                          <span className="font-bold text-black tabular-nums text-[24px]">
                            {item.year}
                          </span>
                          <div>
                            <span className="font-normal text-black text-[24px] whitespace-nowrap">
                              · {item.title}
                            </span>
                            {item.desc ? (
                              <p className="text-[15px] text-[#32409A] mt-2 ml-4 whitespace-nowrap">
                                {item.desc}
                              </p>
                            ) : (
                              <p
                                className="text-[15px] mt-2 ml-4 invisible select-none"
                                aria-hidden
                              >
                                &nbsp;
                              </p>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
