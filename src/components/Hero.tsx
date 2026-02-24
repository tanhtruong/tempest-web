import {Button} from "@/components/ui/button"
import {ArrowRight} from "lucide-react"

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-24 px-4 sm:px-6">
            <div className="relative max-w-5xl mx-auto">
                {/* Badge */}
                <div className="animate-fade-up mb-6">
          <span
              className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            Free on iOS &amp; Android
          </span>
                </div>

                {/* Headline — left-aligned, massive, two-column on lg */}
                <div className="lg:grid lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-end">
                    <h1
                        className="animate-fade-up delay-100 text-5xl sm:text-6xl lg:text-[clamp(56px,7vw,88px)]
                       font-black tracking-[-0.04em] leading-[0.92] mb-8 lg:mb-0"
                    >
                        Lift heavy.<br/>
                        Track everything.<br/>
                        <span className="text-primary">Break records.</span>
                    </h1>

                    {/* CTAs + stats — right column on lg, below on sm */}
                    <div className="animate-fade-up delay-200 flex flex-col gap-4 lg:pb-2 lg:min-w-[220px]">
                        <Button size="lg" className="w-full">
                            Download Free
                        </Button>
                        <Button
                            variant="ghost"
                            size="lg"
                            className="text-muted-foreground hover:text-foreground w-full"
                            asChild
                        >
                            <a href="#features">See how it works <ArrowRight className="ml-1 h-4 w-4"/></a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
