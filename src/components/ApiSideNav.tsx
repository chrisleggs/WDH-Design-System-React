/* ApiSideNav — real source: components.fig · INSTANCE 7:3295
   Dark vertical nav used on API documentation pages.
   Composition:
     · Item list (no section heading in source)
     · Active row: lime text + 3px lime border-left
     · Footer support block (separator + "Need support?" + contact line) */

export interface ApiNavItem {
  label: string;
  active?: boolean;
  href?: string;
}

interface ApiSideNavProps {
  items?: ApiNavItem[];
  supportLine?: string;
  supportContact?: string;
}

const DEFAULT_ITEMS: ApiNavItem[] = [
  { label: "Atmospheric Model API", active: true },
  { label: "How to access" },
  { label: "List all available orders" },
  { label: "List the available files in an order" },
  { label: "Provide the details of a specific file" },
  { label: "Get the data for a specific file" },
  { label: "List all runs" },
  { label: "List all runs for specific model" },
];

export default function ApiSideNav({
  items = DEFAULT_ITEMS,
  supportLine = "Need support?",
  supportContact = "Contact us enquiries@metoffice.gov.uk",
}: ApiSideNavProps) {
  return (
    <nav
      style={{
        background: "var(--wdh-surface-header-bottom)",
        padding: "32px 0 28px 0",
        minWidth: 260,
        fontFamily: "var(--wdh-font-brand)",
      }}
      aria-label="API documentation"
    >
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href || "#"}
              onClick={(e) => {
                if (!item.href) e.preventDefault();
              }}
              style={{
                display: "block",
                fontSize: 19,
                lineHeight: "24px",
                padding: "10px 24px",
                paddingLeft: item.active ? 21 : 24,
                color: item.active
                  ? "var(--wdh-brand)"
                  : "var(--wdh-text-on-dark)",
                fontWeight: item.active ? 500 : 400,
                borderLeft: item.active
                  ? "3px solid var(--wdh-brand)"
                  : "3px solid transparent",
                textDecoration: "none",
                transition: "color 120ms ease, background 120ms ease",
              }}
              onMouseEnter={(e) => {
                if (!item.active) {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--wdh-text-on-dark)";
                }
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div
        style={{
          marginTop: 28,
          marginLeft: 24,
          marginRight: 24,
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            fontSize: 19,
            color: "var(--wdh-text-on-dark)",
            fontWeight: 600,
            marginBottom: 6,
            lineHeight: "24px",
          }}
        >
          {supportLine}
        </div>
        <div
          style={{
            fontSize: 19,
            color: "rgba(248,249,250,0.75)",
            lineHeight: "24px",
          }}
        >
          {supportContact}
        </div>
      </div>
    </nav>
  );
}