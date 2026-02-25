import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-48 pb-40 px-4 sm:px-6">
      <div className="relative max-w-5xl mx-auto">
        {/* Label */}
        <div className="animate-fade-up mb-8">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Free on iOS &amp; Android
          </span>
        </div>

        {/* Headline — left-aligned, two-column on lg */}
        <div className="lg:grid lg:grid-cols-[1fr_auto] lg:gap-20 lg:items-end">
          <h1
            className="animate-fade-up delay-100 text-5xl sm:text-6xl lg:text-[clamp(56px,7vw,88px)]
                       leading-[1.05] mb-10 lg:mb-0"
          >
            Lift heavy.<br />
            Track everything.<br />
            <span className="font-semibold text-primary">Break records.</span>
          </h1>

          {/* CTAs — right column on lg, below on sm */}
          <div className="animate-fade-up delay-200 flex flex-col gap-3 lg:pb-2 lg:min-w-[220px]">
            <Button size="lg" className="w-full">
              Download Free
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-muted-foreground hover:text-foreground w-full"
              asChild
            >
              <a href="#features">See how it works <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
