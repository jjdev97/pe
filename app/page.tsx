import About from '@/components/ui/About'
import Contact from '@/components/ui/Contact'
import Galerie from '@/components/ui/Galerie'
import Garten from '@/components/ui/Garten'
import Haus from '@/components/ui/Haus'
import Hero from '@/components/ui/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Garten />
      <Haus />
      <Galerie />
      <Contact />
    </main>
  )
}
