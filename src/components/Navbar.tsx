import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-base font-semibold tracking-tight text-foreground">
          Tempest<span className="text-primary">.</span>
        </Link>

        {/* Nav links — hidden on mobile */}
        <nav className="hidden sm:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How it works
          </a>
        </nav>

        {/* CTA */}
        <Button size="sm">Download Free</Button>
      </div>
    </header>
  )
}
