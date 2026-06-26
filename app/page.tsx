import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Stats } from '@/components/stats'
import { Products } from '@/components/products'
import { Process } from '@/components/process'
import { Technology } from '@/components/technology'
import { Values } from '@/components/values'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Products />
      <Process />
      <Technology />
      <Values />
      <Contact />
      <Footer />
    </main>
  )
}
