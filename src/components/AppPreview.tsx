const templates = [
  { name: "Push A", meta: "Chest · Shoulders · Triceps", sets: 5 },
  { name: "Pull B", meta: "Back · Biceps · Rear Delts", sets: 5 },
  { name: "Legs C", meta: "Quads · Hamstrings · Calves", sets: 6 },
]

export default function AppPreview() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })

  return (
    <section id="preview" className="border-t border-primary/15 py-24 px-4 sm:px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              — App Preview
            </span>
            <h2 className="text-3xl sm:text-4xl mt-2 mb-5">
              Fewer taps.
              <br />
              <span className="text-primary">More reps.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Load a template, start in one tap, log each set as you go.
              Nothing to configure. Nothing in the way.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Dark mode built-in",
                "Rest timer with haptics",
                "iCloud sync (iOS)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <div className="w-[260px] h-[520px] rounded-[44px] border-[10px] border-zinc-200 shadow-2xl bg-zinc-900 overflow-hidden relative">
              {/* Status bar */}
              <div className="flex justify-between items-center px-5 pt-3 pb-1">
                <span className="text-[10px] font-semibold text-zinc-300">9:41</span>
                <div className="flex gap-1 items-center">
                  <span className="text-[10px] text-zinc-500">●●●</span>
                </div>
              </div>

              {/* App content */}
              <div className="px-4 pt-2">
                {/* Date header */}
                <div className="mb-5">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium">
                    {today}
                  </p>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    Good morning 👋
                  </h3>
                </div>

                {/* Start workout card */}
                <div className="rounded-2xl border border-zinc-700 bg-zinc-800 p-4 mb-5">
                  <p className="text-xs text-zinc-400 mb-1">Ready to train?</p>
                  <p className="text-sm font-semibold text-white mb-3">Start a workout</p>
                  <button className="w-full bg-primary text-white text-xs font-semibold py-2 rounded-xl">
                    Start workout
                  </button>
                </div>

                {/* Templates */}
                <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium mb-2">
                  Templates
                </p>
                <div className="space-y-2">
                  {templates.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-center justify-between rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2.5"
                    >
                      <div>
                        <p className="text-xs font-semibold text-white">{t.name}</p>
                        <p className="text-[10px] text-zinc-400">{t.meta}</p>
                      </div>
                      <span className="text-[10px] text-zinc-400">
                        {t.sets} exercises
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
