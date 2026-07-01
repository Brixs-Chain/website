/* ======================================================================
   BRX ART — bespoke, self-contained animated SVG "scenes".
   No libraries, no asset files. Each scene is accent-driven and animates
   via native SVG/SMIL, so it works in server components.
   Drop <BrxScene variant="orbit" accent="#00d395" seed="x" /> into any
   frame; it fills the parent (preserveAspectRatio slice).
   ====================================================================== */

export type SceneVariant =
  | "orbit"
  | "mesh"
  | "prism"
  | "stream"
  | "grid"
  | "stack"
  | "pie"
  | "bars"
  | "shield"
  | "wave"
  | "token"
  | "terminal";

const BG = "#0a0c0f";

// Topic → scene mapping so each page's hero reads as its own thing.
const MAP: Record<string, SceneVariant> = {
  // solutions (map)
  "solutions/l2-chain": "grid",
  "solutions/crosschain-interop": "stream",
  "solutions/wallet-infrastructure": "shield",
  "solutions/on-off-ramps": "stream",
  "solutions/brixs-cdk": "stack",
  "solutions/brixs-agglayer": "prism",
  "solutions/vaultbridge": "shield",
  // use-cases
  "use-cases/payments": "bars",
  "use-cases/rwas": "stack",
  "use-cases/stablecoins": "wave",
  "use-cases/agentic-ai": "mesh",
  // docs
  "docs/core-brixs-chain": "grid",
  "docs/crosschain-interoperability": "stream",
  "docs/wallet-infrastructure": "shield",
  "docs/agglayer-vaultbridge-cdk": "prism",
  "docs/agentic-wallet-cli": "terminal",
  // community
  "community/docs": "grid",
  "community/events": "wave",
  "community/support": "wave",
  "community/forum": "mesh",
  "community/governance": "pie",
  // use-brixs
  "use-brixs/agent-cli": "terminal",
  "use-brixs/staking": "pie",
  "use-brixs/airdrops": "wave",
  "use-brixs/portal": "stream",
  "use-brixs/wallet": "shield",
  // company
  "company/about": "orbit",
  "company/vision": "orbit",
  "company/whitepaper": "prism",
  "company/contact": "mesh",
  // legal
  legal: "token",
  // nav pages
  "products/native-evm": "grid",
  "products/developer-ecosystem": "terminal",
  "solutions/architecture": "grid",
  "solutions/data-model": "stack",
  "solutions/interoperability": "stream",
  "developers/consensus": "mesh",
  "developers/infrastructure": "grid",
  "developers/security": "shield",
  "ecosystem/governance": "pie",
  "ecosystem/scalability": "bars",
  "ecosystem/tokenomics": "token",
  "resources/executive-summary": "orbit",
  "resources/roadmap": "stream",
  "resources/vision": "orbit",
  cli: "terminal",
};

const GROUP_FALLBACK: Record<string, SceneVariant> = {
  solutions: "grid",
  "use-cases": "wave",
  docs: "prism",
  community: "mesh",
  "use-brixs": "token",
  company: "orbit",
  legal: "token",
};

export function sceneFor(key: string, group?: string): SceneVariant {
  return MAP[key] ?? (group ? GROUP_FALLBACK[group] : undefined) ?? "orbit";
}

export function BrxScene({
  variant,
  accent,
  seed,
  className,
}: {
  variant: SceneVariant;
  accent: string;
  seed: string;
  className?: string;
}) {
  const gid = `glow-${seed}`;
  const fade = `fade-${seed}`;
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block", background: BG }}
    >
      <defs>
        <filter id={gid} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id={fade} cx="50%" cy="42%" r="70%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.16" />
          <stop offset="100%" stopColor={BG} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="120" height="120" fill={BG} />
      <rect width="120" height="120" fill={`url(#${fade})`} />
      <FaintGrid accent={accent} />
      <g filter={`url(#${gid})`}>{renderScene(variant, accent)}</g>
    </svg>
  );
}

function FaintGrid({ accent }: { accent: string }) {
  const lines = [];
  for (let i = 12; i < 120; i += 12) {
    lines.push(<line key={`v${i}`} x1={i} y1="0" x2={i} y2="120" stroke={accent} strokeWidth="0.2" opacity="0.12" />);
    lines.push(<line key={`h${i}`} x1="0" y1={i} x2="120" y2={i} stroke={accent} strokeWidth="0.2" opacity="0.12" />);
  }
  return <g>{lines}</g>;
}

function renderScene(v: SceneVariant, a: string) {
  switch (v) {
    case "orbit":
      return (
        <g fill="none" stroke={a}>
          <circle cx="60" cy="60" r="6" fill={a} stroke="none">
            <animate attributeName="r" values="6;7.5;6" dur="3s" repeatCount="indefinite" />
          </circle>
          {[
            { rx: 44, ry: 16, rot: 0, dur: "14s" },
            { rx: 30, ry: 34, rot: 60, dur: "20s" },
            { rx: 18, ry: 46, rot: 120, dur: "26s" },
          ].map((o, i) => (
            <g key={i} transform={`rotate(${o.rot} 60 60)`}>
              <ellipse cx="60" cy="60" rx={o.rx} ry={o.ry} strokeWidth="0.8" opacity="0.7" />
              <circle cx={60 + o.rx} cy="60" r="2.2" fill={a} stroke="none">
                <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur={o.dur} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
        </g>
      );
    case "mesh": {
      const nodes = [
        [30, 30], [90, 26], [60, 56], [22, 78], [92, 80], [58, 96], [78, 50], [40, 58],
      ];
      const links = [[0, 2], [1, 2], [2, 6], [2, 7], [3, 7], [4, 6], [5, 2], [0, 7], [1, 6], [4, 5]];
      return (
        <g>
          {links.map(([s, e], i) => (
            <line key={i} x1={nodes[s][0]} y1={nodes[s][1]} x2={nodes[e][0]} y2={nodes[e][1]} stroke={a} strokeWidth="0.5" opacity="0.35">
              <animate attributeName="opacity" values="0.12;0.5;0.12" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
            </line>
          ))}
          {nodes.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 2 ? 4 : 2.4} fill={a}>
              <animate attributeName="opacity" values="0.5;1;0.5" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      );
    }
    case "prism":
      return (
        <g>
          <line x1="6" y1="60" x2="52" y2="60" stroke="#fff" strokeWidth="1.2" opacity="0.8" />
          <polygon points="60,32 86,82 34,82" fill="none" stroke={a} strokeWidth="1.2">
            <animateTransform attributeName="transform" type="rotate" values="0 60 60;6 60 60;0 60 60" dur="8s" repeatCount="indefinite" />
          </polygon>
          {[-10, 0, 10].map((dy, i) => (
            <line key={i} x1="60" y1="60" x2="116" y2={60 + dy * 1.6} stroke={a} strokeWidth="1" opacity={0.7 - i * 0.15}>
              <animate attributeName="opacity" values={`0;${0.7 - i * 0.15};0`} dur="4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            </line>
          ))}
        </g>
      );
    case "stream":
      return (
        <g stroke={a} fill="none">
          {[34, 50, 60, 70, 86].map((y, i) => (
            <path key={i} d={`M-10 ${y} C 30 ${y - 14}, 90 ${y + 14}, 130 ${y}`} strokeWidth="1" opacity="0.5" strokeDasharray="2 6">
              <animate attributeName="stroke-dashoffset" from="0" to="-40" dur={`${2 + (i % 3) * 0.6}s`} repeatCount="indefinite" />
            </path>
          ))}
          <circle cx="22" cy="60" r="5" fill={a} stroke="none" opacity="0.9" />
          <circle cx="98" cy="60" r="5" fill={a} stroke="none" opacity="0.9" />
        </g>
      );
    case "grid":
      return (
        <g stroke={a} fill="none">
          {[20, 40, 60, 80, 100].map((x) => (
            <line key={`a${x}`} x1={x} y1="20" x2={60 + (x - 60) * 2.4} y2="110" strokeWidth="0.7" opacity="0.5" />
          ))}
          {[30, 50, 70, 90].map((y, i) => (
            <line key={`b${y}`} x1="6" y1={y} x2="114" y2={y} strokeWidth="0.7" opacity={0.5 - i * 0.05} />
          ))}
          <line x1="6" y1="30" x2="114" y2="30" stroke={a} strokeWidth="2" opacity="0.9">
            <animate attributeName="y1" values="26;104;26" dur="5s" repeatCount="indefinite" />
            <animate attributeName="y2" values="26;104;26" dur="5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.9;0" dur="5s" repeatCount="indefinite" />
          </line>
        </g>
      );
    case "stack": {
      const cube = (cx: number, cy: number, s: number, o: number, delay: number) => (
        <g opacity={o}>
          <animateTransform attributeName="transform" type="translate" values="0 1.5;0 -1.5;0 1.5" dur="4s" begin={`${delay}s`} repeatCount="indefinite" additive="sum" />
          <polygon points={`${cx},${cy - s} ${cx + s},${cy - s / 2} ${cx},${cy} ${cx - s},${cy - s / 2}`} fill={a} opacity="0.9" />
          <polygon points={`${cx - s},${cy - s / 2} ${cx},${cy} ${cx},${cy + s} ${cx - s},${cy + s / 2}`} fill={a} opacity="0.45" />
          <polygon points={`${cx + s},${cy - s / 2} ${cx},${cy} ${cx},${cy + s} ${cx + s},${cy + s / 2}`} fill={a} opacity="0.65" />
        </g>
      );
      return (
        <g>
          {cube(60, 44, 16, 1, 0)}
          {cube(60, 70, 16, 0.85, 0.6)}
          {cube(60, 96, 16, 0.7, 1.2)}
        </g>
      );
    }
    case "pie": {
      const C = 2 * Math.PI * 26;
      const segs = [
        { frac: 0.34, off: 0, op: 1 },
        { frac: 0.26, off: 0.34, op: 0.7 },
        { frac: 0.22, off: 0.6, op: 0.5 },
        { frac: 0.18, off: 0.82, op: 0.32 },
      ];
      return (
        <g transform="rotate(-90 60 60)">
          <animateTransform attributeName="transform" type="rotate" from="-90 60 60" to="270 60 60" dur="40s" repeatCount="indefinite" additive="sum" />
          {segs.map((s, i) => (
            <circle key={i} cx="60" cy="60" r="26" fill="none" stroke={a} strokeWidth="12" opacity={s.op}
              strokeDasharray={`${s.frac * C} ${C}`} strokeDashoffset={`${-s.off * C}`} />
          ))}
          <circle cx="60" cy="60" r="13" fill={BG} />
        </g>
      );
    }
    case "bars":
      return (
        <g>
          {[30, 46, 62, 78, 94].map((x, i) => {
            const h = 18 + i * 12;
            return (
              <rect key={i} x={x - 6} y={96 - h} width="11" height={h} fill={a} opacity={0.5 + i * 0.1}>
                <animate attributeName="height" values={`${h};${h - 10};${h}`} dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                <animate attributeName="y" values={`${96 - h};${96 - h + 10};${96 - h}`} dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
              </rect>
            );
          })}
          <line x1="18" y1="96" x2="104" y2="96" stroke={a} strokeWidth="0.8" opacity="0.5" />
        </g>
      );
    case "shield":
      return (
        <g fill="none" stroke={a}>
          <polygon points="60,24 92,38 92,66 60,96 28,66 28,38" strokeWidth="1.4" opacity="0.85" />
          <polygon points="60,36 80,45 80,64 60,82 40,64 40,45" strokeWidth="0.9" opacity="0.55" />
          <circle cx="60" cy="58" r="6" fill={a} stroke="none">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <line x1="28" y1="40" x2="92" y2="40" stroke={a} strokeWidth="1.6" opacity="0.9">
            <animate attributeName="y1" values="34;92;34" dur="4s" repeatCount="indefinite" />
            <animate attributeName="y2" values="34;92;34" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.8;0" dur="4s" repeatCount="indefinite" />
          </line>
        </g>
      );
    case "wave":
      return (
        <g fill="none" stroke={a}>
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx="60" cy="60" r="8" strokeWidth="1.2">
              <animate attributeName="r" values="8;48" dur="4s" begin={`${i}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0" dur="4s" begin={`${i}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <circle cx="60" cy="60" r="5" fill={a} stroke="none" />
        </g>
      );
    case "token":
      return (
        <g>
          <polygon points="60,34 82,47 82,73 60,86 38,73 38,47" fill={a} opacity="0.9" filter="">
            <animateTransform attributeName="transform" type="rotate" values="0 60 60;0 60 60" dur="1s" />
          </polygon>
          <polygon points="60,40 76,49 76,71 60,80 44,71 44,49" fill={BG} opacity="0.55" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i} transform={`rotate(${i * 60} 60 60)`}>
              <circle cx="60" cy="18" r="2" fill={a}>
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
          <circle cx="60" cy="60" r="42" fill="none" stroke={a} strokeWidth="0.6" opacity="0.4" strokeDasharray="3 5">
            <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="30s" repeatCount="indefinite" />
          </circle>
        </g>
      );
    case "terminal":
      return (
        <g>
          <rect x="20" y="30" width="80" height="60" rx="3" fill="#06080b" stroke={a} strokeWidth="0.8" opacity="0.9" />
          <line x1="20" y1="40" x2="100" y2="40" stroke={a} strokeWidth="0.6" opacity="0.5" />
          {[26, 28, 30].map((cx, i) => (
            <circle key={i} cx={cx + i * 4} cy="35" r="1.3" fill={a} opacity={0.7} />
          ))}
          {[48, 56, 64, 72, 80].map((y, i) => (
            <rect key={i} x="26" y={y} width="6" height="2.4" fill={a} opacity="0.8">
              <animate attributeName="width" values="0;48;48" keyTimes="0;0.5;1" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0;0.8;0.8;0" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </rect>
          ))}
          <rect x="26" y="84" width="3" height="2.6" fill={a}>
            <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
          </rect>
        </g>
      );
    default:
      return null;
  }
}
