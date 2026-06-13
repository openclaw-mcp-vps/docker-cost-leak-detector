export default function Home() {
  const faqs = [
    {
      q: "How does it connect to my Docker environment?",
      a: "You provide a Docker host endpoint or run our lightweight CLI agent. It reads container stats via the Docker API — no code changes needed."
    },
    {
      q: "What counts as a cost leak?",
      a: "Zombie containers (stopped but not removed), idle services with near-zero CPU/network for 24h+, and containers allocated far more memory than they use."
    },
    {
      q: "Is my infrastructure data safe?",
      a: "Only aggregated metrics are transmitted. No container contents, environment variables, or secrets ever leave your host."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Docker Cost Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find Hidden Docker<br />
          <span className="text-[#58a6ff]">Container Cost Leaks</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically scan your Docker hosts for zombie containers, oversized instances, and idle services burning money with zero business value.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Saving — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for the free scan. Cancel anytime.</p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          {[
            { value: "34%", label: "Avg. waste found" },
            { value: "< 2 min", label: "Time to first scan" },
            { value: "$0 code", label: "Changes required" }
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
              <div className="text-xs text-[#6e7681] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-2xl bg-[#161b22] p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#6e7681] text-sm mb-6">per month · unlimited hosts</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Continuous container monitoring",
              "Zombie & idle container detection",
              "Memory over-allocation reports",
              "Weekly cost-savings digest email",
              "CLI agent + REST API access",
              "Slack & email alerts"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="border border-[#21262d] rounded-xl bg-[#161b22] p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Docker Cost Leak Detector. All rights reserved.
      </footer>
    </main>
  );
}
