const LAST_UPDATED = "February 2026"

const sections = [
  {
    title: "What we collect",
    body: `Tempest stores your workout data — exercises, sets, reps, weights, and session notes — locally on your device. We do not operate servers that receive or store this data.`,
  },
  {
    title: "What we don't collect",
    body: `We do not collect your name, email address, or any account credentials. We do not run analytics, track usage events, or embed third-party advertising SDKs. We do not sell data because we do not have any data to sell.`,
  },
  {
    title: "Crash reporting",
    body: `The app may use the platform's built-in crash reporting (Apple's native crash logs on iOS, Google's on Android). These reports are anonymised and contain no workout data. They are used solely to identify and fix bugs.`,
  },
  {
    title: "Data deletion",
    body: `Your data lives on your device. To delete it, uninstall the app.`,
  },
  {
    title: "Children",
    body: `Tempest is not directed at children under 13. We do not knowingly collect information from children.`,
  },
  {
    title: "Changes to this policy",
    body: `If this policy changes materially, we will update the date below and post the revised version here. Continued use of the app after changes are posted constitutes acceptance.`,
  },
  {
    title: "Contact",
    body: `Questions about privacy? Reach us at support@tempestapp.io`,
  },
]

export default function Privacy() {
  return (
    <div className="pt-32 pb-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          — Legal
        </span>
        <h1 className="text-3xl sm:text-4xl mt-2 mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-16">
          Last updated: {LAST_UPDATED}
        </p>

        {/* Intro */}
        <p className="text-base text-muted-foreground leading-relaxed mb-16 border-l-2 border-primary/30 pl-4">
          Tempest is built on a simple principle: your data belongs to you. The
          app works entirely on-device. We have no user accounts, no cloud
          back-end, and no interest in your personal information.
        </p>

        {/* Sections */}
        <div className="space-y-14">
          {sections.map((s, i) => (
            <div key={s.title}>
              <h2 className="text-base font-semibold mb-3 flex items-center gap-3">
                <span className="font-mono text-[10px] font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </h2>
              {s.body.split("\n\n").map((para, j) => (
                <p key={j} className="text-sm text-muted-foreground leading-relaxed mb-3 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
