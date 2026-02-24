import { Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import Footer from "@/components/Footer"
import Privacy from "@/pages/Privacy"

function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
    </main>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
