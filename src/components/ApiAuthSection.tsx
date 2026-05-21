/* ApiAuthSection — real source: components.fig · within 7:3217
   "How to access" page: AUTHENTICATION + API SERVER.
   Composition:
     · H1 "How to access"
     · AUTHENTICATION sub-heading
     · API KEY label + danger callout "No API key applied"
     · Card: field column (label + input + show toggle) | helper text column
     · Set CTA (blue action)
     · API SERVER sub-heading
     · SELECTED: (brand-lime caption) + URL */

import { useState } from "react";
import Button from "./Button";

interface ApiAuthSectionProps {
  defaultApiKey?: string;
  apiServerUrl?: string;
  applied?: boolean;
}

export default function ApiAuthSection({
  defaultApiKey = "api-key",
  apiServerUrl = "https://data.hub.api.metoffice.gov.uk/atmospheric-models/1.0.0",
  applied = false,
}: ApiAuthSectionProps) {
  const [apiKey, setApiKey] = useState(defaultApiKey);
  const [show, setShow] = useState(false);
  const [keyApplied, setKeyApplied] = useState(applied);

  return (
    <section
      style={{
        fontFamily: "var(--wdh-font-brand)",
        color: "var(--wdh-text-primary)",
      }}
    >
      <h1
        style={{
          fontSize: "var(--wdh-font-display-lg)",
          lineHeight: "67px",
          fontWeight: 600,
          margin: 0,
        }}
      >
        How to access
      </h1>

      {/* AUTHENTICATION */}
      <div style={{ marginTop: "var(--wdh-space-2xl)" }}>
        <h2
          style={{
            fontSize: "var(--wdh-font-display-sm)",
            lineHeight: "45px",
            fontWeight: 600,
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          Authentication
        </h2>

        <div
          style={{
            fontSize: "var(--wdh-font-headline-md)",
            lineHeight: "34px",
            fontWeight: 600,
            marginTop: "var(--wdh-space-lg)",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          API Key
        </div>

        {!keyApplied && (
          <div
            role="status"
            style={{
              fontSize: "var(--wdh-font-body-lg)",
              lineHeight: "24px",
              color: "var(--wdh-danger-text-strong)",
              fontWeight: 500,
              marginTop: "var(--wdh-space-sm)",
            }}
          >
            No API key applied
          </div>
        )}

        {/* Field + helper card */}
        <div
          className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
          style={{
            gap: "var(--wdh-space-xl)",
            background: "var(--wdh-surface-card)",
            border: "1px solid var(--wdh-border-subtle)",
            borderRadius: "var(--wdh-radius-4)",
            padding: "var(--wdh-space-lg)",
            marginTop: "var(--wdh-space-lg)",
          }}
        >
          <div>
            <label
              htmlFor="wdh-api-key"
              style={{
                display: "block",
                fontSize: "var(--wdh-font-body-md)",
                fontWeight: 600,
                marginBottom: 6,
                color: "var(--wdh-text-primary)",
              }}
            >
              Api Key
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid var(--wdh-border-subtle)",
                borderRadius: "var(--wdh-radius-2, 2px)",
                background: "#FFFFFF",
                overflow: "hidden",
              }}
            >
              <input
                id="wdh-api-key"
                type={show ? "text" : "password"}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "10px 12px",
                  fontFamily: "var(--wdh-font-mono)",
                  fontSize: "var(--wdh-font-mono-md)",
                  color: "var(--wdh-text-primary)",
                  background: "transparent",
                }}
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                style={{
                  background: "transparent",
                  border: "none",
                  borderLeft: "1px solid var(--wdh-border-subtle)",
                  padding: "10px 14px",
                  fontSize: "var(--wdh-font-body-md)",
                  fontFamily: "var(--wdh-font-brand)",
                  color: "var(--wdh-text-secondary)",
                  cursor: "pointer",
                }}
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "var(--wdh-font-body-md)",
                fontWeight: 600,
                marginBottom: 6,
                color: "var(--wdh-text-primary)",
              }}
            >
              API Key
            </div>
            <p
              style={{
                fontSize: "var(--wdh-font-body-lg)",
                lineHeight: "24px",
                color: "var(--wdh-text-secondary)",
                margin: 0,
              }}
            >
              The API Key generated with your Subscription in Weather DataHub, this must be set as <code style={{ fontFamily: "var(--wdh-font-mono)", fontSize: "var(--wdh-font-mono-sm)" }}>'apikey'</code> in your header.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "var(--wdh-space-lg)" }}>
          <Button
            variant="action"
            size="md"
            onClick={() => setKeyApplied(true)}
          >
            Set
          </Button>
        </div>
      </div>

      {/* API SERVER */}
      <div style={{ marginTop: "var(--wdh-space-2xl)" }}>
        <h2
          style={{
            fontSize: "var(--wdh-font-display-sm)",
            lineHeight: "45px",
            fontWeight: 600,
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          API Server
        </h2>

        <div
          style={{
            fontSize: "var(--wdh-font-headline-md)",
            lineHeight: "34px",
            fontWeight: 600,
            color: "var(--wdh-info)",
            marginTop: "var(--wdh-space-lg)",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          Selected:
        </div>
        <div
          style={{
            fontFamily: "var(--wdh-font-mono)",
            fontSize: "var(--wdh-font-mono-md)",
            color: "var(--wdh-text-primary)",
            marginTop: 4,
            wordBreak: "break-all",
          }}
        >
          {apiServerUrl}
        </div>
      </div>
    </section>
  );
}