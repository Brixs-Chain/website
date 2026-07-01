import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Cpu,
  Server,
  ShieldCheck,
  Database,
  Boxes,
  Network,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Architecture | Brixs Chain",
  description:
    "Brixs is an Ethereum-native Layer 2 that unifies execution, settlement, liquidity, and user experience into one scalable infrastructure stack.",
};

const layers: [string, string, typeof Layers][] = [
  ["01", "Application Layer — where products and users meet the network.", Boxes],
  ["02", "Execution Layer — parallel, conflict-aware transaction execution.", Cpu],
  ["03", "Liquidity Layer — unified vault and cross-chain routing.", Network],
  ["04", "Infrastructure Layer — sequencing, RPC, and the public surface.", Server],
  ["05", "Settlement Layer — every state transition finalized on Ethereum.", ShieldCheck],
];

export default function ArchitecturePage() {
  return (
    <main className="brx-page" style={{ "--accent": "#00d395" } as React.CSSProperties}>
      {/* HERO */}
      <section className="brx-h-stage">
        <div className="brx-h-stage-media">
          <video src="/assets/official/model-3.mp4" autoPlay muted loop playsInline />
        </div>
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Layers size={14} /> Solutions · Architecture
          </span>
          <h1>
            The infrastructure layer beneath <em>on-chain systems.</em>
          </h1>
          <p className="brx-ph-lead">
            Brixs is an Ethereum-native Layer 2 built to unify execution,
            liquidity, and user experience into one scalable infrastructure
            stack — removing the complexity of fragmented networks.
          </p>
          <div className="brx-ph-actions">
            <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
              Read technical docs <ArrowRight size={16} />
            </a>
            <Link className="brx-btn" href="/" style={{ background: "#fff", color: "#06121f" }}>
              Back to overview <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="brx-section">
        <div className="brx-metrics">
          {[["10,000+", "TPS throughput"], ["~2s", "Finality"], ["$0.0001", "Gas cost"]].map(([v, l]) => (
            <div className="brx-metric" key={l}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE LAYERS */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">The stack</p>
          <h2>Five layers. One unified execution system.</h2>
          <p>Execution, settlement, data availability, wallet abstraction, and liquidity routing in one stack.</p>
        </div>
        <div className="brx-frows">
          {layers.map(([n, title, Ico]) => {
            const [head, ...rest] = title.split(" — ");
            return (
              <div className="brx-frow" key={n}>
                <small>{n}</small>
                <p>
                  {head}
                  <span style={{ display: "block", fontSize: 14, fontWeight: 400, color: "#59606a", marginTop: 4, letterSpacing: 0 }}>{rest.join(" — ")}</span>
                </p>
                <span className="brx-frow-ico"><Ico size={20} /></span>
              </div>
            );
          })}
        </div>
      </section>

      {/* GALLERY */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Inside the engine</p>
          <h2>Parallel execution, optimized for cost.</h2>
        </div>
        <div className="brx-gallery feature">
          {[
            ["/assets/3d-assets/execution-engine.png", "Brixs execution engine"],
            ["/assets/3d-assets/parallel-execution.jpg", "Parallel transaction batching"],
            ["/assets/3d-assets/gas-optimization.jpg", "Optimized gas routing"],
          ].map(([src, cap]) => (
            <figure className="brx-shot" key={src}>
              <Image src={src} alt={cap} width={1200} height={900} />
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* BAND */}
      <section className="brx-band dark">
        <p className="brx-kicker"><b /> Ethereum-secured</p>
        <h2>Ethereum secures everything.</h2>
        <p>
          Every state transition is finalized on Ethereum for maximum trust and
          decentralization — inheriting the most robust cryptographic security
          model in the world, with fast ordering and deterministic execution.
        </p>
      </section>

      {/* CTA */}
      <section className="brx-cta">
        <p className="brx-kicker" style={{ color: "rgba(255,255,255,.7)" }}><b /> Built for what comes next</p>
        <h2>
          Great products need <em>invisible infrastructure.</em>
        </h2>
        <nav>
          <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
            Build on Brixs <ArrowRight size={16} />
          </a>
          <a className="brx-btn" href="mailto:hello@brixs.space" style={{ background: "#fff", color: "#06121f" }}>
            Talk to the team <Database size={16} />
          </a>
        </nav>
      </section>

      <BrxFooter />
    </main>
  );
}
