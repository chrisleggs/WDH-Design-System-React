import { useState } from "react";
import { Copy, Check } from "lucide-react";

/* CodeBlock — WDH theme code surface.
   Light fill (#F8F9FA) with subtle border. Mono family via --wdh-font-mono. */

interface CodeBlockProps {
  language?: string;
  code: string;
  filename?: string;
  showHeader?: boolean;
}

export default function CodeBlock({
  language = "bash",
  code,
  filename,
  showHeader = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="overflow-hidden"
      style={{
        border: "1px solid var(--wdh-border-subtle)",
        borderRadius: "var(--wdh-radius-3)",
        background: "var(--wdh-surface-code)",
      }}
    >
      {showHeader && (
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{
            background: "var(--wdh-surface-code-header)",
            borderBottom: "1px solid var(--wdh-border-subtle)",
          }}
        >
          <span
            className="font-brand uppercase"
            style={{
              fontSize: 11,
              letterSpacing: "0.08em",
              color: "var(--wdh-text-code)",
              lineHeight: "14px",
            }}
          >
            {filename || language}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
            style={{
              fontSize: 11,
              color: "var(--wdh-text-secondary)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            {copied ? (
              <Check className="w-3 h-3" strokeWidth={2} />
            ) : (
              <Copy className="w-3 h-3" strokeWidth={2} />
            )}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}
      <pre
        className="px-4 py-3 overflow-auto"
        style={{
          fontFamily: "var(--wdh-font-mono)",
          fontSize: 13,
          lineHeight: "21px",
          color: "var(--wdh-text-primary)",
          margin: 0,
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}