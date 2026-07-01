import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowRight,
  ArrowUpRight,
  Lock,
  ShieldCheck,
  Layers,
  Server,
  Activity,
  KeyRound,
  Fingerprint,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security | Brixs Chain",
  description:
    "Security is the foundation of Brixs. Every infrastructure layer is secured before execution — from post-quantum cryptography to validator coordination and Ethereum settlement.",
};

const features: [typeof ShieldCheck, string, string][] = [
  [Lock, "Pre-validation architecture", "State transitions are secured before execution, so malicious code never reaches consensus."],
  [Layers, "Runtime isolation", "Every transaction runs inside a memory sandbox with strict contract isolation."],
  [Fingerprint, "Signature verification", "Digital signatures and validator proofs are verified on every state change."],
  [ShieldCheck, "Fraud prevention", "Replay, double-spend, and invalid transactions are rejected before they settle."],
  [Server, "Ethereum settlement", "Final settlement inherits Ethereum L1 security through fraud-proof guarantees."],
  [Activity, "Continuous monitoring", "Real-time telemetry watches validators, RPC, bridges, and runtime nonstop."],
];

export default function SecurityPage() {
  return (
    <main className="brx-page" style={{ "--accent": "#8c5afc" } as React.CSSProperties}>
      {/* HERO */}
      <section className="brx-h-stage">
        <div className="brx-h-stage-media">
          <video src="/assets/official/model-8.mp4" autoPlay muted loop playsInline />
        </div>
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Shield size={14} /> Developers · Security
          </span>
          <h1>
            Security is not a feature. It is <em>the foundation.</em>
          </h1>
          <p className="brx-ph-lead">
            Every layer of Brixs is designed to defend execution, protect capital,
            secure validators, and guarantee trustless infrastructure integrity —
            secured before state transitions ever occur.
          </p>
          <div className="brx-ph-actions">
            <a
              className="brx-btn accent"
              href="https://docs.brixs.space/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read security docs <ArrowRight size={16} />
            </a>
            <Link className="brx-btn" href="/" style={{ background: "#fff", color: "#06121f" }}>
              Back to overview <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES — SECURITY MODEL */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">The security model</p>
          <h2>Security exists at every layer.</h2>
          <p>
            Most chains secure transactions after execution. Brixs secures every
            infrastructure layer — from cryptography to settlement — before a state
            transition can commit.
          </p>
        </div>
        <div className="brx-pillars">
          {features.map(([Ico, title, desc]) => (
            <div className="brx-pillar" key={title}>
              <span className="brx-pillar-ico"><Ico size={24} /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BAND — CRYPTOGRAPHY STATEMENT */}
      <section className="brx-band dark">
        <p className="brx-kicker"><b /> Mathematics protects everything</p>
        <h2>Cryptography secures the network by default.</h2>
        <p>
          SHA3 hashing, Merkle proofs, digital signatures, and state-integrity
          proofs guard every transition. A post-quantum-ready cryptographic layer
          keeps validator proofs and encryption keys resilient as future
          infrastructure demands adaptive, upgradeable security.
        </p>
      </section>

      {/* METRICS */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">By the numbers</p>
          <h2>Security, measured continuously.</h2>
        </div>
        <div className="brx-metrics">
          {[
            ["6", "Secured infrastructure layers"],
            ["0", "Fraud proofs last epoch"],
            ["12ms", "Validator response time"],
          ].map(([v, l]) => (
            <div className="brx-metric" key={l}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Visual surface</p>
          <h2>Security in the system.</h2>
        </div>
        <div className="brx-gallery feature">
          {[
            ["/assets/3d-assets/secure-node.png", "Secure node"],
            ["/assets/3d-assets/validator-mesh.png", "Validator mesh"],
            ["/assets/3d-assets/protocol-core.png", "Protocol core"],
          ].map(([src, cap]) => (
            <figure className="brx-shot" key={src}>
              <Image src={src} alt={cap} width={1200} height={900} />
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="brx-cta-split">
        <div>
          <p className="brx-eyebrow" style={{ color: "rgba(255,255,255,.7)" }}>
            <KeyRound size={14} /> Trust is earned through architecture
          </p>
          <h2>
            Security defines <em>infrastructure.</em>
          </h2>
        </div>
        <div>
          <a
            className="brx-btn accent"
            href="https://docs.brixs.space/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#06121f", color: "#fff" }}
          >
            Read security docs <ArrowRight size={16} />
          </a>
          <Link className="brx-btn" href="/developers/consensus" style={{ background: "#fff", color: "#06121f" }}>
            Explore consensus <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <BrxFooter />
    </main>
  );
}
