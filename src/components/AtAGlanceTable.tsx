import type { ReactNode } from "react";

/* AtAGlanceTable — real source: components.fig · FRAME 7:3157
   Definition list used on a model's overview page.
   Heading + 2-column rows (label : value), hairline dividers between rows.
   Values may be plain text or a link (rendered as a blue underlined anchor). */

export interface AtAGlanceRow {
  label: string;
  value: ReactNode;
  href?: string;
}

interface AtAGlanceTableProps {
  title?: string;
  rows?: AtAGlanceRow[];
}

const DEFAULT_ROWS: AtAGlanceRow[] = [
  { label: "Domain", value: "Global (region can be selected)" },
  { label: "Product type", value: "Forecast" },
  { label: "Resolution", value: "10km (A,560 x 1,920 grid points)" },
  { label: "Projection", value: "Equirectangular Latitude-Longitude", href: "#projection" },
  { label: "Parameters", value: "144 available across multiple levels", href: "#parameters" },
  {
    label: "Time steps",
    value:
      "Every hour 0 to 54 hours, every 3 hours between 57 & 144 hours, every 6 hours between 150 & 168 hours",
  },
  { label: "Forecast length", value: "7 days (168 hours)" },
  {
    label: "Update frequency",
    value:
      "4 times daily (for the next 168 hours at 00:00 & 12:00 UTC, for the next 66 hours at 06:00 & 18:00 UTC)",
  },
  { label: "Delivery method", value: "API" },
  { label: "File format", value: "GRIB2 - Gridded Binary Format" },
];

export default function AtAGlanceTable({
  title = "At a glance",
  rows = DEFAULT_ROWS,
}: AtAGlanceTableProps) {
  return (
    <section
      style={{
        fontFamily: "var(--wdh-font-brand)",
        color: "var(--wdh-text-primary)",
      }}
    >
      {title && (
        <h2
          style={{
            fontSize: "var(--wdh-font-display-sm)",
            lineHeight: "45px",
            fontWeight: 600,
            color: "var(--wdh-text-primary)",
            margin: 0,
            marginBottom: "var(--wdh-space-lg)",
          }}
        >
          {title}
        </h2>
      )}
      <dl style={{ margin: 0 }}>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)]"
            style={{
              gap: 16,
              padding: "20px 0",
              borderTop:
                i === 0 ? "none" : "1px solid var(--wdh-border-subtle)",
            }}
          >
            <dt
              style={{
                fontSize: "var(--wdh-font-body-lg)",
                lineHeight: "24px",
                fontWeight: 600,
                color: "var(--wdh-text-primary)",
              }}
            >
              {row.label}:
            </dt>
            <dd
              style={{
                margin: 0,
                fontSize: "var(--wdh-font-body-lg)",
                lineHeight: "24px",
                fontWeight: 400,
                color: "var(--wdh-text-primary)",
              }}
            >
              {row.href ? (
                <a
                  href={row.href}
                  style={{
                    color: "var(--wdh-info)",
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                  }}
                >
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}