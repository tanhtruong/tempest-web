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
    <section id="how-it-works" className="border-t border-primary/15 py-24 px-4 sm:px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            — How it works
          </span>
          <h2 className="text-3xl sm:text-4xl mt-2">
            Open. Log. <span className="text-primary">Done.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
          {steps.map((step, i) => (
            <div key={step.title} className="bg-background p-8 sm:p-10">
              <span className="font-mono text-[11px] font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5 mb-6 inline-block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg mb-3">{step.title}</h3>
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
