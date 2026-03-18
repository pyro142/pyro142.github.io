import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <BentoGrid />

      <footer className="text-center py-8 text-neutral-700 text-xs border-t border-[#141414]">
        © {new Date().getFullYear()} Joel Garbutt · garbutt.it
      </footer>
    </div>
  )
}
