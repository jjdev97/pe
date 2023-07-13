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
      <div id="home" className="mx-auto mb-8 h-screen w-screen sm:overflow-hidden">
      <Hero />
      </div>
      <div id="about">
      <About />
      </div>
      <div id="garten">
      <Garten />
      </div>
      <div id="haus">
      <Haus />
      </div>
      <div id="galerie">
      <Galerie />
      </div>
      <div id="contact">
      <Contact />
      </div>
      <ScrollToTop />
    </main>
  )
}

//      <div className="snap-y snap-mandatory h-screen w-screen overflow-auto">

