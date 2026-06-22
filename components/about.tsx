'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal, RevealText } from '@/components/reveal'

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['4%', '-4%'])

  return (
    <section id="tentang" className="overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-primary" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Tentang Perusahaan
          </span>
        </div>

        <div className="mt-5 grid items-start gap-4 md:grid-cols-2 md:gap-8">
          <Reveal delay={0.1}>
            <p className="text-pretty text-base leading-normal text-muted-foreground">
              PT. Bukit Kencana Mas adalah perusahaan agroindustri yang berdiri
              di Bandar Lampung sejak 2013. Kami berfokus pada pengolahan
              singkong menjadi tepung tapioka — atau pati singkong — yang bersih,
              putih, dan berkualitas tinggi.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-pretty text-base leading-normal text-muted-foreground">
              Dengan lokasi strategis di jantung salah satu penghasil singkong
              terbesar di Indonesia, kami bermitra langsung dengan petani lokal
              dan mengandalkan lini produksi bermesin Eropa untuk menghasilkan
              pati yang konsisten bagi industri pangan maupun manufaktur.
            </p>
          </Reveal>
        </div>

        <h2 className="mt-6 max-w-4xl font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.1] tracking-tight text-balance">
          <RevealText text="Dari tanah Lampung, kami merawat pati terbaik untuk Indonesia." />
        </h2>

        <div ref={ref} className="mt-8 w-full overflow-hidden">
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <Reveal className="min-w-0">
              <motion.div
                style={{ y: y1 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <img
                  src="/images/cassava-roots.png"
                  alt="Singkong segar hasil panen"
                  className="size-full object-cover"
                  crossOrigin="anonymous"
                />
              </motion.div>
            </Reveal>
            <Reveal delay={0.15} className="min-w-0">
              <motion.div
                style={{ y: y2 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <img
                  src="/images/cassava-leaves.png"
                  alt="Daun singkong hijau segar"
                  className="size-full object-cover"
                  crossOrigin="anonymous"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
