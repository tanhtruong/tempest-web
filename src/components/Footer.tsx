import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Tempest.
          </p>
          <nav className="flex gap-6">
            <Link
              to="/privacy"
              className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
