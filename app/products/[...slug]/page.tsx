import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ImageSlot from "@/components/ui/ImageSlot";
import ProductSidebar from "@/components/products/ProductSidebar";
import SpecTable from "@/components/products/SpecTable";
import PageBanner from "@/components/shared/PageBanner";
import {
  allProductPaths,
  findProductNode,
  type ProductNode,
} from "@/lib/site";
import { productSlotIdFromPath } from "@/lib/imageManifest";
import { asset } from "@/lib/asset";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allProductPaths();
}

export default async function ProductCatchAll({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const found = findProductNode(slug);
  if (!found) notFound();

  const { node, trail } = found;
  const slotId = productSlotIdFromPath(slug);
  const activePath = slug.join("/");
  const hasChildren = (node.children?.length ?? 0) > 0;
  const hasSpecs = (node.specs?.length ?? 0) > 0;

  return (
    <>
      <Header variant="light" />
      <PageBanner section="products" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32">
        <Container>
          {/* Breadcrumb */}
          <nav className="text-[12px] sm:text-[13px] text-ink-400 text-center mb-6">
            <Link href="/products" className="hover:text-navy-700">
              제품정보
            </Link>
            {trail.map((t, i) => {
              const sub = slug.slice(0, i + 1).join("/");
              const isLast = i === trail.length - 1;
              return (
                <span key={t.slug}>
                  <span className="mx-2">›</span>
                  {isLast ? (
                    <span className="text-navy-700 font-semibold">{t.name}</span>
                  ) : (
                    <Link href={`/products/${sub}`} className="hover:text-navy-700">
                      {t.name}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>

          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-16 sm:mb-20">
            {node.name}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-16">
            <ProductSidebar active={activePath} />

            <div>
              {/* 메인 이미지 + 다운로드 링크 */}
              <div>
                <ImageSlot id={slotId} rounded="md" />
                <div className="mt-3 text-right text-[12px] text-ink-500 space-x-6">
                  <a
                    href={asset(`/downloads/${encodeURIComponent(`${node.name} 조견표.pdf`)}`)}
                    download={`${node.name} 조견표.pdf`}
                    className="relative inline-block transition-colors duration-200 hover:text-navy-700 hover:font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-px after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    PDF 다운로드
                  </a>
                  <a
                    href={asset(`/downloads/${encodeURIComponent(`${node.name} 조견표.xlsx`)}`)}
                    download={`${node.name} 조견표.xlsx`}
                    className="relative inline-block transition-colors duration-200 hover:text-navy-700 hover:font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-px after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    EXCEL 다운로드
                  </a>
                </div>
              </div>

              {node.description && (
                <p className="mt-2 text-ink-700 text-[18px] leading-loose">
                  {node.description}
                </p>
              )}

              {/* 자식이 있는 그룹 노드 → 카드 그리드 */}
              {hasChildren && <ChildrenGrid node={node} basePath={slug} />}

              {/* leaf 노드 → 규격표들 */}
              {hasSpecs && (
                <div className="mt-16 space-y-16">
                  {node.specs!.map((spec, idx) => (
                    <SpecTable key={`${spec.title}-${idx}`} table={spec} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

function ChildrenGrid({
  node,
  basePath,
}: {
  node: ProductNode;
  basePath: string[];
}) {
  return (
    <section className="mt-16">
      <h2 className="text-xl sm:text-2xl font-bold text-navy-800 border-b-2 border-navy-700 pb-4 mb-8">
        {node.name} 하위 카테고리
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {node.children!.map((c) => (
          <Link
            key={c.slug}
            href={`/products/${[...basePath, c.slug].join("/")}`}
            className="group block border border-line rounded-md p-5 hover:border-navy-500 hover:bg-navy-50/40 transition"
          >
            <h3 className="text-[15px] font-bold text-navy-800 group-hover:text-navy-600">
              {c.name}
              {c.specs?.length ? (
                <span className="ml-2 text-[11px] text-navy-400">
                  {c.specs.length}개 타입
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
  );
}
