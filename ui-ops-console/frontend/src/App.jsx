// src/App.jsx
import { useState } from "react";
import './index.css'

const LAYERS = [
  {
    id: "sensors",
    pill: "Sensors",
    layerLabel: "Layer 01 • Aurora-Net Blueprint",
    cardMetricLabel: "Events / minute observed",
    cardMetricValue: "120,000+",
    cardCaption: "Kernel-level probes stream process, syscall, and network activity in real time.",
    title: "Edge sensors on every host.",
    tagline: "Kernel-level visibility without heavyweight agents.",
    bullets: [
      "eBPF + Go agents stream exec, socket, and file activity in real time.",
      "Normalized events across hosts – ready for any SIEM or data lake.",
      "Smart sampling so you don’t drown storage in debug noise."
    ],
  },
  {
    id: "pipeline",
    pill: "Pipeline",
    layerLabel: "Layer 02 • Streaming Spine",
    cardMetricLabel: "P99 ingest latency",
    cardMetricValue: "< 2s",
    cardCaption: "Events are normalized once, then fan out to wherever you need them.",
    title: "A streaming spine that never drops context.",
    tagline: "Events flow from kernel to analytics with schemas, not ad-hoc JSON.",
    bullets: [
      "Typed schemas keep sensors, storage, and SIEMs in lockstep.",
      "Kafka / Redis Streams are pluggable per environment.",
      "Replay windows give you “go back in time” investigations without re-instrumenting.",
    ],
  },
  {
    id: "analysis",
    pill: "Analysis",
    layerLabel: "Layer 03 • Detection Engine",
    cardMetricLabel: "Signals promoted to incidents",
    cardMetricValue: "1 in 40",
    cardCaption: "Noise is suppressed at the engine, not dumped on the analyst.",
    title: "Detection that explains itself.",
    tagline: "Rules and anomaly models share the same event graph.",
    bullets: [
      "Sigma-style detections for known bad behavior.",
      "Anomaly layer flags rare process chains and network paths.",
      "Every alert ships with MITRE ATT&CK mapping and plain-language rationale.",
    ],
  },
  {
    id: "deception",
    pill: "Deception",
    layerLabel: "Layer 04 • Deception Fabric",
    cardMetricLabel: "High-intent signals",
    cardMetricValue: "100%",
    cardCaption: "Any interaction with a fake asset is suspicious by design.",
    title: "A surface attackers can’t resist.",
    tagline: "Fake assets, real telemetry.",
    bullets: [
      "Blueprint APIs, admin portals, and IoT devices deployed as traps.",
      "Interactions are isolated yet fully observable – zero blast radius.",
      "Signals automatically correlate back into the main graph for context.",
    ],
  },
  {
    id: "ops",
    pill: "Ops Console",
    layerLabel: "Layer 05 • Analyst Surface",
    cardMetricLabel: "Time to first useful view",
    cardMetricValue: "< 30s",
    cardCaption: "From alert to narrative without pivoting across five tools.",
    title: "An ops console built for humans, not log files.",
    tagline: "One place to see how an attack moved through your estate.",
    bullets: [
      "Timeline view across hosts, users, and deception assets.",
      "Each alert carries process tree, network trail, and prior activity.",
      "Keyboard-first workflows for analysts; export-ready views for execs.",
    ],
  },
];

function App() {
  const [active, setActive] = useState("sensors");
  const layer = LAYERS.find(l => l.id === active);

  return (
    <div className="min-h-screen bg-black text-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 py-14 md:py-20">
        {/* Top label */}
        <p className="text-xs tracking-[0.2em] uppercase text-slate-500 mb-4">
          Security Preview
        </p>

        {/* Product name */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
          Aurora-Net
        </h1>
        <p className="text-sm md:text-base text-slate-400 mb-10 max-w-xl">
          Deceptive honeypots, high-context detections, analyst-first design – in one
          modular telemetry platform.
        </p>

        {/* Main section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left metric / blueprint card */}
          <div className="w-full lg:w-[48%]">
            <div className="rounded-3xl bg-zinc-900/70 border border-zinc-800 overflow-hidden">
              <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between">
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-slate-400">
                  {layer.layerLabel}
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
                  Blueprint view
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                </span>
              </div>

              {/* Metric + “blueprint” placeholder */}
              <div className="px-6 pt-6 pb-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-2">
                  {layer.cardMetricLabel}
                </p>
                <p className="text-3xl md:text-4xl font-semibold mb-4 text-slate-50">
                  {layer.cardMetricValue}
                </p>
                <p className="text-xs text-slate-400 mb-6">
                  {layer.cardCaption}
                </p>

                <div className="rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800/80 h-52 md:h-64 flex items-center justify-center">
                  {/* Placeholder “blueprint” grid – you can later replace with SVG/3D */}
                  <div className="w-10/12 h-3/4 border border-zinc-700/80 rounded-xl relative">
                    <div className="absolute inset-4 border border-zinc-700/60 rounded-lg" />
                    <div className="absolute inset-x-5 top-6 h-8 border border-zinc-700/60 rounded-md" />
                    <div className="absolute inset-x-5 bottom-6 h-14 border border-zinc-700/60 rounded-md" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-zinc-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right copy + nav */}
          <div className="w-full lg:flex-1">
            {/* Layer nav pills */}
            <div className="inline-flex p-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
              {LAYERS.map(l => (
                <button
                  key={l.id}
                  onClick={() => setActive(l.id)}
                  className={
                    "px-3.5 py-1.5 text-xs rounded-full transition " +
                    (l.id === active
                      ? "bg-slate-50 text-black shadow-sm"
                      : "text-slate-400 hover:text-slate-100")
                  }
                >
                  {l.pill}
                </button>
              ))}
            </div>

            {/* Heading & tagline */}
            <h2 className="text-2.5xl md:text-3xl font-semibold tracking-tight mb-3">
              {layer.title}
            </h2>
            <p className="text-sm md:text-base text-slate-300 mb-5">
              {layer.tagline}
            </p>

            {/* Bullets */}
            <ul className="space-y-2.5 mb-8 text-sm text-slate-300">
              {layer.bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Waitlist */}
            <div className="border-t border-zinc-800 pt-5 mt-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
                Join the early access list
              </p>
              <p className="text-sm text-slate-400 mb-3">
                Get architecture notes, detection packs, and a demo build when Aurora-Net is ready.
              </p>
              <form
                onSubmit={e => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 sm:items-center"
              >
                <input
                  type="email"
                  required
                  placeholder="work.email@company.com"
                  className="w-full sm:w-auto flex-1 rounded-full bg-zinc-950 border border-zinc-700/80 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="inline-flex justify-center items-center rounded-full bg-slate-50 text-black text-sm font-medium px-5 py-2.5 shadow-sm hover:bg-slate-200 transition"
                >
                  Join waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;