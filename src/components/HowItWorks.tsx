const steps = [
  {
    title: "Pick a template",
    description:
      "Choose from your saved programmes or build a session from scratch. Either way, you're under the bar in seconds.",
  },
  {
    title: "Log your sets",
    description:
      "Tap to record weight and reps as you go. The rest timer starts automatically — no fiddling between sets.",
  },
  {
    title: "See your progress",
    description:
      "PRs get flagged the moment they happen. Your full history is always one tap away.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-40 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl mt-4">
            Open. Log. <span className="font-semibold text-primary">Done.</span>
          </h2>
        </div>

        {/* Steps — floating, no borders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-16">
          {steps.map((step, i) => (
            <div key={step.title}>
              <span className="font-mono text-xs text-muted-foreground/50 mb-6 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-medium mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
