'use client'

import { Reveal } from '@/components/reveal'
import { products } from '@/lib/site-data'

export function Products() {
  return (
    <section id="produk" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-primary" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Produk Kami
            </span>
          </div>
          <h2 className="mt-5 max-w-2xl font-heading text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-balance">
            Pati singkong untuk pangan &amp; industri
          </h2>
        </div>
        <p className="max-w-xs text-pretty text-muted-foreground">
          Tiga lini produk yang dirancang untuk memenuhi kebutuhan beragam
          pelanggan kami.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.1}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={p.image || '/placeholder.svg'}
                  alt={p.name}
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  crossOrigin="anonymous"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 font-mono text-xs text-foreground backdrop-blur-sm">
                  {p.id}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-2xl font-medium tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {p.en}
                </p>
                <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.specs.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
