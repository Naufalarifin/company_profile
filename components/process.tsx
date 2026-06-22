'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { process } from '@/lib/site-data'

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="proses" className="overflow-x-hidden bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-background/60">
            Alur Produksi
          </span>
        </div>
        <h2 className="mt-5 max-w-3xl font-heading text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-balance">
          Setiap tahap dikerjakan dengan teliti
        </h2>

        <div ref={ref} className="relative mt-16 pl-8 sm:pl-0">
          {/* garis vertikal — tengah di desktop, kiri di mobile */}
          <div className="absolute left-[5px] top-2 hidden h-full w-px bg-background/15 sm:left-1/2 sm:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-accent"
            />
          </div>
          <div className="absolute left-[5px] top-2 h-full w-px bg-background/15 sm:hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-accent"
            />
          </div>

          <div className="flex flex-col gap-16 sm:gap-24">
            {process.map((step, i) => {
              const isLeft = i % 2 === 0

              return (
                <div
                  key={step.no}
                  className="relative sm:grid sm:grid-cols-2 sm:gap-12"
                >
                  <span className="absolute -left-[31px] top-1.5 z-10 size-3 rounded-full border-2 border-accent bg-foreground sm:left-1/2 sm:-translate-x-1/2" />

                  {/* kolom kiri — kosong jika step di kanan */}
                  <div className="hidden sm:block" aria-hidden={!isLeft}>
                    {isLeft && (
                      <StepContent step={step} align="right" />
                    )}
                  </div>

                  {/* kolom kanan — kosong jika step di kiri */}
                  <div className="hidden sm:block" aria-hidden={isLeft}>
                    {!isLeft && (
                      <StepContent step={step} align="left" />
                    )}
                  </div>

                  {/* mobile — semua di kiri */}
                  <div className="pl-8 sm:hidden">
                    <StepContent step={step} align="left" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepContent({
  step,
  align,
}: {
  step: (typeof process)[number]
  align: 'left' | 'right'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={align === 'right' ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'}
    >
      <span className="font-heading text-6xl font-medium italic text-background/25">
        {step.no}
      </span>
      <h3 className="mt-2 font-heading text-2xl font-medium tracking-tight">
        {step.title}
      </h3>
      <p className="mt-3 text-pretty leading-relaxed text-background/65">
        {step.desc}
      </p>
    </motion.div>
  )
}
