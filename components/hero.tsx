'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const overlayY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  const word = ['Mengolah', 'Singkong', 'Menjadi', 'Pati', 'Berkualitas']

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="/images/hero-cassava-field.png"
          alt="Perkebunan singkong di Lampung saat matahari terbenam"
          className="size-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-foreground/40" />
      </motion.div>

      <motion.div
        style={{ y: overlayY }}
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-background backdrop-blur-sm"
        >
          <span className="size-1.5 rounded-full bg-accent" />
          Bandar Lampung · Sejak 2013
        </motion.div>

        <h1 className="max-w-4xl font-heading text-[clamp(2.6rem,8vw,6rem)] font-medium leading-[0.98] tracking-tight text-background">
          {word.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.4 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {w}
                {i < word.length - 1 ? '\u00A0' : ''}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md text-pretty text-base leading-relaxed text-background/85">
            PT. Bukit Kencana Mas memproduksi tepung tapioka premium dari
            singkong pilihan Lampung — bersih, putih, dan konsisten untuk
            kebutuhan pangan dan industri.
          </p>
          <a
            href="#tentang"
            className="group inline-flex items-center gap-3 self-start text-sm font-medium text-background sm:self-auto"
          >
            <span className="flex size-12 items-center justify-center rounded-full border border-background/40 transition-colors group-hover:bg-background group-hover:text-foreground">
              <ArrowDown className="size-5 transition-transform group-hover:translate-y-0.5" />
            </span>
            <span className="uppercase tracking-[0.14em]">
              Jelajahi Perusahaan
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
