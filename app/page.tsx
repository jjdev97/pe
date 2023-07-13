import About from '@/components/ui/About'
import Contact from '@/components/ui/Contact'
import Galerie from '@/components/ui/Galerie'
import Garten from '@/components/ui/Garten'
import Haus from '@/components/ui/Haus'
import Hero from '@/components/ui/Hero'
import { ScrollToTop } from '@/components/ui/scrollToTop'

export default function Home() {
  return (
    <main>
      <section className="mx-auto mb-8 h-screen w-screen sm:overflow-hidden">
      <Hero />
      </section>
      <About />
      <Garten />
      <Haus />
      <Galerie />
      <Contact />
      <ScrollToTop />
    </main>
  )
}

//      <div className="snap-y snap-mandatory h-screen w-screen overflow-auto">

