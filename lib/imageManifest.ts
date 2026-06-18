/**
 * 이미지 슬롯 매니페스트.
 *
 * - 모든 이미지 슬롯의 ID/설명/권장 크기를 정의합니다.
 * - 실제 이미지를 추가하려면 `public/images/<id>.jpg` (또는 .png/.webp) 파일로 저장.
 * - 자세한 매뉴얼은 `public/images/MANIFEST.md` 참고.
 *
 * 제품 슬롯 ID 규칙: `product-<group>-<sub>?-<leaf>?` (하이픈으로 연결된 경로)
 *   예: product-outer, product-outer-pvc, product-outer-pvc-tip
 */

export type ImageSlotMeta = {
  alt: string;
  description: string;
  width: number;
  height: number;
  aspectLabel?: string;
  ext?: "jpg" | "png" | "webp";
  usedIn: string[];
};

const productImg = (
  id: string,
  description: string,
  usedIn: string,
): ImageSlotMeta => ({
  alt: description,
  description,
  width: 800,
  height: 500,
  aspectLabel: "16:10",
  usedIn: [usedIn],
});

export const imageManifest = {
  /* ───── 홈 — 풀스크린 슬라이드쇼 (2초 간격, 6장) ───── */
  "home-hero-1": { alt: "홈 슬라이드 1", description: "홈 슬라이드 #1 — 풀스크린 배경 사진 (공장/설비/생산 라인 등)", width: 1920, height: 660, aspectLabel: "약 2.9:1 (가로로 긴 와이드, 위·아래 잘림 주의)", usedIn: ["/"] },
  "home-hero-2": { alt: "홈 슬라이드 2", description: "홈 슬라이드 #2 — 풀스크린 배경 사진", width: 1920, height: 660, aspectLabel: "약 2.9:1 (가로로 긴 와이드, 위·아래 잘림 주의)", usedIn: ["/"] },
  "home-hero-3": { alt: "홈 슬라이드 3", description: "홈 슬라이드 #3 — 풀스크린 배경 사진", width: 1920, height: 660, aspectLabel: "약 2.9:1 (가로로 긴 와이드, 위·아래 잘림 주의)", usedIn: ["/"] },
  "home-hero-4": { alt: "홈 슬라이드 4", description: "홈 슬라이드 #4 — 풀스크린 배경 사진", width: 1920, height: 660, aspectLabel: "약 2.9:1 (가로로 긴 와이드, 위·아래 잘림 주의)", usedIn: ["/"] },
  "home-hero-5": { alt: "홈 슬라이드 5", description: "홈 슬라이드 #5 — 풀스크린 배경 사진", width: 1920, height: 660, aspectLabel: "약 2.9:1 (가로로 긴 와이드, 위·아래 잘림 주의)", usedIn: ["/"] },
  "home-hero-6": { alt: "홈 슬라이드 6", description: "홈 슬라이드 #6 — 풀스크린 배경 사진", width: 1920, height: 660, aspectLabel: "약 2.9:1 (가로로 긴 와이드, 위·아래 잘림 주의)", usedIn: ["/"] },

  /* ───── 카테고리별 상단 배너 (홈 제외) ───── */
  "page-banner-about": {
    alt: "회사소개 페이지 상단 배너",
    description: "회사소개 카테고리 페이지들의 헤더 하단 와이드 배너",
    width: 1440, height: 410, aspectLabel: "1440 × 410", ext: "png",
    usedIn: ["/about/*"],
  },
  "page-banner-products": {
    alt: "제품정보 페이지 상단 배너",
    description: "제품정보 카테고리 페이지들의 헤더 하단 와이드 배너",
    width: 1440, height: 410, aspectLabel: "1440 × 410", ext: "png",
    usedIn: ["/products/*"],
  },
  "page-banner-quality": {
    alt: "기술&품질 페이지 상단 배너",
    description: "기술&품질 카테고리 페이지들의 헤더 하단 와이드 배너",
    width: 1440, height: 410, aspectLabel: "1440 × 410", ext: "png",
    usedIn: ["/quality/*"],
  },
  "page-banner-contact": {
    alt: "고객문의 페이지 상단 배너",
    description: "고객문의 카테고리 페이지들의 헤더 하단 와이드 배너",
    width: 1440, height: 410, aspectLabel: "1440 × 410", ext: "png",
    usedIn: ["/contact/*"],
  },

  /* ───── 회사소개 ───── */
  "ceo-portrait": { alt: "현대화학 대표 손지훈", description: "CEO 인사말 페이지의 대표 사진", width: 480, height: 600, aspectLabel: "4:5", usedIn: ["/about/ceo"] },
  "location-building": { alt: "현대화학 본사 외경", description: "오시는 길 — 본사 건물 외경", width: 600, height: 400, aspectLabel: "3:2", usedIn: ["/about/location"] },
  "location-map": { alt: "현대화학 약도", description: "오시는 길 — 약도 캡처", width: 1280, height: 500, aspectLabel: "와이드", usedIn: ["/about/location"] },
  "cert-iso9001": { alt: "ISO9001 인증서", description: "ISO9001:2015 인증서", width: 480, height: 680, aspectLabel: "5:7", usedIn: ["/about/certification"] },
  "partner-logo-1": { alt: "협력사 로고 1", description: "Continental Contitech", width: 240, height: 120, usedIn: ["/about/certification"] },
  "partner-logo-2": { alt: "협력사 로고 2", description: "DAEHYUN", width: 240, height: 120, usedIn: ["/about/certification"] },
  "partner-logo-3": { alt: "협력사 로고 3", description: "NITTA", width: 240, height: 120, usedIn: ["/about/certification"] },
  "partner-logo-4": { alt: "협력사 로고 4", description: "fluiconnecto", width: 240, height: 120, usedIn: ["/about/certification"] },
  "partner-logo-5": { alt: "협력사 로고 5", description: "협신하이드로릭", width: 240, height: 120, usedIn: ["/about/certification"] },
  "partner-logo-6": { alt: "협력사 로고 6", description: "(주)화승 R&A", width: 240, height: 120, usedIn: ["/about/certification"] },
  "partner-logo-7": { alt: "협력사 로고 7", description: "SENTEC", width: 240, height: 120, usedIn: ["/about/certification"] },
  "partner-logo-8": { alt: "협력사 로고 8", description: "JUNJIN", width: 240, height: 120, usedIn: ["/about/certification"] },
  "partner-logo-9": { alt: "협력사 로고 9", description: "TAEWON INDUSTRIAL", width: 240, height: 120, usedIn: ["/about/certification"] },
  "partner-logo-10": { alt: "협력사 로고 10", description: "월드튜브", width: 240, height: 120, usedIn: ["/about/certification"] },
  "partner-logo-11": { alt: "협력사 로고 11", description: "daedong", width: 240, height: 120, usedIn: ["/about/certification"] },
  "partner-logo-12": { alt: "협력사 로고 12", description: "Yungjin Enterprise", width: 240, height: 120, usedIn: ["/about/certification"] },

  /* ───── 제품 (페이지 메인 사진) ───── */
  "product-all": productImg("product-all", "제품 전체보기 그룹 컷", "/products"),
  "product-outer": productImg("product-outer", "외경 CAP 카테고리 메인", "/products/outer"),
  "product-outer-pvc": productImg("product-outer-pvc", "PVC CAP 페이지 메인 사진 (여러 캡 한 컷)", "/products/outer/pvc"),
  "product-outer-pe": productImg("product-outer-pe", "PE CAP 페이지 메인 사진", "/products/outer/pe"),
  "product-inner": productImg("product-inner", "내경 CAP 카테고리 메인", "/products/inner"),
  "product-inner-screw": productImg("product-inner-screw", "나사 TYPE 페이지 메인 사진", "/products/inner/screw"),
  "product-inner-dust": productImg("product-inner-dust", "DUST CAP 페이지 메인 사진", "/products/inner/dust"),
  "product-inner-pipe-end": productImg("product-inner-pipe-end", "PIPE END CAP 페이지 메인 사진", "/products/inner/pipe-end"),

  /* ───── 제품 (규격표 옆 작은 제품 사진) ───── */
  "spec-pvc-tip": { alt: "꼭지 TYPE 제품 사진", description: "PVC CAP 꼭지 TYPE 규격표 우측 단일 제품 사진 (L, W 치수 라벨)", width: 240, height: 320, aspectLabel: "3:4 세로 컷", ext: "png", usedIn: ["/products/outer/pvc"] },
  "spec-pvc-no-tip": { alt: "무꼭지 TYPE 제품 사진", description: "PVC CAP 무꼭지 TYPE 규격표 우측 단일 제품 사진", width: 240, height: 320, ext: "png", usedIn: ["/products/outer/pvc"] },
  "spec-pvc-tip-new": { alt: "신형 꼭지 TYPE 제품 사진", description: "PVC CAP 신형 꼭지 TYPE 규격표 우측 단일 제품 사진", width: 240, height: 320, ext: "png", usedIn: ["/products/outer/pvc"] },
  "spec-pe-flange": { alt: "Frange CAP 제품 사진", description: "PE > Frange CAP 규격표 우측 단일 제품 사진 (O·D / I·D / L 라벨)", width: 240, height: 320, ext: "png", usedIn: ["/products/outer/pe"] },
  "spec-pe-hex": { alt: "육각 CAP 제품 사진", description: "PE > 육각 CAP 규격표 우측 단일 제품 사진 (H① / H② / L 라벨). 표가 3행으로 짧기 때문에 사진 height를 줄여 균형 맞춤", width: 240, height: 200, aspectLabel: "6:5", ext: "png", usedIn: ["/products/outer/pe"] },
  "spec-pe-ut": { alt: "UT TYPE 제품 사진", description: "PE > UT TYPE 규격표 우측 단일 제품 사진 (I·D① / I·D② / L 라벨). 표가 4행이라 Frange(8행)보다 약간 짧게", width: 240, height: 260, aspectLabel: "12:13", ext: "png", usedIn: ["/products/outer/pe"] },
  "spec-screw-gu": { alt: "Gu TYPE 제품 사진", description: "나사 TYPE > Gu 규격표 우측 단일 제품 사진", width: 240, height: 240, aspectLabel: "1:1 정사각형", ext: "png", usedIn: ["/products/inner/screw"] },
  "spec-screw-m": { alt: "M TYPE 제품 사진", description: "나사 TYPE > M 규격표 우측 단일 제품 사진 (O·D① / O·D② / L 라벨)", width: 240, height: 320, ext: "png", usedIn: ["/products/inner/screw"] },
  "spec-screw-general": { alt: "일반 TYPE 제품 사진", description: "나사 TYPE > 일반 규격표 우측 단일 제품 사진", width: 240, height: 320, ext: "png", usedIn: ["/products/inner/screw"] },
  "spec-screw-unf": { alt: "UNF TYPE 제품 사진", description: "나사 TYPE > UNF 규격표 우측 단일 제품 사진", width: 240, height: 320, ext: "png", usedIn: ["/products/inner/screw"] },
  "spec-screw-pf": { alt: "PF TYPE 제품 사진", description: "나사 TYPE > PF 규격표 우측 단일 제품 사진", width: 240, height: 320, ext: "png", usedIn: ["/products/inner/screw"] },
  "spec-dust": { alt: "DUST CAP 제품 사진", description: "DUST CAP 규격표 우측 단일 제품 사진 (O·D① / O·D② / L 라벨)", width: 240, height: 320, ext: "png", usedIn: ["/products/inner/dust"] },
  "spec-pipe-end-small": { alt: "PIPE END CAP 소형 사진", description: "PIPE END CAP 표1 (Ø4~Ø8 소형) 규격표 우측 단일 제품 사진. 표가 3행으로 짧기 때문에 사진 height를 줄여 균형 맞춤", width: 240, height: 120, aspectLabel: "2:1 가로형", ext: "png", usedIn: ["/products/inner/pipe-end"] },
  "spec-pipe-end-large": { alt: "PIPE END CAP 대형 사진", description: "PIPE END CAP 표2 (Ø10~Ø60) 규격표 우측 단일 제품 사진. Figma 원본은 3개 사진 (Ø8~Ø20, Ø25~Ø40, Ø45~Ø60)이 세로로 들어가 있음", width: 240, height: 600, aspectLabel: "세로로 긴 컷 또는 3개 사진 합본", ext: "png", usedIn: ["/products/inner/pipe-end"] },

  /* ───── 공장현황 — 차트 ───── */
  "chart-revenue": { alt: "6개년 매출 추이 차트", description: "공장현황 — 6개년 매출 추이 그래프 이미지", width: 1200, height: 500, aspectLabel: "와이드 차트", usedIn: ["/quality/factory"] },
  "chart-production": { alt: "생산 수량 차트", description: "공장현황 — 생산 수량 그래프 이미지", width: 1200, height: 500, aspectLabel: "와이드 차트", usedIn: ["/quality/factory"] },

  /* ───── 공장현황 — 설비 ───── */
  "factory-equipment-1": { alt: "사출성형기 170TON", description: "공장현황 — 사출성형기 170TON, 1대", width: 600, height: 450, aspectLabel: "4:3", usedIn: ["/quality/factory"] },
  "factory-equipment-2": { alt: "사출성형기 170TON 2", description: "공장현황 — 사출성형기 170TON, 2대", width: 600, height: 450, usedIn: ["/quality/factory"] },
  "factory-equipment-3": { alt: "사출성형기 170TON 3", description: "공장현황 — 사출성형기 170TON, 3대", width: 600, height: 450, usedIn: ["/quality/factory"] },
  "factory-equipment-4": { alt: "SOFT 자동조립기", description: "공장현황 — SOFT 자동조립기 10K, 1대", width: 600, height: 450, usedIn: ["/quality/factory"] },
  "factory-equipment-5": { alt: "SOFT 자동조립기 2", description: "공장현황 — SOFT 자동조립기 20K, 1대", width: 600, height: 450, usedIn: ["/quality/factory"] },
  "factory-equipment-6": { alt: "검사기", description: "공장현황 — 검사기 10MT, 1대", width: 600, height: 450, usedIn: ["/quality/factory"] },

  /* ───── 품질관리 ───── */
  "measure-1": { alt: "VERNIER CALIPERS", description: "측정 설비 — VERNIER CALIPERS (200mm / 0.01mm)", width: 400, height: 300, usedIn: ["/quality/process"] },
  "measure-2": { alt: "PUSH & PULL GAGE", description: "측정 설비 — PUSH & PULL GAGE (AP-20, 20kg)", width: 400, height: 300, usedIn: ["/quality/process"] },
  "measure-3": { alt: "RING GAGE", description: "측정 설비 — RING GAGE (M8~1.0mm)", width: 400, height: 300, usedIn: ["/quality/process"] },
  "measure-4": { alt: "PRECISION SCALE", description: "측정 설비 — PRECISION SCALE (CAS MW-200)", width: 400, height: 300, usedIn: ["/quality/process"] },

  /* ───── 제작사례 ───── */
  "case-1": { alt: "제작사례 1", description: "제작 사례 그리드 1", width: 400, height: 300, usedIn: ["/quality/cases"] },
  "case-2": { alt: "제작사례 2", description: "제작 사례 그리드 2", width: 400, height: 300, usedIn: ["/quality/cases"] },
  "case-3": { alt: "제작사례 3", description: "제작 사례 그리드 3", width: 400, height: 300, usedIn: ["/quality/cases"] },
  "case-4": { alt: "제작사례 4", description: "제작 사례 그리드 4", width: 400, height: 300, usedIn: ["/quality/cases"] },
  "case-5": { alt: "제작사례 5", description: "제작 사례 그리드 5", width: 400, height: 300, usedIn: ["/quality/cases"] },
  "case-6": { alt: "제작사례 6", description: "제작 사례 그리드 6", width: 400, height: 300, usedIn: ["/quality/cases"] },
  "case-7": { alt: "제작사례 7", description: "제작 사례 그리드 7", width: 400, height: 300, usedIn: ["/quality/cases"] },
  "case-8": { alt: "제작사례 8", description: "제작 사례 그리드 8", width: 400, height: 300, usedIn: ["/quality/cases"] },
  "case-9": { alt: "제작사례 9", description: "제작 사례 그리드 9", width: 400, height: 300, usedIn: ["/quality/cases"] },
  "case-featured": { alt: "제작사례 대표", description: "제작 사례 하단의 큰 단일 컷", width: 800, height: 500, usedIn: ["/quality/cases"] },

  /* ───── 로고 ───── */
  "logo-main": { alt: "현대화학 로고", description: "헤더/푸터 로고 (SVG 사용 중이므로 선택 사항)", width: 240, height: 240, ext: "png", usedIn: ["all"] },
} satisfies Record<string, ImageSlotMeta>;

export type ImageSlotId = keyof typeof imageManifest;

/**
 * 슬롯 메타 조회. 반환 타입을 ImageSlotMeta 단일 타입으로 고정해
 * `imageManifest[id]` 직접 접근 시 발생하는 거대 리터럴 union 추론을 피한다.
 */
export function getSlotMeta(id: ImageSlotId): ImageSlotMeta {
  return imageManifest[id];
}

/** 제품 경로(string[])에서 페이지 메인 이미지 슬롯 ID 생성. 없으면 가장 가까운 부모 ID. */
export function productSlotIdFromPath(path: string[]): ImageSlotId {
  for (let i = path.length; i > 0; i--) {
    const id = ("product-" + path.slice(0, i).join("-")) as ImageSlotId;
    if (id in imageManifest) return id;
  }
  return "product-all";
}

export function isSlotId(id: string): id is ImageSlotId {
  return id in imageManifest;
}
