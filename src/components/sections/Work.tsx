import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  User,
  Image as ImageIcon,
  FileText,
  Video,
  Database,
  Layers,
  Rocket,
  Settings,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function Work() {
  return (
    <section id="work" className="w-full pb-[var(--section-space)]">
      <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)]">
        {/* Header row with right-aligned link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
          <div className="flex flex-col gap-3 min-w-0">
            <Eyebrow sectionId="work">{siteConfig.selectedWork.eyebrow}</Eyebrow>
            <SectionHeading>{siteConfig.selectedWork.heading}</SectionHeading>
          </div>

          <Link
            href={siteConfig.selectedWork.viewAllCta.href}
            className="link-highlight inline-flex items-center gap-1.5 font-body font-bold text-[1.0625rem] text-[var(--ink)] hover:text-[var(--rust)] transition-colors select-none group w-fit pb-0.5"
          >
            <span>{siteConfig.selectedWork.viewAllCta.label.replace(" →", "")}</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={2.25}
            />
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-stretch">
          {/* Card 01: MLense (Large, spans 6 cols on desktop) */}
          <div className="lg:col-span-6 flex min-w-0">
            <Card
              variant="bordered"
              tone="blush"
              className="work-card reveal w-full flex flex-col justify-between p-6 sm:p-7 md:p-8"
            >
              <div className="mb-6">
                {/* Number & Dash */}
                <div className="flex items-center gap-2 font-display font-extrabold text-[1.125rem] text-[var(--ink-soft)] mb-2">
                  <span>01</span>
                  <span className="w-8 h-[2px] bg-[var(--ink)]/40" />
                </div>

                <h3 className="font-display font-extrabold text-[1.875rem] md:text-[2.25rem] text-[var(--ink)] tracking-tight leading-tight mb-1">
                  MLense
                </h3>
                {/* Regular weight subtitle (Item 13) */}
                <p className="font-body font-normal text-[1.0625rem] text-[var(--ink-deep)] mb-1">
                  No-code AutoML product launch
                </p>
                <p className="font-body text-[0.9375rem] text-[var(--muted)] mb-5">
                  Roadmap to production in 12 weeks.
                </p>

                <Button
                  href="/work/mlense"
                  variant="primary"
                  showArrow
                  className="text-[0.9375rem] py-2.5 px-5"
                >
                  View case study
                </Button>
              </div>

              {/* Large Browser Mockup filling lower ~60% of card (Item 11) */}
              <div className="relative w-full rounded-[12px] border-2 border-[var(--ink)] bg-[var(--white)] shadow-[3px_4px_0_0_var(--ink)] overflow-hidden select-none">
                {/* Browser Top Bar */}
                <div className="h-8 bg-[var(--cream-2)] border-b border-[var(--ink)]/20 px-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--terracotta)] border border-[var(--ink)]/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--sand)] border border-[var(--ink)]/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--sage)] border border-[var(--ink)]/20" />
                  </div>
                  <span className="font-body font-bold text-[0.75rem] text-[var(--ink-soft)]">
                    MLense
                  </span>
                  <div className="w-8" />
                </div>

                {/* Browser Content Area */}
                <div className="p-3 sm:p-5 grid grid-cols-12 gap-2 sm:gap-4 bg-white min-h-[180px]">
                  {/* Left Sidebar: Dot + Line items (desktop/tablet) */}
                  <div className="hidden sm:flex sm:col-span-3 border-r border-[var(--ink)]/10 pr-2 flex-col gap-2.5 pt-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[var(--terracotta-strong)]/40 shrink-0" />
                        <div
                          className="h-1.5 rounded bg-[var(--ink)]/15"
                          style={{ width: `${60 + (i % 3) * 15}%` }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Main Canvas Area */}
                  <div className="col-span-12 sm:col-span-9 flex flex-col justify-between">
                    <div className="flex items-start justify-between sm:grid sm:grid-cols-12 gap-2 mb-3">
                      {/* Left: Headline & Button */}
                      <div className="sm:col-span-7">
                        <div className="font-display font-extrabold text-[0.9375rem] sm:text-[1.125rem] text-[var(--ink)] leading-tight mb-1">
                          Build. Train. Deploy.
                        </div>
                        <div className="font-body text-[0.6875rem] sm:text-[0.75rem] text-[var(--muted)] leading-tight mb-2.5">
                          Turn your data into real-world AI models, without the complexity.
                        </div>
                        <div className="inline-block px-2.5 py-1 rounded-[6px] bg-[var(--terracotta-strong)] text-white text-[0.625rem] font-bold">
                          New Model +
                        </div>
                      </div>

                      {/* Right: Bar-Chart Panel */}
                      <div className="sm:col-span-5 flex flex-col items-end shrink-0">
                        <div className="p-2 rounded bg-[var(--cream-2)] border border-[var(--ink)]/10 flex items-end gap-1.5 h-14">
                          <div className="w-2 h-4 rounded-t-sm bg-[var(--blush)]" />
                          <div className="w-2 h-7 rounded-t-sm bg-[var(--terracotta-light)]" />
                          <div className="w-2 h-10 rounded-t-sm bg-[var(--terracotta)]" />
                          <div className="w-2 h-6 rounded-t-sm bg-[var(--sand)]" />
                          <div className="w-2 h-11 rounded-t-sm bg-[var(--rust)]" />
                        </div>
                      </div>
                    </div>

                    {/* Row of four icon tiles with real icons */}
                    <div className="flex items-center gap-2 pt-2 border-t border-[var(--ink)]/10">
                      <div className="w-7 h-7 rounded-[6px] border border-[var(--ink)]/20 bg-[var(--blush)] flex items-center justify-center text-[var(--rust)] shadow-xs">
                        <Database className="w-3.5 h-3.5" />
                      </div>
                      <div className="w-7 h-7 rounded-[6px] border border-[var(--ink)]/20 bg-[var(--sage)] flex items-center justify-center text-[var(--ink)] shadow-xs">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <div className="w-7 h-7 rounded-[6px] border border-[var(--ink)]/20 bg-[var(--sand)] flex items-center justify-center text-[var(--rust)] shadow-xs">
                        <Rocket className="w-3.5 h-3.5" />
                      </div>
                      <div className="w-7 h-7 rounded-[6px] border border-[var(--ink)]/20 bg-[var(--cream-2)] flex items-center justify-center text-[var(--ink)] shadow-xs">
                        <Settings className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Concept illustration badge */}
                <div className="bg-[var(--cream-2)] border-t border-[var(--ink)]/15 px-3 py-1 text-right">
                  <span className="font-body text-[0.6875rem] font-medium text-[var(--ink-soft)]">
                    Concept illustration
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Cards 02 & 03 (Two-column split inside cards: text left, illustration right) */}
          <div className="lg:col-span-6 flex flex-col gap-5 md:gap-6 min-w-0">
            {/* Card 02: Amazon */}
            <Card
              variant="bordered"
              tone="sage"
              className="work-card reveal flex-1 flex flex-col justify-between p-6 sm:p-7 min-w-0"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                {/* Left: Text Content */}
                <div className="sm:col-span-7 flex flex-col items-start">
                  <div className="flex items-center gap-2 font-display font-extrabold text-[1.125rem] text-[var(--ink-soft)] mb-2">
                    <span>02</span>
                    <span className="w-8 h-[2px] bg-[var(--ink)]/40" />
                  </div>

                  <h3 className="font-display font-extrabold text-[1.625rem] text-[var(--ink)] tracking-tight leading-tight mb-1">
                    Amazon
                  </h3>
                  {/* Regular weight subtitle (Item 13) */}
                  <p className="font-body font-normal text-[1rem] text-[var(--ink-deep)] mb-1">
                    Improving how teams share resolved issues
                  </p>
                  <p className="font-body text-[0.875rem] text-[var(--muted)] mb-4">
                    Proposal under review. 4 teams mapped.
                  </p>

                  <Button
                    href="/work/amazon-guidance"
                    variant="outline"
                    showArrow
                    className="text-[0.875rem] py-2 px-4"
                  >
                    View case study
                  </Button>
                </div>

                {/* Right: Stacked Message Cards & Avatars (Item 12: no text labels, stacked blush/terracotta cards) */}
                <div className="sm:col-span-5 h-[160px] rounded-[12px] bg-[var(--white)]/70 border border-[var(--ink)]/15 p-3 relative flex items-center justify-center overflow-hidden">
                  {/* Top-Right Avatar */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[var(--portrait)] border border-[var(--ink)]/25 flex items-center justify-center shadow-xs z-10">
                    <User className="w-4 h-4 text-[var(--ink)]" />
                  </div>

                  {/* Stacked Message Cards */}
                  <div className="relative w-[130px] h-[90px]">
                    <div className="absolute -top-1 left-0 w-24 h-10 rounded-[8px] bg-[var(--blush)] border border-[var(--ink)]/20 shadow-xs p-2 flex flex-col gap-1.5 rotate-[-2deg]">
                      <div className="w-12 h-1.5 rounded-full bg-[var(--terracotta)]/40" />
                      <div className="w-16 h-1.5 rounded-full bg-[var(--ink)]/15" />
                    </div>

                    <div className="absolute top-5 left-4 w-24 h-10 rounded-[8px] bg-[var(--sand)] border border-[var(--ink)]/20 shadow-xs p-2 flex flex-col gap-1.5 rotate-[2deg] z-10">
                      <div className="w-14 h-1.5 rounded-full bg-[var(--rust)]/40" />
                      <div className="w-10 h-1.5 rounded-full bg-[var(--ink)]/15" />
                    </div>

                    <div className="absolute top-11 left-2 w-24 h-10 rounded-[8px] bg-[var(--blush-light)] border border-[var(--ink)]/20 shadow-xs p-2 flex flex-col gap-1.5 z-20">
                      <div className="w-16 h-1.5 rounded-full bg-[var(--terracotta-strong)]/40" />
                      <div className="w-12 h-1.5 rounded-full bg-[var(--ink)]/15" />
                    </div>
                  </div>

                  {/* Bottom-Left Avatar */}
                  <div className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-[var(--sage)] border border-[var(--ink)]/25 flex items-center justify-center shadow-xs z-10">
                    <User className="w-4 h-4 text-[var(--ink)]" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Card 03: MSc Research */}
            <Card
              variant="bordered"
              tone="sand"
              className="work-card reveal flex-1 flex flex-col justify-between p-6 sm:p-7 min-w-0"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                {/* Left: Text Content */}
                <div className="sm:col-span-7 flex flex-col items-start">
                  <div className="flex items-center gap-2 font-display font-extrabold text-[1.125rem] text-[var(--ink-soft)] mb-2">
                    <span>03</span>
                    <span className="w-8 h-[2px] bg-[var(--ink)]/40" />
                  </div>

                  <h3 className="font-display font-extrabold text-[1.625rem] text-[var(--ink)] tracking-tight leading-tight mb-1">
                    MSc Research
                  </h3>
                  {/* Regular weight subtitle (Item 13) */}
                  <p className="font-body font-normal text-[1rem] text-[var(--ink-deep)] mb-1">
                    Multimodal content prediction
                  </p>
                  <p className="font-body text-[0.875rem] text-[var(--muted)] mb-4">
                    500 videos, 79% lower average error vs metadata-only baseline.
                  </p>

                  <Button
                    href="/work/msc-research"
                    variant="outline"
                    showArrow
                    className="text-[0.875rem] py-2 px-4"
                  >
                    View case study
                  </Button>
                </div>

                {/* Right: Flow Diagram (Item 12: 3 input tiles -> arrows -> circle node -> bar chart -> tag) */}
                <div className="sm:col-span-5 h-[160px] rounded-[12px] bg-[var(--white)]/70 border border-[var(--ink)]/15 px-3 py-3 relative flex items-center justify-between overflow-hidden">
                  {/* 3 Stacked Input Tiles */}
                  <div className="flex flex-col gap-1.5 shrink-0 z-10">
                    <div className="w-7 h-6 rounded-[5px] bg-[var(--blush)] border border-[var(--ink)]/20 flex items-center justify-center">
                      <ImageIcon className="w-3.5 h-3.5 text-[var(--rust)]" />
                    </div>
                    <div className="w-7 h-6 rounded-[5px] bg-[var(--sage)] border border-[var(--ink)]/20 flex items-center justify-center">
                      <FileText className="w-3.5 h-3.5 text-[var(--ink)]" />
                    </div>
                    <div className="w-7 h-6 rounded-[5px] bg-[var(--sand)] border border-[var(--ink)]/20 flex items-center justify-center">
                      <Video className="w-3.5 h-3.5 text-[var(--rust)]" />
                    </div>
                  </div>

                  {/* Connecting Arrow */}
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--rust)] shrink-0" strokeWidth={2} />

                  {/* Central Circular Node */}
                  <div className="w-9 h-9 rounded-full bg-[var(--terracotta)] border-2 border-[var(--ink)] flex items-center justify-center text-white text-[0.625rem] font-bold shrink-0 z-10">
                    LLM
                  </div>

                  {/* Output Arrow */}
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--rust)] shrink-0" strokeWidth={2} />

                  {/* Output Mini Bar Chart */}
                  <div className="flex items-end gap-1.5 h-12 pb-1 shrink-0 z-10">
                    <div className="w-3 h-10 rounded-t-sm bg-[var(--ink)]/25" title="Baseline error 100" />
                    <div className="w-3 h-3 rounded-t-sm bg-[var(--terracotta-strong)]" title="LLM-scored error 21" />
                  </div>

                  {/* Tag bottom-right */}
                  <span className="absolute bottom-1.5 right-2 font-body text-[0.625rem] text-[var(--ink-soft)] font-medium">
                    Academic study
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
