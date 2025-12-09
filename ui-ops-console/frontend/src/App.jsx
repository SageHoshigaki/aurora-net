import './App.css'

// src/App.jsx
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-zinc-100">
      <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/60 px-8 py-6 shadow-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-400 mb-2">
          Security Preview
        </p>
        <h1 className="text-3xl font-semibold mb-3">
          Aurora-Net Waitlist
        </h1>
        <p className="text-sm text-zinc-400 mb-4 max-w-md">
          Deceptive honeypots, high-context detections, analyst-first design.
        </p>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Work email"
            className="flex-1 rounded-2xl bg-zinc-900/80 border border-zinc-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
          />
          <button className="rounded-2xl bg-emerald-400 px-4 py-2 text-xs font-semibold tracking-wide text-black hover:bg-emerald-300">
            Join waitlist
          </button>
        </form>
      </div>
    </div>
  )
}
