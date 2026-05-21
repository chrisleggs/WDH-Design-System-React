/* SideNavRight — real source: components.fig · INSTANCE 7:3295 (Side Nav Right)

   Right-side navigation rail used on Atmospheric Models / Useful Links
   surfaces. Two stacked sections, each:
     · Heading — 24 / SemiBold / --wdh-text-primary
     · List of action-blue links (#0074CC) — 19 / 23 / Regular

   Frame: 261 × auto · horizontal padding 24px · 48px gap between sections.
   Plain page surface — no dark fill, no border, no card chrome.

   Real default content (verbatim from Figma):
     Section 1: Atmospheric Models
       · UK Deterministic 2km Forecast - Standard
       · UK Deterministic 2km Forecast - Latitude-Longitude
       · Global Ensemble 20km Forecast (MOGREPS-G)
       · UK Ensemble 2km Forecast (MOGREPS-UK)
     Section 2: Useful links
       · Get started
       · See available parameters
       · API documentation
       · Usage examples
       · Download sample code
       · Download sample data
       · How to build your order
       · Model run availability */

import { useState } from "react";
import type { ReactNode } from "react";

export interface SideNavRightLink {
  label: string;
  href?: string;
}

export interface SideNavRightSection {
  heading: string;
  links: SideNavRightLink[];
}

interface SideNavRightProps {
  sections?: SideNavRightSection[];
}

const DEFAULT_SECTIONS: SideNavRightSection[] = [
  {
    heading: "Atmospheric Models",
    links: [
      { label: "UK Deterministic 2km Forecast - Standard" },
      { label: "UK Deterministic 2km Forecast - Latitude-Longitude" },
      { label: "Global Ensemble 20km Forecast (MOGREPS-G)" },
      { label: "UK Ensemble 2km Forecast (MOGREPS-UK)" },
    ],
  },
  {
    heading: "Useful links",
    links: [
      { label: "Get started" },
      { label: "See available parameters" },
      { label: "API documentation" },
      { label: "Usage examples" },
      { label: "Download sample code" },
      { label: "Download sample data" },
      { label: "How to build your order" },
      { label: "Model run availability" },
    ],
  },
];

export default function SideNavRight({
  sections = DEFAULT_SECTIONS,
}: SideNavRightProps) {
  return (
    <nav
      aria-label="Side navigation"
      style={{
        width: 261,
        display: "flex",
        flexDirection: "column",
        gap: 48,
        padding: "0 24px",
        boxSizing: "border-box",
      }}
    >
      {sections.map((section) => (
        <Section key={section.heading} section={section} />
      ))}
    </nav>
  );
}

function Section({ section }: { section: SideNavRightSection }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        borderLeft: "1px solid var(--wdh-border-subtle)",
        paddingLeft: 16,
      }}
    >
      <h3
        className="font-brand"
        style={{
          fontSize: 24,
          lineHeight: "26px",
          fontWeight: 600,
          color: "var(--wdh-text-primary)",
          margin: 0,
        }}
      >
        {section.heading}
      </h3>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {section.links.map((link) => (
          <li key={link.label} style={{ margin: 0 }}>
            <SideNavLink href={link.href}>{link.label}</SideNavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SideNavLink({ href = "#", children }: { href?: string; children: ReactNode }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="font-brand"
      style={{
        display: "block",
        fontSize: 19,
        lineHeight: "23px",
        fontWeight: 400,
        color: "var(--wdh-info)",
        textDecoration: hover ? "underline" : "none",
        textUnderlineOffset: 3,
      }}
    >
      {children}
    </a>
  );
}