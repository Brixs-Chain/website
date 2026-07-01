import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Layers,
  Workflow,
  ShieldCheck,
  Zap,
  Boxes,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Summary | Brixs Chain",
  description:
    "Brixs is an Ethereum-native infrastructure layer reimagining how value, execution, identity, and liquidity move across digital systems.",
};

const keyPoints: [string, string][] = [
  ["01", "Ethereum-native settlement anchored to the strongest decentralized trust layer available."],
  ["02", "Unified liquidity routing so capital and assets move without ecosystem borders."],
  ["03", "Account abstraction that hides wallets, gas, and bridging from users."],
  ["04", "Parallel execution built for applications that run globally without delay."],
  ["05", "Developer-first infrastructure for teams building serious systems."],
  ["06", "Modular scaling architecture that evolves without disruptive rewrites."],
];

const principles: [typeof ShieldCheck, string, string][] = [
  [Boxes, "Open by default", "Infrastructure is transparent and accessible to every builder."],
  [ShieldCheck, "Secure by default", "Ethereum security and permanent settlement guarantees underpin every layer."],
  [Zap, "Scalable by design", "Execution speed and modular scaling are foundational, not bolted on."],
  [Workflow, "Invisible experience", "Complexity is abstracted so infrastructure disappears behind products."],
  [Layers, "Global interoperability", "Value, identity, and liquidity move seamlessly across ecosystems."],
];

export default function ExecutiveSummaryPage() {
  return (
    <main className="brx-page" style={{ "--accent": "#ff3b30" } as React.CSSProperties}>
      {/* HERO — split-media */}
      <section className="brx-h-media">
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <FileText size={14} /> Resources · Executive Summary
          </span>
          <h1>
            Infrastructure designed for <em>movement.</em>
          </h1>
          <p className="brx-ph-lead">
            Brixs is an Ethereum-native infrastructure layer reimagining how
            value, execution, identity, and liquidity move across digital
            systems — the movement layer for the future internet economy.
          </p>
          <div className="brx-ph-actions">
            <a
              className="brx-btn accent"
              href="https://docs.brixs.space/platform/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read whitepaper <ArrowRight size={16} />
            </a>
            <Link className="brx-btn-line" href="/resources/roadmap">
              See the roadmap <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="brx-ph-stats">
            {[
              ["$20T", "Global digital payments"],
              ["$200B", "Stablecoin economy"],
              ["500M+", "On-chain users"],
            ].map(([v, l]) => (
              <div className="brx-stat" key={l}>
                <b>{v}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="brx-h-media-frame">
          <video src="/assets/official/model-12.mp4" autoPlay muted loop playsInline />
          <span className="brx-tag">BRX / SUMMARY</span>
        </div>
      </section>

      {/* KEY POINTS — capability grid */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">What Brixs builds</p>
          <h2>A new infrastructure layer.</h2>
          <p>
            Brixs creates one execution environment capable of unifying
            blockchain movement across ecosystems — because chains solved
            ownership, but never solved movement.
          </p>
        </div>
        <div className="brx-cap-grid">
          {keyPoints.map(([n, text]) => (
            <article className="brx-cap" key={n}>
              <span className="brx-cap-bar" />
              <small>{n}</small>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* MARKET — metrics */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Market opportunity</p>
          <h2>The next internet economy is already here.</h2>
        </div>
        <div className="brx-metrics">
          {[
            ["$20T", "Global digital payments"],
            ["$200B", "Stablecoin economy"],
            ["500M+", "On-chain users"],
          ].map(([v, l]) => (
            <div className="brx-metric" key={l}>
              <b>{v}</b>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY — trio */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Visual surface</p>
          <h2>The protocol in the system.</h2>
        </div>
        <div className="brx-gallery">
          {[
            ["/assets/3d-assets/protocol-core.png", "Protocol core"],
            ["/assets/3d-assets/orbital-ring.png", "Settlement layer"],
            ["/assets/3d-assets/data-prism.png", "Fragmented rails"],
          ].map(([src, cap]) => (
            <figure className="brx-shot" key={src}>
              <Image src={src} alt={cap} width={1200} height={900} />
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PRINCIPLES — statement band */}
      <section className="brx-band">
        <p className="brx-kicker">
          <b /> Protocol principles
        </p>
        <h2>Good infrastructure becomes invisible.</h2>
        <p>
          The best infrastructure disappears behind products people love using.
          Brixs builds the engine — open, secure, scalable, interoperable — so
          the next billion users never know they are using blockchain.
        </p>
      </section>

      {/* CTA */}
      <section
        className="brx-cta"
        style={{ background: "#ff3b30", color: "#06121f" } as React.CSSProperties}
      >
        <p className="brx-kicker" style={{ color: "rgba(6,18,31,.7)" }}>
          <b /> The Brixs network
        </p>
        <h2>
          The world needs better <em>infrastructure.</em>
        </h2>
        <nav>
          <Link className="brx-btn" href="/resources/roadmap">
            See the roadmap <ArrowRight size={16} />
          </Link>
          <a
            className="brx-btn"
            href="https://docs.brixs.space/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#fff", color: "#06121f" }}
          >
            Build on Brixs <Boxes size={16} />
          </a>
        </nav>
      </section>

      <BrxFooter />
    </main>
  );
}
