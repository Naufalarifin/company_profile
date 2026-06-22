'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Leaf } from 'lucide-react'
import { nav, company } from '@/lib/site-data'

export function Footer() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [60, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.4, 1])

  return (
    <footer ref={ref} className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 pt-20 pb-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Leaf className="size-4" strokeWidth={2.2} />
              </span>
              <span className="font-heading text-lg font-semibold">
                {company.name}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-pretty leading-relaxed text-background/60">
              Produsen tepung tapioka premium dari singkong pilihan Lampung,
              melayani kebutuhan pangan dan industri sejak {company.founded}.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-background/40">
              Navigasi
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-background/70 transition-colors hover:text-background"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-background/40">
              Kontak
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-background/70">
              <li>{company.address}</li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-background"
                >
                  {company.email}
                </a>
              </li>
              <li>{company.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <motion.p
            style={{ y, opacity }}
            className="font-heading text-[clamp(2.5rem,13vw,11rem)] font-medium leading-[0.85] tracking-tight text-background"
          >
            Bukit Kencana Mas
          </motion.p>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-background/15 pt-6 text-sm text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. Seluruh hak cipta
            dilindungi.
          </p>
          <p>{company.location}</p>
        </div>
      </div>
    </footer>
  )
}
