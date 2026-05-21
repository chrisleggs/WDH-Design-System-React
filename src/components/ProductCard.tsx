import type { ReactNode } from "react";
import Button from "./Button";

/* ProductCard — real source: components.fig · INSTANCE 7:3152
   Two-column tile: image left (~280px), content right.
   Composition (top to bottom):
     · Title  (24px / 34px / 600)
     · Description paragraph
     · Optional metadata block — bold-label + value rows
     · CTA — "Find out more" (blue action button) */

interface ProductCardProps {
  image?: string;
  imageNode?: ReactNode;
  imageAlt?: string;
  title: string;
  description: string;
  metadata?: Array<{ label: string; value: string }>;
  ctaLabel?: string;
  onCta?: () => void;
}

export default function ProductCard({
  image,
  imageNode,
  imageAlt = "",
  title,
  description,
  metadata = [],
  ctaLabel = "Find out more",
  onCta,
}: ProductCardProps) {
  return (
    <div
      style={{
        background: "var(--wdh-surface-card)",
        border: "1px solid var(--wdh-border-subtle)",
        borderRadius: "var(--wdh-radius-4)",
        /* Equal padding on all four sides — image now has matching
           top + left + bottom insets; the right side is the gap to content. */
        padding: "var(--wdh-space-xl)",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)]"
        style={{ gap: "var(--wdh-space-xl)", alignItems: "stretch" }}
      >
        {/* Image — equal inset on top / left / bottom via the wrapper padding */}
        <div
          className="relative md:aspect-square aspect-[4/3] overflow-hidden"
          style={{
            background: "var(--wdh-surface-muted)",
            borderRadius: "var(--wdh-radius-4)",
          }}
        >
          {image ? (
            <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
          ) : imageNode ? (
            imageNode
          ) : null}
        </div>

        {/* Content — stretches to image height; title pinned top, CTA pinned bottom */}
        <div
          className="flex flex-col h-full"
          style={{
            justifyContent: "space-between",
            gap: "var(--wdh-space-md)",
          }}
        >
          <div className="flex flex-col" style={{ gap: "var(--wdh-space-md)" }}>
            <h3
              className="font-brand"
              style={{
                fontSize: "var(--wdh-font-headline-md)",
                fontWeight: 600,
                lineHeight: "var(--wdh-lh-headline-md)",
                color: "var(--wdh-text-primary)",
                margin: 0,
              }}
            >
              {title}
            </h3>
            <p
              className="font-brand"
              style={{
                fontSize: "var(--wdh-font-body-lg)",
                lineHeight: "var(--wdh-lh-body-lg)",
                fontWeight: 400,
                color: "var(--wdh-text-primary)",
                margin: 0,
                maxWidth: "70ch",
              }}
            >
              {description}
            </p>
            {metadata.length > 0 && (
              <div
                className="flex flex-col"
                style={{ gap: 4, marginTop: "var(--wdh-space-sm)" }}
              >
                {metadata.map((row) => (
                  <div
                    key={row.label}
                    className="font-brand"
                    style={{
                      fontSize: "var(--wdh-font-body-lg)",
                      lineHeight: "var(--wdh-lh-body-lg)",
                      color: "var(--wdh-text-primary)",
                    }}
                  >
                    <strong style={{ fontWeight: 600 }}>{row.label}:</strong> {row.value}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <Button variant="action" size="md" onClick={onCta}>
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}