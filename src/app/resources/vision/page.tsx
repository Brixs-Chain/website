import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import { ArrowRight, ArrowUpRight, Diamond } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision | Brixs Chain",
  description:
    "The Brixs thesis: the future internet is built around movement, not websites. Invisible infrastructure that moves value, identity, liquidity, and execution without friction.",
};

const phases = [
  ["Thesis", "Movement, not websites", "The future internet will not be built around websites. It will be built around movement — value, identity, liquidity, and execution flowing without friction."],
  ["The old internet", "Designed for information", "The internet connected communication, websites, and software, but was never designed to natively move digital ownership, capital, and value."],
  ["The new internet", "Programmable by default", "Money, identity, autonomous systems, smart contracts, stable assets, and AI agents become programmable, sovereign assets."],
  ["The core problem", "Friction remains", "Today's blockchain systems still create friction: fragmented liquidity, wallet complexity, gas barriers, and poor onboarding."],
  ["The belief", "Infrastructure should disappear", "Users should interact with products, communities, and applications — not bridging interfaces and gas fees."],
  ["The economy", "The future is movement", "Capital moves globally, identity moves seamlessly, applications execute instantly, and value travels frictionlessly."],
];

const principles = [
  ["01", "Infrastructure should disappear"],
  ["02", "Users should never manage complexity"],
  ["03", "Capital should move globally"],
  ["04", "Blockchain should feel invisible"],
  ["05", "Systems should become autonomous"],
  ["06", "Builders should move faster"],
];

const nextBillion = [
  ["Payment systems", "Future payment rails settle in the background, invisible to the user."],
  ["Invisible wallets", "Custody and keys fade behind social logins and embedded finance."],
  ["Autonomous AI", "Machines become economic participants with AI-native payments and agent economies."],
  ["Global stable assets", "Stable-value settlement layers that most users will never see."],
];

const longTerm = [
  ["2026", "Protocol launch"],
  ["2027", "Developer ecosystem expansion"],
  ["2028", "Cross-chain liquidity layer"],
  ["2029", "Institutional infrastructure"],
  ["2030", "Global internet economy integration"],
];

export default function VisionPage() {
  return (
    <main className="brx-page" style={{ "--accent": "#ff3b30" } as React.CSSProperties}>
      {/* HERO — stage */}
      <section className="brx-h-stage">
        <div className="brx-h-stage-media">
          <video src="/assets/official/model-14.mp4" autoPlay muted loop playsInline />
        </div>
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Diamond size={14} /> Resources · Vision
          </span>
          <h1>
            Built around <em>movement.</em>
          </h1>
          <p className="brx-ph-lead">
            The future internet will not be built around websites. The next
            digital economy requires infrastructure capable of moving value,
            identity, liquidity, and execution without friction.
          </p>
          <div className="brx-ph-actions">
            <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
              Read the manifesto <ArrowRight size={16} />
            </a>
            <Link className="brx-btn" href="/" style={{ background: "#fff", color: "#06121f" }}>
              Back to overview <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="brx-marquee" aria-hidden="true">
        <div className="brx-marquee-track">
          {Array.from({ length: 3 }).flatMap((_, k) =>
            ["Movement", "Invisible infrastructure", "Programmable value", "Autonomous systems", "Frictionless"].map((w, i) => (
              <span key={`${k}-${i}`}>{w} <i>/</i></span>
            )),
          )}
        </div>
      </section>

      {/* TIMELINE — the thesis unfolding */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">The thesis</p>
          <h2>From information to movement.</h2>
          <p>The internet was designed for information. Brixs is rebuilding the foundation for value.</p>
        </div>
        <div className="brx-timeline">
          {phases.map(([phase, title, text]) => (
            <div className="brx-tstep" key={phase}>
              <b>{phase}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE — principles */}
      <section className="brx-section gray">
        <div className="brx-fsplit">
          <div className="brx-fsplit-title">
            <p className="brx-eyebrow">Principles</p>
            <h2 style={{ fontSize: "clamp(28px,3vw,46px)", lineHeight: 0.95, letterSpacing: "-0.05em", margin: "16px 0 0" }}>
              Principles create the future.
            </h2>
          </div>
          <div className="brx-fsplit-list">
            {principles.map(([n, title]) => (
              <div className="brx-fsplit-item" key={n}>
                <b>{n} · {title}</b>
                <p>A commitment the protocol is built to uphold as the network evolves.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE — the next billion users */}
      <section className="brx-section">
        <div className="brx-fsplit">
          <div className="brx-fsplit-title">
            <p className="brx-eyebrow">The next billion</p>
            <h2 style={{ fontSize: "clamp(28px,3vw,46px)", lineHeight: 0.95, letterSpacing: "-0.05em", margin: "16px 0 0" }}>
              Most future users will never know blockchain exists.
            </h2>
          </div>
          <div className="brx-fsplit-list">
            {nextBillion.map(([title, desc]) => (
              <div className="brx-fsplit-item" key={title}>
                <b>{title}</b>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Visual surface</p>
          <h2>The movement layer.</h2>
        </div>
        <div className="brx-gallery feature">
          {[
            ["/assets/3d-assets/orbital-ring.png", "Brixs exists for what comes next"],
            ["/assets/3d-assets/crystal-01.png", "Programmable, sovereign assets"],
            ["/assets/3d-assets/data-prism.png", "Unified liquidity across chains"],
          ].map(([src, cap]) => (
            <figure className="brx-shot" key={src}>
              <Image src={src} alt={cap} width={1200} height={900} />
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* TIMELINE — long-term future */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">The next decade</p>
          <h2>The next decade begins now.</h2>
        </div>
        <div className="brx-timeline">
          {longTerm.map(([year, title]) => (
            <div className="brx-tstep" key={year}>
              <b>{year}</b>
              <h3>{title}</h3>
              <p>A milestone on the path to a global internet economy that operates without visible infrastructure.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="brx-cta" style={{ background: "#ff3b30", color: "#06121f" }}>
        <p className="brx-kicker" style={{ color: "rgba(6,18,31,.7)" }}><b /> The movement layer</p>
        <h2>
          The world needs <em>invisible infrastructure.</em>
        </h2>
        <nav>
          <a className="brx-btn accent" href="/resources/roadmap">
            See the roadmap <ArrowRight size={16} />
          </a>
          <a className="brx-btn" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer" style={{ background: "#fff", color: "#06121f" }}>
            Build the future <ArrowUpRight size={16} />
          </a>
        </nav>
      </section>

      <BrxFooter />
    </main>
  );
}
