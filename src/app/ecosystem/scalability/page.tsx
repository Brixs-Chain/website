import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Cpu,
  Gauge,
  GitBranch,
  Layers,
  Network,
  Route,
  Timer,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Scalability | Brixs Chain",
  description:
    "Brixs scales horizontally through parallel execution — high throughput, fast finality, and low latency without bottlenecks or centralized constraints.",
};

const features: [typeof Zap, string, string][] = [
  [Layers, "Parallel execution", "Transactions touching independent state objects execute in parallel, eliminating network congestion."],
  [Cpu, "Native EVM model", "An EVM-compatible execution engine runs contracts without sequential bottlenecks."],
  [GitBranch, "Localized state locking", "Only the state a transaction touches is locked, keeping unrelated work moving."],
  [Route, "Dynamic load routing", "Work is routed across the network to balance load and avoid hot spots."],
  [Timer, "Sub-second propagation", "Blocks and state updates propagate across validators in under a second."],
  [Workflow, "Horizontal scaling", "The network grows by adding capacity, not by raising fees or centralizing control."],
];

export default function ScalabilityPage() {
  return (
    <main className="brx-page" style={{ "--accent": "#00d395" } as React.CSSProperties}>
      {/* HERO — centered */}
      <section className="brx-h-center">
        <div className="brx-h-center-bg" aria-hidden="true">
          <video src="/assets/official/model-10.mp4" autoPlay muted loop playsInline />
        </div>
        <span className="brx-ph-eyebrow">
          <Gauge size={14} /> Ecosystem · Scalability
        </span>
        <h1>
          Scale without <em>ceilings.</em>
        </h1>
        <p className="brx-ph-lead">
          Horizontal scaling via parallel execution. Brixs is engineered for
          infrastructure growth without bottlenecks or centralized constraints —
          high throughput, fast finality, and low latency by design.
        </p>
        <div className="brx-ph-actions">
          <a className="brx-btn accent" href="https://docs.brixs.space/platform/overview" target="_blank" rel="noopener noreferrer">
            View architecture <ArrowRight size={16} />
          </a>
          <Link className="brx-btn-line" href="/developers/infrastructure">
            Explore infrastructure <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="brx-ph-stats">
          {[["~2,500", "TPS throughput"], ["~2s", "Block finality"], ["15+", "Active validators"]].map(([v, l]) => (
            <div className="brx-stat" key={l}>
              <b>{v}</b>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* METRICS */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Deterministic performance</p>
          <h2>Benchmarked, not promised.</h2>
        </div>
        <div className="brx-metrics">
          {[["~2,500 TPS", "Sustained throughput"], ["~2s", "Time to finality"], ["8s", "End-to-end latency"]].map(([v, l]) => (
            <div className="brx-metric" key={l}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* FEATURE — rows */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">How it scales</p>
          <h2>Parallel by design.</h2>
          <p>
            Unlike chains that process transactions sequentially, Brixs runs a
            native EVM execution model where independent work moves at once.
          </p>
        </div>
        <div className="brx-frows">
          {features.map(([Ico, title, desc], i) => (
            <div className="brx-frow" key={title}>
              <small>{String(i + 1).padStart(2, "0")}</small>
              <p>
                {title}
                <span style={{ display: "block", fontSize: 14, fontWeight: 400, color: "#59606a", marginTop: 4, letterSpacing: 0 }}>{desc}</span>
              </p>
              <span className="brx-frow-ico"><Ico size={20} /></span>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY — mosaic */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Visual surface</p>
          <h2>Scaling in the system.</h2>
        </div>
        <div className="brx-gmosaic">
          {[
            ["/assets/3d-assets/graph-chart.png", "Throughput scaling"],
            ["/assets/3d-assets/parallel-execution.jpg", "Parallel execution"],
            ["/assets/3d-assets/gas-optimization.jpg", "Gas optimization"],
          ].map(([src, cap]) => (
            <figure className="brx-shot" key={src}>
              <Image src={src} alt={cap} width={1200} height={900} />
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* BAND — split */}
      <section className="brx-band-split" style={{ "--i": "#0f1115" } as React.CSSProperties}>
        <div>
          <p className="brx-eyebrow">No bottlenecks</p>
          <h2>Growth without congestion.</h2>
        </div>
        <p>
          Transactions touching independent state objects execute in parallel,
          entirely eliminating network congestion. Localized state locking,
          dynamic load routing, and sub-second propagation let the network add
          capacity horizontally — so throughput scales without raising fees or
          centralizing control.
        </p>
      </section>

      {/* CTA */}
      <section className="brx-cta" style={{ background: "#00d395", color: "#06121f" }}>
        <p className="brx-kicker" style={{ color: "rgba(6,18,31,.7)" }}><b /> The Brixs network</p>
        <h2>
          Build at global <em>scale.</em>
        </h2>
        <nav>
          <a className="brx-btn" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer" style={{ background: "#06121f", color: "#fff" }}>
            Start building <ArrowRight size={16} />
          </a>
          <Link className="brx-btn" href="/ecosystem/tokenomics" style={{ background: "#fff", color: "#06121f" }}>
            Explore tokenomics <Boxes size={16} />
          </Link>
        </nav>
      </section>

      <BrxFooter />
    </main>
  );
}
