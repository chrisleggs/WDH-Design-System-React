/* ApiEndpoint — real source: components.fig · within 7:3217
   Single endpoint documentation surface.
   Composition:
     · Header row — H1 title + right-aligned auth pill
     · Method tag + path + description
     · REQUEST sub-heading
       - QUERY-STRING PARAMETERS table
       - REQUEST HEADERS table
       - API Server / Authentication footnotes
       - Fill Example / Clear / Try actions
     · RESPONSE sub-heading
       - HTTP status code pill row (200, 400, …) with selected state
       - Result description + content-type
       - EXAMPLE / SCHEMA tabs
       - JSON example with Copy CTA */

import { useState } from "react";
import { Lock } from "lucide-react";
import Button from "./Button";

export interface ApiParam {
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  allowed?: string[];
  placeholder?: string;
  description: string;
}

interface ApiEndpointProps {
  title?: string;
  authPill?: string;
  method?: "get" | "post" | "put" | "patch" | "delete";
  path?: string;
  description?: string;
  queryParams?: ApiParam[];
  headers?: ApiParam[];
  apiServer?: string;
  authNote?: string;
  responseCodes?: number[];
  responseDescription?: string;
  responseContentType?: string;
  exampleJson?: string;
}

const DEFAULT_QUERY: ApiParam[] = [
  {
    name: "detail",
    type: "string · enum",
    allowed: ["MINIMAL", "FULL"],
    description:
      "Optional level of detail in the response. Valid options are MINIMAL or FULL. Default is FULL.",
  },
  {
    name: "dataSpec",
    type: "string · enum",
    defaultValue: "1.1.0",
    allowed: ["1.1.0"],
    description:
      "The data specification to use, only version 1.1.0 is currently supported.",
  },
];

const DEFAULT_HEADERS: ApiParam[] = [
  {
    name: "Accept",
    type: "string",
    required: true,
    placeholder: "application/json",
    description: "application/json required here. Examples: application/json",
  },
];

const DEFAULT_RESPONSES = [200, 400, 401, 403, 404, 406, 429, 500, 503];

const DEFAULT_JSON = `{
  "orders": [
    {
      "modelId": "mo-global",
      "orderId": "myorder",
      "name": "my_order",
      "description": "Example CDA order created by Fred",
      "format": "GRIB2",
      "regions": [
        {
          "name": "Europe",
          "extent": {
            "x": { "label": "longitude", "lowerBound": "-14.0000", "upperBound": "37.0000", "uomLabel": "degree" },
            "y": { "label": "latitude", "lowerBound": "33.0000", "upperBound": "68.0000", "uomLabel": "degree" }
          },
          "requiredLatestRuns": ["00"],
          "timesteps": ["0", "3", "6", "9", "12", "15", "18", "21", "24"]
        }
      ]
    }
  ]
}`;

function statusTone(code: number): { bg: string; fg: string; border: string } {
  if (code < 300)
    return {
      bg: "var(--wdh-success-bg)",
      fg: "var(--wdh-success-text)",
      border: "var(--wdh-success-border)",
    };
  if (code < 500)
    return {
      bg: "var(--wdh-warning-bg)",
      fg: "var(--wdh-warning-text)",
      border: "var(--wdh-warning-border)",
    };
  return {
    bg: "var(--wdh-danger-bg)",
    fg: "var(--wdh-danger-text)",
    border: "var(--wdh-danger-border)",
  };
}

function ParamRow({ p }: { p: ApiParam }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)]"
      style={{
        gap: "var(--wdh-space-xl)",
        padding: "var(--wdh-space-lg) 0",
        borderTop: "1px solid var(--wdh-border-subtle)",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--wdh-font-mono)",
            fontSize: "var(--wdh-font-mono-md)",
            color: "var(--wdh-text-primary)",
            fontWeight: 600,
          }}
        >
          {p.name}
          {p.required && (
            <span style={{ color: "var(--wdh-danger-text-strong)", marginLeft: 4 }}>*</span>
          )}
        </div>
        <div
          style={{
            fontSize: "var(--wdh-font-body-sm)",
            color: "var(--wdh-text-secondary)",
            marginTop: 2,
          }}
        >
          {p.type}
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder={p.placeholder}
          defaultValue={p.placeholder}
          style={{
            width: "100%",
            border: "1px solid var(--wdh-border-subtle)",
            borderRadius: 2,
            padding: "8px 10px",
            fontFamily: "var(--wdh-font-mono)",
            fontSize: "var(--wdh-font-mono-md)",
            background: "#FFFFFF",
            color: "var(--wdh-text-primary)",
            outline: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            marginTop: 6,
            fontSize: "var(--wdh-font-body-md)",
            color: "var(--wdh-text-secondary)",
          }}
        >
          {p.defaultValue && (
            <span>
              <strong style={{ color: "var(--wdh-text-primary)", fontWeight: 600 }}>Default:</strong>{" "}
              <code style={{ fontFamily: "var(--wdh-font-mono)", fontSize: "var(--wdh-font-mono-sm)" }}>{p.defaultValue}</code>
            </span>
          )}
          {p.allowed && p.allowed.length > 0 && (
            <span>
              <strong style={{ color: "var(--wdh-text-primary)", fontWeight: 600 }}>Allowed:</strong>{" "}
              <code style={{ fontFamily: "var(--wdh-font-mono)", fontSize: "var(--wdh-font-mono-sm)" }}>{p.allowed.join(" | ")}</code>
            </span>
          )}
        </div>
        <p
          style={{
            fontSize: "var(--wdh-font-body-lg)",
            lineHeight: "24px",
            color: "var(--wdh-text-secondary)",
            margin: 0,
            marginTop: 6,
          }}
        >
          {p.description}
        </p>
      </div>
    </div>
  );
}

export default function ApiEndpoint({
  title = "List all available orders",
  authPill = "API Key (apikey)",
  method = "get",
  path = "/orders",
  description = "This gets an object detailing the available orders that have been configured using the Atmospheric Weather Data Configuration Tool for your Organsation.",
  queryParams = DEFAULT_QUERY,
  headers = DEFAULT_HEADERS,
  apiServer = "https://data.hub.api.metoffice.gov.uk/atmospheric-models/1.0.0",
  authNote = "Required (None Applied)",
  responseCodes = DEFAULT_RESPONSES,
  responseDescription = "All available orders are returned",
  responseContentType = "application/json",
  exampleJson = DEFAULT_JSON,
}: ApiEndpointProps) {
  const [selectedCode, setSelectedCode] = useState(responseCodes[0]);
  const [tab, setTab] = useState<"example" | "schema">("example");

  const methodColor = ({
    get: "var(--wdh-method-get)",
    post: "var(--wdh-method-post)",
    put: "var(--wdh-method-put)",
    patch: "var(--wdh-method-put)",
    delete: "var(--wdh-method-delete)",
  } as const)[method];

  return (
    <article
      style={{
        fontFamily: "var(--wdh-font-brand)",
        color: "var(--wdh-text-primary)",
      }}
    >
      {/* Title row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--wdh-space-lg)",
          flexWrap: "wrap",
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
          {title}
        </h1>
        {authPill && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "var(--wdh-surface-muted)",
              border: "1px solid var(--wdh-border-subtle)",
              borderRadius: 999,
              padding: "6px 12px",
              fontSize: "var(--wdh-font-body-md)",
              color: "var(--wdh-text-primary)",
              fontWeight: 500,
              marginTop: 18,
            }}
          >
            <Lock aria-hidden="true" size={14} strokeWidth={2} style={{ color: "var(--wdh-text-secondary)", flexShrink: 0 }} />
            {authPill}
          </span>
        )}
      </div>

      {/* Method + path */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginTop: "var(--wdh-space-md)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--wdh-font-mono)",
            fontSize: "var(--wdh-font-mono-md)",
            color: methodColor,
            fontWeight: 700,
            textTransform: "lowercase",
          }}
        >
          {method}
        </span>
        <span
          style={{
            fontFamily: "var(--wdh-font-mono)",
            fontSize: "var(--wdh-font-mono-md)",
            color: "var(--wdh-text-primary)",
            fontWeight: 500,
          }}
        >
          {path}
        </span>
      </div>

      <p
        style={{
          fontSize: "var(--wdh-font-body-lg)",
          lineHeight: "24px",
          color: "var(--wdh-text-primary)",
          marginTop: "var(--wdh-space-md)",
          marginBottom: 0,
          maxWidth: 800,
        }}
      >
        {description}
      </p>

      {/* REQUEST */}
      <h2
        style={{
          fontSize: "var(--wdh-font-display-sm)",
          lineHeight: "45px",
          fontWeight: 600,
          margin: 0,
          marginTop: "var(--wdh-space-2xl)",
          textTransform: "uppercase",
          letterSpacing: "0.02em",
        }}
      >
        Request
      </h2>

      <div style={{ marginTop: "var(--wdh-space-lg)" }}>
        <div
          style={{
            fontSize: "var(--wdh-font-headline-md)",
            lineHeight: "34px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          Query-string parameters
        </div>
        <div>
          {queryParams.map((p) => (
            <ParamRow key={p.name} p={p} />
          ))}
        </div>
      </div>

      <div style={{ marginTop: "var(--wdh-space-xl)" }}>
        <div
          style={{
            fontSize: "var(--wdh-font-headline-md)",
            lineHeight: "34px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          Request headers
        </div>
        <div>
          {headers.map((p) => (
            <ParamRow key={p.name} p={p} />
          ))}
        </div>
      </div>

      {/* Server + auth footnote */}
      <div
        style={{
          marginTop: "var(--wdh-space-lg)",
          padding: "var(--wdh-space-md)",
          background: "var(--wdh-surface-muted)",
          borderRadius: "var(--wdh-radius-4)",
          fontSize: "var(--wdh-font-body-md)",
          color: "var(--wdh-text-secondary)",
          lineHeight: "22px",
        }}
      >
        <div>
          <strong style={{ color: "var(--wdh-text-primary)", fontWeight: 600 }}>API Server:</strong>{" "}
          <code style={{ fontFamily: "var(--wdh-font-mono)", fontSize: "var(--wdh-font-mono-sm)" }}>{apiServer}</code>
        </div>
        <div>
          <strong style={{ color: "var(--wdh-text-primary)", fontWeight: 600 }}>Authentication:</strong> {authNote}
        </div>
      </div>

      <div
        style={{
          marginTop: "var(--wdh-space-lg)",
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        <Button variant="ghost" size="md">Fill Example</Button>
        <Button variant="ghost" size="md">Clear</Button>
        <Button variant="action" size="md">Try</Button>
      </div>

      {/* RESPONSE */}
      <h2
        style={{
          fontSize: "var(--wdh-font-display-sm)",
          lineHeight: "45px",
          fontWeight: 600,
          margin: 0,
          marginTop: "var(--wdh-space-2xl)",
          textTransform: "uppercase",
          letterSpacing: "0.02em",
        }}
      >
        Response
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          marginTop: "var(--wdh-space-md)",
        }}
      >
        {responseCodes.map((c) => {
          const isActive = c === selectedCode;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedCode(c)}
              style={{
                fontFamily: "var(--wdh-font-mono)",
                fontSize: "var(--wdh-font-mono-md)",
                padding: "4px 10px",
                borderRadius: 4,
                border: `1px solid ${
                  isActive ? "var(--wdh-info)" : "var(--wdh-border-subtle)"
                }`,
                background: isActive
                  ? "var(--wdh-info)"
                  : "var(--wdh-surface-muted)",
                color: isActive ? "#FFFFFF" : "var(--wdh-text-secondary)",
                cursor: "pointer",
                fontWeight: isActive ? 700 : 500,
                transition: "all 120ms ease",
              }}
            >
              {c}
            </button>
          );
        })}
      </div>

      <p
        style={{
          fontSize: "var(--wdh-font-body-lg)",
          lineHeight: "24px",
          color: "var(--wdh-text-primary)",
          marginTop: "var(--wdh-space-md)",
          marginBottom: 0,
        }}
      >
        {responseDescription}
      </p>

      <div
        style={{
          fontFamily: "var(--wdh-font-mono)",
          fontSize: "var(--wdh-font-mono-md)",
          color: "var(--wdh-text-secondary)",
          marginTop: 4,
        }}
      >
        {responseContentType}
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 24,
          marginTop: "var(--wdh-space-lg)",
          borderBottom: "1px solid var(--wdh-border-subtle)",
        }}
      >
        {(["example", "schema"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            style={{
              background: "transparent",
              border: "none",
              padding: "8px 0",
              fontSize: "var(--wdh-font-headline-md)",
              fontWeight: tab === t ? 600 : 500,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              color: tab === t ? "var(--wdh-text-primary)" : "var(--wdh-text-secondary)",
              borderBottom:
                tab === t
                  ? "2px solid var(--wdh-info)"
                  : "2px solid transparent",
              cursor: "pointer",
              marginBottom: -1,
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <pre
        style={{
          marginTop: "var(--wdh-space-md)",
          background: "var(--wdh-surface-muted)",
          border: "1px solid var(--wdh-border-subtle)",
          borderRadius: "var(--wdh-radius-4)",
          padding: "var(--wdh-space-lg)",
          fontFamily: "var(--wdh-font-mono)",
          fontSize: "var(--wdh-font-mono-sm)",
          lineHeight: "20px",
          color: "var(--wdh-text-primary)",
          overflow: "auto",
          maxHeight: 360,
        }}
      >
        {tab === "example"
          ? exampleJson
          : "// Schema view — JSON Schema definition would render here."}
      </pre>

      <div style={{ marginTop: "var(--wdh-space-md)" }}>
        <Button
          variant="action"
          size="md"
          onClick={() => {
            if (typeof navigator !== "undefined" && navigator.clipboard) {
              navigator.clipboard.writeText(exampleJson).catch(() => {});
            }
          }}
        >
          Copy
        </Button>
      </div>
    </article>
  );
}