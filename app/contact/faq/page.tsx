"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/shared/PageBanner";
import { faqs } from "@/lib/site";

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <Header variant="light" />
      <PageBanner section="contact" />
      <main className="flex-1 pt-24 sm:pt-32 pb-24 sm:pb-32">
        <Container size="narrow">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-12 sm:mb-16">
            자주 묻는 질문
          </h1>

          <div className="border-b-2 border-navy-700 mb-10" />

          <ul className="space-y-4">
            {faqs.map((f) => {
              const isOpen = openId === f.id;
              return (
                <li key={f.id}>
                  <button
                    type="button"
                    onClick={() => toggle(f.id)}
                    className={`w-full block text-left bg-navy-50 hover:bg-navy-100 transition-all duration-200 px-6 sm:px-8 py-4 sm:py-5 ${
                      isOpen ? "rounded-3xl" : "rounded-full"
                    }`}
                    aria-expanded={isOpen}
                  >
                    {/* Q 라인 */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-navy-700 text-[15px] sm:text-base">
                          Q.
                        </span>
                        <span className="text-navy-800 font-semibold text-[15px] sm:text-base">
                          {f.q}
                        </span>
                      </div>
                      <span
                        className={`text-navy-700 text-xl leading-none flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </div>

                    {/* A 영역 — 펼침 시에만 표시 */}
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-navy-200"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-ink-700 text-[14px] sm:text-[15px] leading-relaxed">
                          <span className="font-bold text-navy-700 mr-2">
                            A.
                          </span>
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </Container>
      </main>
      <Footer />
    </>
  );
}
