import React from "react";
import { MarqueePlayer } from "@/components/ui/MarqueePlayer";

// Official logo files (see public/logos/tools/SOURCES.md). Do not redraw or recolour.
const TOOL_LOGOS: Record<string, string> = {
  Notion: "/logos/tools/notion.svg",
  Asana: "/logos/tools/asana.svg",
  Excel: "/logos/tools/excel.svg",
  PowerPoint: "/logos/tools/powerpoint.svg",
  Slack: "/logos/tools/slack.svg",
  Teams: "/logos/tools/microsoft-teams.svg",
  ChatGPT: "/logos/tools/chatgpt.svg",
  Claude: "/logos/tools/claude.svg",
};

// Phase 7 §3.4: row 2 runs the same tools in a different order.
const ROW_2_ORDER = ["Claude", "Slack", "Excel", "Notion", "ChatGPT", "Teams", "Asana", "PowerPoint"];

// Each copy holds the list twice so one copy is always wider than the card,
// even on wide screens. Durations are doubled to match (40s / 48s per list).
const REPEATS = 2;
const ROW_1_SECONDS = 40 * REPEATS;
const ROW_2_SECONDS = 48 * REPEATS;

function ToolChip({ name }: { name: string }) {
  const src = TOOL_LOGOS[name];
  return (
    <span className="tool-chip font-body">
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" width={22} height={22} decoding="async" className="tool-chip__logo" />
      )}
      <span>{name}</span>
    </span>
  );
}

function MarqueeRow({
  items,
  seconds,
  reverse = false,
}: {
  items: string[];
  seconds: number;
  reverse?: boolean;
}) {
  const copy = Array.from({ length: REPEATS }, () => items).flat();
  return (
    <div className="tools-marquee__row">
      <div
        className="tools-marquee__track"
        data-reverse={reverse ? "true" : undefined}
        style={{ "--marquee-dur": `${seconds}s` } as React.CSSProperties}
      >
        {[0, 1].map((c) =>
          copy.map((name, i) => <ToolChip key={`${c}-${i}-${name}`} name={name} />)
        )}
      </div>
    </div>
  );
}

/** Tools: two rows of logo chips drifting in opposite directions (Phase 7 §3). CSS only. */
export function ToolsMarquee({ tools }: { tools: string[] }) {
  const row2 = ROW_2_ORDER.filter((t) => tools.includes(t));

  return (
    <>
      {/* Screen readers get one plain list. With reduced motion it is shown as a static, wrapped row. */}
      <ul className="tools-list">
        {tools.map((tool) => (
          <li key={tool}>
            <ToolChip name={tool} />
          </li>
        ))}
      </ul>

      <MarqueePlayer>
        <MarqueeRow items={tools} seconds={ROW_1_SECONDS} />
        <MarqueeRow items={row2} seconds={ROW_2_SECONDS} reverse />
      </MarqueePlayer>
    </>
  );
}
