'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { values } from '@/lib/site-data'

export function Values() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:py-32 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-primary" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Nilai Kami
            </span>
          </div>
          <h2 className="mt-5 font-heading text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-balance">
            Komitmen di balik setiap kemasan
          </h2>
          <Reveal delay={0.1} className="mt-8 hidden flex-1 lg:block">
            <div className="relative h-full min-h-72 overflow-hidden rounded-3xl">
              <img
                src="/images/quality-control.png"
                alt="Kontrol mutu tepung tapioka di laboratorium"
                className="size-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center">
          <div className="divide-y divide-border border-y border-border">
            {values.map((v, i) => {
              const isOpen = open === i
              return (
                <div key={v.title}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-xl font-medium tracking-tight sm:text-2xl">
                      {v.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                    >
                      <Plus className="size-4" />
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-pretty leading-relaxed text-muted-foreground">
                      {v.desc}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
