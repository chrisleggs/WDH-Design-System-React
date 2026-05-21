import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Cloud,
  CloudRain,
  CloudSun,
  Sun,
  CloudDrizzle,
  Wind,
  Droplets,
  Gauge,
  Eye,
  Sunrise,
  Sunset,
  Thermometer,
  ChevronRight,
  ArrowUpRight,
  Circle,
  BookOpen,
} from "lucide-react";
import Header from "../components/Header";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

/* HomeView — Met Office–style weather dashboard.
   Renders the DS header faithfully, then puts Button / Card / Input / NavLink to work
   in a real product surface. Every value below is realistic for late November in the UK. */

const FORECAST = [
  { day: "Tue", date: "18 Nov", icon: CloudRain, high: 9, low: 4, rain: 80 },
  { day: "Wed", date: "19 Nov", icon: Cloud, high: 8, low: 3, rain: 30 },
  { day: "Thu", date: "20 Nov", icon: CloudDrizzle, high: 7, low: 2, rain: 60 },
  { day: "Fri", date: "21 Nov", icon: CloudSun, high: 9, low: 4, rain: 10 },
  { day: "Sat", date: "22 Nov", icon: Sun, high: 11, low: 5, rain: 5 },
  { day: "Sun", date: "23 Nov", icon: CloudSun, high: 10, low: 6, rain: 20 },
  { day: "Mon", date: "24 Nov", icon: CloudRain, high: 8, low: 4, rain: 70 },
];

const PARAMETERS = [
  { label: "Wind", icon: Wind, value: "18", unit: "mph", detail: "SW · gusts 32" },
  { label: "Humidity", icon: Droplets, value: "78", unit: "%", detail: "Above seasonal avg" },
  { label: "Pressure", icon: Gauge, value: "1004", unit: "hPa", detail: "Falling slowly" },
  { label: "Visibility", icon: Eye, value: "8.4", unit: "km", detail: "Moderate" },
  { label: "UV Index", icon: Sun, value: "1", unit: "low", detail: "Sun 08:24 → 16:09" },
  { label: "Feels like", icon: Thermometer, value: "5", unit: "°C", detail: "Wind chill active" },
];

const STATIONS = [
  { name: "Heathrow", temp: 8, condition: "Light rain", obs: "2 min ago" },
  { name: "Northolt", temp: 7, condition: "Overcast", obs: "3 min ago" },
  { name: "Kew Gardens", temp: 8, condition: "Drizzle", obs: "1 min ago" },
  { name: "St James's Park", temp: 9, condition: "Cloudy", obs: "4 min ago" },
  { name: "London City", temp: 8, condition: "Light rain", obs: "2 min ago" },
];

export default function HomeView() {
  const [query, setQuery] = useState("London, UK");
  const [range, setRange] = useState<"24h" | "7d" | "14d">("7d");

  return (
    <div className="min-h-screen bg-surface-page text-text-body">
      <Header />

      <main className="mx-auto max-w-[1512px] px-6 lg:px-[76px] py-10">
        {/* ---- Page top: location + search + meta ---- */}
        <section className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-text-muted text-small mb-3 uppercase tracking-[0.08em]">
              <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
              Observation · Tue 18 Nov 2026 · 14:42 GMT
            </div>
            <h1 className="font-brand text-h1 leading-[1.05] tracking-tight text-text-body">
              London, United Kingdom
            </h1>
            <p className="text-text-muted mt-2 max-w-xl">
              Light rain easing through the afternoon. Cloud cover persists with a fresh
              south-westerly. Pressure falling slowly ahead of an Atlantic frontal system.
            </p>
          </div>
          <div className="w-full lg:w-[360px] flex flex-col gap-3">
            <Input
              id="locsearch"
              placeholder="Search town, postcode, or station"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              leadingIcon={<Search className="w-4 h-4" strokeWidth={2} />}
              trailing={
                <kbd className="text-text-faint text-micro font-brand">⌘ K</kbd>
              }
            />
            <div className="flex items-center gap-2 text-small text-text-muted">
              <Circle className="w-2 h-2 fill-text-accent text-text-accent" />
              <span>Live · refreshed every 60s</span>
            </div>
          </div>
        </section>

        {/* ---- Hero conditions ---- */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {/* Big current card — dark surface, bridges to header palette */}
          <Card variant="dark" padded={false} className="lg:col-span-2">
            <div className="px-8 py-8 flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-text-primary/70 text-small uppercase tracking-[0.08em]">
                  <CloudRain className="w-4 h-4" strokeWidth={1.8} />
                  Current conditions
                </div>
                <Button variant="ghost" size="sm" className="text-text-primary hover:bg-white/5">
                  View map <ArrowUpRight className="w-3.5 h-3.5 ml-1" strokeWidth={2} />
                </Button>
              </div>

              <div className="flex items-end gap-8 flex-wrap">
                <div className="numeric flex items-start text-text-primary leading-none">
                  <span className="font-brand text-display font-medium tracking-tight">8</span>
                  <span className="font-brand text-h2 mt-3 ml-1 text-text-primary/70">°C</span>
                </div>
                <div className="flex flex-col gap-1 mb-3">
                  <span className="font-brand text-h3 text-text-primary">Light rain, breezy</span>
                  <span className="text-small text-text-primary/60">
                    High 9° · Low 4° · Feels like 5°
                  </span>
                </div>
                <div className="ml-auto flex items-center gap-6 mb-2">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-micro text-text-primary/50 uppercase tracking-[0.1em]">Sunrise</span>
                    <span className="flex items-center gap-1.5 text-text-primary text-label numeric">
                      <Sunrise className="w-4 h-4 text-text-accent" strokeWidth={1.8} />
                      08:24
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-micro text-text-primary/50 uppercase tracking-[0.1em]">Sunset</span>
                    <span className="flex items-center gap-1.5 text-text-primary text-label numeric">
                      <Sunset className="w-4 h-4 text-text-accent" strokeWidth={1.8} />
                      16:09
                    </span>
                  </div>
                </div>
              </div>

              {/* Parameter ribbon */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#3A3A3A] rounded-md overflow-hidden border border-[#3A3A3A]">
                {PARAMETERS.slice(0, 4).map(({ label, value, unit, icon: Icon }) => (
                  <div key={label} className="bg-surface-header-bottom px-5 py-4 flex flex-col gap-1">
                    <span className="flex items-center gap-1.5 text-micro uppercase tracking-[0.1em] text-text-primary/50">
                      <Icon className="w-3 h-3" strokeWidth={2} />
                      {label}
                    </span>
                    <span className="font-brand text-h3 text-text-primary numeric">
                      {value}
                      <span className="text-small text-text-primary/60 ml-1 font-normal">{unit}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Alerts + secondary */}
          <Card padded={false}>
            <div className="border-l-4 border-text-accent bg-accent-soft px-5 py-4">
              <div className="text-micro uppercase tracking-[0.1em] text-text-muted mb-1">
                Yellow warning · Rain
              </div>
              <div className="font-brand text-label text-text-body leading-snug">
                South-east England · until 18:00 GMT
              </div>
              <p className="text-small text-text-muted mt-2 leading-snug">
                Persistent rain may lead to surface water and isolated travel disruption.
              </p>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-micro uppercase tracking-[0.1em] text-text-muted">
                  Nearby stations
                </span>
                <span className="text-small text-text-faint numeric">5 active</span>
              </div>
              <ul className="flex flex-col gap-3">
                {STATIONS.map((s) => (
                  <li key={s.name} className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-brand text-body text-text-body">{s.name}</span>
                      <span className="text-small text-text-muted">{s.condition} · {s.obs}</span>
                    </div>
                    <span className="font-brand text-h3 text-text-body numeric">{s.temp}°</span>
                  </li>
                ))}
              </ul>
              <Button variant="ghost" size="sm" className="self-start">
                See all stations <ChevronRight className="w-3.5 h-3.5 ml-1" strokeWidth={2} />
              </Button>
            </div>
          </Card>
        </section>

        {/* ---- Forecast ---- */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-brand text-h2 tracking-tight">Forecast</h2>
              <p className="text-small text-text-muted mt-1">
                Probabilistic forecast · MOGREPS ensemble · updated 14:00 GMT
              </p>
            </div>
            <div className="flex items-center gap-1 p-1 bg-surface-card border border-border rounded-sm">
              {(["24h", "7d", "14d"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRange(r)}
                  className={[
                    "px-3 h-8 rounded-sm font-brand text-small transition-colors",
                    range === r
                      ? "bg-surface-header-top text-text-primary"
                      : "text-text-muted hover:text-text-body",
                  ].join(" ")}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <Card padded={false}>
            <div className="grid grid-cols-7 divide-x divide-border">
              {FORECAST.map(({ day, date, icon: Icon, high, low, rain }, i) => (
                <div
                  key={date}
                  className={[
                    "px-4 py-5 flex flex-col items-start gap-3 transition-colors hover:bg-surface-card-muted cursor-pointer",
                    i === 0 ? "bg-surface-card-muted" : "",
                  ].join(" ")}
                >
                  <div className="flex flex-col">
                    <span className={`font-brand text-label ${i === 0 ? "text-text-body" : "text-text-body"}`}>
                      {day}
                    </span>
                    <span className="text-small text-text-muted numeric">{date}</span>
                  </div>
                  <Icon
                    className={`w-7 h-7 ${i === 0 ? "text-text-body" : "text-text-muted"}`}
                    strokeWidth={1.6}
                  />
                  <div className="flex items-baseline gap-2 numeric">
                    <span className="font-brand text-h3 text-text-body">{high}°</span>
                    <span className="text-small text-text-faint">{low}°</span>
                  </div>
                  <div className="w-full">
                    <div className="flex items-center gap-1.5 text-small text-text-muted mb-1">
                      <Droplets className="w-3 h-3" strokeWidth={2} />
                      <span className="numeric">{rain}%</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-text-accent"
                        style={{ width: `${rain}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* ---- Parameters grid ---- */}
        <section className="mb-10">
          <div className="flex items-end justify-between mb-4">
            <div>
              <h2 className="font-brand text-h2 tracking-tight">Parameters</h2>
              <p className="text-small text-text-muted mt-1">
                Live observed values · Heathrow reference station
              </p>
            </div>
            <Button variant="secondary" size="sm">Export CSV</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-md overflow-hidden border border-border">
            {PARAMETERS.map(({ label, value, unit, detail, icon: Icon }) => (
              <div key={label} className="bg-surface-card p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-micro uppercase tracking-[0.1em] text-text-muted">
                    {label}
                  </span>
                  <Icon className="w-4 h-4 text-text-faint" strokeWidth={1.8} />
                </div>
                <div className="flex items-baseline gap-1 numeric">
                  <span className="font-brand text-h1 tracking-tight text-text-body">{value}</span>
                  <span className="text-small text-text-muted">{unit}</span>
                </div>
                <span className="text-small text-text-muted">{detail}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ---- DS reference footer ---- */}
        <section>
          <Card title="Design system — tokens in use" trailing={
            <Link
              to="/docs"
              className="inline-flex items-center gap-1.5 text-small font-medium text-text-body hover:text-text-accent transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" strokeWidth={2} />
              View full documentation
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
            </Link>
          }>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <TokenSwatch name="surface.header.top" hex="#1D1D1D" dark />
              <TokenSwatch name="surface.header.bottom" hex="#2A2A2A" dark />
              <TokenSwatch name="surface.action.secondary" hex="#E0E0E0" />
              <TokenSwatch name="text.accent" hex="#B9DC0C" />
              <TokenSwatch name="text.primary" hex="#F8F9FA" />
              <TokenSwatch name="text.inverse" hex="#1D1D1D" dark />
              <TokenLine name="font.size.nav" value="21px" />
              <TokenLine name="radius.sm" value="5px" />
            </div>
            <p className="text-small text-text-muted mt-5 leading-snug">
              Tokens marked <span className="font-brand text-text-body">TODO</span> in
              <span className="font-brand text-text-body"> /met-office/src/index.css</span> are
              app-body extensions not yet codified in the DS — surface.page, surface.card,
              text.muted, type ramp, and the spacing scale. Promote them when the DS expands
              beyond the header.
            </p>
          </Card>
        </section>

        <footer className="mt-12 pt-6 border-t border-border flex items-center justify-between text-small text-text-muted">
          <span>Met Office · Crown copyright 2026 · Data shown is illustrative</span>
          <span className="numeric">Build a8c2f · 2026-11-18</span>
        </footer>
      </main>
    </div>
  );
}

/* --- inline helpers, kept local to the screen --- */

function TokenSwatch({ name, hex, dark }: { name: string; hex: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-sm border border-border shrink-0"
        style={{ background: hex }}
      />
      <div className="flex flex-col min-w-0">
        <span className="font-brand text-small text-text-body truncate">{name}</span>
        <span className="text-micro text-text-muted numeric">{hex}{dark ? " · dark" : ""}</span>
      </div>
    </div>
  );
}

function TokenLine({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-sm border border-border bg-surface-card-muted shrink-0 flex items-center justify-center">
        <span className="text-micro text-text-muted numeric">{value}</span>
      </div>
      <div className="flex flex-col min-w-0">
        <span className="font-brand text-small text-text-body truncate">{name}</span>
        <span className="text-micro text-text-muted numeric">{value}</span>
      </div>
    </div>
  );
}