import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ImageSlot from "@/components/ui/ImageSlot";
import ProductSidebar from "@/components/products/ProductSidebar";
import { productTree } from "@/lib/site";
import Link from "next/link";
import PageBanner from "@/components/shared/PageBanner";

export default function ProductsPage() {
  return (
    <>
      <Header variant="light" />
      <PageBanner section="products" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32">
        <Container>
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-16 sm:mb-20 tracking-tight">
            제품정보
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-16">
            <ProductSidebar />

            <div>
              <ImageSlot id="product-all" rounded="md" />
              <p className="mt-2 text-ink-700 text-[18px] leading-loose">
                현대화학에서 생산하는 모든 플라스틱 캡 제품은 크게{" "}
                <strong className="text-navy-700">외경 CAP</strong> 과{" "}
                <strong className="text-navy-700">내경 CAP</strong> 두 가지
                카테고리로 나뉘며, 각 카테고리 안에 다양한 타입과 세부 모델이
                포함됩니다.
              </p>

              <div className="mt-16 space-y-16">
                {productTree.map((g) => (
                  <section key={g.slug}>
                    <div className="flex items-baseline justify-between border-b-2 border-navy-700 pb-4 mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-navy-800">
                        {g.name}
                      </h2>
                      <Link
                        href={`/products/${g.slug}`}
                        className="text-[13px] text-navy-600 hover:underline"
                      >
                        전체 보기 →
                      </Link>
                    </div>
                    {g.description && (
                      <p className="text-[14px] text-ink-600 mb-6">
                        {g.description}
                      </p>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {g.children?.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/products/${g.slug}/${c.slug}`}
                          className="group block border border-line rounded-md p-5 hover:border-navy-500 hover:bg-navy-50/40 transition"
                        >
                          <h3 className="text-[14px] font-bold text-navy-800 group-hover:text-navy-600">
                            {c.name}
                            {c.children?.length ? (
                              <span className="ml-1 text-[11px] text-navy-400">
                                +{c.children.length}
                              </span>
                            ) : null}
                          </h3>
                          {c.description && (
                            <p className="mt-2 text-[12px] text-ink-600 leading-snug line-clamp-2">
                              {c.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
