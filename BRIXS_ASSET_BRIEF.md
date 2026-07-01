# Brixs Chain — Canva Asset Production Brief

Generate these in Canva, name them **exactly** as shown, drop each page's files into its folder,
and tell me — I'll wire every one into the right page. 47 pages × (1 hero MP4 + 3 gallery PNGs).

---

## 0. How to use this

**Folder per page:** `public/assets/pages/<slug>/`
**Files per page (exact names):**
- `hero.mp4` — the big hero footage
- `g1.png`, `g2.png`, `g3.png` — the three gallery stills

Example: the L2 Chain page → `public/assets/pages/solutions-l2-chain/hero.mp4`, `g1.png`, `g2.png`, `g3.png`.

**You don't have to do all 188 at once.** Priority order: do all the **hero.mp4** files first (biggest impact),
then gallery PNGs. Hand me whatever is ready and I'll implement in batches.

### Format specs
| Asset | Format | Size | Notes |
|---|---|---|---|
| `hero.mp4` | MP4 (H.264), muted | see each page's **aspect** | 6–10s **seamless loop**, < ~8 MB |
| `g1–g3.png` | PNG | 1200 × 900 (4:3) | transparent OR deep-black background |

Hero aspect ratios used on this site (each page says which it needs):
- **1:1** → 1080×1080 · **4:5** → 1080×1350 · **16:9** → 1920×1080 · **2:1** → 1600×800

---

## 1. Global style guide (applies to EVERY asset)

**Brand:** Brixs Chain — a premium L2 blockchain *infrastructure* brand. Think "Apple-grade product render meets blockchain," not crypto-hype.

**Look:** cinematic, abstract **3D renders** — geometric/network/architectural forms — floating on a **deep near-black studio or transparent background**, lit with soft volumetric light, with a **single glowing accent color per page** (given below). High contrast, minimal, lots of negative space.

**Motion (for MP4s):** slow and hypnotic — gentle orbit/rotation, particle drift, light sweeps. Must **loop seamlessly**. No fast cuts, no flashing.

**Accent palette (use the page's assigned one):**
`green #00d395` · `blue #2b6aff` · `yellow #ffb800` · `red #ff3b30` · `purple #8c5afc`

**Always avoid:** any text / letters / numbers, logos or watermarks, stock-photo people, busy or colorful backgrounds, neon overload, cartoon style, cheesy crypto coins/Bitcoin imagery.

**Canva tip:** use *Magic Media → Video/Image* with these prompts, or search Canva stock with the bolded keywords + "dark abstract 3D". Add a solid black background layer if the export isn't dark.

---

## 2. Homepage

### Home — `/`  ·  slug `home`
- **Accent:** green `#00d395` · **Hero:** 1:1 MP4
- `hero.mp4` — A slowly rotating abstract 3D network sphere of interconnected nodes and thin light-lines, glowing green accents, deep black background, premium, seamless loop.
- `g1.png` — Glowing 3D "protocol core" cube/crystal, green edge-light, black background.
- `g2.png` — Abstract parallel-execution engine: stacked translucent 3D plates, green accents.
- `g3.png` — Thin concentric orbital rings around a node, green glow, black background.

---

## 3. Solutions (map pages)

### Brixs L2 Chain — `/solutions/l2-chain` · slug `solutions-l2-chain`
- **Accent:** green `#00d395` · **Hero:** 1:1 MP4
- `hero.mp4` — Rotating architectural 3D lattice / data-tower, fast light pulses travelling along edges, green glow, black bg, seamless loop.
- `g1.png` — Glowing protocol-core crystal, green light. `g2.png` — Translucent execution-engine plates, green. `g3.png` — Orbital ring network, green.

### Crosschain Interop — `/solutions/crosschain-interop` · slug `solutions-crosschain-interop`
- **Accent:** blue `#2b6aff` · **Hero:** 4:5 MP4
- `hero.mp4` — Two 3D ring-stations linked by a flowing stream of light particles crossing between them, blue glow, black bg, slow drift loop.
- `g1.png` — Interlocking orbital rings, blue. `g2.png` — Mesh of connected validator nodes, blue. `g3.png` — Prism splitting a light beam (value routing), blue.

### Wallet Infrastructure — `/solutions/wallet-infrastructure` · slug `solutions-wallet-infrastructure`
- **Accent:** purple `#8c5afc` · **Hero:** 2:1 MP4 (wide)
- `hero.mp4` — A secure 3D vault-node with a soft key/shield motif, gentle pulse, purple glow, black bg, loop.
- `g1.png` — Single glowing account node, purple. `g2.png` — Secure shielded node, purple. `g3.png` — Protocol core, purple.

### On / Off Ramps — `/solutions/on-off-ramps` · slug `solutions-on-off-ramps`
- **Accent:** green `#00d395` · **Hero:** 16:9 MP4
- `hero.mp4` — Liquid streams of light flowing into a clean 3D portal/gateway, smooth circulation, green glow, black bg, loop.
- `g1.png` — Upward flow chart bars, green. `g2.png` — 3D allocation pie/ring, green. `g3.png` — Optimized fee gauge, green.

### Brixs CDK — `/solutions/brixs-cdk` · slug `solutions-brixs-cdk`
- **Accent:** yellow `#ffb800` · **Hero:** 16:9 MP4
- `hero.mp4` — Modular 3D blocks assembling into a chain/launchpad, snap-together motion, yellow glow, black bg, loop.
- `g1.png` — Stacked launch blocks, yellow. `g2.png` — Faceted crystal, yellow. `g3.png` — Data prism, yellow.

### Brixs AggLayer — `/solutions/brixs-agglayer` · slug `solutions-brixs-agglayer`
- **Accent:** blue `#2b6aff` · **Hero:** 1:1 MP4
- `hero.mp4` — Many light streams converging into one unified glowing prism (aggregation), blue, black bg, loop.
- `g1.png` — Data prism, blue. `g2.png` — Orbital rings, blue. `g3.png` — Liquidity depth chart, blue.

### Vaultbridge — `/solutions/vaultbridge` · slug `solutions-vaultbridge`
- **Accent:** green `#00d395` · **Hero:** 4:5 MP4
- `hero.mp4` — A bridge of light between two secure 3D vaults, asset-cubes gliding across, green, black bg, loop.
- `g1.png` — Vault node, green. `g2.png` — Validator mesh, green. `g3.png` — Asset cube in transit, green.

---

## 4. Use cases (map pages)

### Payments — `/use-cases/payments` · slug `usecases-payments`
- **Accent:** blue `#2b6aff` · **Hero:** 16:9 MP4
- `hero.mp4` — Rapid light pulses settling across a clean 3D payment grid, fast-but-smooth, blue, black bg, loop.
- `g1.png` — Low-fee gauge, blue. `g2.png` — Settlement volume chart, blue. `g3.png` — Merchant split ring, blue.

### RWAs — `/use-cases/rwas` · slug `usecases-rwas`
- **Accent:** yellow `#ffb800` · **Hero:** 4:5 MP4
- `hero.mp4` — A real-world-asset represented as a glowing tokenized 3D cube with audit-grid facets, slow rotation, yellow, black bg, loop.
- `g1.png` — Tokenized asset cube, yellow. `g2.png` — Faceted crystal, yellow. `g3.png` — Holdings pie, yellow.

### Stablecoins — `/use-cases/stablecoins` · slug `usecases-stablecoins`
- **Accent:** green `#00d395` · **Hero:** 16:9 MP4
- `hero.mp4` — Stable, steady stream of light through a balanced 3D mechanism, calm motion, green, black bg, loop.
- `g1.png` — Throughput chart, green. `g2.png` — Reserve pie, green. `g3.png` — Predictable-fee gauge, green.

### Agentic AI — `/use-cases/agentic-ai` · slug `usecases-agentic-ai`
- **Accent:** purple `#8c5afc` · **Hero:** 2:1 MP4 (wide)
- `hero.mp4` — A faceted "agent" crystal pulsing with intelligence, autonomous orbiting satellites, purple, black bg, loop.
- `g1.png` — Agent crystal, purple. `g2.png` — Scoped-key node, purple. `g3.png` — Data prism, purple.

---

## 5. Docs (map pages)

### Core Brixs Chain Docs — `/docs/core-brixs-chain` · slug `docs-core-brixs-chain`
- **Accent:** yellow `#ffb800` · **Hero:** 1:1 MP4
- `hero.mp4` — Cutaway 3D view of a protocol architecture rotating to reveal its layers, yellow, black bg, loop.
- `g1.png` — Protocol core, yellow. `g2.png` — Execution engine, yellow. `g3.png` — Validator mesh, yellow.

### Crosschain Interoperability Docs — `/docs/crosschain-interoperability` · slug `docs-crosschain-interoperability`
- **Accent:** blue `#2b6aff` · **Hero:** 4:5 MP4
- `hero.mp4` — Routing diagram come to life: light tracing optimal paths between 3D ring-nodes, blue, black bg, loop.
- `g1.png` — Routing ring, blue. `g2.png` — Data prism, blue. `g3.png` — Connected mesh, blue.

### Wallet Infrastructure Docs — `/docs/wallet-infrastructure` · slug `docs-wallet-infrastructure`
- **Accent:** purple `#8c5afc` · **Hero:** 2:1 MP4 (wide)
- `hero.mp4` — Account-abstraction concept: a node spawning scoped session-key satellites, purple, black bg, loop.
- `g1.png` — Account node, purple. `g2.png` — Secure node, purple. `g3.png` — Protocol core, purple.

### AggLayer, Vaultbridge, CDK Docs — `/docs/agglayer-vaultbridge-cdk` · slug `docs-agglayer-vaultbridge-cdk`
- **Accent:** green `#00d395` · **Hero:** 16:9 MP4
- `hero.mp4` — Three linked 3D rails (launch / bridge / liquidity) glowing in sequence, green, black bg, loop.
- `g1.png` — Launch blocks, green. `g2.png` — Data prism, green. `g3.png` — Bridge rings, green.

### Agentic Wallet & CLI Docs — `/docs/agentic-wallet-cli` · slug `docs-agentic-wallet-cli`
- **Accent:** red `#ff3b30` · **Hero:** 16:9 MP4
- `hero.mp4` — A terminal-cursor of light driving an automated 3D node network, red accents, black bg, loop.
- `g1.png` — CLI/terminal node, red. `g2.png` — Agent crystal, red. `g3.png` — Secure log node, red.

---

## 6. Community (map pages)

### Docs gateway — `/community/docs` · slug `community-docs`
- **Accent:** red `#ff3b30` · **Hero:** 4:5 MP4
- `hero.mp4` — An open glowing 3D gateway/portal leading into a structured grid, red, black bg, loop.
- `g1.png` — Protocol core, red. `g2.png` — Data prism, red. `g3.png` — Index chart, red.

### Events — `/community/events` · slug `community-events`
- **Accent:** yellow `#ffb800` · **Hero:** 16:9 MP4
- `hero.mp4` — Energetic particle burst around a glowing event-node, celebratory but premium, yellow, black bg, loop.
- `g1.png` — Calendar ring, yellow. `g2.png` — Launch crystal, yellow. `g3.png` — Meetup blocks, yellow.

### Support — `/community/support` · slug `community-support`
- **Accent:** blue `#2b6aff` · **Hero:** 16:9 MP4
- `hero.mp4` — A calm, friendly 3D help-node with soft pulsing rings, reassuring motion, blue, black bg, loop.
- `g1.png` — Help-desk node, blue. `g2.png` — Channels node, blue. `g3.png` — Onboarding core, blue.

### Forum — `/community/forum` · slug `community-forum`
- **Accent:** green `#00d395` · **Hero:** 2:1 MP4 (wide)
- `hero.mp4` — A mesh of contributor-nodes lighting up in conversation, threads of light connecting them, green, black bg, loop.
- `g1.png` — Thread mesh, green. `g2.png` — Contributor node, green. `g3.png` — Ideas prism, green.

### Governance — `/community/governance` · slug `community-governance`
- **Accent:** red `#ff3b30` · **Hero:** 1:1 MP4
- `hero.mp4` — Votes as light-tokens flowing into a glowing decision-core, balanced and orderly, red, black bg, loop.
- `g1.png` — Vote pie, red. `g2.png` — Proposal chart, red. `g3.png` — Network mesh, red.

---

## 7. Use Brixs (map pages)

### Agent CLI — `/use-brixs/agent-cli` · slug `usebrixs-agent-cli`
- **Accent:** purple `#8c5afc` · **Hero:** 4:5 MP4
- `hero.mp4` — Command-line light pulses orchestrating autonomous 3D agent-nodes, purple, black bg, loop.
- `g1.png` — CLI node, purple. `g2.png` — Agent crystal, purple. `g3.png` — Secure node, purple.

### Staking — `/use-brixs/staking` · slug `usebrixs-staking`
- **Accent:** green `#00d395` · **Hero:** 16:9 MP4
- `hero.mp4` — Tokens locking into a glowing 3D staking ring that slowly fills with reward-light, green, black bg, loop.
- `g1.png` — Staking ring, green. `g2.png` — Rewards chart, green. `g3.png` — Delegation pie, green.

### Airdrops — `/use-brixs/airdrops` · slug `usebrixs-airdrops`
- **Accent:** yellow `#ffb800` · **Hero:** 16:9 MP4
- `hero.mp4` — Reward-crystals descending and being collected into a quest grid, playful-premium, yellow, black bg, loop.
- `g1.png` — Quest crystal, yellow. `g2.png` — Reward blocks, yellow. `g3.png` — Growth chart, yellow.

### Portal — `/use-brixs/portal` · slug `usebrixs-portal`
- **Accent:** blue `#2b6aff` · **Hero:** 2:1 MP4 (wide)
- `hero.mp4` — A control-center 3D portal with bridge/swap streams circulating, blue, black bg, loop.
- `g1.png` — Bridge core, blue. `g2.png` — Swap prism, blue. `g3.png` — Manage-assets gauge, blue.

### Brixs Wallet — `/use-brixs/wallet` · slug `usebrixs-wallet`
- **Accent:** purple `#8c5afc` · **Hero:** 1:1 MP4
- `hero.mp4` — A sleek 3D wallet-node sending/receiving glowing value-tokens, smooth, purple, black bg, loop.
- `g1.png` — Send node, purple. `g2.png` — Receive node, purple. `g3.png` — Holdings mesh, purple.

---

## 8. Company (map pages)

### About Brixs — `/company/about` · slug `company-about`
- **Accent:** blue `#2b6aff` · **Hero:** 16:9 MP4
- `hero.mp4` — Sweeping cinematic flight through an abstract 3D network city, sense of mission/scale, blue, black bg, loop.
- `g1.png` — Mission core, blue. `g2.png` — Network rings, blue. `g3.png` — Execution engine, blue.

### Vision — `/company/vision` · slug `company-vision`
- **Accent:** green `#00d395` · **Hero:** 16:9 MP4
- `hero.mp4` — A north-star light at the center of slowly converging orbital paths, aspirational, green, black bg, loop.
- `g1.png` — North-star ring, green. `g2.png` — Future crystal, green. `g3.png` — Connected prism, green.

### Whitepaper — `/company/whitepaper` · slug `company-whitepaper`
- **Accent:** yellow `#ffb800` · **Hero:** 4:5 MP4
- `hero.mp4` — A glowing 3D data-prism slowly refracting structured light (the thesis), yellow, black bg, loop.
- `g1.png` — Data prism, yellow. `g2.png` — Claims chart, yellow. `g3.png` — Architecture cube, yellow.

### Contact — `/company/contact` · slug `company-contact`
- **Accent:** red `#ff3b30` · **Hero:** 2:1 MP4 (wide)
- `hero.mp4` — Inbound light-signals reaching a central glowing 3D node (reachable team), red, black bg, loop.
- `g1.png` — Team core, red. `g2.png` — Channels node, red. `g3.png` — Partnership node, red.

---

## 9. Legal (map page)

### Legal — `/legal` · slug `legal`
- **Accent:** blue `#2b6aff` · **Hero:** 4:5 MP4
- `hero.mp4` — A calm, orderly 3D grid of policy-panels with a single steady light, restrained, blue, black bg, loop.
- `g1.png` — Terms core, blue. `g2.png` — Privacy prism, blue. `g3.png` — Policy mesh, blue.

---

## 10. Products (nav pages)

### Native EVM — `/products/native-evm` · slug `products-native-evm`
- **Accent:** blue `#2b6aff` · **Hero:** 4:5 MP4
- `hero.mp4` — A multi-threaded 3D execution engine: parallel translucent lanes processing glowing packets, blue, black bg, loop.
- `g1.png` — Execution engine, blue. `g2.png` — Parallel lanes, blue. `g3.png` — State cube, blue.

### Developer Ecosystem — `/products/developer-ecosystem` · slug `products-developer-ecosystem`
- **Accent:** blue `#2b6aff` · **Hero:** 2:1 MP4 (wide)
- `hero.mp4` — Floating 3D SDK/tool modules connecting into a builder workspace, blue, black bg, loop.
- `g1.png` — SDK module, blue. `g2.png` — Tooling node, blue. `g3.png` — Build prism, blue.

---

## 11. Solutions (nav pages)

### Architecture — `/solutions/architecture` · slug `solutions-architecture`
- **Accent:** green `#00d395` · **Hero:** 16:9 MP4
- `hero.mp4` — A grand 3D architecture diagram building layer by layer (modular + parallel), green, black bg, loop.
- `g1.png` — Execution engine, green. `g2.png` — Parallel lanes, green. `g3.png` — Gas-optimized core, green.

### Data Model — `/solutions/data-model` · slug `solutions-data-model`
- **Accent:** green `#00d395` · **Hero:** 1:1 MP4
- `hero.mp4` — Object-centric 3D state: glowing data-objects orbiting and locking independently, green, black bg, loop.
- `g1.png` — Data prism, green. `g2.png` — Object cube, green. `g3.png` — State mesh, green.

### Interoperability — `/solutions/interoperability` · slug `solutions-interoperability`
- **Accent:** green `#00d395` · **Hero:** 16:9 MP4
- `hero.mp4` — Omnichain mesh: messages of light routing across many connected 3D ring-chains, green, black bg, loop.
- `g1.png` — Routing rings, green. `g2.png` — Validator mesh, green. `g3.png` — Data prism, green.

---

## 12. Developers (nav pages)

### Consensus — `/developers/consensus` · slug `developers-consensus`
- **Accent:** purple `#8c5afc` · **Hero:** 4:5 MP4
- `hero.mp4` — Validator nodes reaching agreement: synchronized pulses sweeping a 3D mesh (BFT rounds), purple, black bg, loop.
- `g1.png` — Validator mesh, purple. `g2.png` — Sequencer node, purple. `g3.png` — Finality core, purple.

### Infrastructure — `/developers/infrastructure` · slug `developers-infrastructure`
- **Accent:** purple `#8c5afc` · **Hero:** 2:1 MP4 (wide)
- `hero.mp4` — A humming 3D data-center / RPC backbone with light flowing through racks of nodes, purple, black bg, loop.
- `g1.png` — RPC node, purple. `g2.png` — Validator rack, purple. `g3.png` — Topology mesh, purple.

### Security — `/developers/security` · slug `developers-security`
- **Accent:** purple `#8c5afc` · **Hero:** 16:9 MP4
- `hero.mp4` — A glowing 3D shield/lattice deflecting light-probes (post-quantum security), purple, black bg, loop.
- `g1.png` — Shielded node, purple. `g2.png` — Validator mesh, purple. `g3.png` — Protocol core, purple.

---

## 13. Ecosystem (nav pages)

### Governance — `/ecosystem/governance` · slug `ecosystem-governance`
- **Accent:** blue `#2b6aff` · **Hero:** 1:1 MP4
- `hero.mp4` — Proposal → vote → upgrade flow as light moving through a glowing 3D decision-engine, blue, black bg, loop.
- `g1.png` — Vote pie, blue. `g2.png` — Proposal chart, blue. `g3.png` — Validator mesh, blue.

### Scalability — `/ecosystem/scalability` · slug `ecosystem-scalability`
- **Accent:** green `#00d395` · **Hero:** 16:9 MP4
- `hero.mp4` — Throughput ramping up: more and more parallel light-lanes activating across a 3D plane, green, black bg, loop.
- `g1.png` — Throughput chart, green. `g2.png` — Parallel lanes, green. `g3.png` — Gas gauge, green.

### Tokenomics — `/ecosystem/tokenomics` · slug `ecosystem-tokenomics`
- **Accent:** yellow `#ffb800` · **Hero:** 1:1 MP4
- `hero.mp4` — A glowing 3D token at the center of an allocation ring that segments and circulates, yellow, black bg, loop.
- `g1.png` — Allocation pie, yellow. `g2.png` — Emissions chart, yellow. `g3.png` — Utility prism, yellow.

---

## 14. Resources (nav pages)

### Executive Summary — `/resources/executive-summary` · slug `resources-executive-summary`
- **Accent:** red `#ff3b30` · **Hero:** 4:5 MP4
- `hero.mp4` — A confident cinematic reveal of an abstract 3D Brixs network forming, red accents, black bg, loop.
- `g1.png` — Network core, red. `g2.png` — Market prism, red. `g3.png` — Vision rings, red.

### Roadmap — `/resources/roadmap` · slug `resources-roadmap`
- **Accent:** red `#ff3b30` · **Hero:** 16:9 MP4
- `hero.mp4` — A path of light advancing through milestone-gates along a 3D timeline track, red, black bg, loop.
- `g1.png` — Milestone gate, red. `g2.png` — Progress chart, red. `g3.png` — Future crystal, red.

### Vision — `/resources/vision` · slug `resources-vision`
- **Accent:** red `#ff3b30` · **Hero:** 16:9 MP4
- `hero.mp4` — Expansive cinematic drift toward a glowing horizon of connected 3D networks, red, black bg, loop.
- `g1.png` — Horizon rings, red. `g2.png` — Principle prism, red. `g3.png` — Connected mesh, red.

---

## 15. CLI (nav page)

### Brixs CLI — `/cli` · slug `cli`
- **Accent:** red `#ff3b30` · **Hero:** 4:5 MP4
- `hero.mp4` — A premium 3D terminal window with glowing command-lines executing, light pulses to a node network, red, black bg, loop.
- `g1.png` — Terminal node, red. `g2.png` — Bridge node, red. `g3.png` — Monitor mesh, red.

---

## 16. After you hand me the files

For each page folder you fill in, I will:
1. Point that page's hero + 3 gallery slots at `public/assets/pages/<slug>/…`
2. Rebuild and verify the page renders the new media with no broken links.

You can deliver page-by-page or in bulk — just say "these folders are ready" and list them.
If a page only has the hero done, I'll wire the hero and keep current gallery art until yours arrives.
