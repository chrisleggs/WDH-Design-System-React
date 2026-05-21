import { useState } from "react";
import type { CSSProperties } from "react";

/* Header — faithful recreation of `wdh-header-new`.
   All critical structure inlined so the component survives any renderer
   (Figma export, PDF capture, static snapshot) that may not fully apply
   Tailwind utility classes or resolve CSS custom properties.
   Token values are baked in as literals — sourced from /design-system/tokens.json. */

// Token values, inlined as literals (sourced from tokens.json)
const TOKENS = {
  surfaceHeaderTop: "#1D1D1D",
  surfaceHeaderBottom: "#2A2A2A",
  surfaceActionSecondary: "#E0E0E0",
  textPrimary: "#F8F9FA",
  textAccent: "#B9DC0C",
  textInverse: "#1D1D1D",
  fontBrand: '"FS Emeric Web", "FS Emeric", -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
  fontSizeLabel: 16,
  fontSizeNav: 21,
  radiusSm: 5,
  heightTop: 80,
  heightBottom: 58,
  buttonW: 143,
  buttonH: 41,
  menuGapDesktop: 129,
};

// Real source: components.fig · Header group (7:3155)
const NAV_ITEMS = ["Home", "Documentation", "Parameters", "Pricing & Plans", "Support"];

const headerWrap: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  background: TOKENS.surfaceHeaderTop,
  flexShrink: 0,
};

const topTier: CSSProperties = {
  width: "100%",
  height: TOKENS.heightTop,
  minHeight: TOKENS.heightTop,
  maxHeight: TOKENS.heightTop,
  background: TOKENS.surfaceHeaderTop,
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  boxSizing: "border-box",
  padding: "0 76px",
};

const bottomTier: CSSProperties = {
  width: "100%",
  height: TOKENS.heightBottom,
  minHeight: TOKENS.heightBottom,
  maxHeight: TOKENS.heightBottom,
  background: TOKENS.surfaceHeaderBottom,
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  boxSizing: "border-box",
  padding: "0 0 0 175px",
};

const topInner: CSSProperties = {
  width: "100%",
  maxWidth: 1512,
  margin: "0 auto",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const navList: CSSProperties = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  alignItems: "center",
  gap: TOKENS.menuGapDesktop,
  height: "100%",
};

const navLinkStyle = (active: boolean): CSSProperties => ({
  fontFamily: TOKENS.fontBrand,
  fontSize: TOKENS.fontSizeNav,
  fontWeight: 400,
  lineHeight: 1,
  color: active ? TOKENS.textAccent : TOKENS.textPrimary,
  textDecoration: "none",
  cursor: "pointer",
  background: "transparent",
  border: "none",
  padding: 0,
  transition: "color 120ms ease",
});

const loginButton: CSSProperties = {
  width: TOKENS.buttonW,
  height: TOKENS.buttonH,
  background: TOKENS.surfaceActionSecondary,
  color: TOKENS.textInverse,
  border: "none",
  borderRadius: TOKENS.radiusSm,
  fontFamily: TOKENS.fontBrand,
  fontSize: TOKENS.fontSizeLabel,
  fontWeight: 400,
  lineHeight: 1,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  flexShrink: 0,
};

const logoWrap: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  userSelect: "none",
  textDecoration: "none",
  width: 148,
  height: 20,
  flexShrink: 0,
};

/* Met Office wordmark — exported verbatim from components.fig
   FRAME "Image mo-logo" (I7:3156;40001194:10664;40001194:10486)
   Intrinsic size 148 × 20px. White wordmark + lime (#B9DC0C) accent waves. */
function LogoMark() {
  return (
    <svg
      width="148"
      height="20"
      viewBox="0 0 148 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Met Office"
      role="img"
      style={{ display: "block", flexShrink: 0 }}
    >
      <g clipPath="url(#mo-clip0)">
        <g clipPath="url(#mo-clip1)">
          <path
            d="M142.629 7.89212C143.086 7.88841 143.528 8.05831 143.865 8.36755C144.34 8.84298 144.499 9.60366 144.499 10.713V10.9983H140.062C140.062 9.88892 140.347 9.00145 140.822 8.52603C141.298 8.0506 141.773 7.89212 142.597 7.89212M146.02 6.87787C145.574 6.40571 145.032 6.03423 144.431 5.78826C143.83 5.5423 143.183 5.42751 142.534 5.45159C138.762 5.45159 136.1 8.27246 136.1 12.3612C136.1 16.4498 138.92 19.9046 142.692 19.9046C145.45 19.9046 147.763 18.1931 147.763 18.1931L146.718 16.0061C145.763 16.774 144.583 17.2081 143.358 17.2422C142.407 17.2422 141.646 16.7668 141.012 16.2914C140.378 15.8159 140.062 14.5798 140.062 13.3437H147.732C147.795 13.2803 148.271 9.09654 146.02 6.84618M64.3732 7.86042C64.8306 7.85672 65.2723 8.02662 65.6093 8.33585C66.0848 8.81128 66.2432 9.57197 66.2432 10.6813V10.9666H61.8059C61.8059 9.85723 62.0912 8.96976 62.5666 8.49433C63.042 8.0189 63.5808 7.86042 64.3415 7.86042M67.7646 6.84618C67.3185 6.37401 66.7766 6.00253 66.1754 5.75657C65.5741 5.5106 64.9273 5.39582 64.2781 5.41989C60.5064 5.41989 57.844 8.24077 57.844 12.3295C57.844 16.4181 60.6649 19.8729 64.4366 19.8729C67.1941 19.8729 69.4445 18.1614 69.4445 18.1614L68.3985 15.9744C67.4437 16.7423 66.2637 17.1764 65.0388 17.2105C64.088 17.2105 63.3273 16.7351 62.6934 16.2597C62.0595 15.7842 61.7425 14.5481 61.7425 13.312H69.4128C69.5396 13.2486 70.015 9.06484 67.7646 6.81448M92.7722 3.04275C96.2587 3.04275 97.368 6.6877 97.368 9.63536C97.368 11.3469 97.0193 16.7034 92.7722 16.7034C88.525 16.7034 88.0813 11.4103 88.0813 9.69875C88.0813 6.6877 89.3808 3.10614 92.8039 3.10614M92.8039 0.0950858C87.9228 0.0950858 84.1511 4.21547 84.1511 9.63536C84.1511 15.5941 87.796 19.9046 92.8039 19.9046C97.8117 19.9046 101.393 15.6575 101.393 9.66705C101.457 4.24716 97.685 0.126781 92.7722 0.126781M132.645 16.9253C130.458 16.9253 129 15.0869 129 12.3928C129 9.69875 130.902 8.14568 132.645 8.14568C133.461 8.17725 134.26 8.38256 134.99 8.74789L134.23 5.61006C133.611 5.43105 132.972 5.33512 132.328 5.3248C127.795 5.3248 125.26 8.96976 125.26 12.5196C125.26 14.9919 126.781 19.7145 132.169 19.7145C133.478 19.6612 134.743 19.2321 135.814 18.4783L135.054 16.1329C135.054 16.2597 134.103 16.957 132.645 16.957M77.2098 17.4958C76.2589 17.4958 75.7835 16.3865 75.7835 14.5481V8.17738H78.9213L78.2874 5.86362H75.8152V2.72579H72.1703V5.86362H70.1735L70.6489 8.17738H72.1703V15.3722C72.1703 18.3199 73.4064 19.968 76.1322 19.968C77.3573 19.96 78.5591 19.6322 79.6186 19.0172L78.9847 16.8302C78.9847 16.7668 78.2241 17.4324 77.2732 17.4324M46.1484 13.312C46.1484 13.0268 42.3767 0 42.3767 0H37.6224L35.7207 19.6194H39.3657L40.475 5.92701H40.6018L44.4369 19.6194H47.9234L51.6951 5.92701H51.8853L52.9312 19.6194H56.5762L54.8646 0H49.9836C49.9202 0 46.2752 13.0268 46.0851 13.312M112.55 5.76854H107.827V4.6592C107.827 3.13783 108.937 2.75749 109.254 2.75749C109.513 2.69956 109.782 2.69498 110.044 2.74401C110.305 2.79305 110.554 2.89468 110.775 3.04275L110.141 0.380343C109.643 0.256541 109.133 0.192697 108.62 0.190172C106.623 0.190172 104.373 1.77493 104.373 5.07124V5.70515H102.344L102.82 8.0189H104.341V19.3341H107.827V8.0506H112.36V19.3658H116.005V8.0506H119.777V19.3658H123.422V5.73684H116.1V4.62751C116.1 3.10614 117.146 2.72579 117.526 2.72579C118.071 2.61587 118.638 2.71787 119.111 3.01105L118.477 0.348648C117.958 0.221615 117.426 0.157761 116.892 0.158476C114.895 0.158476 112.645 1.74324 112.645 5.03955V5.67345H112.582L112.55 5.76854Z"
            fill="white"
          />
          <path
            d="M6.05362 6.71914C4.05682 7.19457 1.99663 6.52897 -0.0318673 5.89506V4.65895C1.00706 4.91336 2.08939 4.93501 3.13766 4.72234C7.38482 3.77148 10.6811 -1.99706 16.9251 0.760432C23.1691 3.51792 29.5398 0.982299 30.3639 0.697041V3.51792C27.7015 4.12013 23.5177 4.46878 19.6826 2.82062C13.5654 -0.000254482 10.2057 5.83167 5.99023 6.71914M11.3467 10.4275C15.5305 9.47663 18.8902 3.70809 25.0708 6.46558C26.7535 7.1613 28.5448 7.55815 30.3639 7.6383V5.51472C27.9551 5.73659 25.0074 5.6415 22.2816 4.40539C16.0376 1.67959 12.7413 7.41644 8.55755 8.39899C5.67328 9.0329 2.94749 7.51152 -0.0635626 6.68745V8.27221C4.1836 8.46238 7.60669 11.2199 11.315 10.3958M15.689 14.1041C19.8728 13.1533 23.2325 7.38474 29.4764 10.1105C29.7401 10.2513 30.0159 10.3679 30.3005 10.4592V9.09629C29.0181 8.93959 27.7674 8.58683 26.5922 8.05034C20.4116 5.32455 17.0519 11.1248 12.8681 12.0439C8.68433 12.9631 5.03937 9.50833 0.0632185 10.0471H-0.126953V12.9948C0.809061 12.4938 1.83012 12.1714 2.8841 12.0439C7.82856 11.4417 11.6003 14.9916 15.689 14.1041ZM17.3371 15.4036C13.2168 16.3545 9.50841 12.8046 4.46886 13.3435C2.8841 13.5336 1.33103 14.2943 -0.126953 15.2452V19.6191C1.04577 18.2562 3.58139 15.9742 7.25804 15.6572C12.2659 15.2452 15.9742 18.6683 20.1263 17.7174C23.3592 17.0201 26.2435 13.2484 30.3322 12.9948V11.0931C24.627 9.15968 21.299 14.5162 17.3688 15.4036"
            fill="#B9DC0C"
          />
        </g>
      </g>
      <defs>
        <clipPath id="mo-clip0">
          <rect width="147.827" height="20" fill="white" />
        </clipPath>
        <clipPath id="mo-clip1">
          <rect width="147.827" height="19.9997" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const HOVER_LIME = new Set(["Documentation", "Parameters", "Pricing & Plans"]);

export default function Header() {
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header style={headerWrap}>
      {/* ===== Top tier — logo + Login/Register (80px, #1D1D1D) ===== */}
      <div style={topTier}>
        <div style={topInner}>
          <a href="/" style={logoWrap} aria-label="Met Office home">
            <LogoMark />
          </a>

          <button type="button" style={loginButton}>
            Login/Register
          </button>
        </div>
      </div>

      {/* ===== Lower tier — primary nav (58px, #2A2A2A) ===== */}
      <nav style={bottomTier} aria-label="Primary">
        <ul style={navList}>
          {NAV_ITEMS.map((item) => {
            const isActive = active === item;
            const isHoverable = HOVER_LIME.has(item);
            const isHovered = isHoverable && hovered === item;
            const showAccent = isActive || isHovered;
            return (
              <li key={item} style={{ height: "100%", display: "flex", alignItems: "center" }}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(item);
                  }}
                  onMouseEnter={() => isHoverable && setHovered(item)}
                  onMouseLeave={() => isHoverable && setHovered(null)}
                  style={navLinkStyle(showAccent)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}