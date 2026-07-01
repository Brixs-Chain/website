import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Box,
  Boxes,
  Database,
  Diamond,
  Layers,
  Lock,
  Server,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Model | Brixs Chain",
  description:
    "Brixs redesigns blockchain state around isolated objects — object-centric ownership, parallel state transitions, and storage built for scalable execution.",
};

const features: [typeof Database, string, string][] = [
  [Database, "Object ID", "Every unit of state carries a unique object identifier instead of living inside a shared global account."],
  [Box, "Direct ownership", "Ownership is assigned to individual objects, isolating state and unlocking speed and security."],
  [Layers, "Metadata & state", "Objects hold their own metadata and state, so lookups are fast and conflict-free."],
  [Lock, "Access permissions", "Per-object access rules replace global account contention and shared-state locks."],
  [Activity, "Parallel transitions", "Object A, B, and C changes execute simultaneously through a conflict-aware transition engine."],
  [Server, "Execution history", "Each object keeps its own execution history for independent, verifiable state writes."],
];

export default function DataModelPage() {
  return (
    <main className="brx-page" style={{ "--accent": "#00d395" } as React.CSSProperties}>
      {/* HERO */}
      <section className="brx-ph-hero">
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Diamond size={14} /> Solutions · Data Model
          </span>
          <h1>
            State built for <em>movement.</em>
          </h1>
          <p className="brx-ph-lead">
            Brixs introduces a new blockchain data architecture optimized for
            scalable execution, object-based ownership, and parallel state
            transitions — blockchain state designed for movement, not storage.
          </p>
          <div className="brx-ph-actions">
            <Link className="brx-btn accent" href="/solutions/architecture">
              Explore architecture <ArrowRight size={16} />
            </Link>
            <a className="brx-btn-line" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
              Read protocol docs <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="brx-ph-stats">
            {[["2ms", "State lookup"], ["1000", "Parallel writes"], ["80%", "Compression ratio"]].map(([v, l]) => (
              <div className="brx-stat" key={l}>
                <b>{v}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="brx-ph-art" aria-hidden="true">
          <div className="brx-ph-grid" />
          <div className="brx-ph-orbit o1" />
          <div className="brx-ph-orbit o2" />
          <div className="brx-ph-orbit o3" />
          <div className="brx-ph-disc">
            <video src="/assets/official/model-4.mp4" autoPlay muted loop playsInline />
          </div>
          <div className="brx-ph-chip c1"><Database size={18} /></div>
          <div className="brx-ph-chip c2"><Box size={18} /></div>
          <div className="brx-ph-readout">
            <span>LIVE NETWORK</span>
            <strong>BRX / DATA</strong>
            <i />
          </div>
        </div>
      </section>

      {/* FEATURES — object-centric model */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Object-centric architecture</p>
          <h2>Everything becomes an object.</h2>
          <p>
            Instead of managing accounts globally, Brixs assigns ownership
            directly to individual blockchain objects — isolating state so
            transitions execute independently.
          </p>
        </div>
        <div className="brx-fmatrix">
          {features.map(([Ico, title, desc]) => (
            <div className="brx-fcell" key={title}>
              <span className="brx-fcell-ico"><Ico size={22} /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CODE — object-centric state representation */}
      <section className="brx-section gray">
        <div className="brx-codewrap">
          <div className="brx-section-head" style={{ margin: 0, textAlign: "left" }}>
            <p className="brx-eyebrow">State representation</p>
            <h2>Object-centric state.</h2>
            <p>
              Each object owns its identity, owner, metadata, and state. Storage
              lanes write independently — no global lock, no shared-state
              conflicts, no sequential bottleneck.
            </p>
          </div>
          <div className="brx-code">
            <div className="brx-code-bar">
              <i /><i /><i />
              <span>state.ts</span>
            </div>
            <pre>
{`interface BrixsObject {
  `}<span className="k">id</span>{`: ObjectId;        `}<span className="c">// unique object identifier</span>{`
  `}<span className="k">owner</span>{`: Address;        `}<span className="c">// object-level ownership</span>{`
  `}<span className="k">state</span>{`: Bytes;          `}<span className="c">// isolated, per-object state</span>{`
  `}<span className="k">metadata</span>{`: Metadata;
  `}<span className="k">permissions</span>{`: AccessRule[];
  `}<span className="k">history</span>{`: ExecutionLog;
}

`}<span className="c">// parallel, conflict-aware transitions</span>{`
`}<span className="k">function</span>{` transition(objs: BrixsObject[]) {
  `}<span className="k">return</span>{` runParallel(objs, {
    lanes: [`}<span className="k">"A"</span>{`, `}<span className="k">"B"</span>{`, `}<span className="k">"C"</span>{`, `}<span className="k">"D"</span>{`],
    conflicts: `}<span className="k">"aware"</span>{`,
    lock: `}<span className="k">"none"</span>{`,
  });
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Visual surface</p>
          <h2>The data model in the system.</h2>
        </div>
        <div className="brx-gmosaic">
          {[
            ["/assets/3d-assets/data-prism.png", "Object state prism"],
            ["/assets/3d-assets/cube-01.png", "Isolated objects"],
            ["/assets/3d-assets/validator-mesh.png", "Data availability mesh"],
          ].map(([src, cap]) => (
            <figure className="brx-shot" key={src}>
              <Image src={src} alt={cap} width={1200} height={900} />
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="brx-cta" style={{ background: "#00d395", color: "#06121f" }}>
        <p className="brx-kicker" style={{ color: "rgba(6,18,31,.7)" }}><b /> Better data architecture</p>
        <h2>
          Brixs redefines blockchain <em>memory.</em>
        </h2>
        <nav>
          <Link className="brx-btn" href="/developers/infrastructure">
            Explore infrastructure <ArrowRight size={16} />
          </Link>
          <a className="brx-btn" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer" style={{ background: "#fff", color: "#06121f" }}>
            Read protocol docs <Boxes size={16} />
          </a>
        </nav>
      </section>

      <BrxFooter />
    </main>
  );
}
