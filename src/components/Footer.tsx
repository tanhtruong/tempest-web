import { Link } from "react-router-dom"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Separator className="mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Tempest. All rights reserved.</p>
          <nav className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
