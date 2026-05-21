/* HelpFooter — real source: components.fig · INSTANCE 7:3294 / Help (I7:3294;40001204:12425)

   In-page footer block that closes every API documentation page.
   Plain text composition — no surface, no padding, no card.

   Real content (verbatim from Figma):
     · H2 — "Help us improve the data services we offer"
            32 / SemiBold / #000000
     · Body — "Join the Met Office research panel to help us understand
              how people interact with weather and climate data, uncover
              challenges and explore opportunities."
              19 / Regular / text-primary

   Stacked vertically, 25px gap. Frame width 894px, no padding. */

import type { ReactNode } from "react";

interface HelpFooterProps {
  heading?: string;
  body?: string;
  /** Optional CTA — appears below body, no button by default in source. */
  cta?: ReactNode;
}

const DEFAULT_HEADING = "Help us improve the data services we offer";
const DEFAULT_BODY =
  "Join the Met Office research panel to help us understand how people interact with weather and climate data, uncover challenges and explore opportunities.";

export default function HelpFooter({
  heading = DEFAULT_HEADING,
  body = DEFAULT_BODY,
  cta,
}: HelpFooterProps) {
  return (
    <section
      aria-labelledby="help-footer-heading"
      style={{
        width: "100%",
        maxWidth: 894,
        display: "flex",
        flexDirection: "column",
        gap: 25,
      }}
    >
      <h2
        id="help-footer-heading"
        className="font-brand"
        style={{
          fontSize: 32,
          lineHeight: "40px",
          fontWeight: 600,
          color: "var(--wdh-text-primary)",
          margin: 0,
        }}
      >
        {heading}
      </h2>
      <p
        className="font-brand"
        style={{
          fontSize: 19,
          lineHeight: "24px",
          fontWeight: 400,
          color: "var(--wdh-text-primary)",
          margin: 0,
          maxWidth: 862,
        }}
      >
        {body}
      </p>
      {cta && <div>{cta}</div>}
    </section>
  );
}