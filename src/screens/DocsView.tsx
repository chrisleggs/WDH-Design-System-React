import { useState, useEffect } from "react";
import type { ReactNode, CSSProperties } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Check,
  X,
  ArrowLeft,
  ArrowRight,
  CircleDot,
  AlertTriangle,
  Bell,
  User,
  Cloud,
  Zap,
  TrendingUp,
  Globe2,
  Download,
  Code2,
  Database,
  FileJson,
  ChevronRight,
  Lock,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import NavLink from "../components/NavLink";
import Badge from "../components/Badge";
import Alert from "../components/Alert";
import Tabs from "../components/Tabs";
import Stat from "../components/Stat";
import Avatar from "../components/Avatar";
import ProductCard from "../components/ProductCard";
import CodeBlock from "../components/CodeBlock";
import ServiceIntroduction from "../components/ServiceIntroduction";
import BrowseHeader from "../components/BrowseHeader";
import ApiModelIntro from "../components/ApiModelIntro";
import ApiAuthSection from "../components/ApiAuthSection";
import ApiEndpoint from "../components/ApiEndpoint";
import ApiSideNav from "../components/ApiSideNav";
import SideNavRight from "../components/SideNavRight";
import HelpFooter from "../components/HelpFooter";
import AtAGlanceTable from "../components/AtAGlanceTable";
import AnchorRow from "../components/AnchorRow";
import BackLink from "../components/BackLink";
import ProfileMenu from "../components/ProfileMenu";

/* DocsView — comprehensive theme documentation.
   Generated from the Design System Agent extract ("New Test" theme).
   Source: Components frame · 40001206:15662. */

const SECTIONS: { id: string; label: string; group: string }[] = [
  { id: "overview", label: "Overview", group: "Start" },
  { id: "color", label: "Color", group: "Foundations" },
  { id: "typography", label: "Typography", group: "Foundations" },
  { id: "spacing", label: "Spacing", group: "Foundations" },
  { id: "radius", label: "Radius", group: "Foundations" },
  { id: "status", label: "Status palettes", group: "Foundations" },
  { id: "named-styles", label: "Named text styles", group: "Foundations" },
  { id: "buttons", label: "Buttons & links", group: "Components" },
  { id: "header", label: "Header", group: "Components" },
  { id: "footer", label: "Footer", group: "Components" },
  { id: "service-intro", label: "Service introduction", group: "Components" },
  { id: "browse-header", label: "Browse header", group: "Components" },
  { id: "productcard", label: "Product card", group: "Components" },
  { id: "profile-menu", label: "Profile menu", group: "Components" },
  { id: "spectable", label: "Spec table", group: "Components" },
  { id: "codeblock", label: "Code block", group: "Components" },
  { id: "forms", label: "Forms", group: "Components" },
  { id: "model-intro", label: "Model intro", group: "API documentation" },
  { id: "at-a-glance", label: "At a glance table", group: "API documentation" },
  { id: "anchors", label: "Anchors row", group: "API documentation" },
  { id: "back-link", label: "Back link", group: "API documentation" },
  { id: "new-order-cta", label: "New order CTA", group: "API documentation" },
  { id: "auth", label: "How to access", group: "API documentation" },
  { id: "endpoint", label: "Endpoint — List orders", group: "API documentation" },
  { id: "sidenav", label: "Side nav (left, dark)", group: "API documentation" },
  { id: "sidenav-right", label: "Side Navigation Right", group: "API documentation" },
  { id: "help-footer", label: "Help footer", group: "API documentation" },
  { id: "companions", label: "Companion components", group: "Components" },
  { id: "rules", label: "Rules & don'ts", group: "Reference" },
  { id: "migration", label: "Migration from v0.1", group: "Reference" },
];

export default function DocsView() {
  const [active, setActive] = useState("overview");
  const [tabsDemo, setTabsDemo] = useState("get");
  const [authUser, setAuthUser] = useState("");
  const [authPass, setAuthPass] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const grouped = SECTIONS.reduce<Record<string, typeof SECTIONS>>((acc, s) => {
    acc[s.group] = acc[s.group] || [];
    acc[s.group].push(s);
    return acc;
  }, {});

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#FFFFFF" }}>
      <Header />

      {/* ===== Doc hero ===== */}
      <section
        style={{
          background: "var(--wdh-surface-page)",
          borderBottom: "1px solid var(--wdh-border-subtle)",
        }}
      >
        <div className="mx-auto max-w-[1512px] px-6 lg:px-[76px] py-16">
          <div className="flex items-center gap-3 mb-6">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-1.5 transition-colors"
              style={{
                fontSize: 13,
                color: "var(--wdh-text-tertiary)",
              }}
            >
              <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2} />
              Dashboard
            </Link>
            <span style={{ color: "var(--wdh-border-subtle)" }}>/</span>
            <span
              style={{
                fontSize: 13,
                color: "var(--wdh-text-secondary)",
                fontWeight: 500,
              }}
            >
              Design system
            </span>
          </div>

          <div className="flex items-baseline gap-3 mb-3">
            <span
              className="uppercase font-brand"
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                color: "var(--wdh-text-tertiary)",
                fontWeight: 500,
              }}
            >
              Theme · New Test
            </span>
            <Badge tone="accent" size="sm">v1.0</Badge>
          </div>

          <h1
            className="font-brand max-w-[20ch]"
            style={{
              fontFamily: "var(--wdh-text-hero-heading-family)",
              fontSize: "var(--wdh-text-hero-heading-size)",
              fontWeight: 600,
              lineHeight: "var(--wdh-text-hero-heading-lh)",
              color: "var(--wdh-text-hero-heading-color)",
            }}
          >
            Weather Data Hub design system
          </h1>
          <p
            className="mt-4 max-w-[70ch] font-brand"
            style={{
              fontSize: 19,
              lineHeight: "29px",
              color: "var(--wdh-text-secondary)",
            }}
          >
            The full WDH theme — extracted from the Components frame via the Design
            System Agent. Covers the marketing surface, API documentation system,
            forms, and code surfaces. Supersedes the header-scoped v0.1 system.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-md" style={{ background: "var(--wdh-border-subtle)", border: "1px solid var(--wdh-border-subtle)" }}>
            <HeroStat label="Color roles" value="38" hint="Brand, surface, text, border, status" />
            <HeroStat label="Type styles" value="9" hint="Display → caption · plus mono" />
            <HeroStat label="Components" value="16" hint="From Header to API Endpoint" />
            <HeroStat label="Spacing steps" value="9" hint="2xs → 4xl · t-shirt scale" />
          </div>
        </div>
      </section>

      {/* ===== Body ===== */}
      <div className="mx-auto max-w-[1512px] px-6 lg:px-[76px] py-16 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-16">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-6 self-start">
            <nav aria-label="Documentation sections" className="flex flex-col gap-7">
              {Object.entries(grouped).map(([group, items]) => (
                <div key={group}>
                  <div
                    className="uppercase font-brand mb-2 px-2"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      color: "var(--wdh-text-tertiary)",
                      fontWeight: 500,
                    }}
                  >
                    {group}
                  </div>
                  <ul className="flex flex-col">
                    {items.map((s) => {
                      const isActive = active === s.id;
                      return (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className="flex items-center font-brand transition-colors"
                            style={{
                              fontSize: 13,
                              padding: "6px 8px",
                              color: isActive
                                ? "var(--wdh-text-primary)"
                                : "var(--wdh-text-tertiary)",
                              fontWeight: isActive ? 500 : 400,
                              borderLeft: isActive
                                ? "2px solid var(--wdh-action-primary)"
                                : "2px solid transparent",
                              marginLeft: isActive ? -2 : 0,
                              paddingLeft: isActive ? 10 : 8,
                            }}
                          >
                            {s.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main */}
          <main className="min-w-0 flex flex-col gap-20">
            {/* OVERVIEW */}
            <Section id="overview" eyebrow="Start" title="Overview">
              <P>
                This system was extracted from the <Token>Components</Token> frame
                (id <Token>40001206:15662</Token>) by the Design System Agent. It
                consolidates the WDH marketing surface, the API documentation
                system, and the operational dashboard into one coherent token set.
              </P>
              <SubHeading>What's in this version</SubHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <NoteCard tone="accent" title="Net new in this theme">
                  <ul className="flex flex-col gap-1.5 list-disc pl-4">
                    <li>Blue primary action color (#0074CC)</li>
                    <li>Full display → caption type ramp</li>
                    <li>T-shirt spacing scale (2xs → 4xl)</li>
                    <li>Radius scale 2 / 3 / 4 / 5 / 6</li>
                    <li>Monospace family for code surfaces</li>
                    <li>Footer, ProductCard, CodeBlock, SideNav</li>
                  </ul>
                </NoteCard>
                <NoteCard tone="info" title="Carried from v0.1">
                  <ul className="flex flex-col gap-1.5 list-disc pl-4">
                    <li>Two-tier dark header (#1D1D1D / #2A2A2A)</li>
                    <li>Lime brand accent (#B9DC0C) — active state only</li>
                    <li>Secondary button pattern (Login/Register)</li>
                    <li>State-by-color rule for navigation</li>
                  </ul>
                </NoteCard>
              </div>
              <CalloutNote tone="info">
                <Token>tokens.json</Token> remains owned by the token agent. Values
                listed below live in <Token>met-office/src/index.css</Token> under
                the <Token>--wdh-*</Token> namespace until promoted via Figma
                round-trip.
              </CalloutNote>
            </Section>

            {/* COLOR */}
            <Section id="color" eyebrow="Foundations" title="Color">
              <P>
                Five semantic groups. The brand accent (lime) signals active state
                only; the action color (blue) drives every primary CTA across
                product surfaces.
              </P>

              <SubHeading>Brand & action</SubHeading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Swatch hex="#B9DC0C" token="--wdh-brand" use="Lime · active state, focus rings" />
                <Swatch hex="#0074CC" token="--wdh-action-primary" use="Primary CTA · link color" />
                <Swatch hex="#CA3535" token="--wdh-alert" use="Destructive · error · alert" />
              </div>

              <SubHeading>Dark surfaces</SubHeading>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Swatch hex="#1D1D1D" token="--wdh-surface-header-top" use="Top header bar" dark />
                <Swatch hex="#2A2A2A" token="--wdh-surface-header-bottom" use="Lower nav strip" dark />
                <Swatch hex="#2A2A2A" token="--wdh-surface-footer-top" use="Footer link columns" dark />
                <Swatch hex="#1D1D1D" token="--wdh-surface-footer-bottom" use="Footer copyright strip" dark />
              </div>

              <SubHeading>Light surfaces</SubHeading>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Swatch hex="#FFFFFF" token="--wdh-surface-page" use="Page background" />
                <Swatch hex="#E3E4E5" token="--wdh-surface-subtle" use="Section · table headers" />
                <Swatch hex="#E0E0E0" token="--wdh-surface-muted" use="Image placeholder · disabled" />
                <Swatch hex="#F8F9FA" token="--wdh-surface-code" use="Code block fill" />
              </div>

              <SubHeading>Text on dark</SubHeading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Swatch hex="#F8F9FA" token="--wdh-text-on-dark" use="Header & footer body text" />
                <Swatch hex="#DDE2E6" token="--wdh-text-footer-link" use="Footer links · default" />
                <Swatch hex="#B9DC0C" token="--wdh-text-footer-link-active" use="Footer link · active" />
              </div>

              <SubHeading>Text on light</SubHeading>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Swatch hex="#1D1D1D" token="--wdh-text-primary" use="Headings · primary body" dark />
                <Swatch hex="#333333" token="--wdh-text-secondary" use="Secondary body · descriptions" dark />
                <Swatch hex="#8A8A8A" token="--wdh-text-tertiary" use="Eyebrows · meta · captions" />
                <Swatch hex="#555555" token="--wdh-text-neutral" use="API method labels" />
                <Swatch hex="#757575" token="--wdh-text-input" use="Form input value · placeholder" />
                <Swatch hex="#767676" token="--wdh-text-code" use="Code surface · file labels" />
              </div>

              <SubHeading>Border</SubHeading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Swatch hex="#D4D5D6" token="--wdh-border-subtle" use="Card · input · default 1px" />
                <Swatch hex="#444444" token="--wdh-border-default" use="Heavy separator · API tables" dark />
                <Swatch hex="#CED4DA" token="--wdh-border-light" use="Light divider · hr" />
              </div>
            </Section>

            {/* TYPOGRAPHY */}
            <Section id="typography" eyebrow="Foundations" title="Typography">
              <P>
                Single primary family: <Token>FS Emeric Web</Token> (proprietary).
                Falls through to <Token>system-ui</Token> when unavailable.
                Mono family for code: <Token>Monaco</Token> →{" "}
                <Token>Menlo</Token> → <Token>system monospace</Token>.
              </P>

              <div
                className="overflow-hidden"
                style={{
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <TypeRow token="--wdh-font-display-lg" spec="48px / 67px · 600" sample="Welcome to Weather Data Hub" style={{ fontSize: 48, fontWeight: 600, lineHeight: "67px", letterSpacing: "-0.02em" }} />
                <TypeRow token="--wdh-font-display-sm" spec="32px / 45px · 600" sample="Global Deterministic 10km Forecast" style={{ fontSize: 32, fontWeight: 600, lineHeight: "45px", letterSpacing: "-0.015em" }} />
                <TypeRow token="--wdh-font-headline-md" spec="24px / 34px · 600" sample="Atmospheric Model API" style={{ fontSize: 24, fontWeight: 600, lineHeight: "34px" }} />
                <TypeRow token="--wdh-font-headline-sm" spec="21px / 29px · 400" sample="Primary navigation link" style={{ fontSize: 21, fontWeight: 400, lineHeight: "29px" }} />
                <TypeRow token="--wdh-font-title-lg" spec="19px / 27px · 400/600" sample="Section title" style={{ fontSize: 19, fontWeight: 600, lineHeight: "27px" }} />
                <TypeRow token="--wdh-font-body-lg" spec="16px / 24px · 400" sample="Default body copy and longform reading." style={{ fontSize: 16, fontWeight: 400, lineHeight: "24px" }} />
                <TypeRow token="--wdh-font-body-md" spec="14px / 20px · 400" sample="Secondary body — descriptions, helpers." style={{ fontSize: 14, fontWeight: 400, lineHeight: "20px" }} />
                <TypeRow token="--wdh-font-body-sm" spec="13px / 19px · 400" sample="Metadata, footnotes, helper text." style={{ fontSize: 13, fontWeight: 400, lineHeight: "19px" }} />
                <TypeRow token="--wdh-font-caption" spec="11px / 14px · 500" sample="LABELS · METADATA · EYEBROWS" style={{ fontSize: 11, fontWeight: 500, lineHeight: "14px", letterSpacing: "0.1em", textTransform: "uppercase" }} />
                <TypeRow token="--wdh-font-mono" spec="Monaco · system mono" sample="GET /forecast/atmospheric/v1" style={{ fontFamily: "var(--wdh-font-mono)", fontSize: 13, lineHeight: "21px" }} />
              </div>
            </Section>

            {/* SPACING */}
            <Section id="spacing" eyebrow="Foundations" title="Spacing">
              <P>
                T-shirt scale, 4px base. Used uniformly for padding, gap, and
                section rhythm. Values <Token>2xs</Token> and <Token>xs</Token> are
                for inline UI; <Token>3xl</Token> / <Token>4xl</Token> for section
                separation.
              </P>

              <div
                className="p-6"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <div className="flex flex-wrap items-end gap-6">
                  {[
                    { name: "2xs", px: 4 },
                    { name: "xs", px: 8 },
                    { name: "sm", px: 12 },
                    { name: "md", px: 16 },
                    { name: "lg", px: 20 },
                    { name: "xl", px: 24 },
                    { name: "2xl", px: 32 },
                    { name: "3xl", px: 40 },
                    { name: "4xl", px: 48 },
                  ].map((s) => (
                    <div key={s.name} className="flex flex-col items-center gap-2">
                      <div
                        style={{
                          width: s.px,
                          height: s.px,
                          background: "var(--wdh-action-primary)",
                          borderRadius: 2,
                        }}
                      />
                      <div
                        className="font-brand text-center"
                        style={{ fontSize: 11, color: "var(--wdh-text-tertiary)" }}
                      >
                        <div style={{ color: "var(--wdh-text-primary)", fontWeight: 500 }}>
                          {s.name}
                        </div>
                        <div className="numeric">{s.px}px</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            {/* RADIUS */}
            <Section id="radius" eyebrow="Foundations" title="Radius">
              <P>
                Five steps. Sharp by default — the brand keeps a utilitarian,
                technical register. Reserve <Token>radius-6</Token> for hero
                surfaces where a softer feel reads as friendlier.
              </P>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { name: "--wdh-radius-2", px: 2, use: "Code labels · tight chips" },
                  { name: "--wdh-radius-3", px: 3, use: "Code block · subtle pills" },
                  { name: "--wdh-radius-4", px: 4, use: "Cards · product surfaces" },
                  { name: "--wdh-radius-5", px: 5, use: "Buttons · header utility action" },
                  { name: "--wdh-radius-6", px: 6, use: "Hero · prominent containers" },
                ].map((r) => (
                  <div
                    key={r.name}
                    className="p-4 flex flex-col gap-3"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid var(--wdh-border-subtle)",
                      borderRadius: 4,
                    }}
                  >
                    <div
                      style={{
                        height: 64,
                        background: "var(--wdh-surface-header-bottom)",
                        borderRadius: r.px,
                      }}
                    />
                    <div>
                      <div className="font-brand" style={{ fontSize: 13, color: "var(--wdh-text-primary)" }}>
                        {r.name}
                      </div>
                      <div className="flex items-center justify-between mt-0.5">
                        <span className="numeric" style={{ fontSize: 11, color: "var(--wdh-text-tertiary)" }}>
                          {r.px}px
                        </span>
                      </div>
                      <div className="mt-1.5" style={{ fontSize: 11, color: "var(--wdh-text-tertiary)" }}>
                        {r.use}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* STATUS PALETTES */}
            <Section id="status" eyebrow="Foundations" title="Status palettes">
              <P>
                Four palettes — success, warning, danger, info. Each carries a
                solid (for icons / status pills), background fill, border, and
                body text color. Warning and info each add a soft background
                reserved for full-bleed page callouts.
              </P>

              <StatusPalette
                name="Success"
                tokens={[
                  { role: "Solid", token: "--wdh-success", hex: "#047857" },
                  { role: "Background", token: "--wdh-success-bg", hex: "#D1FAE5" },
                  { role: "Border", token: "--wdh-success-border", hex: "#6EE7B7" },
                  { role: "Text", token: "--wdh-success-text", hex: "#065F46" },
                ]}
                pillTone="success"
                pillLabel="200 OK"
              >
                <Alert tone="success" title="Authentication successful">
                  Bearer token validated. Your API key has access to the
                  atmospheric forecast endpoints.
                </Alert>
              </StatusPalette>

              <StatusPalette
                name="Warning"
                tokens={[
                  { role: "Solid", token: "--wdh-warning", hex: "#F59E0B" },
                  { role: "Background", token: "--wdh-warning-bg", hex: "#FEF3C7" },
                  { role: "Background soft", token: "--wdh-warning-bg-soft", hex: "#FFFBEB" },
                  { role: "Border", token: "--wdh-warning-border", hex: "#FCD34D" },
                  { role: "Text", token: "--wdh-warning-text", hex: "#92400E" },
                ]}
                pillTone="warning"
                pillLabel="Yellow"
              >
                <Alert tone="warning" title="Yellow warning · Rain">
                  Persistent rain expected across south-east England until
                  18:00 GMT. Surface water possible on minor roads.
                </Alert>
              </StatusPalette>

              <StatusPalette
                name="Danger"
                tokens={[
                  { role: "Solid", token: "--wdh-danger", hex: "#CA3535" },
                  { role: "Background", token: "--wdh-danger-bg", hex: "#FEE2E2" },
                  { role: "Border", token: "--wdh-danger-border", hex: "#FCA5A5" },
                  { role: "Text", token: "--wdh-danger-text", hex: "#991B1B" },
                  { role: "Text strong", token: "--wdh-danger-text-strong", hex: "#B91C1C" },
                ]}
                pillTone="danger"
                pillLabel="500"
              >
                <Alert tone="danger" title="500 Internal Server Error">
                  Forecast service is temporarily unavailable. Retry with
                  exponential backoff (max 3 attempts).
                </Alert>
              </StatusPalette>

              <StatusPalette
                name="Info"
                tokens={[
                  { role: "Solid", token: "--wdh-info", hex: "#0074CC" },
                  { role: "Background", token: "--wdh-info-bg", hex: "#DBEAFE" },
                  { role: "Background soft", token: "--wdh-info-bg-soft", hex: "#EFF6FF" },
                  { role: "Border", token: "--wdh-info-border", hex: "#BFDBFE" },
                  { role: "Text", token: "--wdh-info-text", hex: "#1D4ED8" },
                ]}
                pillTone="info"
                pillLabel="GET"
              >
                <Alert tone="info" title="Model updated">
                  MOGREPS-G ensemble refreshed at 14:00 GMT. New forecast
                  horizon: 10 days.
                </Alert>
              </StatusPalette>

              <SubHeading>Usage rules</SubHeading>
              <RecipeTable
                rows={[
                  ["Pair completeness", "Always use bg + border + text from the same palette — never mix."],
                  ["Body text on tinted bg", "Use --*-text (darkest). Default text colors fail contrast."],
                  ["Solid color use", "Reserved for icons, status pills, method badges, chart marks."],
                  ["Soft background variant", "--*-bg-soft is for full-bleed page callouts only (warning, info)."],
                  ["Brand vs danger", "Don't pair brand lime with danger red — both fight for attention."],
                  ["Density", "Status surfaces use 16px padding, 4px radius, 1px border."],
                ]}
              />
            </Section>

            {/* NAMED TEXT STYLES */}
            <Section id="named-styles" eyebrow="Foundations" title="Named text styles">
              <P>
                Semantic text tokens bound to Figma text styles for round-trip
                fidelity. Each composes primitives from the typography section.
                New roles get added here when a Figma style is absorbed.
              </P>

              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <div
                  className="px-5 py-4"
                  style={{
                    borderBottom: "1px solid var(--wdh-border-subtle)",
                    background: "var(--wdh-surface-card-muted)",
                  }}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-brand uppercase"
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.12em",
                        color: "var(--wdh-text-tertiary)",
                        fontWeight: 500,
                      }}
                    >
                      Hero heading
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--wdh-font-mono)",
                        fontSize: 12,
                        color: "var(--wdh-text-secondary)",
                      }}
                    >
                      --wdh-text-hero-heading-*
                    </span>
                  </div>
                </div>

                <div className="px-5 py-6">
                  <span
                    style={{
                      fontFamily: "var(--wdh-text-hero-heading-family)",
                      fontSize: "var(--wdh-text-hero-heading-size)",
                      fontWeight: 600,
                      lineHeight: "var(--wdh-text-hero-heading-lh)",
                      color: "var(--wdh-text-hero-heading-color)",
                    }}
                  >
                    Welcome to Weather Data Hub
                  </span>
                </div>

                <div
                  className="px-5 py-3"
                  style={{ borderTop: "1px solid var(--wdh-border-subtle)" }}
                >
                  <NamedStyleRow label="Family" value="--wdh-font-brand" />
                  <NamedStyleRow label="Size" value="--wdh-font-display-lg (48px)" />
                  <NamedStyleRow label="Line height" value="--wdh-lh-display-lg (67px)" />
                  <NamedStyleRow label="Weight" value="--wdh-weight-semibold (600)" />
                  <NamedStyleRow label="Color" value="--wdh-text-primary (#1D1D1D)" />
                  <NamedStyleRow label="Tracking" value="0" last />
                </div>

                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{
                    borderTop: "1px solid var(--wdh-border-subtle)",
                    background: "var(--wdh-surface-card-muted)",
                  }}
                >
                  <span
                    className="font-brand"
                    style={{ fontSize: 13, color: "var(--wdh-text-tertiary)" }}
                  >
                    Figma binding
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--wdh-font-mono)",
                      fontSize: 12,
                      color: "var(--wdh-text-secondary)",
                    }}
                  >
                    text style inter/display/semibold-2 · node 5:460
                  </span>
                </div>
              </div>
            </Section>

            {/* BUTTONS */}
            <Section id="buttons" eyebrow="Components" title="Buttons & links">
              <P>
                Four button variants. The <Token>action</Token> variant is the
                load-bearing primary across product surfaces; the rest serve
                utility, neutral, and tertiary roles.
              </P>

              <SubHeading>Variants</SubHeading>
              <Preview>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="action">Read more</Button>
                  <Button variant="primary">Dark utility</Button>
                  <Button variant="secondary">Login/Register</Button>
                  <Button variant="ghost">Cancel</Button>
                </div>
              </Preview>

              <SubHeading>Sizes</SubHeading>
              <Preview>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="action" size="sm">Small</Button>
                  <Button variant="action" size="md">Medium · 41px</Button>
                </div>
              </Preview>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["action", "#0074CC fill · #FFFFFF text · hover #005A99 · radius-5"],
                  ["secondary", "#E0E0E0 fill · #1D1D1D text · radius-5 (DS)"],
                  ["primary", "#1D1D1D fill · #F8F9FA text · radius-5"],
                  ["ghost", "transparent · text.body · radius-5"],
                  ["sm size", "h-36 · 13px"],
                  ["md size", "h-41 · 16px"],
                ]}
              />

              <SubHeading>Links</SubHeading>
              <Preview>
                <p className="font-brand" style={{ fontSize: 16, lineHeight: "24px", color: "var(--wdh-text-primary)" }}>
                  Read the{" "}
                  <a href="#" style={{ color: "var(--wdh-text-link)", textDecoration: "underline", textUnderlineOffset: 2 }}>
                    full forecast documentation
                  </a>{" "}
                  or browse the{" "}
                  <a href="#" style={{ color: "var(--wdh-text-link)", textDecoration: "underline", textUnderlineOffset: 2 }}>
                    list of available endpoints
                  </a>
                  .
                </p>
              </Preview>
            </Section>

            {/* HEADER */}
            <Section id="header" eyebrow="Components" title="Header">
              <P>
                Two-tier dark navigation shell. Carried from v0.1 unchanged.
                Inline SVG logo + literal inline styles so the component survives
                any export pipeline.
              </P>
              <Preview padded={false}>
                <Header />
              </Preview>
            </Section>

            {/* FOOTER */}
            <Section id="footer" eyebrow="Components" title="Footer">
              <P>
                Two-tier dark footer mirroring the header split. Top tier holds
                four link columns; bottom tier carries copyright and small
                meta-links.
              </P>
              <Preview padded={false}>
                <Footer />
              </Preview>
              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["Top tier fill", "--wdh-surface-footer-top (#2A2A2A)"],
                  ["Bottom tier fill", "--wdh-surface-footer-bottom (#1D1D1D)"],
                  ["Top layout", "Logo (left) + legal link cluster · gap 12 · py-10"],
                  ["Logo wordmark", "19px · 700 · #FFFFFF · same mark as Header"],
                  ["Legal link", "14px · 400 · --wdh-text-footer-link (#DDE2E6) · hover → white"],
                  ["Bottom layout", "Social icons right-aligned · gap 6 · py-5"],
                  ["Social icon", "20x20 filled brand SVG · currentColor · 70% opacity"],
                  ["Source", "components.fig · GROUP 7:3150"],
                ]}
              />
            </Section>

            {/* SERVICE INTRODUCTION */}
            <Section id="service-intro" eyebrow="Components" title="Service introduction">
              <P>
                Marketing entry pattern — <Token>wdh-service-introduction-comp</Token>.
                Display heading over a two-paragraph body: a short tagline
                followed by a longer descriptive paragraph. Closes with a
                hairline divider that hands off to the next section.
              </P>

              <Preview tone="page" padded={false}>
                <div style={{ paddingLeft: 32, paddingRight: 32 }}>
                  <ServiceIntroduction />
                </div>
              </Preview>

              <SubHeading>Real content (verbatim from Figma)</SubHeading>
              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <ContentRow label="Heading" value="Welcome to Weather Data Hub" />
                {/* keep service-intro content rows below */}
                <ContentRow label="Tagline" value="Find the right data for you from our high-quality weather API products." />
                <ContentRow
                  label="Body"
                  value="Choose from a selection of atmospheric and site-specific data models, weather observations and map images. You can use them to create applications, conduct research or simply stay informed about the weather conditions in your or any location worldwide."
                  last
                />
              </div>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["Heading", "--wdh-text-hero-heading-* (48 / 67 / 600 · text-primary)"],
                  ["Tagline", "body-lg (16 / 24 / 400) · text-primary · max-w 70ch"],
                  ["Body", "body-lg (16 / 24 / 400) · text-primary · max-w 70ch"],
                  ["Heading → tagline", "--wdh-space-xl (24px)"],
                  ["Tagline → body", "--wdh-space-md (16px)"],
                  ["Body → divider", "--wdh-space-2xl (32px)"],
                  ["Divider", "1px · --wdh-border-subtle (#D4D5D6)"],
                  ["Source", "components.fig · INSTANCE 7:3154"],
                ]}
              />
            </Section>

            {/* BROWSE HEADER */}
            <Section id="browse-header" eyebrow="Components" title="Browse header">
              <P>
                Catalog entry pattern — <Token>Browse & Product Category</Token>.
                Page heading sets the catalog title; the hairline + result count
                anchors the listing; the category section repeats per group
                (Atmospheric forecasts, Ocean forecasts, etc.) above the cards
                that belong to it.
              </P>

              <Preview tone="page" padded={false}>
                <div style={{ paddingLeft: 32, paddingRight: 32 }}>
                  <BrowseHeader />
                </div>
              </Preview>

              <SubHeading>Real content (verbatim from Figma)</SubHeading>
              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <ContentRow label="Page heading" value="Browse our API products" />
                <ContentRow label="Result count" value="9 results" />
                <ContentRow label="Category" value="Atmospheric forecasts" />
                <ContentRow
                  label="Description"
                  value="Predictions of future weather conditions based on scientific measurements of the atmosphere and computer models that show how it is expected to change."
                  last
                />
              </div>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["Page heading", "--wdh-font-display-sm (32 / 45 / 600) · text-primary"],
                  ["Heading → divider", "--wdh-space-lg (20px)"],
                  ["Divider", "1px · --wdh-border-subtle (#D4D5D6)"],
                  ["Result count", "body-lg / 600 · text-primary · mt md (16px)"],
                  ["Result count → category", "--wdh-space-2xl (32px)"],
                  ["Category heading", "--wdh-font-headline-md (24 / 34 / 600) · text-primary"],
                  ["Category description", "body-lg (16 / 24 / 400) · text-primary · max-w 85ch"],
                  ["Source", "components.fig · INSTANCE 7:3153"],
                ]}
              />
            </Section>

            {/* PRODUCT CARD */}
            <Section id="productcard" eyebrow="Components" title="Product card">
              <P>
                Two-column tile: image left (~280px), content right. Used on the
                catalog beneath each <Token>Browse header</Token> category.
                Title → description → optional bold-label metadata rows → blue{" "}
                <Token>Find out more</Token> CTA.
              </P>

              <Preview>
                <ProductCard
                  title="Global Deterministic 10km Forecast"
                  description="A numerical weather prediction forecast for the whole globe, with a resolution of approximately 0.09 degrees i.e. 10km (2,560 x 1,920 grid points)."
                  metadata={[
                    { label: "Forecast length", value: "7 days (168 hours)" },
                    { label: "Update frequency", value: "4 times daily" },
                  ]}
                  ctaLabel="Find out more"
                  imageNode={
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: "#0E2545" }}
                    >
                      <Globe2
                        className="w-20 h-20"
                        strokeWidth={1.2}
                        style={{ color: "#5EB0F2" }}
                      />
                    </div>
                  }
                />
              </Preview>

              <SubHeading>Real content (verbatim from Figma)</SubHeading>
              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <ContentRow label="Title" value="Global Deterministic 10km Forecast" />
                <ContentRow
                  label="Description"
                  value="A numerical weather prediction forecast for the whole globe, with a resolution of approximately 0.09 degrees i.e. 10km (2,560 x 1,920 grid points)."
                />
                <ContentRow label="Meta 1" value="Forecast length: 7 days (168 hours)" />
                <ContentRow label="Meta 2" value="Update frequency: 4 times daily" />
                <ContentRow label="CTA label" value="Find out more" last />
              </div>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["Container", "surface-card · 1px border-subtle · radius-4"],
                  ["Image well", "280px wide · aspect-square · bg surface-muted"],
                  ["Title", "--wdh-font-headline-md (24 / 34 / 600) · text-primary"],
                  ["Description", "body-lg (16 / 24 / 400) · text-primary"],
                  ["Metadata row", "body-lg · <strong>Label:</strong> value · gap 4px"],
                  ["CTA", "Button variant=action · size md · 'Find out more'"],
                  ["Content padding", "--wdh-space-xl (24px) · gap md between blocks"],
                  ["Source", "components.fig · INSTANCE 7:3152"],
                ]}
              />
            </Section>

            {/* PROFILE MENU */}
            <Section id="profile-menu" eyebrow="Components" title="Profile menu">
              <P>
                Header-level account menu. The trigger row is built for the dark
                header context: a 54px blue circular avatar with white initials,
                the user's name in white beside it, and a small LogOut glyph on
                the right (36px gap). The panel beneath is white, 352px wide,
                anchored top-right.
              </P>

              <Preview tone="dark" padded={false}>
                <div
                  style={{
                    minHeight: 520,
                    padding: "32px 40px",
                    display: "flex",
                    justifyContent: "flex-end",
                    background: "var(--wdh-surface-header-bottom)",
                  }}
                >
                  <ProfileMenu defaultOpen />
                </div>
              </Preview>

              <SubHeading>Real content (verbatim from Figma)</SubHeading>
              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <ContentRow label="Trigger name" value="Christopher Legg (white, 16 / Regular)" />
                <ContentRow label="Trigger glyph" value="LogOut (lucide) · 20 × 20 · white" />
                <ContentRow label="Avatar initials" value="CL (white, 16 / Regular)" />
                <ContentRow label="Avatar fill" value="#0074CC (--wdh-info)" />
                <ContentRow label="Panel — Name" value="Christopher Legg" />
                <ContentRow label="Panel — Email" value="christopher.legg@metoffice.gov.uk" />
                <ContentRow label="Menu title" value="Menu" />
                <ContentRow label="Item 1" value="My details" />
                <ContentRow label="Item 2" value="My subscriptions" />
                <ContentRow label="Item 3" value="My payment details" />
                <ContentRow label="Footer" value="Logout — with right-aligned LogOut icon" last />
              </div>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["Avatar", "54px circle · --wdh-info (#0074CC) fill · white initials 16 / Regular"],
                  ["Trigger gap", "16px avatar→name · 36px name→glyph"],
                  ["Trigger name", "16 / 23 / 400 · #FFFFFF · whitespace nowrap"],
                  ["Trigger glyph", "lucide LogOut · 20 × 20 · stroke 1.75 · #FFFFFF"],
                  ["Panel", "352px · #FFFFFF · radius 4 · shadow-only edge (no border)"],
                  ["Panel padding", "20px top / bottom · 24px left / right"],
                  ["Panel name", "16 / 20 / 400 · --wdh-text-primary (#333333)"],
                  ["Panel email", "14 / 17 / 400 · --wdh-text-primary"],
                  ["Header → divider", "16px padding-bottom on header block"],
                  ["Menu title", "20 / 25 / 600 · text-primary · 20px above · 14px below"],
                  ["Menu item", "19 / 24 / 400 · text-primary · gap 14px between items"],
                  ["Item hover", "color → --wdh-info (#0074CC)"],
                  ["Divider", "1px --wdh-border-subtle"],
                  ["Logout row", "19 / 24 / 400 · LogOut icon right-aligned · 20px above divider"],
                  ["Anchor", "in-flow under the trigger button · 14px gap · left-aligned with avatar"],
                  ["Source", "components.fig · INSTANCE 7:3216"],
                ]}
              />
            </Section>

            {/* MODEL INTRO */}
            <Section id="model-intro" eyebrow="API documentation" title="Model intro">
              <P>
                Landing surface for an API model. Title — intro paragraphs —
                numbered usage steps — closing usage notes. Onboards a developer
                to the model and links out to per-endpoint pages.
              </P>

              <Preview tone="page">
                <ApiModelIntro />
              </Preview>

              <SubHeading>Real content (verbatim from Figma)</SubHeading>
              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <ContentRow label="H1" value="Atmospheric Model API" />
                <ContentRow
                  label="Intro ¶ 1"
                  value="This API allows you to retrieve orders for Atmospheric Model Data otherwise known as 'Gridded' data. The API described here contains a definition for all requests as well as examples of how to write your code to interface with our gateway to retrieve your data."
                />
                <ContentRow
                  label="Intro ¶ 2"
                  value="When you call this API you will need your API key and can begin by making a call to /1.0.0/orders (this will give you all of your Order IDs)."
                />
                <ContentRow label="H2 (1)" value="API Usage is typically done in 4 Steps:" />
                <ContentRow label="Step 1" value="Call GET /1.0.0/orders — programmatic order list" />
                <ContentRow label="Step 4" value="Call GET …/{fileId}/data — Accept: application/x-grib for GRIB file" />
                <ContentRow label="H2 (2)" value="There are additional end points to query the runs available:" />
                <ContentRow label="H2 (3)" value="Using your application" last />
              </div>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["H1", "--wdh-font-display-lg (48 / 67 / 600) · text-primary"],
                  ["Intro paragraph", "body-lg (16 / 24 / 400) · max-w 800px"],
                  ["Section heading", "--wdh-font-headline-md (24 / 34 / 600)"],
                  ["Step prefix", "mono-md · surface-muted chip · radius 3"],
                  ["Step body", "body-lg · gap 4px between items"],
                  ["Section spacing", "--wdh-space-2xl (32px) between groups"],
                  ["Source", "components.fig · INSTANCE 7:3211 (Overview) + 7:3212 (H1)"],
                ]}
              />
            </Section>

            {/* AT A GLANCE TABLE */}
            <Section id="at-a-glance" eyebrow="API documentation" title="At a glance table">
              <P>
                Definition list of the model's headline specs. Sits directly under
                the model intro. Bold label column + value column with hairline
                dividers. Values that point at deeper docs (Projection,
                Parameters) render as inline action-blue underlined links.
              </P>

              <Preview>
                <AtAGlanceTable />
              </Preview>

              <SubHeading>Real content (verbatim from Figma)</SubHeading>
              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <ContentRow label="Heading" value="At a glance" />
                <ContentRow label="Domain" value="Global (region can be selected)" />
                <ContentRow label="Product type" value="Forecast" />
                <ContentRow label="Resolution" value="10km (A,560 x 1,920 grid points)" />
                <ContentRow label="Projection (link)" value="Equirectangular Latitude-Longitude" />
                <ContentRow label="Parameters (link)" value="144 available across multiple levels" />
                <ContentRow
                  label="Time steps"
                  value="Every hour 0 to 54 hours, every 3 hours between 57 & 144 hours, every 6 hours between 150 & 168 hours"
                />
                <ContentRow label="Forecast length" value="7 days (168 hours)" />
                <ContentRow
                  label="Update frequency"
                  value="4 times daily (for the next 168 hours at 00:00 & 12:00 UTC, for the next 66 hours at 06:00 & 18:00 UTC)"
                />
                <ContentRow label="Delivery method" value="API" />
                <ContentRow label="File format" value="GRIB2 - Gridded Binary Format" last />
              </div>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["Heading", "--wdh-font-display-sm (32 / 45 / 600) · text-primary"],
                  ["Heading → first row", "--wdh-space-lg (20px)"],
                  ["Label column", "200px · body-lg / 600 · text-primary · trailing ':'"],
                  ["Value column", "body-lg (16 / 24 / 400) · text-primary"],
                  ["Link value", "--wdh-info (#0074CC) · underline · offset 3"],
                  ["Row padding", "20px vertical"],
                  ["Divider", "1px --wdh-border-subtle between rows (none on first)"],
                  ["Source", "components.fig · FRAME 7:3157"],
                ]}
              />
            </Section>

            {/* ANCHORS ROW */}
            <Section id="anchors" eyebrow="API documentation" title="Anchors row">
              <P>
                Horizontal jump-to row placed below the page header. Each anchor
                is bold and gap-spaced; hover lifts to action blue. Used to
                navigate between the major sections of a model page.
              </P>

              <Preview>
                <AnchorRow />
              </Preview>

              <SubHeading>Real content (verbatim from Figma)</SubHeading>
              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <ContentRow label="Item 1" value="At a glance" />
                <ContentRow label="Item 2" value="Samples" />
                <ContentRow label="Item 3" value="Usage examples" />
                <ContentRow label="Item 4" value="API Docs" />
                <ContentRow label="Item 5" value="Support" last />
              </div>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["Item", "--wdh-font-headline-md (24 / 34 / 600) · text-primary"],
                  ["Gap", "--wdh-space-2xl (32px) between items"],
                  ["Hover", "color → --wdh-info (#0074CC) · no underline"],
                  ["Layout", "flex · wrap on small viewports"],
                  ["Source", "components.fig · INSTANCE 7:3213"],
                ]}
              />
            </Section>

            {/* BACK LINK */}
            <Section id="back-link" eyebrow="API documentation" title="Back link">
              <P>
                Inline navigation cue at the top-left of an inner page. Chevron
                glyph + label, rendered in the action blue. Hover adds an
                underline; click returns to the parent listing.
              </P>

              <Preview>
                <BackLink />
              </Preview>

              <SubHeading>Real content (verbatim from Figma)</SubHeading>
              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <ContentRow label="Label" value="Back" />
                <ContentRow label="Glyph" value="‹ chevron-left (lucide)" last />
              </div>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["Label", "body-lg (16 / 24 / 400) · --wdh-info (#0074CC)"],
                  ["Glyph", "16x16 lucide ChevronLeft · stroke 2.25 · currentColor"],
                  ["Gap", "4px between glyph and label"],
                  ["Hover", "text-decoration: underline"],
                  ["Source", "components.fig · INSTANCE 7:3215"],
                ]}
              />
            </Section>

            {/* NEW ORDER CTA */}
            <Section id="new-order-cta" eyebrow="API documentation" title="New order CTA">
              <P>
                Canonical primary action of the API documentation surfaces.
                Mapped to <Token>Button variant="action"</Token> with the label
                "New order". Placed top-right on a model page, beside the page
                title, opposite the <Token>Back</Token> link.
              </P>

              <Preview>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <Button variant="action" size="md">New order</Button>
                </div>
              </Preview>

              <SubHeading>Real content (verbatim from Figma)</SubHeading>
              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <ContentRow label="Label" value="New order" />
                <ContentRow label="Variant" value='Button variant="action" · size md' last />
              </div>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["Fill", "--wdh-info / #0074CC (action blue)"],
                  ["Hover", "#005A99"],
                  ["Active", "#004E85"],
                  ["Label", "body-lg (16 / 24) · 400 · #FFFFFF"],
                  ["Padding", "size md · ~9px vertical · 27px horizontal"],
                  ["Radius", "--wdh-radius-4 (4px)"],
                  ["Source", "components.fig · INSTANCE 7:3214"],
                ]}
              />
            </Section>

            {/* HOW TO ACCESS */}
            <Section id="auth" eyebrow="API documentation" title="How to access">
              <P>
                Authentication surface. The user pastes their API key, optionally
                reveals it, and applies it. Below that, the active API server URL
                is displayed under a brand-lime <Token>SELECTED:</Token> caption.
              </P>

              <Preview tone="page">
                <ApiAuthSection />
              </Preview>

              <SubHeading>Real content (verbatim from Figma)</SubHeading>
              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <ContentRow label="H1" value="How to access" />
                <ContentRow label="Section 1" value="AUTHENTICATION" />
                <ContentRow label="Field label" value="API KEY" />
                <ContentRow label="Warning" value="No API key applied" />
                <ContentRow
                  label="Helper"
                  value="The API Key generated with your Subscription in Weather DataHub, this must be set as 'apikey' in your header."
                />
                <ContentRow label="CTA" value="Set" />
                <ContentRow label="Section 2" value="API SERVER" />
                <ContentRow label="Caption" value="SELECTED:" />
                <ContentRow
                  label="URL"
                  value="https://data.hub.api.metoffice.gov.uk/atmospheric-models/1.0.0"
                  last
                />
              </div>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["H1", "--wdh-font-display-lg (48 / 67 / 600)"],
                  ["Section heading", "--wdh-font-display-sm (32 / 45 / 600) · uppercase · tracking 0.02em"],
                  ["Field label", "--wdh-font-headline-md (24 / 34 / 600) · uppercase"],
                  ["Warning text", "body-lg · --wdh-danger-text-strong · 500"],
                  ["Helper paragraph", "body-lg · text-secondary"],
                  ["Input row", "1px border-subtle · radius 2 · Show toggle on right"],
                  ["Set CTA", "Button variant=action · size md"],
                  ["SELECTED caption", "headline-md · --wdh-brand (lime) · uppercase"],
                  ["Source", "components.fig · within 7:3217"],
                ]}
              />
            </Section>

            {/* SIDE NAV */}
            <Section id="sidenav" eyebrow="API documentation" title="Side nav">
              <P>
                Dark vertical nav used down the left of every API documentation
                page. No section heading in source — items list directly, with
                the active page marked by lime text and a 3px lime border-left.
                A support footer block closes the rail.
              </P>

              <Preview padded={false} tone="page">
                <div className="grid grid-cols-[260px_minmax(0,1fr)]" style={{ minHeight: 480 }}>
                  <ApiSideNav />
                  <div className="p-10" style={{ background: "var(--wdh-surface-page)" }}>
                    <h3
                      className="font-brand"
                      style={{
                        fontSize: 32,
                        fontWeight: 600,
                        lineHeight: "45px",
                        color: "var(--wdh-text-primary)",
                        margin: 0,
                      }}
                    >
                      Atmospheric Model API
                    </h3>
                    <p
                      className="font-brand"
                      style={{
                        fontSize: 16,
                        lineHeight: "24px",
                        color: "var(--wdh-text-secondary)",
                        marginTop: 12,
                      }}
                    >
                      Active row marked with the brand lime — same state-by-color rule as the header.
                    </p>
                  </div>
                </div>
              </Preview>

              <SubHeading>Real content (verbatim from Figma)</SubHeading>
              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <ContentRow label="Item 1 (active)" value="Atmospheric Model API" />
                <ContentRow label="Item 2" value="How to access" />
                <ContentRow label="Item 3" value="List all available orders" />
                <ContentRow label="Item 4" value="List the available files in an order" />
                <ContentRow label="Item 5" value="Provide the details of a specific file" />
                <ContentRow label="Item 6" value="Get the data for a specific file" />
                <ContentRow label="Item 7" value="List all runs" />
                <ContentRow label="Item 8" value="List all runs for specific model" />
                <ContentRow label="Support" value="Need support?" />
                <ContentRow label="Contact" value="Contact us enquiries@metoffice.gov.uk" last />
              </div>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["Container fill", "--wdh-surface-header-bottom (#2A2A2A)"],
                  ["Padding", "32px top · 28px bottom · items pad 10/24"],
                  ["Item default", "14 / 20 / 400 · --wdh-text-on-dark (#F8F9FA)"],
                  ["Item active", "14 / 20 / 500 · --wdh-brand (#B9DC0C) · 3px left bar in brand"],
                  ["Item hover", "color lifts to #FFFFFF"],
                  ["Footer separator", "1px · rgba(255,255,255,0.08) · padding-top 24"],
                  ["Support heading", "14 / 20 / 600 · --wdh-text-on-dark"],
                  ["Support contact", "13 / 19 · rgba(248,249,250,0.65)"],
                  ["Source", "components.fig · INSTANCE 7:3295"],
                ]}
              />
            </Section>

            {/* SIDE NAV RIGHT */}
            <Section
              id="sidenav-right"
              eyebrow="API documentation"
              title="Side Navigation Right"
            >
              <P>
                Right-side rail used on Atmospheric Models / Useful Links
                surfaces. Two stacked sections of action-blue links — no dark
                fill, no card chrome. Hover adds an underline; colour stays
                action blue. Distinct from the dark left rail.
              </P>

              <Preview tone="page" padded={false}>
                <div
                  className="grid grid-cols-[minmax(0,1fr)_261px]"
                  style={{ minHeight: 600, background: "var(--wdh-surface-page)" }}
                >
                  <div className="p-10">
                    <h3
                      className="font-brand"
                      style={{
                        fontSize: 32,
                        fontWeight: 600,
                        lineHeight: "45px",
                        color: "var(--wdh-text-primary)",
                        margin: 0,
                      }}
                    >
                      Atmospheric Model API
                    </h3>
                    <p
                      className="font-brand"
                      style={{
                        fontSize: 16,
                        lineHeight: "24px",
                        color: "var(--wdh-text-secondary)",
                        marginTop: 12,
                        maxWidth: 520,
                      }}
                    >
                      Right rail listing related models + a "Useful links" block,
                      all action-blue. Hover adds an underline.
                    </p>
                  </div>
                  <SideNavRight />
                </div>
              </Preview>

              <SubHeading>Real content (verbatim from Figma)</SubHeading>
              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <ContentRow label="Section 1 heading" value="Atmospheric Models" />
                <ContentRow label="Link 1" value="UK Deterministic 2km Forecast - Standard" />
                <ContentRow label="Link 2" value="UK Deterministic 2km Forecast - Latitude-Longitude" />
                <ContentRow label="Link 3" value="Global Ensemble 20km Forecast (MOGREPS-G)" />
                <ContentRow label="Link 4" value="UK Ensemble 2km Forecast (MOGREPS-UK)" />
                <ContentRow label="Section 2 heading" value="Useful links" />
                <ContentRow label="Link 1" value="Get started" />
                <ContentRow label="Link 2" value="See available parameters" />
                <ContentRow label="Link 3" value="API documentation" />
                <ContentRow label="Link 4" value="Usage examples" />
                <ContentRow label="Link 5" value="Download sample code" />
                <ContentRow label="Link 6" value="Download sample data" />
                <ContentRow label="Link 7" value="How to build your order" />
                <ContentRow label="Link 8" value="Model run availability" last />
              </div>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["Frame", "261px wide · page surface · no border · padding 0 / 24px"],
                  ["Section left rule", "1px --wdh-border-subtle · content padded 16px from rule"],
                  ["Section gap", "48px"],
                  ["Heading", "24 / 26 / 600 · --wdh-text-primary"],
                  ["Link", "19 / 23 / 400 · --wdh-info (#0074CC)"],
                  ["Heading → first link", "10px"],
                  ["Link → link", "8px"],
                  ["Hover", "underline (offset 3px) · color unchanged"],
                  ["Focus-visible", "2px outline --wdh-info offset 2px"],
                  ["Source", "components.fig · INSTANCE 7:3295 (Side Nav Right)"],
                ]}
              />
            </Section>

            {/* HELP FOOTER */}
            <Section id="help-footer" eyebrow="API documentation" title="Help footer">
              <P>
                In-page closing block for every API documentation page. Plain
                text — no surface, no padding, no card chrome. Sits at the
                bottom of the 894px content body, after the last endpoint.
              </P>

              <Preview tone="page">
                <div style={{ padding: "var(--wdh-space-2xl)" }}>
                  <HelpFooter />
                </div>
              </Preview>

              <SubHeading>Real content (verbatim from Figma)</SubHeading>
              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <ContentRow
                  label="Heading"
                  value="Help us improve the data services we offer"
                />
                <ContentRow
                  label="Body"
                  value="Join the Met Office research panel to help us understand how people interact with weather and climate data, uncover challenges and explore opportunities."
                  last
                />
              </div>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["Frame width", "894px (matches API page body)"],
                  ["Surface / padding", "none — plain text block on page surface"],
                  ["Stack", "vertical · 25px gap between heading and body"],
                  ["Heading", "32 / 40 / 600 · --wdh-text-primary"],
                  ["Body", "19 / 24 / 400 · --wdh-text-primary · max-width 862px"],
                  ["Optional CTA slot", "below body — empty by default"],
                  ["Source", "components.fig · I7:3294;40001204:12425 (Help)"],
                ]}
              />
            </Section>

            {/* SPEC TABLE */}
            <Section id="spectable" eyebrow="Components" title="Spec table">
              <P>
                Definition list for "At a glance" data — model specs, endpoint
                metadata, API constants. Two-column with subtle row dividers.
                Mono family for code/identifier values.
              </P>
              <Preview>
                <div
                  className="overflow-hidden"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--wdh-border-subtle)",
                    borderRadius: 4,
                  }}
                >
                  <SpecTableRow label="Model" value="MOGREPS-G ensemble" />
                  <SpecTableRow label="Resolution" value="10 km horizontal · 70 vertical levels" />
                  <SpecTableRow label="Forecast horizon" value="10 days · 6-hourly init" />
                  <SpecTableRow label="Update cadence" value="00, 06, 12, 18 UTC" />
                  <SpecTableRow label="Output format" value="NetCDF · GRIB2" mono />
                  <SpecTableRow label="Coverage" value="60°S → 90°N · global" />
                  <SpecTableRow label="Status" value={<Badge tone="success" size="sm">Stable</Badge>} />
                </div>
              </Preview>
              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["Container", "#FFFFFF · 1px border-subtle · radius-4"],
                  ["Label column", "min 200px · 19 / 24 / 600 · text-primary"],
                  ["Value column", "19 / 24 / 400 · text-primary · mono for codes"],
                  ["Row padding", "sm vertical · md horizontal"],
                  ["Divider", "1px border-subtle between rows"],
                ]}
              />
            </Section>

            {/* CODE BLOCK */}
            <Section id="codeblock" eyebrow="Components" title="Code block">
              <P>
                Light-fill code surface. Header strip carries language label and
                copy action. Body uses the monospace family at 13px on a 21px
                line.
              </P>

              <SubHeading>With header</SubHeading>
              <Preview>
                <CodeBlock
                  language="bash"
                  filename="curl request"
                  code={`curl -X GET "https://api.weatherdatahub.metoffice.gov.uk/v1/forecast/atmospheric" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Accept: application/json" \\
  --data-urlencode "lat=51.5074" \\
  --data-urlencode "lon=-0.1278" \\
  --data-urlencode "from=2026-11-18T00:00Z"`}
                />
              </Preview>

              <SubHeading>JSON response</SubHeading>
              <Preview>
                <CodeBlock
                  language="json"
                  filename="200 OK"
                  code={`{
  "model": "MOGREPS-G",
  "issued_at": "2026-11-18T12:00:00Z",
  "location": { "lat": 51.5074, "lon": -0.1278 },
  "values": [
    { "t": "+0h", "temp": 8.2, "wind": 18, "rain": 0.4 },
    { "t": "+1h", "temp": 8.0, "wind": 19, "rain": 0.6 },
    { "t": "+2h", "temp": 7.9, "wind": 17, "rain": 0.3 }
  ]
}`}
                />
              </Preview>
            </Section>

            {/* API ENDPOINT — List orders */}
            <Section id="endpoint" eyebrow="API documentation" title="Endpoint — List orders">
              <P>
                Per-endpoint documentation. Title + auth pill — method + path —
                description — REQUEST (query-string params + headers + server
                footnote + try-actions) — RESPONSE (status code pills +
                example/schema tabs + Copy). Defaults render the real{" "}
                <Token>/orders</Token> endpoint from the Atmospheric Model API.
              </P>

              <Preview tone="page">
                <ApiEndpoint />
              </Preview>

              <SubHeading>Real content (verbatim from Figma)</SubHeading>
              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <ContentRow label="H1" value="List all available orders" />
                <ContentRow label="Auth pill" value="API Key (apikey)" />
                <ContentRow label="Method · path" value="get /orders" />
                <ContentRow
                  label="Description"
                  value="This gets an object detailing the available orders that have been configured using the Atmospheric Weather Data Configuration Tool for your Organsation."
                />
                <ContentRow label="Section" value="REQUEST" />
                <ContentRow label="Sub-section" value="QUERY-STRING PARAMETERS" />
                <ContentRow label="Param 1" value="detail (string · enum) — Allowed: MINIMAL | FULL" />
                <ContentRow label="Param 2" value="dataSpec (string · enum) — Default: 1.1.0 · Allowed: 1.1.0" />
                <ContentRow label="Sub-section" value="REQUEST HEADERS" />
                <ContentRow label="Header 1" value="Accept * (string) — application/json required" />
                <ContentRow label="Footnote" value="API Server: https://data.hub.api.metoffice.gov.uk/atmospheric-models/1.0.0" />
                <ContentRow label="Footnote" value="Authentication: Required (None Applied)" />
                <ContentRow label="Actions" value="Fill Example · Clear · Try" />
                <ContentRow label="Section" value="RESPONSE" />
                <ContentRow label="Status codes" value="200 · 400 · 401 · 403 · 404 · 406 · 429 · 500 · 503" />
                <ContentRow label="200 description" value="All available orders are returned" />
                <ContentRow label="Content type" value="application/json" />
                <ContentRow label="Tabs" value="EXAMPLE / SCHEMA" last />
              </div>

              <SubHeading>Recipe</SubHeading>
              <RecipeTable
                rows={[
                  ["H1", "--wdh-font-display-lg (48 / 67 / 600)"],
                  ["Auth pill", "surface-muted · 1px border-subtle · radius 999 · body-md"],
                  ["Method tag", "--wdh-font-mono-md · 700 · --wdh-method-get (#0074CC) · lowercase"],
                  ["Path", "mono-md · 500 · text-primary"],
                  ["Section heading", "--wdh-font-display-sm (32 / 45 / 600) · uppercase"],
                  ["Sub-section heading", "--wdh-font-headline-md (24 / 34 / 600) · uppercase"],
                  ["Param row", "180px name col + flex value col · 1px border-top · pad lg vertical"],
                  ["Param name", "mono-md · 600 · text-primary · required → red ' * '"],
                  ["Allowed / Default", "body-md · mono-sm code chip for values"],
                  ["Server footnote", "surface-muted card · radius-4 · body-md · text-secondary"],
                  ["Actions", "Ghost · Ghost · Action (Try is blue primary)"],
                  ["Status pill (2xx)", "success-bg + success-text · selected → fill success-text on #fff"],
                  ["Status pill (4xx)", "warning-bg + warning-text"],
                  ["Status pill (5xx)", "danger-bg + danger-text"],
                  ["Tabs", "uppercase headline-md · 2px brand-lime under active"],
                  ["JSON pre", "surface-muted · 1px border-subtle · radius-4 · mono-sm / 20px"],
                  ["Copy CTA", "Button variant=action"],
                  ["Source", "components.fig · within 7:3217"],
                ]}
              />
            </Section>

            {/* FORMS */}
            <Section id="forms" eyebrow="Components" title="Forms">
              <P>
                Light-surface inputs with a 41px height and 5px radius. Auth form
                shown here is the pattern used on the "How to access"
                documentation page.
              </P>

              <SubHeading>Inputs</SubHeading>
              <Preview>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[640px]">
                  <Input placeholder="Search models, parameters, endpoints" />
                  <Input
                    placeholder="With leading icon"
                    leadingIcon={<Search className="w-4 h-4" strokeWidth={2} />}
                  />
                  <Input
                    label="Latitude"
                    placeholder="51.5074"
                  />
                  <Input
                    label="Longitude"
                    placeholder="-0.1278"
                  />
                </div>
              </Preview>

              <SubHeading>Auth form pattern</SubHeading>
              <Preview>
                <div className="max-w-[480px] flex flex-col gap-4">
                  <h3
                    className="font-brand"
                    style={{
                      fontSize: 24,
                      fontWeight: 600,
                      lineHeight: "34px",
                      color: "var(--wdh-text-primary)",
                    }}
                  >
                    Authentication
                  </h3>
                  <p
                    className="font-brand"
                    style={{
                      fontSize: 14,
                      lineHeight: "20px",
                      color: "var(--wdh-text-secondary)",
                    }}
                  >
                    Use your API credentials to authenticate requests against the
                    forecast and observation endpoints.
                  </p>
                  <Input
                    label="Username"
                    value={authUser}
                    onChange={(e) => setAuthUser(e.target.value)}
                    placeholder="you@example.com"
                  />
                  <Input
                    label="API key"
                    type="password"
                    value={authPass}
                    onChange={(e) => setAuthPass(e.target.value)}
                    placeholder="••••••••••••••••"
                    leadingIcon={<Lock className="w-4 h-4" strokeWidth={2} />}
                  />
                  <div className="flex items-center gap-3 mt-2">
                    <Button variant="action">Submit</Button>
                    <a
                      href="#"
                      style={{
                        fontSize: 14,
                        color: "var(--wdh-text-link)",
                        textDecoration: "underline",
                        textUnderlineOffset: 2,
                      }}
                    >
                      Need an API key?
                    </a>
                  </div>
                </div>
              </Preview>
            </Section>

            {/* COMPANIONS */}
            <Section id="companions" eyebrow="Components" title="Companion components">
              <P>
                Carried from v0.1 — Badge, Alert, Tabs, Stat, Avatar, Card,
                NavLink. Their tokens have been re-anchored to the new theme
                where applicable.
              </P>

              <SubHeading>Badge</SubHeading>
              <Preview>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="neutral">Neutral</Badge>
                  <Badge tone="accent">Lime</Badge>
                  <Badge tone="warning">Yellow · Rain</Badge>
                  <Badge tone="success">200 OK</Badge>
                  <Badge tone="danger">500 Server error</Badge>
                </div>
              </Preview>

              <SubHeading>Alert</SubHeading>
              <Preview>
                <div className="flex flex-col gap-3">
                  <Alert tone="warning" title="Yellow warning · Rain · until 18:00 GMT">
                    Persistent rain may lead to surface water and isolated travel disruption across south-east England.
                  </Alert>
                  <Alert tone="info" title="Model updated">
                    MOGREPS ensemble refreshed at 14:00 GMT.
                  </Alert>
                </div>
              </Preview>

              <SubHeading>Stat</SubHeading>
              <Preview>
                <div
                  className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden"
                  style={{
                    background: "var(--wdh-border-subtle)",
                    border: "1px solid var(--wdh-border-subtle)",
                    borderRadius: 4,
                  }}
                >
                  <div className="p-5" style={{ background: "#FFFFFF" }}>
                    <Stat label="Temp" value="8" unit="°C" hint="Above seasonal avg" icon={<Cloud className="w-4 h-4" strokeWidth={1.8} />} />
                  </div>
                  <div className="p-5" style={{ background: "#FFFFFF" }}>
                    <Stat label="Wind" value="18" unit="mph" hint="↑ gusts 32" trend="up" icon={<Zap className="w-4 h-4" strokeWidth={1.8} />} />
                  </div>
                  <div className="p-5" style={{ background: "#FFFFFF" }}>
                    <Stat label="Pressure" value="1004" unit="hPa" hint="↓ falling" trend="down" />
                  </div>
                  <div className="p-5" style={{ background: "#FFFFFF" }}>
                    <Stat label="Vis" value="8.4" unit="km" hint="Moderate" trend="flat" icon={<TrendingUp className="w-4 h-4" strokeWidth={1.8} />} />
                  </div>
                </div>
              </Preview>

              <SubHeading>Avatar</SubHeading>
              <Preview>
                <div className="flex items-end gap-4">
                  <Avatar initials="JD" size="sm" status="online" />
                  <Avatar initials="MR" size="md" status="warning" />
                  <Avatar initials="SK" size="lg" status="offline" />
                  <Avatar icon={<Bell className="w-4 h-4" strokeWidth={2} />} size="md" />
                  <Avatar icon={<User className="w-4 h-4" strokeWidth={2} />} size="md" />
                </div>
              </Preview>

              <SubHeading>Card</SubHeading>
              <Preview>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card title="Default">Body content on light surface.</Card>
                  <Card variant="muted" title="Muted">Adjacent grouping surface.</Card>
                  <Card variant="dark" title="Dark">Hero / data emphasis.</Card>
                </div>
              </Preview>

              <SubHeading>NavLink</SubHeading>
              <Preview tone="dark">
                <div className="flex items-center gap-12 flex-wrap">
                  <NavLink active>Home</NavLink>
                  <NavLink>Documentation</NavLink>
                  <NavLink>Parameters</NavLink>
                  <NavLink>Pricing &amp; Plans</NavLink>
                  <NavLink>Support</NavLink>
                </div>
              </Preview>
            </Section>

            {/* RULES */}
            <Section id="rules" eyebrow="Reference" title="Rules & don'ts">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RuleCard
                  tone="do"
                  rule="Use action blue (#0074CC) for the single primary action per surface"
                  why="Multiple blue CTAs in one viewport flattens hierarchy and competes for the eye."
                />
                <RuleCard
                  tone="dont"
                  rule="Don't use lime brand (#B9DC0C) for primary CTAs"
                  why="Lime is reserved for active state. CTAs use action blue."
                />
                <RuleCard
                  tone="do"
                  rule="Use the t-shirt spacing scale uniformly"
                  why="2xs–4xl carries the entire vertical and inline rhythm; arbitrary values create drift."
                />
                <RuleCard
                  tone="dont"
                  rule="Don't introduce one-off pixel values for spacing"
                  why="If a step is missing, propose adding it to the scale rather than free-flowing."
                />
                <RuleCard
                  tone="do"
                  rule="Pair display-large heading with body-large description"
                  why="The 48 / 19px pair is the documented hero rhythm — keeps headlines anchored."
                />
                <RuleCard
                  tone="dont"
                  rule="Don't apply --wdh-font-mono outside code/identifier contexts"
                  why="Mono leaking into UI labels reads as a bug."
                />
                <RuleCard
                  tone="do"
                  rule="Maintain the two-tier dark split on header AND footer"
                  why="The split is the brand's structural fingerprint — mirroring it on the footer closes the surface."
                />
                <RuleCard
                  tone="dont"
                  rule="Don't put lime on light backgrounds outside active footer links"
                  why="Lime on white fails contrast and undermines the active-state signal."
                />
              </div>
            </Section>

            {/* MIGRATION */}
            <Section id="migration" eyebrow="Reference" title="Migration from v0.1">
              <P>
                Most v0.1 tokens carry over unchanged. The mapping below covers
                the rename / extension surface for code authors moving from the
                header-only system.
              </P>

              <div
                className="overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--wdh-border-subtle)",
                  borderRadius: 4,
                }}
              >
                <MigrationRow from="--color-surface-header-top" to="--wdh-surface-header-top" status="same" />
                <MigrationRow from="--color-surface-header-bottom" to="--wdh-surface-header-bottom" status="same" />
                <MigrationRow from="--color-text-accent" to="--wdh-brand" status="renamed" />
                <MigrationRow from="(none)" to="--wdh-action-primary" status="new" />
                <MigrationRow from="(none)" to="--wdh-alert" status="new" />
                <MigrationRow from="--font-size-body (15px)" to="--wdh-font-body-lg (16px)" status="changed" />
                <MigrationRow from="--font-size-h1 (40px)" to="--wdh-font-display-lg (48px)" status="changed" />
                <MigrationRow from="--spacing-* (4-based)" to="--wdh-space-* (t-shirt)" status="renamed" />
                <MigrationRow from="(none)" to="--wdh-font-mono" status="new" />
                <MigrationRow from="(none)" to="--wdh-text-link" status="new" />
              </div>

              <CalloutNote tone="warn">
                Existing screens (Dashboard, v0.1 Docs) keep their original token
                references — no breaking changes there. New surfaces should
                adopt <Token>--wdh-*</Token> tokens directly.
              </CalloutNote>
            </Section>

            <div
              className="pt-6 mt-4 flex items-center justify-between"
              style={{
                borderTop: "1px solid var(--wdh-border-subtle)",
                fontSize: 13,
                color: "var(--wdh-text-tertiary)",
              }}
            >
              <span>WDH Theme · "New Test" · generated from Components frame 40001206:15662</span>
              <span className="numeric">Met Office · 2026</span>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ============================================================
   Atoms
   ============================================================ */

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6 flex flex-col gap-6">
      <div>
        <div
          className="uppercase font-brand mb-2"
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            color: "var(--wdh-text-tertiary)",
            fontWeight: 500,
          }}
        >
          {eyebrow}
        </div>
        <h2
          className="font-brand"
          style={{
            fontSize: 32,
            fontWeight: 600,
            lineHeight: "45px",
            letterSpacing: "-0.015em",
            color: "var(--wdh-text-primary)",
          }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function P({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-brand max-w-[70ch]"
      style={{
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--wdh-text-secondary)",
      }}
    >
      {children}
    </p>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3
      className="font-brand mt-4"
      style={{
        fontSize: 13,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--wdh-text-secondary)",
        lineHeight: "19px",
      }}
    >
      {children}
    </h3>
  );
}

function Token({ children }: { children: ReactNode }) {
  return (
    <code
      style={{
        fontFamily: "var(--wdh-font-mono)",
        fontSize: "0.9em",
        padding: "1px 6px",
        borderRadius: 2,
        background: "var(--wdh-surface-code)",
        border: "1px solid var(--wdh-border-subtle)",
        color: "var(--wdh-text-primary)",
      }}
    >
      {children}
    </code>
  );
}

function Preview({
  children,
  tone = "default",
  padded = true,
}: {
  children: ReactNode;
  tone?: "default" | "page" | "dark";
  padded?: boolean;
}) {
  const bg =
    tone === "dark"
      ? "var(--wdh-surface-header-bottom)"
      : tone === "page"
      ? "var(--wdh-surface-page)"
      : "#FFFFFF";
  return (
    <div
      className="overflow-hidden"
      style={{
        background: bg,
        border: "1px solid var(--wdh-border-subtle)",
        borderRadius: 4,
      }}
    >
      <div style={{ padding: padded ? (tone === "dark" ? 32 : 24) : 0 }}>{children}</div>
    </div>
  );
}

function Swatch({
  hex,
  token,
  use,
  dark,
}: {
  hex: string;
  token: string;
  use: string;
  dark?: boolean;
}) {
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "#FFFFFF",
        border: "1px solid var(--wdh-border-subtle)",
        borderRadius: 4,
      }}
    >
      <div style={{ height: 88, background: hex }} />
      <div className="p-3 flex flex-col gap-1">
        <div
          className="font-brand truncate"
          style={{
            fontFamily: "var(--wdh-font-mono)",
            fontSize: 12,
            color: "var(--wdh-text-primary)",
          }}
        >
          {token}
        </div>
        <div className="flex items-center justify-between">
          <span
            className="numeric"
            style={{ fontSize: 11, color: "var(--wdh-text-tertiary)" }}
          >
            {hex} {dark ? "· dark" : ""}
          </span>
        </div>
        <div
          style={{ fontSize: 11, color: "var(--wdh-text-tertiary)", lineHeight: "14px" }}
        >
          {use}
        </div>
      </div>
    </div>
  );
}

function TypeRow({
  token,
  spec,
  sample,
  style,
}: {
  token: string;
  spec: string;
  sample: string;
  style: CSSProperties;
}) {
  return (
    <div
      className="grid grid-cols-[200px_minmax(0,1fr)_180px] items-center px-5 py-4 gap-4"
      style={{ borderBottom: "1px solid var(--wdh-border-subtle)" }}
    >
      <span
        className="font-brand truncate"
        style={{
          fontFamily: "var(--wdh-font-mono)",
          fontSize: 12,
          color: "var(--wdh-text-primary)",
        }}
      >
        {token}
      </span>
      <span
        className="font-brand truncate"
        style={{ ...style, color: "var(--wdh-text-primary)" }}
      >
        {sample}
      </span>
      <span
        className="font-brand text-right numeric"
        style={{ fontSize: 13, color: "var(--wdh-text-tertiary)" }}
      >
        {spec}
      </span>
    </div>
  );
}

function RecipeTable({ rows }: { rows: [string, string][] }) {
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "#FFFFFF",
        border: "1px solid var(--wdh-border-subtle)",
        borderRadius: 4,
      }}
    >
      {rows.map(([part, recipe], i) => (
        <div
          key={i}
          className="grid grid-cols-[200px_minmax(0,1fr)] gap-4 px-5 py-3 items-center"
          style={{
            borderBottom:
              i < rows.length - 1 ? "1px solid var(--wdh-border-subtle)" : "none",
          }}
        >
          <span
            className="font-brand"
            style={{ fontSize: 13, color: "var(--wdh-text-primary)", fontWeight: 500 }}
          >
            {part}
          </span>
          <span
            style={{
              fontFamily: "var(--wdh-font-mono)",
              fontSize: 13,
              color: "var(--wdh-text-secondary)",
            }}
          >
            {recipe}
          </span>
        </div>
      ))}
    </div>
  );
}

function HeroStat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="p-5 flex flex-col gap-2" style={{ background: "#FFFFFF" }}>
      <span
        className="uppercase font-brand"
        style={{
          fontSize: 11,
          letterSpacing: "0.12em",
          color: "var(--wdh-text-tertiary)",
          fontWeight: 500,
        }}
      >
        {label}
      </span>
      <span
        className="font-brand numeric"
        style={{
          fontSize: 32,
          fontWeight: 600,
          lineHeight: "45px",
          color: "var(--wdh-text-primary)",
          letterSpacing: "-0.015em",
        }}
      >
        {value}
      </span>
      <span
        className="font-brand"
        style={{ fontSize: 13, color: "var(--wdh-text-tertiary)", lineHeight: "19px" }}
      >
        {hint}
      </span>
    </div>
  );
}

function NoteCard({
  tone,
  title,
  children,
}: {
  tone: "info" | "accent";
  title: string;
  children: ReactNode;
}) {
  const bg = tone === "accent" ? "#F7FCE3" : "#EFF6FF";
  const border = tone === "accent" ? "#B9DC0C" : "#0074CC";
  return (
    <div
      className="p-5"
      style={{
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 4,
      }}
    >
      <h4
        className="font-brand mb-3"
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: "var(--wdh-text-primary)",
          lineHeight: "24px",
        }}
      >
        {title}
      </h4>
      <div
        className="font-brand"
        style={{
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--wdh-text-secondary)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function CalloutNote({
  children,
  tone = "info",
}: {
  children: ReactNode;
  tone?: "info" | "warn";
}) {
  const isWarn = tone === "warn";
  return (
    <div
      className="flex items-start gap-3 p-4"
      style={{
        background: isWarn ? "#FFFBEB" : "#EFF6FF",
        border: `1px solid ${isWarn ? "#FCD34D" : "#BFDBFE"}`,
        borderRadius: 4,
      }}
    >
      {isWarn ? (
        <AlertTriangle
          className="w-4 h-4 mt-0.5 shrink-0"
          strokeWidth={2}
          style={{ color: "#92400E" }}
        />
      ) : (
        <CircleDot
          className="w-4 h-4 mt-0.5 shrink-0"
          strokeWidth={2}
          style={{ color: "#1D4ED8" }}
        />
      )}
      <div
        className="font-brand"
        style={{ fontSize: 14, lineHeight: "20px", color: "var(--wdh-text-primary)" }}
      >
        {children}
      </div>
    </div>
  );
}

function RuleCard({
  tone,
  rule,
  why,
}: {
  tone: "do" | "dont";
  rule: string;
  why: string;
}) {
  const isDo = tone === "do";
  return (
    <div
      className="p-5 flex flex-col gap-3"
      style={{
        background: "#FFFFFF",
        border: "1px solid var(--wdh-border-subtle)",
        borderRadius: 4,
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="inline-flex items-center justify-center"
          style={{
            width: 24,
            height: 24,
            borderRadius: 9999,
            background: isDo ? "var(--wdh-brand)" : "#FCA5A5",
          }}
        >
          {isDo ? (
            <Check className="w-3.5 h-3.5" strokeWidth={3} style={{ color: "#1D1D1D" }} />
          ) : (
            <X className="w-3.5 h-3.5" strokeWidth={3} style={{ color: "#7F1D1D" }} />
          )}
        </span>
        <span
          className="uppercase font-brand"
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            color: "var(--wdh-text-tertiary)",
            fontWeight: 500,
          }}
        >
          {isDo ? "Do" : "Don't"}
        </span>
      </div>
      <div
        className="font-brand"
        style={{
          fontSize: 16,
          fontWeight: 500,
          color: "var(--wdh-text-primary)",
          lineHeight: "24px",
        }}
      >
        {rule}
      </div>
      <div
        className="font-brand"
        style={{
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--wdh-text-secondary)",
        }}
      >
        {why}
      </div>
    </div>
  );
}

function SideNavGroup({
  title,
  items,
}: {
  title: string;
  items: { label: string; active: boolean }[];
}) {
  return (
    <div>
      <div
        className="uppercase font-brand px-6 mb-2"
        style={{
          fontSize: 11,
          letterSpacing: "0.12em",
          color: "#8A8A8A",
          fontWeight: 500,
        }}
      >
        {title}
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="block font-brand transition-colors"
              style={{
                fontSize: 16,
                padding: "10px 24px",
                color: item.active ? "var(--wdh-brand)" : "var(--wdh-text-on-dark)",
                fontWeight: item.active ? 500 : 400,
                borderLeft: item.active
                  ? "3px solid var(--wdh-brand)"
                  : "3px solid transparent",
                paddingLeft: item.active ? 21 : 24,
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SpecTableRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: ReactNode;
  mono?: boolean;
}) {
  return (
    <div
      className="grid grid-cols-[200px_minmax(0,1fr)] gap-4 px-5 py-3 items-center"
      style={{ borderBottom: "1px solid var(--wdh-border-subtle)" }}
    >
      <span
        className="font-brand"
        style={{
          fontSize: 19,
          lineHeight: "24px",
          color: "var(--wdh-text-primary)",
          fontWeight: 600,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: mono ? "var(--wdh-font-mono)" : undefined,
          fontSize: 19,
          lineHeight: "24px",
          color: "var(--wdh-text-primary)",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function StatusPalette({
  name,
  tokens,
  pillTone,
  pillLabel,
  children,
}: {
  name: string;
  tokens: { role: string; token: string; hex: string }[];
  pillTone: "success" | "warning" | "danger" | "info";
  pillLabel: string;
  children: ReactNode;
}) {
  const pillMap: Record<string, { bg: string; text: string }> = {
    success: { bg: "var(--wdh-success-bg)", text: "var(--wdh-success-text)" },
    warning: { bg: "var(--wdh-warning-bg)", text: "var(--wdh-warning-text)" },
    danger: { bg: "var(--wdh-danger-bg)", text: "var(--wdh-danger-text)" },
    info: { bg: "var(--wdh-info-bg)", text: "var(--wdh-info-text)" },
  };
  const pill = pillMap[pillTone];
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "#FFFFFF",
        border: "1px solid var(--wdh-border-subtle)",
        borderRadius: 4,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        {/* Token column */}
        <div
          className="p-5"
          style={{ borderRight: "1px solid var(--wdh-border-subtle)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <h4
              className="font-brand"
              style={{
                fontSize: 19,
                fontWeight: 600,
                color: "var(--wdh-text-primary)",
                lineHeight: "27px",
              }}
            >
              {name}
            </h4>
            <span
              className="font-brand inline-flex items-center"
              style={{
                background: pill.bg,
                color: pill.text,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.04em",
                padding: "3px 8px",
                borderRadius: 2,
              }}
            >
              {pillLabel}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {tokens.map((t) => (
              <div key={t.token} className="flex items-center gap-3">
                <span
                  style={{
                    width: 32,
                    height: 32,
                    background: t.hex,
                    border: "1px solid var(--wdh-border-subtle)",
                    borderRadius: 3,
                    flexShrink: 0,
                  }}
                />
                <div className="flex flex-col min-w-0 flex-1">
                  <span
                    style={{
                      fontFamily: "var(--wdh-font-mono)",
                      fontSize: 12,
                      color: "var(--wdh-text-primary)",
                      lineHeight: "16px",
                    }}
                  >
                    {t.token}
                  </span>
                  <div
                    className="flex items-center justify-between"
                    style={{
                      fontSize: 11,
                      color: "var(--wdh-text-tertiary)",
                      lineHeight: "14px",
                      marginTop: 1,
                    }}
                  >
                    <span>{t.role}</span>
                    <span className="numeric">{t.hex}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Sample column */}
        <div
          className="p-5 flex items-center"
          style={{ background: "var(--wdh-surface-card-muted)" }}
        >
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

function ContentRow({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className="grid grid-cols-[120px_minmax(0,1fr)] gap-4 px-5 py-3 items-start"
      style={{
        borderBottom: last ? "none" : "1px solid var(--wdh-border-subtle)",
      }}
    >
      <span
        className="font-brand"
        style={{
          fontSize: 13,
          color: "var(--wdh-text-tertiary)",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          paddingTop: 2,
        }}
      >
        {label}
      </span>
      <span
        className="font-brand"
        style={{
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--wdh-text-primary)",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function NamedStyleRow({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className="grid grid-cols-[140px_minmax(0,1fr)] gap-4 py-2 items-center"
      style={{
        borderBottom: last ? "none" : "1px solid var(--wdh-border-subtle)",
      }}
    >
      <span
        className="font-brand"
        style={{
          fontSize: 13,
          color: "var(--wdh-text-secondary)",
          fontWeight: 500,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--wdh-font-mono)",
          fontSize: 13,
          color: "var(--wdh-text-primary)",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function MethodBadge({ method }: { method: "GET" | "POST" | "PUT" | "DELETE" }) {
  const map: Record<string, string> = {
    GET: "#0074CC",
    POST: "#047857",
    PUT: "#92400E",
    DELETE: "#CA3535",
  };
  return (
    <span
      className="inline-flex items-center justify-center font-brand"
      style={{
        background: map[method],
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.08em",
        padding: "3px 8px",
        borderRadius: 2,
        fontFamily: "var(--wdh-font-mono)",
      }}
    >
      {method}
    </span>
  );
}

function MigrationRow({
  from,
  to,
  status,
}: {
  from: string;
  to: string;
  status: "same" | "renamed" | "changed" | "new";
}) {
  const tone: Record<string, { label: string; color: string; bg: string }> = {
    same: { label: "Same", color: "#1D4ED8", bg: "#DBEAFE" },
    renamed: { label: "Renamed", color: "#92400E", bg: "#FEF3C7" },
    changed: { label: "Changed", color: "#B91C1C", bg: "#FEE2E2" },
    new: { label: "New", color: "#065F46", bg: "#D1FAE5" },
  };
  const t = tone[status];
  return (
    <div
      className="grid grid-cols-[minmax(0,1fr)_24px_minmax(0,1fr)_100px] items-center px-5 py-3 gap-3"
      style={{ borderBottom: "1px solid var(--wdh-border-subtle)" }}
    >
      <span
        style={{
          fontFamily: "var(--wdh-font-mono)",
          fontSize: 13,
          color: "var(--wdh-text-secondary)",
        }}
      >
        {from}
      </span>
      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} style={{ color: "var(--wdh-text-tertiary)" }} />
      <span
        style={{
          fontFamily: "var(--wdh-font-mono)",
          fontSize: 13,
          color: "var(--wdh-text-primary)",
          fontWeight: 500,
        }}
      >
        {to}
      </span>
      <span
        className="inline-flex items-center justify-center font-brand uppercase"
        style={{
          background: t.bg,
          color: t.color,
          fontSize: 11,
          letterSpacing: "0.08em",
          padding: "2px 8px",
          borderRadius: 2,
          fontWeight: 500,
          width: "fit-content",
        }}
      >
        {t.label}
      </span>
    </div>
  );
}