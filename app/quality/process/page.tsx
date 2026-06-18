import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ImageSlot from "@/components/ui/ImageSlot";
import PageBanner from "@/components/shared/PageBanner";
import { asset } from "@/lib/asset";

const steps = [
  { title: "입고 검사", desc: "원자재 부적합품 입고 전 / 수입 샘플링 검사" },
  { title: "공정 검사", desc: "공정 이상 시 즉시 조정 및 재검사" },
  { title: "출하 검사", desc: "포장 전 양품 검사 / 출하 가능 상태로 분류" },
  { title: "고객 피드백", desc: "고객 요구사항·규격 재확인" },
];

const measures = [
  { id: "measure-1", title: "VERNIER CALIPERS", specs: ["측정범위: 200mm", "최소눈금: 0.01mm"] },
  { id: "measure-2", title: "PUSH & PULL GAGE", specs: ["모델명: AP-20", "최대측정: 20kg", "최소눈금: 200g"] },
  { id: "measure-3", title: "RING GAGE", specs: ["측정범위: M8 ~ 1.0mm"] },
  { id: "measure-4", title: "PRECISION SCALE", specs: ["모델명: CAS MW-200", "최대측정: 200g", "최소눈금: 0.01g"] },
] as const;

export default function QualityProcessPage() {
  return (
    <>
      <Header variant="light" />
      <PageBanner section="quality" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32">
        <Container>
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-16 sm:mb-20">
            품질 관리 공정
          </h1>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="bg-white rounded-lg p-5 text-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(`/images/${encodeURIComponent(`품질관리공정 아이콘 ${i + 1}.png`)}`)}
                  alt={s.title}
                  className="mx-auto mb-3 max-w-full h-auto object-contain"
                />
                <p className="text-[11px] text-navy-500 mb-1 tracking-widest">
                  STEP {i + 1}
                </p>
                <h3 className="font-bold text-navy-800 mb-2 text-[15px]">
                  {s.title}
                </h3>
                <p className="text-[12px] text-ink-600 leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden bg-navy-50 rounded-2xl py-10 px-6 text-center mb-16">
            <h2 className="relative z-10 text-2xl sm:text-3xl font-bold text-navy-700 tracking-tight">
              Customer Delivery
            </h2>
            <p className="relative z-10 mt-3 text-[13px] sm:text-[14px] text-ink-600">
              매뉴얼 정해진 절차에 따라 검사·관리되어 고객사의 만족도를 끌어올립니다.
            </p>
            {/* 왼쪽 끝: 공장(출발지) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/공장.png")}
              alt=""
              aria-hidden
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 h-[84px] w-[84px] object-contain"
            />
            {/* 오른쪽 끝: 고객(도착지) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/수령.png")}
              alt=""
              aria-hidden
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 h-[84px] w-[84px] object-contain"
            />
            {/* 좌 → 우로 이동하는 택배차 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/택배차.png")}
              alt=""
              aria-hidden
              className="drive-lr absolute top-1/2 -translate-y-1/2 z-0 h-12 w-auto object-contain"
            />
            {/* 텍스트 영역 위 페이드 마스크 — 가장자리는 투명, 가운데는 박스색으로 불투명
                → 원이 가장자리부터 서서히 사라졌다 반대편에서 서서히 나타남 */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 z-[5] w-[70%] bg-[linear-gradient(to_right,transparent,#f0f4fb_40%,#f0f4fb_60%,transparent)]"
            />
          </div>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-center text-navy-800 mb-10">
              측정 설비 소개
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {measures.map((m) => (
                <div
                  key={m.id}
                  className="border border-line rounded-lg overflow-hidden bg-white"
                >
                  <ImageSlot id={m.id} fixedAspect />
                  <div className="p-4">
                    <h3 className="font-bold text-navy-800 text-[15px]">{m.title}</h3>
                    <ul className="mt-2 text-[13px] text-ink-600 space-y-1">
                      {m.specs.map((s) => (
                        <li key={s}>· {s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
