'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal } from '@/components/reveal'
import { technology } from '@/lib/site-data'

export function Technology() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section id="teknologi" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div ref={ref} className="order-2 lg:order-1">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <motion.img
                style={{ y }}
                src="/images/processing-facility.png"
                alt="Interior fasilitas pengolahan tapioka dengan mesin modern"
                className="size-[120%] object-cover"
                crossOrigin="anonymous"
              />
            </div>
          </Reveal>
        </div>

        <div className="order-1 flex flex-col justify-center lg:order-2">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-primary" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Teknologi &amp; Mesin
            </span>
          </div>
          <h2 className="mt-5 font-heading text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-balance">
            Presisi mesin standar Eropa
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Lini produksi kami menggabungkan peralatan ekstraksi pati modern
            untuk memastikan setiap butir tapioka diproses secara higienis,
            efisien, dan konsisten.
          </p>

          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {technology.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="h-full bg-card p-5">
                  <h3 className="font-heading text-lg font-medium tracking-tight">
                    {t.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
