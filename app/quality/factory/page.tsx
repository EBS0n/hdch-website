import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ImageSlot from "@/components/ui/ImageSlot";
import PageBanner from "@/components/shared/PageBanner";

const equipments = [
  { id: "factory-equipment-1", label: "사출성형기 · 170TON · 1대" },
  { id: "factory-equipment-2", label: "사출성형기 · 150TON · 2대" },
  { id: "factory-equipment-3", label: "사출성형기 · 100TON · 2대" },
  { id: "factory-equipment-4", label: "SOFT 수동생산설비 · 18kW · 1대" },
  { id: "factory-equipment-5", label: "SOFT 자동생산설비 · 29kW · 1대" },
  { id: "factory-equipment-6", label: "칠러 · 10RT · 1대" },
] as const;

const revenue = [
  { year: 2018, value: 38 },
  { year: 2019, value: 42 },
  { year: 2020, value: 36 },
  { year: 2021, value: 48 },
  { year: 2022, value: 55 },
  { year: 2023, value: 60 },
];

const production = [
  { year: 2018, a: 120, b: 80 },
  { year: 2019, a: 135, b: 90 },
  { year: 2020, a: 110, b: 70 },
  { year: 2021, a: 150, b: 100 },
  { year: 2022, a: 170, b: 115 },
  { year: 2023, a: 185, b: 125 },
];

function LineChart({
  data,
  keyName,
}: {
  data: { year: number; value: number }[];
  keyName: string;
}) {
  const max = Math.max(...data.map((d) => d.value));
  const min = Math.min(...data.map((d) => d.value));
  const w = 600;
  const h = 200;
  const padding = 28;
  const points = data
    .map((d, i) => {
      const x = padding + (i * (w - padding * 2)) / (data.length - 1);
      const y =
        h - padding - ((d.value - min) / (max - min || 1)) * (h - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full h-auto"
      aria-label={keyName}
    >
      <polyline
        fill="none"
        stroke="var(--color-navy-500)"
        strokeWidth="2.5"
        points={points}
      />
      {data.map((d, i) => {
        const x = padding + (i * (w - padding * 2)) / (data.length - 1);
        const y =
          h - padding - ((d.value - min) / (max - min || 1)) * (h - padding * 2);
        return (
          <g key={d.year}>
            <circle cx={x} cy={y} r={3.5} fill="var(--color-navy-700)" />
            <text
              x={x}
              y={h - 6}
              textAnchor="middle"
              fontSize="11"
              fill="var(--color-ink-600)"
            >
              {d.year}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function TwoLineChart({ data }: { data: typeof production }) {
  const w = 600;
  const h = 220;
  const padding = 28;
  const allVals = data.flatMap((d) => [d.a, d.b]);
  const max = Math.max(...allVals);
  const min = Math.min(...allVals);
  const buildPath = (key: "a" | "b") =>
    data
      .map((d, i) => {
        const x = padding + (i * (w - padding * 2)) / (data.length - 1);
        const y =
          h - padding - ((d[key] - min) / (max - min || 1)) * (h - padding * 2);
        return `${x},${y}`;
      })
      .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
      <polyline
        fill="none"
        stroke="var(--color-navy-500)"
        strokeWidth="2.5"
        points={buildPath("a")}
      />
      <polyline
        fill="none"
        stroke="var(--color-navy-800)"
        strokeWidth="2.5"
        points={buildPath("b")}
      />
      {data.map((d, i) => {
        const x = padding + (i * (w - padding * 2)) / (data.length - 1);
        return (
          <text
            key={d.year}
            x={x}
            y={h - 6}
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-ink-600)"
          >
            {d.year}
          </text>
        );
      })}
      <g transform={`translate(${w - 110}, 12)`}>
        <rect width="10" height="10" fill="var(--color-navy-500)" />
        <text x="14" y="9" fontSize="11" fill="var(--color-ink-600)">
          제품 A
        </text>
        <rect y="14" width="10" height="10" fill="var(--color-navy-800)" />
        <text x="14" y="23" fontSize="11" fill="var(--color-ink-600)">
          제품 B
        </text>
      </g>
    </svg>
  );
}

export default function FactoryPage() {
  return (
    <>
      <Header variant="light" />
      <PageBanner section="quality" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32">
        <Container>
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-16 sm:mb-20">
            공장현황
          </h1>

          {/* 제조 설비 그리드 */}
          <section className="mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-navy-800 mb-8">
              제조 설비 소개
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {equipments.map((eq) => (
                <figure
                  key={eq.id}
                  className="border border-line rounded-lg overflow-hidden bg-white"
                >
                  <ImageSlot id={eq.id} />
                  <figcaption className="p-3 text-center text-xs sm:text-sm text-navy-700 font-medium">
                    {eq.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* 6개년 매출 추이 */}
          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-black tracking-tight mb-6">
              6개년 매출 추이
            </h2>
            <ImageSlot id="chart-revenue" rounded="md" />
          </section>

          {/* 생산 수량 */}
          <section>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-black tracking-tight mb-6">
              생산 수량
            </h2>
            <ImageSlot id="chart-production" rounded="md" />
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
