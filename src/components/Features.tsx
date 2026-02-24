import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Log every set",
    description:
      "Capture weight, reps, and rest time as you train. Quick input, zero friction.",
    hero: true,
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
    strip: true,
  },
]

function NumberBadge({ n }: { n: number }) {
  return (
    <span className="font-mono text-[10px] font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5 mb-3 inline-block">
      {String(n).padStart(2, "0")}
    </span>
  )
}

export default function Features() {
  const [feat0, feat1, feat2, feat3, feat4, feat5] = features

  return (
    <section id="features" className="border-t border-primary/15 py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            — Features
          </span>
          <h2 className="text-3xl sm:text-4xl mt-2 mb-2">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl">
            Built for lifters who want a tool, not a platform.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Row 1: col-span-2 hero card */}
          <Card className="shadow-none border border-border lg:col-span-2">
            <CardContent className="p-8">
              <NumberBadge n={1} />
              <h3 className="text-xl mb-2">{feat0.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {feat0.description}
              </p>
            </CardContent>
          </Card>

          {/* Row 1, col 3 */}
          <Card className="shadow-none border border-border">
            <CardContent className="p-6">
              <NumberBadge n={2} />
              <h3 className="text-base mb-2">{feat1.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feat1.description}
              </p>
            </CardContent>
          </Card>

          {/* Row 2: three equal cards */}
          {[feat2, feat3, feat4].map((feat, i) => (
            <Card key={feat.title} className="shadow-none border border-border">
              <CardContent className="p-6">
                <NumberBadge n={i + 3} />
                <h3 className="text-base mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feat.description}
                </p>
              </CardContent>
            </Card>
          ))}

          {/* Row 3: full-width strip */}
          <Card className="shadow-none border border-border sm:col-span-2 lg:col-span-3">
            <CardContent className="p-6 flex flex-row items-center gap-6">
              <div className="flex items-center gap-4 flex-1">
                <NumberBadge n={6} />
                <div>
                  <h3 className="text-base mb-0.5">{feat5.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feat5.description}
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs text-muted-foreground whitespace-nowrap hidden sm:block">
                No connection required
              </span>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
