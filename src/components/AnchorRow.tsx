/* AnchorRow — real source: components.fig · INSTANCE 7:3213
   Horizontal list of section anchor links displayed near the top of
   an API model page. All items 24px / SemiBold / text-primary,
   no underline at rest. Hover lifts to brand-lime (active state). */

export interface AnchorItem {
  label: string;
  href: string;
}

interface AnchorRowProps {
  items?: AnchorItem[];
}

const DEFAULT_ITEMS: AnchorItem[] = [
  { label: "At a glance", href: "#at-a-glance" },
  { label: "Samples", href: "#samples" },
  { label: "Usage examples", href: "#usage-examples" },
  { label: "API Docs", href: "#api-docs" },
  { label: "Support", href: "#support" },
];

export default function AnchorRow({ items = DEFAULT_ITEMS }: AnchorRowProps) {
  return (
    <nav
      aria-label="Section anchors"
      style={{ fontFamily: "var(--wdh-font-brand)" }}
    >
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--wdh-space-2xl)",
          margin: 0,
          padding: 0,
          listStyle: "none",
        }}
      >
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              style={{
                fontSize: "var(--wdh-font-headline-md)",
                lineHeight: "34px",
                fontWeight: 600,
                color: "var(--wdh-text-primary)",
                textDecoration: "none",
                transition: "color 120ms ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--wdh-info)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--wdh-text-primary)";
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}