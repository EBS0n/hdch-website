export const company = {
  name: "현대화학",
  nameEn: "HDCH",
  address: "46943, 부산 사상구 사상로375번길 4, 현대화학",
  tel: "051-305-0800",
  fax: "051-305-6622",
  email: "hdch87@hdch87.com",
  ceo: "손지훈",
  businessNo: "874-04-00641",
  copyright: "Copyright © 2026 현대화학 Co., Ltd. All rights reserved.",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

/** 규격표 한 컬럼 */
export type SpecColumn = {
  /** 헤더 라벨 (예: "W(내경)", "①", "O·D", "PACK") */
  label: string;
  /** 모든 행에 공통으로 적용되는 값 (있으면 rowspan으로 단일 셀 표시) */
  commonValue?: string;
  /** 데이터 셀 우측 정렬 (PACK/BOX 같은 숫자) */
  alignRight?: boolean;
};

/** 규격표 한 행 */
export type SpecRow = {
  no: number | string;
  size: string;
  /** dimensionColumns + quantityColumns 순서의 값 배열 */
  values: string[];
};

/** 한 카테고리 안의 규격표 한 개 */
export type SpecTable = {
  title: string;
  dimensionColumns: SpecColumn[];
  quantityColumns: SpecColumn[];
  rows: SpecRow[];
  productImageSlot?: string;
  productImageNote?: string;
};

export type ProductNode = {
  slug: string;
  name: string;
  description?: string;
  children?: ProductNode[];
  specs?: SpecTable[];
};

/* ────────── 자주 쓰는 컬럼 정의 헬퍼 ────────── */
const PACK: SpecColumn = { label: "PACK", alignRight: true };
const BOX: SpecColumn = { label: "BOX", alignRight: true };

export const productTree: ProductNode[] = [
  {
    slug: "outer",
    name: "외경 CAP",
    description:
      "각종 피팅, 호스, 파이프 등 외경에 끼우는 캡류. PVC와 PE 두가지 소재 기반 제품을 생산합니다.",
    children: [
      {
        slug: "pvc",
        name: "PVC CAP",
        description:
          "PVC 소재 외경 캡. 꼭지 유무와 형태에 따라 세 가지 타입으로 구분합니다.",
        specs: [
          {
            title: "꼭지 TYPE",
            dimensionColumns: [
              { label: "W(내경)" },
              { label: "L" },
              { label: "T", commonValue: "0.8~1.0" },
            ],
            quantityColumns: [PACK, BOX],
            productImageSlot: "spec-pvc-tip",
            productImageNote: "L × W",
            rows: [
              { no: 1, size: "4", values: ["Ø4", "10", "", "5,000", "-"] },
              { no: 2, size: "6", values: ["Ø6", "10", "", "5,000", "-"] },
              { no: 3, size: "8", values: ["Ø8", "10", "", "5,000", "-"] },
              { no: 4, size: "10", values: ["Ø10", "10", "", "3,000", "-"] },
              { no: 5, size: "11", values: ["Ø11", "15", "", "2,500", "-"] },
              { no: 6, size: "12", values: ["Ø12", "15", "", "2,000", "24,000"] },
              { no: 7, size: "13", values: ["Ø13", "15", "", "2,000", "24,000"] },
              { no: 8, size: "14", values: ["Ø14", "15", "", "2,000", "24,000"] },
              { no: 9, size: "15", values: ["Ø15", "15", "", "1,500", "18,000"] },
              { no: 10, size: "16", values: ["Ø16", "15", "", "1,000", "12,000"] },
              { no: 11, size: "17", values: ["Ø17", "15", "", "1,000", "12,000"] },
              { no: 12, size: "18", values: ["Ø18", "15", "", "2,500", "10,000"] },
              { no: 13, size: "19", values: ["Ø19", "15", "", "2,500", "10,000"] },
              { no: 14, size: "21", values: ["Ø21", "20", "", "2,000", "8,000"] },
              { no: 15, size: "23", values: ["Ø23", "20", "", "1,500", "6,000"] },
              { no: 16, size: "24", values: ["Ø24", "20", "", "1,500", "6,000"] },
              { no: 17, size: "27", values: ["Ø27", "25", "", "1,000", "4,000"] },
              { no: 18, size: "29", values: ["Ø29", "25", "", "1,000", "4,000"] },
              { no: 19, size: "32", values: ["Ø32", "25", "", "800", "3,200"] },
              { no: 20, size: "33", values: ["Ø33", "25", "", "800", "3,200"] },
              { no: 21, size: "36", values: ["Ø36", "30", "", "600", "2,400"] },
              { no: 22, size: "38", values: ["Ø38", "30", "", "600", "2,400"] },
              { no: 23, size: "40", values: ["Ø40", "30", "", "500", "2,000"] },
              { no: 24, size: "43", values: ["Ø43", "30", "", "500", "2,000"] },
              { no: 25, size: "48", values: ["Ø48", "30", "", "300", "1,200"] },
              { no: 26, size: "50", values: ["Ø50", "30", "", "300", "1,200"] },
              { no: 27, size: "54", values: ["Ø54", "30", "", "250", "1,000"] },
              { no: 28, size: "57", values: ["Ø57", "30", "", "250", "1,000"] },
              { no: 29, size: "60", values: ["Ø60", "30", "", "200", "800"] },
              { no: 30, size: "63", values: ["Ø63", "30", "", "150", "600"] },
              { no: 31, size: "79", values: ["Ø79", "30", "", "100", "400"] },
              { no: 32, size: "89", values: ["Ø89", "30", "", "100", "400"] },
            ],
          },
          {
            title: "무꼭지 TYPE",
            dimensionColumns: [
              { label: "W(내경)" },
              { label: "L" },
              { label: "T", commonValue: "0.8~1.0" },
            ],
            quantityColumns: [PACK, BOX],
            productImageSlot: "spec-pvc-no-tip",
            productImageNote: "L × W",
            rows: [
              { no: 1, size: "4", values: ["Ø4", "10", "", "5,000", "-"] },
              { no: 2, size: "5", values: ["Ø5", "10", "", "5,000", "-"] },
              { no: 3, size: "8", values: ["Ø8", "10", "", "5,000", "-"] },
              { no: 4, size: "9", values: ["Ø9", "10", "", "3,000", "-"] },
              { no: 5, size: "10", values: ["Ø10", "10", "", "3,000", "-"] },
              { no: 6, size: "11", values: ["Ø11", "10", "", "2,500", "-"] },
              { no: 7, size: "13", values: ["Ø13", "12", "", "2,500", "-"] },
              { no: 8, size: "15", values: ["Ø15", "12", "", "2,500", "-"] },
              { no: 9, size: "18", values: ["Ø18", "15", "", "2,500", "20,000"] },
              { no: 10, size: "67", values: ["Ø67", "15", "", "2,500", "20,000"] },
              { no: 11, size: "77", values: ["Ø77", "30", "", "200", "800"] },
            ],
          },
          {
            title: "신형 꼭지 TYPE",
            dimensionColumns: [
              { label: "W(내경)" },
              { label: "L" },
              { label: "T", commonValue: "0.8~1.0" },
            ],
            quantityColumns: [PACK, BOX],
            productImageSlot: "spec-pvc-tip-new",
            productImageNote: "L × W",
            rows: [
              { no: 1, size: "JC-4", values: ["Ø18", "7.5", "", "2,500", "10,000"] },
              { no: 2, size: "GU-4", values: ["Ø19", "10", "", "2,500", "10,000"] },
              { no: 3, size: "JC-6", values: ["Ø20", "11", "", "2,000", "8,000"] },
              { no: 4, size: "GU-6", values: ["Ø21", "12", "", "2,000", "8,000"] },
              { no: 5, size: "JC-8", values: ["Ø24", "12.5", "", "1,500", "6,000"] },
              { no: 6, size: "GU-8", values: ["Ø27", "15", "", "1,000", "5,000"] },
              { no: 7, size: "JC-10", values: ["Ø29", "14.5", "", "1,000", "4,000"] },
              { no: 8, size: "31", values: ["Ø31", "15", "", "800", "3,200"] },
              { no: 9, size: "GU-12", values: ["Ø36", "15", "", "600", "2,400"] },
              { no: 10, size: "GU-16", values: ["Ø43", "13", "", "500", "2,000"] },
            ],
          },
        ],
      },
      {
        slug: "pe",
        name: "PE CAP",
        description:
          "PE(폴리에틸렌) 소재 외경 캡. Frange, 육각, UT TYPE 세 가지 형상으로 생산합니다.",
        specs: [
          {
            title: "Frange Cap",
            dimensionColumns: [{ label: "O·D" }, { label: "I·D" }, { label: "L" }],
            quantityColumns: [PACK],
            productImageSlot: "spec-pe-flange",
            productImageNote: "O·D / I·D / L",
            rows: [
              { no: 1, size: "Ø30", values: ["Ø32.7", "Ø30.0", "13.4", "1500"] },
              { no: 2, size: "Ø38", values: ["Ø40.5", "Ø38.0", "14.2", "1000"] },
              { no: 3, size: "Ø41", values: ["Ø44.2", "Ø41.0", "18.0", "500"] },
              { no: 4, size: "Ø44", values: ["Ø46.8", "Ø44.0", "18.0", "500"] },
              { no: 5, size: "Ø47", values: ["Ø50.0", "Ø47.0", "20.0", "400"] },
              { no: 6, size: "Ø50", values: ["Ø52.8", "Ø50.0", "20.0", "400"] },
              { no: 7, size: "Ø54", values: ["Ø57.0", "Ø54.0", "25.0", "300"] },
              { no: 8, size: "Ø60", values: ["Ø62.7", "Ø60.0", "22.0", "250"] },
            ],
          },
          {
            title: "UT TYPE",
            dimensionColumns: [{ label: "I·D①" }, { label: "I·D②" }, { label: "L" }],
            quantityColumns: [PACK],
            productImageSlot: "spec-pe-ut",
            productImageNote: "I·D① / I·D② / L",
            rows: [
              { no: 1, size: "UT41", values: ["Ø12.6", "Ø13.5", "15.8", "2,000"] },
              { no: 2, size: "UT42", values: ["Ø15.7", "Ø17.0", "15.6", "1,500"] },
              { no: 3, size: "UT43", values: ["Ø20.0", "Ø21.0", "20.0", "1,000"] },
              { no: 4, size: "UT44", values: ["Ø26.0", "Ø26.5", "20.0", "500"] },
            ],
          },
          {
            title: "육각 CAP",
            dimensionColumns: [{ label: "H①" }, { label: "H②" }, { label: "L" }],
            quantityColumns: [PACK],
            productImageSlot: "spec-pe-hex",
            productImageNote: "H① / H② / L",
            rows: [
              { no: 1, size: "GU-12", values: ["41.0", "36.0", "26.5", "400"] },
              { no: 2, size: "GU-16", values: ["46.0", "41.5", "29.0", "300"] },
              { no: 3, size: "H-50", values: ["56.0", "49.5", "19.0", "200"] },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "inner",
    name: "내경 CAP",
    description:
      "각종 피팅, 호스, 파이프 등 내경에 삽입하는 캡류. 나사 TYPE, DUST CAP, PIPE END CAP 등.",
    children: [
      {
        slug: "screw",
        name: "나사 TYPE",
        description:
          "다양한 나사 규격의 내경 캡. GU, M, 일반, UNF, PF 다섯 가지 타입.",
        specs: [
          {
            title: "Gu TYPE",
            dimensionColumns: [{ label: "O·D①" }, { label: "O·D②" }, { label: "L" }],
            quantityColumns: [PACK],
            productImageSlot: "spec-screw-gu",
            productImageNote: "O·D① / O·D② / L",
            rows: [
              { no: 1, size: "GU-4", values: ["Ø17.2", "Ø12.1", "11.5", "3,000"] },
              { no: 2, size: "GU-6", values: ["Ø20.2", "Ø15.5", "12.2", "2,000"] },
              { no: 3, size: "GU-8", values: ["Ø24.4", "Ø20.0", "9.5", "1,500"] },
              { no: 4, size: "GU-12", values: ["Ø34.0", "Ø25.2", "9.5", "2,000"] },
            ],
          },
          {
            title: "M TYPE",
            dimensionColumns: [{ label: "O·D①" }, { label: "O·D②" }, { label: "L" }],
            quantityColumns: [PACK],
            productImageSlot: "spec-screw-m",
            productImageNote: "O·D① / O·D② / L",
            rows: [
              { no: 1, size: "M18", values: ["Ø27.0", "Ø17.0", "11.6", "1,000"] },
              { no: 2, size: "M22", values: ["Ø31.0", "Ø21.7", "11.6", "1,000"] },
              { no: 3, size: "M24", values: ["Ø33.0", "Ø23.5", "11.6", "1,000"] },
              { no: 4, size: "M30", values: ["Ø39.0", "Ø29.3", "11.6", "1,000"] },
              { no: 5, size: "M33", values: ["Ø41.0", "Ø32.0", "12.2", "1,000"] },
              { no: 6, size: "M36", values: ["Ø44.5", "Ø35.2", "11.6", "1,000"] },
              { no: 7, size: "M42", values: ["Ø51.2", "Ø41.0", "11.0", "500"] },
              { no: 8, size: "M52", values: ["Ø59.5", "Ø51.2", "10.8", "500"] },
            ],
          },
          {
            title: "일반 TYPE",
            dimensionColumns: [{ label: "O·D①" }, { label: "O·D②" }, { label: "L" }],
            quantityColumns: [PACK],
            productImageSlot: "spec-screw-general",
            productImageNote: "O·D① / O·D② / L",
            rows: [
              { no: 1, size: "160916", values: ["Ø27.0", "Ø17.0", "12.2", "2,000"] },
              { no: 2, size: "180916", values: ["Ø31.0", "Ø21.7", "13.5", "1,500"] },
              { no: 3, size: "200916", values: ["Ø33.0", "Ø23.5", "16.0", "1,000"] },
              { no: 4, size: "220916", values: ["Ø39.0", "Ø29.3", "15.5", "1,000"] },
              { no: 5, size: "270916", values: ["Ø41.0", "Ø32.0", "16.4", "500"] },
              { no: 6, size: "500916", values: ["Ø44.5", "Ø35.2", "13.5", "1,000"] },
              { no: 7, size: "636667", values: ["Ø51.2", "Ø41.0", "15.8", "1,000"] },
            ],
          },
          {
            title: "UNF TYPE",
            dimensionColumns: [{ label: "O·D①" }, { label: "O·D②" }, { label: "L" }],
            quantityColumns: [PACK],
            productImageSlot: "spec-screw-unf",
            productImageNote: "O·D① / O·D② / L",
            rows: [
              { no: 1, size: "7/16", values: ["Ø27.0", "Ø17.0", "17.6", "1,500"] },
              { no: 2, size: "9/16", values: ["Ø31.0", "Ø21.7", "18.5", "1,500"] },
              { no: 3, size: "3/4", values: ["Ø33.0", "Ø23.5", "20.2", "500"] },
              { no: 4, size: "7/8", values: ["Ø39.0", "Ø29.3", "21.2", "500"] },
              { no: 5, size: "1 1/16", values: ["Ø41.0", "Ø32.0", "21.0", "500"] },
              { no: 6, size: "1 15/16", values: ["Ø44.5", "Ø35.2", "21.0", "300"] },
            ],
          },
          {
            title: "PF TYPE",
            dimensionColumns: [{ label: "O·D①" }, { label: "O·D②" }, { label: "L" }],
            quantityColumns: [PACK],
            productImageSlot: "spec-screw-pf",
            productImageNote: "O·D① / O·D② / L",
            rows: [
              { no: 1, size: "PF 4/1", values: ["Ø23.5", "Ø12.5", "19.7", "1,000"] },
              { no: 2, size: "PF 3/8", values: ["Ø27.5", "Ø15.7", "21.5", "1,000"] },
              { no: 3, size: "PF 1/2", values: ["Ø33.0", "Ø19.6", "22.5", "500"] },
              { no: 4, size: "PF 3/4", values: ["Ø44.0", "Ø25.3", "23.0", "500"] },
              { no: 5, size: "PF M14", values: ["Ø32.0", "Ø13.2", "21.5", "500"] },
              { no: 6, size: "PF M18", values: ["Ø28.2", "Ø17.0", "23.0", "500"] },
              { no: 7, size: "PF M20", values: ["Ø42.0", "Ø19.0", "23.0", "500"] },
            ],
          },
        ],
      },
      {
        slug: "dust",
        name: "더스트캡",
        description: "분진/먼지 차단용 내경 캡.",
        specs: [
          {
            title: "DUST CAP",
            dimensionColumns: [{ label: "O·D①" }, { label: "O·D②" }, { label: "L" }],
            quantityColumns: [PACK],
            productImageSlot: "spec-dust",
            productImageNote: "O·D① / O·D② / L",
            rows: [
              { no: 1, size: "Ø13", values: ["11.8", "35.2", "13.7", "3,000"] },
              { no: 2, size: "Ø19.4", values: ["18.4", "39", "13.7", "3,000"] },
              { no: 3, size: "Ø20.8", values: ["19.6", "40.2", "13.7", "3,000"] },
              { no: 4, size: "Ø25", values: ["23.6", "50.3", "18.6", "2,500"] },
              { no: 5, size: "Ø26", values: ["24.6", "51.3", "18.6", "2,500"] },
              { no: 6, size: "Ø31.5", values: ["29.7", "56.3", "18.6", "2,000"] },
              { no: 7, size: "Ø32.9", values: ["31.1", "58", "18.6", "2,000"] },
            ],
          },
        ],
      },
      {
        slug: "pipe-end",
        name: "PIPE END CAP",
        description: "파이프 단부 마감용 내경 캡.",
        specs: [
          {
            title: "PIPE END CAP",
            dimensionColumns: [
              { label: "①" }, { label: "②" }, { label: "③" }, { label: "④" },
            ],
            quantityColumns: [PACK],
            productImageSlot: "spec-pipe-end-small",
            productImageNote: "Ø8",
            rows: [
              { no: 1, size: "Ø4", values: ["6", "2", "8.6", "4.0", "5,000"] },
              { no: 2, size: "Ø6", values: ["7.8", "1.8", "7.8", "5.1", "5,000"] },
              { no: 3, size: "Ø8", values: ["9.3", "1.9", "10.2", "6.3", "5,000"] },
            ],
          },
          {
            title: "PIPE END CAP",
            dimensionColumns: [
              { label: "①" }, { label: "②" }, { label: "③" }, { label: "④" },
            ],
            quantityColumns: [PACK],
            productImageSlot: "spec-pipe-end-large",
            productImageNote: "Ø8~Ø60",
            rows: [
              { no: 1, size: "Ø10", values: ["10.3", "1.3", "12.5", "9.6", "5,000"] },
              { no: 2, size: "Ø12", values: ["12.0", "1.6", "14.2", "11.9", "5,000"] },
              { no: 3, size: "Ø14", values: ["15.0", "1.5", "15.5", "13.6", "3,000"] },
              { no: 4, size: "Ø18", values: ["17.6", "1.8", "19.5", "17.9", "2,500"] },
              { no: 5, size: "Ø20", values: ["21.2", "1.7", "18.5", "21.5", "2,000"] },
              { no: 6, size: "Ø25", values: ["25.0", "2.1", "20.4", "24.5", "1,500"] },
              { no: 7, size: "Ø30", values: ["30.0", "2.5", "23.0", "29.3", "1,000"] },
              { no: 8, size: "Ø37", values: ["37.5", "2.2", "23.3", "37.2", "500"] },
              { no: 9, size: "Ø40", values: ["40.8", "2.2", "23.3", "42.0", "500"] },
              { no: 10, size: "Ø45", values: ["46.3", "3.0", "33.5", "46.0", "500"] },
              { no: 11, size: "Ø50", values: ["50.7", "3.0", "35.4", "51.0", "250"] },
              { no: 12, size: "Ø60", values: ["59.0", "3.0", "40.3", "59.5", "250"] },
            ],
          },
        ],
      },
    ],
  },
];

/** 경로(string[])로 트리에서 노드 찾기 */
export function findProductNode(path: string[]): {
  node: ProductNode;
  trail: ProductNode[];
} | null {
  const trail: ProductNode[] = [];
  let nodes: ProductNode[] = productTree;
  let current: ProductNode | undefined;
  for (const slug of path) {
    current = nodes.find((n) => n.slug === slug);
    if (!current) return null;
    trail.push(current);
    nodes = current.children ?? [];
  }
  return current ? { node: current, trail } : null;
}

/** 모든 노드 경로 생성 (정적 라우트용) */
export function allProductPaths(): { slug: string[] }[] {
  const out: { slug: string[] }[] = [];
  const walk = (nodes: ProductNode[], parent: string[]) => {
    for (const n of nodes) {
      const path = [...parent, n.slug];
      out.push({ slug: path });
      if (n.children?.length) walk(n.children, path);
    }
  };
  walk(productTree, []);
  return out;
}

export const nav: NavItem[] = [
  {
    label: "회사소개",
    href: "/about/ceo",
    children: [
      { label: "CEO 인사말", href: "/about/ceo" },
      { label: "회사 연혁", href: "/about/history" },
      { label: "인증 및 특허", href: "/about/certification" },
      { label: "조직도", href: "/about/org" },
      { label: "오시는 길", href: "/about/location" },
    ],
  },
  {
    label: "제품정보",
    href: "/products",
    children: productTree.map((g) => ({
      label: g.name,
      href: `/products/${g.slug}`,
    })),
  },
  {
    label: "기술&품질",
    href: "/quality/process",
    children: [
      { label: "품질 관리 공정", href: "/quality/process" },
      { label: "공장 현황", href: "/quality/factory" },
      { label: "제작 사례", href: "/quality/cases" },
    ],
  },
  {
    label: "고객문의",
    href: "/contact/quote",
    children: [
      { label: "견적 문의", href: "/contact/quote" },
      { label: "F&Q", href: "/contact/faq" },
      { label: "공지사항", href: "/contact/notice" },
    ],
  },
];

export const history = [
  { decade: 2020, items: [
    { year: 2023, title: "설비증설", desc: "DIPPING CAP 자동화 설비" },
    { year: 2021, title: "회사 이전", desc: "덕포동, 사상구 사상로375번길 4" },
  ]},
  { decade: 2010, items: [
    { year: 2017, title: "現 현대화학 설립" },
    { year: 2012, title: "자동화설비 추가", desc: "취출로봇 - 2대" },
    { year: 2011, title: "자동화설비 추가", desc: "취출로봇 - 1대" },
    { year: 2011, title: "설비 증설", desc: "사출성형기 (동신유압) - 1대  |  취출로봇 - 1대" },
  ]},
  { decade: 2000, items: [
    { year: 2006, title: "설비 증설", desc: "사출성형기 (동신유압) - 1대, 취출로봇 - 1대" },
    { year: 2005, title: "설비 증설", desc: "사출성형기 (동신유압) - 1대" },
    { year: 2005, title: "자동화설비 구축", desc: "취출로봇 - 3대" },
    { year: 2005, title: "CLEAN 사업장 인증획득" },
    { year: 2005, title: "ISO9001 인증 획득" },
    { year: 2002, title: "본사 이전", desc: "사상구 덕포동 364-10 번지 소재" },
  ]},
  { decade: 1990, items: [
    { year: 1993, title: "신규 생산라인 런칭", desc: "DIPPING CAP  -  상품명:SOFT CAP" },
  ]},
  { decade: 1987, items: [
    { year: 1989, title: "품목추가", desc: "자동차 부품" },
    { year: 1987, title: "현대화공 설립", desc: "사출 성형 - 신발 부품" },
  ]},
];

export const faqs = [
  { id: 1, q: "제품문의는 어떻게 하나요?", a: "제품정보란에 사진 및 치수 확인이 가능하며, 피팅이나 상대물을 보내주시면 거기에 맞는 CAP을 추천해 드릴 수 있습니다." },
  { id: 2, q: "제품 개발도 가능한가요?", a: "금형 개발도 가능하며, 제작기간은 45~60일 정도 소요예상됩니다." },
  { id: 3, q: "PVC캡 제작시 길이(L) 및 두께(T) 조절이 가능한가요?", a: "길이 및 두께 조절 가능합니다." },
  { id: 4, q: "PVC캡 색상은 어떻게 되나요?", a: "검정/투명/적색이 기본 색상입니다." },
  { id: 5, q: "사출(PE) 캡 색상은 어떻게 되나요?", a: "NC/백색/적색/청색/검정이 기본 색상입니다." },
  { id: 6, q: "기본색상 외 색상으로도 제작 가능한가요?", a: "기본색 외 제작도 가능하며, 특별색상 주문 시에는 단가 협의가 필요합니다." },
];

export const notices = [
  { id: 1, title: "2024년 여름 휴무 일정 안내", date: "2024-07-15", body: "여름 휴가 기간을 안내드립니다." },
  { id: 2, title: "2024년 설 연휴 휴무 안내", date: "2024-02-05", body: "설 연휴 기간을 안내드립니다." },
  { id: 3, title: "회사 이전에 따른 휴무 안내", date: "2021-08-01", body: "회사 이전 작업으로 인한 일시적 휴무를 안내드립니다." },
  { id: 4, title: "2023년 여름 휴무 일정 안내", date: "2023-07-20", body: "여름 휴가 기간을 안내드립니다." },
  { id: 5, title: "2023년 설 연휴 휴무 안내", date: "2023-01-15", body: "설 연휴 기간을 안내드립니다." },
  { id: 6, title: "2024년 여름 휴무 일정 안내", date: "2024-07-15", body: "여름 휴가 기간을 안내드립니다." },
];

export const orgChart = {
  root: { title: "대표이사" },
  branches: [
    { title: "생산부", teams: [{ title: "제품생산" }] },
    { title: "품질부", teams: [{ title: "품질보증" }, { title: "품질관리" }, { title: "고객대응" }] },
    { title: "영업부", teams: [{ title: "시장개혁" }, { title: "제품판매" }] },
    { title: "관리부", teams: [{ title: "경영지원" }, { title: "자재구매" }] },
  ],
};

export const orgContacts = {
  parts: ["생산부 담당", "품질부/기술영업부 담당", "관리부 담당"],
  mainPhone: "051-305-0800",
};
