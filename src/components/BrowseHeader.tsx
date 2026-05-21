/* BrowseHeader — real source: components.fig · INSTANCE 7:3153
   "Browse & Product Category" composite.
   Composition:
     · Page heading (display-small 32 / 45 / 600)
     · Hairline divider
     · Result count (body-lg / 600)
     · Optional category section: H2 heading + description paragraph */

interface BrowseHeaderProps {
  pageHeading?: string;
  resultCount?: number;
  resultLabel?: string;
  category?: {
    title: string;
    description: string;
  };
}

export default function BrowseHeader({
  pageHeading = "Browse our API products",
  resultCount = 9,
  resultLabel = "results",
  category = {
    title: "Atmospheric forecasts",
    description:
      "Predictions of future weather conditions based on scientific measurements of the atmosphere and computer models that show how it is expected to change.",
  },
}: BrowseHeaderProps) {
  return (
    <section
      className="font-brand"
      style={{
        background: "var(--wdh-surface-page)",
        paddingTop: "var(--wdh-space-2xl)",
        paddingBottom: "var(--wdh-space-2xl)",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--wdh-font-brand)",
          fontSize: "var(--wdh-font-display-sm)",
          fontWeight: 600,
          lineHeight: "var(--wdh-lh-display-sm)",
          color: "var(--wdh-text-primary)",
          margin: 0,
        }}
      >
        {pageHeading}
      </h1>

      <hr
        style={{
          height: 1,
          border: "none",
          background: "var(--wdh-border-subtle)",
          margin: 0,
          marginTop: "var(--wdh-space-lg)",
        }}
      />

      {resultCount !== undefined && (
        <div
          style={{
            fontFamily: "var(--wdh-font-brand)",
            fontSize: "var(--wdh-font-body-lg)",
            lineHeight: "var(--wdh-lh-body-lg)",
            fontWeight: 600,
            color: "var(--wdh-text-primary)",
            marginTop: "var(--wdh-space-md)",
          }}
        >
          {resultCount} {resultLabel}
        </div>
      )}

      {category && (
        <div style={{ marginTop: "var(--wdh-space-2xl)" }}>
          <h2
            style={{
              fontFamily: "var(--wdh-font-brand)",
              fontSize: "var(--wdh-font-headline-md)",
              fontWeight: 600,
              lineHeight: "var(--wdh-lh-headline-md)",
              color: "var(--wdh-text-primary)",
              margin: 0,
            }}
          >
            {category.title}
          </h2>
          <p
            style={{
              fontFamily: "var(--wdh-font-brand)",
              fontSize: "var(--wdh-font-body-lg)",
              lineHeight: "var(--wdh-lh-body-lg)",
              fontWeight: 400,
              color: "var(--wdh-text-primary)",
              margin: 0,
              marginTop: "var(--wdh-space-sm)",
              maxWidth: "85ch",
            }}
          >
            {category.description}
          </p>
        </div>
      )}
    </section>
  );
}