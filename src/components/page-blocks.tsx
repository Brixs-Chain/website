import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeInfo,
  Blocks,
  BookOpen,
  Boxes,
  Coins,
  Cpu,
  Database,
  Gauge,
  GitMerge,
  Globe2,
  KeyRound,
  Layers3,
  Lock,
  MessageSquareMore,
  Network,
  Route,
  Server,
  ShieldCheck,
  Sparkles,
  WalletCards,
  Workflow,
  Zap,
} from "lucide-react";
import type { MediaItem, SitePage } from "@/lib/site";
import type { Block } from "@/lib/layouts";

type GroupMeta = {
  icon: typeof Layers3;
  label: string;
  lead: string;
  cta: string;
  href: string;
};

export const groupMeta: Record<SitePage["group"], GroupMeta> = {
  solutions: { icon: Layers3, label: "Solutions", lead: "Execution, liquidity, wallets, and launch tooling.", cta: "Open solution stack", href: "/solutions/l2-chain" },
  "use-cases": { icon: Sparkles, label: "Use cases", lead: "Payments, RWAs, stablecoins, and agentic systems.", cta: "See live use cases", href: "/use-cases/payments" },
  docs: { icon: BookOpen, label: "Docs", lead: "Protocol pages for builders who want the architecture first.", cta: "Read the docs", href: "/docs/core-brixs-chain" },
  community: { icon: MessageSquareMore, label: "Community", lead: "Support, events, governance, and public discussion.", cta: "Join the community", href: "/community/support" },
  "use-brixs": { icon: WalletCards, label: "Use Brixs", lead: "Wallet, portal, staking, airdrops, and scan.", cta: "Open Brixs products", href: "/use-brixs/wallet" },
  company: { icon: BadgeInfo, label: "Company", lead: "About, vision, whitepaper, contact, and brand story.", cta: "View company pages", href: "/company/about" },
  legal: { icon: ShieldCheck, label: "Legal", lead: "Terms and privacy, kept simple and centralized.", cta: "Read legal", href: "/legal" },
};

const ICONS = [Layers3, Network, ShieldCheck, Zap, Cpu, Boxes, GitMerge, Coins, Workflow, Globe2, Lock, Activity, Database, Server, Gauge, Route, KeyRound, Blocks];
const pick = (i: number) => ICONS[i % ICONS.length];

function titleEm(title: string) {
  const words = title.trim().split(" ");
  if (words.length < 2) return <em>{title}</em>;
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <em>{last}</em>
    </>
  );
}

function Media({ item, priority }: { item: MediaItem; priority?: boolean }) {
  if (item.type === "video") {
    return <video src={item.src} autoPlay muted loop playsInline aria-label={item.alt} />;
  }
  return <Image src={item.src} alt={item.alt} width={1200} height={900} priority={priority} />;
}

function Head({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="brx-section-head">
      <p className="brx-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

function HeroCopy({ page, meta, dark }: { page: SitePage; meta: GroupMeta; dark?: boolean }) {
  const MetaIcon = meta.icon;
  return (
    <div className="brx-rise">
      <span className="brx-ph-eyebrow">
        <MetaIcon size={14} /> {meta.label}
      </span>
      <h1>{titleEm(page.title)}</h1>
      <p className="brx-ph-lead">{page.summary}</p>
      <div className="brx-ph-actions">
        <Link className="brx-btn accent" href={meta.href}>
          {meta.cta} <ArrowRight size={16} />
        </Link>
        {dark ? (
          <Link className="brx-btn" href="/" style={{ background: "#fff", color: "#06121f" }}>
            Overview <ArrowUpRight size={16} />
          </Link>
        ) : (
          <Link className="brx-btn-line" href="/">
            Back to overview <ArrowUpRight size={16} />
          </Link>
        )}
      </div>
      <div className="brx-ph-stats">
        {page.stats.map(([value, label]) => (
          <div className="brx-stat" key={label + value}>
            <b>{value}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- HERO VARIANTS ---------------- */
function HeroSplitArt({ page, meta, flip }: { page: SitePage; meta: GroupMeta; flip?: boolean }) {
  const MetaIcon = meta.icon;
  return (
    <section className={`brx-ph-hero${flip ? " flip" : ""}`}>
      <HeroCopy page={page} meta={meta} />
      <div className="brx-ph-art" aria-hidden="true">
        <div className="brx-ph-grid" />
        <div className="brx-ph-orbit o1" />
        <div className="brx-ph-orbit o2" />
        <div className="brx-ph-orbit o3" />
        <div className="brx-ph-disc">
          <Media item={page.media} priority />
        </div>
        <div className="brx-ph-chip c1"><MetaIcon size={18} /></div>
        <div className="brx-ph-chip c2"><Network size={18} /></div>
        <div className="brx-ph-readout">
          <span>LIVE NETWORK</span>
          <strong>BRX / {page.motif}</strong>
          <i />
        </div>
      </div>
    </section>
  );
}

function HeroSplitMedia({ page, meta, flip }: { page: SitePage; meta: GroupMeta; flip?: boolean }) {
  return (
    <section className={`brx-h-media${flip ? " flip" : ""}`}>
      <HeroCopy page={page} meta={meta} />
      <div className="brx-h-media-frame">
        <Media item={page.media} priority />
        <span className="brx-tag">BRX / {page.motif}</span>
      </div>
    </section>
  );
}

function HeroCentered({ page, meta }: { page: SitePage; meta: GroupMeta }) {
  const MetaIcon = meta.icon;
  return (
    <section className="brx-h-center">
      <div className="brx-h-center-bg" aria-hidden="true"><Media item={page.media} priority /></div>
      <span className="brx-ph-eyebrow"><MetaIcon size={14} /> {meta.label}</span>
      <h1>{titleEm(page.title)}</h1>
      <p className="brx-ph-lead">{page.summary}</p>
      <div className="brx-ph-actions">
        <Link className="brx-btn accent" href={meta.href}>{meta.cta} <ArrowRight size={16} /></Link>
        <Link className="brx-btn-line" href="/">Back to overview <ArrowUpRight size={16} /></Link>
      </div>
      <div className="brx-ph-stats">
        {page.stats.map(([v, l]) => (
          <div className="brx-stat" key={l + v}><b>{v}</b><span>{l}</span></div>
        ))}
      </div>
    </section>
  );
}

function HeroStage({ page, meta }: { page: SitePage; meta: GroupMeta }) {
  const MetaIcon = meta.icon;
  return (
    <section className="brx-h-stage">
      <div className="brx-h-stage-media" aria-hidden="true"><Media item={page.media} priority /></div>
      <div className="brx-rise">
        <span className="brx-ph-eyebrow"><MetaIcon size={14} /> {meta.label}</span>
        <h1>{titleEm(page.title)}</h1>
        <p className="brx-ph-lead">{page.summary}</p>
        <div className="brx-ph-actions">
          <Link className="brx-btn accent" href={meta.href}>{meta.cta} <ArrowRight size={16} /></Link>
          <Link className="brx-btn" href="/" style={{ background: "#fff", color: "#06121f" }}>Overview <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}

function HeroMosaic({ page, meta, flip }: { page: SitePage; meta: GroupMeta; flip?: boolean }) {
  const tiles = page.gallery.slice(0, 2);
  return (
    <section className={`brx-h-mosaic${flip ? " flip" : ""}`}>
      <HeroCopy page={page} meta={meta} />
      <div className="brx-h-mosaic-grid" aria-hidden="true">
        <figure><Media item={page.media} priority /></figure>
        {tiles.map((s, i) => (
          <figure key={s.src + i}><Media item={s} /></figure>
        ))}
      </div>
    </section>
  );
}

/* ---------------- BAND VARIANTS ---------------- */
function Band({ page, variant }: { page: SitePage; variant: string }) {
  if (variant === "marquee") {
    const words = [page.motif, page.eyebrow, page.group.replace("-", " "), "Brixs Chain"];
    const run = [...words, ...words, ...words];
    return (
      <section className="brx-marquee" aria-hidden="true">
        <div className="brx-marquee-track">
          {run.map((w, i) => (
            <span key={i}>{w} <i>/</i></span>
          ))}
        </div>
      </section>
    );
  }
  if (variant === "split" || variant === "split-accent") {
    return (
      <section className={`brx-band-split${variant === "split-accent" ? " accent" : ""}`}>
        <div>
          <p className="brx-eyebrow">{page.eyebrow}</p>
          <h2>{page.summary}</h2>
        </div>
        <p>{page.detail}</p>
      </section>
    );
  }
  return (
    <section className={`brx-band${variant === "dark" ? " dark" : ""}`}>
      <p className="brx-kicker"><b /> {page.eyebrow}</p>
      <h2>{page.summary}</h2>
      <p>{page.detail}</p>
    </section>
  );
}

/* ---------------- FEATURE VARIANTS ---------------- */
function Feature({ page, variant, gray }: { page: SitePage; variant: string; gray?: boolean }) {
  const meta = groupMeta[page.group];
  const eyebrow = "What this unlocks";
  if (variant === "rows") {
    return (
      <section className={`brx-section${gray ? " gray" : ""}`}>
        <Head eyebrow={eyebrow} title={meta.lead} />
        <div className="brx-frows">
          {page.bullets.map((b, i) => {
            const Ico = pick(i + 3);
            return (
              <div className="brx-frow" key={b}>
                <small>{String(i + 1).padStart(2, "0")}</small>
                <p>{b}</p>
                <span className="brx-frow-ico"><Ico size={20} /></span>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  if (variant === "matrix") {
    return (
      <section className={`brx-section${gray ? " gray" : ""}`}>
        <Head eyebrow={eyebrow} title={meta.lead} />
        <div className="brx-fmatrix">
          {page.bullets.map((b, i) => {
            const Ico = pick(i + 1);
            return (
              <div className="brx-fcell" key={b}>
                <span className="brx-fcell-ico"><Ico size={22} /></span>
                <p>{b}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  if (variant === "pillars") {
    return (
      <section className={`brx-section${gray ? " gray" : ""}`}>
        <Head eyebrow={eyebrow} title={meta.lead} />
        <div className="brx-pillars">
          {page.bullets.map((b, i) => {
            const Ico = pick(i + 5);
            return (
              <div className="brx-pillar" key={b}>
                <span className="brx-pillar-ico"><Ico size={24} /></span>
                <p>{b}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  if (variant === "split") {
    return (
      <section className={`brx-section${gray ? " gray" : ""}`}>
        <div className="brx-fsplit">
          <div className="brx-fsplit-title">
            <p className="brx-eyebrow">{eyebrow}</p>
            <h2 style={{ fontSize: "clamp(28px,3vw,46px)", lineHeight: 0.95, letterSpacing: "-0.05em", margin: "16px 0 0" }}>{meta.lead}</h2>
          </div>
          <div className="brx-fsplit-list">
            {page.bullets.map((b, i) => (
              <div className="brx-fsplit-item" key={b}>
                <b>{String(i + 1).padStart(2, "0")}</b>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  // cards (default)
  return (
    <section className={`brx-section${gray ? " gray" : ""}`}>
      <Head eyebrow={eyebrow} title={meta.lead} />
      <div className="brx-cap-grid">
        {page.bullets.map((b, i) => (
          <article className="brx-cap" key={b}>
            <span className="brx-cap-bar" />
            <small>{String(i + 1).padStart(2, "0")}</small>
            <p>{b}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- GALLERY VARIANTS ---------------- */
function Gallery({ page, variant, gray }: { page: SitePage; variant: string; gray?: boolean }) {
  const shots = page.gallery;
  if (shots.length === 0) return null;
  const head = <Head eyebrow="Visual surface" title={<>{page.title} in the system</>} sub="Distinct compositions drawn from the Brixs 3D asset library — every page reads like its own chapter." />;
  if (variant === "band") {
    const hero = page.media.type === "video" ? page.media : shots[0];
    return (
      <section className={`brx-section${gray ? " gray" : ""}`}>
        {head}
        <div className="brx-gband">
          <Media item={hero} />
          <span className="brx-gband-cap">{page.motif} — live surface</span>
        </div>
      </section>
    );
  }
  if (variant === "mosaic") {
    return (
      <section className={`brx-section${gray ? " gray" : ""}`}>
        {head}
        <div className="brx-gmosaic">
          {shots.map((s) => (
            <figure className="brx-shot" key={s.src + (s.caption ?? "")}>
              <Media item={s} />
              {s.caption && <figcaption>{s.caption}</figcaption>}
            </figure>
          ))}
        </div>
      </section>
    );
  }
  if (variant === "strip") {
    return (
      <section className={`brx-section${gray ? " gray" : ""}`}>
        {head}
        <div className="brx-gstrip">
          {[page.media, ...shots].map((s, i) => (
            <figure className="brx-shot" key={s.src + i}>
              <Media item={s} />
              {"caption" in s && s.caption && <figcaption>{s.caption}</figcaption>}
            </figure>
          ))}
        </div>
      </section>
    );
  }
  // trio / feature
  return (
    <section className={`brx-section${gray ? " gray" : ""}`}>
      {head}
      <div className={`brx-gallery${variant === "feature" ? " feature" : ""}`}>
        {shots.map((s) => (
          <figure className="brx-shot" key={s.src + (s.caption ?? "")}>
            <Media item={s} />
            {s.caption && <figcaption>{s.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------------- METRICS ---------------- */
function Metrics({ page, gray }: { page: SitePage; gray?: boolean }) {
  return (
    <section className={`brx-section${gray ? " gray" : ""}`}>
      <Head eyebrow="By the numbers" title="Built on hard targets." />
      <div className="brx-metrics">
        {page.stats.map(([v, l]) => (
          <div className="brx-metric" key={l + v}><b>{v}</b><span>{l}</span></div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CODE / TERMINAL ---------------- */
function CodePanel({ page, block, gray }: { page: SitePage; block: Extract<Block, { type: "code" }>; gray?: boolean }) {
  const meta = groupMeta[page.group];
  return (
    <section className={`brx-section${gray ? " gray" : ""}`}>
      <div className="brx-codewrap">
        <div>
          <p className="brx-eyebrow">Builder surface</p>
          <h2 style={{ fontSize: "clamp(28px,3.2vw,52px)", lineHeight: 0.95, letterSpacing: "-0.05em", margin: "16px 0 22px" }}>Ship against a real interface.</h2>
          <div className="brx-fsplit-list">
            {page.bullets.slice(0, 3).map((b, i) => (
              <div className="brx-fsplit-item" key={b}><b>{String(i + 1).padStart(2, "0")}</b><p>{b}</p></div>
            ))}
          </div>
        </div>
        <div className="brx-code">
          <div className="brx-code-bar">
            <i /><i /><i />
            <span>{block.file ?? `${meta.label.toLowerCase()}.ts`}</span>
          </div>
          <pre>
            {block.lines.map((line, i) => (
              <div key={i} className={line.trimStart().startsWith("//") ? "c" : undefined}>{line === "" ? " " : line}</div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TIMELINE ---------------- */
function Timeline({ page, block, gray }: { page: SitePage; block: Extract<Block, { type: "timeline" }>; gray?: boolean }) {
  return (
    <section className={`brx-section${gray ? " gray" : ""}`}>
      <Head eyebrow="The path" title="How it comes together." />
      <div className="brx-timeline">
        {block.steps.map((s) => (
          <div className="brx-tstep" key={s.phase}>
            <b>{s.phase}</b>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- RELATED ---------------- */
function Related({ page, siblings, gray }: { page: SitePage; siblings: SitePage[]; gray?: boolean }) {
  const meta = groupMeta[page.group];
  const related = siblings.slice(0, 4);
  if (related.length === 0) return null;
  return (
    <section className={`brx-section${gray ? " gray" : ""}`}>
      <Head eyebrow="Keep exploring" title={<>More in {meta.label}</>} />
      <div className="brx-related-grid">
        {related.map((item) => (
          <Link className="brx-related" key={item.path.join("/")} href={`/${item.path.join("/")}`}>
            <div>
              <b>{item.title}</b>
              <span>{item.eyebrow}</span>
            </div>
            <ArrowRight size={18} />
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA VARIANTS ---------------- */
function Cta({ page, variant }: { page: SitePage; variant: string }) {
  const meta = groupMeta[page.group];
  if (variant === "split") {
    return (
      <section className="brx-cta-split">
        <div>
          <p className="brx-eyebrow" style={{ color: "var(--accent)" }}>The Brixs network</p>
          <h2>Build on {titleEm(page.title)}.</h2>
        </div>
        <div>
          <Link className="brx-btn" href={meta.href} style={{ background: "#06121f", color: "#fff" }}>{meta.cta} <ArrowRight size={16} /></Link>
          <a className="brx-btn-line" href="mailto:hello@brixs.space" style={{ borderColor: "#06121f", color: "#06121f" }}>Talk to the team <ArrowUpRight size={16} /></a>
        </div>
      </section>
    );
  }
  const accent = variant === "accent";
  return (
    <section className="brx-cta" style={accent ? { background: page.accent, color: "#06121f" } : undefined}>
      <p className="brx-kicker" style={{ color: accent ? "rgba(6,18,31,.7)" : "rgba(255,255,255,.7)" }}><b /> The Brixs network</p>
      <h2>Build on {titleEm(page.title)}.</h2>
      <nav>
        <Link className="brx-btn accent" href={meta.href} style={accent ? { background: "#06121f", color: "#fff" } : undefined}>{meta.cta} <ArrowRight size={16} /></Link>
        <a className="brx-btn" href="mailto:hello@brixs.space" style={{ background: "#fff", color: "#06121f" }}>Talk to the team <Boxes size={16} /></a>
      </nav>
    </section>
  );
}

/* ---------------- RENDERER ---------------- */
export function renderBlock(block: Block, page: SitePage, siblings: SitePage[], key: number) {
  const meta = groupMeta[page.group];
  const gray = key % 2 === 1;
  switch (block.type) {
    case "hero":
      if (block.variant === "split-media") return <HeroSplitMedia key={key} page={page} meta={meta} flip={block.flip} />;
      if (block.variant === "centered") return <HeroCentered key={key} page={page} meta={meta} />;
      if (block.variant === "stage") return <HeroStage key={key} page={page} meta={meta} />;
      if (block.variant === "mosaic") return <HeroMosaic key={key} page={page} meta={meta} flip={block.flip} />;
      return <HeroSplitArt key={key} page={page} meta={meta} flip={block.flip} />;
    case "band":
      return <Band key={key} page={page} variant={block.variant} />;
    case "feature":
      return <Feature key={key} page={page} variant={block.variant} gray={gray} />;
    case "gallery":
      return <Gallery key={key} page={page} variant={block.variant} gray={gray} />;
    case "metrics":
      return <Metrics key={key} page={page} gray={gray} />;
    case "code":
      return <CodePanel key={key} page={page} block={block} gray={gray} />;
    case "timeline":
      return <Timeline key={key} page={page} block={block} gray={gray} />;
    case "related":
      return <Related key={key} page={page} siblings={siblings} gray={gray} />;
    case "cta":
      return <Cta key={key} page={page} variant={block.variant} />;
    default:
      return null;
  }
}
