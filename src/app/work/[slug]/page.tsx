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
import { ReadingProgress } from "@/components/motion/ReadingProgress";
import { CaseStudyMotion } from "@/components/motion/CaseStudyMotion";

/** Wraps each number in a metric value so it can count up once in view ("80–85%" counts both). */
function Countable({ value }: { value: string }) {
  const parts = value.split(/(\d+)/);
  return (
    <>
      {parts.map((part, i) =>
        /^\d+$/.test(part) ? (
          <span key={i} data-count-to={part}>
            {part}
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

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
    title: `${study.shortTitle} case study · Dhara Patadia`,
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
      <ReadingProgress />
      <CaseStudyMotion />

      <main id="main-content" className="cs-page-fade flex-1 w-full max-w-[var(--container)] mx-auto px-[var(--gutter)] pt-8 pb-24">
        {/* Top Back Navigation */}
        <div className="max-w-[960px] mx-auto mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[var(--ink-soft)] hover:text-[var(--terracotta-strong)] transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to work</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="max-w-[960px] mx-auto mb-12 md:mb-16">
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

        {/* Overview (A11: no outer border/shadow) */}
        <section aria-labelledby="overview-heading" className="max-w-[960px] mx-auto mb-14">
          <div className="w-full">
            <h2 id="overview-heading" className="font-display font-extrabold text-[1.5rem] md:text-[1.75rem] text-[var(--ink)] mb-6">
              Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {study.overview.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[var(--cream-2)] border-2 border-[var(--ink)] shadow-[3px_4px_0_0_var(--ink)]">
                  <div className="font-display font-bold text-[1.0625rem] text-[var(--ink)] mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--terracotta)]" />
                    {item.label}
                  </div>
                  <p className="font-body text-[0.9375rem] text-[var(--muted)] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIAGRAM SECTION (A11: no outer border/shadow) */}
        {study.visualType === "mlense" && (
          <section aria-labelledby="diagram-mlense" className="max-w-[960px] mx-auto mb-14">
            <div className="w-full">
              <h2 id="diagram-mlense" className="font-display font-extrabold text-[1.5rem] md:text-[1.75rem] text-[var(--ink)] mb-8">
                12-week delivery
              </h2>

              {/* Start marker */}
              <div className="flex justify-between items-center text-[0.875rem] font-bold text-[var(--ink)] mb-3">
                <span className="px-3 py-1 rounded bg-[var(--white)] border border-[var(--ink)]/20">
                  v0.1 · Proof of concept
                </span>
                <span className="px-3 py-1 rounded bg-[var(--white)] border border-[var(--ink)]/20">
                  v1.0 · Production launch on Google Cloud
                </span>
              </div>

              {/* One segmented bar: six two-week sprints (fills left to right once in view) */}
              <div data-cs="sprints">
                <div role="img" aria-label="Six two-week sprints, S1 to S6" className="grid grid-cols-6 gap-1.5 sm:gap-2 mb-3">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                      key={num}
                      className="relative h-12 rounded-lg border-2 border-[var(--ink)] bg-[var(--white)] overflow-hidden"
                    >
                      <div
                        aria-hidden="true"
                        className="cs-seg-fill absolute inset-0 bg-[var(--coral)]"
                        style={{ "--i": num - 1 } as React.CSSProperties}
                      />
                      <span className="relative flex h-full items-center justify-center font-display font-extrabold text-[1rem] text-[var(--ink)]">
                        S{num}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Under S1–S2: MVP marker; right: sprint length */}
                <div className="grid grid-cols-6 gap-1.5 sm:gap-2 items-start">
                  <div className="col-span-4 sm:col-span-2 text-left">
                    <span className="inline-block px-3 py-1 rounded bg-[var(--blush)] text-[var(--ink)] font-bold text-[0.8125rem] border border-[var(--ink)]/20">
                      Working MVP in month one
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-start-5 text-right font-body font-semibold text-[0.8125rem] text-[var(--muted)] pt-1">
                    2 weeks each
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {study.visualType === "amazon" && (
          <section aria-labelledby="diagram-amazon" className="max-w-[960px] mx-auto mb-14">
            <div className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
                <h2 id="diagram-amazon" className="font-display font-extrabold text-[1.5rem] md:text-[1.75rem] text-[var(--ink)]">
                  How the proposal works
                </h2>
                <span className="self-start sm:self-center px-3 py-1 rounded-full bg-[var(--white)] text-[var(--ink)] font-bold text-[0.8125rem] border border-[var(--ink)]/20">
                  Conceptual · proposal under review
                </span>
              </div>

              {/* Four steps, left to right; they appear in sequence with connectors drawing between them */}
              <ol data-cs="steps" className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
                {[
                  "Resolved SIM",
                  "Linked to its task on the convention page",
                  "Visible during L1 audits",
                  "Repeated overturns fixed for the whole team in a huddle",
                ].map((step, i, all) => (
                  <li
                    key={step}
                    className="cs-step relative p-5 rounded-xl bg-[var(--white)] border border-[var(--ink)]/20 flex flex-col justify-center"
                    style={{ "--i": i } as React.CSSProperties}
                  >
                    <p className="font-display font-bold text-[0.9375rem] text-[var(--ink)] leading-snug">
                      {step}
                    </p>
                    {i < all.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="cs-connector absolute bg-[var(--ink)]/35 left-1/2 top-full w-[2px] h-6 lg:left-full lg:top-1/2 lg:w-8 lg:h-[2px]"
                        style={{ "--i": i } as React.CSSProperties}
                      />
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {study.visualType === "msc" && (
          <section aria-labelledby="diagram-msc" className="max-w-[960px] mx-auto mb-14">
            <div className="w-full">
              <h2 id="diagram-msc" className="font-display font-extrabold text-[1.5rem] md:text-[1.75rem] text-[var(--ink)] mb-8">
                Average error, relative to the metadata-only baseline
              </h2>

              <div data-cs="msc" className="space-y-6 max-w-[700px] bg-[var(--white)] p-6 rounded-xl border border-[var(--ink)]/20 mb-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-body font-bold text-[0.9375rem] text-[var(--ink)]">
                      Metadata-only baseline
                    </span>
                    <span className="font-body font-bold text-[0.9375rem] text-[var(--muted)]">
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
                    <span className="font-body font-bold text-[0.9375rem] text-[var(--terracotta-strong)] tabular-nums">
                      <span data-count-to="21" data-count-from="100" data-count-dur="0.9">21</span> (
                      <span data-count-to="79" data-count-dur="0.9">79</span>% lower)
                    </span>
                  </div>
                  <div className="w-full h-7 bg-[var(--cream)] rounded-md border border-[var(--ink)]/15 overflow-hidden">
                    <div className="cs-msc-bar h-full bg-[var(--terracotta-strong)] flex items-center px-3 text-[0.75rem] font-bold text-white tabular-nums">
                      <span data-count-to="21" data-count-from="100" data-count-dur="0.9">21</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-body text-[0.875rem] text-[var(--muted)]">
                The visual-only deep learning model was also outperformed; it isn&apos;t plotted here.
              </p>
            </div>
          </section>
        )}

        {/* Detailed Case Study Sections (A11: centered article column) */}
        <div className="space-y-12 max-w-[68ch] mx-auto mb-16">
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

        {/* Key numbers Summary (A11: no outer border/shadow) */}
        {study.metrics && (
          <section aria-labelledby="key-numbers-heading" className="max-w-[960px] mx-auto mb-16">
            <div className="w-full">
              <h2 id="key-numbers-heading" className="font-display font-extrabold text-[1.5rem] text-[var(--ink)] mb-6">
                Key numbers
              </h2>

              <div data-cs="metrics" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {study.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-[var(--cream-2)] border-2 border-[var(--ink)] shadow-[3px_4px_0_0_var(--ink)]"
                  >
                    <div className="font-display font-extrabold text-[1.75rem] text-[var(--ink)] mb-1 tabular-nums">
                      <Countable value={metric.value} />
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
            </div>
          </section>
        )}

        {/* Next Case Study Navigation */}
        <section aria-label="Explore other work" className="max-w-[960px] mx-auto pt-8 border-t border-[var(--ink)]/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-body text-[0.8125rem] text-[var(--muted)] uppercase tracking-wider font-bold">
                Up next
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
              Next case study
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
