import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowDown } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/content/case-studies";

export const metadata = {
  title: "Selected work and case studies · Dhara Patadia",
  description:
    "Detailed product case studies: MLense no-code AutoML launch, Amazon issue-resolution guidance, and MSc multimodal content prediction.",
};

export default function WorkIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--cream)] text-[var(--ink)]">
      <Header />

      <main id="main-content" className="flex-1 w-full max-w-[var(--container)] mx-auto px-[var(--gutter)] pt-8 pb-20">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[var(--ink-soft)] hover:text-[var(--terracotta-strong)] transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-[800px] mb-12 md:mb-16">
          <Eyebrow>SELECTED WORK</Eyebrow>
          <h1 className="font-display font-extrabold text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] text-[var(--ink)] tracking-tight leading-[1.08] mt-3 mb-4">
            Decisions. Delivery. Impact.
          </h1>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="flex flex-col gap-8 md:gap-10">
          {caseStudies.map((study) => (
            <Card
              key={study.slug}
              variant="bordered"
              tone={study.tone}
              className="p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Information */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Number & Meta Badges */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-display font-extrabold text-[1.25rem] text-[var(--ink-soft)]">
                      {study.number}
                    </span>
                    <span className="w-6 h-[2px] bg-[var(--ink)]/30" />
                    <span className="px-3 py-1 rounded-full bg-[var(--cream)]/80 text-[var(--ink-soft)] text-[0.8125rem] font-semibold border border-[var(--ink)]/15">
                      {study.meta.role}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[var(--cream)]/80 text-[var(--ink-soft)] text-[0.8125rem] font-semibold border border-[var(--ink)]/15">
                      {study.meta.timeline}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="font-display font-extrabold text-[1.875rem] sm:text-[2.25rem] md:text-[2.5rem] text-[var(--ink)] tracking-tight leading-tight mb-2">
                    {study.shortTitle}
                  </h2>
                  <p className="font-body font-medium text-[1.125rem] text-[var(--ink-deep)] mb-3">
                    {study.title.split(": ")[1] || study.title}
                  </p>
                  <p className="font-body text-[1rem] text-[var(--muted)] leading-relaxed mb-6">
                    {study.summary}
                  </p>

                  {/* Key Highlights / Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                    {study.metrics?.slice(0, 3).map((metric, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-[var(--cream)]/60 border border-[var(--ink)]/10"
                      >
                        <div className="font-display font-extrabold text-[1.125rem] text-[var(--ink)]">
                          {metric.value}
                        </div>
                        <div className="font-body text-[0.75rem] text-[var(--muted)] uppercase tracking-wider font-semibold">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div>
                  <Button
                    href={`/work/${study.slug}`}
                    variant="primary"
                    showArrow
                    className="text-[0.9375rem] py-2.5 px-6"
                  >
                    Read full case study
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Preview Card */}
              <div className="lg:col-span-5 w-full flex flex-col justify-center">
                {study.slug === "mlense" && (
                  <div className="w-full bg-[var(--white)] rounded-xl border-2 border-[var(--ink)]/20 p-5">
                    <div className="flex items-center gap-1.5 pb-3 border-b border-[var(--ink)]/10 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--terracotta)] border border-[var(--ink)]/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--sand)] border border-[var(--ink)]/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--sage)] border border-[var(--ink)]/20" />
                      <span className="ml-2 font-body font-semibold text-[0.6875rem] text-[var(--muted)]">MLense</span>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-[var(--cream-2)] rounded-lg border border-[var(--ink)]/10">
                        <div className="text-[0.75rem] font-bold text-[var(--ink)]">6 two-week sprints</div>
                        <div className="text-[0.6875rem] text-[var(--muted)]">12 weeks from proof of concept (v0.1) to production launch</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[0.75rem]">
                        <div className="p-2.5 rounded bg-[var(--blush-light)] border border-[var(--ink)]/10 text-center font-bold">
                          7 ML task types
                        </div>
                        <div className="p-2.5 rounded bg-[var(--sage)] border border-[var(--ink)]/10 text-center font-bold">
                          70 automated tests
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {study.slug === "amazon-guidance" && (
                  <div className="w-full bg-[var(--white)] rounded-xl border-2 border-[var(--ink)]/20 p-5">
                    <div className="flex items-center justify-between pb-3 border-b border-[var(--ink)]/10 mb-4">
                      <span className="font-body text-[0.75rem] font-bold text-[var(--ink)] flex items-center gap-1">
                        How the proposal works
                      </span>
                      <span className="text-[0.6875rem] px-2 py-0.5 rounded bg-[var(--sage)] font-bold text-[var(--ink-soft)]">Proposal</span>
                    </div>
                    <div className="space-y-2.5 text-[0.75rem]">
                      <div className="p-2.5 rounded bg-[var(--cream-2)] border border-[var(--ink)]/10 flex items-center justify-between">
                        <span>Resolved SIM ticket</span>
                        <span className="font-bold text-[var(--rust)]">One current source of guidance</span>
                      </div>
                      <div className="flex items-center justify-center gap-1 text-[var(--muted)] text-[0.6875rem]">
                        <ArrowDown className="w-3 h-3 text-[var(--muted)]" strokeWidth={2} />
                        <span>Linked to its task</span>
                      </div>
                      <div className="p-2.5 rounded bg-[var(--cream-2)] border border-[var(--ink)]/10 flex items-center justify-between">
                        <span>Convention page</span>
                        <span className="font-bold text-[var(--rust)]">4 teams mapped</span>
                      </div>
                    </div>
                  </div>
                )}

                {study.slug === "msc-research" && (
                  <div className="w-full bg-[var(--white)] rounded-xl border-2 border-[var(--ink)]/20 p-5">
                    <div className="flex items-center justify-between pb-3 border-b border-[var(--ink)]/10 mb-4">
                      <span className="font-body text-[0.75rem] font-bold text-[var(--ink)]">Average error vs baseline</span>
                      <span className="text-[0.6875rem] px-2 py-0.5 rounded bg-[var(--sand)] font-bold text-[var(--ink-soft)]">Distinction</span>
                    </div>
                    <div className="space-y-3 text-[0.75rem]">
                      <div>
                        <div className="flex justify-between text-[0.6875rem] font-semibold text-[var(--muted)] mb-1">
                          <span>Metadata-only baseline</span>
                          <span>100</span>
                        </div>
                        <div className="w-full h-3 bg-[var(--ink)]/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[var(--ink-soft)] w-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[0.6875rem] font-bold text-[var(--terracotta-strong)] mb-1">
                          <span>LLM-scored model</span>
                          <span>21 (79% lower)</span>
                        </div>
                        <div className="w-full h-3 bg-[var(--ink)]/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[var(--terracotta-strong)] w-[21%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
