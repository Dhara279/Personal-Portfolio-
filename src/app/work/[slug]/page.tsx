import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/content/case-studies";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.shortTitle} Case Study — Dhara Patadia`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--cream)] text-[var(--ink)]">
      <Header />

      <main id="main-content" className="flex-1 w-full max-w-[var(--container)] mx-auto px-[var(--gutter)] pt-8 pb-24">
        {/* Top Back Navigation */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[var(--ink-soft)] hover:text-[var(--terracotta-strong)] transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>← Back to work</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="max-w-[920px] mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display font-extrabold text-[1.25rem] text-[var(--ink-soft)]">
              {study.number}
            </span>
            <span className="w-8 h-[2px] bg-[var(--ink)]/40" />
            <span className="font-body font-semibold text-[0.9375rem] text-[var(--ink-soft)] uppercase tracking-wider">
              Case Study
            </span>
          </div>

          <h1 className="font-display font-extrabold text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] text-[var(--ink)] tracking-tight leading-[1.1] mb-6">
            {study.title}
          </h1>

          <p className="font-body text-[1.1875rem] md:text-[1.3125rem] text-[var(--ink-deep)] leading-relaxed mb-8">
            {study.summary}
          </p>

          {/* Meta Row: Role · Timeline · Team · Status */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-[var(--cream-2)] border-2 border-[var(--ink)] shadow-[3px_4px_0_0_var(--ink)]">
            <div>
              <div className="font-body text-[0.75rem] uppercase tracking-wider text-[var(--muted)] font-bold mb-1">
                Role
              </div>
              <div className="font-body font-bold text-[0.9375rem] text-[var(--ink)]">
                {study.meta.role}
              </div>
            </div>

            <div>
              <div className="font-body text-[0.75rem] uppercase tracking-wider text-[var(--muted)] font-bold mb-1">
                Timeline
              </div>
              <div className="font-body font-bold text-[0.9375rem] text-[var(--ink)]">
                {study.meta.timeline}
              </div>
            </div>

            <div>
              <div className="font-body text-[0.75rem] uppercase tracking-wider text-[var(--muted)] font-bold mb-1">
                Team
              </div>
              <div className="font-body font-bold text-[0.9375rem] text-[var(--ink)]">
                {study.meta.team}
              </div>
            </div>

            <div>
              <div className="font-body text-[0.75rem] uppercase tracking-wider text-[var(--muted)] font-bold mb-1">
                Status
              </div>
              <div className="font-body font-bold text-[0.9375rem] text-[var(--ink)]">
                {study.meta.status}
              </div>
            </div>
          </div>
        </header>

        {/* Overview Bento Card */}
        <section aria-labelledby="overview-heading" className="mb-14">
          <Card
            variant="bordered"
            tone={study.tone}
            className="p-6 sm:p-8 md:p-10"
          >
            <h2 id="overview-heading" className="font-display font-extrabold text-[1.5rem] md:text-[1.75rem] text-[var(--ink)] mb-6">
              Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {study.overview.map((item, idx) => (
                <div key={idx} className="p-5 rounded-lg bg-[var(--cream)]/75 border border-[var(--ink)]/15">
                  <div className="font-display font-bold text-[1.0625rem] text-[var(--ink)] mb-2 flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        idx === 0
                          ? "bg-[#E06D53]"
                          : idx === 1
                          ? "bg-[#E5B54F]"
                          : "bg-[#6BA27E]"
                      }`}
                    />
                    {item.label}
                  </div>
                  <p className="font-body text-[0.9375rem] text-[var(--muted)] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* DIAGRAM SECTION */}
        {study.visualType === "mlense" && (
          <section aria-labelledby="diagram-mlense" className="mb-14">
            <Card variant="bordered" tone="cream-2" className="p-6 sm:p-8 md:p-10">
              <h2 id="diagram-mlense" className="font-display font-extrabold text-[1.5rem] md:text-[1.75rem] text-[var(--ink)] mb-8">
                12-week delivery
              </h2>

              {/* Start marker */}
              <div className="flex justify-between items-center text-[0.875rem] font-bold text-[var(--ink)] mb-3">
                <span className="px-3 py-1 rounded bg-[var(--white)] border border-[var(--ink)]/20 shadow-xs">
                  v0.1 · Proof of concept
                </span>
                <span className="px-3 py-1 rounded bg-[var(--white)] border border-[var(--ink)]/20 shadow-xs">
                  v1.0 · Production launch on Google Cloud
                </span>
              </div>

              {/* Six equal bars labelled Sprint 1 to Sprint 6 (two weeks each) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={num}
                    className="p-4 rounded-xl bg-[var(--white)] border border-[var(--ink)]/20 shadow-xs flex flex-col items-center justify-center text-center h-24"
                  >
                    <span className="font-display font-extrabold text-[1rem] text-[var(--ink)]">
                      Sprint {num}
                    </span>
                    <span className="font-body text-[0.8125rem] text-[var(--muted)] mt-1">
                      (two weeks)
                    </span>
                  </div>
                ))}
              </div>

              {/* Under Sprints 1–2 marker */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className="col-span-2 text-left">
                  <span className="inline-block px-3 py-1 rounded bg-[var(--blush)] text-[var(--ink)] font-bold text-[0.8125rem] border border-[var(--ink)]/20">
                    Working MVP in month one
                  </span>
                </div>
              </div>
            </Card>
          </section>
        )}

        {study.visualType === "amazon" && (
          <section aria-labelledby="diagram-amazon" className="mb-14">
            <Card variant="bordered" tone="sage" className="p-6 sm:p-8 md:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
                <h2 id="diagram-amazon" className="font-display font-extrabold text-[1.5rem] md:text-[1.75rem] text-[var(--ink)]">
                  How the proposal works
                </h2>
                <span className="self-start sm:self-center px-3 py-1 rounded-full bg-[var(--white)] text-[var(--ink)] font-bold text-[0.8125rem] border border-[var(--ink)]/20">
                  Conceptual · proposal under review
                </span>
              </div>

              {/* Four steps, left to right */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                <div className="p-5 rounded-xl bg-[var(--white)] border border-[var(--ink)]/20 shadow-xs flex flex-col justify-center">
                  <p className="font-display font-bold text-[0.9375rem] text-[var(--ink)] leading-snug">
                    Resolved SIM
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[var(--white)] border border-[var(--ink)]/20 shadow-xs flex flex-col justify-center">
                  <p className="font-display font-bold text-[0.9375rem] text-[var(--ink)] leading-snug">
                    Linked to its task on the convention page
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[var(--white)] border border-[var(--ink)]/20 shadow-xs flex flex-col justify-center">
                  <p className="font-display font-bold text-[0.9375rem] text-[var(--ink)] leading-snug">
                    Visible during L1 audits
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[var(--white)] border border-[var(--ink)]/20 shadow-xs flex flex-col justify-center">
                  <p className="font-display font-bold text-[0.9375rem] text-[var(--ink)] leading-snug">
                    Repeated overturns fixed for the whole team in a huddle
                  </p>
                </div>
              </div>
            </Card>
          </section>
        )}

        {study.visualType === "msc" && (
          <section aria-labelledby="diagram-msc" className="mb-14">
            <Card variant="bordered" tone="sand" className="p-6 sm:p-8 md:p-10">
              <h2 id="diagram-msc" className="font-display font-extrabold text-[1.5rem] md:text-[1.75rem] text-[var(--ink)] mb-8">
                Average error, relative to the metadata-only baseline
              </h2>

              <div className="space-y-6 max-w-[700px] bg-[var(--white)] p-6 rounded-xl border border-[var(--ink)]/20 mb-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-body font-bold text-[0.9375rem] text-[var(--ink)]">
                      Metadata-only baseline
                    </span>
                    <span className="font-mono font-bold text-[0.9375rem] text-[var(--muted)]">
                      100
                    </span>
                  </div>
                  <div className="w-full h-7 bg-[var(--cream)] rounded-md border border-[var(--ink)]/15 overflow-hidden">
                    <div className="h-full bg-[var(--ink-soft)] w-full flex items-center px-3 text-[0.75rem] font-bold text-white">
                      100
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-body font-bold text-[0.9375rem] text-[var(--ink)]">
                      LLM-scored model
                    </span>
                    <span className="font-mono font-bold text-[0.9375rem] text-[var(--terracotta-strong)]">
                      21 (79% lower)
                    </span>
                  </div>
                  <div className="w-full h-7 bg-[var(--cream)] rounded-md border border-[var(--ink)]/15 overflow-hidden">
                    <div className="h-full bg-[var(--terracotta-strong)] w-[21%] flex items-center px-3 text-[0.75rem] font-bold text-white">
                      21
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-body text-[0.875rem] text-[var(--muted)]">
                The visual-only deep learning model was also outperformed; it isn&apos;t plotted here.
              </p>
            </Card>
          </section>
        )}

        {/* Detailed Case Study Sections */}
        <div className="space-y-12 max-w-[820px] mb-16">
          {study.sections.map((section) => (
            <section key={section.id} aria-labelledby={section.id}>
              {section.heading && (
                <h2
                  id={section.id}
                  className="font-display font-extrabold text-[1.75rem] sm:text-[2rem] text-[var(--ink)] tracking-tight leading-snug mb-4"
                >
                  {section.heading}
                </h2>
              )}

              {section.paragraphs && section.paragraphs.length > 0 && (
                <div className="space-y-4 font-body text-[1.0625rem] text-[var(--muted)] leading-[1.75]">
                  {section.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}

              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-5 space-y-2.5 font-body text-[1rem] text-[var(--muted)]">
                  {section.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--terracotta-strong)] mt-2.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.notice && (
                <div className="mt-6 p-5 sm:p-6 rounded-xl bg-[var(--cream-2)] border-2 border-[var(--ink)] shadow-[3px_3px_0_0_var(--ink)]">
                  <p className="font-body text-[0.9375rem] text-[var(--ink-deep)] leading-relaxed font-medium">
                    {section.notice}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Key numbers Summary Card */}
        {study.metrics && (
          <section aria-labelledby="key-numbers-heading" className="mb-16">
            <Card variant="bordered" tone="cream-2" className="p-6 sm:p-8">
              <h2 id="key-numbers-heading" className="font-display font-extrabold text-[1.5rem] text-[var(--ink)] mb-6">
                Key numbers
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {study.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[var(--white)] border border-[var(--ink)]/15"
                  >
                    <div className="font-display font-extrabold text-[1.75rem] text-[var(--ink)] mb-1">
                      {metric.value}
                    </div>
                    <div className="font-body font-bold text-[0.875rem] text-[var(--ink)] mb-1">
                      {metric.label}
                    </div>
                    {metric.note && (
                      <div className="font-body text-[0.75rem] text-[var(--muted)]">
                        {metric.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </section>
        )}

        {/* Next Case Study Navigation */}
        <section aria-label="Explore other work" className="pt-8 border-t border-[var(--ink)]/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-body text-[0.8125rem] text-[var(--muted)] uppercase tracking-wider font-bold">
                Next Case Study
              </span>
              <div className="font-display font-extrabold text-[1.375rem] text-[var(--ink)]">
                {nextStudy.title}
              </div>
            </div>

            <Button
              href={`/work/${nextStudy.slug}`}
              variant="outline"
              showArrow
              className="self-start sm:self-center py-2.5 px-5 text-[0.9375rem]"
            >
              Read Next Study
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
