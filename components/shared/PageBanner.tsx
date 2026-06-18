import ImageSlot from "@/components/ui/ImageSlot";
import type { ImageSlotId } from "@/lib/imageManifest";

type Section = "about" | "products" | "quality" | "contact";

const slotMap: Record<Section, ImageSlotId> = {
  about: "page-banner-about",
  products: "page-banner-products",
  quality: "page-banner-quality",
  contact: "page-banner-contact",
};

/**
 * 헤더 바로 아래에 들어가는 와이드 배너.
 * - 카테고리별로 다른 이미지 (about / products / quality / contact)
 * - 1440 × 410 권장 (가로 100%)
 * - 하단 ~96px는 흰색 그라디언트로 페이드 → 사진 모서리가 자연스럽게 섞임
 */
export default function PageBanner({ section }: { section: Section }) {
  return (
    <div className="relative w-full overflow-hidden h-[200px] sm:h-auto sm:aspect-[1440/410]">
      <ImageSlot
        id={slotMap[section]}
        fixedAspect={false}
        className="w-full h-full"
        caption={`${section} 카테고리 배너`}
      />
      {/* 하단 흰색 fade — 모서리가 보이지 않도록 자연스럽게 섞임 */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent"
      />
    </div>
  );
}
