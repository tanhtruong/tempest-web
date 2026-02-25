const features = [
  {
    title: "Log every set",
    description:
      "Capture weight, reps, and rest time as you train. Quick input, zero friction.",
  },
  {
    title: "Progressive overload",
    description:
      "Automatic suggestions to nudge your numbers up — week over week, lift by lift.",
  },
  {
    title: "Personal records",
    description:
      "Every PR flagged and saved. Full history so you can see exactly how far the numbers have moved.",
  },
  {
    title: "Workout templates",
    description:
      "Save your favourite programmes and start a session in seconds. No rebuilding every time.",
  },
  {
    title: "Session history",
    description:
      "A clean, scrollable log of every workout. Tap any session to review sets and notes.",
  },
  {
    title: "Works offline",
    description:
      "Your data lives on device. Train in the basement, the park, or the middle of nowhere.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-40 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl mt-4">
            Everything you need.<br />
            <span className="text-muted-foreground">Nothing you don&apos;t.</span>
          </h2>
        </div>

        {/* Open grid — no cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feat, i) => (
            <div key={feat.title}>
              <span className="font-mono text-xs text-muted-foreground/50 mb-4 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-medium mb-3">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
