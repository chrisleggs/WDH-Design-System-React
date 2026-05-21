/* ServiceIntroduction — wdh-service-introduction-comp
   Real source: components.fig · INSTANCE 7:3154
   Pattern: marketing hero introducing a service / product family.
   Composition:
     · Display heading (uses --wdh-text-hero-heading-*)
     · Tagline paragraph (body-large)
     · Body paragraph (body-large, longer description)
     · Closing hairline divider (optional) */

interface ServiceIntroductionProps {
  heading?: string;
  tagline?: string;
  body?: string;
  showDivider?: boolean;
}

export default function ServiceIntroduction({
  heading = "Welcome to Weather Data Hub",
  tagline = "Find the right data for you from our high-quality weather API products.",
  body = "Choose from a selection of atmospheric and site-specific data models, weather observations and map images. You can use them to create applications, conduct research or simply stay informed about the weather conditions in your or any location worldwide.",
  showDivider = true,
}: ServiceIntroductionProps) {
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
          fontFamily: "var(--wdh-text-hero-heading-family)",
          fontSize: "var(--wdh-text-hero-heading-size)",
          fontWeight: 600,
          lineHeight: "var(--wdh-text-hero-heading-lh)",
          color: "var(--wdh-text-hero-heading-color)",
          letterSpacing: "var(--wdh-text-hero-heading-tracking)",
          margin: 0,
        }}
      >
        {heading}
      </h1>

      <p
        style={{
          fontFamily: "var(--wdh-font-brand)",
          fontSize: "var(--wdh-font-body-lg)",
          lineHeight: "var(--wdh-lh-body-lg)",
          fontWeight: 400,
          color: "var(--wdh-text-primary)",
          margin: 0,
          marginTop: "var(--wdh-space-xl)",
          maxWidth: "70ch",
        }}
      >
        {tagline}
      </p>

      <p
        style={{
          fontFamily: "var(--wdh-font-brand)",
          fontSize: "var(--wdh-font-body-lg)",
          lineHeight: "var(--wdh-lh-body-lg)",
          fontWeight: 400,
          color: "var(--wdh-text-primary)",
          margin: 0,
          marginTop: "var(--wdh-space-md)",
          maxWidth: "70ch",
        }}
      >
        {body}
      </p>

      {showDivider && (
        <hr
          style={{
            height: 1,
            border: "none",
            background: "var(--wdh-border-subtle)",
            marginTop: "var(--wdh-space-2xl)",
            marginBottom: 0,
          }}
        />
      )}
    </section>
  );
}