/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          "header-top": "var(--color-surface-header-top)",
          "header-bottom": "var(--color-surface-header-bottom)",
          "action-secondary": "var(--color-surface-action-secondary)",
          page: "var(--color-surface-page)",
          card: "var(--color-surface-card)",
          "card-muted": "var(--color-surface-card-muted)",
        },
        text: {
          primary: "var(--color-text-primary)",
          accent: "var(--color-text-accent)",
          inverse: "var(--color-text-inverse)",
          body: "var(--color-text-body)",
          muted: "var(--color-text-muted)",
          faint: "var(--color-text-faint)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
        accent: {
          DEFAULT: "var(--color-text-accent)",
          soft: "var(--color-accent-soft)",
        },
      },
      fontFamily: {
        brand: ["Inter", "FS Emeric Web", "system-ui", "sans-serif"],
      },
      fontSize: {
        micro: "var(--font-size-micro)",
        small: "var(--font-size-small)",
        body: "var(--font-size-body)",
        label: "var(--font-size-label)",
        nav: "var(--font-size-nav)",
        h3: "var(--font-size-h3)",
        h2: "var(--font-size-h2)",
        h1: "var(--font-size-h1)",
        display: "var(--font-size-display)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
      },
      spacing: {
        1: "var(--spacing-1)",
        2: "var(--spacing-2)",
        3: "var(--spacing-3)",
        4: "var(--spacing-4)",
        5: "var(--spacing-5)",
        6: "var(--spacing-6)",
        8: "var(--spacing-8)",
        10: "var(--spacing-10)",
        12: "var(--spacing-12)",
        16: "var(--spacing-16)",
        "header-top": "var(--size-header-height-top)",
        "header-bottom": "var(--size-header-height-bottom)",
        "header-total": "var(--size-header-height-total)",
      },
    },
  },
  plugins: [],
};
